import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <img
                src="/aboutp.jpg"
                alt="About Me"
                className="relative w-64 h-64 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl animate-float hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Passionate Software Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a dedicated Software Engineering student at SLIIT, currently in my 3rd year. 
              My journey in technology began with a curiosity about how things work, and it has 
              evolved into a passion for creating innovative solutions that make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in full-stack web development with a keen interest in artificial 
              intelligence and machine learning. I enjoy working with modern technologies and 
              frameworks to build scalable, user-friendly applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with fellow developers. I believe in 
              continuous learning and staying updated with the latest industry trends.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interests</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• AI & Machine Learning</li>
                  <li>• Full-Stack Development</li>
                  <li>• Open Source</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Hobbies</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Problem Solving</li>
                  <li>• Tech Blogging</li>
                  <li>• Gaming</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;