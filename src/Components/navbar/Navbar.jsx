import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='navbar'>
      {/* Hamburger Icon */}
      <div className='hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <ul className={`nav-menu ${menuOpen ? 'mobile' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#achievement">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>

      <div className="hero-connect"onClick={scrollToContact}>
          Connect with Me
        </div>
    </div>
  );
};

export default Navbar;
