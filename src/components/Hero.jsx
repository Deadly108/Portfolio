import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 min-h-screen flex items-center bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:pr-12"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Om Patole
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Cyber Security Engineer & Full Stack Developer
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <div className="flex gap-4 items-center">
                {/* GitHub Link */}
                <a 
                  href="https://github.com/Deadly108" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                >
                  <FaGithub />
                </a>
                {/* LinkedIn Link */}
                <a 
                  href="https://www.linkedin.com/in/om-patole-a52aa02b6/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                >
                  <FaLinkedin />
                </a>
                {/* Gmail Link */}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ompatole3030@gmail.com&su=Hello%20Om&body=I%20would%20like%20to%20connect%20with%20you!"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-2xl text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                >
                  <SiGmail />
                </a>
              </div>
            </motion.div>
          </motion.div>
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div 
              className="w-full h-[600px] backdrop-blur-2xl bg-white/5 dark:bg-gray-800/5 rounded-3xl
                          flex items-center justify-center
                          hover:bg-white/10 dark:hover:bg-gray-800/10 transition-all duration-300
                          transform -translate-y-12 border-1 border-purple-500 "
            >
              <img 
                src="/src/assets/profile.gif"
                alt="Profile"
                className="w-99 h-99 object-contain transform hover:scale-105 duration-300 border-4 border-purple-500 rounded-3xl hover:shadow-[0_0_40px_10px_rgba(168,85,247,0.5)]
                            transition-all shadow-lg group"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
