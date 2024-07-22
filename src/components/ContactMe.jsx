import React from 'react';

const ContactMe = () => {
  return (
    <section className="bg-background py-20 md:px-20 lg:px-40  text-slate-200" >
      <div className="ml-64 max-w-md pb-16  text-sm text-slate-500">
        <p className="text-sm mb-4">
        Designed using uizard and coded in Visual Studio Code by yours truly. Built with React.js and Tailwind CSS, deployed with Vercel. </p>
        <p className="text-sm mb-4">
        Contact me via email at  <a href="mailto:dkc04@arizona.edu" className="text-cyan-700"><span className="hover:text-zinc-50">dkc04@arizona.edu</span></a></p>
        <p className="text-sm mb-4">
        You can also connect with me on  <a href="https://www.linkedin.com/in/dipsonkc" className="text-cyan-700" target="_blank" rel="noopener noreferrer" ><span className="hover:text-zinc-50">LinkedIN</span></a></p>
      </div>

    </section>
  );
};

export default ContactMe;
