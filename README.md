# 职场英语笔记 (Workplace English Notes)

一个用于学习职场英语表达的在线笔记应用。

## 在线访问

👉 [https://jwsmai.github.io/EnglishNotes](https://jwsmai.github.io/EnglishNotes)

## 功能特点

- 🔍 **实时搜索** - 快速查找单词、词组或含义
- 🏷️ **分类筛选** - 按场景浏览（会议、邮件、项目管理等）
- 🔊 **发音播放** - 点击播放美式发音
- 🔖 **收藏功能** - 标记重点词汇，本地保存
- 🌙 **深色模式** - 支持浅色/深色主题切换
- 📱 **响应式设计** - 适配手机、平板、电脑

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署到 GitHub Pages

```bash
# 构建并部署
npm run build
npm run deploy
```

## 添加新词条

编辑 `src/data/words.ts` 文件，按格式添加新词条：

```typescript
{
  id: '16',
  term: '新单词',
  phonetic: '/音标/',
  meaning: '中文含义',
  example: '例句',
  note: '备注说明',
  category: '所属分类'
}
```

## 技术栈

- React + TypeScript
- Vite
- Tailwind CSS
- Lucide Icons

## License

MIT
