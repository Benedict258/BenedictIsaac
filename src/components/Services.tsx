import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: Star,
      description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.',
      features: [
        'Responsive web design',
        'Frontend & backend development',
        'Performance optimization',
        'SEO implementation',
        'Cross-browser compatibility',
        'Mobile-first approach',
      ],
    },
    {
      id: 2,
      title: 'Software Development',
      icon: Zap,
      description: 'Custom web applications and software solutions tailored to your specific business needs and requirements.',
      features: [
        'Custom web applications',
        'Database design & management',
        'API development & integration',
        'User authentication systems',
        'Real-time features',
        'Scalable architecture',
      ],
    },
    {
      id: 3,
      title: 'Digital Marketing',
      icon: Rocket,
      description: 'Data-driven strategies to grow your online presence, increase engagement, and drive meaningful conversions.',
      features: [
        'Content strategy & creation',
        'Social media management',
        'SEO optimization',
        'Analytics & reporting',
        'Brand positioning',
        'Conversion optimization',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gradient-primary">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="relative p-8 h-full transition-all duration-300 glow-card bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full bg-gradient-primary hover:glow-electric"
                    asChild
                  >
                    <a href="mailto:benedictisaac258@gmail.com?subject=Project Inquiry">
                      Get Started
                    </a>
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Need something custom? Let's discuss your unique requirements.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:benedictisaac258@gmail.com?subject=Custom Project Inquiry">
              Schedule a Consultation
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;