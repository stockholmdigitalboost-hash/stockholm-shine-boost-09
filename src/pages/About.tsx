import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Users, 
  Award, 
  Target, 
  Heart, 
  TrendingUp,
  Mail,
  Linkedin,
  Clock
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Marcus Lindström",
      role: "Founder & Digital Marketing Strategist",
      bio: "10+ years in digital marketing with deep expertise in local SEO and Google My Business optimization. Former marketing director at Stockholm's largest cleaning franchise.",
      image: "/placeholder-team-1.jpg",
      linkedin: "#"
    },
    {
      name: "Sara Johansson",
      role: "Social Media & Content Specialist",
      bio: "Creative content strategist specializing in Instagram marketing for service businesses. Helped 50+ Stockholm businesses build engaging social media presence.",
      image: "/placeholder-team-2.jpg",
      linkedin: "#"
    },
    {
      name: "David Andersson",
      role: "Web Developer & UX Designer",
      bio: "Full-stack developer focused on conversion-optimized websites for local businesses. Expert in booking systems and mobile-first design.",
      image: "/placeholder-team-3.jpg",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your business revenue and growth."
    },
    {
      icon: Heart,
      title: "Local Commitment",
      description: "As Stockholm locals, we understand the unique challenges and opportunities in our market."
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Specialized knowledge in cleaning service marketing with proven strategies that work."
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We're not just a vendor - we're your growth partners invested in your long-term success."
    }
  ];

  const achievements = [
    { number: "150+", label: "Cleaning Businesses Served", icon: Users },
    { number: "5 years", label: "Stockholm Market Experience", icon: Clock },
    { number: "300%", label: "Average ROI for Clients", icon: TrendingUp },
    { number: "98%", label: "Client Retention Rate", icon: Award }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero text-white mb-6 fade-in-up">
            About Stockholm Digital Boost
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto fade-in-up">
            We're a dedicated team of local marketing experts passionate about helping Stockholm's cleaning businesses thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section text-primary mb-6 fade-in-up">
                Our Mission: Helping Stockholm's Cleaners Shine Online
              </h2>
              <p className="text-lg text-muted-foreground mb-6 fade-in-up">
                We founded Stockholm Digital Boost because we saw too many excellent cleaning businesses struggling to get found online. Despite providing outstanding service, they were losing customers to competitors with better digital presence.
              </p>
              <p className="text-lg text-muted-foreground mb-8 fade-in-up">
                Our mission is simple: help every cleaning service in Stockholm dominate their local market through strategic digital marketing that actually works.
              </p>
              <Button size="lg" className="btn-hero fade-in-up" asChild>
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card
                    key={achievement.label}
                    className="service-card text-center hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-2">{achievement.number}</div>
                      <div className="text-sm text-muted-foreground">{achievement.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-primary mb-4 fade-in-up">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto fade-in-up">
              The principles that guide everything we do for our clients and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={value.title}
                  className="service-card text-center hover-lift border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section text-primary mb-4 fade-in-up">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto fade-in-up">
              Local Stockholm marketing experts who understand your business and your market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="service-card hover-lift border-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>
                  <Button variant="outline" size="sm" className="hover-glow">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent-light">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section text-white mb-6 fade-in-up">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 fade-in-up">
            Let's discuss how we can help your cleaning business dominate Stockholm's digital market.
          </p>
          <Button size="lg" className="bg-white text-accent-foreground hover:bg-white/90 text-lg px-8 py-6 fade-in-up" asChild>
            <Link to="/contact">Start Your Journey Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;