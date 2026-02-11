import React from 'react';
import { Skill } from '../types';
import { Cpu, Code2, Database, Globe, Server } from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

const getIconForCategory = (category: string) => {
  const lower = category.toLowerCase();
  if (lower.includes('backend')) return <Code2 size={24} />;
  if (lower.includes('frontend')) return <Globe size={24} />;
  if (lower.includes('infrastructure')) return <Server size={24} />;
  if (lower.includes('data')) return <Database size={24} />;
  return <Cpu size={24} />;
};

const getColorForCategory = (category: string) => {
  const lower = category.toLowerCase();
  if (lower.includes('backend')) return 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400';
  if (lower.includes('frontend')) return 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400';
  if (lower.includes('infrastructure')) return 'bg-lime-100 text-lime-600 dark:bg-lime-900/30 dark:text-lime-400';
  if (lower.includes('data')) return 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400';
  return 'bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400';
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div>
       <div className="flex items-center gap-4 mb-12">
        <div className="p-4 bg-cyan-400 rounded-2xl text-slate-900 shadow-lg rotate-3">
          <Cpu size={28} strokeWidth={2.5} />
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Expertise</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup) => {
            const colorClass = getColorForCategory(skillGroup.category);
            return (
              <div 
                key={skillGroup.category} 
                className="bg-white dark:bg-slate-900/80 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
                    {getIconForCategory(skillGroup.category)}
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-bold border border-slate-100 dark:border-slate-700/50 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Skills;