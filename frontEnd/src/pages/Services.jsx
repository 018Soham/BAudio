// src/pages/Services.jsx

import React from 'react';
import './Services.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

// Import images
import santiNanthImage from '../assets/images/d.jpeg'; // Replace with your actual image path
import groceryImage from '../assets/images/l.jpeg'; // Replace with your actual image path
import ghoshMedicalImage from '../assets/images/medical.jpeg'; // Replace with your actual image path

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>

      {/* Card for SantiNanth Decorators */}
      <div className="service-card">
        <img
          src={santiNanthImage} // Use the imported image
          alt="SantiNanth Decorators"
          className="service-image"
        />
        <h2>SantiNanth Decorators</h2>
        <p>Professional Light Decorators for all occasions.</p>
        <p>Proprietor: Manas Kumar Ghosh</p>
        <p>
          Contact: 
          <FontAwesomeIcon icon={faPhone} className="phone-icon" /> 
          <a href="tel:9932917728"> 9932917728</a>
        </p>
      </div>

      {/* Card for Lakshmi Narayan Bhandar */}
      <div className="service-card">
        <img
          src={groceryImage} // Use the imported image
          alt="Lakshmi Narayan Bhandar"
          className="service-image"
        />
        <h2>Lakshmi Narayan Bhandar</h2>
        <p>Grocery Items Available at Wholesale Rates.</p>
        <p>Proprietor: Joydev Ghosh and Brothers</p>
        <p>
          Contact: 
          <FontAwesomeIcon icon={faPhone} className="phone-icon" /> 
          <a href="tel:9635670373"> 9635670373</a>
        </p>
      </div>

      {/* Card for Ghosh Medical */}
      <div className="service-card">
        <img
          src={ghoshMedicalImage} // Use the imported image
          alt="Ghosh Medical"
          className="service-image"
        />
        <h2>Ghosh Medical</h2>
        <p>Quality Medicines and Healthcare Products.</p>
        <p>Doctor(R.M.P): Sarat Chandra Ghosh</p>
        <p>
          
        Contact: 
        <FontAwesomeIcon icon={faPhone} className="phone-icon" /> 
        <a href="tel:9635772485"> 9635772485</a>
        </p>
      </div>

    </div>
  );
}

export default Services;
