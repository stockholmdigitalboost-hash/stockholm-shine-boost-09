import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Sparkles,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.businessName || !formData.phone || !formData.service) {
      toast({
        title: "Please fill in all required fields",
        description: "We need your basic information to provide the best audit.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Free Audit Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free GMB audit.",
    });

    // Reset form
    setFormData({
      name: "",
      businessName: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@stockholmdigitalboost.se",
      description: "Send us a message anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+46 8 123 456 78",
      description: "Call us during business hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Stockholm, Sweden",
      description: "Serving all of Greater Stockholm"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri 9:00-17:00",
      description: "Swedish time (CET/CEST)"
    }
  ];

  const auditIncludes = [
    "Complete Google My Business profile analysis",
    "Local keyword ranking assessment",
    "Competitor comparison and insights",
    "Review management audit",
    "Photo and content optimization review",
    "Actionable improvement recommendations"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero text-white mb-6 fade-in-up">
            Get Your Free Google My Business Audit
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto fade-in-up">
            Discover exactly how to improve your online visibility and attract more customers in Stockholm. No cost, no obligation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-left">
              <Card className="service-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Sparkles className="w-6 h-6 text-accent mr-3" />
                    Request Your Free Audit
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll contact you within 24 hours to schedule your comprehensive GMB audit.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          value={formData.businessName}
                          onChange={(e) => handleInputChange('businessName', e.target.value)}
                          placeholder="Your cleaning company name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+46 XX XXX XX XX"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Primary Interest *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the service you're most interested in" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gmb">GMB Optimization</SelectItem>
                          <SelectItem value="website">Website Design</SelectItem>
                          <SelectItem value="social">Social Media Management</SelectItem>
                          <SelectItem value="all">All Services</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your current challenges or goals..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="btn-accent w-full">
                      Request Free Audit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Audit Information & Contact Details */}
            <div className="space-y-8 fade-in-left">
              {/* What's Included */}
              <Card className="service-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-2" />
                    What's Included in Your Free Audit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {auditIncludes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm text-accent-foreground">
                      <strong>Value:</strong> This comprehensive audit typically costs 2,500 SEK, but it's completely free for Stockholm cleaning businesses.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="service-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="w-5 h-5 text-primary mr-2" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => {
                      const IconComponent = contact.icon;
                      return (
                        <div key={index} className="flex items-start">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{contact.title}</h4>
                            <p className="text-primary font-medium">{contact.value}</p>
                            <p className="text-sm text-muted-foreground">{contact.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-section text-primary mb-4 fade-in-up">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="service-card hover-lift border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  How long does the audit take?
                </h3>
                <p className="text-muted-foreground">
                  The audit process takes 3-5 business days. We'll present our findings in a 30-minute video call where we'll walk through our recommendations and answer your questions.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card hover-lift border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Is there really no cost for the audit?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely no cost. We provide this audit free of charge because we're confident in our ability to help Stockholm cleaning businesses succeed. There's no obligation to work with us after the audit.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card hover-lift border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Do you only work with cleaning businesses?
                </h3>
                <p className="text-muted-foreground">
                  While we specialize in cleaning services, our expertise extends to other local service businesses in Stockholm. Our deep understanding of the cleaning industry gives us unique insights that benefit all our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent-light">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section text-white mb-6 fade-in-up">
            Ready to Dominate Local Search?
          </h2>
          <p className="text-xl text-white/90 mb-8 fade-in-up">
            Join 150+ Stockholm cleaning businesses that have transformed their online presence with our proven strategies.
          </p>
          <Button size="lg" className="bg-white text-accent-foreground hover:bg-white/90 text-lg px-8 py-6 fade-in-up">
            Scroll Up to Request Your Free Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;