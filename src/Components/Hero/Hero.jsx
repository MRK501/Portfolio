import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpg';
import resume from '../../assets/Manali Khedekar CV.pdf'; // Assuming your resume is in the assets folder

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Manali_Khedekar_Resume.pdf'; // Optional: specify the download filename
    link.click();
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='hero' id='home'>
      <img src={profile} alt="Profile" />
      <h1><span>I'm Manali Khedekar,</span><br />Frontend Developer</h1>
      <p>I am a Frontend Developer and Tech Enthusiast with a passion for creating responsive and engaging user experiences.</p>
      <div className='hero-action'>
        <div className="hero-connect"onClick={scrollToContact}>
          Connect with Me
        </div>
        {/* Use button instead of anchor */}
        <button className="hero-resume" onClick={handleDownload}>My Resume</button>
      </div>
    </div>
  );
};

export default Hero;
