import React from "react";
import "./About.css"; // Create a separate CSS file for About page styling
import profileImage from "./assets/profile.png"; // Replace with the path to your image

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-text">
          <h1>Vani Zhang</h1>
          <p>UCSD - Cognitive Science Design and Interaction</p>
          <p>Graphic Designer</p>
          <p>UX/UI Designer</p>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Vani Zhang" />
        </div>
      </div>
    </div>
  );
};

export default About;