import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-grow">
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
};

export default App;
