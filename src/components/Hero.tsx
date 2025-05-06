
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 pt-24">
        <div className="flex flex-col justify-center order-2 lg:order-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Aman Singh</span> – <br />
            <span className="text-accent">Full Stack AI Developer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Crafting intelligent digital experiences with expertise in full-stack web development, 
            AI/ML solutions, and real-time voice interfaces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="#projects">View My Work</a>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center items-center order-1 lg:order-2 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-primary/20"></div>
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary/30">
              <img 
                src="/aman.png" 
                alt="Aman Singh - AI Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
