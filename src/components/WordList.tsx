import { WordCard } from './WordCard';
import type { WordEntry } from '../types';
import { BookX } from 'lucide-react';

interface WordListProps {
  words: WordEntry[];
}

export function WordList({ words }: WordListProps) {
  if (words.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
          <BookX className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
          没有找到相关词条
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          试试其他关键词或分类
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {words.map((word) => (
        <WordCard key={word.id} word={word} />
      ))}
    </div>
  );
}
