import React from 'react';
import { Education as EducationType, Certificate } from '../types';
import { GraduationCap, Award } from 'lucide-react';

interface EducationProps {
  education: EducationType[];
  certificates: Certificate[];
}

const Education: React.FC<EducationProps> = ({ education, certificates }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Education Column */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-lime-400 rounded-2xl text-slate-900 shadow-md -rotate-2">
            <GraduationCap size={26} strokeWidth={2.5} />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900/80 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:rotate-1">
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{edu.degree}</h3>
              <p className="text-lime-600 dark:text-lime-400 font-bold text-lg mb-1">{edu.institution}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Column */}
      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-orange-400 rounded-2xl text-slate-900 shadow-md rotate-2">
            <Award size={26} strokeWidth={2.5} />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Certificates</h2>
        </div>

        <div className="space-y-6">
          {certificates.map((cert, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900/80 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-rotate-1">
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{cert.name}</h3>
              <p className="text-orange-600 dark:text-orange-400 font-bold text-lg mb-1">{cert.issuer}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;