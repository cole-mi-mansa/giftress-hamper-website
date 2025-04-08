
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  title: string;
  text: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  text,
  rating,
  image
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-giftress-blue/20 text-giftress-blue flex items-center justify-center mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-medium text-giftress-navy">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic">{text}</p>
    </div>
  );
};

export default TestimonialCard;
