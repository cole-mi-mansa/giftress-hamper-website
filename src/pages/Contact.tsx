
import React from 'react';
import { Mail, Phone, MapPin, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import TestimonialCard from '@/components/TestimonialCard';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would be connected to a form submission handler in a real application
    console.log('Form submitted');
  };

  const testimonials = [
    {
      name: "Sarah Thompson",
      title: "Event Planner",
      company: "Celebrations Inc.",
      text: "Giftress Hampers delivered beyond our expectations for our corporate event. The presentation was elegant and the products were top-notch.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "Marketing Director",
      company: "TechGrowth",
      text: "Our clients were thrilled with the custom hampers. The attention to detail and quality of service was exceptional.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "Customer",
      text: "I ordered a birthday hamper for my mother and she was absolutely delighted. The packaging was beautiful and the products were luxurious.",
      rating: 4
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
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              We'd love to hear from you. Whether you have questions about our products, need assistance with an order, or want to discuss a corporate gifting solution.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Phone className="h-5 w-5 text-giftress-blue" />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">Our customer service team is available:</p>
                <p className="font-medium">+44 20 1234 5678</p>
                <p className="text-sm text-gray-500 mt-2">Monday-Friday: 9am-6pm<br />Saturday: 10am-4pm</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Mail className="h-5 w-5 text-giftress-blue" />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">For inquiries and assistance:</p>
                <p className="font-medium">hello@giftresshampers.com</p>
                <p className="text-sm text-gray-500 mt-2">For corporate inquiries:<br />corporate@giftresshampers.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <MapPin className="h-5 w-5 text-giftress-blue" />
                </div>
                <h3 className="font-playfair text-xl font-medium mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">Our showroom is open for visitors:</p>
                <p className="font-medium">123 Gifting Street<br />London, UK</p>
                <p className="text-sm text-gray-500 mt-2">By appointment only<br />Please call ahead to schedule</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4">Send Us a Message</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Complete the form below and we'll get back to you as soon as possible. 
                Your inquiry is important to us, and we aim to respond within 24 hours.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Subject of your message" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please type your message here..." 
                    className="min-h-[150px]" 
                    required
                  />
                </div>
                
                <Button type="submit" className="bg-giftress-blue hover:bg-giftress-navy text-white px-8 py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Corporate Inquiries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-block">
                  <div className="w-12 h-12 rounded-full bg-giftress-blue/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-giftress-blue" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">Corporate Inquiries</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Looking for corporate gifting solutions? Our dedicated team can help you create the perfect gifting strategy 
                  for your business needs, whether it's for employee recognition, client appreciation, or special events.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-giftress-blue mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Custom branded hampers</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-giftress-blue mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Bulk order discounts</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-giftress-blue mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>Recurring gifting programs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-giftress-blue mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>International shipping options</span>
                  </li>
                </ul>
                <div>
                  <Button className="bg-giftress-blue hover:bg-giftress-navy text-white px-6 py-3 text-lg">
                    Request a Consultation
                  </Button>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                      key={index}
                      name={testimonial.name}
                      title={testimonial.title}
                      company={testimonial.company}
                      text={testimonial.text}
                      rating={testimonial.rating}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
