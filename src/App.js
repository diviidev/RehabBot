import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login";
import ChatBot from "./Components/ChatBot";
import RehabReport from "./Components/RehabReport";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LoginPage />} />

        {/* ChatBot Page */}
        <Route path="/chatbot" element={<ChatBot />} />

        {/* Rehab Report Page */}
        <Route path="/rehabreport" element={<RehabReport />} />
      </Routes>
    </Router>
  );
};

export default App;
