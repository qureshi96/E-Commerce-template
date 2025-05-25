
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-sm transition-colors">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">{product.category}</p>
        <p className="text-sm font-semibold text-gray-900 dark:text-white transition-colors">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
