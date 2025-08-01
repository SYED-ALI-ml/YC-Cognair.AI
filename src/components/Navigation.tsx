import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card backdrop-blur-lg border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/android-chrome-192x192.png" 
                                  alt="Cognaire.AI Logo" 
                className="w-8 h-8"
              />
                              <span className="text-2xl font-bold text-gradient">Cognaire.AI</span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/vision">
              <motion.span 
                className={`text-text-secondary hover:text-white transition-colors ${location.pathname === '/vision' ? 'text-primary' : ''}`}
                whileHover={{ y: -2 }}
              >
                Vision
              </motion.span>
            </Link>
            <Link to="/privacy">
              <motion.span 
                className={`text-text-secondary hover:text-white transition-colors ${location.pathname === '/privacy' ? 'text-primary' : ''}`}
                whileHover={{ y: -2 }}
              >
                Privacy
              </motion.span>
            </Link>
            <Link to="/features">
              <motion.span 
                className={`text-text-secondary hover:text-white transition-colors ${location.pathname === '/features' ? 'text-primary' : ''}`}
                whileHover={{ y: -2 }}
              >
                Features
              </motion.span>
            </Link>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
            <Button variant="primary" size="sm">
              Join Waitlist
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <Link to="/vision" className={`block text-text-secondary hover:text-white transition-colors ${location.pathname === '/vision' ? 'text-primary' : ''}`}>
              Vision
            </Link>
            <Link to="/privacy" className={`block text-text-secondary hover:text-white transition-colors ${location.pathname === '/privacy' ? 'text-primary' : ''}`}>
              Privacy
            </Link>
            <Link to="/features" className={`block text-text-secondary hover:text-white transition-colors ${location.pathname === '/features' ? 'text-primary' : ''}`}>
              Features
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" size="sm">
                Contact
              </Button>
              <Button variant="primary" size="sm">
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;