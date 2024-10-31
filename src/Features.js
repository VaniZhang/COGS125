// src/Features.js
import React from "react";
import "./Features.css"; // Create or update this CSS file for styling

// Make sure to import your images correctly
import image1 from "./assets/image1.png";
import image2 from "./assets/Image2.png";
import image3 from "./assets/image3.png";

const Features = () => {
  return (
    <div className="features-page">
      <h1>My Art Works</h1>
      <div className="artwork-grid">
        <div className="artwork-item">
          <img src={image1} alt="Artwork 1" />
        </div>
        <div className="artwork-item">
          <img src={image2} alt="Artwork 2" />
        </div>
        <div className="artwork-item">
          <img src={image3} alt="Artwork 3" />
        </div>
      </div>
    </div>
  );
};

export default Features;