import { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  cartTotal: number;
  onClose: () => void;
  onComplete: () => void;
}

export default function Checkout({
  cart,
  cartTotal,
  onClose,
  onComplete,
}: CheckoutProps) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const shipping = cartTotal > 35 ? 0 : 5.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onComplete();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-800 hover:bg-stone-200 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6">
            Checkout
          </h2>

          {/* Order Summary */}
          <div className="bg-stone-50 rounded-xl p-4 mb-6">
            <h3 className="font-medium text-stone-700 text-sm mb-3">
              Order Summary
            </h3>
            <div className="space-y-2">
              {cart.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-stone-600">
                    {item.product.emoji} {item.product.name} × {item.quantity}
                  </span>
                  <span className="text-stone-800 font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-stone-200 mt-3 pt-3 space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Subtotal</span>
                <span className="text-stone-700">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Shipping</span>
                <span className="text-stone-700">
                  {shipping === 0 ? (
                    <span className="text-emerald-600 font-medium">Free</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Tax</span>
                <span className="text-stone-700">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-stone-800 pt-2 border-t border-stone-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-amber-700 mt-2">
                💡 Free shipping on orders over $35!
              </p>
            )}
          </div>

          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main Street"
                className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Portland"
                  className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zip"
                  required
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="97201"
                  className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <h3 className="font-medium text-stone-700 text-sm mb-3">
                Payment (Simulated)
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    required
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="4242 4242 4242 4242"
                    maxLength={19}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Expiry
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      required
                      value={formData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      required
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      maxLength={4}
                      className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3.5 bg-amber-700 text-white rounded-xl font-medium hover:bg-amber-800 active:scale-[0.98] transition-all shadow-lg shadow-amber-700/20 disabled:opacity-70 disabled:cursor-not-allowed mt-6"
            >
              {isProcessing ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </span>
              ) : (
                `Place Order — $${total.toFixed(2)}`
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
