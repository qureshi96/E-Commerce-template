
export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}
