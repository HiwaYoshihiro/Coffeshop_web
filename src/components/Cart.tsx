import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  cartTotal: number;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
  onCheckout: () => void;
}

export default function Cart({
  isOpen,
  onClose,
  cart,
  cartTotal,
  onUpdateQuantity,
  onRemove,
  onCheckout,
}: CartProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
          <h2 className="font-serif text-xl font-bold text-stone-800">
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <span className="text-5xl mb-4">🛒</span>
              <p className="text-stone-500 text-lg">Your cart is empty</p>
              <p className="text-stone-400 text-sm mt-1">
                Add some exceptional coffee!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-stone-50 rounded-xl"
                >
                  {/* Product Image */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.product.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-2xl">{item.product.emoji}</span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-stone-800 text-sm truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-amber-700 font-semibold text-sm">
                      ${item.product.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-stone-200 rounded-lg bg-white">
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="px-2 py-1 text-stone-500 hover:text-stone-800 text-sm"
                        >
                          −
                        </button>
                        <span className="px-2 py-1 text-sm font-medium text-stone-700 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="px-2 py-1 text-stone-500 hover:text-stone-800 text-sm"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => onRemove(item.product.id)}
                        className="text-stone-400 hover:text-red-500 transition-colors ml-auto"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Line Total */}
                  <div className="text-right flex-shrink-0">
                    <span className="font-semibold text-stone-800 text-sm">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-stone-100 px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Subtotal</span>
              <span className="text-xl font-bold text-stone-800">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-stone-400">
              Shipping and taxes calculated at checkout
            </p>
            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-amber-700 text-white rounded-xl font-medium hover:bg-amber-800 active:scale-[0.98] transition-all shadow-lg shadow-amber-700/20"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
