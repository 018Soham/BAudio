import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Proprietors: Murari Mohan Ghosh & Manas Ghosh</h3>
        <div className="contact-details">
          <p>Contact Details:</p>
          <p>
            Phone: <a href="tel:9635670373">9635670373</a>
          </p>
          <p>
            WhatsApp: <a href="https://wa.me/9932917728" target="_blank" rel="noopener noreferrer">9932917728</a>
          </p>
          <p>
            Address: Kankabati, Bankura, Pin: 722141
          </p>
        </div>
        <div className="google-map">
          <h4>Find Us Here:</h4>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15051.396120678083!2d87.07902584517322!3d23.32368765304583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a01601856c5c4b7%3A0x30f4be63174cc9d3!2sKankabati%2C%20West%20Bengal%20722141!5e0!3m2!1sen!2sin!4v1697447749340!5m2!1sen!2sin"
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Google Map Locator"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
