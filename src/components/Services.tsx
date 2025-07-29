import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      tier: 'Starter',
      icon: Star,
      price: '$2,500',
      period: 'Starting at',
      description: 'Perfect for small businesses and personal brands',
      features: [
        'Landing page or portfolio site',
        'Mobile-responsive design',
        'Contact form integration',
        'Basic SEO optimization',
        '3 revisions included',
        '1-week delivery',
      ],
      popular: false,
      gradient: 'bg-gradient-to-br from-blue-500/10 to-purple-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      tier: 'Growth',
      icon: Zap,
      price: '$4,500',
      period: 'Starting at',
      description: 'Ideal for growing businesses that need more features',
      features: [
        'Multi-page website (up to 5 pages)',
        'Custom design & animations',
        'CMS integration',
        'Advanced SEO & analytics',
        'Performance optimization',
        'Email marketing setup',
        '5 revisions included',
        '2-week delivery',
      ],
      popular: true,
      gradient: 'bg-gradient-primary',
      borderColor: 'border-primary/50',
    },
    {
      tier: 'Premium',
      icon: Rocket,
      price: '$8,500',
      period: 'Starting at',
      description: 'Complete digital presence for established brands',
      features: [
        'Full website (unlimited pages)',
        'E-commerce functionality',
        'Custom web applications',
        'Brand strategy & positioning',
        'Marketing automation',
        'Advanced analytics & tracking',
        'Ongoing support (3 months)',
        'Unlimited revisions',
        '3-week delivery',
      ],
      popular: false,
      gradient: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/20',
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
            Services & Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package to elevate your digital presence and drive results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.tier}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`relative p-8 h-full ${
                    service.popular
                      ? 'border-primary/50 glow-electric'
                      : 'border-border/50'
                  } ${service.gradient} backdrop-blur-sm transition-all duration-300`}
                >
                  {/* Icon & Tier */}
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                        service.popular
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-gradient-secondary'
                      }`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {service.tier}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="text-sm text-muted-foreground mb-1">
                      {service.period}
                    </div>
                    <div className="text-4xl font-bold text-gradient-primary mb-1">
                      {service.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      per project
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      service.popular
                        ? 'bg-primary hover:bg-primary/90'
                        : 'bg-gradient-secondary hover:glow-purple'
                    }`}
                    size="lg"
                    asChild
                  >
                    <a href="mailto:benedict@example.com?subject=Project Inquiry - {service.tier} Package">
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
            <a href="mailto:benedict@example.com?subject=Custom Project Inquiry">
              Schedule a Consultation
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;