import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    id: 1,
    headline: "Is Your Cleaning Business Invisible on Google?",
    subheadline: "We help you get found by customers in Stockholm.",
    cta: "See Our Services",
    ctaLink: "/services",
    background: "bg-gradient-to-r from-primary/90 via-primary-light/90 to-accent/90",
    image: heroSlide1
  },
  {
    id: 2,
    headline: "A Professional Website That Wins Clients",
    subheadline: "From simple landing pages to full booking systems.",
    cta: "View Case Studies",
    ctaLink: "/case-studies",
    background: "bg-gradient-to-r from-primary-dark/90 via-primary/90 to-primary-light/90",
    image: heroSlide2
  },
  {
    id: 3,
    headline: "Don't Just Clean, Shine Online",
    subheadline: "Get your free GMB audit today.",
    cta: "Get Free Audit",
    ctaLink: "/contact",
    background: "bg-gradient-to-r from-accent/90 via-accent-light/90 to-primary/90",
    image: heroSlide3
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <img 
              src={slide.image} 
              alt={slide.headline}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${slide.background}`}></div>
            <div className="relative z-10 w-full h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1 className="heading-hero text-white mb-6 fade-in-up">
                    {slide.headline}
                  </h1>
                  <p className="text-xl text-white/90 mb-8 fade-in-up max-w-2xl">
                    {slide.subheadline}
                  </p>
                  <Button
                    size="lg"
                    className="btn-accent text-lg px-8 py-6 fade-in-up"
                    asChild
                  >
                    <Link to={slide.ctaLink}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;