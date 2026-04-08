import type { WordEntry } from '../types';

export const wordsData: WordEntry[] = [
  // 项目/任务管理
  {
    id: '1',
    term: 'duration',
    phonetic: '/dʊˈreɪʃn/',
    meaning: '持续时间',
    example: 'The duration of the project is three months.',
    note: '项目周期、会议时长',
    category: '项目/任务管理'
  },
  {
    id: '2',
    term: 'kick off',
    phonetic: '/kɪk ɔːf/',
    meaning: '启动',
    example: "Let's kick off the meeting at 2 PM.",
    note: '项目启动、会议开始',
    category: '项目/任务管理'
  },
  {
    id: '3',
    term: 'take over',
    phonetic: '/teɪk ˈoʊvər/',
    meaning: '接管、接手',
    example: 'I just took over this account from Sarah.',
    note: '工作交接场景，可接 project/account/task/position',
    category: '项目/任务管理'
  },
  {
    id: '4',
    term: 'enhancement',
    phonetic: '/ɪnˈhænsmənt/',
    meaning: '增强、改进',
    example: 'This is a feature enhancement request.',
    note: '功能改进、优化',
    category: '项目/任务管理'
  },
  {
    id: '5',
    term: 'data validation',
    phonetic: '/ˈdeɪtə vælɪˈdeɪʃn/',
    meaning: '数据验证',
    example: 'We need to add data validation for this field.',
    note: '技术场景常用',
    category: '项目/任务管理'
  },
  {
    id: '6',
    term: 'discrepancy',
    phonetic: '/dɪˈskrepənsi/',
    meaning: '差异、不符',
    example: "There's a discrepancy between the two reports.",
    note: '数据核对、审计场景常用',
    category: '项目/任务管理'
  },
  {
    id: '7',
    term: 'procedure',
    phonetic: '/prəˈsiːdʒər/',
    meaning: '程序、流程、步骤',
    example: 'Please follow the standard operating procedure.',
    note: 'SOP = Standard Operating Procedure；formal procedure 正式程序',
    category: '项目/任务管理'
  },
  {
    id: '8',
    term: 'state',
    phonetic: '/steɪt/',
    meaning: '陈述、说明；状态',
    example: 'Please state your reasons for the delay.',
    note: '动词用法较正式；current state 当前状态；in a good state 状态良好',
    category: '项目/任务管理'
  },
  // 会议讨论
  {
    id: '9',
    term: 'attendee',
    phonetic: '/əˌtenˈdiː/',
    meaning: '参会者、出席者',
    example: 'All attendees should receive the meeting invite.',
    note: '正式用词，participant 更通用',
    category: '会议讨论'
  },
  {
    id: '10',
    term: 'attendance',
    phonetic: '/əˈtendəns/',
    meaning: '出席、出勤',
    example: 'Your attendance is required at the quarterly review.',
    note: 'take attendance 点名；attendance rate 出勤率',
    category: '会议讨论'
  },
  {
    id: '11',
    term: 'absent',
    phonetic: '/ˈæbsənt/ adj. /æbˈsent/ v.',
    meaning: '缺席的；缺席',
    example: 'Three team members were absent from the meeting.',
    note: '反义词：present；absent from 缺席...',
    category: '会议讨论'
  },
  {
    id: '12',
    term: 'present',
    phonetic: '/ˈpreznt/ adj./n. /prɪˈzent/ v.',
    meaning: '出席的；礼物；呈现',
    example: 'All managers are present today. / I\'ll present the findings tomorrow.',
    note: '作动词时重音在第二音节；present a proposal 提交方案',
    category: '会议讨论'
  },
  {
    id: '13',
    term: 'insist',
    phonetic: '/ɪnˈsɪst/',
    meaning: '坚持、坚决要求',
    example: 'I must insist that we follow the standard procedure.',
    note: '语气较强；insist on + doing；insist that + 从句',
    category: '会议讨论'
  },
  {
    id: '14',
    term: 'poll',
    phonetic: '/poʊl/',
    meaning: '投票、民意调查',
    example: "Let's take a quick poll to decide on the meeting time.",
    note: '可作动词或名词；conduct a poll 进行投票',
    category: '会议讨论'
  },
  // 时间表达
  {
    id: '15',
    term: 'in the past',
    phonetic: '/ɪn ðə pæst/',
    meaning: '在过去',
    example: 'In the past, we used a different system.',
    note: '与现在完成时或过去时连用；注意：英式英语中常与现在完成时连用',
    category: '时间表达'
  }
];

export const categories = [
  '全部',
  '项目/任务管理',
  '会议讨论',
  '时间表达',
  '邮件沟通',
  '工作汇报',
  '日常沟通'
] as const;
