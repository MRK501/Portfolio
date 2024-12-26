import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import mail_icon from '../../assets/mail.svg';
import location_icon from '../../assets/location.svg';
import contact_icon from '../../assets/contact.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formData,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatusMessage('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          console.log('FAILED...', error);
          setStatusMessage('Failed to send message. Please try again.');
        }
      );
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
        <form onSubmit={handleSubmit} className="contact-right">
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
