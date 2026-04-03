import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import AddTask from "@/components/AddTask";
import StatsAndFilters from "@/components/StatsAndFilters";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";
import DateTimeFilter from "@/components/DateTimeFilter";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const HomePage = () => {
  const [taskBuffer, setTaskBuffer] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);


  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/tasks");
      const data = await res.json();
      setTaskBuffer(data.tasks);
      console.log("Fetched tasks:", data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);

      toast.error("Failed to fetch tasks. Please try again later."); // Show error toast
    }
  };
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      <div className="container pt-8 mx-auto relative z-10">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          {/* đầu trang */}
          <Header />

          {/* tạo nhiệm vụ */}
          <AddTask />

          {/* Thống kê và bộ lọc */}
          <StatsAndFilters />

          {/* Danh sách nhiệm vụ */}
          <TaskList />

          {/* Phân trang và lọc theo date */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination />
            <DateTimeFilter />
          </div>

          {/* Chân trang */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
