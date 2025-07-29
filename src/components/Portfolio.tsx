import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

import pathwayQuestScholars from '@/assets/pathway-quest-scholars.jpg';
import creativePreview from '@/assets/creative-preview.jpg';
import tendxAttendance from '@/assets/tendx-attendance.jpg';
import taskManager from '@/assets/task-manager.jpg';
import mernBlog from '@/assets/mern-blog.jpg';
import reactTodo from '@/assets/react-todo.jpg';
import syndicateCrypto from '@/assets/syndicate-crypto.jpg';
import mindshiftLms from '@/assets/mindshift-lms.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Pathway Quest Scholars',
      description: 'A web app that helps students prepare for national exams. I built the complete frontend and backend experience.',
      image: pathwayQuestScholars,
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      liveUrl: 'https://pathwayquest.onrender.com/about.html',
      githubUrl: 'https://github.com/Benedict258',
      featured: true,
    },
    {
      id: 2,
      title: 'Creative Preview Website',
      description: 'A sleek landing page I built to showcase my creative dev & design services.',
      image: creativePreview,
      tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
      liveUrl: 'https://creative-16es.onrender.com',
      githubUrl: 'https://github.com/Benedict258',
      featured: true,
    },
    {
      id: 3,
      title: 'TendX Smart Attendance',
      description: 'An intelligent system for event/institution attendance management.',
      image: tendxAttendance,
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: 'https://tendx.onrender.com',
      githubUrl: 'https://github.com/Benedict258',
      featured: false,
    },
    {
      id: 4,
      title: 'Pathway Quest Task Manager',
      description: 'A smart task management web app for maximizing productivity and efficiency.',
      image: taskManager,
      tags: ['React', 'CSS', 'JavaScript', 'Node.js'],
      liveUrl: 'https://pathway-quest.onrender.com',
      githubUrl: 'https://github.com/Benedict258',
      featured: false,
    },
    {
      id: 5,
      title: 'MERN Developer Blog (In Progress)',
      description: 'A developer blogging platform for tech stories, progress, and learning.',
      image: mernBlog,
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: 'https://mern-blog-5h98.onrender.com/',
      githubUrl: 'https://github.com/Benedict258',
      featured: true,
    },
    {
      id: 6,
      title: 'React Todo Manager',
      description: 'A fast and simple task management app with a beautiful UI.',
      image: reactTodo,
      tags: ['React', 'CSS', 'JavaScript'],
      liveUrl: 'https://react-assignment-app.onrender.com/',
      githubUrl: 'https://github.com/Benedict258',
      featured: false,
    },
    {
      id: 7,
      title: 'Syndicate Crypto Promo (In Progress)',
      description: 'A web presence for crypto campaigns and awareness building.',
      image: syndicateCrypto,
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://syndicate-inc.onrender.com',
      githubUrl: 'https://github.com/Benedict258',
      featured: false,
    },
    {
      id: 8,
      title: 'MindShift LMS (Upcoming)',
      description: 'A smart learning management system with course tracking and admin tools.',
      image: mindshiftLms,
      tags: ['React', 'Next.js', 'MongoDB', 'Node.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Benedict258',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-gradient-primary">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent work that demonstrates my passion for creating 
            beautiful, functional, and results-driven digital experiences
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((project) => project.featured)
            .slice(0, 2)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 glow-card">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="p-2 h-8 w-8" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2 h-8 w-8" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more work or discuss your project?
          </p>
          <Button size="lg" className="bg-gradient-primary hover:glow-electric" asChild>
            <a href="mailto:benedictisaac258@gmail.com?subject=Portfolio Discussion">
              Let's Talk About Your Project
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
