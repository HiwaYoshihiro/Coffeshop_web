import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: () => void;
  onAddToCart: () => void;
}

const roastColors = {
  Light: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  Medium: 'bg-amber-100 text-amber-800 border-amber-200',
  Dark: 'bg-stone-200 text-stone-800 border-stone-300',
};

export default function ProductCard({
  product,
  onSelect,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-lg hover:border-stone-200 transition-all duration-300">
      {/* Product Image Area */}
      <div
        className={`relative h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center cursor-pointer`}
        onClick={onSelect}
      >
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {product.emoji}
        </span>
        <div className="absolute top-3 left-3">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-medium border ${roastColors[product.roast]}`}
          >
            {product.roast} Roast
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/80 text-stone-700 backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3
            className="font-serif text-lg font-semibold text-stone-800 cursor-pointer hover:text-amber-700 transition-colors"
            onClick={onSelect}
          >
            {product.name}
          </h3>
          <span className="text-lg font-bold text-amber-700">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-sm text-stone-500 mb-3">{product.origin} · {product.weight}</p>

        {/* Flavor Notes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.notes.map((note) => (
            <span
              key={note}
              className="px-2 py-0.5 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-600"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="w-full py-2.5 bg-stone-800 text-white rounded-xl font-medium text-sm hover:bg-stone-700 active:scale-[0.98] transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
