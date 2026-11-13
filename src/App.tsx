import { useState, useMemo } from 'react';
import { Product, CartItem } from './types';
import { products } from './data';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Filters from './components/Filters';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [roastFilter, setRoastFilter] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.notes.some((note) =>
          note.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        categoryFilter === 'All' || product.category === categoryFilter;
      const matchesRoast =
        roastFilter === 'All' || product.roast === roastFilter;
      return matchesSearch && matchesCategory && matchesRoast;
    });
  }, [searchQuery, categoryFilter, roastFilter]);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setOrderComplete(true);
    setIsCheckoutOpen(false);
    setCart([]);
    setTimeout(() => setOrderComplete(false), 4000);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-800 mb-4">
            Exceptional Coffee,
            <span className="text-amber-700"> Curated</span>
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Hand-selected beans from the world's finest growing regions,
            roasted to perfection and delivered fresh to your door.
          </p>
        </div>

        {/* Filters */}
        <Filters
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          roastFilter={roastFilter}
          setRoastFilter={setRoastFilter}
        />

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          onSelectProduct={setSelectedProduct}
          onAddToCart={addToCart}
        />

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-500 text-lg">
              No coffees match your search. Try adjusting your filters.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl text-amber-200 mb-3">
                Ember & Bloom
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Dedicated to sourcing and roasting the world's finest specialty
                coffees. Every bean tells a story.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-200 mb-3">Contact</h4>
              <p className="text-stone-400 text-sm">
                hello@emberandbloom.co
                <br />
                123 Roastery Lane
                <br />
                Portland, OR 97201
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-200 mb-3">Hours</h4>
              <p className="text-stone-400 text-sm">
                Mon–Fri: 6am – 6pm
                <br />
                Sat–Sun: 7am – 5pm
                <br />
                Online orders: 24/7
              </p>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-500 text-sm">
            © 2026 Ember & Bloom. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      {/* Cart Drawer */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        cartTotal={cartTotal}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <Checkout
          cart={cart}
          cartTotal={cartTotal}
          onClose={() => setIsCheckoutOpen(false)}
          onComplete={handleOrderComplete}
        />
      )}

      {/* Order Complete Toast */}
      {orderComplete && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <span className="font-medium">
              Order placed! Your coffee is on its way.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
