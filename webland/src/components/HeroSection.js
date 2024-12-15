import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section" id="home">
      <div className="hero-content">
        <h1>Welcome to WebLand</h1>
        <p>Discover innovative solutions that transform your digital experience</p>
        
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/vt0i6nuqNEo" 
            title="Hero Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <a href="#contact" className="cta-button">Get Started</a>
      </div>
    </div>
  );
};

export default HeroSection;