// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for Navbar

function Navbar() {
  const [isActive, setIsActive] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsActive(!isActive); // Toggle the active state
  };

  return (
    <>
      <nav className="navBar">
        <h1>BelBaba Sound Service</h1>
        <div className="toggle-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isActive ? 'active' : ''}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
