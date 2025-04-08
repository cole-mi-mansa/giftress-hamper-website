
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Building, Users, Gift, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Corporate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-giftress-navy text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Corporate Gifting Solutions
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Elevate your corporate gifting strategy with our premium, customizable hampers that leave a lasting impression.
            </p>
            <Button className="bg-white text-giftress-navy hover:bg-gray-100 text-lg py-6 px-8">
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-12">Why Choose Giftress for Corporate Gifting?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Building className="h-7 w-7 text-giftress-blue" />
                </div>
                <CardTitle className="text-xl font-playfair">Trusted by 500+ Businesses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join the growing number of enterprises that trust us for their employee recognition, client appreciation, and event gifting needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Gift className="h-7 w-7 text-giftress-blue" />
                </div>
                <CardTitle className="text-xl font-playfair">Custom Branding Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Personalize each hamper with your company logo, branded merchandise, custom messaging, and tailored presentation materials.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Briefcase className="h-7 w-7 text-giftress-blue" />
                </div>
                <CardTitle className="text-xl font-playfair">End-to-End Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From curation to delivery, we handle every aspect of your gifting campaign with meticulous attention to detail.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Corporate Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-4">Our Corporate Solutions</h2>
          <p className="section-paragraph text-center mb-12">
            Tailored gifting experiences for every business need and occasion
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-giftress-blue/20 flex items-center justify-center">
                <Users className="h-20 w-20 text-giftress-blue/40" />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-medium mb-3">Employee Recognition</h3>
                <p className="text-gray-600 mb-4">
                  Celebrate milestones, achievements, and special occasions with thoughtfully curated gift hampers that show your team how much you value them.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-giftress-blue mr-2 mt-0.5" />
                    <span>Work anniversaries and promotions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-giftress-blue mr-2 mt-0.5" />
                    <span>Team achievements and project completions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-giftress-blue mr-2 mt-0.5" />
                    <span>Holiday and end-of-year appreciation</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full btn-outline">Learn More</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-giftress-gold/20 flex items-center justify-center">
                <Building className="h-20 w-20 text-giftress-gold/40" />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-medium mb-3">Client Appreciation</h3>
                <p className="text-gray-600 mb-4">
                  Strengthen business relationships and express gratitude to clients and partners with premium gift hampers that reflect your brand's quality.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-giftress-blue mr-2 mt-0.5" />
                    <span>New partnership celebrations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-giftress-blue mr-2 mt-0.5" />
                    <span>Thank you gifts after major deals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-giftress-blue mr-2 mt-0.5" />
                    <span>Seasonal appreciation campaigns</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full btn-outline">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bulk Ordering Portal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">Bulk Ordering Made Simple</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our automated bulk-order portal streamlines your corporate gifting process, saving you time while maintaining the personal touch that makes each gift special.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-giftress-blue/10 flex items-center justify-center mr-4 mt-1">
                    <div className="w-4 h-4 rounded-full bg-giftress-blue"></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-1">Centralized Dashboard</h3>
                    <p className="text-gray-600">
                      Manage all your orders, recipient lists, delivery schedules, and budgets in one convenient location.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-giftress-blue/10 flex items-center justify-center mr-4 mt-1">
                    <div className="w-4 h-4 rounded-full bg-giftress-blue"></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-1">CSV Integration</h3>
                    <p className="text-gray-600">
                      Simply upload your recipient list, and our system handles the rest—from address validation to delivery tracking.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-giftress-blue/10 flex items-center justify-center mr-4 mt-1">
                    <div className="w-4 h-4 rounded-full bg-giftress-blue"></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-1">Customization at Scale</h3>
                    <p className="text-gray-600">
                      Add personalized notes, custom inserts, and branded materials—even when ordering hundreds of hampers.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-giftress-blue hover:bg-giftress-navy text-white">
                Schedule a Demo
              </Button>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm relative">
              <h3 className="font-playfair text-2xl font-medium mb-6">Volume Discounts</h3>
              <p className="text-gray-600 mb-8">
                Benefit from our competitive pricing structure for bulk orders, with additional discounts available for recurring programs.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">10-49 hampers</span>
                    <span className="text-giftress-blue font-medium">5% discount</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">50-99 hampers</span>
                    <span className="text-giftress-blue font-medium">10% discount</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">100-249 hampers</span>
                    <span className="text-giftress-blue font-medium">15% discount</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">250+ hampers</span>
                    <span className="text-giftress-blue font-medium">Contact for pricing</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-5 -right-5 bg-giftress-gold text-white p-3 rounded-full text-sm font-medium">
                Special Rates
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <Collapsible className="bg-white rounded-lg shadow-sm overflow-hidden">
              <CollapsibleTrigger className="w-full p-5 text-left font-medium flex justify-between items-center">
                <span>What is the minimum order quantity for corporate gifts?</span>
                <span className="text-giftress-blue">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-5 pt-0 border-t">
                <p className="text-gray-600">
                  Our corporate gifting program starts with a minimum order of 10 hampers. However, we're happy to discuss custom arrangements for smaller quantities with a slight adjustment in pricing.
                </p>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="bg-white rounded-lg shadow-sm overflow-hidden">
              <CollapsibleTrigger className="w-full p-5 text-left font-medium flex justify-between items-center">
                <span>Can I include my company's branded merchandise?</span>
                <span className="text-giftress-blue">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-5 pt-0 border-t">
                <p className="text-gray-600">
                  Absolutely! We can integrate your branded items into our hampers. You can either provide the items for us to include, or we can source and produce branded merchandise on your behalf.
                </p>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="bg-white rounded-lg shadow-sm overflow-hidden">
              <CollapsibleTrigger className="w-full p-5 text-left font-medium flex justify-between items-center">
                <span>What is the lead time for large corporate orders?</span>
                <span className="text-giftress-blue">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-5 pt-0 border-t">
                <p className="text-gray-600">
                  We recommend placing large orders (50+ hampers) at least 3-4 weeks in advance to allow for customization, quality checks, and coordinated delivery. Rush orders may be accommodated with an additional fee.
                </p>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="bg-white rounded-lg shadow-sm overflow-hidden">
              <CollapsibleTrigger className="w-full p-5 text-left font-medium flex justify-between items-center">
                <span>Do you offer international shipping for corporate gifts?</span>
                <span className="text-giftress-blue">+</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-5 pt-0 border-t">
                <p className="text-gray-600">
                  Yes, we offer international shipping to select countries. Additional customs fees and longer delivery times may apply. We can help navigate regulations regarding food and alcohol shipments to ensure smooth delivery.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-giftress-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            Ready to Elevate Your Corporate Gifting?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our dedicated corporate team is standing by to help you create the perfect gifting solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-giftress-blue hover:bg-gray-100 text-lg py-6 px-8">
              Request a Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg py-6 px-8">
              Download Corporate Brochure
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Corporate;
