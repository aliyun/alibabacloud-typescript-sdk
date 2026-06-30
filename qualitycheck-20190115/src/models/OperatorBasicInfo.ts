// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JudgeNodeMetaDesc } from "./JudgeNodeMetaDesc";


export class OperatorBasicInfoParamDimensions extends $dara.Model {
  desc?: string;
  dimension?: string;
  excludeCondition?: string;
  includeCondition?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      dimension: 'Dimension',
      excludeCondition: 'ExcludeCondition',
      includeCondition: 'IncludeCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      dimension: 'string',
      excludeCondition: 'string',
      includeCondition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperatorBasicInfoParam extends $dara.Model {
  /**
   * @remarks
   * The threshold for answer hits.
   * 
   * @example
   * 90
   */
  answerThreshold?: string;
  /**
   * @remarks
   * The Ant model information.
   */
  antModelInfo?: { [key: string]: string };
  /**
   * @remarks
   * For speech rate detection: specifies whether to calculate the average speech rate for the entire dialogue. The default is \\`false\\`.
   * 
   * @example
   * true
   */
  average?: boolean;
  /**
   * @remarks
   * For the duration operator: the start type for the duration calculation. The calculation can start from the beginning of the recording or the beginning of a specific sentence.
   * 
   * @example
   * 1
   */
  beginType?: string;
  /**
   * @remarks
   * The robot ID.
   * 
   * @example
   * chatbot-cn-xxx
   */
  botId?: string;
  /**
   * @remarks
   * Specifies whether the matching is case-sensitive.
   * 
   * @example
   * true
   */
  caseSensitive?: boolean;
  /**
   * @remarks
   * The knowledge category path.
   * 
   * @example
   * xx
   */
  categoryPathCode?: string;
  /**
   * @remarks
   * For silence detection: specifies whether to check the first sentence.
   * 
   * @example
   * true
   */
  checkFirstSentence?: boolean;
  /**
   * @remarks
   * The detection method. The default is 1.
   * 
   * - 1: Energy fluctuation between contiguous sentences.
   * 
   * - 2: Maximum energy span.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The comparison operator. Valid values are \\`gt\\` (greater than) and \\`lt\\` (less than).
   * 
   * @example
   * gt
   */
  compareOperator?: string;
  /**
   * @remarks
   * Specifies whether to match a single sentence.
   * 
   * @example
   * true
   */
  contextChatMatch?: boolean;
  /**
   * @remarks
   * Parameters for the recording-related operator.
   */
  customerParam?: JudgeNodeMetaDesc;
  /**
   * @remarks
   * For the interruption operator: the delay duration.
   * 
   * @example
   * 10
   */
  delayTime?: number;
  /**
   * @remarks
   * Used for the time interval operator. If set to \\`true\\`, the target sentence is not included in the calculation if it is spoken by the same role as the current sentence.
   * 
   * @example
   * true
   */
  differentRole?: boolean;
  dimensions?: OperatorBasicInfoParamDimensions[];
  /**
   * @remarks
   * For the duration operator: the end type for the duration calculation. The calculation can end at the end of the recording or the end of a specific sentence.
   * 
   * @example
   * 2
   */
  endType?: string;
  /**
   * @remarks
   * For the contextual repetition operator: the dialogues to exclude.
   */
  excludes?: string[];
  /**
   * @remarks
   * For the contextual repetition operator: checks for repetitions within the \\`from\\` number of sentences before the current sentence. A value of \\`0\\` indicates all preceding sentences.
   * 
   * @example
   * 0
   */
  from?: number;
  /**
   * @remarks
   * Used for the time interval operator. Specifies whether to calculate the time interval by subtracting the end time of the target sentence from the end time of the current sentence.
   * 
   * @example
   * true
   */
  fromEnd?: boolean;
  hitCondition?: string;
  /**
   * @remarks
   * For the contextual repetition operator: the number of repetitions.
   * 
   * @example
   * 2
   */
  hitTime?: number;
  /**
   * @remarks
   * The effective sentences. \\`true\\` indicates a single sentence. \\`false\\` indicates multiple sentences.
   * 
   * @example
   * true
   */
  inSentence?: boolean;
  /**
   * @remarks
   * The start of the interval.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * The end of the interval.
   * 
   * @example
   * 2
   */
  intervalEnd?: number;
  /**
   * @remarks
   * The keyword extension.
   * 
   * @example
   * 1
   */
  keywordExtension?: number;
  /**
   * @remarks
   * The number of matched keywords.
   * 
   * @example
   * 1
   */
  keywordMatchSize?: number;
  /**
   * @remarks
   * The keywords.
   */
  keywords?: string[];
  /**
   * @remarks
   * The knowledge information.
   * 
   * @example
   * 下单
   */
  knowledgeInfo?: string;
  /**
   * @remarks
   * The number of sentences after a question is hit within which to detect the answer.
   * 
   * @example
   * 1
   */
  knowledgeSentenceNum?: number;
  /**
   * @remarks
   * The knowledge category or knowledge ID.
   * 
   * @example
   * 1
   */
  knowledgeTargetId?: string;
  /**
   * @remarks
   * The name of the knowledge category or knowledge.
   * 
   * @example
   * 订单
   */
  knowledgeTargetName?: string;
  /**
   * @remarks
   * 0: Category. 1: Knowledge.
   * 
   * @example
   * 1
   */
  knowledgeTargetType?: number;
  knowledges?: string;
  /**
   * @remarks
   * The LGF sentences.
   */
  lgfSentences?: string[];
  llmModelCode?: string;
  /**
   * @remarks
   * The change in energy value. The default is 3. The range is 1 to 9.
   * 
   * @example
   * 3
   */
  maxEmotionChangeValue?: number;
  /**
   * @remarks
   * The minimum number of words in a sentence. Sentences with fewer words than this value are not checked.
   * 
   * @example
   * 1
   */
  minWordSize?: number;
  /**
   * @remarks
   * \\`true\\` indicates that the two contiguous sentences from different roles are used. \\`false\\` indicates that the first sentence from each role is used to compare the response time. The default is \\`false\\`.
   * 
   * @example
   * true
   */
  nearDialogue?: boolean;
  /**
   * @remarks
   * The regular expression to exclude.
   * 
   * @example
   * 优秀.*
   */
  notRegex?: string;
  /**
   * @remarks
   * The statement.
   * 
   * @example
   * 你好，请问
   */
  phrase?: string;
  /**
   * @remarks
   * The variable required for foreign-related properties.
   * 
   * @example
   * xx
   */
  pkey?: string;
  /**
   * @remarks
   * The poutput type.
   * 
   * @example
   * 1
   */
  poutputType?: number;
  /**
   * @remarks
   * The model detection type.
   */
  pvalues?: string[];
  /**
   * @remarks
   * The threshold for question hits.
   * 
   * @example
   * 90
   */
  questionThreshold?: string;
  /**
   * @remarks
   * The references.
   */
  references?: string[];
  /**
   * @remarks
   * The regular expression.
   * 
   * @example
   * 质疑.*
   */
  regex?: string;
  /**
   * @remarks
   * The role used in the operator. This parameter is currently used for the contextual repetition operator in conjunction with \\`Target_role\\`.
   * 
   * @example
   * 1
   */
  roleId?: number;
  sceneName?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 70
   */
  score?: number;
  /**
   * @remarks
   * The similarity threshold.
   * 
   * @example
   * 90
   */
  similarityThreshold?: number;
  /**
   * @remarks
   * Similar questions.
   */
  similarlySentences?: string[];
  /**
   * @remarks
   * The synonyms.
   */
  synonyms?: { [key: string]: string[] };
  /**
   * @remarks
   * The target sentence, specified as the number of sentences before the current one. If set to 0, the time interval is calculated as the end time of the current sentence minus its start time.
   * 
   * @example
   * 1
   */
  target?: number;
  /**
   * @remarks
   * Used for the repetition operator. If the current sentence matches the regular expression, the matched part is searched for in the sentences spoken by the specified \\`Target_role\\` that appear before the current sentence.
   * 
   * @example
   * 客服
   */
  targetRole?: string;
  /**
   * @remarks
   * The threshold.
   * 
   * @example
   * 90
   */
  threshold?: number;
  /**
   * @remarks
   * Specifies whether to use the EAS algorithm.
   * 
   * @example
   * true
   */
  useEasAlgorithm?: boolean;
  /**
   * @remarks
   * Used for the speech rate operator. The speech rate value per unit of time. It determines whether the speech rate of the current sentence exceeds the specified value. The time unit depends on the time units of the \\`start\\` and \\`end\\` parameters.
   * 
   * @example
   * 111
   */
  velocity?: number;
  /**
   * @remarks
   * Used for the speech rate operator. The speech rate value per minute. It determines whether the speech rate of the current sentence exceeds the specified value.
   * 
   * @example
   * 1
   */
  velocityInMint?: number;
  static names(): { [key: string]: string } {
    return {
      answerThreshold: 'AnswerThreshold',
      antModelInfo: 'AntModelInfo',
      average: 'Average',
      beginType: 'BeginType',
      botId: 'BotId',
      caseSensitive: 'Case_sensitive',
      categoryPathCode: 'CategoryPathCode',
      checkFirstSentence: 'CheckFirstSentence',
      checkType: 'CheckType',
      compareOperator: 'CompareOperator',
      contextChatMatch: 'ContextChatMatch',
      customerParam: 'CustomerParam',
      delayTime: 'DelayTime',
      differentRole: 'Different_role',
      dimensions: 'Dimensions',
      endType: 'EndType',
      excludes: 'Excludes',
      from: 'From',
      fromEnd: 'From_end',
      hitCondition: 'HitCondition',
      hitTime: 'Hit_time',
      inSentence: 'In_sentence',
      interval: 'Interval',
      intervalEnd: 'IntervalEnd',
      keywordExtension: 'KeywordExtension',
      keywordMatchSize: 'KeywordMatchSize',
      keywords: 'Keywords',
      knowledgeInfo: 'KnowledgeInfo',
      knowledgeSentenceNum: 'KnowledgeSentenceNum',
      knowledgeTargetId: 'KnowledgeTargetId',
      knowledgeTargetName: 'KnowledgeTargetName',
      knowledgeTargetType: 'KnowledgeTargetType',
      knowledges: 'Knowledges',
      lgfSentences: 'LgfSentences',
      llmModelCode: 'LlmModelCode',
      maxEmotionChangeValue: 'MaxEmotionChangeValue',
      minWordSize: 'MinWordSize',
      nearDialogue: 'Near_dialogue',
      notRegex: 'NotRegex',
      phrase: 'Phrase',
      pkey: 'Pkey',
      poutputType: 'Poutput_type',
      pvalues: 'Pvalues',
      questionThreshold: 'QuestionThreshold',
      references: 'References',
      regex: 'Regex',
      roleId: 'RoleId',
      sceneName: 'SceneName',
      score: 'Score',
      similarityThreshold: 'Similarity_threshold',
      similarlySentences: 'SimilarlySentences',
      synonyms: 'Synonyms',
      target: 'Target',
      targetRole: 'Target_role',
      threshold: 'Threshold',
      useEasAlgorithm: 'UseEasAlgorithm',
      velocity: 'Velocity',
      velocityInMint: 'VelocityInMint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerThreshold: 'string',
      antModelInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      average: 'boolean',
      beginType: 'string',
      botId: 'string',
      caseSensitive: 'boolean',
      categoryPathCode: 'string',
      checkFirstSentence: 'boolean',
      checkType: 'number',
      compareOperator: 'string',
      contextChatMatch: 'boolean',
      customerParam: JudgeNodeMetaDesc,
      delayTime: 'number',
      differentRole: 'boolean',
      dimensions: { 'type': 'array', 'itemType': OperatorBasicInfoParamDimensions },
      endType: 'string',
      excludes: { 'type': 'array', 'itemType': 'string' },
      from: 'number',
      fromEnd: 'boolean',
      hitCondition: 'string',
      hitTime: 'number',
      inSentence: 'boolean',
      interval: 'number',
      intervalEnd: 'number',
      keywordExtension: 'number',
      keywordMatchSize: 'number',
      keywords: { 'type': 'array', 'itemType': 'string' },
      knowledgeInfo: 'string',
      knowledgeSentenceNum: 'number',
      knowledgeTargetId: 'string',
      knowledgeTargetName: 'string',
      knowledgeTargetType: 'number',
      knowledges: 'string',
      lgfSentences: { 'type': 'array', 'itemType': 'string' },
      llmModelCode: 'string',
      maxEmotionChangeValue: 'number',
      minWordSize: 'number',
      nearDialogue: 'boolean',
      notRegex: 'string',
      phrase: 'string',
      pkey: 'string',
      poutputType: 'number',
      pvalues: { 'type': 'array', 'itemType': 'string' },
      questionThreshold: 'string',
      references: { 'type': 'array', 'itemType': 'string' },
      regex: 'string',
      roleId: 'number',
      sceneName: 'string',
      score: 'number',
      similarityThreshold: 'number',
      similarlySentences: { 'type': 'array', 'itemType': 'string' },
      synonyms: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      target: 'number',
      targetRole: 'string',
      threshold: 'number',
      useEasAlgorithm: 'boolean',
      velocity: 'number',
      velocityInMint: 'number',
    };
  }

  validate() {
    if(this.antModelInfo) {
      $dara.Model.validateMap(this.antModelInfo);
    }
    if(this.customerParam && typeof (this.customerParam as any).validate === 'function') {
      (this.customerParam as any).validate();
    }
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(Array.isArray(this.excludes)) {
      $dara.Model.validateArray(this.excludes);
    }
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    if(Array.isArray(this.lgfSentences)) {
      $dara.Model.validateArray(this.lgfSentences);
    }
    if(Array.isArray(this.pvalues)) {
      $dara.Model.validateArray(this.pvalues);
    }
    if(Array.isArray(this.references)) {
      $dara.Model.validateArray(this.references);
    }
    if(Array.isArray(this.similarlySentences)) {
      $dara.Model.validateArray(this.similarlySentences);
    }
    if(this.synonyms) {
      $dara.Model.validateMap(this.synonyms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperatorBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The operator name.
   * 
   * @example
   * a
   */
  name?: string;
  /**
   * @remarks
   * The ID. This can be the primary key ID or an ID generated by the frontend.
   * 
   * @example
   * a
   */
  oid?: string;
  /**
   * @remarks
   * The operator parameters.
   */
  param?: OperatorBasicInfoParam;
  /**
   * @remarks
   * The quality check type:
   * 
   * - 0: Offline check
   * 
   * - 1: Real-time check
   * 
   * @example
   * 0
   */
  qualityCheckType?: number;
  /**
   * @remarks
   * The operator category.
   * 
   * @example
   * HIT_ANY_KEYWORDS
   */
  type?: string;
  /**
   * @remarks
   * The user group.
   * 
   * @example
   * xxx
   */
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      oid: 'Oid',
      param: 'Param',
      qualityCheckType: 'QualityCheckType',
      type: 'Type',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      oid: 'string',
      param: OperatorBasicInfoParam,
      qualityCheckType: 'number',
      type: 'string',
      userGroup: 'string',
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

