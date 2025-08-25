import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Globe, 
  Users, 
  Star, 
  Phone, 
  Camera, 
  MessageSquare, 
  TrendingUp,
  CheckCircle,
  Zap,
  Palette,
  ShoppingCart
} from "lucide-react";

const Services = () => {
  const gmbFeatures = [
    "Complete Google My Business setup and optimization",
    "Strategic keyword optimization for Stockholm cleaning searches",
    "Professional photo uploads and management",
    "Review management and response strategy",
    "Local citation building and consistency",
    "Monthly performance reports and analytics"
  ];

  const websitePackages = [
    {
      name: "Starter Site",
      price: "From 8,900 SEK",
      features: [
        "5-page professional website",
        "Mobile-responsive design",
        "Contact forms and business info",
        "Basic SEO optimization",
        "SSL certificate included",
        "1 month of support"
      ],
      icon: Zap,
      popular: false
    },
    {
      name: "Booking Funnel Site",
      price: "From 15,900 SEK",
      features: [
        "Everything in Starter Site",
        "Online booking system",
        "Payment processing integration",
        "Customer review collection",
        "Advanced analytics tracking",
        "3 months of support",
        "Social media integration"
      ],
      icon: ShoppingCart,
      popular: true
    }
  ];

  const socialMediaServices = [
    "Content creation strategy for cleaning businesses",
    "Before/after photo optimization",
    "Instagram Stories and Reels production",
    "Customer testimonial campaigns",
    "Local hashtag research and implementation",
    "Monthly content calendar and scheduling"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero text-white mb-6 fade-in-up">
            Digital Marketing Services for Stockholm's Cleaning Businesses
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto fade-in-up">
            Comprehensive solutions to help your cleaning service get found online, win more customers, and grow your business in Stockholm.
          </p>
        </div>
      </section>

      {/* GMB Optimization */}
      <section id="gmb" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Google My Business Optimization</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Dominate local search results when Stockholm residents search for cleaning services. Our GMB optimization gets you found by customers who are ready to book.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+250%</div>
                  <div className="text-sm text-muted-foreground">More Calls</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Top 3</div>
                  <div className="text-sm text-muted-foreground">Map Rankings</div>
                </div>
              </div>

              <Button size="lg" className="btn-hero" asChild>
                <Link to="/contact">Get Your Free GMB Audit</Link>
              </Button>
            </div>

            <Card className="service-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-2" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {gmbFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Website Design */}
      <section id="website" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Website Design & Development</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional websites that build trust, showcase your services, and convert visitors into customers. Choose from our two popular packages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {websitePackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <Card
                  key={pkg.name}
                  className={`service-card relative ${pkg.popular ? 'ring-2 ring-accent' : ''}`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-6 ${pkg.popular ? 'btn-accent' : 'btn-hero'}`} 
                      asChild
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Management */}
      <section id="social" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="w-5 h-5 text-accent mr-2" />
                  Social Media Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {socialMediaServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Social Media Management</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Show off your amazing work and attract new customers with professional Instagram content. We create engaging posts that showcase your cleaning transformations.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+180%</div>
                  <div className="text-sm text-muted-foreground">Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+85%</div>
                  <div className="text-sm text-muted-foreground">New Followers</div>
                </div>
              </div>

              <Button size="lg" className="btn-hero" asChild>
                <Link to="/contact">Start Social Media Growth</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent-light">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section text-white mb-6 fade-in-up">
            Ready to Dominate Stockholm's Cleaning Market?
          </h2>
          <p className="text-xl text-white/90 mb-8 fade-in-up">
            Let's discuss which services are perfect for your cleaning business. Get your free consultation today.
          </p>
          <Button size="lg" className="bg-white text-accent-foreground hover:bg-white/90 text-lg px-8 py-6 fade-in-up" asChild>
            <Link to="/contact">Get Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;