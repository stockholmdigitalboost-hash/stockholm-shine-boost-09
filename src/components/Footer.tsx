import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/d47aed23-6fdb-41ea-9871-df5bf6312c5b.png" 
                alt="Stockholm Digital Boost" 
                className="h-12 w-auto mr-3" 
              />
              <div>
                <h3 className="text-xl font-bold">Stockholm Digital Boost</h3>
                <p className="text-accent text-sm">Helping Stockholm's Cleaners Shine Online</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              We specialize in helping cleaning services in Stockholm dominate local search, 
              build professional websites, and grow their business through proven digital marketing strategies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-white/80">
                <MapPin className="w-4 h-4 mr-2 text-accent" />
                <span>Stockholm, Sweden</span>
              </div>
              <div className="flex items-center text-white/80">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                <span>+447479941177</span>
              </div>
              <div className="flex items-center text-white/80">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                <span>stockholmdigitalboost@gmail.com</span>
              </div>
              <div className="flex items-center text-white/80">
                <Clock className="w-4 h-4 mr-2 text-accent" />
                <span>Mon-Fri: 9:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/80 hover:text-accent transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#gmb" className="text-white/80 hover:text-accent transition-colors">
                  GMB Optimization
                </Link>
              </li>
              <li>
                <Link to="/services#website" className="text-white/80 hover:text-accent transition-colors">
                  Website Design
                </Link>
              </li>
              <li>
                <Link to="/services#social" className="text-white/80 hover:text-accent transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">
                  Free GMB Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Stockholm Digital Boost. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;