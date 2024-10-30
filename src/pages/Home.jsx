// src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const images = [
  require('../assets/images/image1.jpg'),
  require('../assets/images/image2.jpg'),
  require('../assets/images/image3.jpg'),
  // Add more image URLs as needed
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  // Function to handle "Book Now" button click
  const handleBookNow = () => {
    navigate('/contact');
  };

  return (
    <>
      <section className="hero-section">
        <h1>Welcome to BelBaba Sound Service</h1>
        <p>Experience the best in DJ services with top-notch sound quality and lighting effects!</p>
        <button onClick={handleBookNow}>Book Now</button>
      </section>

      <div className="carousel">
        <button className="prev" onClick={prevImage}>
          &#10094; {/* Left arrow */}
        </button>
        <div className="carousel-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Service ${index + 1}`}
              className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <button className="next" onClick={nextImage}>
          &#10095; {/* Right arrow */}
        </button>
      </div>
    </>
  );
}

export default Home;
