import React from 'react';
import { Project } from '../types';

interface ProjectListProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, onProjectClick }) => {
  return (
    <section className="relative">
      <div className="flex items-end justify-between mb-12 border-b border-zinc-800 pb-4">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Selected Work</h2>
        <span className="text-sm font-mono text-zinc-600">0{projects.length}</span>
      </div>

      <div className="space-y-20 md:space-y-32">
        {projects.map((project) => (
          <article 
            key={project.id}
            className="group cursor-pointer block"
            onClick={() => onProjectClick(project)}
          >
            {/* Fixed/Static Image Layout - always visible */}
            <div className="w-full aspect-video md:aspect-[2.35/1] overflow-hidden bg-zinc-900 mb-6 md:mb-8 border border-zinc-800/50 relative">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
               <img 
                 src={project.coverImage} 
                 alt={project.title}
                 className="w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
               />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-zinc-900 pb-10">
               <div className="space-y-3 max-w-2xl">
                 <h3 className="text-3xl md:text-6xl font-['Space_Grotesk'] font-medium text-white group-hover:text-zinc-300 transition-colors">
                   {project.title}
                 </h3>
                 <p className="text-zinc-500 text-lg leading-relaxed line-clamp-2 md:line-clamp-none">
                   {project.description}
                 </p>
               </div>

               <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2 text-zinc-500 font-mono text-sm uppercase tracking-wider text-right shrink-0">
                 <span className="text-zinc-300">{project.category}</span>
                 <span>{project.year}</span>
               </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};