import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Target, 
  FileText, 
  Users, 
  CheckCircle, 
  Download,
  ArrowRight,
  Calendar,
  MessageSquare,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CareerServices = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentRole: '',
    targetRole: '',
    experience: '',
    challenges: ''
  });

  const services = [
    {
      icon: Target,
      title: "Career Strategy",
      description: "Define your goals, map your path, and negotiate with confidence.",
      anchor: "strategy"
    },
    {
      icon: FileText,
      title: "Resume & LinkedIn Makeover",
      description: "Transform your resume and profile to pass ATS filters and grab recruiter attention.",
      anchor: "resume"
    },
    {
      icon: Users,
      title: "Job Search Coaching",
      description: "Master networking, interviewing, and follow-up for faster offers.",
      anchor: "coaching"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Free Consultation Call",
      description: "We discuss your goals, challenges, and create a personalized action plan.",
      icon: MessageSquare
    },
    {
      step: 2,
      title: "Personalized Strategy Plan",
      description: "Receive a detailed roadmap tailored to your industry and career level.",
      icon: Target
    },
    {
      step: 3,
      title: "Implementation & Review",
      description: "Execute the plan with ongoing feedback and refinements.",
      icon: TrendingUp
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "Continue with follow-up sessions and career maintenance.",
      icon: Award
    }
  ];

  const testimonials = [
    {
      name: "Maria Chen",
      role: "Tech Product Manager",
      quote: "Benedict went above and beyond to bring our vision to life. The system is fast, stable, and beautifully designed.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Rodriguez",
      role: "Software Engineer",
      quote: "His responsiveness and ability to simplify complex ideas made the entire process seamless. Highly recommended.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      quote: "An amazing collaboration! The design and speed of delivery exceeded expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "How long does the career strategy process take?",
      answer: "Most clients see significant progress within 2-4 weeks. The initial strategy session takes 1 hour, with follow-up sessions as needed."
    },
    {
      question: "How many revisions are included?",
      answer: "Resume and LinkedIn makeovers include up to 3 rounds of revisions. Strategy sessions include unlimited email support for 30 days."
    },
    {
      question: "Do you offer resume services only?",
      answer: "Yes, I offer standalone resume writing, LinkedIn optimization, or interview coaching. However, the complete career strategy package provides the best results."
    },
    {
      question: "What industries do you specialize in?",
      answer: "I work with professionals across tech, marketing, finance, healthcare, and creative industries. My approach adapts to your specific field's requirements."
    },
    {
      question: "How do I schedule my consultation call?",
      answer: "Simply click 'Book a Strategy Call' or fill out the contact form below. I'll respond within 24 hours to schedule your free consultation."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Career Strategy Consultation Request";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCurrent Role: ${formData.currentRole}\nTarget Role: ${formData.targetRole}\nExperience: ${formData.experience}\nChallenges: ${formData.challenges}`;
    window.location.href = `mailto:benedictisaac258@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-background/30 dark:bg-background/50" />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            >
              Empowering Your{' '}
              <span className="text-gradient-primary">Career Growth</span>
              <br />
              with Expert Strategy &{' '}
              <span className="text-gradient-secondary">Tailored Resumes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              From strategic career mapping to ATS-friendly resumes and proactive job search coaching—unlock your next opportunity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:glow-electric text-lg px-8 py-6 h-auto"
                asChild
              >
                <a href="mailto:benedictisaac258@gmail.com">Book a Strategy Call</a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 h-auto border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://www.fiverr.com/inbox/benedictresume" target="_blank" rel="noopener noreferrer">
                  Reach Out to Me on Fiverr
                </a>
              </Button>
            </motion.div>

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gradient-primary p-1">
                <img
                  src="/lovable-uploads/562cf4f4-338d-4c05-8fc9-26a55b5e23bb.png"
                  alt="Benedict Isaac"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              My Career Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive career support designed to accelerate your professional growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full glow-card hover:glow-electric transition-all duration-300 group">
                  <CardContent className="p-8">
                    <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-heading font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary-foreground hover:bg-primary"
                      onClick={() => {
                        document.getElementById(service.anchor)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              My 4-Step Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that gets results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 space-y-20">
          {/* Career Strategy */}
          <motion.div
            id="strategy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-20"
          >
            <Card className="glow-card">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Target className="w-16 h-16 text-primary mb-6" />
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Career Strategy</h3>
                    <p className="text-muted-foreground mb-6">
                      Define your professional goals with clarity and create a roadmap that leads to meaningful career advancement. 
                      I help you identify your strengths, navigate industry trends, and position yourself for opportunities that align with your values.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Career goal clarification and planning
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Industry research and positioning
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Salary negotiation strategies
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="w-64 h-64 bg-gradient-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Target className="w-32 h-32 text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Resume & LinkedIn */}
          <motion.div
            id="resume"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-20"
          >
            <Card className="glow-card">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 text-center">
                    <div className="w-64 h-64 bg-gradient-secondary/20 rounded-full flex items-center justify-center mx-auto">
                      <FileText className="w-32 h-32 text-secondary" />
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <FileText className="w-16 h-16 text-secondary mb-6" />
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Resume & LinkedIn Makeover</h3>
                    <p className="text-muted-foreground mb-6">
                      Transform your professional documents to stand out in applicant tracking systems and catch recruiter attention. 
                      I craft compelling narratives that showcase your achievements and align with your target roles.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        ATS-optimized resume writing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        LinkedIn profile optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        Cover letter templates
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Job Search Coaching */}
          <motion.div
            id="coaching"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-20"
          >
            <Card className="glow-card">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Users className="w-16 h-16 text-accent mb-6" />
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Job Search Coaching</h3>
                    <p className="text-muted-foreground mb-6">
                      Master the art of networking, interviewing, and follow-up to accelerate your job search timeline. 
                      Learn proven strategies that help you build relationships and convert opportunities into offers.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Interview preparation and practice
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Networking strategies and outreach
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Follow-up and negotiation tactics
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="w-64 h-64 bg-gradient-accent/20 rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-32 h-32 text-accent" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Client Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from professionals who transformed their careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full glow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resource Download */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="glow-card">
              <CardContent className="p-8 md:p-12">
                <Download className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Free Resource: Top 10 Resume Tips
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get my proven resume tips that helped hundreds of professionals land their dream jobs. 
                  This comprehensive guide includes ATS optimization strategies and real examples.
                </p>
                
                <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = `mailto:benedictisaac258@gmail.com?subject=Resume Tips Download Request&body=Please send me the Top 10 Resume Tips PDF. Email: ${(e.target as any).email.value}`;
                }}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:glow-electric"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Now (Free)
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about my career services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glow-card">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/10 transition-colors rounded-lg"
                      onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    >
                      <h3 className="font-semibold pr-4">{faq.question}</h3>
                      {activeAccordion === index ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glow-card">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                      Ready to Transform Your Career?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Let's discuss your career goals and create a personalized strategy for your success. 
                      Fill out the form and I'll get back to you within 24 hours.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>Free 30-minute consultation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        <span>Personalized career roadmap</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>No obligation, just value</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <Input
                      name="phone"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="currentRole"
                        placeholder="Current Role"
                        value={formData.currentRole}
                        onChange={handleInputChange}
                      />
                      <Input
                        name="targetRole"
                        placeholder="Target Role"
                        value={formData.targetRole}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <Input
                      name="experience"
                      placeholder="Years of Experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                    />
                    
                    <Textarea
                      name="challenges"
                      placeholder="What are your biggest career challenges?"
                      rows={4}
                      value={formData.challenges}
                      onChange={handleInputChange}
                    />
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-primary hover:glow-electric"
                    >
                      Book My Free Strategy Call
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't let another opportunity pass you by. Start your career transformation today.
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:glow-electric text-lg px-12 py-6 h-auto"
              asChild
            >
              <a href="mailto:benedictisaac258@gmail.com">Start Your Career Strategy</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerServices;