// src/ProjectPage.js
import React from "react";
import "./ProjectPage.css";
import myImage from "./assets/myapp-image.png";

const ProjectPage = () => {
  return (
    <div className="project-page">
      <header className="project-header">
        <h1>Vani's Portfolio</h1>
        <p>I am Vani Zhang. This is portfolio project website.</p>
      </header>

      <section className="project-description">
        <h2>About This Project</h2>
        <p>
          i made this poster</p><p>
          <img src={myImage} alt="My Project Poster" className="project-image" width="500" /> 
        </p>
      </section>

      <section className="project-features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1: Description of feature 1</li>
          <li>Feature 2: Description of feature 2</li>
          <li>Feature 3: Description of feature 3</li>
        </ul>
      </section>

      <footer className="project-footer">
        <p>&copy; 2024 Vanibulla. All rights reserved.</p>
        <p>Contact: <a href="ruz053@ucsd.edu">your.email@example.com</a></p>
      </footer>
    </div>
  );
};

export default ProjectPage;

