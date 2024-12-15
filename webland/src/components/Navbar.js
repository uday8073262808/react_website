import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed-navbar">
      <div className="navbar-container">
        <div className="logo">WebLand</div>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
        
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;