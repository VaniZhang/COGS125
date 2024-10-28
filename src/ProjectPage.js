// src/ProjectPage.js
import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="project-page">
      <header className="project-header">
        <h1>My Project</h1>
        <p>A brief description of your project goes here.</p>
      </header>

      <section className="project-description">
        <h2>About This Project</h2>
        <p>
          This is where you provide a detailed description of your project, its
          purpose, and what it aims to accomplish. Highlight the unique
          features and benefits.
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
        <p>&copy; 2024 Your Name or Company. All rights reserved.</p>
        <p>Contact: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      </footer>
    </div>
  );
};

export default ProjectPage;

