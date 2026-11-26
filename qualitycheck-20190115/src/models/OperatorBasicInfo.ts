// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JudgeNodeMetaDesc } from "./JudgeNodeMetaDesc";


export class OperatorBasicInfoParamDimensions extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Checks whether impolite or non-standard opening remarks are used in customer service conversations, which affects service professionalism
   */
  desc?: string;
  /**
   * @remarks
   * The quality check dimensions.
   * 
   * @example
   * Inappropriate opening remarks
   */
  dimension?: string;
  /**
   * @remarks
   * The exclusion condition.
   * 
   * @example
   * Customer service representatives must use the official standard dialect during service
   */
  excludeCondition?: string;
  /**
   * @remarks
   * The hit condition.
   * 
   * @example
   * Non-standard and impolite greetings such as "Hey" appear at the beginning of the conversation
   */
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
   * The answer hit threshold.
   * 
   * @example
   * 90
   */
  answerThreshold?: string;
  /**
   * @remarks
   * The Ant model information.
   * 
   * @example
   * model
   */
  antModelInfo?: { [key: string]: string };
  /**
   * @remarks
   * Specifies whether to calculate the average speech rate for the entire conversation during speech rate detection. Default value: false.
   * 
   * @example
   * true
   */
  average?: boolean;
  /**
   * @remarks
   * The start type for duration calculation in the duration operator. Specifies whether the calculation starts from the beginning of the recording or the beginning of a specific dialogue.
   * 
   * @example
   * 1
   */
  beginType?: string;
  /**
   * @remarks
   * The bot ID.
   * 
   * @example
   * chatbot-cn-xxx
   */
  botId?: string;
  /**
   * @remarks
   * Specifies whether the match is case-sensitive.
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
   * Deprecated field
   */
  categoryPathCode?: string;
  /**
   * @remarks
   * Specifies whether to check the first sentence for silence detection.
   * 
   * @example
   * true
   */
  checkFirstSentence?: boolean;
  /**
   * @remarks
   * The check type. Default value: 1. Valid values:
   * - 1: Energy fluctuation between adjacent sentences.
   * - 2: Maximum energy span.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The comparison operator. Valid values: gt: Greater than. lt: Less than.
   * 
   * @example
   * gt
   */
  compareOperator?: string;
  /**
   * @remarks
   * Specifies whether single-sentence matching is enabled.
   * 
   * @example
   * true
   */
  contextChatMatch?: boolean;
  /**
   * @remarks
   * The operator parameters for call variables.
   */
  customerParam?: JudgeNodeMetaDesc;
  /**
   * @remarks
   * The delay duration for the barge-in operator.
   * 
   * @example
   * 10
   */
  delayTime?: number;
  /**
   * @remarks
   * Used for the time interval operator to determine the time interval. If set to true, the target sentence is excluded from the calculation if it is spoken by the same role as the current sentence.
   * 
   * @example
   * true
   */
  differentRole?: boolean;
  /**
   * @remarks
   * The quality check dimensions.
   */
  dimensions?: OperatorBasicInfoParamDimensions[];
  /**
   * @remarks
   * The end type for duration calculation in the duration operator. Specifies whether the calculation ends at the end of the recording or the end of a specific dialogue.
   * 
   * @example
   * 2
   */
  endType?: string;
  /**
   * @remarks
   * The dialogues excluded from the context repetition operator.
   */
  excludes?: string[];
  /**
   * @remarks
   * The number of preceding sentences to check for repetition in the context repetition operator. A value of 0 indicates all preceding sentences.
   * 
   * @example
   * 0
   */
  from?: number;
  /**
   * @remarks
   * Used for the time interval operator to determine the time interval. Specifies whether the time interval is calculated by subtracting the end time of the target sentence from the end time of the current sentence.
   * 
   * @example
   * true
   */
  fromEnd?: boolean;
  /**
   * @remarks
   * The hit condition.
   * 
   * @example
   * Hit condition
   */
  hitCondition?: string;
  /**
   * @remarks
   * The number of repetitions for the context repetition operator.
   * 
   * @example
   * 2
   */
  hitTime?: number;
  /**
   * @remarks
   * Specifies whether the rule applies to a single sentence or multiple sentences. Valid values: true: A single sentence. false: Multiple sentences.
   * 
   * @example
   * true
   */
  inSentence?: boolean;
  /**
   * @remarks
   * The start of the interval range.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * The end of the interval range.
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
   * Place an order
   */
  knowledgeInfo?: string;
  /**
   * @remarks
   * The number of sentences within which the answer is detected after a question is hit.
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
   * The knowledge category name or knowledge name.
   * 
   * @example
   * Order
   */
  knowledgeTargetName?: string;
  /**
   * @remarks
   * The knowledge target type. Valid values:
   * - 0: Category.
   * - 1: Knowledge.
   * 
   * @example
   * 1
   */
  knowledgeTargetType?: number;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated.
   * 
   * @example
   * Deprecated field
   */
  knowledges?: string;
  /**
   * @remarks
   * The LGF sentences.
   */
  lgfSentences?: string[];
  /**
   * @remarks
   * The large language model code.
   * 
   * @example
   * TYXM_PLUS
   */
  llmModelCode?: string;
  /**
   * @remarks
   * The emotion change value. Default value: 3. Valid values: 1 to 9.
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
   * Specifies whether to use adjacent sentences spoken by different roles. Valid values: true: Uses adjacent sentences spoken by different roles. false: Uses the first sentences spoken by different roles to compare the response time. This is the default value.
   * 
   * @example
   * true
   */
  nearDialogue?: boolean;
  /**
   * @remarks
   * The excluded regular expression.
   * 
   * @example
   * Excellent.*
   */
  notRegex?: string;
  /**
   * @remarks
   * The phrase.
   * 
   * @example
   * Hello, may I ask
   */
  phrase?: string;
  /**
   * @remarks
   * The variable required for external properties.
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
   * The question hit threshold.
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
   * Question.*
   */
  regex?: string;
  /**
   * @remarks
   * The role used in the operator. Currently used for the context repetition operator and used together with target_role.
   * 
   * @example
   * 1
   */
  roleId?: number;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * Polite language detection
   */
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
   * The similar questions.
   */
  similarlySentences?: string[];
  /**
   * @remarks
   * The synonyms.
   * 
   * @example
   * Deprecated field
   */
  synonyms?: { [key: string]: string[] };
  /**
   * @remarks
   * Specifies the number of sentences before the current sentence to use as the target sentence. If the value is 0, the time interval is calculated by subtracting the start time of the current sentence from its end time.
   * 
   * @example
   * 1
   */
  target?: number;
  /**
   * @remarks
   * Used for the repetition operator. If the current sentence matches the regular expression, the matched part is searched in the preceding sentences spoken by the role specified by target_role.
   * 
   * @example
   * Agent
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
   * Specifies whether the EAS algorithm is used.
   * 
   * @example
   * true
   */
  useEasAlgorithm?: boolean;
  /**
   * @remarks
   * Used for the speech rate operator. Specifies the speech rate value per unit of time to determine whether the speech rate of the current sentence exceeds the specified value. The time unit depends on the time units of the passed start and end parameters.
   * 
   * @example
   * 111
   */
  velocity?: number;
  /**
   * @remarks
   * Used for the speech rate operator. Specifies the speech rate value per minute to determine whether the speech rate of the current sentence exceeds the specified value.
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
   * The primary key ID or the frontend-generated ID.
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
   * The quality check type. Valid values:
   * - 0: Offline quality check.
   * - 1: Real-time quality check.
   * 
   * @example
   * 0
   */
  qualityCheckType?: number;
  /**
   * @remarks
   * The operator type.
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

