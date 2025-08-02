
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com",
      color: "hover:text-gray-600 dark:hover:text-gray-400"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:uvindu.wijesinghe@example.com",
      color: "hover:text-red-500 dark:hover:text-red-400"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              Uvindu Wijesinghe
            </button>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Software Engineering Undergraduate
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 mx-auto"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Connect With Me
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-500 dark:text-gray-400 ${social.color} transition-colors duration-200 hover:scale-110 transform`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              © {currentYear} Uvindu Wijesinghe. Made with 
              <Heart size={16} className="text-red-500 mx-1" />
              and lots of coffee.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
