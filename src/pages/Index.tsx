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
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-text-secondary">Status: Pre-MVP</span>
          </div>
        </div>
      </div>
      
      <div className="float-delayed absolute top-40 right-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
        <div className="glass-card p-4 max-w-xs">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm text-text-secondary">Target Market: $50B</span>
          </div>
        </div>
      </div>
      
      <div className="float absolute bottom-32 left-20 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
        <div className="glass-card p-4 max-w-xs">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-text-secondary">Problem: $15k/year lost per remote worker</span>
          </div>
        </div>
      </div>
      
      <div className="float-delayed absolute bottom-20 right-12 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
        <div className="glass-card p-4 max-w-xs">
          <div className="flex items-center gap-3">
            <Camera className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-text-secondary">YC S25 Batch</span>
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
            🚀 YC S25 Startup • Seeking Seed Funding
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gradient block">Replete:</span>
            <span className="text-white block">Work Seen.</span>
            <br />
            <span className="text-electric">Time Valued.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            We're building the future of remote work transparency. 
            Our vision: intelligent productivity monitoring that respects privacy 
            while delivering actionable insights for distributed teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-primary group">
              Join Waitlist
              <Play className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-ghost group">
              Learn More
              <Eye className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-text-muted mx-auto" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 relative -mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Our Vision</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              How we plan to solve remote work productivity challenges
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
                    <h3 className="text-2xl font-semibold mb-3 text-white">Privacy-First Monitoring</h3>
                    <p className="text-text-secondary">
                      We're designing a lightweight system that captures meaningful productivity data 
                      while respecting user privacy and maintaining trust.
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
                    <h3 className="text-2xl font-semibold mb-3 text-white">AI-Powered Analytics</h3>
                    <p className="text-text-secondary">
                      Our planned ML algorithms will analyze work patterns and provide 
                      actionable insights without compromising employee autonomy.
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
                    <h3 className="text-2xl font-semibold mb-3 text-white">Team Intelligence</h3>
                    <p className="text-text-secondary">
                      We envision dashboards that help managers support productivity 
                      without micromanaging, fostering better remote work culture.
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
                  <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                    In Development
                  </Badge>
                  <p className="text-text-secondary">
                    Building our MVP with user-centric design principles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative -mt-8">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background/90 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-electric">Planned Features</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Our roadmap for solving remote work productivity challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Intelligent Time Tracking",
                description: "We plan to build automatic, context-aware time logging that respects user privacy while providing meaningful insights.",
                color: "bg-green-500"
              },
              {
                icon: BarChart3,
                title: "Productivity Analytics",
                description: "Our vision includes ML-powered analysis of work patterns without compromising employee autonomy.",
                color: "bg-blue-500"
              },
              {
                icon: Camera,
                title: "Privacy-Safe Monitoring",
                description: "Developing optional visual confirmation systems with full user control and transparent data handling.",
                color: "bg-purple-500"
              },
              {
                icon: AlertTriangle,
                title: "Contextual Insights",
                description: "Planning smart notifications that help rather than distract, with customizable preferences.",
                color: "bg-yellow-500"
              },
              {
                icon: Shield,
                title: "Trust-First Architecture",
                description: "Building from the ground up with privacy, security, and user consent as core principles.",
                color: "bg-red-500"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Envisioning dashboards that foster better remote work culture without micromanagement.",
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
      <section className="py-20 px-6 relative -mt-8">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="glass-card-intense p-12 text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 glow-intense">
              <Lock className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Trust & Privacy by Design</span>
            </h2>
            
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              We're building a platform where security and privacy aren't afterthoughts. 
              Our architecture will prioritize user trust, transparency, and control from day one.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Security-First Development</h3>
                <p className="text-text-muted">Planning enterprise-grade encryption and compliance standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Radical Transparency</h3>
                <p className="text-text-muted">Users will always know what data we collect and why</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">User-Controlled Data</h3>
                <p className="text-text-muted">Designing granular controls for data collection and retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative -mt-8">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">
            Join Our Mission to
            <br />
            <span className="text-electric">Revolutionize Remote Work</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-12">
            We're seeking early users, advisors, and investors who share our vision 
            for transparent, trust-based remote work solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-primary text-lg px-12 py-6">
              Join Waitlist
            </Button>
            <Button variant="outline" className="btn-ghost text-lg px-12 py-6">
              Partner With Us
            </Button>
          </div>
          
          <p className="text-sm text-text-muted mt-8">
            Early access • Shape our roadmap • Investor opportunities
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 relative -mt-8">
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

export default Index;