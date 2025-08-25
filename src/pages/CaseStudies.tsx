import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TrendingUp, Star, Phone, MapPin, Calendar, Award } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Stockholm Städservice",
      subtitle: "From Page 3 to Top 3 on Google Maps",
      description: "A family-owned cleaning service struggling with online visibility transformed their digital presence and tripled their customer calls.",
      results: [
        { metric: "+250%", label: "Increase in Calls", icon: Phone },
        { metric: "4.8★", label: "Google Rating", icon: Star },
        { metric: "#2", label: "Map Ranking", icon: MapPin },
        { metric: "3 months", label: "Time to Results", icon: Calendar }
      ],
      services: ["GMB Optimization", "Website Redesign", "Review Management"],
      challenge: "Stockholm Städservice was invisible online. Despite 15 years in business, they ranked on page 3 of Google Maps and received only 2-3 calls per week from online searches.",
      solution: "We completely optimized their Google My Business profile, built a professional website, and implemented a review management strategy to showcase their excellent service quality.",
      outcome: "Within 3 months, they moved to #2 on Google Maps for 'cleaning service Stockholm' and now receive 15-20 calls per week.",
      image: "/placeholder-before-after-1.jpg"
    },
    {
      id: 2,
      title: "CleanPro Stockholm",
      subtitle: "Instagram Success & Website Conversion Boost",
      description: "A modern cleaning company leveraged social media and website optimization to become Stockholm's most sought-after premium cleaning service.",
      results: [
        { metric: "+180%", label: "Instagram Engagement", icon: TrendingUp },
        { metric: "+120%", label: "Website Conversions", icon: Award },
        { metric: "85%", label: "Booking Rate Increase", icon: Phone },
        { metric: "2 months", label: "Time to Results", icon: Calendar }
      ],
      services: ["Social Media Management", "Website Optimization", "Booking System"],
      challenge: "CleanPro had a basic website but struggled to convert visitors into customers. Their Instagram had potential but lacked professional content strategy.",
      solution: "We redesigned their website with a streamlined booking process and created engaging Instagram content showcasing their premium cleaning transformations.",
      outcome: "Their website conversion rate increased by 120% and Instagram engagement grew by 180%, establishing them as Stockholm's premium cleaning brand.",
      image: "/placeholder-before-after-2.jpg"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero text-white mb-6 fade-in-up">
            Success Stories: How We Help Stockholm Cleaners Shine
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto fade-in-up">
            Real results from real cleaning businesses in Stockholm. See how our digital marketing strategies transformed their online presence and revenue.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bounce-in">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Cleaning Businesses Helped</div>
            </div>
            <div className="bounce-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-muted-foreground">Average Call Increase</div>
            </div>
            <div className="bounce-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction Rate</div>
            </div>
            <div className="bounce-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Ongoing Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="service-card border-0 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.services.map((service) => (
                          <Badge key={service} variant="secondary" className="bg-primary/10 text-primary">
                            {service}
                          </Badge>
                        ))}
                      </div>

                      <h2 className="text-3xl font-bold text-foreground mb-2">{study.title}</h2>
                      <h3 className="text-xl text-primary mb-6">{study.subtitle}</h3>
                      <p className="text-muted-foreground mb-8">{study.description}</p>

                      {/* Challenge */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-foreground mb-3">The Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-foreground mb-3">Our Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>

                      {/* Outcome */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-foreground mb-3">The Outcome</h4>
                        <p className="text-muted-foreground">{study.outcome}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-muted/50 p-8 lg:p-12 flex flex-col justify-center">
                      <h4 className="text-2xl font-bold text-foreground mb-8 text-center">Key Results</h4>
                      <div className="grid grid-cols-2 gap-6">
                        {study.results.map((result, resultIndex) => {
                          const IconComponent = result.icon;
                          return (
                            <div key={resultIndex} className="text-center">
                              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                              <div className="text-sm text-muted-foreground">{result.label}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section text-center text-primary mb-12 fade-in-up">
            What Our Clients Say
          </h2>

          <div className="space-y-8">
            <Card className="service-card hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground mb-4">
                  "Stockholm Digital Boost completely transformed our business. We went from struggling to get customers to being fully booked weeks in advance. The team understands the cleaning industry and knows exactly what works."
                </blockquote>
                <cite className="text-muted-foreground">
                  — Erik Nilsson, Owner of Stockholm Städservice
                </cite>
              </CardContent>
            </Card>

            <Card className="service-card hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground mb-4">
                  "The Instagram strategy they created for us is incredible. Our posts now get hundreds of likes and we regularly get DMs from potential customers. The website booking system has made everything so much easier."
                </blockquote>
                <cite className="text-muted-foreground">
                  — Anna Svensson, CleanPro Stockholm
                </cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section text-white mb-6 fade-in-up">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 fade-in-up">
            Join the growing number of Stockholm cleaning businesses that have transformed their online presence and revenue with our proven strategies.
          </p>
          <Button size="lg" className="btn-accent text-lg px-8 py-6 fade-in-up" asChild>
            <Link to="/contact">Start Your Transformation Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;