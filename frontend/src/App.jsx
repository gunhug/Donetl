import { Toaster, toast } from "sonner";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Toaster />
      <button onClick={() => toast("hello")}>toeaster</button>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
