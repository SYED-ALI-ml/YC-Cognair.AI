import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { 
  Monitor, 
  Shield, 
  Clock, 
  BarChart3, 
  Camera, 
  AlertTriangle,
  Play,
  ChevronDown,
  Zap,
  Lock,
  Users,
  TrendingUp,
  Eye,
  Activity
} from 'lucide-react';
import heroImage from "@/assets/hero-laptop.jpg";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const FloatingStats = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="float absolute top-20 left-10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
        <div className="glass-card p-4 max-w-xs">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-text-secondary">Active Time: 7h 23m</span>
          </div>
        </div>
      </div>
      
      <div className="float-delayed absolute top-40 right-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
        <div className="glass-card p-4 max-w-xs">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm text-text-secondary">App Usage: Coding 89%</span>
          </div>
        </div>
      </div>
      
      <div className="float absolute bottom-32 left-20 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
        <div className="glass-card p-4 max-w-xs">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-text-secondary">Idle Alert: 2 min break</span>
          </div>
        </div>
      </div>
      
      <div className="float-delayed absolute bottom-20 right-12 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
        <div className="glass-card p-4 max-w-xs">
          <div className="flex items-center gap-3">
            <Camera className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-text-secondary">Screenshots: 47 today</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background custom-scrollbar overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none" />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-8 md:px-6 overflow-hidden pt-32 md:pt-20">
        <div className="absolute inset-0 perspective-1000">
        <motion.div 
            className="absolute inset-0 transform-3d parallax-container"
            style={{
              transform: `rotateX(${scrollY * 0.05}deg) translateY(${scrollY * 0.3}px) translateZ(0px)`,
            }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.2 }}
          >
            <img 
              src={heroImage} 
              alt="Replete Dashboard" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <FloatingStats />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
            🚀 Now in Private Beta
          </Badge>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">Replete:</span>
            <br />
            <span className="text-white highlight-swipe" style={{ animationDelay: '1s' }}>Work Seen.</span>
            <br />
            <span className="text-electric highlight-swipe" style={{ animationDelay: '1.5s' }}>Time Valued.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transform remote productivity with intelligent screen monitoring. 
            Real-time insights, automated alerts, and seamless integration 
            for the modern workplace.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button className="btn-primary group">
              Get a Demo
              <Play className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-ghost group">
              Watch How It Works
              <Eye className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-text-muted mx-auto" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">How It Works</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Three simple steps to transform your team's productivity insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Monitor, color: 'bg-primary', title: 'Silent Monitoring', desc: 'Lightweight agent runs seamlessly in the background, capturing screen activity without impacting performance or workflow.' },
                { icon: Activity, color: 'bg-accent-cyan', title: 'Real-Time Analytics', desc: 'AI-powered analysis provides instant insights into app usage, active time, and productivity patterns.' },
                { icon: TrendingUp, color: 'bg-accent-purple', title: 'Actionable Insights', desc: 'Smart alerts and detailed reports help teams optimize productivity and identify improvement opportunities.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-card-intense p-8 card-hover-glow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center glow`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                      <p className="text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="relative">
              <div className="glass-card-intense p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto animate-spin-slow">
                    <Zap className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-text-secondary">
                    Interactive dashboard preview coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Section */}
      <AnalyticsDashboard />

      {/* Features Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-electric">Powerful Features</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Everything you need to monitor, analyze, and optimize remote work productivity
            </p>
          </div>
          
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Time Tracking",
                description: "Automatic time logging with intelligent categorization of active vs idle periods.",
                color: "bg-green-500",
                pulse: true
              },
              {
                icon: BarChart3,
                title: "App Analytics",
                description: "Detailed insights into application usage patterns and productivity metrics.",
                color: "bg-blue-500"
              },
              {
                icon: Camera,
                title: "Screen Captures",
                description: "Periodic screenshots for visual confirmation of work activities and progress.",
                color: "bg-purple-500"
              },
              {
                icon: AlertTriangle,
                title: "Smart Alerts",
                description: "Automated notifications for extended idle time and unusual activity patterns.",
                color: "bg-yellow-500",
                pulse: true
              },
              {
                icon: Shield,
                title: "Privacy Controls",
                description: "Granular privacy settings with secure data encryption and user consent.",
                color: "bg-red-500"
              },
              {
                icon: Users,
                title: "Team Dashboard",
                description: "Unified view of team productivity with role-based access controls.",
                color: "bg-indigo-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <Card className="glass-card-intense p-6 card-hover-glow h-full">
                  <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-6 ${feature.pulse ? 'animate-icon-pulse' : ''}`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card-intense p-12 text-center">
            <motion.div 
              className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 glow-intense"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
            >
              <Lock className="w-10 h-10 text-white animate-rotate-shield" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Security & Privacy First</span>
            </h2>
            
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Your data security is our top priority. Replete uses enterprise-grade encryption, 
              complies with GDPR and SOC 2 standards, and gives you complete control over your data.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Shield, color: 'green', title: 'End-to-End Encryption', desc: 'All data encrypted in transit and at rest' },
                { icon: Eye, color: 'blue', title: 'Transparent Controls', desc: 'Users see exactly what\'s being monitored' },
                { icon: Users, color: 'purple', title: 'User Consent', desc: 'Explicit consent required for all monitoring' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-${item.color}-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-500`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-text-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="text-electric">Remote Productivity?</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-12">
            Join forward-thinking companies already using Replete to optimize their remote teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-primary text-lg px-12 py-6">
              Start Free Trial
            </Button>
            <Button variant="outline" className="btn-ghost text-lg px-12 py-6">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm text-text-muted mt-8">
            No credit card required • 14-day free trial • Enterprise ready
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-glass-border py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gradient mb-4">Replete</h3>
          <p className="text-text-muted">
            © 2024 Replete. All rights reserved. • Work Seen. Time Valued.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;