import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Clock, Users } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const AnalyticsDashboard = () => {
  const barData = [
    { label: 'VS Code', value: 85, color: 'bg-primary' },
    { label: 'Chrome', value: 65, color: 'bg-accent-cyan' },
    { label: 'Slack', value: 45, color: 'bg-accent-purple' },
    { label: 'Figma', value: 35, color: 'bg-green-500' },
    { label: 'Terminal', value: 25, color: 'bg-yellow-500' }
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Real-Time Analytics</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Watch your productivity metrics come to life with dynamic visualizations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Live Dashboard */}
          <motion.div 
            className="glass-card-intense p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Today's Activity</h3>
            
            {/* App Usage Chart */}
            <div className="space-y-6 mb-8">
              <h4 className="text-lg text-text-secondary">App Usage Distribution</h4>
              {barData.map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">{item.label}</span>
                    <span className="text-white">
                      <AnimatedCounter target={item.value} suffix="%" />
                    </span>
                  </div>
                  <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${item.color} rounded-full`}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Live Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-background-secondary/50 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-text-secondary">Active Time</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter target={7} />h <AnimatedCounter target={23} />m
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-background-secondary/50 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-accent-cyan" />
                  <span className="text-sm text-text-secondary">Productivity</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter target={89} suffix="%" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Live Data Visualization */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card-intense p-6 card-hover-glow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center animate-icon-pulse">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Live Monitoring</h3>
                  <p className="text-text-secondary">Real-time activity tracking</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card-intense p-6 card-hover-glow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-cyan rounded-2xl flex items-center justify-center animate-icon-pulse" style={{ animationDelay: '0.5s' }}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Team Insights</h3>
                  <p className="text-text-secondary">Collaborative productivity metrics</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card-intense p-6 card-hover-glow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-purple rounded-2xl flex items-center justify-center animate-icon-pulse" style={{ animationDelay: '1s' }}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Smart Analytics</h3>
                  <p className="text-text-secondary">AI-powered productivity insights</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;