import React from "react";
import './Projects.css';
const Projects = () => {
  const projectsData = [
    {
      title: "Project 1",
      imageSrc: "Images/Project.png",
      description: "Description for Project 1",
      skills: ["Skill 1", "Skill 2", "Skill 3"],
      demo: "https://demo1.com",
      source: "https://source1.com",
    },
    {
      title: "Project 2",
      imageSrc: "Images/Project.png",
      description: "Description for Project 2",
      skills: ["Skill 4", "Skill 5", "Skill 6"],
      demo: "https://demo2.com",
      source: "https://source2.com",
    },
  
  ];

  const ProjectCard = ({ title, imageSrc, description, skills, demo, source }) => {
    return (
      
      <div className="project-card">
        <img
          src={imageSrc}
          alt={`Image of ${title}`}
          className="project-image"
        />
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <ul className="project-skills">
          {skills.map((skill, id) => {
            return (
              <li key={id} className="project-skill">
                {skill}
              </li>
            );
          })}
        </ul>
        <div className="project-links">
          <a href={demo} className="project-link">
            Demo
          </a>
          <a href={source} className="project-link">
            Source
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
    <div className="project-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, id) => {
          return <ProjectCard key={id} {...project} />;
        })}
      </div>
      </div>
    </>
  );
};

export default Projects;
