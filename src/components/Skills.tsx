import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [loaded, setLoaded] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);

  // Original colors for icons and labels remain unchanged.
  const skills = [
    { letter: 'R', name: 'React', level: 90, category: 'frontend', color: 'bg-blue-500' },
    { letter: 'T', name: 'Tailwind CSS', level: 95, category: 'frontend', color: 'bg-pink-500' },
    { letter: 'J', name: 'JavaScript', level: 90, category: 'frontend', color: 'bg-yellow-500' },
    { letter: 'H', name: 'HTML', level: 95, category: 'frontend', color: 'bg-orange-500' },
    { letter: 'C', name: 'CSS', level: 95, category: 'frontend', color: 'bg-blue-400' },
    { letter: 'N', name: 'Node.js', level: 85, category: 'backend', color: 'bg-green-500' },
    { letter: 'E', name: 'Express', level: 80, category: 'backend', color: 'bg-gray-500' },
    { letter: 'P', name: 'Python', level: 85, category: 'backend', color: 'bg-blue-600' },
    { letter: 'M', name: 'MongoDB', level: 80, category: 'database', color: 'bg-green-400' },
    { letter: 'S', name: 'MySQL', level: 75, category: 'database', color: 'bg-blue-700' },
    { letter: 'G', name: 'Git', level: 85, category: 'tools', color: 'bg-orange-600' },
    { letter: 'D', name: 'Docker', level: 70, category: 'tools', color: 'bg-blue-300' }
  ];

  const tools = [
    "React", "Node.js", "MongoDB", "Express", "Java", "Python", 
    "Tailwind", "Git", "TypeScript", "MySQL", "Docker", "AWS"
  ];

  // Original category colors and borders.
  const categories = [
    { name: 'Frontend', color: 'from-blue-500 to-pink-500', border: 'border-blue-500' },
    { name: 'Backend', color: 'from-green-500 to-blue-600', border: 'border-green-500' },
    { name: 'Database', color: 'from-green-400 to-blue-700', border: 'border-green-400' },
    { name: 'Tools', color: 'from-orange-500 to-blue-300', border: 'border-orange-500' }
  ];

  useEffect(() => {
    // Trigger loading animation
    setTimeout(() => setLoaded(true), 100);

    // Animate each skill from 0 to its level
    const animateSkills = skills.map(skill => ({ ...skill, animatedLevel: 0 }));
    setAnimatedSkills(animateSkills);

    const animationDuration = 1500; // 1.5 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);

      const updatedSkills = skills.map(skill => ({
        ...skill,
        animatedLevel: Math.floor(progress * skill.level)
      }));

      setAnimatedSkills(updatedSkills);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="mb-16 space-y-8">
          {categories.map((category, catIndex) => (
            <div 
              key={catIndex}
              className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border-l-4 ${category.border} transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${catIndex * 100 + 200}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
                  {category.name} Development
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {animatedSkills
                  .filter(skill => skill.category === category.name.toLowerCase())
                  .map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 transition-all duration-500 hover:scale-[1.02]"
                    >
                      <div className={`w-10 h-10 rounded-full ${skill.color} flex items-center justify-center text-white font-bold shadow-md transition-all duration-300 hover:scale-110`}>
                        {skill.letter}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400 font-mono">{skill.animatedLevel}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                          {/* PROGRESS BAR: unified fill color (bg-blue-500) */}
                          <div 
                            className="h-2.5 rounded-full bg-blue-500 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.animatedLevel}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Always Learning Section */}
        <div 
          className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg mb-16 border-l-4 border-yellow-500 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
              Always Learning
            </span>
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            I am continuously expanding my technical expertise and staying current with emerging technologies. 
            My current focus includes advanced React patterns, Java development, and cloud-native architecture.
          </p>
        </div>

        {/* Technologies I Work With */}
        <div 
          className={`text-center transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
              Technologies I Work With
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className={`px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default shadow-sm hover:shadow-md 
                ${index % 4 === 0 ? 'hover:bg-blue-50 dark:hover:bg-blue-900/20' :
                  index % 4 === 1 ? 'hover:bg-pink-50 dark:hover:bg-pink-900/20' :
                  index % 4 === 2 ? 'hover:bg-green-50 dark:hover:bg-green-900/20' :
                  'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
