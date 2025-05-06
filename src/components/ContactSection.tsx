
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/50">
       <div className="container">
        <h2 className="section-title text-primary">Get In Touch</h2>
        <p className="section-subtitle text-muted-foreground">
          Have a project idea or just want to chat? Feel free to reach out!
        </p>
        
         <div className=" gap-12 max-w-5xl mx-auto">
          <div className="flex flex-row justify-center">
            <div className="mb-8">
              
              <div className="space-y-6">
                <a 
                  href="mailto:amanamals@gmail.com" 
                  className="flex items-center group"
                >
                  <div className="p-3 rounded-full bg-card border border-border/50 shadow-sm mr-4 group-hover:bg-primary group-hover:text-background transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/aman-s-9bb33b89/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="p-3 rounded-full bg-card border border-border/50 shadow-sm mr-4 group-hover:bg-primary group-hover:text-background transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/13Aman" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="p-3 rounded-full bg-card border border-border/50 shadow-sm mr-4 group-hover:bg-primary group-hover:text-background transition-colors">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
