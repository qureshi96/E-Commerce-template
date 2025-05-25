
import React from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4 transition-colors">Featured Collection</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Discover our carefully curated selection of minimalist essentials designed for the modern wardrobe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
