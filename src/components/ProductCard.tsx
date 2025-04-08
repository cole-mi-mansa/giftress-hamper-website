
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id, name, price, image, category
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden group">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 space-y-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="bg-white/80 backdrop-blur-sm hover:bg-white w-8 h-8 rounded-full"
          >
            <Heart className="h-4 w-4 text-giftress-navy" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <Button className="bg-giftress-blue hover:bg-giftress-navy text-white">
            View Details
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs text-giftress-gold uppercase tracking-wider mb-1">{category}</div>
        <h3 className="font-playfair font-medium text-lg mb-1 text-giftress-navy">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-semibold">£{price.toFixed(2)}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-gray-100 text-giftress-navy"
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
