import React from 'react';
import { Experience as ExperienceType } from '../types';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="relative">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-4 bg-yellow-400 rounded-2xl text-slate-900 shadow-lg -rotate-3">
          <Briefcase size={28} strokeWidth={2.5} />
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Work Experience</h2>
      </div>

      <div className="space-y-16 timeline-line relative pl-8 md:pl-0">
        {experience.map((job) => (
          <div key={job.id} className="relative group">
            {/* Timeline dot */}
            <div className="absolute left-[-29px] md:left-0 md:-translate-x-[11px] top-1.5 w-[22px] h-[22px] rounded-full border-[4px] border-white dark:border-slate-950 bg-yellow-400 z-10 shadow-md group-hover:scale-150 transition-transform duration-300"></div>
            
            <div className="md:pl-10">
              <div className="bg-white dark:bg-slate-900/80 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-slate-700 dark:text-slate-300 font-semibold text-lg">
                      <span>{job.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-bold text-slate-700 dark:text-slate-300">
                      <Calendar size={14} />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 font-medium">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                  </div>
                </div>

                <div className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                  {job.description}
                  
                  {job.projects && (
                    <div className="mt-6 space-y-4">
                      {job.projects.map((project, idx) => (
                        <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border-l-4 border-cyan-400">
                          <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">{project.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {job.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg border-2 border-slate-100 dark:border-slate-700 hover:border-yellow-400 dark:hover:border-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;