import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Download, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Note: This requires Supabase integration for database functionality
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setEmail('');
        
        // Trigger PDF download
        const link = document.createElement('a');
        link.href = '/Top10ResumeTips.pdf';
        link.download = 'Top10ResumeTips.pdf';
        link.click();
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
                Grab your Free PDF: Top 10 Resume Tips
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get my proven resume tips that helped hundreds of professionals land their dream jobs. 
                This comprehensive guide includes ATS optimization strategies and real examples.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full"
                  required
                  disabled={isSubmitting}
                />
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:glow-electric"
                  disabled={isSubmitting}
                >
                  <Download className="mr-2 w-5 h-5" />
                  {isSubmitting ? 'Processing...' : 'Download Now'}
                </Button>
              </form>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Check your download! The PDF should start downloading automatically.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4" />
                  {errorMessage}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadForm;