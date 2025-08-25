import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroCarousel from "@/components/HeroCarousel";
import { Link } from "react-router-dom";
import { Star, MapPin, Globe, Users, TrendingUp, Award } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: MapPin,
      title: "GMB Optimization",
      description: "Get found on Google Maps when customers search for cleaning services in Stockholm.",
      link: "/services#gmb"
    },
    {
      icon: Globe,
      title: "Website Design",
      description: "Professional websites that build trust and convert visitors into paying customers.",
      link: "/services#website"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Engaging content that showcases your work and attracts new clients on Instagram.",
      link: "/services#social"
    }
  ];

  const stats = [
    { number: "150+", label: "Cleaning Businesses Helped", icon: Users },
    { number: "300%", label: "Average Increase in Calls", icon: TrendingUp },
    { number: "4.9★", label: "Average Client Rating", icon: Star },
    { number: "Stockholm", label: "Local Market Experts", icon: MapPin }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-primary mb-4 fade-in-up">
              How We Help Stockholm's Cleaners Shine Online
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto fade-in-up">
              Our proven digital marketing strategies help cleaning businesses in Stockholm attract more customers and grow their revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.title}
                  className="service-card hover-lift border-0"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center bounce-in">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Button variant="outline" className="hover-glow" asChild>
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center text-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-3 flex justify-center">
                    <IconComponent className="w-8 h-8 text-accent bounce-in" />
                  </div>
                  <div className="text-3xl font-bold mb-2 fade-in-up">{stat.number}</div>
                  <div className="text-white/80 text-sm fade-in-up">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-primary mb-4 fade-in-up">
              Trusted by Stockholm's Leading Cleaning Services
            </h2>
            <p className="text-lg text-muted-foreground fade-in-up">
              Join the growing number of cleaning businesses that have transformed their online presence
            </p>
          </div>

          <Card className="border-0 bg-muted/30 hover-lift">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-foreground mb-4">
                    "Stockholm Digital Boost transformed our online presence completely. We went from getting 2-3 calls per week to 15-20 calls per week within just 2 months. Our Google Maps ranking improved dramatically!"
                  </blockquote>
                  <cite className="text-muted-foreground">
                    — Maria Andersson, Owner of CleanPro Stockholm
                  </cite>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/case-studies">View All Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section text-white mb-6 fade-in-up">
            Ready to Get More Customers?
          </h2>
          <p className="text-xl text-white/90 mb-8 fade-in-up">
            Get your free Google My Business audit and discover exactly how to improve your online visibility in Stockholm.
          </p>
          <Button size="lg" className="btn-accent text-lg px-8 py-6 fade-in-up" asChild>
            <Link to="/contact">Get Your Free Audit Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;