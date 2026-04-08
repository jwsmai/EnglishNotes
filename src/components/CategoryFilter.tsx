import { categories } from '../data/words';

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
  counts: Record<string, number>;
}

export function CategoryFilter({ selected, onSelect, counts }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all
            ${selected === category
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }
          `}
        >
          {category}
          {category !== '全部' && counts[category] > 0 && (
            <span className={`ml-1.5 text-xs ${selected === category ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
              {counts[category]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
