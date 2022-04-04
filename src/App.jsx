
import ReactDOM from "react-dom";
import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Mounting from "./components/Mounting.jsx";
import Unmounting from "./components/Unmounting.jsx";
import Updating from "./components/Updating.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar title="Component Life Cycle" />}>
          <Route path="/mounting" element={<Mounting />} />
          <Route path="/unmounting" element={<Unmounting  />} />
          <Route path="/updating" element={<Updating  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));