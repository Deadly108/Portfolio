import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaShieldAlt, FaGlobe, FaDatabase } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Shivaji University, Kolhapur",
      period: "2022 - pursuing",
      icon: <FaGraduationCap className="w-8 h-8 text-indigo-500" />,
      courses: [
        {
          title: "Programming Languages",
          items: ["C", "C++", "Java", "Python", "JavaScript"],
          icon: <FaCode className="w-6 h-6" />
        },
        {
          title: "Cyber Security",
          items: ["Network Security", "Cryptography", "Ethical Hacking", "Security Auditing"],
          icon: <FaShieldAlt className="w-6 h-6" />
        },
        {
          title: "Web Development",
          items: ["HTML5", "CSS3", "React.js", "Node.js", "Tailwind CSS"],
          icon: <FaGlobe className="w-6 h-6" />
        },
        {
          title: "Database & Tools",
          items: ["MySQL", "MongoDB", "Git", "Docker", "AWS"],
          icon: <FaDatabase className="w-6 h-6" />
        }
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading text-center mb-16">Education</h2>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                  <div className="p-5 rounded-2xl bg-indigo-100/50 dark:bg-indigo-500/10 backdrop-blur-xl">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                      {edu.degree}
                    </h3>
                    <p className="text-xl sm:text-2xl text-primary dark:text-blue-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8">
                      {edu.period}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                      {edu.courses.map((course, courseIndex) => (
                        <div 
                          key={courseIndex}
                          className="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8
                                   hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-300
                                   transform hover:-translate-y-1 shadow-lg"
                        >
                          <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-indigo-100/50 dark:bg-indigo-500/10 backdrop-blur-xl">
                              {course.icon}
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                              {course.title}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {course.items.map((item, itemIndex) => (
                              <span
                                key={itemIndex}
                                className="px-3 py-1.5 rounded-xl text-sm font-medium
                                         bg-indigo-100/50 dark:bg-indigo-500/10 backdrop-blur-xl
                                         text-indigo-600 dark:text-indigo-300
                                         hover:bg-indigo-200/50 dark:hover:bg-indigo-500/20
                                         transition-colors duration-300"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Education;