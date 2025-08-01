import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Monitor, MessageCircle, BarChart3, Shield, Brain, Laptop, Clock, Eye, Zap, CheckCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Features = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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

  return (
    <div className="min-h-screen bg-background custom-scrollbar overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none" />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
        <div className="absolute inset-0 perspective-1000">
          <div 
            className="absolute inset-0 transform-3d"
            style={{
              transform: `rotateX(${scrollY * 0.1}deg) translateY(${scrollY * 0.5}px)`,
            }}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent-cyan/5 to-accent-purple/10 opacity-50" />
          </div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Badge className="mb-6 bg-electric/20 text-electric border-electric/30 animate-pulse-glow">
              ⚙️ Intelligent Productivity Features
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            variants={fadeInUp}
          >
            <span className="text-white block">Smart Visibility.</span>
            <span className="text-gradient block">Real Productivity.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Cognaire.AI gives organizations the tools to understand how work happens — without crossing the line. 
            Our features are designed to deliver real-time insights, ensure accountability, 
            and support productive, high-trust teams.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Button className="btn-primary text-lg px-8 py-4 group">
              Explore All Features
              <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Block 1 - Intelligent Screen Monitoring */}
      <section className="py-24 px-6 relative">
        {/* Animate on scroll */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={slideInLeft}>
              <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30">
                🖥️ Core Feature
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Context-Aware Screenshots
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                We capture periodic screenshots of active screens to understand how work unfolds — not to spy. 
                Screenshots are processed with AI to highlight engagement, tool usage, and anomalies, 
                while skipping sensitive or non-work-related windows.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">Configurable capture intervals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">AI analysis to detect productive vs idle screens</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-text-secondary">Auto-blur sensitive content (coming soon)</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={slideInRight}
            >
              <div className="glass-card-intense p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto animate-pulse">
                    <Monitor className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-text-secondary">
                    Smart screenshot analysis with privacy protection
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Block 2 - Live Work Prompts */}
      <section className="py-24 px-6 relative">
        {/* Animate on scroll */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="relative lg:order-1"
              variants={slideInLeft}
            >
              <div className="glass-card-intense p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-2xl flex items-center justify-center mb-6 mx-auto animate-bounce">
                    <MessageCircle className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-text-secondary">
                    Contextual prompts for human insights
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:order-2" variants={slideInRight}>
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                💬 Human Context
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                "What Are You Working On?" Prompts
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Not everything can be tracked — so we ask. Cognaire.AI sends periodic pop-ups asking users 
                to share what they're working on. A 5-minute response window helps us add human context 
                to system-level insights.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">Configurable prompt intervals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">No pressure or penalty — just intent</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">Boosts trust and clarity for hybrid teams</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Block 3 - App Usage Tracking */}
      <section className="py-24 px-6 relative">
        {/* Animate on scroll */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={slideInLeft}>
              <Badge className="mb-6 bg-purple-500/20 text-purple-400 border-purple-500/30">
                🧩 Analytics Engine
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Application Focus Analytics
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Track which apps are actually being used — and how often. We break down active time 
                per application so teams understand real tool usage across design, communication, 
                and productivity platforms.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">Time-on-task visualizations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">App-by-app usage breakdown</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">Flag distractions and anomalies</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={slideInRight}
            >
              <div className="glass-card-intense p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-spin-slow">
                    <BarChart3 className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-text-secondary">
                    Deep application usage insights and analytics
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Block 4 - New App Installation Alerts */}
      <section className="py-24 px-6 relative">
        {/* Animate on scroll */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="relative lg:order-1"
              variants={slideInLeft}
            >
              <div className="glass-card-intense p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-pulse">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-text-secondary">
                    Real-time security and compliance monitoring
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:order-2" variants={slideInRight}>
              <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30">
                🛡️ Security Layer
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                New Software Detection
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Cognaire.AI monitors installation of new applications to help teams catch unauthorized 
                or risky tools before they impact security or compliance. Stay ahead of potential 
                threats with proactive monitoring.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">Real-time installation alerts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">Optional endpoint security integrations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-text-secondary">Works silently in the background</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Block 5 - Privacy-First Design */}
      <section className="py-24 px-6 relative">
        {/* Animate on scroll */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30 text-lg px-4 py-2">
                🧠 Privacy-First Foundation
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8"
              variants={fadeInUp}
            >
              <span className="text-gradient">Built on Privacy</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Every feature respects user awareness and organizational control. 
              We believe visibility should empower, not surveil.
            </motion.p>

            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-12"
              variants={staggerContainer}
            >
              <motion.div 
                className="glass-card-intense p-8 group hover:scale-105 transition-all duration-500"
                variants={scaleIn}
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Transparent Tracking
                </h3>
                <p className="text-text-secondary">
                  Users always know what's being monitored and why
                </p>
              </motion.div>

              <motion.div 
                className="glass-card-intense p-8 group hover:scale-105 transition-all duration-500"
                variants={scaleIn}
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Configurable Capture
                </h3>
                <p className="text-text-secondary">
                  Organizations control frequency and scope of monitoring
                </p>
              </motion.div>

              <motion.div 
                className="glass-card-intense p-8 group hover:scale-105 transition-all duration-500"
                variants={scaleIn}
              >
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  No Invasive Tracking
                </h3>
                <p className="text-text-secondary">
                  No webcams, audio, or keystroke logging. Ever.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button className="btn-primary text-lg px-8 py-4 group">
                Learn About Our Privacy Commitment
                <Brain className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background-secondary pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Building the Future of
              <br />
              <span className="text-electric">Work Intelligence</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-text-secondary mb-12"
              variants={fadeInUp}
            >
              We're creating the infrastructure layer that brings transparency to distributed work—enabling productivity measurement without surveillance, accountability without anxiety.
            </motion.p>
            
            <motion.div 
              className="max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              <div className="glass-card-intense p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  🚀 YC S25 Mission
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Cognaire.AI is redefining how organizations understand productivity in the hybrid era. 
                  We're building AI-powered work intelligence that respects privacy while delivering 
                  unprecedented insights into team performance and engagement.
                </p>
              </div>
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

export default Features;