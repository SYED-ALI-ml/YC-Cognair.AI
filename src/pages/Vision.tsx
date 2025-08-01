import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Zap, Eye, Users, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Vision = () => {
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
            {/* Background image placeholder - you can add your hero image here */}
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
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
              🎯 Our Vision for the Future of Work
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            variants={fadeInUp}
          >
            <span className="text-white block">Work Isn't Broken.</span>
            <span className="text-gradient block">Visibility Is.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            In a world that's gone hybrid, companies struggle not with performance — but with proof. 
            Traditional time-tracking tools are either invasive, outdated, or blindly automated. 
            Employees feel monitored. Employers feel blind.
          </motion.p>
          
          <motion.div 
            className="text-2xl md:text-3xl font-semibold text-electric mb-12"
            variants={fadeInUp}
          >
            Replete is here to restore trust, clarity, and accountability in the modern workplace.
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <Button className="btn-primary text-lg px-8 py-4 group">
              Read Our Full Vision
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">The Problem We See</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Today's work environment is distributed, digital, and decentralized — 
              yet we rely on blunt tools built for the 1990s.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="space-y-8"
            >
              <div className="glass-card-intense p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Leaders need real signals, not screenshots.
                </h3>
                <p className="text-text-secondary text-lg">
                  Current tools provide surface-level data that doesn't translate 
                  to meaningful insights about team productivity and engagement.
                </p>
              </div>
              
              <div className="glass-card-intense p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Employees deserve to be seen for how they work — not just when.
                </h3>
                <p className="text-text-secondary text-lg">
                  Quality of work and contribution should be valued over 
                  hours logged or keystrokes counted.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                Without visibility into actual workflows:
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Productivity is guessed, not measured.
                    </h4>
                    <p className="text-text-secondary">
                      Teams operate on assumptions rather than data-driven insights.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Engagement is assumed, not understood.
                    </h4>
                    <p className="text-text-secondary">
                      Employee satisfaction and motivation remain invisible to leadership.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Culture becomes surveillance, not support.
                    </h4>
                    <p className="text-text-secondary">
                      Monitoring tools breed mistrust instead of fostering collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              className="text-6xl font-bold mb-8"
              variants={fadeInUp}
            >
              <span className="text-electric">Our Vision</span>
            </motion.h2>
            
            <motion.div 
              className="glass-card-intense p-12 mb-12"
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 glow-intense">
                <Eye className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6">
                We believe in building the future of productivity intelligence — 
                a world where work speaks for itself.
              </h3>
              
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Replete isn't just about tracking screens. It's about transforming 
                raw digital activity into meaningful, human-centered insights.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div className="glass-card p-8" variants={fadeInUp}>
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Transparent Workplaces
                </h4>
                <p className="text-text-secondary">
                  Where productivity is measured by outcomes, not keystrokes.
                </p>
              </motion.div>

              <motion.div className="glass-card p-8" variants={fadeInUp}>
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Smart Dashboards
                </h4>
                <p className="text-text-secondary">
                  That empower teams — not micromanage them.
                </p>
              </motion.div>

              <motion.div className="glass-card p-8" variants={fadeInUp}>
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Global Standard
                </h4>
                <p className="text-text-secondary">
                  For ethical, real-time work intelligence.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Why Now?</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              The perfect storm of technological advancement and workplace transformation
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div 
              className="glass-card-intense p-8 flex items-start gap-6"
              variants={slideInLeft}
            >
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Remote and hybrid work is the default, not the exception.
                </h3>
                <p className="text-text-secondary text-lg">
                  The workplace has fundamentally shifted, but our tools haven't evolved to match this new reality.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card-intense p-8 flex items-start gap-6"
              variants={slideInRight}
            >
              <div className="w-12 h-12 bg-accent-cyan rounded-2xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Teams are more distributed than ever — but management tools haven't caught up.
                </h3>
                <p className="text-text-secondary text-lg">
                  Legacy solutions built for in-office work are failing distributed teams.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card-intense p-8 flex items-start gap-6"
              variants={slideInLeft}
            >
              <div className="w-12 h-12 bg-accent-purple rounded-2xl flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  AI has made real-time, contextual understanding of digital work not only possible — but necessary.
                </h3>
                <p className="text-text-secondary text-lg">
                  Modern AI can finally bridge the gap between raw data and meaningful insights.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <div className="glass-card-intense p-8">
              <h3 className="text-3xl font-bold text-electric mb-4">
                The infrastructure is here. The timing is perfect. The need is undeniable.
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ambition Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Our Ambition</span>
            </h2>
            <p className="text-2xl text-white font-semibold">
              We're not building a tool.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="glass-card-intense p-12 text-center mb-12"
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold text-electric mb-8">
                We're building a new layer of work infrastructure
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <motion.div variants={fadeInUp}>
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Visibility without invasion</h4>
                  <p className="text-text-secondary">Transparent insights that respect privacy and autonomy</p>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Accountability without anxiety</h4>
                  <p className="text-text-secondary">Clear expectations and progress tracking that builds confidence</p>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-purple-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Productivity without pressure</h4>
                  <p className="text-text-secondary">Sustainable performance optimization that supports wellbeing</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card-intense p-8 text-center"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                We want Replete to become the standard operating system for how modern teams 
                understand effort, engagement, and output
              </h3>
              <p className="text-xl text-text-secondary">
                Whether you're a 10-person startup or a 10,000-person enterprise.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* YC Alignment Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background-secondary pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30 text-lg px-4 py-2">
              🚀 YC S25 • Why We're Here
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">YC Alignment</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="glass-card-intense p-12 text-center mb-12"
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                At YC, companies don't just build products. They redefine how things should work.
              </h3>
              
              <p className="text-xl text-text-secondary mb-8">
                That's what we're here to do:
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-electric mb-3">
                    Reimagine how work is seen.
                  </h4>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-electric mb-3">
                    Redefine what productivity means.
                  </h4>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-electric mb-3">
                    Rebuild trust at scale.
                  </h4>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
            >
              <Button className="btn-primary text-lg px-12 py-6 group">
                Join Our Mission
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-text-muted mt-6">
                Partner with us • Invest in our vision • Shape the future of work
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background-secondary pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-glass-border to-transparent mb-8" />
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="/android-chrome-192x192.png" 
              alt="Replete Logo" 
              className="w-8 h-8"
            />
            <h3 className="text-2xl font-bold text-gradient">Replete</h3>
          </div>
          <p className="text-text-muted">
            © 2024 Replete. YC S25 Startup. • Work Seen. Time Valued.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Vision;