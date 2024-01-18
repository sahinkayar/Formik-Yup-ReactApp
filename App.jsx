import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Portal from "./Components/Portal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portal" element={<Portal />} />
        <Route />
      </Routes>{" "}
    </>
  );
}

export default App;
