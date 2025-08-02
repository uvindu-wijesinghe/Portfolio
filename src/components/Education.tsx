import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const education = [
    {
      degree: "BSc (Hons) in Information Technology",
      specialization: "Specializing in Software Engineering",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2023 - Present",
      description: "Specializing in Software Engineering with hands-on experience in full-stack development, Mobile application development and project management.",
      status: "current"
    },
    {
      degree: "Secondary Education",
      institution: "ST Thomas College Matara",
      period: "2008 - 2022",
      description: "G.C.E. Advanced Level (Physical Science Stream)",
      status: "completed"
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg transform hover:scale-110 transition-all duration-300">
            <BookOpen className="text-white" size={32} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-4 animate-fade-in">
            Education & Qualifications
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 animate-slide-up">
            Here is a summary of my academic qualifications and achievements
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full transform scale-x-0 animate-scale-x"></div>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 dark:from-blue-800 dark:via-indigo-700 dark:to-purple-800 animate-draw-line"></div>
          
          <div className="space-y-12">
            {education.map((eduItem, index) => (
              <div 
                key={index} 
                className={`relative pl-20 transform transition-all duration-700 ${
                  index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
                style={{animationDelay: `${index * 0.3}s`}}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                    eduItem.status === 'current' 
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse-soft' 
                      : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                  } ${hoveredIndex === index ? 'scale-110 rotate-3' : 'hover:scale-105'}`}>
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  
                  {/* Status Indicator */}
                  {eduItem.status === 'current' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50 transform transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'scale-105 shadow-2xl bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800' 
                    : 'hover:shadow-lg hover:-translate-y-2'
                }`}>
                  
                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 transform transition-all duration-300 ${
                        hoveredIndex === index ? 'translate-x-2 text-blue-600 dark:text-blue-400' : ''
                      }`}>
                        {eduItem.degree}
                      </h3>
                      
                      {eduItem.specialization && (
                        <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 px-4 py-2 rounded-full mb-3">
                          <Award className="text-blue-600 dark:text-blue-400 mr-2" size={16} />
                          <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">
                            {eduItem.specialization}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className={`flex items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full transform transition-all duration-300 ${
                      hoveredIndex === index ? 'scale-105 bg-blue-100 dark:bg-blue-900/30' : ''
                    }`}>
                      <Calendar className="text-gray-500 dark:text-gray-400 mr-2" size={16} />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {eduItem.period}
                      </span>
                    </div>
                  </div>
                  
                  {/* Institution */}
                  <div className="flex items-center mb-4">
                    <MapPin className="text-gray-400 mr-3" size={18} />
                    <h4 className={`text-lg font-semibold text-gray-700 dark:text-gray-300 transform transition-all duration-300 ${
                      hoveredIndex === index ? 'translate-x-1' : ''
                    }`}>
                      {eduItem.institution}
                    </h4>
                  </div>
                  
                  {/* Description */}
                  <p className={`text-gray-600 dark:text-gray-400 leading-relaxed transform transition-all duration-300 ${
                    hoveredIndex === index ? 'translate-x-2' : ''
                  }`}>
                    {eduItem.description}
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className={`mt-6 flex space-x-2 transform transition-all duration-500 ${
                    hoveredIndex === index ? 'translate-x-4' : ''
                  }`}>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes draw-line {
          from { height: 0; }
          to { height: 100%; }
        }
        
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out 0.5s forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-draw-line {
          animation: draw-line 2s ease-out 1s forwards;
          height: 0;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Education;