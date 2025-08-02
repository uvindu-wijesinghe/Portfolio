
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Gym Management System",
      description: "Developed a custom web application for a well-known gym in Matara based on their specific requirements, enabling efficient gym management including member registration, equipment tracking, supply maintenance, and supplier management",
      image: "/gymh.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      github: "https://github.com/uvindu-wijesinghe/Gym_Management",
      demo: "#",
      featured: true
    },
    {
      title: "Online Advertising Agency",
      description: "A responsive web with user Authentication , frontend backend integration, and real-time analytics.",
      image: "/adven.jpg",
      tech: ["Php","Mysql","Css"],
      github: "https://github.com/uvindu-wijesinghe/advertising_agency",
      demo: "#",
      featured: true
    },
    {
      title: "Financial Tracking App",
      description: "DesignedanddevelopedapersonalfinancemanagementAndroidappwithincome/expense tracking, budgeting, and spending insights. Includes smart notifications, data persistence, and optional backup/restore functionality.",
      image: "/finance.jpg",
      tech: ["Kotlin","Android"],
      github: "https://github.com/uvindu-wijesinghe/Financial-App",
      demo: "#",
      featured: false
    },
    
    {
      title: " Boat Rental",
      description: "Developed a feature-rich mobile boat rental application, offering users the ability to browse andreserve boats with ease. Key features include a wishlist for favorite boats,abookingcart, real-time order/trip tracking, secure user authentication.",
      image: "/boat.jpg",
      tech: ["Kotlin","Android"],
      github: "https://github.com/uvindu-wijesinghe/Boat_Rental_App",
      demo: "#",
      featured: true
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
