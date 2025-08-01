import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Shield, Lock, Eye, Users, CheckCircle, FileText, Scale, Heart } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Privacy = () => {
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
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30 animate-pulse-glow">
              🔒 Privacy & Trust First
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            variants={fadeInUp}
          >
            <span className="text-white block">Privacy Isn't a Feature.</span>
            <span className="text-gradient block">It's a Foundation.</span>
          </motion.h1>
          
          <motion.div 
            className="space-y-6 text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            <p>
              At Cognaire.AI, we don't just monitor work — we protect the people doing it.
            </p>
            <p className="text-electric font-semibold">
              We believe visibility should never come at the cost of trust. 
              That's why privacy is at the core of our technology.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <Button className="btn-primary text-lg px-8 py-4 group">
              Read Our Privacy Commitment
              <Shield className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Privacy Principles Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Our Core Privacy Principles</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Three foundational principles that guide every decision we make
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Principle 1 */}
            <motion.div 
              className="glass-card-intense p-8 text-center group hover:scale-105 transition-all duration-500"
              variants={scaleIn}
            >
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Employee Consent First
              </h3>
              <div className="space-y-3 text-text-secondary">
                <p>Every user is notified, onboarded, and fully aware of how Cognaire.AI works.</p>
                <p className="text-electric font-semibold">
                  Transparency drives trust — not surveillance.
                </p>
              </div>
            </motion.div>

            {/* Principle 2 */}
            <motion.div 
              className="glass-card-intense p-8 text-center group hover:scale-105 transition-all duration-500"
              variants={scaleIn}
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                You Own Your Data
              </h3>
              <div className="space-y-3 text-text-secondary">
                <p>Your organization maintains full control of its data.</p>
                <p className="text-electric font-semibold">
                  We don't sell it. We don't mine it. We protect it.
                </p>
              </div>
            </motion.div>

            {/* Principle 3 */}
            <motion.div 
              className="glass-card-intense p-8 text-center group hover:scale-105 transition-all duration-500"
              variants={scaleIn}
            >
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-10 h-10 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Visibility, Not Intrusion
              </h3>
              <div className="space-y-3 text-text-secondary">
                <p>We track workflows — not webcams, audio, or private content.</p>
                <p className="text-electric font-semibold">
                  No keyloggers. No spyware. Just ethical productivity insight.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise-Grade Security Section */}
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
              <span className="text-electric">Enterprise-Grade Security</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Military-grade protection for your most sensitive data
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {[
              {
                icon: Shield,
                title: "End-to-End Encryption",
                description: "AES-256 encryption with TLS 1.3 for data in transit and at rest",
                color: "bg-green-500"
              },
              {
                icon: FileText,
                title: "Zero-Retention Screenshots",
                description: "Screenshots are processed in real-time and discarded unless configured otherwise",
                color: "bg-blue-500"
              },
              {
                icon: Users,
                title: "Role-Based Access Control",
                description: "Granular permissions ensure team members only see what they need to see",
                color: "bg-purple-500"
              },
              {
                icon: Lock,
                title: "Data Minimization",
                description: "We collect only what's essential for productivity insights — nothing more",
                color: "bg-orange-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-card-intense p-8 flex items-start gap-6 group hover:scale-[1.02] transition-all duration-500"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
              >
                <div className={`w-16 h-16 ${item.color}/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-8 h-8 text-${item.color.split('-')[1]}-500`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance Section */}
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
            <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-500/30 text-lg px-4 py-2">
              ⚖️ Built for Compliance
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Global Standards Alignment</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Cognaire.AI aligns with modern privacy and security standards
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: "GDPR",
                status: "Compliant",
                icon: CheckCircle,
                color: "text-green-500",
                bgColor: "bg-green-500/20"
              },
              {
                name: "CCPA",
                status: "Compliant", 
                icon: CheckCircle,
                color: "text-green-500",
                bgColor: "bg-green-500/20"
              },
              {
                name: "SOC 2",
                status: "In Progress",
                icon: Scale,
                color: "text-yellow-500",
                bgColor: "bg-yellow-500/20"
              },
              {
                name: "ISO 27001",
                status: "Roadmap",
                icon: FileText,
                color: "text-blue-500",
                bgColor: "bg-blue-500/20"
              }
            ].map((compliance, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-500"
                variants={scaleIn}
              >
                <div className={`w-16 h-16 ${compliance.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <compliance.icon className={`w-8 h-8 ${compliance.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {compliance.name}
                </h3>
                <p className={`text-sm font-semibold ${compliance.color}`}>
                  {compliance.status}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Statement Section */}
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
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-pink-500/20 text-pink-400 border-pink-500/30 text-lg px-4 py-2">
                🤝 Trust is Our Baseline
              </Badge>
            </motion.div>
            
            <motion.div 
              className="glass-card-intense p-12 mb-12"
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 glow-intense">
                <Heart className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-6 text-xl md:text-2xl leading-relaxed">
                <p className="text-white font-semibold">
                  We're not building tools to micromanage.
                </p>
                <p className="text-electric font-semibold">
                  We're building tools that make work transparent, accountable, and secure.
                </p>
                <p className="text-text-secondary">
                  Because great teams don't need to be watched — they need to be understood.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={fadeInUp}
            >
              <Button className="btn-primary text-lg px-8 py-4 group">
                Contact Our Privacy Team
                <Shield className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-ghost text-lg px-8 py-4">
                Download Privacy Policy
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background-secondary pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-glass-border to-transparent mb-12" />
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/android-chrome-192x192.png" 
                  alt="Cognaire.AI Logo" 
                  className="w-8 h-8"
                />
                <h3 className="text-2xl font-bold text-gradient">Cognaire.AI</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Building the future of remote work transparency with privacy and trust at the core.
              </p>
            </div>

            {/* Privacy Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Privacy</h4>
              <div className="space-y-2">
                <a href="#" className="block text-text-secondary hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-text-secondary hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block text-text-secondary hover:text-white transition-colors">Data Processing</a>
                <a href="#" className="block text-text-secondary hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2">
                <a href="mailto:privacy@cognaire.ai" className="block text-text-secondary hover:text-white transition-colors">privacy@cognaire.ai</a>
                <a href="mailto:security@cognaire.ai" className="block text-text-secondary hover:text-white transition-colors">security@cognaire.ai</a>
                <a href="mailto:legal@cognaire.ai" className="block text-text-secondary hover:text-white transition-colors">legal@cognaire.ai</a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-glass-border">
            <p className="text-text-muted">
              © 2024 Cognaire.AI. YC S25 Startup. • Work Seen. Time Valued. • Privacy Protected.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;