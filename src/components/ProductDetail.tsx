import { useState } from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductDetail({
  product,
  onClose,
  onAddToCart,
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-800 hover:bg-white shadow-md transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Product Image */}
        <div className={`h-56 sm:h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center rounded-t-3xl`}>
          <span className="text-8xl">{product.emoji}</span>
        </div>

        {/* Product Details */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded-full text-xs font-medium">
              {product.roast} Roast
            </span>
            <span className="px-3 py-1 bg-stone-50 border border-stone-200 text-stone-700 rounded-full text-xs font-medium">
              {product.category}
            </span>
            <span className="px-3 py-1 bg-stone-50 border border-stone-200 text-stone-700 rounded-full text-xs font-medium">
              {product.weight}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-800 mb-1">
            {product.name}
          </h2>
          <p className="text-stone-500 mb-4">{product.origin}</p>

          <p className="text-stone-600 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Flavor Notes */}
          <div className="mb-6">
            <h4 className="font-medium text-stone-700 mb-2">Tasting Notes</h4>
            <div className="flex flex-wrap gap-2">
              {product.notes.map((note) => (
                <span
                  key={note}
                  className="px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full text-sm text-amber-800"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-stone-100">
            <span className="text-3xl font-bold text-amber-700">
              ${product.price.toFixed(2)}
            </span>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-stone-600">Qty:</span>
              <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-stone-600 hover:bg-stone-100 transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-2 text-stone-800 font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-stone-600 hover:bg-stone-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 sm:flex-none px-8 py-3 bg-stone-800 text-white rounded-xl font-medium hover:bg-stone-700 active:scale-[0.98] transition-all"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
