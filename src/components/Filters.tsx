interface FiltersProps {
  categoryFilter: string;
  setCategoryFilter: (filter: string) => void;
  roastFilter: string;
  setRoastFilter: (filter: string) => void;
}

const categories = ['All', 'Single Origin', 'Blend'];
const roasts = ['All', 'Light', 'Medium', 'Dark'];

export default function Filters({
  categoryFilter,
  setCategoryFilter,
  roastFilter,
  setRoastFilter,
}: FiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium text-stone-600 self-center mr-1">
          Category:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              categoryFilter === cat
                ? 'bg-stone-800 text-white shadow-md'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Roast Filter */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium text-stone-600 self-center mr-1">
          Roast:
        </span>
        {roasts.map((roast) => (
          <button
            key={roast}
            onClick={() => setRoastFilter(roast)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              roastFilter === roast
                ? 'bg-amber-700 text-white shadow-md'
                : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            {roast}
          </button>
        ))}
      </div>
    </div>
  );
}
