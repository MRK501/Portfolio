import React from "react";
import "./Projects.css";
import pgImage from "../../assets/pg-app.jpg"; // Replace with the actual image path
import siddhivinayakImage from "../../assets/siddhivinayak-website.png"; // Replace with the actual image path
import acmImage from "../../assets/wce-acm-website.png"; // Replace with the actual image path

const Projects = () => {
  const projects = [
    {
      title: "PG App",
      description:
        "A mobile application for finding and managing Paying Guest accommodations with advanced filtering options, real-time availability, and booking management.",
      image: pgImage,
      githubLink: "https://github.com/vidyadhardinde001/CNmain",
    },
    {
      title: "Siddhivinayak Engineers Website",
      description:
        "A professional website designed for Siddhivinayak Engineers to showcase services, projects, and contact details with a modern, responsive layout.",
      liveLink: "https://siddhivinayakengineers.co.in/",
      githubLink: "https://github.com/vidyadhardinde001/SDofficial",
      image: siddhivinayakImage,
    },
    {
      title: "WCE ACM Website",
      description:
        "The official website for WCE ACM Student Chapter, featuring event updates, resources, and member information for the tech community.",
      liveLink: "https://pranav0786.github.io/ACM-Hackathon-Project/",
      githubLink: "https://github.com/Pranav0786/ACM-Hackathon-Project",
      image: acmImage,
    },
  ];

  return (
    <div className="projects-page"id="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.video ? (
              <video
                src={project.video}
                controls
                className="project-video"
                alt={project.title}
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            )}
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-buttons">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button live-link"
                >
                  Visit Website
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button github-link"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
