import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="h-screen w-2/6 bg-background text-text fixed flex flex-col items-center justify-between pt-12 border-r-2 border-slate-200 ">
      <div className="flex flex-col items-center py-8">
        <h1 className="text-5xl font-bold mb-4 text-center text-heading">Dipson KC</h1>
        <h2 className="text-l mb-8 text-center text-text ">Computer Science Student 
        <br/> at
        <span className="hover:text-slate-100 cursor-pointer hover:animate-uofaColor font-semibold"> University of Arizona </span></h2>
      </div>
      <div className="flex flex-col items-center mb-8">
        <div className="flex space-x-4 mb-4">
          <a 
            href="https://github.com/diposn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110 text-slate-400 hover:text-slate-100"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a 
            href="https://linkedin.com/in/dipsonkc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110 text-slate-400 hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
