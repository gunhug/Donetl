import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const TaskListPagination = ({
  handleNext,
  handlePrev,
  handlePageChange,
  currentPage,
  totalPages,
}) => {
  const generatePages = () => {
    const pages = [];

    if (totalPages <= 4) {
      // hiện toàn bộ
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (pages <= 2) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 1) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  const pagesToShow = generatePages();

  return (
    <div className="flex justify-center mt-4">
      <Pagination>
        <PaginationContent>
          {/* trang trước */}
          <PaginationItem>
            <PaginationPrevious
              onClick={currentPage === 1 ? undefined : handlePrev}
              className={cn(
                "cursor-pointer",
                currentPage === 1 && "pointer-events-none opacity-50",
              )}
            />
          </PaginationItem>

          {pagesToShow.map((p, index) => (
            <PaginationItem key={index}>
              {p === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  isActive={p === currentPage}
                  onClick={() => {
                    if (p !== currentPage) {
                      handlePageChange(p);
                    }
                  }}
                  className="cursor-pointer"
                >
                  {p}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* trang tiếp theo */}
          <PaginationItem>
            <PaginationNext
              onClick={currentPage === totalPages ? undefined : handleNext}
              className={cn(
                "cursor-pointer",
                currentPage === totalPages && "pointer-events-none opacity-50",
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TaskListPagination;
