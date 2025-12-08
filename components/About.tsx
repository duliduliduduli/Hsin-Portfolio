import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="max-w-5xl pt-12 border-t border-zinc-800">
      <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-12">About Me</h2>

      <div className="grid md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-7 space-y-8 text-lg md:text-xl leading-relaxed text-zinc-400">
          <p>
            I’m a Product Designer with a background in UX/UI and product management. 
            I specialize in simplifying complex financial concepts into intuitive digital experiences, designing and shipping DeFi products for both institutional clients and individual users.
          </p>
          <p>
            At <a href="https://app.obligate.com/marketplace" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white underline decoration-zinc-600 hover:decoration-white underline-offset-4 transition-colors">Obligate</a>, I own the entire design lifecycle, collaborating directly with engineering to build tokenized RWA infrastructure. 
            I also drive the design direction for <a href="https://www.app.margarita.finance" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white underline decoration-zinc-600 hover:decoration-white underline-offset-4 transition-colors">Margarita Finance</a>, our B2C structured-yield product.

          </p>
          <p>
            My work blends refined UI craft with strategic product thinking. I enjoy breaking down complexity, creating scalable systems, and working cross-functionally to bring high-quality products to life.   
          </p>
          
          <p>
            Based in Basel, Switzerland. When I’m not designing, you’ll find me out in nature.
          </p>

          <div className="pt-8">
            <h3 className="text-white font-['Space_Grotesk'] text-2xl mb-4">Core skills</h3>
            <ul className="grid grid-cols-2 gap-4 font-mono text-sm text-zinc-500">
              <li>Product Strategy</li>
              <li>Design Systems</li>
              <li>DeFi Protocols</li>
              <li>Data Visualization</li>
              <li>User Research</li>
              <li>Frontend Dev (React)</li>
            </ul>
          </div>

          <div className="pt-8 pb-24">
             <div>
            <h3 className="text-white font-['Space_Grotesk'] text-2xl mb-4">Experiences</h3>
               <ul className="space-y-4 text-sm">
                 <li className="flex justify-between border-b border-zinc-800 pb-2">
                   <span className="text-zinc-200">Product Manager & UX/UI Designer</span>
                   <span className="text-zinc-500">2025.03 - Present</span>
                 </li>
                 <li className="flex justify-between border-b border-zinc-800 pb-2">
                   <span className="text-zinc-200">Product Designer </span>
                   <span className="text-zinc-500">2022.08 - Present</span>
                 </li>
                  <li className="flex justify-between border-b border-zinc-800 pb-2">
                   <span className="text-zinc-200">UX/UI Designer & Quality Assurance</span>
                   <span className="text-zinc-500">2022.08 - 2022.11</span>
                 </li>
                 <li className="flex justify-between border-b border-zinc-800 pb-2">
                   <span className="text-zinc-200">Quality Assurance & Programming Intern </span>
                   <span className="text-zinc-500">2021.04 - 2022.07</span>
                 </li>
               </ul>
             </div>
           </div>
           
        </div>

        <div className="md:col-span-5">
           <img 
             src="/Pini img.png"
             alt="Hsin Chang" 
             className="w-full h-auto grayscale contrast-125 mb-8 rounded-sm opacity-80 hover:opacity-100 transition-opacity"
           />
           
        </div>
      </div>
    </section>
  );
};