// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResultResponseBodyDataResultInfoAgent extends $dara.Model {
  /**
   * @example
   * 28240****15643
   */
  id?: string;
  name?: string;
  skillGroup?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      skillGroup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoAsrResultAsrResult extends $dara.Model {
  /**
   * @example
   * 10000
   */
  begin?: number;
  /**
   * @example
   * 1
   */
  emotionValue?: number;
  /**
   * @example
   * 0
   */
  end?: number;
  identity?: string;
  role?: string;
  /**
   * @example
   * 50
   */
  speechRate?: number;
  /**
   * @example
   * xx
   */
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      identity: 'string',
      role: 'string',
      speechRate: 'number',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoAsrResult extends $dara.Model {
  asrResult?: GetResultResponseBodyDataResultInfoAsrResultAsrResult[];
  static names(): { [key: string]: string } {
    return {
      asrResult: 'AsrResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrResult: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoAsrResultAsrResult },
    };
  }

  validate() {
    if(Array.isArray(this.asrResult)) {
      $dara.Model.validateArray(this.asrResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeAnchor extends $dara.Model {
  /**
   * @remarks
   * 条件ID
   */
  cid?: string;
  /**
   * @remarks
   * 命中次数
   */
  hitTime?: number;
  /**
   * @remarks
   * 位置
   */
  location?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      hitTime: 'Hit_time',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      hitTime: 'number',
      location: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeRange extends $dara.Model {
  /**
   * @remarks
   * 对话开始索引
   */
  from?: number;
  /**
   * @remarks
   * 对话结束索引
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeTimeRange extends $dara.Model {
  from?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRange extends $dara.Model {
  /**
   * @remarks
   * false: 相对位置; 会结合anchor以及角色来决定句子位置
   */
  absolute?: boolean;
  /**
   * @remarks
   * true: 每句话都必须满足条件；
   */
  allSentencesSatisfy?: boolean;
  /**
   * @remarks
   * 前置后置条件
   */
  anchor?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeAnchor;
  /**
   * @remarks
   * 相对范围
   */
  range?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeRange;
  /**
   * @remarks
   * 对应 RoleType.type
   */
  role?: string;
  /**
   * @remarks
   * 对应 RoleType.id
   */
  roleId?: number;
  timeRange?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeTimeRange;
  static names(): { [key: string]: string } {
    return {
      absolute: 'Absolute',
      allSentencesSatisfy: 'AllSentencesSatisfy',
      anchor: 'Anchor',
      range: 'Range',
      role: 'Role',
      roleId: 'RoleId',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absolute: 'boolean',
      allSentencesSatisfy: 'boolean',
      anchor: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeAnchor,
      range: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeRange,
      role: 'string',
      roleId: 'number',
      timeRange: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRangeTimeRange,
    };
  }

  validate() {
    if(this.anchor && typeof (this.anchor as any).validate === 'function') {
      (this.anchor as any).validate();
    }
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamExcludes extends $dara.Model {
  exclude?: string[];
  static names(): { [key: string]: string } {
    return {
      exclude: 'Exclude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exclude: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.exclude)) {
      $dara.Model.validateArray(this.exclude);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamFlowNodePrerequisiteParam extends $dara.Model {
  /**
   * @remarks
   * 节点id
   */
  nodeId?: number;
  /**
   * @remarks
   * 节点匹配状态。
   */
  nodeMatchStatus?: number;
  /**
   * @remarks
   * 冗余的节点名称
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeMatchStatus: 'NodeMatchStatus',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeMatchStatus: 'number',
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParmIntentsIntent extends $dara.Model {
  /**
   * @remarks
   * 意图模型ID
   */
  id?: number;
  /**
   * @remarks
   * 意图模型名称
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParmIntents extends $dara.Model {
  intent?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParmIntentsIntent[];
  static names(): { [key: string]: string } {
    return {
      intent: 'Intent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intent: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParmIntentsIntent },
    };
  }

  validate() {
    if(Array.isArray(this.intent)) {
      $dara.Model.validateArray(this.intent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParm extends $dara.Model {
  /**
   * @remarks
   * 引用的意图模型
   */
  intents?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParmIntents;
  /**
   * @remarks
   * 模型应用的场景 AGENT:客户场景、CUSTOMER:客服场景 (CUSTOMER: 客户场景, AGENT: 坐席场景)
   */
  modelScene?: string;
  static names(): { [key: string]: string } {
    return {
      intents: 'Intents',
      modelScene: 'ModelScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intents: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParmIntents,
      modelScene: 'string',
    };
  }

  validate() {
    if(this.intents && typeof (this.intents as any).validate === 'function') {
      (this.intents as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamKeywords extends $dara.Model {
  keyword?: string[];
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keyword)) {
      $dara.Model.validateArray(this.keyword);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParam extends $dara.Model {
  /**
   * @remarks
   * 语速检测，是否计算整个对话平均语速，默认false
   */
  average?: boolean;
  /**
   * @remarks
   * 时长算子，时长计算开始类型，录音开始，还是某句对话开始
   */
  beginType?: string;
  /**
   * @remarks
   * 区分大小写
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * 静音检测：要不要检测第一句话
   */
  checkFirstSentence?: boolean;
  /**
   * @remarks
   * 检测方式，1 相邻句能量波动 2 最大能量跨度 默认1
   */
  checkType?: number;
  /**
   * @remarks
   * 大于，还是小于，gt/lt
   */
  compareOperator?: string;
  /**
   * @remarks
   * 是否单句话匹配；
   */
  contextChatMatch?: boolean;
  /**
   * @remarks
   * 抢话算子 延时时长
   */
  delayTime?: number;
  /**
   * @remarks
   * 时长算子，时长计算结束类型，录音结束，还是某句对话结束
   */
  endType?: string;
  /**
   * @remarks
   * 上下文重复算子：排除掉某些对话
   */
  excludes?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamExcludes;
  /**
   * @remarks
   * 流程节点前置条件参数
   */
  flowNodePrerequisiteParam?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamFlowNodePrerequisiteParam;
  /**
   * @remarks
   * 上下文重复算子：检测当前句的前from句是否有重复；0表示前面的所有句
   */
  from?: number;
  /**
   * @remarks
   * from_end
   */
  fromEnd?: boolean;
  /**
   * @remarks
   * 上下文重复算子：重复几次
   */
  hitTime?: number;
  /**
   * @remarks
   * 生效句子， true单个句子，false多个句子
   */
  inSentence?: boolean;
  /**
   * @remarks
   * 意图模型检查参数
   */
  intentModelCheckParm?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParm;
  /**
   * @remarks
   * interval代表区间范围开始
   */
  interval?: number;
  /**
   * @remarks
   * intervalEnd 代表区间范围结束
   */
  intervalEnd?: number;
  /**
   * @remarks
   * 关键字扩展
   */
  keywordExtension?: number;
  /**
   * @remarks
   * 匹配到的关键字数量
   */
  keywordMatchSize?: number;
  /**
   * @remarks
   * 关键词
   */
  keywords?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamKeywords;
  /**
   * @remarks
   * 能量值变化，默认3, 1~9
   */
  maxEmotionChangeValue?: number;
  /**
   * @remarks
   * 句子中最少字数，小于此字数的句子不检查
   */
  minWordSize?: number;
  /**
   * @remarks
   * true表示取不同角色相邻的两句话，false表示取不同角色的第一句话比较响应时间（默认）
   */
  nearDialogue?: boolean;
  /**
   * @remarks
   * 排除的正则表达式
   */
  notRegex?: string;
  /**
   * @remarks
   * 语句
   */
  phrase?: string;
  /**
   * @remarks
   * 正则表达式
   */
  regex?: string;
  /**
   * @remarks
   * target
   */
  target?: number;
  /**
   * @remarks
   * 阈值
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      beginType: 'BeginType',
      caseSensitive: 'Case_sensitive',
      checkFirstSentence: 'CheckFirstSentence',
      checkType: 'CheckType',
      compareOperator: 'CompareOperator',
      contextChatMatch: 'ContextChatMatch',
      delayTime: 'DelayTime',
      endType: 'EndType',
      excludes: 'Excludes',
      flowNodePrerequisiteParam: 'FlowNodePrerequisiteParam',
      from: 'From',
      fromEnd: 'From_end',
      hitTime: 'Hit_time',
      inSentence: 'In_sentence',
      intentModelCheckParm: 'IntentModelCheckParm',
      interval: 'Interval',
      intervalEnd: 'IntervalEnd',
      keywordExtension: 'KeywordExtension',
      keywordMatchSize: 'KeywordMatchSize',
      keywords: 'Keywords',
      maxEmotionChangeValue: 'MaxEmotionChangeValue',
      minWordSize: 'MinWordSize',
      nearDialogue: 'Near_dialogue',
      notRegex: 'NotRegex',
      phrase: 'Phrase',
      regex: 'Regex',
      target: 'Target',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'boolean',
      beginType: 'string',
      caseSensitive: 'boolean',
      checkFirstSentence: 'boolean',
      checkType: 'number',
      compareOperator: 'string',
      contextChatMatch: 'boolean',
      delayTime: 'number',
      endType: 'string',
      excludes: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamExcludes,
      flowNodePrerequisiteParam: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamFlowNodePrerequisiteParam,
      from: 'number',
      fromEnd: 'boolean',
      hitTime: 'number',
      inSentence: 'boolean',
      intentModelCheckParm: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParm,
      interval: 'number',
      intervalEnd: 'number',
      keywordExtension: 'number',
      keywordMatchSize: 'number',
      keywords: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamKeywords,
      maxEmotionChangeValue: 'number',
      minWordSize: 'number',
      nearDialogue: 'boolean',
      notRegex: 'string',
      phrase: 'string',
      regex: 'string',
      target: 'number',
      threshold: 'number',
    };
  }

  validate() {
    if(this.excludes && typeof (this.excludes as any).validate === 'function') {
      (this.excludes as any).validate();
    }
    if(this.flowNodePrerequisiteParam && typeof (this.flowNodePrerequisiteParam as any).validate === 'function') {
      (this.flowNodePrerequisiteParam as any).validate();
    }
    if(this.intentModelCheckParm && typeof (this.intentModelCheckParm as any).validate === 'function') {
      (this.intentModelCheckParm as any).validate();
    }
    if(this.keywords && typeof (this.keywords as any).validate === 'function') {
      (this.keywords as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperator extends $dara.Model {
  /**
   * @remarks
   * 主键id
   */
  id?: number;
  /**
   * @remarks
   * 算子名
   */
  name?: string;
  /**
   * @remarks
   * 可能是主键id，也可能是前端生成的id
   */
  oid?: string;
  /**
   * @remarks
   * 算子参数
   */
  param?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParam;
  /**
   * @remarks
   * 算子类别
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      oid: 'Oid',
      param: 'Param',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      oid: 'string',
      param: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParam,
      type: 'string',
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperators extends $dara.Model {
  operator?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperator[];
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperator },
    };
  }

  validate() {
    if(Array.isArray(this.operator)) {
      $dara.Model.validateArray(this.operator);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditions extends $dara.Model {
  /**
   * @remarks
   * 检测范围
   */
  checkRange?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRange;
  /**
   * @remarks
   * 条件id，可能是db中的主键，也可能是转换成的a, b, c
   */
  cid?: string;
  /**
   * @remarks
   * 排除
   */
  exclusion?: number;
  /**
   * @remarks
   * 在db中的主键
   */
  id?: number;
  /**
   * @remarks
   * Lambda表达式：例如:a&&b
   */
  lambda?: string;
  /**
   * @remarks
   * 算子列表
   */
  operators?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperators;
  /**
   * @remarks
   * 条件所属的规则id
   */
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      checkRange: 'Check_range',
      cid: 'Cid',
      exclusion: 'Exclusion',
      id: 'Id',
      lambda: 'Lambda',
      operators: 'Operators',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRange: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsCheckRange,
      cid: 'string',
      exclusion: 'number',
      id: 'number',
      lambda: 'string',
      operators: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperators,
      rid: 'string',
    };
  }

  validate() {
    if(this.checkRange && typeof (this.checkRange as any).validate === 'function') {
      (this.checkRange as any).validate();
    }
    if(this.operators && typeof (this.operators as any).validate === 'function') {
      (this.operators as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultConditions extends $dara.Model {
  conditions?: GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditions[];
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditions },
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitCid extends $dara.Model {
  cid?: string[];
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cid)) {
      $dara.Model.validateArray(this.cid);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWordsKeyWord extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  cid?: string;
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 2
   */
  to?: number;
  /**
   * @example
   * test
   */
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      from: 'From',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      from: 'number',
      to: 'number',
      val: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWords extends $dara.Model {
  keyWord?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWordsKeyWord[];
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWordsKeyWord },
    };
  }

  validate() {
    if(Array.isArray(this.keyWord)) {
      $dara.Model.validateArray(this.keyWord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase extends $dara.Model {
  /**
   * @example
   * 300
   */
  begin?: number;
  /**
   * @example
   * 0
   */
  emotionValue?: number;
  /**
   * @example
   * 300
   */
  end?: number;
  role?: string;
  /**
   * @example
   * xxx
   */
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHit extends $dara.Model {
  cid?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitCid;
  keyWords?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWords;
  phrase?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitCid,
      keyWords: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWords,
      phrase: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase,
    };
  }

  validate() {
    if(this.cid && typeof (this.cid as any).validate === 'function') {
      (this.cid as any).validate();
    }
    if(this.keyWords && typeof (this.keyWords as any).validate === 'function') {
      (this.keyWords as any).validate();
    }
    if(this.phrase && typeof (this.phrase as any).validate === 'function') {
      (this.phrase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHits extends $dara.Model {
  hit?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHit[];
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultHitsHit },
    };
  }

  validate() {
    if(Array.isArray(this.hit)) {
      $dara.Model.validateArray(this.hit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResult extends $dara.Model {
  conditions?: GetResultResponseBodyDataResultInfoHitResultHitResultConditions;
  hits?: GetResultResponseBodyDataResultInfoHitResultHitResultHits;
  name?: string;
  /**
   * @example
   * 0
   */
  reviewResult?: number;
  /**
   * @example
   * 1276
   */
  rid?: string;
  /**
   * @example
   * 123xx
   */
  schemeId?: number;
  /**
   * @example
   * 11xx
   */
  schemeVersion?: number;
  score?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      hits: 'Hits',
      name: 'Name',
      reviewResult: 'ReviewResult',
      rid: 'Rid',
      schemeId: 'SchemeId',
      schemeVersion: 'SchemeVersion',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: GetResultResponseBodyDataResultInfoHitResultHitResultConditions,
      hits: GetResultResponseBodyDataResultInfoHitResultHitResultHits,
      name: 'string',
      reviewResult: 'number',
      rid: 'string',
      schemeId: 'number',
      schemeVersion: 'number',
      score: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.conditions && typeof (this.conditions as any).validate === 'function') {
      (this.conditions as any).validate();
    }
    if(this.hits && typeof (this.hits as any).validate === 'function') {
      (this.hits as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResult extends $dara.Model {
  hitResult?: GetResultResponseBodyDataResultInfoHitResultHitResult[];
  static names(): { [key: string]: string } {
    return {
      hitResult: 'HitResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitResult: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResult },
    };
  }

  validate() {
    if(Array.isArray(this.hitResult)) {
      $dara.Model.validateArray(this.hitResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitScoreHitScore extends $dara.Model {
  /**
   * @example
   * 123
   */
  ruleId?: string;
  /**
   * @example
   * 123456
   */
  scoreId?: string;
  scoreName?: string;
  /**
   * @example
   * -20
   */
  scoreNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
      scoreNumber: 'ScoreNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      scoreId: 'string',
      scoreName: 'string',
      scoreNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitScore extends $dara.Model {
  hitScore?: GetResultResponseBodyDataResultInfoHitScoreHitScore[];
  static names(): { [key: string]: string } {
    return {
      hitScore: 'HitScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitScore: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitScoreHitScore },
    };
  }

  validate() {
    if(Array.isArray(this.hitScore)) {
      $dara.Model.validateArray(this.hitScore);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoRecording extends $dara.Model {
  business?: string;
  /**
   * @example
   * XXXX
   */
  callId?: string;
  /**
   * @example
   * 1563967699000
   */
  callTime?: string;
  /**
   * @example
   * 1
   */
  callType?: number;
  /**
   * @example
   * 1888888****
   */
  callee?: string;
  /**
   * @example
   * 0108888****
   */
  caller?: string;
  customerName?: string;
  /**
   * @example
   * XXXX
   */
  dataSetName?: string;
  /**
   * @example
   * 32
   */
  dialogueSize?: number;
  /**
   * @example
   * 60
   */
  duration?: number;
  /**
   * @example
   * XXXXX
   */
  id?: string;
  /**
   * @example
   * 123456.mkv
   */
  name?: string;
  /**
   * @example
   * 3437500
   */
  primaryId?: string;
  /**
   * @example
   * XXX
   */
  remark1?: string;
  /**
   * @example
   * XXX
   */
  remark10?: string;
  /**
   * @example
   * XXX
   */
  remark11?: string;
  /**
   * @example
   * XXX
   */
  remark12?: string;
  /**
   * @example
   * XXX
   */
  remark13?: string;
  /**
   * @example
   * XXX
   */
  remark2?: string;
  /**
   * @example
   * XXX
   */
  remark3?: string;
  /**
   * @example
   * XXX
   */
  remark4?: string;
  /**
   * @example
   * 1232
   */
  remark5?: number;
  /**
   * @example
   * XXX
   */
  remark6?: string;
  /**
   * @example
   * XXX
   */
  remark7?: string;
  /**
   * @example
   * XXX
   */
  remark8?: string;
  /**
   * @example
   * XXX
   */
  remark9?: string;
  taskConfigId?: number;
  taskConfigName?: string;
  /**
   * @example
   * http://aliyun.com/audio.wav
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      callId: 'CallId',
      callTime: 'CallTime',
      callType: 'CallType',
      callee: 'Callee',
      caller: 'Caller',
      customerName: 'CustomerName',
      dataSetName: 'DataSetName',
      dialogueSize: 'DialogueSize',
      duration: 'Duration',
      id: 'Id',
      name: 'Name',
      primaryId: 'PrimaryId',
      remark1: 'Remark1',
      remark10: 'Remark10',
      remark11: 'Remark11',
      remark12: 'Remark12',
      remark13: 'Remark13',
      remark2: 'Remark2',
      remark3: 'Remark3',
      remark4: 'Remark4',
      remark5: 'Remark5',
      remark6: 'Remark6',
      remark7: 'Remark7',
      remark8: 'Remark8',
      remark9: 'Remark9',
      taskConfigId: 'TaskConfigId',
      taskConfigName: 'TaskConfigName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      callId: 'string',
      callTime: 'string',
      callType: 'number',
      callee: 'string',
      caller: 'string',
      customerName: 'string',
      dataSetName: 'string',
      dialogueSize: 'number',
      duration: 'number',
      id: 'string',
      name: 'string',
      primaryId: 'string',
      remark1: 'string',
      remark10: 'string',
      remark11: 'string',
      remark12: 'string',
      remark13: 'string',
      remark2: 'string',
      remark3: 'string',
      remark4: 'string',
      remark5: 'number',
      remark6: 'string',
      remark7: 'string',
      remark8: 'string',
      remark9: 'string',
      taskConfigId: 'number',
      taskConfigName: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistoryReviewRightRuleReviewRightRule extends $dara.Model {
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'rid',
      ruleName: 'ruleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistoryReviewRightRule extends $dara.Model {
  reviewRightRule?: GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistoryReviewRightRuleReviewRightRule[];
  static names(): { [key: string]: string } {
    return {
      reviewRightRule: 'ReviewRightRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewRightRule: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistoryReviewRightRuleReviewRightRule },
    };
  }

  validate() {
    if(Array.isArray(this.reviewRightRule)) {
      $dara.Model.validateArray(this.reviewRightRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistory extends $dara.Model {
  comments?: string;
  complainResult?: number;
  oldScore?: number;
  operator?: number;
  operatorName?: string;
  reviewManagerType?: string;
  reviewResult?: number;
  reviewRightRule?: GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistoryReviewRightRule;
  score?: number;
  time?: number;
  timeStr?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      complainResult: 'ComplainResult',
      oldScore: 'OldScore',
      operator: 'Operator',
      operatorName: 'OperatorName',
      reviewManagerType: 'ReviewManagerType',
      reviewResult: 'ReviewResult',
      reviewRightRule: 'ReviewRightRule',
      score: 'Score',
      time: 'Time',
      timeStr: 'TimeStr',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      complainResult: 'number',
      oldScore: 'number',
      operator: 'number',
      operatorName: 'string',
      reviewManagerType: 'string',
      reviewResult: 'number',
      reviewRightRule: GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistoryReviewRightRule,
      score: 'number',
      time: 'number',
      timeStr: 'string',
      type: 'number',
    };
  }

  validate() {
    if(this.reviewRightRule && typeof (this.reviewRightRule as any).validate === 'function') {
      (this.reviewRightRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoReviewHistoryList extends $dara.Model {
  reviewHistory?: GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistory[];
  static names(): { [key: string]: string } {
    return {
      reviewHistory: 'ReviewHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewHistory: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoReviewHistoryListReviewHistory },
    };
  }

  validate() {
    if(Array.isArray(this.reviewHistory)) {
      $dara.Model.validateArray(this.reviewHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdListReviewKeyIdList extends $dara.Model {
  reviewKeyIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      reviewKeyIdList: 'ReviewKeyIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewKeyIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.reviewKeyIdList)) {
      $dara.Model.validateArray(this.reviewKeyIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdList extends $dara.Model {
  reviewKeyIdList?: GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdListReviewKeyIdList;
  reviewTypeId?: number;
  static names(): { [key: string]: string } {
    return {
      reviewKeyIdList: 'ReviewKeyIdList',
      reviewTypeId: 'ReviewTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewKeyIdList: GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdListReviewKeyIdList,
      reviewTypeId: 'number',
    };
  }

  validate() {
    if(this.reviewKeyIdList && typeof (this.reviewKeyIdList as any).validate === 'function') {
      (this.reviewKeyIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoReviewTypeIdList extends $dara.Model {
  reviewTypeIdList?: GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdList[];
  static names(): { [key: string]: string } {
    return {
      reviewTypeIdList: 'ReviewTypeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewTypeIdList: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoReviewTypeIdListReviewTypeIdList },
    };
  }

  validate() {
    if(Array.isArray(this.reviewTypeIdList)) {
      $dara.Model.validateArray(this.reviewTypeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoSchemeIdList extends $dara.Model {
  schemeIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      schemeIdList: 'SchemeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.schemeIdList)) {
      $dara.Model.validateArray(this.schemeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoSchemeNameList extends $dara.Model {
  schemeNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      schemeNameList: 'SchemeNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.schemeNameList)) {
      $dara.Model.validateArray(this.schemeNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfo extends $dara.Model {
  agent?: GetResultResponseBodyDataResultInfoAgent;
  asrResult?: GetResultResponseBodyDataResultInfoAsrResult;
  /**
   * @example
   * 2021-03-02T14:37Z
   */
  assignmentTime?: string;
  /**
   * @example
   * xx
   */
  comments?: string;
  /**
   * @example
   * 2019-07-24T19:31Z
   */
  createTime?: string;
  /**
   * @example
   * 1602743090
   */
  createTimeLong?: string;
  /**
   * @example
   * xxx
   */
  errorMessage?: string;
  hitResult?: GetResultResponseBodyDataResultInfoHitResult;
  hitScore?: GetResultResponseBodyDataResultInfoHitScore;
  /**
   * @example
   * 4498420@a_z@93EAADF1-01D3-44BD-8AC9-F57F447EFCE8_1614*****
   */
  lastDataId?: string;
  recording?: GetResultResponseBodyDataResultInfoRecording;
  /**
   * @example
   * XXX
   */
  resolver?: string;
  reviewHistoryList?: GetResultResponseBodyDataResultInfoReviewHistoryList;
  /**
   * @example
   * 0
   */
  reviewResult?: number;
  /**
   * @example
   * 1
   */
  reviewStatus?: number;
  /**
   * @example
   * 2019-07-24T19:31Z
   */
  reviewTime?: string;
  /**
   * @example
   * 1602743090
   */
  reviewTimeLong?: string;
  /**
   * @example
   * 1
   */
  reviewType?: number;
  reviewTypeIdList?: GetResultResponseBodyDataResultInfoReviewTypeIdList;
  /**
   * @example
   * xxx
   */
  reviewer?: string;
  schemeIdList?: GetResultResponseBodyDataResultInfoSchemeIdList;
  schemeNameList?: GetResultResponseBodyDataResultInfoSchemeNameList;
  /**
   * @example
   * 100
   */
  score?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * A6BEC8D-9A5B-4BE5-8432-4F635E***
   */
  taskId?: string;
  /**
   * @example
   * test
   */
  taskName?: string;
  vid?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      asrResult: 'AsrResult',
      assignmentTime: 'AssignmentTime',
      comments: 'Comments',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      errorMessage: 'ErrorMessage',
      hitResult: 'HitResult',
      hitScore: 'HitScore',
      lastDataId: 'LastDataId',
      recording: 'Recording',
      resolver: 'Resolver',
      reviewHistoryList: 'ReviewHistoryList',
      reviewResult: 'ReviewResult',
      reviewStatus: 'ReviewStatus',
      reviewTime: 'ReviewTime',
      reviewTimeLong: 'ReviewTimeLong',
      reviewType: 'ReviewType',
      reviewTypeIdList: 'ReviewTypeIdList',
      reviewer: 'Reviewer',
      schemeIdList: 'SchemeIdList',
      schemeNameList: 'SchemeNameList',
      score: 'Score',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      vid: 'Vid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: GetResultResponseBodyDataResultInfoAgent,
      asrResult: GetResultResponseBodyDataResultInfoAsrResult,
      assignmentTime: 'string',
      comments: 'string',
      createTime: 'string',
      createTimeLong: 'string',
      errorMessage: 'string',
      hitResult: GetResultResponseBodyDataResultInfoHitResult,
      hitScore: GetResultResponseBodyDataResultInfoHitScore,
      lastDataId: 'string',
      recording: GetResultResponseBodyDataResultInfoRecording,
      resolver: 'string',
      reviewHistoryList: GetResultResponseBodyDataResultInfoReviewHistoryList,
      reviewResult: 'number',
      reviewStatus: 'number',
      reviewTime: 'string',
      reviewTimeLong: 'string',
      reviewType: 'number',
      reviewTypeIdList: GetResultResponseBodyDataResultInfoReviewTypeIdList,
      reviewer: 'string',
      schemeIdList: GetResultResponseBodyDataResultInfoSchemeIdList,
      schemeNameList: GetResultResponseBodyDataResultInfoSchemeNameList,
      score: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
      vid: 'string',
    };
  }

  validate() {
    if(this.agent && typeof (this.agent as any).validate === 'function') {
      (this.agent as any).validate();
    }
    if(this.asrResult && typeof (this.asrResult as any).validate === 'function') {
      (this.asrResult as any).validate();
    }
    if(this.hitResult && typeof (this.hitResult as any).validate === 'function') {
      (this.hitResult as any).validate();
    }
    if(this.hitScore && typeof (this.hitScore as any).validate === 'function') {
      (this.hitScore as any).validate();
    }
    if(this.recording && typeof (this.recording as any).validate === 'function') {
      (this.recording as any).validate();
    }
    if(this.reviewHistoryList && typeof (this.reviewHistoryList as any).validate === 'function') {
      (this.reviewHistoryList as any).validate();
    }
    if(this.reviewTypeIdList && typeof (this.reviewTypeIdList as any).validate === 'function') {
      (this.reviewTypeIdList as any).validate();
    }
    if(this.schemeIdList && typeof (this.schemeIdList as any).validate === 'function') {
      (this.schemeIdList as any).validate();
    }
    if(this.schemeNameList && typeof (this.schemeNameList as any).validate === 'function') {
      (this.schemeNameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyData extends $dara.Model {
  resultInfo?: GetResultResponseBodyDataResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resultInfo: 'ResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultInfo: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfo },
    };
  }

  validate() {
    if(Array.isArray(this.resultInfo)) {
      $dara.Model.validateArray(this.resultInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  count?: number;
  data?: GetResultResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @example
   * XXX
   */
  resultCountId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCountId: 'ResultCountId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: GetResultResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

