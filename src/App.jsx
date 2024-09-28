import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frame11228 from "./pages/Frame11228.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frame11228 />} />
      </Routes>
    </Router>
  );
};

export default App;
