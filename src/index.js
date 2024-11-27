import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RehabReport from "./Components/RehabReport";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/RehabReport" element={<RehabReport />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
