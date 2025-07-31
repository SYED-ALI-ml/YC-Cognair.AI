import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
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
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
        <div className="absolute inset-0 perspective-1000">
          <div 
            className="absolute inset-0 transform-3d"
            style={{
              transform: `rotateX(${scrollY * 0.1}deg) translateY(${scrollY * 0.5}px)`,
            }}
          >
            <img 
              src={heroImage} 
              alt="Replete Dashboard" 
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        </div>
        
        <FloatingStats />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
            🚀 Now in Private Beta
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gradient">Replete:</span>
            <br />
            <span className="text-white">Work Seen.</span>
            <br />
            <span className="text-electric">Time Valued.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform remote productivity with intelligent screen monitoring. 
            Real-time insights, automated alerts, and seamless integration 
            for the modern workplace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-primary group">
              Get a Demo
              <Play className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-ghost group">
              Watch How It Works
              <Eye className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
          
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
            <div className="space-y-8">
              <div className="glass-card-intense p-8 group hover:scale-105 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center glow">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-white">Silent Monitoring</h3>
                    <p className="text-text-secondary">
                      Lightweight agent runs seamlessly in the background, capturing screen activity 
                      without impacting performance or workflow.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card-intense p-8 group hover:scale-105 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent-cyan rounded-2xl flex items-center justify-center glow">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-white">Real-Time Analytics</h3>
                    <p className="text-text-secondary">
                      AI-powered analysis provides instant insights into app usage, 
                      active time, and productivity patterns.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card-intense p-8 group hover:scale-105 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent-purple rounded-2xl flex items-center justify-center glow">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-white">Actionable Insights</h3>
                    <p className="text-text-secondary">
                      Smart alerts and detailed reports help teams optimize 
                      productivity and identify improvement opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
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
                color: "bg-green-500"
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
                color: "bg-yellow-500"
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
              <Card 
                key={index} 
                className="glass-card-intense p-6 group hover:scale-105 transition-all duration-500 hover:glow-intense"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card-intense p-12 text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 glow-intense">
              <Lock className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Security & Privacy First</span>
            </h2>
            
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Your data security is our top priority. Replete uses enterprise-grade encryption, 
              complies with GDPR and SOC 2 standards, and gives you complete control over your data.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">End-to-End Encryption</h3>
                <p className="text-text-muted">All data encrypted in transit and at rest</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Transparent Controls</h3>
                <p className="text-text-muted">Users see exactly what's being monitored</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">User Consent</h3>
                <p className="text-text-muted">Explicit consent required for all monitoring</p>
              </div>
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