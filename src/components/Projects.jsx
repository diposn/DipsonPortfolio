import React from 'react';
import uArizona from '../assets/uarziona.png'; 
import calApp from '../assets/calApp.png'; 
import comingSoon from '../assets/comingSoon.png';
import noteTaker from '../assets/noteTaker.png'
import { FaCogs } from "react-icons/fa";
import { BsStars } from "react-icons/bs";


const projects = [
    {
      name: 'UArizona Guide',
      description: 'A comprehensive course guide helper website designed to assist students at the University of Arizona in planning their academic journey. The website allows users to select their desired major and generates a personalized four-year course planner.',
      imageUrl: uArizona,
      technologies: ['ReactJS', 'Java', 'AWS', 'Angular', 'PostgreSQL'],
    },
    {
      name: 'Calendar App',
      description: 'A comprehensive calendar management application designed to enhance productivity and streamline the organization of events. An application that features a user-friendly interface that offers a monthly calendar view, allowing users to effortlessly navigate through different months and view their schedules at a glance.',
      imageUrl: calApp,
      technologies: ['ReactJS', 'NodeJS', 'Calendar API', 'Electron'],
    },
    {
      name: 'Finance Tracker',
      description: 'Developed a ReactJS web interface for tracking financial transactions and balances. Implemented secure backend logic using NodeJS for user authentication and data processing. Integrated Plaid API for transaction analysis and financial report generation, ensuring data privacy through advanced encryption techniques.',
      imageUrl: comingSoon,
      technologies: ['ReactJS', 'NodeJS', 'AWS', 'Plaid API', 'Java', 'SQL'],
      finished: 'Project in Development',
    },
    {
      name: 'NoteSync',
      description: ' A robust and user-friendly note-taking application. Features include advanced text formatting, image attachments, task lists, and tag-based organization. The app offers real-time collaboration, intuitive navigation, and customizable themes, providing a personalized and efficient user experience.',
      imageUrl: noteTaker,
      technologies: ['ReactJS', 'NodeJS', 'PostgreSQL', 'AWS', 'Redux'],
      finished: 'Project in Development',
    },

  ];
  
  const Projects = () => {
    return (
      <section className="py-10 px-6 md:px-20 lg:px-40 bg-background text-foreground text-slate-300 ml-24">
        <p className="text-md font-semibold mb-8 ml-8 hover:animate-rainbow cursor-pointer">Projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="max-w-md bg-card p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-lightBg">
              <img src={project.imageUrl} alt={project.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold text-heading">{project.name}</h3>
                <p className="text-sm font-thin">
                  {project.finished ? <FaCogs className='text-orange-500'/> : <BsStars className='text-yellow-300'/>}
                </p>
              </div>
              <p className="text-lg mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 border border-border rounded text-sm">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;