import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductGrid({
  products,
  onSelectProduct,
  onAddToCart,
}: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={() => onSelectProduct(product)}
          onAddToCart={() => onAddToCart(product, 1)}
        />
      ))}
    </div>
  );
}
