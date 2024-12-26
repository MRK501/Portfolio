import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="skill-icon" />,
      description: "The backbone of web structure and semantic content.",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="skill-icon" />,
      description: "Styling for beautiful, responsive web designs.",
    },
    {
      name: "React",
      icon: <FaReact className="skill-icon" />,
      description: "Dynamic front-end development with reusable components.",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="skill-icon" />,
      description: "Modern framework for server-side rendering and SEO.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="skill-icon" />,
      description: "NoSQL database for scalable, high-performance apps.",
    },
    {
      name: "SQL",
      icon: <SiMysql className="skill-icon" />,
      description: "Relational database management for structured data.",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="skill-icon" />,
      description: "Version control to track and manage code efficiently.",
    },
  ];

  return (
    <div className="skills-page"id="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
