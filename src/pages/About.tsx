
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-giftress-navy text-white py-24 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-6">About Giftress Hampers</h1>
            <p className="text-lg md:text-xl opacity-90">
              Redefining gifting through exquisite curation, premium quality, and unforgettable presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="section-heading mb-6">Our Story</h2>
              <p className="text-lg text-gray-700">
                At Giftress Hampers, we believe that extraordinary gifting is an art—one that blends thoughtful curation, 
                premium quality, and unforgettable presentation. We specialize in luxury gift hampers designed to elevate 
                every occasion, from corporate milestones and weddings to birthdays, anniversaries, and festive celebrations.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Our mission is simple: to make gifting effortless, elegant, and extraordinary. Each of our hampers is 
                meticulously crafted with handpicked gourmet treats, artisanal products, and bespoke additions, 
                ensuring a gift that impresses and delights.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center mr-4">
                    <Star className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold">Mission Statement</h3>
                </div>
                <p className="text-gray-700 italic">
                  "To redefine gifting by delivering exquisitely curated, premium hampers that evoke joy, strengthen 
                  connections, and leave a lasting impression—all with seamless convenience and personalized care."
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-4">
                    <div className="h-5 w-5 rounded-full bg-purple-500"></div>
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold">Vision Statement</h3>
                </div>
                <p className="text-gray-700 italic">
                  "To become the most trusted and innovative gifting brand globally, known for transforming ordinary 
                  moments into extraordinary memories through luxury, sustainability, and digital-first excellence."
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h3 className="text-2xl font-playfair font-semibold mb-8 text-center">Why Choose Giftress Hampers?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="text-giftress-blue mr-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-500 text-xl">🎀</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-2">Luxury, Tailored to You</h4>
                    <p className="text-gray-600">
                      Customizable hampers with premium chocolates, wines, gourmet snacks, spa essentials, and more.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-giftress-blue mr-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <span className="text-yellow-500 text-xl">✨</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-2">Exquisite Presentation</h4>
                    <p className="text-gray-600">
                      Elegant packaging, personalized touches, and attention to detail that makes every unboxing special.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-giftress-blue mr-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-500 text-xl">⚡</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-2">Hassle-Free Gifting</h4>
                    <p className="text-gray-600">
                      Nationwide delivery, express options, and corporate gifting solutions to make your experience seamless.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="text-giftress-blue mr-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-500 text-xl">🌿</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-2">Thoughtful & Sustainable</h4>
                    <p className="text-gray-600">
                      Ethically sourced products and eco-friendly packaging options that care for our planet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/collections">
                <Button className="btn-primary text-lg px-8 py-6">
                  Explore Our Collections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Goals & Objectives Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-12">Our Goals & Objectives</h2>

          <div className="max-w-5xl mx-auto">
            <div className="mb-12 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-playfair text-2xl font-medium mb-6">1. Customer-Centric Excellence</h3>
              <p className="font-medium mb-4 text-giftress-navy">Goal: Deliver unmatched gifting experiences.</p>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Achieve a 95% customer satisfaction rate through premium quality and personalization.</p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Offer 24/7 customer support with a &lt;2-hour response time.</p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Implement AI-driven gift recommendations by 2025.</p>
                </li>
              </ul>
            </div>
            
            <div className="mb-12 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-playfair text-2xl font-medium mb-6">2. Digital Innovation & Market Expansion</h3>
              <p className="font-medium mb-4 text-giftress-navy">Goal: Lead in e-commerce gifting solutions.</p>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Grow online sales by 40% YoY through SEO and social commerce.</p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Launch a mobile app with AR "unboxing previews" by 2026.</p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Expand to 3 new international markets by 2027.</p>
                </li>
              </ul>
            </div>
            
            <div className="mb-12 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-playfair text-2xl font-medium mb-6">3. Sustainable & Ethical Growth</h3>
              <p className="font-medium mb-4 text-giftress-navy">Goal: Be the eco-conscious choice in luxury gifting.</p>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Shift to 100% recyclable/compostable packaging by 2025.</p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Source 60% of products from local artisans and women-owned businesses.</p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Carbon-neutral shipping by 2026.</p>
                </li>
              </ul>
            </div>
            
            <div className="mb-12 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-playfair text-2xl font-medium mb-6">4. Corporate & B2B Dominance</h3>
              <p className="font-medium mb-4 text-giftress-navy">Goal: Be the top choice for corporate gifting.</p>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Partner with 500+ enterprises for employee/client gifting by 2026.</p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Develop automated bulk-order portals with branded customization.</p>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-playfair text-2xl font-medium mb-6">5. Brand Authority & Community</h3>
              <p className="font-medium mb-4 text-giftress-navy">Goal: Be synonymous with premium emotional gifting.</p>
              <ul className="space-y-3">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Grow social media following to 250K+ with UGC-driven campaigns.</p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Collaborate with luxury influencers and wellness brands.</p>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-giftress-blue mr-3 flex-shrink-0" />
                  <p>Publish a "Gifting Etiquette Guide" to establish thought leadership.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
