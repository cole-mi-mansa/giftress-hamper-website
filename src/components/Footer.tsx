
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-giftress-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-giftress-blue flex items-center justify-center text-white mr-3">
                <span className="font-playfair font-bold text-lg">G</span>
              </div>
              <h3 className="font-playfair font-bold text-xl">Giftress Hampers</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Redefining gifting by delivering exquisitely curated, premium hampers that evoke joy, strengthen connections, and leave a lasting impression.
            </p>
            <div className="flex space-x-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-giftress-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-giftress-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-giftress-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/collections" className="text-gray-300 hover:text-white transition-colors">Our Collections</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/corporate" className="text-gray-300 hover:text-white transition-colors">Corporate Gifting</Link></li>
              <li><Link to="/custom-hampers" className="text-gray-300 hover:text-white transition-colors">Custom Hampers</Link></li>
              <li><Link to="/sustainability" className="text-gray-300 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/delivery" className="text-gray-300 hover:text-white transition-colors">Delivery Information</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Gifting Etiquette</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:hello@giftresshampers.com" className="hover:text-giftress-blue transition-colors">
                  hello@giftresshampers.com
                </a>
              </p>
              <p className="text-gray-300">123 Gifting Street<br />London, UK</p>
              <Link to="/contact" className="bg-giftress-blue text-white px-4 py-2 rounded inline-block hover:bg-blue-700 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Giftress Hampers. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
