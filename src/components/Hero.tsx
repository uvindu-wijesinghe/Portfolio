import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Mobile Developer',
    'Problem Solver'
  ];

  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  
  const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-5, 5]);
  const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-5, 5]);
  
  
  const tiltX = useTransform(mouseX, [0, window.innerWidth], [-3, 3]);
  const tiltY = useTransform(mouseY, [0, window.innerHeight], [-3, 3]);

  
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 120);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Longer pause
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, roles]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleMouseLeave = () => {
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
  };

  const handleDownloadCV = () => {
    const cvUrl = '/uvindu_wijesinghe_cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Uvindu_Wijesinghe_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden"
      onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
    >
      {/* Subtle background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20"
        style={{
          x: !isTouchDevice ? parallaxX : 0,
          y: !isTouchDevice ? parallaxY : 0,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />
      
      {/* Subtle floating background elements */}
      <div className="absolute inset-0 opacity-40">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-4"
              >
                <span className="text-blue-600 dark:text-blue-400 font-medium text-lg">Hello, I'm</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Uvindu</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Wijesinghe
                </span>
              </motion.h1>

              {/* Typewriter text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8"
              >
                <span>{displayText}</span>
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Software Engineering undergraduate at SLIIT passionate about creating innovative solutions through code. 
                I love building web applications, exploring AI technologies, and turning ideas into reality.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={handleDownloadCV}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('#projects')}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
                >
                  View Projects
                </motion.button>
              </motion.div>
            </div>

            {/* Center - Profile Picture with Subtle Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative pt-8 md:pt-0"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                {/* Subtle rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
                </motion.div>
                
                {/* Profile image container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl z-10"
                  style={{
                    transform: !isTouchDevice ? 
                      `perspective(1000px) rotateY(${tiltX.get()}deg) rotateX(${tiltY.get()}deg)` : 
                      'none',
                    transition: 'transform 0.3s ease-out',
                  }}
                >
                  <img
                    src="/propic.jpeg"
                    alt="Uvindu Wijesinghe"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </motion.div>
                
                {/* Subtle floating dots */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-600/40 rounded-full"
                      style={{
                        left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                        top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                      }}
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right side - Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="relative flex flex-col items-center"
            >
              {/* Subtle vertical line */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-px h-80 bg-gradient-to-b from-transparent via-gray-300/50 to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              />
              
              {/* Social icons */}
              <div className="flex flex-col space-y-4 relative z-10">
                {[
                  { icon: Github, href: 'https://github.com/uvindu-wijesinghe', label: 'GitHub', color: 'hover:bg-gray-800' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/uvindu-wijesinghe-aaa252373/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                  { icon: Mail, href: 'mailto:vidvangauvindu@email.com', label: 'Email', color: 'hover:bg-red-500' },
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 1 + index * 0.1,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    className="relative group"
                  >
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.1,
                        x: -4,
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`relative w-12 h-12 rounded-full bg-white dark:bg-gray-800 ${social.color} flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                    
                    {/* Tooltip */}
                    <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                      {social.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          whileHover={{ y: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
