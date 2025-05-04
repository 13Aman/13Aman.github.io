
import React from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "SpeakTheGlobe",
      overview: "An interactive AI map where users ask any geography or culture question by voice and get real-time spoken answers.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      features: [
        "AI-powered map UI",
        "Real-time speech recognition & synthesis",
        "Dynamic map overlays"
      ],
      technologies: [
        "React", "Google Maps API", "WebSockets", "Whisper API", "Text-to-Speech"
      ],
      challenges: "Building a scalable WebSocket server for bi-directional audio streaming; handling network jitter and audio buffering.",
      learnings: [
        "Optimized real-time pipelines",
        "Improved reliability with fallback codecs",
        "Enhanced WebSocket implementation"
      ]
    },
    {
      title: "Journal AI Diary (iOS)",
      overview: "A private, AI-driven digital diary that analyzes your entries and surfaces insights.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      features: [
        "Secure local storage",
        "NLP-powered sentiment analysis",
        "Auto-tags for themes/people"
      ],
      technologies: [
        "SwiftUI", "CoreML", "SpaCy", "Apple's CryptoKit"
      ],
      challenges: "On-device ML model integration under memory constraints; encrypting sensitive journal data.",
      learnings: [
        "Streamlined model quantization",
        "User-friendly UI patterns for privacy",
        "Efficient on-device storage"
      ]
    },
    {
      title: "Tivra",
      overview: "An AI tutor offering Socratic questioning, standard study explanations, and practice quizzes.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      features: [
        "Three learning modes (Socratic, Study, Practice)",
        "PDF upload & chat",
        "Progress analytics"
      ],
      technologies: [
        "Next.js", "FastAPI", "OpenAI GPT", "Weaviate", "Supabase"
      ],
      challenges: "Designing a robust RAG pipeline for Socratic questioning; balancing open-ended prompts with factual accuracy.",
      learnings: [
        "Fine-tuned prompt templates",
        "Best practices for document retrieval",
        "Enhanced educational UX patterns"
      ]
    },
    {
      title: "Latexpert",
      overview: "The world's first AI-powered LaTeX IDE with live preview, code completion, and citation management.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      features: [
        "Syntax-aware editor",
        "AI suggestions for equation formatting",
        "One-click PDF compile"
      ],
      technologies: [
        "Monaco editor", "Tectonic + BibTeX", "LangChain", "Rust"
      ],
      challenges: "Parsing complex LaTeX ASTs in real time; synchronizing editor state with PDF preview.",
      learnings: [
        "Efficient tree-sitter grammars",
        "Incremental compilation strategies",
        "Advanced editor state management"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Explore my recent work showcasing AI-powered solutions across various domains.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="animate-fade-in opacity-0" 
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
