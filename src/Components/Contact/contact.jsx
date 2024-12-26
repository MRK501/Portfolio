import React, { useState } from 'react';
import './contact.css';
import mail_icon from '../../assets/mail.svg';
import location_icon from '../../assets/location.svg';
import contact_icon from '../../assets/contact.svg';

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for status message
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form data change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage("Sending....");
    const form = new FormData(event.target);
    form.append("access_key", "f86d6fa2-0471-4566-af3f-f17b7e7d5898");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form
    });

    const data = await response.json();

    if (data.success) {
      setStatusMessage("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setStatusMessage(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Feel Free to Contact</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>manukhedekar501@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={contact_icon} alt="" />
              <p>+91 9284457363</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Miraj, Maharashtra</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message here.."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default Contact;
