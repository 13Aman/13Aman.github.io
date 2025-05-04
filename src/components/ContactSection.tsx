
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="w-full bg-muted border-border/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
                  Your Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-muted border-border/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Hello Aman, I'd like to discuss..." 
                  className="w-full min-h-[150px] bg-muted border-border/50"
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Connect With Me</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:aman.singh@example.com" 
                  className="flex items-center group"
                >
                  <div className="p-3 rounded-full bg-card border border-border/50 shadow-sm mr-4 group-hover:bg-primary group-hover:text-background transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">aman.singh@example.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="p-3 rounded-full bg-card border border-border/50 shadow-sm mr-4 group-hover:bg-primary group-hover:text-background transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-muted-foreground">linkedin.com/in/amansingh</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="p-3 rounded-full bg-card border border-border/50 shadow-sm mr-4 group-hover:bg-primary group-hover:text-background transition-colors">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <p className="text-muted-foreground">github.com/amansingh</p>
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
