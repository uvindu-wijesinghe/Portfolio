import React, { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

type FormErrors = {
  from_name?: string;
  from_email?: string;
  subject?: string;
  message?: string;
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_74autt8';
  const EMAILJS_TEMPLATE_ID = 'template_va8p7d2';
  const EMAILJS_PUBLIC_KEY = 'yjANyYhJWdaDI90yE';

  // Initialize EmailJS
  emailjs.init(EMAILJS_PUBLIC_KEY);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
    }
    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email is required';
    } else if (!validateEmail(formData.from_email)) {
      newErrors.from_email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Uvindu',
        }
      );

      console.log('Email sent successfully:', result);
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({ 
        from_name: '', 
        from_email: '', 
        subject: '', 
        message: '' 
      });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again or contact me directly at vidvangauvindu@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: "#",
      color: "text-red-500",
      bgColor: "bg-red-100 dark:bg-red-900/30"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+94 71 8892 571",
      link: "tel:+94718892571",
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "vidvangauvindu@gmail.com",
      link: "mailto:vidvangauvindu@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/uvindu-wijesinghe",
      color: "hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/uvindu-wijesinghe-aaa252373/",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "#",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white"
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      url: "#",
      color: "hover:bg-blue-700 hover:text-white"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg transform hover:scale-110 transition-all duration-300">
            <Mail className="text-white" size={32} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full transform scale-x-0 animate-scale-x"></div>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slide-up">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development. Feel free to 
              reach out through any of the channels below.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-16 h-16 rounded-2xl ${info.bgColor} flex items-center justify-center mr-6 transition-all duration-300`}>
                    <div className={info.color}>
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div 
                    key={index} 
                    className="relative group"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    {/* Hover background pulse effect */}
                    <motion.div 
                      className={`absolute inset-0 rounded-2xl bg-blue-400/20 ${hoveredSocial === index ? 'animate-pulse' : ''}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredSocial === index ? 1.5 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Icon container */}
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 ${social.color} flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-white/20 backdrop-blur-sm`}
                      aria-label={social.name}
                      whileHover={{ 
                        scale: 1.1,
                        y: -8
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {/* Rotating border */}
                      <motion.div 
                        className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-transparent via-blue-500/50 to-transparent`}
                        style={{
                          mask: 'radial-gradient(circle, transparent 85%, black 86%, black 90%, transparent 91%)',
                        }}
                        animate={{ rotate: hoveredSocial === index ? 360 : 0 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      
                      {/* Icon */}
                      <div className="relative z-10">
                        {social.icon}
                      </div>
                    </motion.a>
                    
                    {/* Tooltip */}
                    <motion.div 
                      className="absolute left-full ml-4 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg whitespace-nowrap pointer-events-none"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ 
                        x: hoveredSocial === index ? 0 : -10, 
                        opacity: hoveredSocial === index ? 1 : 0 
                      }}
                      style={{ top: '50%', transform: 'translateY(-50%)' }}
                    >
                      {social.name}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900 dark:border-r-gray-100"></div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 dark:bg-gray-700/50 text-gray-900 dark:text-white backdrop-blur-sm ${
                      errors.from_name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'
                    }`}
                    placeholder="Your full name"
                    required
                  />
                  {errors.from_name && <p className="mt-1 text-sm text-red-500">{errors.from_name}</p>}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 dark:bg-gray-700/50 text-gray-900 dark:text-white backdrop-blur-sm ${
                      errors.from_email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.from_email && <p className="mt-1 text-sm text-red-500">{errors.from_email}</p>}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 dark:bg-gray-700/50 text-gray-900 dark:text-white backdrop-blur-sm ${
                    errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                  placeholder="What's this about?"
                  required
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 dark:bg-gray-700/50 text-gray-900 dark:text-white resize-none backdrop-blur-sm ${
                    errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                  placeholder="Tell me about your project or say hello!"
                  required
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </motion.div>

              {/* Submit status message */}
              {submitStatus && (
                <motion.div 
                  className={`p-4 rounded-xl ${
                    submitStatus.success 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-100 border border-green-200 dark:border-green-800' 
                      : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-100 border border-red-200 dark:border-red-800'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send size={20} className="mr-3 transition-transform duration-300" />
                      Send Message
                    </div>
                  )}
                </motion.button>
              </motion.div>
            </form>

            <motion.div 
              className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                🚀 <strong>Quick Response:</strong> I typically respond within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;