
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Heart, Globe, Users, Calendar, CheckCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';

const productData = [
  {
    id: '1',
    name: 'Luxury Celebration Hamper',
    price: 129.99,
    image: '/public/lovable-uploads/ee105528-fdea-4168-a7b7-7ceaecec5c56.png',
    category: 'Celebration'
  },
  {
    id: '2',
    name: 'Wellness & Relaxation Box',
    price: 89.99,
    image: '/public/lovable-uploads/dcb67eee-1931-43ca-9123-c546c0373347.png',
    category: 'Wellness'
  },
  {
    id: '3',
    name: 'Executive Corporate Gift',
    price: 179.99,
    image: '/public/lovable-uploads/68acc411-e6f7-4f0d-90ad-99942ecb1bdd.png',
    category: 'Corporate'
  },
  {
    id: '4',
    name: 'Artisan Food & Wine Collection',
    price: 149.99,
    image: '/public/lovable-uploads/e423b968-aba8-4583-be28-4cede2a1449c.png',
    category: 'Gourmet'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center text-white py-28 md:py-0">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Exquisitely Curated Premium Gift Hampers
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Redefining gifting with luxury hampers that evoke joy, strengthen connections, and leave a lasting impression.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-primary text-lg py-6 px-8">
                Explore Collections
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 text-lg py-6 px-8">
                Corporate Gifting
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="text-center bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="mb-4 inline-block">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                  <span className="text-yellow-600 text-2xl">⭐</span>
                </div>
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 italic">
                "To redefine gifting by delivering exquisitely curated, premium hampers that evoke joy, strengthen 
                connections, and leave a lasting impression—all with seamless convenience and personalized care."
              </p>
            </div>
            
            <div className="text-center bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="mb-4 inline-block">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 text-2xl">🔮</span>
                </div>
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700 italic">
                "To become the most trusted and innovative gifting brand globally, known for transforming ordinary 
                moments into extraordinary memories through luxury, sustainability, and digital-first excellence."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">The Art of Luxury Gifting</h2>
          <p className="section-paragraph text-center">
            At Giftress Hampers, we believe that extraordinary gifting is an art—one that blends thoughtful curation, 
            premium quality, and unforgettable presentation. We specialize in luxury gift hampers designed to elevate 
            every occasion, from corporate milestones and weddings to birthdays, anniversaries, and festive celebrations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 mx-auto bg-giftress-blue/10 rounded-full flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-giftress-blue" />
              </div>
              <h3 className="section-subheading text-center">Luxury, Tailored to You</h3>
              <p className="text-gray-600">
                Customizable hampers with premium chocolates, wines, gourmet snacks, spa essentials, and more.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 mx-auto bg-giftress-blue/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-giftress-blue" />
              </div>
              <h3 className="section-subheading text-center">Exquisite Presentation</h3>
              <p className="text-gray-600">
                Elegant packaging, personalized touches, and attention to detail that makes every unboxing special.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 mx-auto bg-giftress-blue/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-giftress-blue" />
              </div>
              <h3 className="section-subheading text-center">Hassle-Free Gifting</h3>
              <p className="text-gray-600">
                Nationwide delivery, express options, and corporate gifting solutions to make your experience seamless.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 mx-auto bg-giftress-blue/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-giftress-blue" />
              </div>
              <h3 className="section-subheading text-center">Thoughtful & Sustainable</h3>
              <p className="text-gray-600">
                Ethically sourced products and eco-friendly packaging options that care for our planet.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about">
              <Button variant="outline" className="btn-outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Collections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-2">Featured Collections</h2>
              <p className="text-gray-600">Explore our most popular premium gift hampers</p>
            </div>
            <Link to="/collections" className="group mt-4 md:mt-0 flex items-center text-giftress-blue font-medium">
              View All Collections
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productData.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Sustainability Section */}
      <section className="sustainability-section py-20 bg-giftress-sage/10">
        <div className="container mx-auto px-4">
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg max-w-4xl mx-auto shadow-lg">
            <h2 className="section-heading mb-6">Sustainable & Ethical Gifting</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're committed to being the eco-conscious choice in luxury gifting, prioritizing sustainability without compromising on quality or experience.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-giftress-blue/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-giftress-blue"></div>
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2">Eco-Friendly Packaging</h3>
                  <p className="text-gray-600">
                    We're shifting to 100% recyclable and compostable packaging by 2025, reducing our environmental footprint while maintaining our elegant presentation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-giftress-blue/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-giftress-blue"></div>
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2">Supporting Local Artisans</h3>
                  <p className="text-gray-600">
                    60% of our products are sourced from local artisans and women-owned businesses, empowering communities while ensuring unique, high-quality offerings.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-giftress-blue/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-giftress-blue"></div>
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2">Carbon-Neutral Shipping</h3>
                  <p className="text-gray-600">
                    We're on track to achieve carbon-neutral shipping by 2026, working with partners who share our commitment to environmental responsibility.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Link to="/about">
                <Button className="btn-primary">Learn More About Our Impact</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Corporate Section */}
      <section className="py-20 bg-giftress-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
                Corporate Gifting Solutions
              </h2>
              <p className="text-lg mb-8 text-gray-300">
                Make your corporate gifting effortless and impressive with our bespoke solutions tailored to your business needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-giftress-blue mr-3 flex-shrink-0"></div>
                  <p>Customized hampers with your branding</p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-giftress-blue mr-3 flex-shrink-0"></div>
                  <p>Bulk ordering with volume discounts</p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-giftress-blue mr-3 flex-shrink-0"></div>
                  <p>Dedicated account manager for seamless experience</p>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-giftress-blue mr-3 flex-shrink-0"></div>
                  <p>International shipping options available</p>
                </div>
              </div>
              
              <Link to="/corporate">
                <Button className="bg-white text-giftress-navy hover:bg-gray-100">
                  Explore Corporate Gifting
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-giftress-blue/20 rounded-lg overflow-hidden">
                <img 
                  src="/public/lovable-uploads/68acc411-e6f7-4f0d-90ad-99942ecb1bdd.png" 
                  alt="Corporate Gift Hamper" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white text-giftress-navy p-6 rounded-lg shadow-xl max-w-xs">
                <h3 className="font-playfair font-semibold text-xl mb-2">Partnering with 500+ enterprises</h3>
                <p className="text-gray-700 text-sm">
                  Join the growing number of businesses choosing Giftress Hampers for their corporate gifting needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Authority Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded p-4 shadow-sm flex items-center justify-center h-32">
                    <Instagram className="h-12 w-12 text-pink-500" />
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded p-4 shadow-sm flex items-center justify-center h-32 text-white font-bold text-3xl">
                    250K+
                  </div>
                  <div className="col-span-2 bg-giftress-navy text-white rounded p-6 shadow-sm flex items-center justify-center">
                    <p className="text-center text-lg font-medium">UGC-Driven Campaigns</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-giftress-gold text-white p-3 rounded-lg shadow-md">
                <p className="font-medium">Gifting Influencer Network</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">Brand Authority & Community</h2>
              <p className="text-lg text-gray-700 mb-6">
                We're building a community centered around premium emotional gifting, establishing ourselves as thought leaders in the luxury gifting space.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-lg">Social Media Growth</h4>
                    <p className="text-gray-600">Growing our community to 250K+ followers through authentic user-generated content and storytelling.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-lg">Luxury Brand Collaborations</h4>
                    <p className="text-gray-600">Partnering with premium wellness brands and lifestyle influencers who share our values.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-lg">Gifting Etiquette Guide</h4>
                    <p className="text-gray-600">Our upcoming publication to establish thought leadership in the art of meaningful gifting.</p>
                  </div>
                </li>
              </ul>
              
              <Button variant="outline" className="btn-outline">
                Follow Our Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-paragraph text-center">
            Hear from clients who've experienced the joy of gifting with Giftress Hampers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard 
              name="Sarah Johnson"
              title="Head of HR"
              company="Horizon Tech"
              text="The corporate hampers we ordered were exceptional. Our clients were thrilled with the quality and presentation. Giftress Hampers made our company look impressive!"
              rating={5}
            />
            <TestimonialCard 
              name="Michael Reynolds"
              title="Repeat Customer"
              text="I've ordered multiple times for various occasions, and Giftress never disappoints. The attention to detail and personalization options make their hampers truly special."
              rating={5}
            />
            <TestimonialCard 
              name="Emma Thompson"
              title="First-time Buyer"
              text="The birthday hamper I sent to my sister exceeded all expectations. The packaging was beautiful, the products were high quality, and the customer service was outstanding."
              rating={4}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-giftress-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            Ready to Create Memorable Gifting Experiences?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Explore our collections or contact us for personalized gifting solutions that will delight your recipients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/collections">
              <Button className="bg-white text-giftress-blue hover:bg-gray-100 text-lg py-6 px-8">
                Shop Collections
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg py-6 px-8">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
