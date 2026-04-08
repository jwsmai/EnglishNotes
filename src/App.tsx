import { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { WordList } from './components/WordList';
import { Stats } from './components/Stats';
import { wordsData } from './data/words';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredWords = useMemo(() => {
    return wordsData.filter((word) => {
      const matchesSearch = 
        word.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        word.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
        word.example.toLowerCase().includes(searchQuery.toLowerCase()) ||
        word.note.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === '全部' || word.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { '全部': wordsData.length };
    wordsData.forEach((word) => {
      counts[word.category] = (counts[word.category] || 0) + 1;
    });
    return counts;
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Stats />
        
        <div className="mt-8 space-y-6">
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery} 
          />
          
          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            counts={categoryCounts}
          />
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {selectedCategory === '全部' ? '全部词条' : selectedCategory}
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              共 {filteredWords.length} 条
            </span>
          </div>
          
          <WordList words={filteredWords} />
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Workplace English Notes · 职场英语笔记
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
