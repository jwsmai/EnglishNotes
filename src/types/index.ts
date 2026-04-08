export interface WordEntry {
  id: string;
  term: string;
  phonetic: string;
  meaning: string;
  example: string;
  note: string;
  category: string;
}

export type Category = 
  | '项目/任务管理'
  | '会议讨论'
  | '时间表达'
  | '邮件沟通'
  | '工作汇报'
  | '日常沟通';
