
import React from 'react';
import { Archive, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Collections = () => {
  const collectionCategories = [
    { 
      id: 'occasions', 
      name: 'Occasions', 
      collections: [
        {
          id: 'birthday',
          name: 'Birthday Celebrations',
          description: 'Luxurious hampers to celebrate birthdays with style and panache.',
          image: '/placeholder.svg',
          price: 'From £55'
        },
        {
          id: 'anniversary',
          name: 'Anniversary Treasures',
          description: 'Mark special milestones with our carefully curated anniversary collections.',
          image: '/placeholder.svg',
          price: 'From £75'
        },
        {
          id: 'congratulations',
          name: 'Congratulations',
          description: 'Celebrate achievements and special moments with premium gift hampers.',
          image: '/placeholder.svg',
          price: 'From £65'
        },
        {
          id: 'wedding',
          name: 'Wedding Gifts',
          description: 'Elegant hampers to celebrate the union of two souls.',
          image: '/placeholder.svg',
          price: 'From £95'
        }
      ]
    },
    { 
      id: 'seasonal', 
      name: 'Seasonal', 
      collections: [
        {
          id: 'christmas',
          name: 'Christmas Joy',
          description: 'Festive hampers filled with seasonal delights and holiday cheer.',
          image: '/placeholder.svg',
          price: 'From £85'
        },
        {
          id: 'summer',
          name: 'Summer Delights',
          description: 'Refreshing and vibrant hampers perfect for sunny days and picnics.',
          image: '/placeholder.svg',
          price: 'From £60'
        },
        {
          id: 'autumn',
          name: 'Autumn Comfort',
          description: 'Warm and cozy selections for the fall season.',
          image: '/placeholder.svg',
          price: 'From £70'
        },
        {
          id: 'spring',
          name: 'Spring Awakening',
          description: 'Fresh and rejuvenating hampers to welcome the spring season.',
          image: '/placeholder.svg',
          price: 'From £65'
        }
      ]
    },
    { 
      id: 'specialty', 
      name: 'Specialty', 
      collections: [
        {
          id: 'wellness',
          name: 'Wellness & Relaxation',
          description: 'Self-care focused hampers for those who deserve some tranquility.',
          image: '/placeholder.svg',
          price: 'From £75'
        },
        {
          id: 'gourmet',
          name: 'Gourmet Delicacies',
          description: 'Exquisite food and beverage collections for the connoisseur.',
          image: '/placeholder.svg',
          price: 'From £95'
        },
        {
          id: 'sustainable',
          name: 'Eco-Conscious',
          description: 'Environmentally friendly gift hampers with sustainable products.',
          image: '/placeholder.svg',
          price: 'From £80'
        },
        {
          id: 'luxury',
          name: 'Ultimate Luxury',
          description: 'Our most premium offerings for those truly special occasions.',
          image: '/placeholder.svg',
          price: 'From £150'
        }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-giftress-navy text-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Our Collections
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Explore our exquisitely curated hamper collections, designed for every occasion and recipient.
            </p>
          </div>
        </div>
      </section>
      
      {/* Collections Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="occasions" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100">
                {collectionCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="px-6 py-3 text-lg"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {collectionCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.collections.map((collection) => (
                    <Card key={collection.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                      <div className="h-56 bg-gray-100 relative">
                        <img 
                          src={collection.image} 
                          alt={collection.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 bg-giftress-gold text-white px-4 py-2 text-sm font-medium">
                          {collection.price}
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-playfair text-xl font-medium mb-2">{collection.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{collection.description}</p>
                        <Button className="w-full bg-giftress-blue hover:bg-giftress-navy text-white">
                          View Collection
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Custom Hampers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-block">
                  <div className="w-12 h-12 rounded-full bg-giftress-blue/20 flex items-center justify-center">
                    <Archive className="h-6 w-6 text-giftress-blue" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">Create Your Custom Hamper</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Can't find exactly what you're looking for? Design your perfect hamper with our customization service. 
                  Select the products, packaging, and presentation that meets your specific requirements.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-giftress-blue mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Choose from our premium product selection</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-giftress-blue mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Select your preferred packaging style</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-giftress-blue mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Add personalized messages and touches</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-giftress-blue mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Schedule delivery to your preferred address</span>
                  </li>
                </ul>
                <div>
                  <Button className="bg-giftress-blue hover:bg-giftress-navy text-white px-6 py-3 text-lg">
                    Start Customizing
                  </Button>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <BookOpen className="h-8 w-8 text-giftress-blue mr-4" />
                  <h3 className="font-playfair text-2xl font-medium">Our Catalog</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Browse our complete product catalog to include in your custom hamper. 
                  From artisanal foods and premium beverages to luxury self-care items and sustainable goods.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-gray-100 h-24 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Product {item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Download Full Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-giftress-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            Ready to Find Your Perfect Gift?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our team is here to help you select the perfect hamper for any occasion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-giftress-blue hover:bg-gray-100 text-lg py-6 px-8">
              Browse Collections
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg py-6 px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Collections;
