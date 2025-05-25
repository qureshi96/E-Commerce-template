
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 dark:to-black/60" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('./public/background.jpg')",
            filter: "brightness(0.6)",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-light mb-6 animate-fade-in" style={{ fontFamily: 'Arial, sans-serif' }}>
            انقلاب
          </h1>
      
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90 animate-fade-in">
            Minimalist fashion for the conscious consumer
          </p>
          <Link to="/shop">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 dark:bg-gray-100 dark:text-black dark:hover:bg-white font-medium px-8 py-3 animate-scale-in"
            >
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8 transition-colors">
            Crafted for the Modern Minimalist
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors">
            At Inqalab, we believe in the power of simplicity. Our carefully designed pieces 
            combine contemporary aesthetics with sustainable practices, creating a wardrobe 
            that transcends trends and embraces timeless elegance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white transition-colors">Sustainable Materials</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">Organic cotton and eco-friendly fabrics</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white transition-colors">Ethical Production</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">Fair trade practices and transparent supply chain</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white transition-colors">Timeless Design</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">Classic silhouettes that never go out of style</p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4 transition-colors">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors">
            Subscribe to our newsletter for exclusive access to new collections and style inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors"
            />
            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 transition-colors">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white transition-colors">انقلاب</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">
                Minimalist fashion for the conscious consumer.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-gray-900 dark:text-white transition-colors">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li><Link to="/shop" className="hover:text-black dark:hover:text-white transition-colors">All Products</Link></li>
                <li><Link to="/shop?category=Basics" className="hover:text-black dark:hover:text-white transition-colors">Basics</Link></li>
                <li><Link to="/shop?category=Outerwear" className="hover:text-black dark:hover:text-white transition-colors">Outerwear</Link></li>
                <li><Link to="/shop?category=Dresses" className="hover:text-black dark:hover:text-white transition-colors">Dresses</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-gray-900 dark:text-white transition-colors">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li><Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-gray-900 dark:text-white transition-colors">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-300 transition-colors">
            <p>&copy; 2024 Inqalab Clothing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
