
import React from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "Latexpert",
      overview: "The world's first AI-powered LaTeX IDE with live preview, code completion, and citation management.",
      image: "/latexpert.png",
      features: [
        "Syntax-aware editor",
        "AI suggestions for equation formatting",
        "One-click PDF compile"
      ],
      technologies: [
        "Codemirror editor", "TexLive", "LangChain", "LangGraph"
      ],
      challenges: "Parsing complex LaTeX ASTs in real time; synchronizing editor state with PDF preview.",
      learnings: [
        "Efficient tree-sitter grammars",
        "Incremental compilation strategies",
        "Advanced editor state management"
      ],
      link: "https://latexpert.io/"
    },
    {
      title: "Tivra",
      overview: "An AI tutor offering Socratic questioning, standard study explanations, and practice quizzes.",
      image: "/tivra.png",
      features: [
        "Three learning modes (Socratic, Study, Practice)",
        "PDF upload",
        "AI Chat"
      ],
      technologies: [
        "Next.js", "FastAPI", "OpenAI GPT", "Weaviate", "Supabase"
      ],
      challenges: "Designing a robust RAG pipeline for Socratic questioning; balancing open-ended prompts with factual accuracy.",
      learnings: [
        "Fine-tuned prompt templates",
        "Best practices for document retrieval",
        "Enhanced educational UX patterns"
      ],
      link: "https://tivra.io/"
    },
    {
      title: "SpeakTheGlobe",
      overview: "An interactive AI map where users ask any geography or culture question by voice and get real-time spoken answers.",
      image: "/speaktheglobe.png",
      features: [
        "AI-powered map UI",
        "Real-time speech recognition & synthesis",
        "Dynamic map overlays"
      ],
      technologies: [
        "React", "Google Maps API", "WebSockets", "OpenAI Realtime API"
      ],
      challenges: "Building a scalable WebSocket server for bi-directional audio streaming; handling network jitter and audio buffering.",
      learnings: [
        "Optimized real-time pipelines",
        "Improved reliability with fallback codecs",
        "Enhanced WebSocket implementation"
      ],
      link: "https://speaktheglobe.com/"
    },
    {
      title: "Journal AI Diary (iOS)",
      overview: "A private, AI-driven digital diary that analyzes your entries and surfaces insights.",
      image: "/journal.png",
      features: [
        "Secure local storage",
        "NLP-powered sentiment analysis",
        "Auto-tags for themes/people"
      ],
      technologies: [
        "Flutter", "CoreML", "SpaCy", "Firebase"
      ],
      challenges: "On-device Spacy integration under memory constraints",
      learnings: [
        "Streamlined model quantization",
        "User-friendly UI patterns for privacy",
        "Efficient on-device storage"
      ],
      link: "https://apps.apple.com/in/app/journal-ai-assistant/id6740695466"
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
