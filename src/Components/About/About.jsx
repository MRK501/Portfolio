import React from 'react';
import './About.css';
import profile from '../../assets/profile.jpg';
import githubLogo from '../../assets/github.svg';
import leetcodeLogo from '../../assets/leetcode.svg';
import hackerrankLogo from '../../assets/hackerrank.svg';
import gfgLogo from '../../assets/gfg.svg'

const About = () => {
  // Project details in an array
  const projectList = [
    {
      title: 'Jubilee Girls School, Miraj',
      marks: '10th Percentage:95.80%',
      info: 'Achieved strong academic performance with a focus on Science and Mathematics.'
    },
    {
      title: 'Jubilee Junior College, Miraj',
      marks:'CET Score:98.79 percentile,12th Score:82.83%',
      info: 'Specialized in Pre-Engineering subjects with excellent grades.'
    },
    {
      title: 'Walchand College of Engineering, Sangli',
      description: 'Bachelor of Technology in Information Technology',
      marks: 'CGPA : 8',
      info: 'Graduating with a focus on software development, web technologies, and modern programming languages.'
    }
  ];

  // Coding profiles details
  const codingProfiles = [
    {
      name: 'GitHub',
      logo: githubLogo,
      link: 'https://github.com/MRK501'
    },
    {
      name: 'LeetCode',
      logo: leetcodeLogo,
      link: 'https://leetcode.com/u/MRK5/'
    },
    {
      name: 'HackerRank',
      logo: hackerrankLogo,
      link: 'https://www.hackerrank.com/your-profilehttps://www.hackerrank.com/profile/manukhedekar501'
    },
    {
      name: 'GFG',
      logo: gfgLogo,
      link: 'https://www.geeksforgeeks.org/user/manukhedxnfx/'
    }
  ];

  return (
    <div className="about" id='about'>
      {/* About Me Section */}
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I enjoy transforming concepts into clean, functional, and visually appealing designs. With a keen eye for detail and a passion for innovation, I strive to create seamless user experiences.
            </p>
            <p>
              I stay updated with the latest technologies to ensure modern and efficient solutions for every project.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="education">
        <h1 className="education-heading">EDUCATION</h1>
        <div className="education-container">
          {projectList.map((project, index) => (
            <div key={index} className="education-card">
              <div className="education-card-icon"></div>
              <div className="education-card-details">
                <h2 className="education-title">{project.title}</h2>
                <h3 className="education-subtitle">{project.description}</h3>
                <p className="education-date">{project.marks}</p>
                <p className="education-info">{project.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coding Profiles Section */}
      <div className="coding-profiles">
        <h1 className="coding-profiles-heading">CODING PROFILES</h1>
        <div className="coding-profiles-container">
          {codingProfiles.map((profile, index) => (
            <a key={index} href={profile.link} target="_blank" rel="noopener noreferrer" className="coding-profile-card">
              <img src={profile.logo} alt={`${profile.name} Logo`} className="coding-profile-logo" />
              <p className="coding-profile-name">{profile.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
