import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loading key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`min-h-screen bg-white dark:bg-gray-900 ${darkMode ? 'dark' : ''}`}
        >
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Hero />
            <About />
            <Education />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;