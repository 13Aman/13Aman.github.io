
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary/95 text-background py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold">Aman Singh</p>
            <p className="text-sm text-background/80">AI Developer & Full Stack Engineer</p>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Aman Singh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
