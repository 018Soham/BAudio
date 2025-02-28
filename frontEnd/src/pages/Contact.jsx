import React, { useState } from 'react';
import { init, send } from 'emailjs-com';
import './Contact.css'; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

// Initialize EmailJS with your user ID
init("lVEc5lLUpu0uwMCaa"); // Replace with your actual user ID

function Contact() {
  const [formData, setFormData] = useState({
    event_name: '',
    name: '',
    phone: '',
    email: '',
    event_date: '',
    event_time: '',
  });

  const [showPopup, setShowPopup] = useState(false); // State to control the popup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    send('service_hmvv98r', 'template_sq0mhe7', formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowPopup(true); // Show the popup on success
        setFormData({ // Reset form fields
          event_name: '',
          name: '',
          phone: '',
          email: '',
          event_date: '',
          event_time: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" name="event_name" value={formData.event_name} onChange={handleChange} required />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Event Date:
          <input type="date" name="event_date" value={formData.event_date} onChange={handleChange} required />
        </label>
        <label>
          Event Time:
          <input type="time" name="event_time" value={formData.event_time} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Icons for WhatsApp and Call */}
      <div className="contact-info">
        <a href="https://wa.me/9932917728" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <i className="fab fa-whatsapp"></i> 9932917728
        </a>
        <a href="tel:9932917728" className="contact-icon">
          <i className="fas fa-phone-alt"></i> 9932917728
        </a>
      </div>

      {/* Popup Component */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Thank You for Choosing BelBaba Sound Service!</h2>
            <p>We will be back soon.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
