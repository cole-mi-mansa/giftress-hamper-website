
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-white shadow-md py-2' 
        : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-giftress-blue flex items-center justify-center text-white mr-3">
            <span className="font-playfair font-bold text-lg">G</span>
          </div>
          <h1 className={cn(
            "font-playfair font-bold text-xl md:text-2xl transition-colors",
            scrolled ? 'text-giftress-navy' : 'text-white'
          )}>
            Giftress Hampers
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={cn(
            "font-medium hover:text-giftress-blue transition-colors",
            scrolled ? 'text-gray-800' : 'text-white'
          )}>
            Home
          </Link>
          <Link to="/about" className={cn(
            "font-medium hover:text-giftress-blue transition-colors",
            scrolled ? 'text-gray-800' : 'text-white'
          )}>
            About
          </Link>
          <Link to="/collections" className={cn(
            "font-medium hover:text-giftress-blue transition-colors",
            scrolled ? 'text-gray-800' : 'text-white'
          )}>
            Collections
          </Link>
          <Link to="/corporate" className={cn(
            "font-medium hover:text-giftress-blue transition-colors",
            scrolled ? 'text-gray-800' : 'text-white'
          )}>
            Corporate
          </Link>
          <Link to="/contact" className={cn(
            "font-medium hover:text-giftress-blue transition-colors",
            scrolled ? 'text-gray-800' : 'text-white'
          )}>
            Contact
          </Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "hover:bg-opacity-20 hover:bg-gray-200",
              scrolled ? 'text-gray-800' : 'text-white'
            )}
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "hover:bg-opacity-20 hover:bg-gray-200",
              scrolled ? 'text-gray-800' : 'text-white'
            )}
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button 
            className={cn(
              "bg-giftress-blue hover:bg-giftress-navy text-white rounded-md"
            )}
          >
            Shop Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "hover:bg-opacity-20 hover:bg-gray-200",
              scrolled ? 'text-gray-800' : 'text-white'
            )}
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-3">
            <Link 
              to="/" 
              className="block py-2 text-gray-800 font-medium hover:text-giftress-blue"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-800 font-medium hover:text-giftress-blue"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/collections" 
              className="block py-2 text-gray-800 font-medium hover:text-giftress-blue"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </Link>
            <Link 
              to="/corporate" 
              className="block py-2 text-gray-800 font-medium hover:text-giftress-blue"
              onClick={() => setIsOpen(false)}
            >
              Corporate
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-800 font-medium hover:text-giftress-blue"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-4 py-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-800 hover:bg-gray-100"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-800 hover:bg-gray-100"
              >
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button className="bg-giftress-blue hover:bg-giftress-navy text-white">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
