import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { ProjectList } from './components/ProjectList';
import { ProjectDetail } from './components/ProjectDetail';
import { About } from './components/About';
import { Project } from './types';
import { projects } from './data';

const App: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock body scroll when project is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeProject]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout onNavigate={(section) => scrollToSection(section)}>
      <div id="intro">
        <Hero />
      </div>
      
      <div id="work" className="pt-20">
        <ProjectList 
          projects={projects} 
          onProjectClick={setActiveProject} 
        />
      </div>

      <div id="about" className="pt-20 pb-20">
        <About />
      </div>

      {activeProject && (
        <ProjectDetail 
          project={activeProject} 
          onClose={() => setActiveProject(null)} 
        />
      )}
    </Layout>
  );
};

export default App;