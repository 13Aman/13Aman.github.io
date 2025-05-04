
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ProjectProps {
  title: string;
  overview: string;
  image: string;
  features: string[];
  technologies: string[];
  challenges: string;
  learnings: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  overview,
  image,
  features,
  technologies,
  challenges,
  learnings,
}) => {
  return (
    <Card className="overflow-hidden bg-card hover:shadow-lg transition-all duration-300 h-full flex flex-col border-border/50">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
          <h3 className="text-2xl font-bold text-background">{title}</h3>
        </div>
      </div>
      
      <CardContent className="pt-6 flex-grow">
        <p className="text-muted-foreground mb-6 font-medium italic">
          "{overview}"
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-bold mb-2 text-primary">KEY FEATURES</h4>
          <ul className="list-disc pl-5 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-foreground">{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-bold mb-2 text-primary">TECHNOLOGIES</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-secondary text-foreground">{tech}</Badge>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-bold mb-2 text-primary">CHALLENGES FACED</h4>
          <p className="text-sm text-muted-foreground">{challenges}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-bold mb-2 text-primary">KEY LEARNINGS & OUTCOMES</h4>
          <ul className="list-disc pl-5 space-y-1">
            {learnings.map((learning, index) => (
              <li key={index} className="text-sm text-foreground">{learning}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4 bg-muted/30">
        <Button variant="outline" size="sm" className="w-full border-primary/50 text-primary hover:bg-primary/5">View Project Details</Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
