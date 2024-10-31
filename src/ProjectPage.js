// src/ProjectPage.js
import React from "react";
import "./ProjectPage.css";
import myImage from "./assets/myapp-image.png";

const ProjectPage = () => {
  return (
    <div className="project-page">
      <header className="project-header">
        <h1>Vani's Portfolio</h1>
      </header>

      <section className="project-description">
        <h2>Dive in this DREAM with me</h2>
        <p>
          <img src={myImage} alt="My Project Poster" className="project-image" width="400" /> 
        </p>
      </section>

      <footer className="project-footer">
        <p>&copy; 2024 Vanibulla. All rights reserved.</p>
        <p>Contact: <a href="ruz053@ucsd.edu">ruz053@ucsd.edu</a></p>
      </footer>
    </div>
  );
};

export default ProjectPage;

