import React from 'react';
import { Project } from '../types';
import { X } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto animate-[fadeIn_0.3s_ease-out]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 md:top-12 md:right-12 z-50 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors text-white"
          aria-label="Close project"
        >
          <X size={24} />
        </button>

        <article>
          <div className="mb-12 pt-12 md:pt-20">
            <h1 className="text-5xl md:text-9xl font-['Space_Grotesk'] font-medium mb-6 tracking-tight text-white leading-none">
              {project.title}
            </h1>
            
            <div className="flex flex-col md:flex-row justify-between items-start border-t border-zinc-800 pt-8 mt-12 gap-12">
              <div className="md:w-1/3">
                 <p className="text-lg md:text-xl leading-relaxed text-zinc-300 font-medium">
                   {project.description}
                 </p>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                 <div>
                   <h4 className="text-zinc-500 mb-2 font-mono uppercase tracking-wider text-xs">Client</h4>
                   <p className="text-zinc-200">{project.client}</p>
                 </div>
                 <div>
                   <h4 className="text-zinc-500 mb-2 font-mono uppercase tracking-wider text-xs">Role</h4>
                   <ul className="space-y-1 text-zinc-200">
                     {project.role.map((r, i) => <li key={i}>{r}</li>)}
                   </ul>
                 </div>
                 <div>
                   <h4 className="text-zinc-500 mb-2 font-mono uppercase tracking-wider text-xs">Year</h4>
                   <p className="text-zinc-200">{project.year}</p>
                 </div>
                 <div>
                   <h4 className="text-zinc-500 mb-2 font-mono uppercase tracking-wider text-xs">Stack</h4>
                   <ul className="space-y-1 text-zinc-200">
                     {project.techStack.map((t, i) => <li key={i}>{t}</li>)}
                   </ul>
                 </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[50vh] md:h-[80vh] bg-zinc-900 overflow-hidden mb-20 md:mb-32 rounded-sm">
            <img 
              src={project.coverImage} 
              alt="Project Cover" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-32">
            <div className="md:col-span-4">
              <h3 className="text-2xl font-['Space_Grotesk'] mb-4 text-white">The Challenge</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-zinc-400 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </div>
          </div>

          {project.images.slice(0, 1).map((img, idx) => (
            <figure key={idx} className="mb-20 md:mb-32">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-auto bg-zinc-900 rounded-sm"
              />
              {img.caption && (
                <figcaption className="mt-4 text-zinc-500 font-mono text-sm text-center">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}

          <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-32">
            <div className="md:col-span-4">
              <h3 className="text-2xl font-['Space_Grotesk'] mb-4 text-white">The Solution</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-zinc-400 leading-relaxed text-lg">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-32">
            {project.images.slice(1).map((img, idx) => (
              <figure key={idx} className={img.fullWidth ? "md:col-span-2" : ""}>
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-auto bg-zinc-900 rounded-sm"
                />
                {img.caption && (
                  <figcaption className="mt-4 text-zinc-500 font-mono text-sm">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>

          <div className="bg-zinc-900 text-zinc-100 p-8 md:p-16 rounded-sm mb-20 border border-zinc-800">
            <div className="grid md:grid-cols-12 gap-8 items-start">
               <div className="md:col-span-4">
                  <h3 className="text-2xl font-['Space_Grotesk'] text-zinc-400">Impact & Results</h3>
               </div>
               <div className="md:col-span-8">
                  <p className="text-xl md:text-3xl leading-tight text-white">
                    {project.impact}
                  </p>
               </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-12 flex justify-center pb-20">
             <button onClick={onClose} className="text-lg hover:underline font-['Space_Grotesk'] text-zinc-400 hover:text-white transition-colors">
               Close Project
             </button>
          </div>
        </article>
      </div>
    </div>
  );
};