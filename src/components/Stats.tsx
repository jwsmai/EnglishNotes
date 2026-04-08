import { BookOpen, Tag, Bookmark } from 'lucide-react';
import { wordsData, categories } from '../data/words';

export function Stats() {
  const totalWords = wordsData.length;
  const totalCategories = categories.length - 1; // exclude '全部'
  const bookmarkedCount = JSON.parse(localStorage.getItem('bookmarks') || '[]').length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm">总词条</p>
            <p className="text-2xl font-bold">{totalWords}</p>
          </div>
          <BookOpen className="w-8 h-8 text-blue-200" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-100 text-sm">分类</p>
            <p className="text-2xl font-bold">{totalCategories}</p>
          </div>
          <Tag className="w-8 h-8 text-purple-200" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-yellow-100 text-sm">收藏</p>
            <p className="text-2xl font-bold">{bookmarkedCount}</p>
          </div>
          <Bookmark className="w-8 h-8 text-yellow-200" />
        </div>
      </div>
    </div>
  );
}
