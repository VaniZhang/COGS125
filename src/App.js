// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectPage from "./ProjectPage"; // Home page component
import About from "./About";
import Features from "./Features";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navigation Links */}
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/features" className="nav-link">Features</Link>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<ProjectPage />} />  {/* Home page as default route */}
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
