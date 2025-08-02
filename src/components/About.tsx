import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Code, Palette, TrendingUp, Zap } from 'lucide-react';
const benedictAvatar = '/lovable-uploads/562cf4f4-338d-4c05-8fc9-26a55b5e23bb.png';

const About = () => {
  const techSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Next.js',
    'MERN Stack',
    'Node.js',
    'Tailwind CSS',
  ];

  const softSkills = [
    'Communication',
    'Problem Solving',
    'Creative Thinking',
    'Client Collaboration',
  ];

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that convert visitors into customers',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to grow your online presence and revenue',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites that rank well and delight users',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gradient-primary">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate creator at the intersection of technology and marketing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10"
              >
                <img
                  src={benedictAvatar}
                  alt="Benedict Isaac"
                  className="w-80 h-80 rounded-2xl object-cover mx-auto lg:mx-0 glow-card"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 animate-glow" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Crafting Digital Experiences That{' '}
              <span className="text-gradient-secondary">Convert</span>
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a creative software developer and digital strategist who builds high-performing 
                websites and applications for creators, startups, and personal brands. My mission 
                is to help you stand out online through technology, design, and strategy that 
                delivers measurable results.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-xl font-heading font-semibold">Tech Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-heading font-semibold">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge variant="outline" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 glow-card">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-heading font-semibold text-lg">{service.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;