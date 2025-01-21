import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Footer Text */}
          <div className="text-gray-600 dark:text-gray-300">
            © {currentYear} Om Patole. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {/* GitHub Link */}
            <a
              href="https://github.com/Deadly108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/om-patole-a52aa02b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            {/* Gmail Link */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@ompatole.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
