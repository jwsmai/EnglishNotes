import { Volume2, Bookmark, BookmarkCheck } from 'lucide-react';
import { useState } from 'react';
import type { WordEntry } from '../types';

interface WordCardProps {
  word: WordEntry;
}

export function WordCard({ word }: WordCardProps) {
  const [bookmarked, setBookmarked] = useState(() => {
    if (typeof window !== 'undefined') {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      return bookmarks.includes(word.id);
    }
    return false;
  });

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (bookmarked) {
      const newBookmarks = bookmarks.filter((id: string) => id !== word.id);
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    } else {
      bookmarks.push(word.id);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    setBookmarked(!bookmarked);
  };

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(word.term);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {word.term}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
              {word.phonetic}
            </span>
          </div>
          
          <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            {word.category}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={speak}
            className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            aria-label="Play pronunciation"
          >
            <Volume2 className="w-5 h-5" />
          </button>
          <button
            onClick={toggleBookmark}
            className={`p-2 rounded-lg transition-colors ${
              bookmarked 
                ? 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' 
                : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
            }`}
            aria-label="Toggle bookmark"
          >
            {bookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">
            含义
          </span>
          <p className="mt-1 text-gray-700 dark:text-gray-300">
            {word.meaning}
          </p>
        </div>

        <div>
          <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">
            例句
          </span>
          <p className="mt-1 text-gray-600 dark:text-gray-400 italic">
            "{word.example}"
          </p>
        </div>

        {word.note && (
          <div className="pt-3 border-t border-gray-100 dark:border-gray-700">
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">
              备注
            </span>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {word.note}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
