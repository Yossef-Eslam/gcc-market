import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    category: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      country: "",
      category: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Let's start the conversation about your GCC expansion
          </p>
          
          <a
            href="https://calendly.com/k-elmoslimany/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block mb-4"
          >
            Book a diagnostic call
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-card p-8 md:p-12 rounded-xl border-2 border-border">
            <div className="flex items-center gap-3 mb-8">
              <Mail size={32} className="text-primary" />
              <h2 className="text-2xl font-bold">Send us an enquiry</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-semibold mb-2">
                    Country / Market(s)
                  </label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-semibold mb-2">
                  Category
                </label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g., Food & Beverage, Personal Care"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background border-border"
                />
              </div>

              <Button type="submit" className="btn-primary w-full md:w-auto">
                <Send size={20} className="mr-2" />
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gradient-to-br from-card to-secondary/50 p-12 rounded-xl border-2 border-primary max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to build your GCC success story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's start with 30 minutes. We'll assess readiness and surface immediate opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/k-elmoslimany/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a diagnostic call
              </a>
              <a
                href="/capabilities-deck.pdf"
                download
                className="btn-outline"
              >
                Download capabilities deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
