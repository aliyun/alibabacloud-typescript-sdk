// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamExcludes } from "./GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamExcludes";
import { GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamFlowNodePrerequisiteParam } from "./GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamFlowNodePrerequisiteParam";
import { GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParm } from "./GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamIntentModelCheckParm";
import { GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamKeywords } from "./GetResultResponseBodyDataResultInfoHitResultHitResultConditionsConditionsOperatorsOperatorParamKeywords";


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

