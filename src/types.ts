export interface Product {
  id: number;
  name: string;
  origin: string;
  category: 'Single Origin' | 'Blend';
  roast: 'Light' | 'Medium' | 'Dark';
  price: number;
  weight: string;
  description: string;
  notes: string[];
  emoji: string;
  gradient: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
