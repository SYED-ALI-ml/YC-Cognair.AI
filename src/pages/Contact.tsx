import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Send, User, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ fullName: '', email: '', message: '' });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Team members data
  const teamMembers = [
    {
      name: "Agnik Sarkar",
      role: "CEO & Co-Founder",
      email: "agnikbosconian@gmail.com",
      linkedin: "#",
      image: "/assets/team/agnik.png"
    },
    {
      name: "Syed Mohammad Ali Jafri", 
      role: "CTO & Co-Founder",
      email: "alimohd3946@gmail.com",
      linkedin: "#",
      image: "/assets/team/syed.png"
    },
    {
      name: "Arittra Bag",
      role: "COO & Co-Founder", 
      email: "auzinfotech@gmail.com",
      linkedin: "#",
      image: "/assets/team/arittra.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background custom-scrollbar overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
                💬 Get In Touch
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              variants={fadeInUp}
            >
              <span className="text-white">Contact Us —</span>
              <br />
              <span className="text-gradient">Cognaire.AI</span>
            </motion.h1>
            
            <motion.div
              className="max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-electric mb-6">
                Let's Build the Future of Work Together
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                Reach out to the Founders of Cognaire.AI — your questions, collaborations, 
                and feedback are always welcome.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Meet the <span className="text-gradient">Founders</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-text-secondary max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              The passionate team building the future of productivity intelligence
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="glass-card-intense p-8 text-center group hover:scale-105 transition-all duration-500 h-full">
                  {/* Circular Photo */}
                  <div className="relative mb-6 mx-auto">
                    <div className="w-32 h-32 mx-auto relative overflow-hidden rounded-full border-4 border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to gradient placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.fallback-avatar')) {
                            const fallback = document.createElement('div');
                            fallback.className = 'fallback-avatar w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center';
                            const initial = document.createElement('div');
                            initial.className = 'w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold';
                            initial.textContent = member.name.split(' ').map(n => n[0]).join('');
                            fallback.appendChild(initial);
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                      {/* Fallback rendered by onError */}
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300 -z-10"></div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-electric font-semibold mb-6">
                    {member.role}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 text-text-secondary hover:text-white transition-colors group/email"
                    >
                      <Mail className="w-4 h-4 group-hover/email:scale-110 transition-transform" />
                      <span className="text-sm">{member.email}</span>
                    </a>
                    
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full hover:bg-blue-600/30 hover:text-blue-300 transition-all duration-300 group/linkedin"
                    >
                      <Linkedin className="w-4 h-4 group-hover/linkedin:scale-110 transition-transform" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-xl text-text-secondary">
                Have a question or want to collaborate? We'd love to hear from you.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="glass-card-intense p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-text-secondary" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your project, question, or how we can help..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="btn-primary-nav w-full py-4 text-lg font-semibold group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>

            {/* Additional Contact Info */}
            <motion.div 
              className="text-center mt-12 space-y-4"
              variants={fadeInUp}
            >
              <p className="text-text-secondary">
                Or reach out directly at{" "}
                <a 
                  href="mailto:hello@cognaire.ai" 
                  className="text-primary hover:text-primary-glow transition-colors font-medium"
                >
                  hello@cognaire.ai
                </a>
              </p>
              <p className="text-text-muted text-sm">
                We typically respond within 24 hours during business days.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background-secondary pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-glass-border to-transparent mb-12" />
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/android-chrome-192x192.png" 
                  alt="Cognaire.AI Logo" 
                  className="w-8 h-8"
                />
                <h3 className="text-2xl font-bold text-gradient">Cognaire.AI</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Smart visibility for distributed teams. Work seen, time valued, privacy protected.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2">
                <a href="mailto:hello@cognaire.ai" className="block text-text-secondary hover:text-white transition-colors">hello@cognaire.ai</a>
                <a href="mailto:support@cognaire.ai" className="block text-text-secondary hover:text-white transition-colors">support@cognaire.ai</a>
                <a href="mailto:sales@cognaire.ai" className="block text-text-secondary hover:text-white transition-colors">sales@cognaire.ai</a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-glass-border">
            <p className="text-text-muted">
              © 2025 Cognaire.AI. YC S25 Startup. • Work Seen. Time Valued.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;