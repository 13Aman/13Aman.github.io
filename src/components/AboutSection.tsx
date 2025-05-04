
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Flutter", "React/Next.js", "FastAPI", "LangChain", 
    "Supabase", "WebSockets", "Real-time Voice Interfaces", 
    "LaTeX Compiling", "Firebase"
  ];

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container">
        <h2 className="section-title text-primary">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card hover:shadow-lg transition-shadow border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="p-2 rounded-md bg-primary/10 mr-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Background</h3>
                  <p className="text-muted-foreground">
                    B.Tech graduate from IIT Delhi (Class of 2020) with a passion for building AI-driven applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card hover:shadow-lg transition-shadow border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="p-2 rounded-md bg-primary/10 mr-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Expertise</h3>
                  <p className="text-muted-foreground">
                    Full-stack web development, AI/ML solutions, and creating intuitive voice user interfaces.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card hover:shadow-lg transition-shadow border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start mb-4">
                <div className="p-2 rounded-md bg-primary/10 mr-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Career Goals</h3>
                  <p className="text-muted-foreground">
                    Dedicated to creating human-centered AI solutions that solve real-world problems and improve daily life.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-card rounded-lg p-8 shadow-sm border border-border/50">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Core Skills</h3>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
