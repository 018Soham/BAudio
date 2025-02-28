import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "../pages/Home.css";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";

const images = [image1, image2, image3, image4];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hero-section">
      <h2>Welcome to Our Website</h2>
      <p className="crystal-text">✨ Crystal Clear Perfection!! ✨</p> {/* Added statement */}
      <div className="carousel">
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
          ))}
        </div>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
      <button className="book-now" onClick={() => navigate("/contact")}>Book Now</button> {/* Book Now Button */}
    </div>
  );
};

export default Home;
