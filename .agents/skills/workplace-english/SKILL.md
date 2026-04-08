---
name: workplace-english
description: 整理职场英语学习笔记并自动部署到 GitHub Pages。支持单词/词组记录、句式解析和笔记卡片。当用户输入英语单词、词组、例句、要求解析句子或提问语法/用法问题时激活此 skill。
---

# Workplace English 学习笔记

帮助用户整理职场英语表达、句式和知识点，自动推送到 GitHub Pages。

## 工作流程

### 1. 单词/词组记录
1. **接收输入**：用户提供的单词、词组、例句
2. **判断场景**：根据内容判断所属职场场景
3. **补充信息**：补充音标、常用搭配、例句
4. **更新网页**：将新词条添加到 `index.html` 的 `wordsData` 数组中
5. **自动推送**：执行 git add → commit → push

### 2. 句式解析
1. **接收输入**：用户提供一个完整句子要求解析
2. **解析内容**：句型结构、语法要点、中文含义、使用场景、替换练习
3. **更新网页**：添加到 `index.html` 的 `sentenceData` 数组中
4. **自动推送**：执行 git add → commit → push

### 3. 笔记卡片
1. **接收输入**：用户提出语法对比、用法疑问等知识性问题
2. **整理内容**：
   - **标题**：简洁概括主题
   - **问题**：用户原始问题
   - **分析**：详细对比/解释
   - **结论**：简明建议
   - **例句**：职场场景例句
3. **更新网页**：添加到 `index.html` 的 `noteData` 数组中
4. **自动推送**：执行 git add → commit → push

## 场景分类

- **项目/任务管理**
- **会议讨论**
- **时间表达**
- **邮件沟通**
- **工作汇报**
- **日常沟通**

## 数据格式

### 单词格式
```javascript
{
  id: '1',
  term: '单词',
  phonetic: '/音标/',
  meaning: '中文含义',
  example: '例句',
  note: '备注',
  category: '分类'
}
```

### 句式格式
```javascript
{
  id: 's1',
  sentence: '完整句子',
  structure: '句型结构，如：主语 + 谓语 + 宾语从句',
  grammar: ['语法要点1', '语法要点2'],
  meaning: '中文翻译',
  scene: '适用场景说明',
  practice: '替换练习提示',
  category: '分类'
}
```

## 自动推送检查清单

每次更新后必须执行：
- [ ] `git add index.html`
- [ ] `git commit -m "Add word: {单词名}"` 或 `git commit -m "Add sentence: {句子关键词}"`
- [ ] `git push origin main`

## 示例

**单词示例：**
用户："critical"
→ 添加到 wordsData，自动推送

**句式示例：**
用户："解析句子：I just took over this account from Sarah."
→ 解析后添加到 sentenceData：
```javascript
{
  id: 's1',
  sentence: 'I just took over this account from Sarah.',
  structure: '主语 + 时间状语 + 谓语 + 宾语 + 来源状语',
  grammar: ['现在完成时：have/has + 过去分词', 'take over 动词短语', 'from 引出原负责人'],
  meaning: '我刚从莎拉那里接手了这个账户。',
  scene: '工作交接场景，说明刚接手某个项目/账户/任务',
  practice: '替换：I just took over [this project/task/position] from [name].',
  category: '任务交接'
}
```
→ 自动推送
