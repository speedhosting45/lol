import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Shield, Zap, Star, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const HomePage = () => {
  const pricingPlans = [
    {
      name: '4 GB RAM VPS',
      price: '₹200',
      period: '/month',
      features: ['4 GB RAM', '50 GB SSD', '1 TB Bandwidth', '99.9% Uptime', '24/7 Support'],
      popular: false,
    },
    {
      name: '8 GB RAM VPS',
      price: '₹300',
      period: '/month',
      features: ['8 GB RAM', '100 GB SSD', '2 TB Bandwidth', '99.9% Uptime', '24/7 Support'],
      popular: true,
    },
    {
      name: '16 GB RAM RDP',
      price: '₹400',
      period: '/month',
      features: ['16 GB RAM', '200 GB SSD', '5 TB Bandwidth', '99.9% Uptime', '24/7 Support'],
      popular: false,
    },
    {
      name: 'Custom Plans',
      price: 'Contact',
      period: 'Us',
      features: ['Custom RAM', 'Custom Storage', 'Custom Bandwidth', 'Dedicated Support', 'Custom Config'],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Raj Patel',
      role: 'Developer',
      content: 'AuraDeploy has been fantastic! Fast servers and excellent support.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      content: 'Perfect for my business needs. Reliable and cost-effective.',
      rating: 5,
    },
    {
      name: 'Amit Kumar',
      role: 'Startup Founder',
      content: 'Great performance and amazing customer service. Highly recommended!',
      rating: 5,
    },
  ];

  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: 'High Performance',
      description: 'Premium servers with latest hardware for optimal performance.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Reliable',
      description: 'Advanced security measures and 99.9% uptime guarantee.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Setup',
      description: 'Get your VPS or RDP ready in minutes, not hours.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Premium <span className="text-blue-400">VPS</span> & <span className="text-purple-400">RDP</span>
            <br />Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Experience lightning-fast performance with our premium VPS and RDP services. 
            Reliable, secure, and affordable hosting solutions for your business needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/register"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose AuraDeploy?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We provide cutting-edge hosting solutions with unmatched performance and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glassmorphism p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options to suit your needs. From small projects to enterprise solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative glassmorphism p-8 hover:bg-white/20 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                  >
                    {plan.name === 'Custom Plans' ? 'Contact Us' : 'Get Started'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust AuraDeploy for their hosting needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glassmorphism p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center glassmorphism p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of satisfied customers and experience the power of premium hosting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 border border-white/20"
            >
              Sign In
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default HomePage;
