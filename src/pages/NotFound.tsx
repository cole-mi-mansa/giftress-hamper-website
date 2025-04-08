
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-lg">
          <h1 className="font-playfair font-bold text-6xl mb-4 text-giftress-navy">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            Oops! We can't seem to find the page you're looking for.
          </p>
          <p className="text-gray-500 mb-8">
            The page might have been moved, deleted, or perhaps never existed. Let's get you back on track.
          </p>
          <Link to="/">
            <Button className="bg-giftress-blue hover:bg-giftress-navy text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
