'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, 
  Search, 
  Users, 
  CheckCircle, 
  Star, 
  MapPin, 
  Clock, 
  Shield,
  ArrowRight,
  Smartphone,
  Building,
  Zap
} from 'lucide-react';

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState('');
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if already authenticated
  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    sessionStorage.setItem('selectedRole', role);
    router.push(`/auth/signup?role=${role}`);
  };

  const handleFooterLink = (path) => {
    router.push(path);
  };

  const stats = [
    { label: 'Active Fixers', value: '10,000+', icon: Users },
    { label: 'Jobs Completed', value: '50,000+', icon: CheckCircle },
    { label: 'Cities Covered', value: '500+', icon: MapPin },
    { label: 'Average Rating', value: '4.8★', icon: Star }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Get responses from qualified fixers within minutes'
    },
    {
      icon: Shield,
      title: 'Verified Fixers',
      description: 'All fixers are background verified for your safety'
    },
    {
      icon: MapPin,
      title: 'Local Experts',
      description: 'Connect with skilled professionals in your area'
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'Rated and reviewed by customers like you'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Post Your Job',
      description: 'Describe what needs to be fixed with photos and details',
      icon: Building
    },
    {
      step: 2,
      title: 'Get Quotes',
      description: 'Receive quotes from qualified fixers in your area',
      icon: Users
    },
    {
      step: 3,
      title: 'Choose & Book',
      description: 'Select the best fixer and schedule the work',
      icon: CheckCircle
    },
    {
      step: 4,
      title: 'Get It Done',
      description: 'Your job gets completed by a verified professional',
      icon: Zap
    }
  ];

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-fixly-bg flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-fixly-accent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fixly-bg">
      {/* Header */}
      <header className="bg-fixly-card/80 backdrop-blur-md border-b border-fixly-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Wrench className="h-8 w-8 text-fixly-accent mr-2" />
              <span className="text-2xl font-bold text-fixly-text">Fixly</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => router.push('/auth/signin')}
                className="btn-ghost"
              >
                Sign In
              </button>
              <button 
                onClick={() => setShowRoleSelection(true)}
                className="btn-primary"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-fixly-text mb-6"
            >
              Find Local Service
              <span className="block text-fixly-accent">Professionals</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-fixly-text-light mb-8 max-w-3xl mx-auto"
            >
              Connect with skilled fixers in your area. Post jobs and get them done 
              by verified professionals. From electrical work to plumbing, 
              we've got you covered.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={() => handleRoleSelect('hirer')}
                className="btn-primary text-lg px-8 py-4 hover-lift"
              >
                <Search className="mr-2 h-5 w-5" />
                I Need a Service
              </button>
              <button 
                onClick={() => handleRoleSelect('fixer')}
                className="btn-secondary text-lg px-8 py-4 hover-lift"
              >
                <Wrench className="mr-2 h-5 w-5" />
                I'm a Service Provider
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-fixly-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-fixly-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-fixly-text mb-1">{stat.value}</div>
                <div className="text-fixly-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-fixly-text mb-4">
              How Fixly Works
            </h2>
            <p className="text-xl text-fixly-text-light max-w-2xl mx-auto">
              Getting your job done is simple with our streamlined process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="bg-fixly-accent text-fixly-text rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <step.icon className="h-8 w-8 text-fixly-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-fixly-text mb-2">
                  {step.title}
                </h3>
                <p className="text-fixly-text-light">
                  {step.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-fixly-accent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-fixly-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-fixly-text mb-4">
              Why Choose Fixly?
            </h2>
            <p className="text-xl text-fixly-text-light max-w-2xl mx-auto">
              We connect you with the best local service professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:bg-fixly-bg transition-colors duration-200"
              >
                <feature.icon className="h-12 w-12 text-fixly-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-fixly-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-fixly-text-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-fixly-card rounded-2xl p-12 shadow-fixly-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-fixly-text mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-fixly-text-light mb-8">
              Join thousands of satisfied customers and service providers on Fixly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleRoleSelect('hirer')}
                className="btn-primary text-lg px-8 py-4 hover-lift"
              >
                Post a Job
              </button>
              <button 
                onClick={() => handleRoleSelect('fixer')}
                className="btn-secondary text-lg px-8 py-4 hover-lift"
              >
                Become a Fixer
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-fixly-text text-fixly-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Wrench className="h-6 w-6 text-fixly-accent mr-2" />
                <span className="text-xl font-bold">Fixly</span>
              </div>
              <p className="text-fixly-bg/80 mb-4">
                Your trusted local service marketplace
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Customers</h3>
              <ul className="space-y-2 text-fixly-bg/80">
                <li>
                  <button 
                    onClick={() => handleRoleSelect('hirer')}
                    className="hover:text-fixly-accent transition-colors"
                  >
                    Post a Job
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLink('/services')}
                    className="hover:text-fixly-accent transition-colors"
                  >
                    Find Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLink('/how-it-works')}
                    className="hover:text-fixly-accent transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLink('/safety')}
                    className="hover:text-fixly-accent transition-colors"
                  >
                    Safety
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Fixers</h3>
              <ul className="space-y-2 text-fixly-bg/80">
                <li>
                  <button 
                    onClick={() => handleRoleSelect('fixer')}
                    className="hover:text-fixly-accent transition-colors"
                  >
                    Become a Fixer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLink('/pricing')}
                    className="hover:text-fixly-accent transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLink('/resources')}
                    className="hover:text-fixly-accent transition-colors"
                  >
                    Resources
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLink('/support')}
                    className="hover:text-fixly-accent transition-colors"
                  >
                    Support
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-fixly-bg/80">
                <li>
                  <button 
                    onClick={() => handleFooterLink('/about')}
                    className="hover:text-fixly-accent transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLink('/contact')}
                    className="hover:text-fixly-accent transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLink('/privacy')}
                    className="hover:text-fixly-accent transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterLink('/terms')}
                    className="hover:text-fixly-accent transition-colors"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-fixly-bg/20 mt-8 pt-8 text-center text-fixly-bg/60">
            <p>&copy; 2024 Fixly. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Role Selection Modal */}
      <AnimatePresence>
        {showRoleSelection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowRoleSelection(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-fixly-card rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-fixly-text mb-6 text-center">
                Choose Your Role
              </h2>
              
              <div className="space-y-4">
                <button
                  onClick={() => handleRoleSelect('hirer')}
                  className="w-full p-6 rounded-xl border-2 border-fixly-border hover:border-fixly-accent transition-colors duration-200 text-left"
                >
                  <div className="flex items-center mb-2">
                    <Search className="h-6 w-6 text-fixly-accent mr-3" />
                    <span className="text-xl font-semibold text-fixly-text">I'm a Hirer</span>
                  </div>
                  <p className="text-fixly-text-light">
                    I need to hire service professionals for my jobs
                  </p>
                </button>
                
                <button
                  onClick={() => handleRoleSelect('fixer')}
                  className="w-full p-6 rounded-xl border-2 border-fixly-border hover:border-fixly-accent transition-colors duration-200 text-left"
                >
                  <div className="flex items-center mb-2">
                    <Wrench className="h-6 w-6 text-fixly-accent mr-3" />
                    <span className="text-xl font-semibold text-fixly-text">I'm a Fixer</span>
                  </div>
                  <p className="text-fixly-text-light">
                    I provide services and want to find work opportunities
                  </p>
                </button>
              </div>
              
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowRoleSelection(false)}
                  className="text-fixly-text-muted hover:text-fixly-text transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}