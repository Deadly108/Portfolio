import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="heading text-center">
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8
                          hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300 shadow-lg">
              <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300">
                Hello! I'm Om Patole, a Computer Science Engineer with a strong focus on Cyber Security. My journey in technology has been driven by a passion for creating secure digital solutions and protecting systems from cyber threats.
              </motion.p>
              <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300">
                I graduated from Shivaji University, Kolhapur with a B.Tech in Computer Science, where I developed a strong foundation in programming languages like C, C++, Java, and Python. My specialization in Cyber Security has equipped me with the skills to understand and implement robust security measures.
              </motion.p>
              <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300">
                Beyond my core focus in security, I'm also well-versed in front-end web development, allowing me to create secure and user-friendly web applications. I believe in continuous learning and staying updated with the latest developments in both cyber security and web technologies.
              </motion.p>
            </div>
            <motion.div variants={itemVariants} className="relative">
              <div className="w-full h-[500px] bg-white/50 dark:bg-white/5 backdrop-blur-xl
                            flex items-center justify-center overflow-hidden
                            border-4  border-purple-500 rounded-3xl hover:shadow-[0_0_40px_10px_rgba(168,85,247,0.5)]
                            transition-all duration-300 shadow-lg group">
                <img 
                  src="/src/assets/profile2.gif"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;