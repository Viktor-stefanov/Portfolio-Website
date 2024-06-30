import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import WrongPage from "./components/WrongPage";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<WrongPage />} />
      </Route>
    </Routes>
  );
}

export default App;
