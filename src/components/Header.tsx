interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartItemCount: number;
  onCartClick: () => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  cartItemCount,
  onCartClick,
}: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">☕</span>
            <h1 className="font-serif text-xl sm:text-2xl font-bold text-stone-800">
              Ember <span className="text-amber-700">&</span> Bloom
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search coffees, origins, flavors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-100 border border-stone-200 rounded-full text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 px-4 py-2.5 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
            <span className="hidden sm:inline text-sm font-medium">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search coffees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-100 border border-stone-200 rounded-full text-sm text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-all"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
