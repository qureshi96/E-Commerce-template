
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Essential White Tee',
    price: 45,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000'
    ],
    description: 'A perfectly fitted essential white tee made from premium organic cotton. Designed for everyday comfort with a timeless silhouette.',
    category: 'Basics',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Minimalist Hoodie',
    price: 89,
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000'
    ],
    description: 'Clean-lined hoodie with a relaxed fit. Crafted from premium cotton blend for ultimate comfort and durability.',
    category: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy'],
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Tailored Trousers',
    price: 125,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000',
      'https://images.unsplash.com/photo-1506629905607-d405d405b2c7?q=80&w=1000'
    ],
    description: 'Modern tailored trousers with a contemporary cut. Perfect for both casual and formal occasions.',
    category: 'Bottoms',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Black', 'Navy', 'Charcoal'],
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Oversized Blazer',
    price: 185,
    images: [
      'https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1000',
      'https://images.unsplash.com/photo-1559563458-527cfc570471?q=80&w=1000'
    ],
    description: 'Contemporary oversized blazer with clean lines and structured shoulders. A modern wardrobe essential.',
    category: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Beige', 'Navy'],
    inStock: true,
    featured: false
  },
  {
    id: '5',
    name: 'Organic Cotton Dress',
    price: 95,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000'
    ],
    description: 'Effortless midi dress crafted from organic cotton. Features a relaxed silhouette perfect for any occasion.',
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Olive'],
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Knit Sweater',
    price: 110,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000'
    ],
    description: 'Luxurious knit sweater with a relaxed fit. Made from premium merino wool for exceptional warmth and softness.',
    category: 'Knitwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Gray', 'Black'],
    inStock: true,
    featured: false
  }
];
