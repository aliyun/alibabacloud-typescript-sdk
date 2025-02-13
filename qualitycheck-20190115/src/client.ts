// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class ConditionBasicInfoCheckRangeAnchor extends $dara.Model {
  cid?: string;
  hitTime?: number;
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

export class ConditionBasicInfoCheckRangeRange extends $dara.Model {
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

export class ConditionBasicInfoCheckRange extends $dara.Model {
  absolute?: boolean;
  allSentencesSatisfy?: boolean;
  anchor?: ConditionBasicInfoCheckRangeAnchor;
  range?: ConditionBasicInfoCheckRangeRange;
  role?: string;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      absolute: 'Absolute',
      allSentencesSatisfy: 'AllSentencesSatisfy',
      anchor: 'Anchor',
      range: 'Range',
      role: 'Role',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absolute: 'boolean',
      allSentencesSatisfy: 'boolean',
      anchor: ConditionBasicInfoCheckRangeAnchor,
      range: ConditionBasicInfoCheckRangeRange,
      role: 'string',
      roleId: 'number',
    };
  }

  validate() {
    if(this.anchor && typeof (this.anchor as any).validate === 'function') {
      (this.anchor as any).validate();
    }
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GraphFlowNodeNextNodes extends $dara.Model {
  checkType?: number;
  index?: number;
  lambda?: string;
  name?: string;
  nextNodeId?: number;
  triggers?: string[];
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      index: 'Index',
      lambda: 'Lambda',
      name: 'Name',
      nextNodeId: 'NextNodeId',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      index: 'number',
      lambda: 'string',
      name: 'string',
      nextNodeId: 'number',
      triggers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GraphFlowNodeProperties extends $dara.Model {
  autoReview?: number;
  branchJudge?: boolean;
  checkMoreSize?: number;
  checkType?: number;
  lambda?: string;
  role?: string;
  ruleScoreType?: number;
  sayType?: string;
  scoreNum?: number;
  scoreNumType?: number;
  scoreRuleHitType?: number;
  scoreType?: number;
  triggers?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      branchJudge: 'BranchJudge',
      checkMoreSize: 'CheckMoreSize',
      checkType: 'CheckType',
      lambda: 'Lambda',
      role: 'Role',
      ruleScoreType: 'RuleScoreType',
      sayType: 'SayType',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreRuleHitType: 'ScoreRuleHitType',
      scoreType: 'ScoreType',
      triggers: 'Triggers',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      branchJudge: 'boolean',
      checkMoreSize: 'number',
      checkType: 'number',
      lambda: 'string',
      role: 'string',
      ruleScoreType: 'number',
      sayType: 'string',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreRuleHitType: 'number',
      scoreType: 'number',
      triggers: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NextNodeSituationsConditionGroup extends $dara.Model {
  conditions?: JudgeNodeMetaDesc[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': JudgeNodeMetaDesc },
      type: 'string',
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

export class OperatorBasicInfoParam extends $dara.Model {
  answerThreshold?: string;
  antModelInfo?: { [key: string]: string };
  average?: boolean;
  beginType?: string;
  botId?: string;
  caseSensitive?: boolean;
  categoryPathCode?: string;
  checkFirstSentence?: boolean;
  checkType?: number;
  compareOperator?: string;
  contextChatMatch?: boolean;
  customerParam?: JudgeNodeMetaDesc;
  delayTime?: number;
  differentRole?: boolean;
  endType?: string;
  excludes?: string[];
  from?: number;
  fromEnd?: boolean;
  hitTime?: number;
  inSentence?: boolean;
  interval?: number;
  intervalEnd?: number;
  keywordExtension?: number;
  keywordMatchSize?: number;
  keywords?: string[];
  knowledgeInfo?: string;
  knowledgeSentenceNum?: number;
  knowledgeTargetId?: string;
  knowledgeTargetName?: string;
  knowledgeTargetType?: number;
  lgfSentences?: string[];
  maxEmotionChangeValue?: number;
  minWordSize?: number;
  nearDialogue?: boolean;
  notRegex?: string;
  phrase?: string;
  pkey?: string;
  poutputType?: number;
  pvalues?: string[];
  questionThreshold?: string;
  references?: string[];
  regex?: string;
  roleId?: number;
  score?: number;
  similarityThreshold?: number;
  similarlySentences?: string[];
  synonyms?: { [key: string]: string[] };
  target?: number;
  targetRole?: string;
  threshold?: number;
  useEasAlgorithm?: boolean;
  velocity?: number;
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
      endType: 'EndType',
      excludes: 'Excludes',
      from: 'From',
      fromEnd: 'From_end',
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
      lgfSentences: 'LgfSentences',
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
      endType: 'string',
      excludes: { 'type': 'array', 'itemType': 'string' },
      from: 'number',
      fromEnd: 'boolean',
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
      lgfSentences: { 'type': 'array', 'itemType': 'string' },
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

export class RuleTestDialogueContent extends $dara.Model {
  begin?: number;
  beginTime?: number;
  emotionValue?: number;
  end?: number;
  hourMinSec?: string;
  identity?: string;
  role?: string;
  silenceDuration?: number;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      emotionValue: 'EmotionValue',
      end: 'End',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'number',
      emotionValue: 'number',
      end: 'number',
      hourMinSec: 'string',
      identity: 'string',
      role: 'string',
      silenceDuration: 'number',
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

export class SchemeCheckTypeSchemeScoreInfoList extends $dara.Model {
  name?: string;
  rid?: number;
  scoreNum?: number;
  scoreNumType?: number;
  scoreRuleHitType?: number;
  scoreType?: number;
  taskFlowId?: number;
  taskFlowName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rid: 'Rid',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreRuleHitType: 'ScoreRuleHitType',
      scoreType: 'ScoreType',
      taskFlowId: 'TaskFlowId',
      taskFlowName: 'TaskFlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rid: 'number',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreRuleHitType: 'number',
      scoreType: 'number',
      taskFlowId: 'number',
      taskFlowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemeCheckTypeTaskFlowScoreInfoListSchemeScoreInfoList extends $dara.Model {
  name?: string;
  rid?: number;
  scoreNum?: number;
  scoreNumType?: number;
  scoreRuleHitType?: number;
  scoreType?: number;
  taskFlowId?: number;
  taskFlowName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rid: 'Rid',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreRuleHitType: 'ScoreRuleHitType',
      scoreType: 'ScoreType',
      taskFlowId: 'TaskFlowId',
      taskFlowName: 'TaskFlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rid: 'number',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreRuleHitType: 'number',
      scoreType: 'number',
      taskFlowId: 'number',
      taskFlowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemeCheckTypeTaskFlowScoreInfoList extends $dara.Model {
  schemeScoreInfoList?: SchemeCheckTypeTaskFlowScoreInfoListSchemeScoreInfoList[];
  taskFlowId?: number;
  taskFlowName?: string;
  taskFlowType?: number;
  static names(): { [key: string]: string } {
    return {
      schemeScoreInfoList: 'SchemeScoreInfoList',
      taskFlowId: 'TaskFlowId',
      taskFlowName: 'TaskFlowName',
      taskFlowType: 'TaskFlowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeScoreInfoList: { 'type': 'array', 'itemType': SchemeCheckTypeTaskFlowScoreInfoListSchemeScoreInfoList },
      taskFlowId: 'number',
      taskFlowName: 'string',
      taskFlowType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.schemeScoreInfoList)) {
      $dara.Model.validateArray(this.schemeScoreInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleCategoryResponseBodyData extends $dara.Model {
  select?: boolean;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleV4ResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyWsTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * 42e59bcd-7206-44c5-ad34-525d364687c4
   */
  sessionId?: string;
  /**
   * @example
   * 5607b21d1728700640
   */
  token?: string;
  /**
   * @example
   * wss://ws-gateway-real-voice.aliyuncs.com
   */
  wsEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      token: 'Token',
      wsEndpoint: 'WsEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      token: 'string',
      wsEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerBySessionGroupResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubmitReviewInfoResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCheckTypeToSchemeResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityCheckSchemeResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeTaskConfigResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelRuleCategoryResponseBodyData extends $dara.Model {
  /**
   * @example
   * false
   */
  select?: boolean;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityCheckSchemeResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleV4ResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemeTaskConfigResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBodyDataWordsWord extends $dara.Model {
  /**
   * @example
   * 0
   */
  weight?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'Weight',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBodyDataWords extends $dara.Model {
  word?: GetAsrVocabResponseBodyDataWordsWord[];
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: { 'type': 'array', 'itemType': GetAsrVocabResponseBodyDataWordsWord },
    };
  }

  validate() {
    if(Array.isArray(this.word)) {
      $dara.Model.validateArray(this.word);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBodyData extends $dara.Model {
  asrVersion?: number;
  modelCustomizationId?: string;
  /**
   * @example
   * test
   */
  name?: string;
  words?: GetAsrVocabResponseBodyDataWords;
  static names(): { [key: string]: string } {
    return {
      asrVersion: 'AsrVersion',
      modelCustomizationId: 'ModelCustomizationId',
      name: 'Name',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrVersion: 'number',
      modelCustomizationId: 'string',
      name: 'string',
      words: GetAsrVocabResponseBodyDataWords,
    };
  }

  validate() {
    if(this.words && typeof (this.words as any).validate === 'function') {
      (this.words as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  bid?: number;
  businessName?: string;
  /**
   * @example
   * 0
   */
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      businessName: 'BusinessName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      businessName: 'string',
      serviceType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponseBodyData extends $dara.Model {
  businessCategoryBasicInfo?: GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      businessCategoryBasicInfo: 'BusinessCategoryBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryBasicInfo: { 'type': 'array', 'itemType': GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.businessCategoryBasicInfo)) {
      $dara.Model.validateArray(this.businessCategoryBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo extends $dara.Model {
  asrVersion?: number;
  /**
   * @example
   * 2019-01-08
   */
  createTime?: string;
  /**
   * @example
   * cdae396590bb479a9ec40f3476e274fc
   */
  modeCustomizationId?: string;
  /**
   * @example
   * 1
   */
  modelId?: number;
  modelName?: string;
  /**
   * @example
   * 5
   */
  modelStatus?: number;
  /**
   * @example
   * 1
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      asrVersion: 'AsrVersion',
      createTime: 'CreateTime',
      modeCustomizationId: 'ModeCustomizationId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrVersion: 'number',
      createTime: 'string',
      modeCustomizationId: 'string',
      modelId: 'number',
      modelName: 'string',
      modelStatus: 'number',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListResponseBodyData extends $dara.Model {
  modelCustomizationDataSetPo?: GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo[];
  static names(): { [key: string]: string } {
    return {
      modelCustomizationDataSetPo: 'ModelCustomizationDataSetPo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCustomizationDataSetPo: { 'type': 'array', 'itemType': GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo },
    };
  }

  validate() {
    if(Array.isArray(this.modelCustomizationDataSetPo)) {
      $dara.Model.validateArray(this.modelCustomizationDataSetPo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine extends $dara.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.line)) {
      $dara.Model.validateArray(this.line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource extends $dara.Model {
  line?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine;
  /**
   * @example
   * 5
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine,
      position: 'number',
    };
  }

  validate() {
    if(this.line && typeof (this.line as any).validate === 'function') {
      (this.line as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine extends $dara.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.line)) {
      $dara.Model.validateArray(this.line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget extends $dara.Model {
  line?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine;
  /**
   * @example
   * 5
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine,
      position: 'number',
    };
  }

  validate() {
    if(this.line && typeof (this.line as any).validate === 'function') {
      (this.line as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta extends $dara.Model {
  source?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource;
  target?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget;
  /**
   * @example
   * CHANGE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource,
      target: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget,
      type: 'string',
    };
  }

  validate() {
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas extends $dara.Model {
  delta?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta[];
  static names(): { [key: string]: string } {
    return {
      delta: 'Delta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: { 'type': 'array', 'itemType': GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta },
    };
  }

  validate() {
    if(Array.isArray(this.delta)) {
      $dara.Model.validateArray(this.delta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogue extends $dara.Model {
  /**
   * @example
   * 980
   */
  begin?: number;
  /**
   * @example
   * XXX
   */
  beginTime?: string;
  deltas?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas;
  /**
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @example
   * 3422
   */
  end?: number;
  /**
   * @example
   * 00:00:07
   */
  hourMinSec?: string;
  identity?: string;
  /**
   * @example
   * 2
   */
  incorrectWords?: number;
  role?: string;
  /**
   * @example
   * 1
   */
  silenceDuration?: number;
  sourceRole?: string;
  sourceWords?: string;
  /**
   * @example
   * 332
   */
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      deltas: 'Deltas',
      emotionValue: 'EmotionValue',
      end: 'End',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      incorrectWords: 'IncorrectWords',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      sourceRole: 'SourceRole',
      sourceWords: 'SourceWords',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      deltas: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas,
      emotionValue: 'number',
      end: 'number',
      hourMinSec: 'string',
      identity: 'string',
      incorrectWords: 'number',
      role: 'string',
      silenceDuration: 'number',
      sourceRole: 'string',
      sourceWords: 'string',
      speechRate: 'number',
      words: 'string',
    };
  }

  validate() {
    if(this.deltas && typeof (this.deltas as any).validate === 'function') {
      (this.deltas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialogues extends $dara.Model {
  dialogue?: GetNextResultToVerifyResponseBodyDataDialoguesDialogue[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: { 'type': 'array', 'itemType': GetNextResultToVerifyResponseBodyDataDialoguesDialogue },
    };
  }

  validate() {
    if(Array.isArray(this.dialogue)) {
      $dara.Model.validateArray(this.dialogue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyData extends $dara.Model {
  /**
   * @example
   * http
   */
  audioScheme?: string;
  /**
   * @example
   * sca-bucket.oss-cn-hangzhou.aliyuncs.com/upload_1173636551461420/dateset_1584674455133_SzC/%E4%BA%BA%E5%B7%A5%E6%A0%A1%E9%AA%8C%E6%B5%8B%E8%AF%95-%E6%9F%A5%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94.wav?Expires=1584847372&amp;OSSAccessKeyId=*****&amp;Signature=HccAKnLOJwoYvzE*********
   */
  audioURL?: string;
  dialogues?: GetNextResultToVerifyResponseBodyDataDialogues;
  /**
   * @example
   * 23421
   */
  duration?: number;
  /**
   * @example
   * e790e6c919d84b82b64ee*****
   */
  fileId?: string;
  /**
   * @example
   * xxx.wav
   */
  fileName?: string;
  /**
   * @example
   * 23
   */
  incorrectWords?: number;
  /**
   * @example
   * 2
   */
  index?: number;
  /**
   * @example
   * 0.97079998
   */
  precision?: number;
  /**
   * @example
   * 3
   */
  status?: number;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @example
   * 2020-03-20T11:26Z
   */
  updateTime?: string;
  /**
   * @example
   * true
   */
  verified?: boolean;
  /**
   * @example
   * 2
   */
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      audioScheme: 'AudioScheme',
      audioURL: 'AudioURL',
      dialogues: 'Dialogues',
      duration: 'Duration',
      fileId: 'FileId',
      fileName: 'FileName',
      incorrectWords: 'IncorrectWords',
      index: 'Index',
      precision: 'Precision',
      status: 'Status',
      totalCount: 'TotalCount',
      updateTime: 'UpdateTime',
      verified: 'Verified',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioScheme: 'string',
      audioURL: 'string',
      dialogues: GetNextResultToVerifyResponseBodyDataDialogues,
      duration: 'number',
      fileId: 'string',
      fileName: 'string',
      incorrectWords: 'number',
      index: 'number',
      precision: 'number',
      status: 'number',
      totalCount: 'number',
      updateTime: 'string',
      verified: 'boolean',
      verifiedCount: 'number',
    };
  }

  validate() {
    if(this.dialogues && typeof (this.dialogues as any).validate === 'function') {
      (this.dialogues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBodyDataPrecisionsPrecision extends $dara.Model {
  /**
   * @example
   * 2311
   */
  modelId?: number;
  modelName?: string;
  /**
   * @example
   * 0.98
   */
  precision?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 593A04C0-E6E9-4CDC-8C99-B120C******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelName: 'ModelName',
      precision: 'Precision',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      modelName: 'string',
      precision: 'number',
      status: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBodyDataPrecisions extends $dara.Model {
  precision?: GetPrecisionTaskResponseBodyDataPrecisionsPrecision[];
  static names(): { [key: string]: string } {
    return {
      precision: 'Precision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precision: { 'type': 'array', 'itemType': GetPrecisionTaskResponseBodyDataPrecisionsPrecision },
    };
  }

  validate() {
    if(Array.isArray(this.precision)) {
      $dara.Model.validateArray(this.precision);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1212
   */
  dataSetId?: number;
  dataSetName?: string;
  /**
   * @example
   * 3423
   */
  duration?: number;
  /**
   * @example
   * 23
   */
  incorrectWords?: number;
  name?: string;
  precisions?: GetPrecisionTaskResponseBodyDataPrecisions;
  /**
   * @example
   * 3
   */
  source?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 7C1DEF5F-2C18-4D36-99C6-8C27*****
   */
  taskId?: string;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @example
   * 2020-03-10 20:26:29
   */
  updateTime?: string;
  /**
   * @example
   * 2
   */
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetId: 'DataSetId',
      dataSetName: 'DataSetName',
      duration: 'Duration',
      incorrectWords: 'IncorrectWords',
      name: 'Name',
      precisions: 'Precisions',
      source: 'Source',
      status: 'Status',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
      updateTime: 'UpdateTime',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetId: 'number',
      dataSetName: 'string',
      duration: 'number',
      incorrectWords: 'number',
      name: 'string',
      precisions: GetPrecisionTaskResponseBodyDataPrecisions,
      source: 'number',
      status: 'number',
      taskId: 'string',
      totalCount: 'number',
      updateTime: 'string',
      verifiedCount: 'number',
    };
  }

  validate() {
    if(this.precisions && typeof (this.precisions as any).validate === 'function') {
      (this.precisions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckSchemeResponseBodyDataSchemeCheckTypeList extends $dara.Model {
  checkName?: string;
  /**
   * @example
   * 0
   */
  checkType?: number;
  /**
   * @example
   * 1
   */
  enable?: number;
  /**
   * @example
   * 32
   */
  schemeId?: number;
  /**
   * @example
   * 20
   */
  score?: number;
  /**
   * @example
   * 10
   */
  sourceScore?: number;
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkType: 'CheckType',
      enable: 'Enable',
      schemeId: 'SchemeId',
      score: 'Score',
      sourceScore: 'SourceScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkType: 'number',
      enable: 'number',
      schemeId: 'number',
      score: 'number',
      sourceScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckSchemeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1616113198000
   */
  createTime?: string;
  /**
   * @example
   * xxx
   */
  createUserName?: string;
  /**
   * @example
   * 1
   */
  dataType?: number;
  description?: string;
  initScore?: string;
  /**
   * @example
   * xxx
   */
  name?: string;
  ruleIds?: string[];
  ruleList?: RulesInfo[];
  schemeCheckTypeList?: GetQualityCheckSchemeResponseBodyDataSchemeCheckTypeList[];
  /**
   * @example
   * 112**
   */
  schemeId?: number;
  /**
   * @example
   * 1
   */
  schemeTemplateId?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  templateType?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 1616113198000
   */
  updateTime?: string;
  /**
   * @example
   * xxx
   */
  updateUserName?: string;
  /**
   * @example
   * 1616113198000
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      dataType: 'DataType',
      description: 'Description',
      initScore: 'InitScore',
      name: 'Name',
      ruleIds: 'RuleIds',
      ruleList: 'RuleList',
      schemeCheckTypeList: 'SchemeCheckTypeList',
      schemeId: 'SchemeId',
      schemeTemplateId: 'SchemeTemplateId',
      status: 'Status',
      templateType: 'TemplateType',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUserName: 'UpdateUserName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserName: 'string',
      dataType: 'number',
      description: 'string',
      initScore: 'string',
      name: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      ruleList: { 'type': 'array', 'itemType': RulesInfo },
      schemeCheckTypeList: { 'type': 'array', 'itemType': GetQualityCheckSchemeResponseBodyDataSchemeCheckTypeList },
      schemeId: 'number',
      schemeTemplateId: 'number',
      status: 'number',
      templateType: 'number',
      type: 'number',
      updateTime: 'string',
      updateUserName: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    if(Array.isArray(this.schemeCheckTypeList)) {
      $dara.Model.validateArray(this.schemeCheckTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetResultToReviewResponseBodyDataDialoguesDialogue extends $dara.Model {
  /**
   * @example
   * 72000
   */
  begin?: number;
  /**
   * @example
   * 2019-10-01 11:12:01
   */
  beginTime?: string;
  beginTimeMs?: number;
  /**
   * @example
   * 7
   */
  emotionValue?: number;
  /**
   * @example
   * 80000
   */
  end?: number;
  /**
   * @example
   * 00:08
   */
  hourMinSec?: string;
  identity?: string;
  role?: string;
  /**
   * @example
   * 1
   */
  silenceDuration?: number;
  /**
   * @example
   * 200
   */
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      beginTimeMs: 'BeginTimeMs',
      emotionValue: 'EmotionValue',
      end: 'End',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      beginTimeMs: 'number',
      emotionValue: 'number',
      end: 'number',
      hourMinSec: 'string',
      identity: 'string',
      role: 'string',
      silenceDuration: 'number',
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

export class GetResultToReviewResponseBodyDataDialogues extends $dara.Model {
  dialogue?: GetResultToReviewResponseBodyDataDialoguesDialogue[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataDialoguesDialogue },
    };
  }

  validate() {
    if(Array.isArray(this.dialogue)) {
      $dara.Model.validateArray(this.dialogue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistoriesComplainHistories extends $dara.Model {
  comments?: string;
  /**
   * @example
   * 2020-10-16T11:13Z
   */
  operationTime?: string;
  /**
   * @example
   * 5
   */
  operationType?: number;
  /**
   * @example
   * 123456
   */
  operator?: number;
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      operationTime: 'OperationTime',
      operationType: 'OperationType',
      operator: 'Operator',
      operatorName: 'OperatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      operationTime: 'string',
      operationType: 'number',
      operator: 'number',
      operatorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories extends $dara.Model {
  complainHistories?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistoriesComplainHistories[];
  static names(): { [key: string]: string } {
    return {
      complainHistories: 'ComplainHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complainHistories: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistoriesComplainHistories },
    };
  }

  validate() {
    if(Array.isArray(this.complainHistories)) {
      $dara.Model.validateArray(this.complainHistories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid extends $dara.Model {
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

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord extends $dara.Model {
  /**
   * @example
   * 2000
   */
  cid?: string;
  /**
   * @example
   * xxx
   */
  customizeCode?: string;
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 2
   */
  pid?: number;
  /**
   * @example
   * 6fa76916-3ce6-45d8-ac64-01b7f31c7295
   */
  tid?: string;
  /**
   * @example
   * 3
   */
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      customizeCode: 'CustomizeCode',
      from: 'From',
      pid: 'Pid',
      tid: 'Tid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      customizeCode: 'string',
      from: 'number',
      pid: 'number',
      tid: 'string',
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

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords extends $dara.Model {
  keyWord?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord[];
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord },
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

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase extends $dara.Model {
  /**
   * @example
   * 72000
   */
  begin?: number;
  /**
   * @example
   * 7
   */
  emotionValue?: number;
  /**
   * @example
   * 80000
   */
  end?: number;
  identity?: string;
  /**
   * @example
   * 3
   */
  pid?: number;
  role?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      identity: 'Identity',
      pid: 'Pid',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      identity: 'string',
      pid: 'number',
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

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo extends $dara.Model {
  cid?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid;
  keyWords?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords;
  phrase?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid,
      keyWords: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords,
      phrase: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase,
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

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList extends $dara.Model {
  conditionHitInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionHitInfo: 'ConditionHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfo: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo },
    };
  }

  validate() {
    if(Array.isArray(this.conditionHitInfo)) {
      $dara.Model.validateArray(this.conditionHitInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo extends $dara.Model {
  /**
   * @example
   * 013c68142fec4f0899fa6ee0exxx
   */
  hitId?: string;
  /**
   * @example
   * 1
   */
  reviewResult?: number;
  /**
   * @example
   * 2019-10-12 17:06:00
   */
  reviewTime?: string;
  /**
   * @example
   * 123
   */
  reviewer?: string;
  /**
   * @example
   * 451
   */
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      hitId: 'HitId',
      reviewResult: 'ReviewResult',
      reviewTime: 'ReviewTime',
      reviewer: 'Reviewer',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitId: 'string',
      reviewResult: 'number',
      reviewTime: 'string',
      reviewer: 'string',
      rid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  autoReview?: number;
  complainHistories?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories;
  /**
   * @example
   * true
   */
  complainable?: boolean;
  conditionHitInfoList?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList;
  reviewInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo;
  /**
   * @example
   * 451
   */
  rid?: number;
  ruleName?: string;
  /**
   * @example
   * xxx
   */
  scoreId?: number;
  /**
   * @example
   * -10
   */
  scoreNum?: number;
  /**
   * @example
   * xxx
   */
  scoreSubId?: number;
  /**
   * @example
   * xxx
   */
  scoreSubName?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      complainHistories: 'ComplainHistories',
      complainable: 'Complainable',
      conditionHitInfoList: 'ConditionHitInfoList',
      reviewInfo: 'ReviewInfo',
      rid: 'Rid',
      ruleName: 'RuleName',
      scoreId: 'ScoreId',
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      complainHistories: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories,
      complainable: 'boolean',
      conditionHitInfoList: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList,
      reviewInfo: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo,
      rid: 'number',
      ruleName: 'string',
      scoreId: 'number',
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
    };
  }

  validate() {
    if(this.complainHistories && typeof (this.complainHistories as any).validate === 'function') {
      (this.complainHistories as any).validate();
    }
    if(this.conditionHitInfoList && typeof (this.conditionHitInfoList as any).validate === 'function') {
      (this.conditionHitInfoList as any).validate();
    }
    if(this.reviewInfo && typeof (this.reviewInfo as any).validate === 'function') {
      (this.reviewInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoList extends $dara.Model {
  hitRuleReviewInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo[];
  static names(): { [key: string]: string } {
    return {
      hitRuleReviewInfo: 'HitRuleReviewInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitRuleReviewInfo: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo },
    };
  }

  validate() {
    if(Array.isArray(this.hitRuleReviewInfo)) {
      $dara.Model.validateArray(this.hitRuleReviewInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistoriesComplainHistories extends $dara.Model {
  comments?: string;
  /**
   * @example
   * 2020-10-16T11:13Z
   */
  operationTime?: string;
  /**
   * @example
   * 5
   */
  operationType?: number;
  /**
   * @example
   * 123456
   */
  operator?: number;
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      operationTime: 'OperationTime',
      operationType: 'OperationType',
      operator: 'Operator',
      operatorName: 'OperatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      operationTime: 'string',
      operationType: 'number',
      operator: 'number',
      operatorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories extends $dara.Model {
  complainHistories?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistoriesComplainHistories[];
  static names(): { [key: string]: string } {
    return {
      complainHistories: 'ComplainHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complainHistories: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistoriesComplainHistories },
    };
  }

  validate() {
    if(Array.isArray(this.complainHistories)) {
      $dara.Model.validateArray(this.complainHistories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo extends $dara.Model {
  complainHistories?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories;
  /**
   * @example
   * true
   */
  complainable?: boolean;
  /**
   * @example
   * xxx
   */
  scoreId?: number;
  /**
   * @example
   * -10
   */
  scoreNum?: number;
  /**
   * @example
   * xxx
   */
  scoreSubId?: number;
  scoreSubName?: string;
  static names(): { [key: string]: string } {
    return {
      complainHistories: 'ComplainHistories',
      complainable: 'Complainable',
      scoreId: 'ScoreId',
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complainHistories: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories,
      complainable: 'boolean',
      scoreId: 'number',
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
    };
  }

  validate() {
    if(this.complainHistories && typeof (this.complainHistories as any).validate === 'function') {
      (this.complainHistories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoList extends $dara.Model {
  manualScoreInfo?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo[];
  static names(): { [key: string]: string } {
    return {
      manualScoreInfo: 'ManualScoreInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manualScoreInfo: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo },
    };
  }

  validate() {
    if(Array.isArray(this.manualScoreInfo)) {
      $dara.Model.validateArray(this.manualScoreInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRuleReviewRightRule extends $dara.Model {
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

export class GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRule extends $dara.Model {
  reviewRightRule?: GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRuleReviewRightRule[];
  static names(): { [key: string]: string } {
    return {
      reviewRightRule: 'ReviewRightRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewRightRule: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRuleReviewRightRule },
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

export class GetResultToReviewResponseBodyDataReviewHistoryListReviewHistory extends $dara.Model {
  comments?: string;
  /**
   * @example
   * 1
   */
  complainResult?: number;
  /**
   * @example
   * 90
   */
  oldScore?: number;
  operator?: number;
  operatorName?: string;
  reviewManagerType?: string;
  /**
   * @example
   * 1
   */
  reviewResult?: number;
  reviewRightRule?: GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRule;
  /**
   * @example
   * 95
   */
  score?: number;
  time?: number;
  /**
   * @example
   * 2019-10-28 15:21:00
   */
  timeStr?: string;
  /**
   * @example
   * 1
   */
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
      reviewRightRule: GetResultToReviewResponseBodyDataReviewHistoryListReviewHistoryReviewRightRule,
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

export class GetResultToReviewResponseBodyDataReviewHistoryList extends $dara.Model {
  reviewHistory?: GetResultToReviewResponseBodyDataReviewHistoryListReviewHistory[];
  static names(): { [key: string]: string } {
    return {
      reviewHistory: 'ReviewHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewHistory: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataReviewHistoryListReviewHistory },
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

export class GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdListReviewKeyIdList extends $dara.Model {
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

export class GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdList extends $dara.Model {
  reviewKeyIdList?: GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdListReviewKeyIdList;
  reviewTypeId?: number;
  static names(): { [key: string]: string } {
    return {
      reviewKeyIdList: 'ReviewKeyIdList',
      reviewTypeId: 'ReviewTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewKeyIdList: GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdListReviewKeyIdList,
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

export class GetResultToReviewResponseBodyDataReviewTypeIdList extends $dara.Model {
  reviewTypeIdList?: GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdList[];
  static names(): { [key: string]: string } {
    return {
      reviewTypeIdList: 'ReviewTypeIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewTypeIdList: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataReviewTypeIdListReviewTypeIdList },
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

export class GetResultToReviewResponseBodyData extends $dara.Model {
  /**
   * @example
   * https
   */
  audioScheme?: string;
  /**
   * @example
   * sca-ccc-test.oss-cn-beijing.aliyuncs.com/xxxxx
   */
  audioURL?: string;
  /**
   * @example
   * xxx
   */
  comments?: string;
  dialogues?: GetResultToReviewResponseBodyDataDialogues;
  /**
   * @example
   * e790e6c919d84b82b64ee*****
   */
  fileId?: string;
  /**
   * @example
   * xxx.wav
   */
  fileMergeName?: string;
  hitRuleReviewInfoList?: GetResultToReviewResponseBodyDataHitRuleReviewInfoList;
  manualScoreInfoList?: GetResultToReviewResponseBodyDataManualScoreInfoList;
  reviewHistoryList?: GetResultToReviewResponseBodyDataReviewHistoryList;
  reviewTypeIdList?: GetResultToReviewResponseBodyDataReviewTypeIdList;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 99
   */
  totalScore?: number;
  /**
   * @example
   * 6fa76916-3ce6-45d8-ac64-01b7f31***
   */
  vid?: string;
  static names(): { [key: string]: string } {
    return {
      audioScheme: 'AudioScheme',
      audioURL: 'AudioURL',
      comments: 'Comments',
      dialogues: 'Dialogues',
      fileId: 'FileId',
      fileMergeName: 'FileMergeName',
      hitRuleReviewInfoList: 'HitRuleReviewInfoList',
      manualScoreInfoList: 'ManualScoreInfoList',
      reviewHistoryList: 'ReviewHistoryList',
      reviewTypeIdList: 'ReviewTypeIdList',
      status: 'Status',
      totalScore: 'TotalScore',
      vid: 'Vid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioScheme: 'string',
      audioURL: 'string',
      comments: 'string',
      dialogues: GetResultToReviewResponseBodyDataDialogues,
      fileId: 'string',
      fileMergeName: 'string',
      hitRuleReviewInfoList: GetResultToReviewResponseBodyDataHitRuleReviewInfoList,
      manualScoreInfoList: GetResultToReviewResponseBodyDataManualScoreInfoList,
      reviewHistoryList: GetResultToReviewResponseBodyDataReviewHistoryList,
      reviewTypeIdList: GetResultToReviewResponseBodyDataReviewTypeIdList,
      status: 'number',
      totalScore: 'number',
      vid: 'string',
    };
  }

  validate() {
    if(this.dialogues && typeof (this.dialogues as any).validate === 'function') {
      (this.dialogues as any).validate();
    }
    if(this.hitRuleReviewInfoList && typeof (this.hitRuleReviewInfoList as any).validate === 'function') {
      (this.hitRuleReviewInfoList as any).validate();
    }
    if(this.manualScoreInfoList && typeof (this.manualScoreInfoList as any).validate === 'function') {
      (this.manualScoreInfoList as any).validate();
    }
    if(this.reviewHistoryList && typeof (this.reviewHistoryList as any).validate === 'function') {
      (this.reviewHistoryList as any).validate();
    }
    if(this.reviewTypeIdList && typeof (this.reviewTypeIdList as any).validate === 'function') {
      (this.reviewTypeIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList extends $dara.Model {
  businessCategoryNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      businessCategoryNameList: 'BusinessCategoryNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.businessCategoryNameList)) {
      $dara.Model.validateArray(this.businessCategoryNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataRulesRuleInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  autoReview?: number;
  businessCategoryNameList?: GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList;
  comments?: string;
  /**
   * @example
   * 123
   */
  createEmpid?: string;
  /**
   * @example
   * 2016-08-05 10:37:10
   */
  createTime?: string;
  /**
   * @example
   * 2016-08-05 10:37:10
   */
  endTime?: string;
  /**
   * @example
   * 0
   */
  isDelete?: number;
  /**
   * @example
   * 1
   */
  isOnline?: number;
  /**
   * @example
   * 123
   */
  lastUpdateEmpid?: string;
  /**
   * @example
   * 2019-10-28 14:23:28
   */
  lastUpdateTime?: string;
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * 4
   */
  rid?: string;
  /**
   * @example
   * a && b
   */
  ruleLambda?: string;
  /**
   * @example
   * 1
   */
  ruleScoreType?: number;
  /**
   * @example
   * 123
   */
  scoreId?: number;
  scoreName?: string;
  /**
   * @example
   * 22
   */
  scoreSubId?: number;
  scoreSubName?: string;
  /**
   * @example
   * 2016-08-05 10:37:10
   */
  startTime?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 1
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      businessCategoryNameList: 'BusinessCategoryNameList',
      comments: 'Comments',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      isDelete: 'IsDelete',
      isOnline: 'IsOnline',
      lastUpdateEmpid: 'LastUpdateEmpid',
      lastUpdateTime: 'LastUpdateTime',
      name: 'Name',
      rid: 'Rid',
      ruleLambda: 'RuleLambda',
      ruleScoreType: 'RuleScoreType',
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      businessCategoryNameList: GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList,
      comments: 'string',
      createEmpid: 'string',
      createTime: 'string',
      endTime: 'string',
      isDelete: 'number',
      isOnline: 'number',
      lastUpdateEmpid: 'string',
      lastUpdateTime: 'string',
      name: 'string',
      rid: 'string',
      ruleLambda: 'string',
      ruleScoreType: 'number',
      scoreId: 'number',
      scoreName: 'string',
      scoreSubId: 'number',
      scoreSubName: 'string',
      startTime: 'string',
      status: 'number',
      type: 'number',
      weight: 'string',
    };
  }

  validate() {
    if(this.businessCategoryNameList && typeof (this.businessCategoryNameList as any).validate === 'function') {
      (this.businessCategoryNameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataRules extends $dara.Model {
  ruleInfo?: GetRuleResponseBodyDataRulesRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleInfo: 'RuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleInfo: { 'type': 'array', 'itemType': GetRuleResponseBodyDataRulesRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleInfo)) {
      $dara.Model.validateArray(this.ruleInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyData extends $dara.Model {
  rules?: GetRuleResponseBodyDataRules;
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: GetRuleResponseBodyDataRules,
    };
  }

  validate() {
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponseBodyDataRuleCountInfo extends $dara.Model {
  /**
   * @example
   * false
   */
  select?: boolean;
  /**
   * @example
   * 22
   */
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
      type: 'number',
      typeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponseBodyData extends $dara.Model {
  ruleCountInfo?: GetRuleCategoryResponseBodyDataRuleCountInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleCountInfo: 'RuleCountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCountInfo: { 'type': 'array', 'itemType': GetRuleCategoryResponseBodyDataRuleCountInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleCountInfo)) {
      $dara.Model.validateArray(this.ruleCountInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor extends $dara.Model {
  /**
   * @example
   * 7
   */
  anchorCid?: string;
  /**
   * @example
   * 1
   */
  hitTime?: number;
  /**
   * @example
   * AFTER
   */
  location?: string;
  static names(): { [key: string]: string } {
    return {
      anchorCid: 'AnchorCid',
      hitTime: 'HitTime',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorCid: 'string',
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

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeRange extends $dara.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 10
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

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange extends $dara.Model {
  /**
   * @example
   * true
   */
  absolute?: boolean;
  anchor?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor;
  range?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeRange;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      absolute: 'Absolute',
      anchor: 'Anchor',
      range: 'Range',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absolute: 'boolean',
      anchor: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor,
      range: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeRange,
      role: 'string',
    };
  }

  validate() {
    if(this.anchor && typeof (this.anchor as any).validate === 'function') {
      (this.anchor as any).validate();
    }
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamAntModelInfo extends $dara.Model {
  antModelInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      antModelInfo: 'AntModelInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antModelInfo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.antModelInfo)) {
      $dara.Model.validateArray(this.antModelInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamExcludes extends $dara.Model {
  excludes?: string[];
  static names(): { [key: string]: string } {
    return {
      excludes: 'Excludes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.excludes)) {
      $dara.Model.validateArray(this.excludes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamOperKeyWords extends $dara.Model {
  operKeyWord?: string[];
  static names(): { [key: string]: string } {
    return {
      operKeyWord: 'OperKeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operKeyWord: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.operKeyWord)) {
      $dara.Model.validateArray(this.operKeyWord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamPvalues extends $dara.Model {
  pvalues?: string[];
  static names(): { [key: string]: string } {
    return {
      pvalues: 'Pvalues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvalues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.pvalues)) {
      $dara.Model.validateArray(this.pvalues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamReferences extends $dara.Model {
  reference?: string[];
  static names(): { [key: string]: string } {
    return {
      reference: 'Reference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reference: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.reference)) {
      $dara.Model.validateArray(this.reference);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamSimilarlySentences extends $dara.Model {
  similarlySentence?: string[];
  static names(): { [key: string]: string } {
    return {
      similarlySentence: 'SimilarlySentence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      similarlySentence: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.similarlySentence)) {
      $dara.Model.validateArray(this.similarlySentence);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam extends $dara.Model {
  antModelInfo?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamAntModelInfo;
  /**
   * @example
   * true
   */
  average?: boolean;
  /**
   * @example
   * DIALOGUE
   */
  beginType?: string;
  /**
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @example
   * gt
   */
  compareOperator?: string;
  /**
   * @example
   * true
   */
  contextChatMatch?: boolean;
  /**
   * @example
   * 1000
   */
  delayTime?: number;
  /**
   * @example
   * true
   */
  differentRole?: boolean;
  excludes?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamExcludes;
  /**
   * @example
   * 3
   */
  from?: number;
  /**
   * @example
   * true
   */
  fromEnd?: boolean;
  /**
   * @example
   * 1
   */
  hitTime?: number;
  /**
   * @example
   * true
   */
  inSentence?: boolean;
  /**
   * @example
   * 5000
   */
  interval?: number;
  /**
   * @example
   * true
   */
  keywordExtension?: boolean;
  /**
   * @example
   * 3
   */
  keywordMatchSize?: number;
  /**
   * @example
   * 8
   */
  maxEmotionChangeValue?: number;
  /**
   * @example
   * 4
   */
  minWordSize?: number;
  notRegex?: string;
  operKeyWords?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamOperKeyWords;
  /**
   * @example
   * xxx
   */
  phrase?: string;
  pvalues?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamPvalues;
  references?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamReferences;
  regex?: string;
  /**
   * @example
   * 80
   */
  score?: number;
  /**
   * @example
   * 90
   */
  similarityThreshold?: number;
  similarlySentences?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamSimilarlySentences;
  /**
   * @example
   * 1
   */
  target?: number;
  targetRole?: string;
  /**
   * @example
   * 4
   */
  threshold?: number;
  /**
   * @example
   * 280
   */
  velocityInMint?: number;
  static names(): { [key: string]: string } {
    return {
      antModelInfo: 'AntModelInfo',
      average: 'Average',
      beginType: 'BeginType',
      checkType: 'CheckType',
      compareOperator: 'CompareOperator',
      contextChatMatch: 'ContextChatMatch',
      delayTime: 'DelayTime',
      differentRole: 'DifferentRole',
      excludes: 'Excludes',
      from: 'From',
      fromEnd: 'FromEnd',
      hitTime: 'HitTime',
      inSentence: 'InSentence',
      interval: 'Interval',
      keywordExtension: 'KeywordExtension',
      keywordMatchSize: 'KeywordMatchSize',
      maxEmotionChangeValue: 'MaxEmotionChangeValue',
      minWordSize: 'MinWordSize',
      notRegex: 'NotRegex',
      operKeyWords: 'OperKeyWords',
      phrase: 'Phrase',
      pvalues: 'Pvalues',
      references: 'References',
      regex: 'Regex',
      score: 'Score',
      similarityThreshold: 'Similarity_threshold',
      similarlySentences: 'SimilarlySentences',
      target: 'Target',
      targetRole: 'TargetRole',
      threshold: 'Threshold',
      velocityInMint: 'VelocityInMint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antModelInfo: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamAntModelInfo,
      average: 'boolean',
      beginType: 'string',
      checkType: 'number',
      compareOperator: 'string',
      contextChatMatch: 'boolean',
      delayTime: 'number',
      differentRole: 'boolean',
      excludes: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamExcludes,
      from: 'number',
      fromEnd: 'boolean',
      hitTime: 'number',
      inSentence: 'boolean',
      interval: 'number',
      keywordExtension: 'boolean',
      keywordMatchSize: 'number',
      maxEmotionChangeValue: 'number',
      minWordSize: 'number',
      notRegex: 'string',
      operKeyWords: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamOperKeyWords,
      phrase: 'string',
      pvalues: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamPvalues,
      references: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamReferences,
      regex: 'string',
      score: 'number',
      similarityThreshold: 'number',
      similarlySentences: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamSimilarlySentences,
      target: 'number',
      targetRole: 'string',
      threshold: 'number',
      velocityInMint: 'number',
    };
  }

  validate() {
    if(this.antModelInfo && typeof (this.antModelInfo as any).validate === 'function') {
      (this.antModelInfo as any).validate();
    }
    if(this.excludes && typeof (this.excludes as any).validate === 'function') {
      (this.excludes as any).validate();
    }
    if(this.operKeyWords && typeof (this.operKeyWords as any).validate === 'function') {
      (this.operKeyWords as any).validate();
    }
    if(this.pvalues && typeof (this.pvalues as any).validate === 'function') {
      (this.pvalues as any).validate();
    }
    if(this.references && typeof (this.references as any).validate === 'function') {
      (this.references as any).validate();
    }
    if(this.similarlySentences && typeof (this.similarlySentences as any).validate === 'function') {
      (this.similarlySentences as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo extends $dara.Model {
  /**
   * @example
   * 8
   */
  oid?: string;
  /**
   * @example
   * operator demo
   */
  operName?: string;
  param?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam;
  /**
   * @example
   * REGULAR_EXPRESSION
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      oid: 'Oid',
      operName: 'OperName',
      param: 'Param',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oid: 'string',
      operName: 'string',
      param: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam,
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

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators extends $dara.Model {
  operatorBasicInfo?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      operatorBasicInfo: 'OperatorBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.operatorBasicInfo)) {
      $dara.Model.validateArray(this.operatorBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfo extends $dara.Model {
  checkRange?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange;
  /**
   * @example
   * 7
   */
  conditionInfoCid?: string;
  /**
   * @example
   * 7
   */
  operLambda?: string;
  operators?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators;
  static names(): { [key: string]: string } {
    return {
      checkRange: 'CheckRange',
      conditionInfoCid: 'ConditionInfoCid',
      operLambda: 'OperLambda',
      operators: 'Operators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRange: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange,
      conditionInfoCid: 'string',
      operLambda: 'string',
      operators: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators,
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

export class GetRuleDetailResponseBodyDataConditions extends $dara.Model {
  conditionBasicInfo?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionBasicInfo: 'ConditionBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataConditionsConditionBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.conditionBasicInfo)) {
      $dara.Model.validateArray(this.conditionBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategoriesBusinessCategoryBasicInfo extends $dara.Model {
  /**
   * @example
   * 264971810
   */
  bid?: number;
  businessName?: string;
  /**
   * @example
   * 1
   */
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      businessName: 'BusinessName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      businessName: 'string',
      serviceType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories extends $dara.Model {
  businessCategoryBasicInfo?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategoriesBusinessCategoryBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      businessCategoryBasicInfo: 'BusinessCategoryBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategoriesBusinessCategoryBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.businessCategoryBasicInfo)) {
      $dara.Model.validateArray(this.businessCategoryBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers extends $dara.Model {
  trigger?: string[];
  static names(): { [key: string]: string } {
    return {
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trigger: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.trigger)) {
      $dara.Model.validateArray(this.trigger);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfo extends $dara.Model {
  businessCategories?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories;
  /**
   * @example
   * 4
   */
  rid?: string;
  /**
   * @example
   * 7&&!8
   */
  ruleLambda?: string;
  triggers?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers;
  static names(): { [key: string]: string } {
    return {
      businessCategories: 'BusinessCategories',
      rid: 'Rid',
      ruleLambda: 'RuleLambda',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategories: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories,
      rid: 'string',
      ruleLambda: 'string',
      triggers: GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers,
    };
  }

  validate() {
    if(this.businessCategories && typeof (this.businessCategories as any).validate === 'function') {
      (this.businessCategories as any).validate();
    }
    if(this.triggers && typeof (this.triggers as any).validate === 'function') {
      (this.triggers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRules extends $dara.Model {
  ruleBasicInfo?: GetRuleDetailResponseBodyDataRulesRuleBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleBasicInfo: 'RuleBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataRulesRuleBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleBasicInfo)) {
      $dara.Model.validateArray(this.ruleBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyData extends $dara.Model {
  conditions?: GetRuleDetailResponseBodyDataConditions;
  /**
   * @example
   * 10
   */
  count?: number;
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
  rules?: GetRuleDetailResponseBodyDataRules;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      count: 'Count',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: GetRuleDetailResponseBodyDataConditions,
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      rules: GetRuleDetailResponseBodyDataRules,
    };
  }

  validate() {
    if(this.conditions && typeof (this.conditions as any).validate === 'function') {
      (this.conditions as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRulesCountListResponseBodyData extends $dara.Model {
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRulesCountListResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam extends $dara.Model {
  /**
   * @example
   * 32
   */
  scoreNum?: number;
  /**
   * @example
   * 3422
   */
  scoreSubId?: number;
  scoreSubName?: string;
  /**
   * @example
   * 1
   */
  scoreType?: number;
  static names(): { [key: string]: string } {
    return {
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
      scoreType: 'ScoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
      scoreType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyDataScorePoScoreInfos extends $dara.Model {
  scoreParam?: GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam[];
  static names(): { [key: string]: string } {
    return {
      scoreParam: 'ScoreParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreParam: { 'type': 'array', 'itemType': GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam },
    };
  }

  validate() {
    if(Array.isArray(this.scoreParam)) {
      $dara.Model.validateArray(this.scoreParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyDataScorePo extends $dara.Model {
  /**
   * @example
   * 34
   */
  scoreId?: number;
  scoreInfos?: GetScoreInfoResponseBodyDataScorePoScoreInfos;
  scoreName?: string;
  static names(): { [key: string]: string } {
    return {
      scoreId: 'ScoreId',
      scoreInfos: 'ScoreInfos',
      scoreName: 'ScoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreId: 'number',
      scoreInfos: GetScoreInfoResponseBodyDataScorePoScoreInfos,
      scoreName: 'string',
    };
  }

  validate() {
    if(this.scoreInfos && typeof (this.scoreInfos as any).validate === 'function') {
      (this.scoreInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyData extends $dara.Model {
  scorePo?: GetScoreInfoResponseBodyDataScorePo[];
  static names(): { [key: string]: string } {
    return {
      scorePo: 'ScorePo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scorePo: { 'type': 'array', 'itemType': GetScoreInfoResponseBodyDataScorePo },
    };
  }

  validate() {
    if(Array.isArray(this.scorePo)) {
      $dara.Model.validateArray(this.scorePo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo extends $dara.Model {
  /**
   * @example
   * 12
   */
  rid?: number;
  /**
   * @example
   * test
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
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

export class GetSkillGroupConfigResponseBodyDataAllRuleList extends $dara.Model {
  ruleNameInfo?: GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleNameInfo)) {
      $dara.Model.validateArray(this.ruleNameInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo extends $dara.Model {
  /**
   * @example
   * 222
   */
  rid?: number;
  /**
   * @example
   * test
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
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

export class GetSkillGroupConfigResponseBodyDataRuleList extends $dara.Model {
  ruleNameInfo?: GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleNameInfo)) {
      $dara.Model.validateArray(this.ruleNameInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  allContentQualityCheck?: number;
  /**
   * @example
   * 223
   */
  allRids?: string;
  allRuleList?: GetSkillGroupConfigResponseBodyDataAllRuleList;
  /**
   * @example
   * 2020-12-01T15:12Z
   */
  createTime?: string;
  /**
   * @example
   * 1212
   */
  id?: number;
  /**
   * @example
   * xxx
   */
  instanceId?: string;
  /**
   * @example
   * 1321
   */
  modelId?: number;
  /**
   * @example
   * xxx
   */
  modelName?: string;
  /**
   * @example
   * xxx
   */
  name?: string;
  /**
   * @example
   * 0
   */
  qualityCheckType?: number;
  /**
   * @example
   * 2332
   */
  rid?: string;
  ruleList?: GetSkillGroupConfigResponseBodyDataRuleList;
  /**
   * @example
   * 0
   */
  skillGroupFrom?: number;
  /**
   * @example
   * 111
   */
  skillGroupId?: string;
  /**
   * @example
   * xxx
   */
  skillGroupName?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 2020-12-01T19:28Z
   */
  updateTime?: string;
  /**
   * @example
   * 123
   */
  vocabId?: number;
  /**
   * @example
   * test
   */
  vocabName?: string;
  static names(): { [key: string]: string } {
    return {
      allContentQualityCheck: 'AllContentQualityCheck',
      allRids: 'AllRids',
      allRuleList: 'AllRuleList',
      createTime: 'CreateTime',
      id: 'Id',
      instanceId: 'InstanceId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      name: 'Name',
      qualityCheckType: 'QualityCheckType',
      rid: 'Rid',
      ruleList: 'RuleList',
      skillGroupFrom: 'SkillGroupFrom',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      vocabId: 'VocabId',
      vocabName: 'VocabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allContentQualityCheck: 'number',
      allRids: 'string',
      allRuleList: GetSkillGroupConfigResponseBodyDataAllRuleList,
      createTime: 'string',
      id: 'number',
      instanceId: 'string',
      modelId: 'number',
      modelName: 'string',
      name: 'string',
      qualityCheckType: 'number',
      rid: 'string',
      ruleList: GetSkillGroupConfigResponseBodyDataRuleList,
      skillGroupFrom: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      status: 'number',
      type: 'number',
      updateTime: 'string',
      vocabId: 'number',
      vocabName: 'string',
    };
  }

  validate() {
    if(this.allRuleList && typeof (this.allRuleList as any).validate === 'function') {
      (this.allRuleList as any).validate();
    }
    if(this.ruleList && typeof (this.ruleList as any).validate === 'function') {
      (this.ruleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataAgent extends $dara.Model {
  /**
   * @example
   * 12221
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

export class GetSyncResultResponseBodyDataAsrResult extends $dara.Model {
  /**
   * @example
   * 340
   */
  begin?: number;
  /**
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @example
   * 3000
   */
  end?: number;
  role?: string;
  /**
   * @example
   * 11
   */
  silenceDuration?: number;
  /**
   * @example
   * 221
   */
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      silenceDuration: 'number',
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

export class GetSyncResultResponseBodyDataHitResultHitsKeyWords extends $dara.Model {
  /**
   * @example
   * 66666
   */
  cid?: string;
  /**
   * @example
   * 2
   */
  from?: number;
  /**
   * @example
   * 5
   */
  to?: number;
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

export class GetSyncResultResponseBodyDataHitResultHitsPhrase extends $dara.Model {
  /**
   * @example
   * 440
   */
  begin?: number;
  /**
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @example
   * 4000
   */
  end?: number;
  role?: string;
  /**
   * @example
   * 1
   */
  silenceDuration?: number;
  /**
   * @example
   * 234
   */
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      silenceDuration: 'number',
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

export class GetSyncResultResponseBodyDataHitResultHits extends $dara.Model {
  cid?: string[];
  keyWords?: GetSyncResultResponseBodyDataHitResultHitsKeyWords[];
  phrase?: GetSyncResultResponseBodyDataHitResultHitsPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
      keyWords: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResultHitsKeyWords },
      phrase: GetSyncResultResponseBodyDataHitResultHitsPhrase,
    };
  }

  validate() {
    if(Array.isArray(this.cid)) {
      $dara.Model.validateArray(this.cid);
    }
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
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

export class GetSyncResultResponseBodyDataHitResult extends $dara.Model {
  hits?: GetSyncResultResponseBodyDataHitResultHits[];
  name?: string;
  /**
   * @example
   * 1
   */
  reviewResult?: number;
  /**
   * @example
   * 1211
   */
  rid?: string;
  /**
   * @example
   * 2
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hits: 'Hits',
      name: 'Name',
      reviewResult: 'ReviewResult',
      rid: 'Rid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hits: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResultHits },
      name: 'string',
      reviewResult: 'number',
      rid: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hits)) {
      $dara.Model.validateArray(this.hits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataRecording extends $dara.Model {
  business?: string;
  /**
   * @example
   * xxx
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
   * 1888888***
   */
  callee?: string;
  /**
   * @example
   * 0108888****
   */
  caller?: string;
  /**
   * @example
   * xxx
   */
  dataSetName?: string;
  /**
   * @example
   * 232
   */
  duration?: number;
  /**
   * @example
   * 120
   */
  durationAudio?: number;
  /**
   * @example
   * xxxx
   */
  id?: string;
  /**
   * @example
   * 123123.wav
   */
  name?: string;
  /**
   * @example
   * xxxx
   */
  primaryId?: string;
  /**
   * @example
   * xxx
   */
  remark1?: string;
  /**
   * @example
   * xxx
   */
  remark2?: string;
  /**
   * @example
   * xxx
   */
  remark3?: string;
  /**
   * @example
   * http://aliyun.com/xxx.wav
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
      dataSetName: 'DataSetName',
      duration: 'Duration',
      durationAudio: 'DurationAudio',
      id: 'Id',
      name: 'Name',
      primaryId: 'PrimaryId',
      remark1: 'Remark1',
      remark2: 'Remark2',
      remark3: 'Remark3',
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
      dataSetName: 'string',
      duration: 'number',
      durationAudio: 'number',
      id: 'string',
      name: 'string',
      primaryId: 'string',
      remark1: 'string',
      remark2: 'string',
      remark3: 'string',
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

export class GetSyncResultResponseBodyData extends $dara.Model {
  agent?: GetSyncResultResponseBodyDataAgent;
  asrResult?: GetSyncResultResponseBodyDataAsrResult[];
  /**
   * @example
   * xxx
   */
  comments?: string;
  /**
   * @example
   * 2019-07-24T19:31Z
   */
  createTime?: string;
  /**
   * @example
   * xxxx
   */
  errorMessage?: string;
  hitResult?: GetSyncResultResponseBodyDataHitResult[];
  recording?: GetSyncResultResponseBodyDataRecording;
  resolver?: string;
  /**
   * @example
   * 3
   */
  reviewResult?: number;
  /**
   * @example
   * 1
   */
  reviewStatus?: number;
  reviewer?: string;
  /**
   * @example
   * 100
   */
  score?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 20201231de3d34ec-40fa-4a55-8d27-76ea*****
   */
  taskId?: string;
  /**
   * @example
   * xxx
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      asrResult: 'AsrResult',
      comments: 'Comments',
      createTime: 'CreateTime',
      errorMessage: 'ErrorMessage',
      hitResult: 'HitResult',
      recording: 'Recording',
      resolver: 'Resolver',
      reviewResult: 'ReviewResult',
      reviewStatus: 'ReviewStatus',
      reviewer: 'Reviewer',
      score: 'Score',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: GetSyncResultResponseBodyDataAgent,
      asrResult: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataAsrResult },
      comments: 'string',
      createTime: 'string',
      errorMessage: 'string',
      hitResult: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResult },
      recording: GetSyncResultResponseBodyDataRecording,
      resolver: 'string',
      reviewResult: 'number',
      reviewStatus: 'number',
      reviewer: 'string',
      score: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(this.agent && typeof (this.agent as any).validate === 'function') {
      (this.agent as any).validate();
    }
    if(Array.isArray(this.asrResult)) {
      $dara.Model.validateArray(this.asrResult);
    }
    if(Array.isArray(this.hitResult)) {
      $dara.Model.validateArray(this.hitResult);
    }
    if(this.recording && typeof (this.recording as any).validate === 'function') {
      (this.recording as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyListRange extends $dara.Model {
  rangeNum?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      rangeNum: 'RangeNum',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rangeNum: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList extends $dara.Model {
  code?: string;
  duration?: number;
  durationExpression?: number;
  hitNumber?: number;
  hitNumberExpression?: number;
  hitRuleList?: string;
  hitType?: number;
  id?: number;
  range?: GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyListRange;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      duration: 'Duration',
      durationExpression: 'DurationExpression',
      hitNumber: 'HitNumber',
      hitNumberExpression: 'HitNumberExpression',
      hitRuleList: 'HitRuleList',
      hitType: 'HitType',
      id: 'Id',
      range: 'Range',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      duration: 'number',
      durationExpression: 'number',
      hitNumber: 'number',
      hitNumberExpression: 'number',
      hitRuleList: 'string',
      hitType: 'number',
      id: 'number',
      range: GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyListRange,
      status: 'number',
    };
  }

  validate() {
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBodyDataWarningStrategyList extends $dara.Model {
  warningStrategyList?: GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList[];
  static names(): { [key: string]: string } {
    return {
      warningStrategyList: 'warningStrategyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningStrategyList: { 'type': 'array', 'itemType': GetWarningStrategyConfigResponseBodyDataWarningStrategyListWarningStrategyList },
    };
  }

  validate() {
    if(Array.isArray(this.warningStrategyList)) {
      $dara.Model.validateArray(this.warningStrategyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBodyData extends $dara.Model {
  id?: number;
  intervalTime?: number;
  lambda?: string;
  level?: number;
  maxNumber?: number;
  name?: string;
  warningStrategyList?: GetWarningStrategyConfigResponseBodyDataWarningStrategyList;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      intervalTime: 'IntervalTime',
      lambda: 'Lambda',
      level: 'Level',
      maxNumber: 'MaxNumber',
      name: 'Name',
      warningStrategyList: 'WarningStrategyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      intervalTime: 'number',
      lambda: 'string',
      level: 'number',
      maxNumber: 'number',
      name: 'string',
      warningStrategyList: GetWarningStrategyConfigResponseBodyDataWarningStrategyList,
    };
  }

  validate() {
    if(this.warningStrategyList && typeof (this.warningStrategyList as any).validate === 'function') {
      (this.warningStrategyList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponseBodyDataAsrVocab extends $dara.Model {
  asrVersion?: number;
  /**
   * @example
   * 2019-04-15T14:57Z
   */
  createTime?: string;
  /**
   * @example
   * 18
   */
  id?: string;
  modelCustomizationId?: string;
  name?: string;
  /**
   * @example
   * 2019-04-15T14:57Z
   */
  updateTime?: string;
  /**
   * @example
   * a01daaaxxxxxxxxx
   */
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      asrVersion: 'AsrVersion',
      createTime: 'CreateTime',
      id: 'Id',
      modelCustomizationId: 'ModelCustomizationId',
      name: 'Name',
      updateTime: 'UpdateTime',
      vocabularyId: 'VocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrVersion: 'number',
      createTime: 'string',
      id: 'string',
      modelCustomizationId: 'string',
      name: 'string',
      updateTime: 'string',
      vocabularyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponseBodyData extends $dara.Model {
  asrVocab?: ListAsrVocabResponseBodyDataAsrVocab[];
  static names(): { [key: string]: string } {
    return {
      asrVocab: 'AsrVocab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrVocab: { 'type': 'array', 'itemType': ListAsrVocabResponseBodyDataAsrVocab },
    };
  }

  validate() {
    if(Array.isArray(this.asrVocab)) {
      $dara.Model.validateArray(this.asrVocab);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * 1
   */
  autoTranscoding?: number;
  /**
   * @example
   * 0
   */
  channelId0?: number;
  /**
   * @example
   * 1
   */
  channelId1?: number;
  /**
   * @example
   * 1
   */
  channelType?: number;
  /**
   * @example
   * 2019-06-20T17:33Z
   */
  createTime?: string;
  /**
   * @example
   * 0
   */
  createType?: number;
  /**
   * @example
   * 3
   */
  dataSetType?: number;
  /**
   * @example
   * 0
   */
  isDelete?: number;
  /**
   * @example
   * filesFromLocal/ef7ff45c147a4a5e882c925f9a75ac43
   */
  roleConfigProp?: string;
  /**
   * @example
   * 1
   */
  roleConfigStatus?: number;
  /**
   * @example
   * xx
   */
  roleConfigTask?: string;
  /**
   * @example
   * “”
   */
  setBucketName?: string;
  /**
   * @example
   * “”
   */
  setDomain?: string;
  /**
   * @example
   * “”
   */
  setFolderName?: string;
  /**
   * @example
   * 1
   */
  setId?: number;
  setName?: string;
  /**
   * @example
   * 1
   */
  setNumber?: number;
  /**
   * @example
   * “”
   */
  setRoleArn?: string;
  /**
   * @example
   * 1
   */
  setType?: number;
  /**
   * @example
   * 11
   */
  sourceDataType?: number;
  /**
   * @example
   * xx
   */
  subDir?: string;
  /**
   * @example
   * 2022-05-10T10:34Z
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      autoTranscoding: 'AutoTranscoding',
      channelId0: 'ChannelId0',
      channelId1: 'ChannelId1',
      channelType: 'ChannelType',
      createTime: 'CreateTime',
      createType: 'CreateType',
      dataSetType: 'DataSetType',
      isDelete: 'IsDelete',
      roleConfigProp: 'RoleConfigProp',
      roleConfigStatus: 'RoleConfigStatus',
      roleConfigTask: 'RoleConfigTask',
      setBucketName: 'SetBucketName',
      setDomain: 'SetDomain',
      setFolderName: 'SetFolderName',
      setId: 'SetId',
      setName: 'SetName',
      setNumber: 'SetNumber',
      setRoleArn: 'SetRoleArn',
      setType: 'SetType',
      sourceDataType: 'SourceDataType',
      subDir: 'SubDir',
      updateTime: 'UpdateTime',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoTranscoding: 'number',
      channelId0: 'number',
      channelId1: 'number',
      channelType: 'number',
      createTime: 'string',
      createType: 'number',
      dataSetType: 'number',
      isDelete: 'number',
      roleConfigProp: 'string',
      roleConfigStatus: 'number',
      roleConfigTask: 'string',
      setBucketName: 'string',
      setDomain: 'string',
      setFolderName: 'string',
      setId: 'number',
      setName: 'string',
      setNumber: 'number',
      setRoleArn: 'string',
      setType: 'number',
      sourceDataType: 'number',
      subDir: 'string',
      updateTime: 'string',
      userGroup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBodyData extends $dara.Model {
  data?: ListDataSetResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataSetResponseBodyDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision extends $dara.Model {
  /**
   * @example
   * 2020-03-10 20:26:29
   */
  createTime?: string;
  /**
   * @example
   * 2321
   */
  modelId?: number;
  modelName?: string;
  /**
   * @example
   * 0.98
   */
  precision?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 7C1DEF5F-2C18-4D36-99C6-8C276F781796
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modelId: 'ModelId',
      modelName: 'ModelName',
      precision: 'Precision',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modelId: 'number',
      modelName: 'string',
      precision: 'number',
      status: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions extends $dara.Model {
  precision?: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision[];
  static names(): { [key: string]: string } {
    return {
      precision: 'Precision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precision: { 'type': 'array', 'itemType': ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision },
    };
  }

  validate() {
    if(Array.isArray(this.precision)) {
      $dara.Model.validateArray(this.precision);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBodyDataPrecisionTask extends $dara.Model {
  /**
   * @example
   * 2020-03-10 20:26:29
   */
  createTime?: string;
  /**
   * @example
   * 1212
   */
  dataSetId?: number;
  dataSetName?: string;
  /**
   * @example
   * 331311
   */
  duration?: number;
  /**
   * @example
   * 32
   */
  incorrectWords?: number;
  name?: string;
  precisions?: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions;
  /**
   * @example
   * 3
   */
  source?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 7C1DEF5F-2C18-4D36-99C6-8C276F781796
   */
  taskId?: string;
  /**
   * @example
   * 21
   */
  totalCount?: number;
  /**
   * @example
   * 2020-03-10 20:26:29
   */
  updateTime?: string;
  /**
   * @example
   * 3
   */
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSetId: 'DataSetId',
      dataSetName: 'DataSetName',
      duration: 'Duration',
      incorrectWords: 'IncorrectWords',
      name: 'Name',
      precisions: 'Precisions',
      source: 'Source',
      status: 'Status',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
      updateTime: 'UpdateTime',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSetId: 'number',
      dataSetName: 'string',
      duration: 'number',
      incorrectWords: 'number',
      name: 'string',
      precisions: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions,
      source: 'number',
      status: 'number',
      taskId: 'string',
      totalCount: 'number',
      updateTime: 'string',
      verifiedCount: 'number',
    };
  }

  validate() {
    if(this.precisions && typeof (this.precisions as any).validate === 'function') {
      (this.precisions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBodyData extends $dara.Model {
  precisionTask?: ListPrecisionTaskResponseBodyDataPrecisionTask[];
  static names(): { [key: string]: string } {
    return {
      precisionTask: 'PrecisionTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precisionTask: { 'type': 'array', 'itemType': ListPrecisionTaskResponseBodyDataPrecisionTask },
    };
  }

  validate() {
    if(Array.isArray(this.precisionTask)) {
      $dara.Model.validateArray(this.precisionTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBodyDataRuleListRules extends $dara.Model {
  /**
   * @example
   * 1
   */
  checkType?: number;
  name?: string;
  /**
   * @example
   * 12
   */
  rid?: number;
  /**
   * @example
   * 1
   */
  ruleScoreType?: number;
  /**
   * @example
   * 2
   */
  scoreNum?: number;
  /**
   * @example
   * 0
   */
  scoreNumType?: number;
  /**
   * @example
   * 1
   */
  scoreType?: number;
  /**
   * @example
   * 10
   */
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      name: 'Name',
      rid: 'Rid',
      ruleScoreType: 'RuleScoreType',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreType: 'ScoreType',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      name: 'string',
      rid: 'number',
      ruleScoreType: 'number',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreType: 'number',
      targetType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBodyDataRuleList extends $dara.Model {
  rules?: ListQualityCheckSchemeResponseBodyDataRuleListRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyDataRuleListRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList extends $dara.Model {
  checkName?: string;
  /**
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @example
   * 1
   */
  enable?: number;
  /**
   * @example
   * 20
   */
  score?: number;
  /**
   * @example
   * 10
   */
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkType: 'CheckType',
      enable: 'Enable',
      score: 'Score',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkType: 'number',
      enable: 'number',
      score: 'number',
      targetType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2022-05-10T09:34Z
   */
  createTime?: string;
  createUserName?: string;
  /**
   * @example
   * 1
   */
  dataType?: number;
  description?: string;
  /**
   * @example
   * test
   */
  name?: string;
  ruleList?: ListQualityCheckSchemeResponseBodyDataRuleList[];
  schemeCheckTypeList?: ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList[];
  /**
   * @example
   * 112**
   */
  schemeId?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  templateType?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 2022-05-10T10:34Z
   */
  updateTime?: string;
  updateUserName?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      dataType: 'DataType',
      description: 'Description',
      name: 'Name',
      ruleList: 'RuleList',
      schemeCheckTypeList: 'SchemeCheckTypeList',
      schemeId: 'SchemeId',
      status: 'Status',
      templateType: 'TemplateType',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUserName: 'UpdateUserName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserName: 'string',
      dataType: 'number',
      description: 'string',
      name: 'string',
      ruleList: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyDataRuleList },
      schemeCheckTypeList: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList },
      schemeId: 'number',
      status: 'number',
      templateType: 'number',
      type: 'number',
      updateTime: 'string',
      updateUserName: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    if(Array.isArray(this.schemeCheckTypeList)) {
      $dara.Model.validateArray(this.schemeCheckTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyData extends $dara.Model {
  businessCategoryNameList?: string[];
  comments?: string;
  /**
   * @example
   * 2020-04-20T20:10Z
   */
  createTime?: string;
  name?: string;
  /**
   * @example
   * 1234567
   */
  rid?: number;
  /**
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      businessCategoryNameList: 'BusinessCategoryNameList',
      comments: 'Comments',
      createTime: 'CreateTime',
      name: 'Name',
      rid: 'Rid',
      ruleType: 'RuleType',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
      comments: 'string',
      createTime: 'string',
      name: 'string',
      rid: 'number',
      ruleType: 'number',
      type: 'number',
      typeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.businessCategoryNameList)) {
      $dara.Model.validateArray(this.businessCategoryNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContestListObject extends $dara.Model {
  listObject?: any[];
  static names(): { [key: string]: string } {
    return {
      listObject: 'ListObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listObject: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.listObject)) {
      $dara.Model.validateArray(this.listObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContest extends $dara.Model {
  /**
   * @example
   * 3
   */
  dataType?: number;
  listObject?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContestListObject;
  /**
   * @example
   * callStartTime
   */
  name?: string;
  /**
   * @example
   * 4
   */
  symbol?: number;
  /**
   * @example
   * {\\"start\\":\\"2022-09-01 00:00:00\\",\\"end\\":\\"2022-09-30 00:00:00\\"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      listObject: 'ListObject',
      name: 'Name',
      symbol: 'Symbol',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'number',
      listObject: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContestListObject,
      name: 'string',
      symbol: 'number',
      value: 'string',
    };
  }

  validate() {
    if(this.listObject && typeof (this.listObject as any).validate === 'function') {
      (this.listObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContests extends $dara.Model {
  assignConfigContest?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContest[];
  static names(): { [key: string]: string } {
    return {
      assignConfigContest: 'AssignConfigContest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfigContest: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContestsAssignConfigContest },
    };
  }

  validate() {
    if(Array.isArray(this.assignConfigContest)) {
      $dara.Model.validateArray(this.assignConfigContest);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig extends $dara.Model {
  assignConfigContests?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContests;
  static names(): { [key: string]: string } {
    return {
      assignConfigContests: 'AssignConfigContests',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfigContests: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfigAssignConfigContests,
    };
  }

  validate() {
    if(this.assignConfigContests && typeof (this.assignConfigContests as any).validate === 'function') {
      (this.assignConfigContests as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs extends $dara.Model {
  assignConfig?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig[];
  static names(): { [key: string]: string } {
    return {
      assignConfig: 'AssignConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfig: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigsAssignConfig },
    };
  }

  validate() {
    if(Array.isArray(this.assignConfig)) {
      $dara.Model.validateArray(this.assignConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataDataConfig extends $dara.Model {
  assignConfigs?: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs;
  /**
   * @example
   * []
   */
  dataSets?: string;
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * {}
   */
  resultParam?: string;
  static names(): { [key: string]: string } {
    return {
      assignConfigs: 'AssignConfigs',
      dataSets: 'DataSets',
      index: 'Index',
      resultParam: 'ResultParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignConfigs: ListSchemeTaskConfigResponseBodyDataDataDataConfigAssignConfigs,
      dataSets: 'string',
      index: 'number',
      resultParam: 'string',
    };
  }

  validate() {
    if(this.assignConfigs && typeof (this.assignConfigs as any).validate === 'function') {
      (this.assignConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataSchemeIdList extends $dara.Model {
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

export class ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList extends $dara.Model {
  name?: string;
  /**
   * @example
   * 158
   */
  schemeId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schemeId: 'SchemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schemeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataDataSchemeList extends $dara.Model {
  schemeList?: ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList[];
  static names(): { [key: string]: string } {
    return {
      schemeList: 'SchemeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeList: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList },
    };
  }

  validate() {
    if(Array.isArray(this.schemeList)) {
      $dara.Model.validateArray(this.schemeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * 2
   */
  asrTaskPriority?: number;
  asrVersion?: number;
  /**
   * @example
   * 0
   */
  assignType?: number;
  /**
   * @example
   * 1650418039000
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: number;
  dataConfig?: ListSchemeTaskConfigResponseBodyDataDataDataConfig;
  /**
   * @example
   * 100
   */
  finishRate?: number;
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @example
   * 0
   */
  manualReview?: number;
  /**
   * @example
   * cdae396590b*****ec40f3476e274fc
   */
  modeCustomizationId?: string;
  modelName?: string;
  name?: string;
  /**
   * @example
   * 0
   */
  numberExecuting?: number;
  /**
   * @example
   * 0
   */
  numberFail?: number;
  /**
   * @example
   * 1000
   */
  numberSuccess?: number;
  /**
   * @example
   * 1000
   */
  numberSum?: number;
  schemeIdList?: ListSchemeTaskConfigResponseBodyDataDataSchemeIdList;
  schemeList?: ListSchemeTaskConfigResponseBodyDataDataSchemeList;
  /**
   * @example
   * 123
   */
  schemeTaskConfigId?: number;
  /**
   * @example
   * 2
   */
  sourceDataType?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * 1650418039000
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  updateUser?: number;
  /**
   * @example
   * 1
   */
  userGroup?: string;
  /**
   * @example
   * 9f90b3efa2****0a49acec226eafc17
   */
  vocabId?: string;
  vocabName?: string;
  static names(): { [key: string]: string } {
    return {
      asrTaskPriority: 'AsrTaskPriority',
      asrVersion: 'AsrVersion',
      assignType: 'AssignType',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dataConfig: 'DataConfig',
      finishRate: 'FinishRate',
      id: 'Id',
      manualReview: 'ManualReview',
      modeCustomizationId: 'ModeCustomizationId',
      modelName: 'ModelName',
      name: 'Name',
      numberExecuting: 'NumberExecuting',
      numberFail: 'NumberFail',
      numberSuccess: 'NumberSuccess',
      numberSum: 'NumberSum',
      schemeIdList: 'SchemeIdList',
      schemeList: 'SchemeList',
      schemeTaskConfigId: 'SchemeTaskConfigId',
      sourceDataType: 'SourceDataType',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      userGroup: 'UserGroup',
      vocabId: 'VocabId',
      vocabName: 'VocabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrTaskPriority: 'number',
      asrVersion: 'number',
      assignType: 'number',
      createTime: 'string',
      createUser: 'number',
      dataConfig: ListSchemeTaskConfigResponseBodyDataDataDataConfig,
      finishRate: 'number',
      id: 'number',
      manualReview: 'number',
      modeCustomizationId: 'string',
      modelName: 'string',
      name: 'string',
      numberExecuting: 'number',
      numberFail: 'number',
      numberSuccess: 'number',
      numberSum: 'number',
      schemeIdList: ListSchemeTaskConfigResponseBodyDataDataSchemeIdList,
      schemeList: ListSchemeTaskConfigResponseBodyDataDataSchemeList,
      schemeTaskConfigId: 'number',
      sourceDataType: 'number',
      status: 'number',
      type: 'number',
      updateTime: 'string',
      updateUser: 'number',
      userGroup: 'string',
      vocabId: 'string',
      vocabName: 'string',
    };
  }

  validate() {
    if(this.dataConfig && typeof (this.dataConfig as any).validate === 'function') {
      (this.dataConfig as any).validate();
    }
    if(this.schemeIdList && typeof (this.schemeIdList as any).validate === 'function') {
      (this.schemeIdList as any).validate();
    }
    if(this.schemeList && typeof (this.schemeList as any).validate === 'function') {
      (this.schemeList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyData extends $dara.Model {
  data?: ListSchemeTaskConfigResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSchemeTaskConfigResponseBodyDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCallerList extends $dara.Model {
  callerList?: string[];
  static names(): { [key: string]: string } {
    return {
      callerList: 'CallerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.callerList)) {
      $dara.Model.validateArray(this.callerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCustomerIdList extends $dara.Model {
  customerIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerIdList: 'CustomerIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customerIdList)) {
      $dara.Model.validateArray(this.customerIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCustomerNameList extends $dara.Model {
  customerNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerNameList: 'CustomerNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customerNameList)) {
      $dara.Model.validateArray(this.customerNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCustomerServiceIdList extends $dara.Model {
  customerServiceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerServiceIdList: 'CustomerServiceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerServiceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customerServiceIdList)) {
      $dara.Model.validateArray(this.customerServiceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataCustomerServiceNameList extends $dara.Model {
  customerServiceNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      customerServiceNameList: 'CustomerServiceNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerServiceNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customerServiceNameList)) {
      $dara.Model.validateArray(this.customerServiceNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataReviewerList extends $dara.Model {
  reviewerList?: string[];
  static names(): { [key: string]: string } {
    return {
      reviewerList: 'ReviewerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewerList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.reviewerList)) {
      $dara.Model.validateArray(this.reviewerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataDataSkillGroupNameList extends $dara.Model {
  skillGroupNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      skillGroupNameList: 'SkillGroupNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupNameList)) {
      $dara.Model.validateArray(this.skillGroupNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyDataData extends $dara.Model {
  /**
   * @example
   * 1
   */
  assignStatus?: number;
  /**
   * @example
   * 2022-09-26 10:09:14
   */
  callStartTime?: string;
  callerList?: ListSessionGroupResponseBodyDataDataCallerList;
  customerIdList?: ListSessionGroupResponseBodyDataDataCustomerIdList;
  customerNameList?: ListSessionGroupResponseBodyDataDataCustomerNameList;
  customerServiceIdList?: ListSessionGroupResponseBodyDataDataCustomerServiceIdList;
  customerServiceNameList?: ListSessionGroupResponseBodyDataDataCustomerServiceNameList;
  /**
   * @example
   * 1
   */
  hitSessionCount?: number;
  /**
   * @example
   * 4498420@a_z@93EAADF1-01D3-44BD-8AC9-F57F447EFCE8_1614*****
   */
  lastDataId?: string;
  /**
   * @example
   * 1
   */
  reviewStatus?: number;
  reviewerList?: ListSessionGroupResponseBodyDataDataReviewerList;
  /**
   * @example
   * 123
   */
  schemeTaskConfigId?: number;
  schemeTaskConfigName?: string;
  /**
   * @example
   * 100
   */
  score?: number;
  /**
   * @example
   * 1
   */
  sessionCount?: number;
  /**
   * @example
   * SessionGroupA
   */
  sessionGroupId?: string;
  /**
   * @example
   * true
   */
  sessionGroupReviewedOrComplained?: boolean;
  skillGroupNameList?: ListSessionGroupResponseBodyDataDataSkillGroupNameList;
  static names(): { [key: string]: string } {
    return {
      assignStatus: 'AssignStatus',
      callStartTime: 'CallStartTime',
      callerList: 'CallerList',
      customerIdList: 'CustomerIdList',
      customerNameList: 'CustomerNameList',
      customerServiceIdList: 'CustomerServiceIdList',
      customerServiceNameList: 'CustomerServiceNameList',
      hitSessionCount: 'HitSessionCount',
      lastDataId: 'LastDataId',
      reviewStatus: 'ReviewStatus',
      reviewerList: 'ReviewerList',
      schemeTaskConfigId: 'SchemeTaskConfigId',
      schemeTaskConfigName: 'SchemeTaskConfigName',
      score: 'Score',
      sessionCount: 'SessionCount',
      sessionGroupId: 'SessionGroupId',
      sessionGroupReviewedOrComplained: 'SessionGroupReviewedOrComplained',
      skillGroupNameList: 'SkillGroupNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignStatus: 'number',
      callStartTime: 'string',
      callerList: ListSessionGroupResponseBodyDataDataCallerList,
      customerIdList: ListSessionGroupResponseBodyDataDataCustomerIdList,
      customerNameList: ListSessionGroupResponseBodyDataDataCustomerNameList,
      customerServiceIdList: ListSessionGroupResponseBodyDataDataCustomerServiceIdList,
      customerServiceNameList: ListSessionGroupResponseBodyDataDataCustomerServiceNameList,
      hitSessionCount: 'number',
      lastDataId: 'string',
      reviewStatus: 'number',
      reviewerList: ListSessionGroupResponseBodyDataDataReviewerList,
      schemeTaskConfigId: 'number',
      schemeTaskConfigName: 'string',
      score: 'number',
      sessionCount: 'number',
      sessionGroupId: 'string',
      sessionGroupReviewedOrComplained: 'boolean',
      skillGroupNameList: ListSessionGroupResponseBodyDataDataSkillGroupNameList,
    };
  }

  validate() {
    if(this.callerList && typeof (this.callerList as any).validate === 'function') {
      (this.callerList as any).validate();
    }
    if(this.customerIdList && typeof (this.customerIdList as any).validate === 'function') {
      (this.customerIdList as any).validate();
    }
    if(this.customerNameList && typeof (this.customerNameList as any).validate === 'function') {
      (this.customerNameList as any).validate();
    }
    if(this.customerServiceIdList && typeof (this.customerServiceIdList as any).validate === 'function') {
      (this.customerServiceIdList as any).validate();
    }
    if(this.customerServiceNameList && typeof (this.customerServiceNameList as any).validate === 'function') {
      (this.customerServiceNameList as any).validate();
    }
    if(this.reviewerList && typeof (this.reviewerList as any).validate === 'function') {
      (this.reviewerList as any).validate();
    }
    if(this.skillGroupNameList && typeof (this.skillGroupNameList as any).validate === 'function') {
      (this.skillGroupNameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyData extends $dara.Model {
  data?: ListSessionGroupResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSessionGroupResponseBodyDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo extends $dara.Model {
  /**
   * @example
   * 221
   */
  rid?: number;
  /**
   * @example
   * test
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
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

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList extends $dara.Model {
  ruleNameInfo?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleNameInfo)) {
      $dara.Model.validateArray(this.ruleNameInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleListRuleNameInfo extends $dara.Model {
  /**
   * @example
   * 2221
   */
  rid?: number;
  /**
   * @example
   * x\\"x\\"x
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
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

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList extends $dara.Model {
  ruleNameInfo?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleListRuleNameInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleNameInfo)) {
      $dara.Model.validateArray(this.ruleNameInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreensSkillGroupScreen extends $dara.Model {
  /**
   * @example
   * 0
   */
  dataType?: number;
  /**
   * @example
   * customerName
   */
  name?: string;
  /**
   * @example
   * 1
   */
  symbol?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      name: 'Name',
      symbol: 'Symbol',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'number',
      name: 'string',
      symbol: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens extends $dara.Model {
  skillGroupScreen?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreensSkillGroupScreen[];
  static names(): { [key: string]: string } {
    return {
      skillGroupScreen: 'SkillGroupScreen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupScreen: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreensSkillGroupScreen },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupScreen)) {
      $dara.Model.validateArray(this.skillGroupScreen);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfig extends $dara.Model {
  /**
   * @example
   * 1
   */
  allContentQualityCheck?: number;
  /**
   * @example
   * 223
   */
  allRids?: string;
  allRuleList?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList;
  /**
   * @example
   * 2020-12-01T15:12Z
   */
  createTime?: string;
  /**
   * @example
   * 221
   */
  id?: number;
  /**
   * @example
   * xxx
   */
  instanceId?: string;
  /**
   * @example
   * 211
   */
  modelId?: number;
  /**
   * @example
   * xxx
   */
  modelName?: string;
  /**
   * @example
   * xxx
   */
  name?: string;
  /**
   * @example
   * 0
   */
  qualityCheckType?: number;
  /**
   * @example
   * 2221
   */
  rid?: string;
  ruleList?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList;
  /**
   * @example
   * true
   */
  screenSwitch?: boolean;
  /**
   * @example
   * 0
   */
  skillGroupFrom?: number;
  /**
   * @example
   * 123
   */
  skillGroupId?: string;
  /**
   * @example
   * xxx
   */
  skillGroupName?: string;
  skillGroupScreens?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 2020-12-01T19:28Z
   */
  updateTime?: string;
  /**
   * @example
   * 323
   */
  vocabId?: number;
  /**
   * @example
   * xxx
   */
  vocabName?: string;
  static names(): { [key: string]: string } {
    return {
      allContentQualityCheck: 'AllContentQualityCheck',
      allRids: 'AllRids',
      allRuleList: 'AllRuleList',
      createTime: 'CreateTime',
      id: 'Id',
      instanceId: 'InstanceId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      name: 'Name',
      qualityCheckType: 'QualityCheckType',
      rid: 'Rid',
      ruleList: 'RuleList',
      screenSwitch: 'ScreenSwitch',
      skillGroupFrom: 'SkillGroupFrom',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      skillGroupScreens: 'SkillGroupScreens',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      vocabId: 'VocabId',
      vocabName: 'VocabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allContentQualityCheck: 'number',
      allRids: 'string',
      allRuleList: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList,
      createTime: 'string',
      id: 'number',
      instanceId: 'string',
      modelId: 'number',
      modelName: 'string',
      name: 'string',
      qualityCheckType: 'number',
      rid: 'string',
      ruleList: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList,
      screenSwitch: 'boolean',
      skillGroupFrom: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      skillGroupScreens: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens,
      status: 'number',
      type: 'number',
      updateTime: 'string',
      vocabId: 'number',
      vocabName: 'string',
    };
  }

  validate() {
    if(this.allRuleList && typeof (this.allRuleList as any).validate === 'function') {
      (this.allRuleList as any).validate();
    }
    if(this.ruleList && typeof (this.ruleList as any).validate === 'function') {
      (this.ruleList as any).validate();
    }
    if(this.skillGroupScreens && typeof (this.skillGroupScreens as any).validate === 'function') {
      (this.skillGroupScreens as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyData extends $dara.Model {
  skillGroupConfig?: ListSkillGroupConfigResponseBodyDataSkillGroupConfig[];
  static names(): { [key: string]: string } {
    return {
      skillGroupConfig: 'SkillGroupConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupConfig: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfig },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroupConfig)) {
      $dara.Model.validateArray(this.skillGroupConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent extends $dara.Model {
  /**
   * @example
   * 202526561358712105
   */
  agentId?: string;
  /**
   * @example
   * agent
   */
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents extends $dara.Model {
  agent?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent[];
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent },
    };
  }

  validate() {
    if(Array.isArray(this.agent)) {
      $dara.Model.validateArray(this.agent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer extends $dara.Model {
  /**
   * @example
   * 2337235457340978
   */
  reviewerId?: string;
  reviewerName?: string;
  static names(): { [key: string]: string } {
    return {
      reviewerId: 'ReviewerId',
      reviewerName: 'ReviewerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewerId: 'string',
      reviewerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers extends $dara.Model {
  reviewer?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer[];
  static names(): { [key: string]: string } {
    return {
      reviewer: 'Reviewer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewer: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer },
    };
  }

  validate() {
    if(Array.isArray(this.reviewer)) {
      $dara.Model.validateArray(this.reviewer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo extends $dara.Model {
  name?: string;
  /**
   * @example
   * 2312
   */
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules extends $dara.Model {
  ruleBasicInfo?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleBasicInfo: 'RuleBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleBasicInfo: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleBasicInfo)) {
      $dara.Model.validateArray(this.ruleBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgentsSamplingModeAgent extends $dara.Model {
  /**
   * @example
   * 123
   */
  agentId?: string;
  /**
   * @example
   * zhangsan
   */
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents extends $dara.Model {
  samplingModeAgent?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgentsSamplingModeAgent[];
  static names(): { [key: string]: string } {
    return {
      samplingModeAgent: 'SamplingModeAgent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      samplingModeAgent: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgentsSamplingModeAgent },
    };
  }

  validate() {
    if(Array.isArray(this.samplingModeAgent)) {
      $dara.Model.validateArray(this.samplingModeAgent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode extends $dara.Model {
  /**
   * @example
   * 60
   */
  anyNumberOfDraws?: number;
  /**
   * @example
   * true
   */
  designated?: boolean;
  /**
   * @example
   * 0
   */
  dimension?: number;
  /**
   * @example
   * 30
   */
  limit?: number;
  /**
   * @example
   * 20
   */
  numberOfDraws?: number;
  /**
   * @example
   * 0.1
   */
  proportion?: number;
  /**
   * @example
   * 5
   */
  randomInspectionNumber?: number;
  samplingModeAgents?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents;
  static names(): { [key: string]: string } {
    return {
      anyNumberOfDraws: 'AnyNumberOfDraws',
      designated: 'Designated',
      dimension: 'Dimension',
      limit: 'Limit',
      numberOfDraws: 'NumberOfDraws',
      proportion: 'Proportion',
      randomInspectionNumber: 'RandomInspectionNumber',
      samplingModeAgents: 'SamplingModeAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anyNumberOfDraws: 'number',
      designated: 'boolean',
      dimension: 'number',
      limit: 'number',
      numberOfDraws: 'number',
      proportion: 'number',
      randomInspectionNumber: 'number',
      samplingModeAgents: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents,
    };
  }

  validate() {
    if(this.samplingModeAgents && typeof (this.samplingModeAgents as any).validate === 'function') {
      (this.samplingModeAgents as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup extends $dara.Model {
  /**
   * @example
   * XXX
   */
  skillId?: string;
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      skillId: 'SkillId',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillId: 'string',
      skillName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups extends $dara.Model {
  skillGroup?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup[];
  static names(): { [key: string]: string } {
    return {
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroup: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup },
    };
  }

  validate() {
    if(Array.isArray(this.skillGroup)) {
      $dara.Model.validateArray(this.skillGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo extends $dara.Model {
  agents?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents;
  /**
   * @example
   * XX
   */
  agentsStr?: string;
  /**
   * @example
   * 0
   */
  assignmentType?: number;
  /**
   * @example
   * 39600
   */
  callTimeEnd?: number;
  /**
   * @example
   * 39600
   */
  callTimeStart?: number;
  /**
   * @example
   * 1
   */
  callType?: number;
  /**
   * @example
   * 2019-07-12T14:47Z
   */
  createTime?: string;
  /**
   * @example
   * 400
   */
  durationMax?: number;
  /**
   * @example
   * 100
   */
  durationMin?: number;
  /**
   * @example
   * 1
   */
  enabled?: number;
  /**
   * @example
   * 1
   */
  priority?: number;
  reviewers?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers;
  /**
   * @example
   * 23
   */
  ruleId?: number;
  ruleName?: string;
  rules?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules;
  samplingMode?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode;
  skillGroups?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups;
  /**
   * @example
   * XX
   */
  skillGroupsStr?: string;
  /**
   * @example
   * 2019-07-12T14:47Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      agentsStr: 'AgentsStr',
      assignmentType: 'AssignmentType',
      callTimeEnd: 'CallTimeEnd',
      callTimeStart: 'CallTimeStart',
      callType: 'CallType',
      createTime: 'CreateTime',
      durationMax: 'DurationMax',
      durationMin: 'DurationMin',
      enabled: 'Enabled',
      priority: 'Priority',
      reviewers: 'Reviewers',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      rules: 'Rules',
      samplingMode: 'SamplingMode',
      skillGroups: 'SkillGroups',
      skillGroupsStr: 'SkillGroupsStr',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents,
      agentsStr: 'string',
      assignmentType: 'number',
      callTimeEnd: 'number',
      callTimeStart: 'number',
      callType: 'number',
      createTime: 'string',
      durationMax: 'number',
      durationMin: 'number',
      enabled: 'number',
      priority: 'number',
      reviewers: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers,
      ruleId: 'number',
      ruleName: 'string',
      rules: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules,
      samplingMode: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode,
      skillGroups: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups,
      skillGroupsStr: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.agents && typeof (this.agents as any).validate === 'function') {
      (this.agents as any).validate();
    }
    if(this.reviewers && typeof (this.reviewers as any).validate === 'function') {
      (this.reviewers as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    if(this.samplingMode && typeof (this.samplingMode as any).validate === 'function') {
      (this.samplingMode as any).validate();
    }
    if(this.skillGroups && typeof (this.skillGroups as any).validate === 'function') {
      (this.skillGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyData extends $dara.Model {
  taskAssignRuleInfo?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      taskAssignRuleInfo: 'TaskAssignRuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAssignRuleInfo: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.taskAssignRuleInfo)) {
      $dara.Model.validateArray(this.taskAssignRuleInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataUser extends $dara.Model {
  /**
   * @example
   * 2951869706989****
   */
  aliUid?: string;
  /**
   * @example
   * 2020-03-11T16:54Z
   */
  createTime?: string;
  /**
   * @example
   * XXX
   */
  description?: string;
  /**
   * @example
   * xxx
   */
  displayName?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 2
   */
  loginUserType?: number;
  /**
   * @example
   * AGENT
   */
  roleName?: string;
  /**
   * @example
   * 2020-03-11T16:54Z
   */
  updateTime?: string;
  /**
   * @example
   * xxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      id: 'Id',
      loginUserType: 'LoginUserType',
      roleName: 'RoleName',
      updateTime: 'UpdateTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      id: 'number',
      loginUserType: 'number',
      roleName: 'string',
      updateTime: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $dara.Model {
  user?: ListUsersResponseBodyDataUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersResponseBodyDataUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel extends $dara.Model {
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * oapi.dingtalk.com/robot/send?access_token=c55628f700eb9ad2a3ca
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
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

export class ListWarningConfigResponseBodyDataWarningConfigInfoChannels extends $dara.Model {
  channel?: ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel },
    };
  }

  validate() {
    if(Array.isArray(this.channel)) {
      $dara.Model.validateArray(this.channel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoRidList extends $dara.Model {
  ridList?: string[];
  static names(): { [key: string]: string } {
    return {
      ridList: 'RidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ridList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ridList)) {
      $dara.Model.validateArray(this.ridList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule extends $dara.Model {
  /**
   * @example
   * 33452
   */
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
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

export class ListWarningConfigResponseBodyDataWarningConfigInfoRuleList extends $dara.Model {
  warningRule?: ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule[];
  static names(): { [key: string]: string } {
    return {
      warningRule: 'WarningRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningRule: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule },
    };
  }

  validate() {
    if(Array.isArray(this.warningRule)) {
      $dara.Model.validateArray(this.warningRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfo extends $dara.Model {
  channels?: ListWarningConfigResponseBodyDataWarningConfigInfoChannels;
  /**
   * @example
   * 32
   */
  configId?: number;
  configName?: string;
  /**
   * @example
   * 2019-10-29T15:30Z
   */
  createTime?: string;
  ridList?: ListWarningConfigResponseBodyDataWarningConfigInfoRidList;
  ruleList?: ListWarningConfigResponseBodyDataWarningConfigInfoRuleList;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 2019-10-29T17:24Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      configId: 'ConfigId',
      configName: 'ConfigName',
      createTime: 'CreateTime',
      ridList: 'RidList',
      ruleList: 'RuleList',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: ListWarningConfigResponseBodyDataWarningConfigInfoChannels,
      configId: 'number',
      configName: 'string',
      createTime: 'string',
      ridList: ListWarningConfigResponseBodyDataWarningConfigInfoRidList,
      ruleList: ListWarningConfigResponseBodyDataWarningConfigInfoRuleList,
      status: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.channels && typeof (this.channels as any).validate === 'function') {
      (this.channels as any).validate();
    }
    if(this.ridList && typeof (this.ridList as any).validate === 'function') {
      (this.ridList as any).validate();
    }
    if(this.ruleList && typeof (this.ruleList as any).validate === 'function') {
      (this.ruleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyData extends $dara.Model {
  warningConfigInfo?: ListWarningConfigResponseBodyDataWarningConfigInfo[];
  static names(): { [key: string]: string } {
    return {
      warningConfigInfo: 'WarningConfigInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningConfigInfo: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfo },
    };
  }

  validate() {
    if(Array.isArray(this.warningConfigInfo)) {
      $dara.Model.validateArray(this.warningConfigInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningStrategyConfigResponseBodyDataData extends $dara.Model {
  id?: number;
  intervalTime?: number;
  lambda?: string;
  level?: number;
  maxNumber?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      intervalTime: 'IntervalTime',
      lambda: 'Lambda',
      level: 'Level',
      maxNumber: 'MaxNumber',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      intervalTime: 'number',
      lambda: 'string',
      level: 'number',
      maxNumber: 'number',
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

export class ListWarningStrategyConfigResponseBodyData extends $dara.Model {
  data?: ListWarningStrategyConfigResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWarningStrategyConfigResponseBodyDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionGroupResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRulesHitHitKeyWords extends $dara.Model {
  /**
   * @example
   * 2312
   */
  cid?: number;
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 4
   */
  pid?: number;
  /**
   * @example
   * 4
   */
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      from: 'From',
      pid: 'Pid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'number',
      from: 'number',
      pid: 'number',
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

export class SyncQualityCheckResponseBodyDataRulesHitPhrase extends $dara.Model {
  /**
   * @example
   * 1230
   */
  begin?: number;
  /**
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @example
   * 3440
   */
  end?: number;
  /**
   * @example
   * xxx
   */
  identity?: string;
  role?: string;
  /**
   * @example
   * 123
   */
  silenceDuration?: number;
  /**
   * @example
   * 233
   */
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
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
      silenceDuration: 'number',
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

export class SyncQualityCheckResponseBodyDataRulesHit extends $dara.Model {
  hitKeyWords?: SyncQualityCheckResponseBodyDataRulesHitHitKeyWords[];
  phrase?: SyncQualityCheckResponseBodyDataRulesHitPhrase;
  static names(): { [key: string]: string } {
    return {
      hitKeyWords: 'HitKeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitKeyWords: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRulesHitHitKeyWords },
      phrase: SyncQualityCheckResponseBodyDataRulesHitPhrase,
    };
  }

  validate() {
    if(Array.isArray(this.hitKeyWords)) {
      $dara.Model.validateArray(this.hitKeyWords);
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

export class SyncQualityCheckResponseBodyDataRulesRuleInfoBase extends $dara.Model {
  comments?: string;
  level?: number;
  ruleCategoryName?: string;
  scoreNum?: number;
  scoreNumType?: number;
  scoreType?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      level: 'Level',
      ruleCategoryName: 'RuleCategoryName',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreType: 'ScoreType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      level: 'number',
      ruleCategoryName: 'string',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreType: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRules extends $dara.Model {
  hit?: SyncQualityCheckResponseBodyDataRulesHit[];
  /**
   * @example
   * 232232
   */
  rid?: string;
  ruleInfoBase?: SyncQualityCheckResponseBodyDataRulesRuleInfoBase;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
      rid: 'Rid',
      ruleInfoBase: 'RuleInfoBase',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRulesHit },
      rid: 'string',
      ruleInfoBase: SyncQualityCheckResponseBodyDataRulesRuleInfoBase,
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hit)) {
      $dara.Model.validateArray(this.hit);
    }
    if(this.ruleInfoBase && typeof (this.ruleInfoBase as any).validate === 'function') {
      (this.ruleInfoBase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1584535485856
   */
  beginTime?: number;
  rules?: SyncQualityCheckResponseBodyDataRules[];
  /**
   * @example
   * 100
   */
  score?: number;
  /**
   * @example
   * 66E1ACB866E1ACB8
   */
  taskId?: string;
  /**
   * @example
   * 20200876-66E1ACB8
   */
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      rules: 'Rules',
      score: 'Score',
      taskId: 'TaskId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      rules: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRules },
      score: 'number',
      taskId: 'string',
      tid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyDataHitRuleReviewInfoListBranchInfoList extends $dara.Model {
  /**
   * @example
   * 0
   */
  checkType?: number;
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * a&&b
   */
  lambda?: string;
  name?: string;
  /**
   * @example
   * 2
   */
  nextNodeId?: number;
  situation?: NextNodeSituations;
  triggers?: string[];
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      index: 'Index',
      lambda: 'Lambda',
      name: 'Name',
      nextNodeId: 'NextNodeId',
      situation: 'Situation',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      index: 'number',
      lambda: 'string',
      name: 'string',
      nextNodeId: 'number',
      situation: NextNodeSituations,
      triggers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.situation && typeof (this.situation as any).validate === 'function') {
      (this.situation as any).validate();
    }
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListKeyWords extends $dara.Model {
  /**
   * @example
   * 4
   */
  cid?: string;
  customizeCode?: string;
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 123
   */
  oid?: string;
  operatorKey?: string;
  /**
   * @example
   * 13
   */
  pid?: number;
  similarPhrase?: string;
  tid?: string;
  /**
   * @example
   * 3
   */
  to?: number;
  uuid?: string;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      customizeCode: 'CustomizeCode',
      from: 'From',
      oid: 'Oid',
      operatorKey: 'OperatorKey',
      pid: 'Pid',
      similarPhrase: 'SimilarPhrase',
      tid: 'Tid',
      to: 'To',
      uuid: 'Uuid',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      customizeCode: 'string',
      from: 'number',
      oid: 'string',
      operatorKey: 'string',
      pid: 'number',
      similarPhrase: 'string',
      tid: 'string',
      to: 'number',
      uuid: 'string',
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

export class TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListPhrase extends $dara.Model {
  /**
   * @example
   * 72000
   */
  begin?: number;
  /**
   * @example
   * 2019-11-25 15:37:16
   */
  beginTime?: string;
  /**
   * @example
   * 0
   */
  channelId?: number;
  emotionFineGrainedValue?: number;
  /**
   * @example
   * 7
   */
  emotionValue?: number;
  /**
   * @example
   * 80000
   */
  end?: number;
  /**
   * @example
   * 1
   */
  hitStatus?: number;
  /**
   * @example
   * 10:00:00
   */
  hourMinSec?: string;
  identity?: string;
  /**
   * @example
   * 3
   */
  pid?: number;
  renterId?: number;
  role?: string;
  sid?: number;
  /**
   * @example
   * 1000
   */
  silenceDuration?: number;
  /**
   * @example
   * 100
   */
  speechRate?: number;
  uuid?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      channelId: 'ChannelId',
      emotionFineGrainedValue: 'EmotionFineGrainedValue',
      emotionValue: 'EmotionValue',
      end: 'End',
      hitStatus: 'HitStatus',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      pid: 'Pid',
      renterId: 'RenterId',
      role: 'Role',
      sid: 'Sid',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      uuid: 'Uuid',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      channelId: 'number',
      emotionFineGrainedValue: 'number',
      emotionValue: 'number',
      end: 'number',
      hitStatus: 'number',
      hourMinSec: 'string',
      identity: 'string',
      pid: 'number',
      renterId: 'number',
      role: 'string',
      sid: 'number',
      silenceDuration: 'number',
      speechRate: 'number',
      uuid: 'string',
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

export class TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoList extends $dara.Model {
  cid?: string[];
  keyWords?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListKeyWords[];
  phrase?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
      keyWords: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListKeyWords },
      phrase: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListPhrase,
    };
  }

  validate() {
    if(Array.isArray(this.cid)) {
      $dara.Model.validateArray(this.cid);
    }
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
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

export class TestRuleV4ResponseBodyDataHitRuleReviewInfoList extends $dara.Model {
  /**
   * @example
   * 1
   */
  branchHitId?: number;
  branchInfoList?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListBranchInfoList[];
  conditionHitInfoList?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoList[];
  conditionInfoList?: ConditionBasicInfo[];
  judgeNodeName?: string;
  /**
   * @example
   * a&&b
   */
  lambda?: string;
  /**
   * @example
   * true
   */
  matched?: boolean;
  /**
   * @example
   * 0
   */
  nodeType?: string;
  /**
   * @example
   * 451
   */
  rid?: number;
  ruleName?: string;
  /**
   * @example
   * 1
   */
  ruleScoreType?: number;
  /**
   * @example
   * 1
   */
  scoreNumType?: number;
  /**
   * @example
   * 1
   */
  taskFlowId?: number;
  static names(): { [key: string]: string } {
    return {
      branchHitId: 'BranchHitId',
      branchInfoList: 'BranchInfoList',
      conditionHitInfoList: 'ConditionHitInfoList',
      conditionInfoList: 'ConditionInfoList',
      judgeNodeName: 'JudgeNodeName',
      lambda: 'Lambda',
      matched: 'Matched',
      nodeType: 'NodeType',
      rid: 'Rid',
      ruleName: 'RuleName',
      ruleScoreType: 'RuleScoreType',
      scoreNumType: 'ScoreNumType',
      taskFlowId: 'TaskFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchHitId: 'number',
      branchInfoList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitRuleReviewInfoListBranchInfoList },
      conditionHitInfoList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoList },
      conditionInfoList: { 'type': 'array', 'itemType': ConditionBasicInfo },
      judgeNodeName: 'string',
      lambda: 'string',
      matched: 'boolean',
      nodeType: 'string',
      rid: 'number',
      ruleName: 'string',
      ruleScoreType: 'number',
      scoreNumType: 'number',
      taskFlowId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.branchInfoList)) {
      $dara.Model.validateArray(this.branchInfoList);
    }
    if(Array.isArray(this.conditionHitInfoList)) {
      $dara.Model.validateArray(this.conditionHitInfoList);
    }
    if(Array.isArray(this.conditionInfoList)) {
      $dara.Model.validateArray(this.conditionInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyDataHitTaskFlowList extends $dara.Model {
  graphFlow?: TaskGraphFlow;
  /**
   * @example
   * 1
   */
  rid?: number;
  taskFlowType?: number;
  static names(): { [key: string]: string } {
    return {
      graphFlow: 'GraphFlow',
      rid: 'Rid',
      taskFlowType: 'TaskFlowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphFlow: TaskGraphFlow,
      rid: 'number',
      taskFlowType: 'number',
    };
  }

  validate() {
    if(this.graphFlow && typeof (this.graphFlow as any).validate === 'function') {
      (this.graphFlow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyDataUnhitRuleReviewInfoList extends $dara.Model {
  conditionInfoList?: ConditionBasicInfo[];
  /**
   * @example
   * true
   */
  matched?: boolean;
  /**
   * @example
   * 2
   */
  rid?: number;
  taskFlowType?: number;
  static names(): { [key: string]: string } {
    return {
      conditionInfoList: 'ConditionInfoList',
      matched: 'Matched',
      rid: 'Rid',
      taskFlowType: 'TaskFlowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfoList: { 'type': 'array', 'itemType': ConditionBasicInfo },
      matched: 'boolean',
      rid: 'number',
      taskFlowType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditionInfoList)) {
      $dara.Model.validateArray(this.conditionInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBodyData extends $dara.Model {
  hitRuleReviewInfoList?: TestRuleV4ResponseBodyDataHitRuleReviewInfoList[];
  hitTaskFlowList?: TestRuleV4ResponseBodyDataHitTaskFlowList[];
  unhitRuleReviewInfoList?: TestRuleV4ResponseBodyDataUnhitRuleReviewInfoList[];
  static names(): { [key: string]: string } {
    return {
      hitRuleReviewInfoList: 'HitRuleReviewInfoList',
      hitTaskFlowList: 'HitTaskFlowList',
      unhitRuleReviewInfoList: 'UnhitRuleReviewInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitRuleReviewInfoList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitRuleReviewInfoList },
      hitTaskFlowList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitTaskFlowList },
      unhitRuleReviewInfoList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataUnhitRuleReviewInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.hitRuleReviewInfoList)) {
      $dara.Model.validateArray(this.hitRuleReviewInfoList);
    }
    if(Array.isArray(this.hitTaskFlowList)) {
      $dara.Model.validateArray(this.hitTaskFlowList);
    }
    if(Array.isArray(this.unhitRuleReviewInfoList)) {
      $dara.Model.validateArray(this.unhitRuleReviewInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCheckTypeToSchemeResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckSchemeResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleByIdResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleToSchemeResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleV4ResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemeTaskConfigResponseBodyMessages extends $dara.Model {
  message?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123123D8C-5BD9-42A7-B527-1235F8**
   */
  taskId?: string;
  /**
   * @example
   * 20210101-1212121***
   */
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      tid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoHandScoreIdList extends $dara.Model {
  handScoreIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      handScoreIdList: 'HandScoreIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handScoreIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.handScoreIdList)) {
      $dara.Model.validateArray(this.handScoreIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo extends $dara.Model {
  /**
   * @example
   * xxx
   */
  conditionInfoCid?: string;
  static names(): { [key: string]: string } {
    return {
      conditionInfoCid: 'ConditionInfoCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfoCid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo extends $dara.Model {
  conditionBasicInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionBasicInfo: 'ConditionBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionBasicInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo },
    };
  }

  validate() {
    if(Array.isArray(this.conditionBasicInfo)) {
      $dara.Model.validateArray(this.conditionBasicInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids extends $dara.Model {
  cidItem?: string[];
  static names(): { [key: string]: string } {
    return {
      cidItem: 'CidItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidItem: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cidItem)) {
      $dara.Model.validateArray(this.cidItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord extends $dara.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 1
   */
  pid?: number;
  /**
   * @example
   * 1
   */
  tid?: string;
  /**
   * @example
   * 1
   */
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      pid: 'Pid',
      tid: 'Tid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      pid: 'number',
      tid: 'string',
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

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords extends $dara.Model {
  hitKeyWord?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord[];
  static names(): { [key: string]: string } {
    return {
      hitKeyWord: 'HitKeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitKeyWord: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord },
    };
  }

  validate() {
    if(Array.isArray(this.hitKeyWord)) {
      $dara.Model.validateArray(this.hitKeyWord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase extends $dara.Model {
  /**
   * @example
   * 0
   */
  begin?: number;
  /**
   * @example
   * 1564574
   */
  beginTime?: string;
  /**
   * @example
   * 2090
   */
  end?: number;
  /**
   * @example
   * 1
   */
  identity?: string;
  role?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      end: 'number',
      identity: 'string',
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

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo extends $dara.Model {
  hitCids?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids;
  hitKeyWords?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords;
  phrase?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase;
  static names(): { [key: string]: string } {
    return {
      hitCids: 'HitCids',
      hitKeyWords: 'HitKeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitCids: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids,
      hitKeyWords: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords,
      phrase: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase,
    };
  }

  validate() {
    if(this.hitCids && typeof (this.hitCids as any).validate === 'function') {
      (this.hitCids as any).validate();
    }
    if(this.hitKeyWords && typeof (this.hitKeyWords as any).validate === 'function') {
      (this.hitKeyWords as any).validate();
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

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit extends $dara.Model {
  conditionHitInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionHitInfo: 'ConditionHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo },
    };
  }

  validate() {
    if(Array.isArray(this.conditionHitInfo)) {
      $dara.Model.validateArray(this.conditionHitInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo extends $dara.Model {
  conditionInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo;
  hit?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit;
  /**
   * @example
   * 801
   */
  rid?: string;
  /**
   * @example
   * 88888888
   */
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      conditionInfo: 'ConditionInfo',
      hit: 'Hit',
      rid: 'Rid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfo: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo,
      hit: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit,
      rid: 'string',
      tid: 'string',
    };
  }

  validate() {
    if(this.conditionInfo && typeof (this.conditionInfo as any).validate === 'function') {
      (this.conditionInfo as any).validate();
    }
    if(this.hit && typeof (this.hit as any).validate === 'function') {
      (this.hit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRules extends $dara.Model {
  ruleHitInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleHitInfo: 'RuleHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleHitInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleHitInfo)) {
      $dara.Model.validateArray(this.ruleHitInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfo extends $dara.Model {
  handScoreIdList?: UploadDataSyncResponseBodyDataResultInfoHandScoreIdList;
  rules?: UploadDataSyncResponseBodyDataResultInfoRules;
  /**
   * @example
   * 100
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      handScoreIdList: 'HandScoreIdList',
      rules: 'Rules',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handScoreIdList: UploadDataSyncResponseBodyDataResultInfoHandScoreIdList,
      rules: UploadDataSyncResponseBodyDataResultInfoRules,
      score: 'number',
    };
  }

  validate() {
    if(this.handScoreIdList && typeof (this.handScoreIdList as any).validate === 'function') {
      (this.handScoreIdList as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyData extends $dara.Model {
  resultInfo?: UploadDataSyncResponseBodyDataResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resultInfo: 'ResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfo },
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

export class UploadRuleResponseBodyData extends $dara.Model {
  ridInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      ridInfo: 'RidInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ridInfo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ridInfo)) {
      $dara.Model.validateArray(this.ridInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaSourceLine extends $dara.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.line)) {
      $dara.Model.validateArray(this.line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaSource extends $dara.Model {
  line?: VerifySentenceResponseBodyDataDeltaSourceLine;
  /**
   * @example
   * 1
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: VerifySentenceResponseBodyDataDeltaSourceLine,
      position: 'number',
    };
  }

  validate() {
    if(this.line && typeof (this.line as any).validate === 'function') {
      (this.line as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaTargetLine extends $dara.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.line)) {
      $dara.Model.validateArray(this.line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaTarget extends $dara.Model {
  line?: VerifySentenceResponseBodyDataDeltaTargetLine;
  /**
   * @example
   * 1
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: VerifySentenceResponseBodyDataDeltaTargetLine,
      position: 'number',
    };
  }

  validate() {
    if(this.line && typeof (this.line as any).validate === 'function') {
      (this.line as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDelta extends $dara.Model {
  source?: VerifySentenceResponseBodyDataDeltaSource;
  target?: VerifySentenceResponseBodyDataDeltaTarget;
  /**
   * @example
   * CHANGE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: VerifySentenceResponseBodyDataDeltaSource,
      target: VerifySentenceResponseBodyDataDeltaTarget,
      type: 'string',
    };
  }

  validate() {
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyData extends $dara.Model {
  delta?: VerifySentenceResponseBodyDataDelta[];
  static names(): { [key: string]: string } {
    return {
      delta: 'Delta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: { 'type': 'array', 'itemType': VerifySentenceResponseBodyDataDelta },
    };
  }

  validate() {
    if(Array.isArray(this.delta)) {
      $dara.Model.validateArray(this.delta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BusinessCategoryBasicInfo extends $dara.Model {
  bid?: number;
  name?: string;
  originalId?: number;
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      name: 'Name',
      originalId: 'OriginalId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      name: 'string',
      originalId: 'number',
      serviceType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConditionBasicInfo extends $dara.Model {
  checkRange?: ConditionBasicInfoCheckRange;
  cid?: string;
  exclusion?: number;
  id?: number;
  lambda?: string;
  name?: string;
  operators?: OperatorBasicInfo[];
  rid?: string;
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      checkRange: 'Check_range',
      cid: 'Cid',
      exclusion: 'Exclusion',
      id: 'Id',
      lambda: 'Lambda',
      name: 'Name',
      operators: 'Operators',
      rid: 'Rid',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRange: ConditionBasicInfoCheckRange,
      cid: 'string',
      exclusion: 'number',
      id: 'number',
      lambda: 'string',
      name: 'string',
      operators: { 'type': 'array', 'itemType': OperatorBasicInfo },
      rid: 'string',
      userGroup: 'string',
    };
  }

  validate() {
    if(this.checkRange && typeof (this.checkRange as any).validate === 'function') {
      (this.checkRange as any).validate();
    }
    if(Array.isArray(this.operators)) {
      $dara.Model.validateArray(this.operators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GraphFlowNode extends $dara.Model {
  conditions?: ConditionBasicInfo[];
  content?: string;
  id?: number;
  index?: number;
  name?: string;
  nextNodes?: GraphFlowNodeNextNodes[];
  nodeType?: string;
  properties?: GraphFlowNodeProperties;
  rid?: number;
  useConditions?: boolean;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      content: 'Content',
      id: 'Id',
      index: 'Index',
      name: 'Name',
      nextNodes: 'NextNodes',
      nodeType: 'NodeType',
      properties: 'Properties',
      rid: 'Rid',
      useConditions: 'UseConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ConditionBasicInfo },
      content: 'string',
      id: 'number',
      index: 'number',
      name: 'string',
      nextNodes: { 'type': 'array', 'itemType': GraphFlowNodeNextNodes },
      nodeType: 'string',
      properties: GraphFlowNodeProperties,
      rid: 'number',
      useConditions: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.nextNodes)) {
      $dara.Model.validateArray(this.nextNodes);
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JudgeNodeMetaDesc extends $dara.Model {
  actualValue?: string;
  dataType?: number;
  field?: string;
  fieldType?: number;
  symbol?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      dataType: 'DataType',
      field: 'Field',
      fieldType: 'FieldType',
      symbol: 'Symbol',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      dataType: 'number',
      field: 'string',
      fieldType: 'number',
      symbol: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NextNodeSituations extends $dara.Model {
  conditionGroup?: NextNodeSituationsConditionGroup[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditionGroup: 'ConditionGroup',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionGroup: { 'type': 'array', 'itemType': NextNodeSituationsConditionGroup },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditionGroup)) {
      $dara.Model.validateArray(this.conditionGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperatorBasicInfo extends $dara.Model {
  id?: number;
  name?: string;
  oid?: string;
  param?: OperatorBasicInfoParam;
  qualityCheckType?: number;
  type?: string;
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

export class RuleCountInfo extends $dara.Model {
  autoReview?: number;
  businessCategoryBasicInfoList?: BusinessCategoryBasicInfo[];
  businessCategoryNameList?: string[];
  businessRange?: number[];
  checkNumber?: number;
  comments?: string;
  createEmpName?: string;
  createEmpid?: string;
  createTime?: string;
  deny?: number;
  effective?: number;
  effectiveEndTime?: string;
  effectiveStartTime?: string;
  endTime?: string;
  fullCycle?: number;
  graphFlow?: any;
  hitNumber?: number;
  hitRate?: number;
  hitRealViolationRate?: number;
  isDelete?: number;
  isSelect?: boolean;
  jobName?: string;
  lastUpdateEmpName?: string;
  lastUpdateEmpid?: string;
  lastUpdateTime?: string;
  name?: string;
  operationMode?: number;
  preReviewNumber?: number;
  problemNumber?: number;
  qualityCheckType?: number;
  realViolationNumber?: number;
  reviewAccuracyRate?: number;
  reviewNumber?: number;
  reviewRate?: number;
  reviewStatusName?: string;
  rid?: number;
  ruleScoreSingleType?: number;
  ruleScoreType?: number;
  ruleType?: number;
  scoreSubId?: number;
  startTime?: string;
  status?: number;
  targetType?: number;
  type?: number;
  typeName?: string;
  unReviewNumber?: number;
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      businessCategoryBasicInfoList: 'BusinessCategoryBasicInfoList',
      businessCategoryNameList: 'BusinessCategoryNameList',
      businessRange: 'BusinessRange',
      checkNumber: 'CheckNumber',
      comments: 'Comments',
      createEmpName: 'CreateEmpName',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      deny: 'Deny',
      effective: 'Effective',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      endTime: 'EndTime',
      fullCycle: 'FullCycle',
      graphFlow: 'GraphFlow',
      hitNumber: 'HitNumber',
      hitRate: 'HitRate',
      hitRealViolationRate: 'HitRealViolationRate',
      isDelete: 'IsDelete',
      isSelect: 'IsSelect',
      jobName: 'JobName',
      lastUpdateEmpName: 'LastUpdateEmpName',
      lastUpdateEmpid: 'LastUpdateEmpid',
      lastUpdateTime: 'LastUpdateTime',
      name: 'Name',
      operationMode: 'OperationMode',
      preReviewNumber: 'PreReviewNumber',
      problemNumber: 'ProblemNumber',
      qualityCheckType: 'QualityCheckType',
      realViolationNumber: 'RealViolationNumber',
      reviewAccuracyRate: 'ReviewAccuracyRate',
      reviewNumber: 'ReviewNumber',
      reviewRate: 'ReviewRate',
      reviewStatusName: 'ReviewStatusName',
      rid: 'Rid',
      ruleScoreSingleType: 'RuleScoreSingleType',
      ruleScoreType: 'RuleScoreType',
      ruleType: 'RuleType',
      scoreSubId: 'ScoreSubId',
      startTime: 'StartTime',
      status: 'Status',
      targetType: 'TargetType',
      type: 'Type',
      typeName: 'TypeName',
      unReviewNumber: 'UnReviewNumber',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      businessCategoryBasicInfoList: { 'type': 'array', 'itemType': BusinessCategoryBasicInfo },
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
      businessRange: { 'type': 'array', 'itemType': 'number' },
      checkNumber: 'number',
      comments: 'string',
      createEmpName: 'string',
      createEmpid: 'string',
      createTime: 'string',
      deny: 'number',
      effective: 'number',
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      endTime: 'string',
      fullCycle: 'number',
      graphFlow: 'any',
      hitNumber: 'number',
      hitRate: 'number',
      hitRealViolationRate: 'number',
      isDelete: 'number',
      isSelect: 'boolean',
      jobName: 'string',
      lastUpdateEmpName: 'string',
      lastUpdateEmpid: 'string',
      lastUpdateTime: 'string',
      name: 'string',
      operationMode: 'number',
      preReviewNumber: 'number',
      problemNumber: 'number',
      qualityCheckType: 'number',
      realViolationNumber: 'number',
      reviewAccuracyRate: 'number',
      reviewNumber: 'number',
      reviewRate: 'number',
      reviewStatusName: 'string',
      rid: 'number',
      ruleScoreSingleType: 'number',
      ruleScoreType: 'number',
      ruleType: 'number',
      scoreSubId: 'number',
      startTime: 'string',
      status: 'number',
      targetType: 'number',
      type: 'number',
      typeName: 'string',
      unReviewNumber: 'number',
      userGroup: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.businessCategoryBasicInfoList)) {
      $dara.Model.validateArray(this.businessCategoryBasicInfoList);
    }
    if(Array.isArray(this.businessCategoryNameList)) {
      $dara.Model.validateArray(this.businessCategoryNameList);
    }
    if(Array.isArray(this.businessRange)) {
      $dara.Model.validateArray(this.businessRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RuleInfo extends $dara.Model {
  autoReview?: number;
  businessCategoryNameList?: string[];
  checkType?: number;
  comments?: string;
  configType?: number;
  createEmpName?: string;
  createEmpid?: string;
  createTime?: string;
  deny?: number;
  dialogues?: RuleTestDialogue[];
  effective?: number;
  effectiveEndTime?: string;
  effectiveStartTime?: string;
  endTime?: string;
  externalProperty?: number;
  fullCycle?: number;
  graphFlow?: any;
  isDelete?: number;
  isOnline?: number;
  lambda?: string;
  lastUpdateEmpName?: string;
  lastUpdateEmpid?: string;
  lastUpdateTime?: string;
  level?: number;
  meet?: number;
  modifyType?: number;
  name?: string;
  operationMode?: number;
  qualityCheckType?: number;
  rid?: string;
  ruleCategoryName?: string;
  ruleScoreType?: number;
  ruleType?: number;
  schemeCheckType?: SchemeCheckType;
  schemeId?: number;
  schemeName?: string;
  schemeRuleMappingId?: number;
  scoreDeleted?: boolean;
  scoreId?: number;
  scoreName?: string;
  scoreNum?: number;
  scoreNumType?: number;
  scoreRuleHitType?: number;
  scoreSubId?: number;
  scoreSubName?: string;
  scoreType?: number;
  sortIndex?: number;
  startTime?: string;
  status?: number;
  targetType?: number;
  taskFlowId?: number;
  taskFlowType?: number;
  triggers?: string[];
  type?: number;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      businessCategoryNameList: 'BusinessCategoryNameList',
      checkType: 'CheckType',
      comments: 'Comments',
      configType: 'ConfigType',
      createEmpName: 'CreateEmpName',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      deny: 'Deny',
      dialogues: 'Dialogues',
      effective: 'Effective',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      endTime: 'EndTime',
      externalProperty: 'ExternalProperty',
      fullCycle: 'FullCycle',
      graphFlow: 'GraphFlow',
      isDelete: 'IsDelete',
      isOnline: 'IsOnline',
      lambda: 'Lambda',
      lastUpdateEmpName: 'LastUpdateEmpName',
      lastUpdateEmpid: 'LastUpdateEmpid',
      lastUpdateTime: 'LastUpdateTime',
      level: 'Level',
      meet: 'Meet',
      modifyType: 'ModifyType',
      name: 'Name',
      operationMode: 'OperationMode',
      qualityCheckType: 'QualityCheckType',
      rid: 'Rid',
      ruleCategoryName: 'RuleCategoryName',
      ruleScoreType: 'RuleScoreType',
      ruleType: 'RuleType',
      schemeCheckType: 'SchemeCheckType',
      schemeId: 'SchemeId',
      schemeName: 'SchemeName',
      schemeRuleMappingId: 'SchemeRuleMappingId',
      scoreDeleted: 'ScoreDeleted',
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreRuleHitType: 'ScoreRuleHitType',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
      scoreType: 'ScoreType',
      sortIndex: 'SortIndex',
      startTime: 'StartTime',
      status: 'Status',
      targetType: 'TargetType',
      taskFlowId: 'TaskFlowId',
      taskFlowType: 'TaskFlowType',
      triggers: 'Triggers',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
      checkType: 'number',
      comments: 'string',
      configType: 'number',
      createEmpName: 'string',
      createEmpid: 'string',
      createTime: 'string',
      deny: 'number',
      dialogues: { 'type': 'array', 'itemType': RuleTestDialogue },
      effective: 'number',
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      endTime: 'string',
      externalProperty: 'number',
      fullCycle: 'number',
      graphFlow: 'any',
      isDelete: 'number',
      isOnline: 'number',
      lambda: 'string',
      lastUpdateEmpName: 'string',
      lastUpdateEmpid: 'string',
      lastUpdateTime: 'string',
      level: 'number',
      meet: 'number',
      modifyType: 'number',
      name: 'string',
      operationMode: 'number',
      qualityCheckType: 'number',
      rid: 'string',
      ruleCategoryName: 'string',
      ruleScoreType: 'number',
      ruleType: 'number',
      schemeCheckType: SchemeCheckType,
      schemeId: 'number',
      schemeName: 'string',
      schemeRuleMappingId: 'number',
      scoreDeleted: 'boolean',
      scoreId: 'number',
      scoreName: 'string',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreRuleHitType: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
      scoreType: 'number',
      sortIndex: 'number',
      startTime: 'string',
      status: 'number',
      targetType: 'number',
      taskFlowId: 'number',
      taskFlowType: 'number',
      triggers: { 'type': 'array', 'itemType': 'string' },
      type: 'number',
      weight: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.businessCategoryNameList)) {
      $dara.Model.validateArray(this.businessCategoryNameList);
    }
    if(Array.isArray(this.dialogues)) {
      $dara.Model.validateArray(this.dialogues);
    }
    if(this.schemeCheckType && typeof (this.schemeCheckType as any).validate === 'function') {
      (this.schemeCheckType as any).validate();
    }
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RuleTestDialogue extends $dara.Model {
  content?: RuleTestDialogueContent[];
  id?: number;
  name?: string;
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      name: 'Name',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': RuleTestDialogueContent },
      id: 'number',
      name: 'string',
      userGroup: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RulesInfo extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  conditions?: ConditionBasicInfo[];
  count?: number;
  /**
   * **if can be null:**
   * true
   */
  dialogues?: RuleTestDialogue[];
  pageNumber?: number;
  pageSize?: number;
  rules?: RuleInfo[];
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      count: 'Count',
      dialogues: 'Dialogues',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ConditionBasicInfo },
      count: 'number',
      dialogues: { 'type': 'array', 'itemType': RuleTestDialogue },
      pageNumber: 'number',
      pageSize: 'number',
      rules: { 'type': 'array', 'itemType': RuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.dialogues)) {
      $dara.Model.validateArray(this.dialogues);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchemeCheckType extends $dara.Model {
  checkName?: string;
  checkType?: number;
  enable?: number;
  schemeId?: number;
  schemeScoreInfoList?: SchemeCheckTypeSchemeScoreInfoList[];
  score?: number;
  sourceScore?: number;
  taskFlowScoreInfoList?: SchemeCheckTypeTaskFlowScoreInfoList[];
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkType: 'CheckType',
      enable: 'Enable',
      schemeId: 'SchemeId',
      schemeScoreInfoList: 'SchemeScoreInfoList',
      score: 'Score',
      sourceScore: 'SourceScore',
      taskFlowScoreInfoList: 'TaskFlowScoreInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkType: 'number',
      enable: 'number',
      schemeId: 'number',
      schemeScoreInfoList: { 'type': 'array', 'itemType': SchemeCheckTypeSchemeScoreInfoList },
      score: 'number',
      sourceScore: 'number',
      taskFlowScoreInfoList: { 'type': 'array', 'itemType': SchemeCheckTypeTaskFlowScoreInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.schemeScoreInfoList)) {
      $dara.Model.validateArray(this.schemeScoreInfoList);
    }
    if(Array.isArray(this.taskFlowScoreInfoList)) {
      $dara.Model.validateArray(this.taskFlowScoreInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskGraphFlow extends $dara.Model {
  flowRuleScoreType?: number;
  id?: number;
  nodes?: GraphFlowNode[];
  rid?: number;
  ruleName?: string;
  showProperties?: string;
  skipWhenFirstSessionNodeMiss?: boolean;
  static names(): { [key: string]: string } {
    return {
      flowRuleScoreType: 'FlowRuleScoreType',
      id: 'Id',
      nodes: 'Nodes',
      rid: 'Rid',
      ruleName: 'RuleName',
      showProperties: 'ShowProperties',
      skipWhenFirstSessionNodeMiss: 'SkipWhenFirstSessionNodeMiss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowRuleScoreType: 'number',
      id: 'number',
      nodes: { 'type': 'array', 'itemType': GraphFlowNode },
      rid: 'number',
      ruleName: 'string',
      showProperties: 'string',
      skipWhenFirstSessionNodeMiss: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessCategoryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 348193421
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5F83F12
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessCategoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddBusinessCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddBusinessCategoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleCategoryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: AddRuleCategoryResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddRuleCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class AddRuleCategoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddRuleCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddRuleCategoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleV4Request extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * false
   */
  isCopy?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStrForRule?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      isCopy: 'IsCopy',
      jsonStrForRule: 'JsonStrForRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      isCopy: 'boolean',
      jsonStrForRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleV4ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: AddRuleV4ResponseBodyMessages;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: AddRuleV4ResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleV4Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddRuleV4ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddRuleV4ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyWsTokenRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {
   *     "business": "test",
   *     "callType": 1,
   *     "callee": "13111111111",
   *     "caller": "13800000000",
   *     "skillGroupId": 1,
   *     "skillGroupName": "test",
   *     "taskConfigId": 399,
   *     "tid": "2025012412cb129e-1579-46b5-9326-1b2ececf8f30"
   * }
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyWsTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ApplyWsTokenResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ApplyWsTokenResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
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

export class ApplyWsTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyWsTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyWsTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"assignmentList":[{"taskId":"1C21CF1E-2917-4236-A046-20E37B293B69","fileId":"7981b466fd6a4c70a7065da159739a5b"},{"taskId":"0111DDBC-5F10-47E0-B7D4-7175F47D626F","fileId":"1814eeae3cff41e989e31ab547f07561"}],"assignments":[{"reviewer":"255746168704895558"},{"reviewer":"268370362815185444"}]}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4D55C6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssignReviewerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssignReviewerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerBySessionGroupRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"sessionGroupParam":{"isSchemeData":1,"callStartTime":"2022-09-17 00:00:00","callEndTime":"2022-09-23 23:59:59","schemeTaskConfigId":24},"assignments":[{"reviewer":63,"count":4}],"isSchemeData":1}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerBySessionGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: AssignReviewerBySessionGroupResponseBodyMessages;
  /**
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: AssignReviewerBySessionGroupResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerBySessionGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssignReviewerBySessionGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssignReviewerBySessionGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubmitReviewInfoRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"isSchemeData":1,"schemeTaskConfigId":334,"sourceDataType":2,"startTime":"2022-08-25 00:00:00","endTime":"2022-09-23 23:59:59","sessionList":[{"taskId":"20220831-F8D7F4DF-0A16-1A1C-BA63-28F203922692","fileId":"20220831-164343"},{"taskId":"20220831-F2A50A72-82C4-1E3F-A1FD-52A662283D25","fileId":"20220831-164343"}]}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubmitReviewInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: BatchSubmitReviewInfoResponseBodyMessages;
  /**
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: BatchSubmitReviewInfoResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSubmitReviewInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchSubmitReviewInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchSubmitReviewInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsrVocabRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsrVocabResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 71b1795ac8634bd8bdf4d3878480c7c2
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 96138D8D-8D26-4E41-BFF4-77AED1088BBD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsrVocabResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAsrVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAsrVocabResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCheckTypeToSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCheckTypeToSchemeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 5
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: CreateCheckTypeToSchemeResponseBodyMessages;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: CreateCheckTypeToSchemeResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCheckTypeToSchemeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCheckTypeToSchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCheckTypeToSchemeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityCheckSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityCheckSchemeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 12
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: CreateQualityCheckSchemeResponseBodyMessages;
  /**
   * @example
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5F****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: CreateQualityCheckSchemeResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQualityCheckSchemeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQualityCheckSchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateQualityCheckSchemeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeTaskConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeTaskConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 22
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: CreateSchemeTaskConfigResponseBodyMessages;
  /**
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: CreateSchemeTaskConfigResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeTaskConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSchemeTaskConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSchemeTaskConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"skillGroupFrom":0,"qualityCheckType":0,"modelId":746,"name":"test","rid":"2493","vocabId":"267","skillGroupList":[{"skillGroupId":"0903","skillGroupName":"0903"}]}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 223
   */
  data?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSkillGroupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSkillGroupConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskAssignRuleRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskAssignRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 54
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskAssignRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTaskAssignRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTaskAssignRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 30
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4D55C6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWarningConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWarningConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningStrategyConfigRequest extends $dara.Model {
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningStrategyConfigResponseBody extends $dara.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningStrategyConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWarningStrategyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWarningStrategyConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelRuleCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelRuleCategoryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DelRuleCategoryResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DelRuleCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class DelRuleCategoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DelRuleCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DelRuleCategoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsrVocabRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsrVocabResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 71b1795ac8634bd8bdf4d3878480c7c2
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 4987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsrVocabResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAsrVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAsrVocabResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessCategoryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 4987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessCategoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBusinessCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBusinessCategoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCheckTypeToSchemeRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"schemeId":"1376","checkType":"4"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCheckTypeToSchemeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 48864
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: string[];
  /**
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCheckTypeToSchemeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCheckTypeToSchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCheckTypeToSchemeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizationConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"modelId":"2412"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizationConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 252
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizationConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomizationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomizationConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"setId":"234"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataSetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrecisionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "{"taskId": "7C1DEF5F-2C18-4D36-99C6*******"}"
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrecisionTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrecisionTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePrecisionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePrecisionTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityCheckSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"schemeId":191}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityCheckSchemeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: DeleteQualityCheckSchemeResponseBodyMessages;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: DeleteQualityCheckSchemeResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityCheckSchemeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQualityCheckSchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteQualityCheckSchemeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * true
   */
  forceDelete?: boolean;
  /**
   * @example
   * 1
   */
  isSchemeData?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      forceDelete: 'ForceDelete',
      isSchemeData: 'IsSchemeData',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      forceDelete: 'boolean',
      isSchemeData: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: DeleteRuleResponseBodyMessages;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: DeleteRuleResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleV4Request extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * false
   */
  forceDelete?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      forceDelete: 'ForceDelete',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      forceDelete: 'boolean',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleV4ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: DeleteRuleV4ResponseBodyMessages;
  /**
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: DeleteRuleV4ResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleV4Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRuleV4ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRuleV4ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemeTaskConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"schemeId":"329"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemeTaskConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: DeleteSchemeTaskConfigResponseBodyMessages;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4D55C6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: DeleteSchemeTaskConfigResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemeTaskConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSchemeTaskConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSchemeTaskConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"id":552}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSkillGroupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSkillGroupConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskAssignRuleRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"ruleId": 24}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskAssignRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskAssignRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTaskAssignRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTaskAssignRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"configId": "31"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4D55C6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWarningConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteWarningConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningStrategyConfigRequest extends $dara.Model {
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningStrategyConfigResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningStrategyConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWarningStrategyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteWarningStrategyConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetAsrVocabResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAsrVocabResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetAsrVocabResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAsrVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAsrVocabResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListRequest extends $dara.Model {
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ""
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetBusinessCategoryListResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * A186A419-FDBE-464C-AED4-7121CAC73BF1
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBusinessCategoryListResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetBusinessCategoryListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessCategoryListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBusinessCategoryListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ""
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetCustomizationConfigListResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomizationConfigListResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetCustomizationConfigListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomizationConfigListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCustomizationConfigListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "{"pageNumber":1,"pageSize":1,"taskId":"593A04C0-E6E9-4CDC-8C9*****","original":1}"
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetNextResultToVerifyResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetNextResultToVerifyResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetNextResultToVerifyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNextResultToVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNextResultToVerifyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "{"taskId":"593A04C0-E6E9-4CDC-8C9****"}"
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetPrecisionTaskResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPrecisionTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetPrecisionTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPrecisionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPrecisionTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"schemeId":"187","ruleRequireInfos":["BusinessNameInfo","RuleCategory"]}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckSchemeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetQualityCheckSchemeResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: string[];
  /**
   * @example
   * 96138D8D-8D26-4E41-BFF4-77AED1088BBD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQualityCheckSchemeResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityCheckSchemeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQualityCheckSchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQualityCheckSchemeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"pageNumber":1,"pageSize":10,"excludeFields":"hitResult.hits, recording.url","requiredFields":"agent,status,errorMessage,reviewStatus,reviewResult,score,taskId,reviewer,resolver,recording.name,recording.duration,hitResult,business","dataType":1,"sourceType":0,"startTime":"2020-06-25 00:00:00","endTime":"2020-07-01 23:59:59"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
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

export class GetResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetResultToReviewResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetResultToReviewResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetResultToReviewResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResultToReviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResultToReviewResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"ruleIds":"123"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetRuleResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleByIdRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 53
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleByIdResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: RulesInfo;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: string[];
  /**
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RulesInfo,
      httpStatusCode: 'number',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleByIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRuleByIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ""
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetRuleCategoryResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRuleCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetRuleCategoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRuleCategoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"ruleIds":"123"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetRuleDetailResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 4987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRuleDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetRuleDetailResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRuleDetailResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleV4Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleV4ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: RulesInfo;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: string[];
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RulesInfo,
      httpStatusCode: 'number',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleV4Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleV4ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRuleV4ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRulesCountListRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  businessName?: string;
  /**
   * @example
   * 1
   */
  businessRange?: number;
  categoryName?: string;
  /**
   * @example
   * true
   */
  countTotal?: boolean;
  /**
   * @example
   * 63
   */
  createEmpid?: string;
  /**
   * @example
   * 63
   */
  createUserId?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2022-10-08 23:59:59
   */
  endTime?: string;
  /**
   * @example
   * 63
   */
  lastUpdateEmpid?: string;
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
  requireInfos?: string[];
  /**
   * @example
   * 123
   */
  rid?: number;
  /**
   * @example
   * 123
   */
  ruleIdOrRuleName?: string;
  /**
   * @example
   * 1
   */
  ruleScoreSingleType?: number;
  /**
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @example
   * 123
   */
  schemeId?: number;
  /**
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @example
   * 2022-10-07 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  typeName?: string;
  /**
   * @example
   * 2022-10-08 23:59:59
   */
  updateEndTime?: string;
  /**
   * @example
   * 2022-10-07 00:00:00
   */
  updateStartTime?: string;
  /**
   * @example
   * 63
   */
  updateUserId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      businessName: 'BusinessName',
      businessRange: 'BusinessRange',
      categoryName: 'CategoryName',
      countTotal: 'CountTotal',
      createEmpid: 'CreateEmpid',
      createUserId: 'CreateUserId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lastUpdateEmpid: 'LastUpdateEmpid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requireInfos: 'RequireInfos',
      rid: 'Rid',
      ruleIdOrRuleName: 'RuleIdOrRuleName',
      ruleScoreSingleType: 'RuleScoreSingleType',
      ruleType: 'RuleType',
      schemeId: 'SchemeId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
      typeName: 'TypeName',
      updateEndTime: 'UpdateEndTime',
      updateStartTime: 'UpdateStartTime',
      updateUserId: 'UpdateUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      businessName: 'string',
      businessRange: 'number',
      categoryName: 'string',
      countTotal: 'boolean',
      createEmpid: 'string',
      createUserId: 'number',
      currentPage: 'number',
      endTime: 'string',
      lastUpdateEmpid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requireInfos: { 'type': 'array', 'itemType': 'string' },
      rid: 'number',
      ruleIdOrRuleName: 'string',
      ruleScoreSingleType: 'number',
      ruleType: 'number',
      schemeId: 'number',
      sourceType: 'number',
      startTime: 'string',
      status: 'number',
      type: 'number',
      typeName: 'string',
      updateEndTime: 'string',
      updateStartTime: 'string',
      updateUserId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.requireInfos)) {
      $dara.Model.validateArray(this.requireInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRulesCountListResponseBody extends $dara.Model {
  businessType?: number;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 20
   */
  count?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: GetRulesCountListResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: GetRulesCountListResponseBodyMessages;
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
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      code: 'string',
      count: 'number',
      currentPage: 'number',
      data: GetRulesCountListResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      messages: GetRulesCountListResponseBodyMessages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRulesCountListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRulesCountListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRulesCountListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ""
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetScoreInfoResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetScoreInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetScoreInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScoreInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetScoreInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetSkillGroupConfigResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSkillGroupConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetSkillGroupConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSkillGroupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSkillGroupConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"pageNumber":1,"pageSize":10,"requiredFields":"asrResult,agent,status,errorMessage,reviewStatus,reviewResult,score,taskId,reviewer,resolver,recording.name,recording.duration,recording.url,hitResult,business","startTime":"2020-12-25 00:00:00","endTime":"2020-12-31 23:59:59"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBody extends $dara.Model {
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
  data?: GetSyncResultResponseBodyData[];
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
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5F****
   */
  requestId?: string;
  /**
   * @example
   * xxx
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
      data: { 'type': 'array', 'itemType': GetSyncResultResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSyncResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSyncResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigRequest extends $dara.Model {
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarningStrategyConfigResponseBody extends $dara.Model {
  code?: string;
  data?: GetWarningStrategyConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetWarningStrategyConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetWarningStrategyConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWarningStrategyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWarningStrategyConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleComplaintRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleComplaintResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleComplaintResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HandleComplaintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: HandleComplaintResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidRuleRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"ruleIds":[3,4]}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvalidRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InvalidRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"pageSize":1}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListAsrVocabResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 66E1ACB8-17B2-4BE8-8581-954A8EE1324B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAsrVocabResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class ListAsrVocabResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAsrVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAsrVocabResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"pageNumber":1,"pageSize":10}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 23
   */
  count?: number;
  /**
   * @example
   * 10
   */
  currentPage?: number;
  data?: ListDataSetResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: ListDataSetResponseBodyMessages;
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
   * 96138D8D-8D26-4E41-BFF4-77AED1088BBD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      currentPage: 'number',
      data: ListDataSetResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      messages: ListDataSetResponseBodyMessages,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataSetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "{"pageSize":10,"pageNumber":1}"
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 22
   */
  count?: number;
  data?: ListPrecisionTaskResponseBodyData;
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
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListPrecisionTaskResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

export class ListPrecisionTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrecisionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrecisionTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 22
   */
  count?: number;
  data?: ListQualityCheckSchemeResponseBodyData[];
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
   * 82C91484-B2D5-4D2A-A21F-A6D73F4***
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
      data: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQualityCheckSchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQualityCheckSchemeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"pageNumber":1,"pageSize":10}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 20
   */
  count?: number;
  data?: ListRulesResponseBodyData[];
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
   * 82C91484-B2D5-4D2A-A21F-A6D73F**
   */
  requestId?: string;
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': ListRulesResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesV4Request extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  businessName?: string;
  businessRange?: number;
  categoryName?: string;
  /**
   * @example
   * false
   */
  countTotal?: boolean;
  /**
   * @example
   * 1
   */
  createEmpid?: string;
  /**
   * @example
   * 1
   */
  createUserId?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2021-11-29 19:11:09
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  lastUpdateEmpid?: string;
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
  requireInfos?: string[];
  /**
   * @example
   * 895EAD5312634F5AA708E3B3FA79662E
   */
  rid?: number;
  /**
   * @example
   * xx
   */
  ruleIdOrRuleName?: string;
  /**
   * @example
   * 1
   */
  ruleScoreSingleType?: number;
  /**
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @example
   * 1000000090
   */
  schemeId?: number;
  /**
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @example
   * 2021-11-29 18:11:09
   */
  startTime?: string;
  /**
   * @example
   * 2
   */
  status?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  typeName?: string;
  /**
   * @example
   * 2021-11-29 18:11:09
   */
  updateEndTime?: string;
  /**
   * @example
   * 2021-11-29 16:11:09
   */
  updateStartTime?: string;
  /**
   * @example
   * 1
   */
  updateUserId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      businessName: 'BusinessName',
      businessRange: 'BusinessRange',
      categoryName: 'CategoryName',
      countTotal: 'CountTotal',
      createEmpid: 'CreateEmpid',
      createUserId: 'CreateUserId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lastUpdateEmpid: 'LastUpdateEmpid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requireInfos: 'RequireInfos',
      rid: 'Rid',
      ruleIdOrRuleName: 'RuleIdOrRuleName',
      ruleScoreSingleType: 'RuleScoreSingleType',
      ruleType: 'RuleType',
      schemeId: 'SchemeId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
      typeName: 'TypeName',
      updateEndTime: 'UpdateEndTime',
      updateStartTime: 'UpdateStartTime',
      updateUserId: 'UpdateUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      businessName: 'string',
      businessRange: 'number',
      categoryName: 'string',
      countTotal: 'boolean',
      createEmpid: 'string',
      createUserId: 'number',
      currentPage: 'number',
      endTime: 'string',
      lastUpdateEmpid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requireInfos: { 'type': 'array', 'itemType': 'string' },
      rid: 'number',
      ruleIdOrRuleName: 'string',
      ruleScoreSingleType: 'number',
      ruleType: 'number',
      schemeId: 'number',
      sourceType: 'number',
      startTime: 'string',
      status: 'number',
      type: 'number',
      typeName: 'string',
      updateEndTime: 'string',
      updateStartTime: 'string',
      updateUserId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.requireInfos)) {
      $dara.Model.validateArray(this.requireInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesV4ResponseBody extends $dara.Model {
  businessType?: number;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 219
   */
  count?: number;
  /**
   * @example
   * 10
   */
  currentPage?: number;
  data?: RuleCountInfo[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: string[];
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
   * 96138D8D-8D26-4E41-BFF4-77AED1088BBD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 219
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      code: 'string',
      count: 'number',
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': RuleCountInfo },
      httpStatusCode: 'number',
      message: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesV4Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRulesV4ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRulesV4ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"pageNumber":1,"pageSize":10,"sourceDataType":"1"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 22
   */
  count?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListSchemeTaskConfigResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxx
   */
  lastDataId?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: ListSchemeTaskConfigResponseBodyMessages;
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
   * 4B0A8DCD-0DDF-5E80-8B9C-0A2F68B3403B
   */
  requestId?: string;
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
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      lastDataId: 'LastDataId',
      message: 'Message',
      messages: 'Messages',
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
      currentPage: 'number',
      data: ListSchemeTaskConfigResponseBodyData,
      httpStatusCode: 'number',
      lastDataId: 'string',
      message: 'string',
      messages: ListSchemeTaskConfigResponseBodyMessages,
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
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemeTaskConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSchemeTaskConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSchemeTaskConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"isSchemeData":1,"pageNumber":1,"pageSize":10,"callStartTime":"2022-09-17 00:00:00","callEndTime":"2022-09-23 23:59:59","schemeTaskConfigId":368}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 2228
   */
  count?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListSessionGroupResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * xxx
   */
  lastDataId?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: ListSessionGroupResponseBodyMessages;
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
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
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
      currentPage: 'CurrentPage',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      lastDataId: 'LastDataId',
      message: 'Message',
      messages: 'Messages',
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
      currentPage: 'number',
      data: ListSessionGroupResponseBodyData,
      httpStatusCode: 'number',
      lastDataId: 'string',
      message: 'string',
      messages: ListSessionGroupResponseBodyMessages,
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
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSessionGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSessionGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"pageNumber":1,"pageSize": 1}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListSkillGroupConfigResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSkillGroupConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class ListSkillGroupConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSkillGroupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSkillGroupConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"pageNumber":1,"pageSize":10}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 23
   */
  count?: number;
  data?: ListTaskAssignRulesResponseBodyData;
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
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListTaskAssignRulesResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

export class ListTaskAssignRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTaskAssignRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTaskAssignRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"pageNumber":1,"pageSize":10}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 12
   */
  count?: number;
  data?: ListUsersResponseBodyData;
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
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListUsersResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

export class ListUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"pageNumber":1,"pageSize":10}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListWarningConfigResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4D55C6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListWarningConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class ListWarningConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWarningConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWarningConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningStrategyConfigRequest extends $dara.Model {
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningStrategyConfigResponseBody extends $dara.Model {
  code?: string;
  count?: number;
  data?: ListWarningStrategyConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListWarningStrategyConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class ListWarningStrategyConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWarningStrategyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWarningStrategyConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"isSchemeData":1,"searchParam":{"schemeTaskConfigId":1,"sourceDataType":1,"startTime":"2022-09-20 00:00:00","endTime":"2022-09-26 23:59:59"}}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: RevertAssignedSessionResponseBodyMessages;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4D55C6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: RevertAssignedSessionResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevertAssignedSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevertAssignedSessionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionGroupRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"isSchemeData":1,"forceRevertSessionGroup":true,"sessionGroupIdList":["1"]}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: RevertAssignedSessionGroupResponseBodyMessages;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: RevertAssignedSessionGroupResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAssignedSessionGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevertAssignedSessionGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevertAssignedSessionGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveConfigDataSetRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveConfigDataSetResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveConfigDataSetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveConfigDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveConfigDataSetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitComplaintRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitComplaintResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 90
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4D55C6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitComplaintResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitComplaintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitComplaintResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPrecisionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "{"name":"test","dataSetId":1865}"
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPrecisionTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * EA701F66-8CA2-4A79-8E3C-A6F2FA****
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPrecisionTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitPrecisionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitPrecisionTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityCheckTaskRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityCheckTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * F6C2B68F-2311-4495-82AC-DAE86C9****
   */
  data?: string;
  message?: string;
  /**
   * @example
   * 00A044A2-D59B-4104-96BA-84060AE8345F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityCheckTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitQualityCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitQualityCheckTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReviewInfoRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReviewInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 95
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReviewInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitReviewInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitReviewInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"tid":"20200823-234234","dialogue":"{}"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: SyncQualityCheckResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 66E1ACB8-17B2-4BE8-8581-954A8*****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SyncQualityCheckResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class SyncQualityCheckResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncQualityCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncQualityCheckResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4Request extends $dara.Model {
  /**
   * @example
   * 1
   */
  isSchemeData?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  testJson?: string;
  static names(): { [key: string]: string } {
    return {
      isSchemeData: 'IsSchemeData',
      testJson: 'TestJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSchemeData: 'number',
      testJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleV4ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: TestRuleV4ResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 96138D8D-XXXX-4E41-XXXX-77AED1088BBD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TestRuleV4ResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

export class TestRuleV4Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TestRuleV4ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TestRuleV4ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAsrVocabRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAsrVocabResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 71b1795ac8634bd8bdf4d3878480c7c2
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAsrVocabResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAsrVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAsrVocabResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCheckTypeToSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCheckTypeToSchemeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 4
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: UpdateCheckTypeToSchemeResponseBodyMessages;
  /**
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateCheckTypeToSchemeResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCheckTypeToSchemeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCheckTypeToSchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCheckTypeToSchemeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckDataRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"taskId":"xxx"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckDataResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateQualityCheckDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateQualityCheckDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckSchemeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: UpdateQualityCheckSchemeResponseBodyMessages;
  /**
   * @example
   * 96138D8D-8D26-4E41-BFF4-77AED1088BBD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateQualityCheckSchemeResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQualityCheckSchemeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateQualityCheckSchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateQualityCheckSchemeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * xxx
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 4987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleByIdRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * false
   */
  isCopy?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  jsonStrForRule?: string;
  /**
   * @example
   * 1
   */
  returnRelatedSchemes?: boolean;
  /**
   * @example
   * 1
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      isCopy: 'IsCopy',
      jsonStrForRule: 'JsonStrForRule',
      returnRelatedSchemes: 'ReturnRelatedSchemes',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      isCopy: 'boolean',
      jsonStrForRule: 'string',
      returnRelatedSchemes: 'boolean',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleByIdResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: UpdateRuleByIdResponseBodyMessages;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4D55C6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateRuleByIdResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleByIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRuleByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRuleByIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleToSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"schemeId":"10","schemeRules":[{"ruleId":229,"checkType":0}]}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleToSchemeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 30
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: UpdateRuleToSchemeResponseBodyMessages;
  /**
   * @example
   * 9987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateRuleToSchemeResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleToSchemeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRuleToSchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRuleToSchemeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleV4Request extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStrForRule?: string;
  /**
   * @example
   * 1
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStrForRule: 'JsonStrForRule',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStrForRule: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleV4ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  data?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: UpdateRuleV4ResponseBodyMessages;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateRuleV4ResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleV4Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRuleV4ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRuleV4ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemeTaskConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemeTaskConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  messages?: UpdateSchemeTaskConfigResponseBodyMessages;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      messages: 'Messages',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      messages: UpdateSchemeTaskConfigResponseBodyMessages,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.messages && typeof (this.messages as any).validate === 'function') {
      (this.messages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemeTaskConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSchemeTaskConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSchemeTaskConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"skillGroupFrom":0,"name":"test","qualityCheckType":0,"rid":"2493,4098","vocabId":267,"skillGroupList":[{"skillGroupId":"090311","skillGroupName":"09031"}],"id":553}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 38E7E948-0876-4FEE-B0AA-6*****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSkillGroupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSkillGroupConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"tid":"xxx"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: UpdateSyncQualityCheckDataResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5F8***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateSyncQualityCheckDataResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class UpdateSyncQualityCheckDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSyncQualityCheckDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSyncQualityCheckDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAssignRuleRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAssignRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAssignRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTaskAssignRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTaskAssignRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"aliUid":"2951869706989****","roleName":"ADMIN"},{"aliUid":"2557461687048****","roleName":"ADMIN"}]
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"ridList":[18130],"configName":"0310","channels":[{"type":1,"url":"https://sca.console.aliyun.com/#/warningConfig"}],"configId":29}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWarningConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWarningConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningStrategyConfigRequest extends $dara.Model {
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningStrategyConfigResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningStrategyConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWarningStrategyConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWarningStrategyConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAudioDataRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {“callList”:“xxxxx”}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAudioDataResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5***
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5F8***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAudioDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadAudioDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadAudioDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 6F5934C7-C223-4F0F-BBF3-5B3594***
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 6F5934C7-C223-4F0F-BBF3-5B3594****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"tickets":xxx}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: UploadDataSyncResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 4987D326-83D9-4A42-B9A5-0B27F9B***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UploadDataSyncResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class UploadDataSyncResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadDataSyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadDataSyncResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataV4Request extends $dara.Model {
  /**
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataV4ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 6F5934C7-C223-4F0F-BBF3-5B3594***
   */
  data?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 6F5934C7-C223-4F0F-BBF3-5B3594***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataV4Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadDataV4ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadDataV4ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRuleRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {“conditions”:“xxxxx”,"rules":"xxxx"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: UploadRuleResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 4987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UploadRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class UploadRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFileRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFileResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 0.9485294
   */
  data?: number;
  /**
   * @example
   * s
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyFileResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: VerifySentenceResponseBodyData;
  /**
   * @example
   * 2
   */
  incorrectWords?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24F4CE647
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  sourceRole?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  targetRole?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      incorrectWords: 'IncorrectWords',
      message: 'Message',
      requestId: 'RequestId',
      sourceRole: 'SourceRole',
      success: 'Success',
      targetRole: 'TargetRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: VerifySentenceResponseBodyData,
      incorrectWords: 'number',
      message: 'string',
      requestId: 'string',
      sourceRole: 'number',
      success: 'boolean',
      targetRole: 'number',
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

export class VerifySentenceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifySentenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifySentenceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("qualitycheck", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - AddBusinessCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBusinessCategoryResponse
   */
  async addBusinessCategoryWithOptions(request: AddBusinessCategoryRequest, runtime: $dara.RuntimeOptions): Promise<AddBusinessCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddBusinessCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddBusinessCategoryResponse>(await this.callApi(params, req, runtime), new AddBusinessCategoryResponse({}));
    } else {
      return $dara.cast<AddBusinessCategoryResponse>(await this.execute(params, req, runtime), new AddBusinessCategoryResponse({}));
    }

  }

  /**
   * @param request - AddBusinessCategoryRequest
   * @returns AddBusinessCategoryResponse
   */
  async addBusinessCategory(request: AddBusinessCategoryRequest): Promise<AddBusinessCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addBusinessCategoryWithOptions(request, runtime);
  }

  /**
   * @param request - AddRuleCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRuleCategoryResponse
   */
  async addRuleCategoryWithOptions(request: AddRuleCategoryRequest, runtime: $dara.RuntimeOptions): Promise<AddRuleCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRuleCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddRuleCategoryResponse>(await this.callApi(params, req, runtime), new AddRuleCategoryResponse({}));
    } else {
      return $dara.cast<AddRuleCategoryResponse>(await this.execute(params, req, runtime), new AddRuleCategoryResponse({}));
    }

  }

  /**
   * @param request - AddRuleCategoryRequest
   * @returns AddRuleCategoryResponse
   */
  async addRuleCategory(request: AddRuleCategoryRequest): Promise<AddRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRuleCategoryWithOptions(request, runtime);
  }

  /**
   * V4创建规则
   * 
   * @param request - AddRuleV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRuleV4Response
   */
  async addRuleV4WithOptions(request: AddRuleV4Request, runtime: $dara.RuntimeOptions): Promise<AddRuleV4Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isCopy)) {
      body["IsCopy"] = request.isCopy;
    }

    if (!$dara.isNull(request.jsonStrForRule)) {
      body["JsonStrForRule"] = request.jsonStrForRule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddRuleV4Response>(await this.callApi(params, req, runtime), new AddRuleV4Response({}));
    } else {
      return $dara.cast<AddRuleV4Response>(await this.execute(params, req, runtime), new AddRuleV4Response({}));
    }

  }

  /**
   * V4创建规则
   * 
   * @param request - AddRuleV4Request
   * @returns AddRuleV4Response
   */
  async addRuleV4(request: AddRuleV4Request): Promise<AddRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRuleV4WithOptions(request, runtime);
  }

  /**
   * 申领实时语音所需token
   * 
   * @param request - ApplyWsTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyWsTokenResponse
   */
  async applyWsTokenWithOptions(request: ApplyWsTokenRequest, runtime: $dara.RuntimeOptions): Promise<ApplyWsTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyWsToken",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ApplyWsTokenResponse>(await this.callApi(params, req, runtime), new ApplyWsTokenResponse({}));
    } else {
      return $dara.cast<ApplyWsTokenResponse>(await this.execute(params, req, runtime), new ApplyWsTokenResponse({}));
    }

  }

  /**
   * 申领实时语音所需token
   * 
   * @param request - ApplyWsTokenRequest
   * @returns ApplyWsTokenResponse
   */
  async applyWsToken(request: ApplyWsTokenRequest): Promise<ApplyWsTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyWsTokenWithOptions(request, runtime);
  }

  /**
   * @param request - AssignReviewerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignReviewerResponse
   */
  async assignReviewerWithOptions(request: AssignReviewerRequest, runtime: $dara.RuntimeOptions): Promise<AssignReviewerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignReviewer",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AssignReviewerResponse>(await this.callApi(params, req, runtime), new AssignReviewerResponse({}));
    } else {
      return $dara.cast<AssignReviewerResponse>(await this.execute(params, req, runtime), new AssignReviewerResponse({}));
    }

  }

  /**
   * @param request - AssignReviewerRequest
   * @returns AssignReviewerResponse
   */
  async assignReviewer(request: AssignReviewerRequest): Promise<AssignReviewerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignReviewerWithOptions(request, runtime);
  }

  /**
   * 会话组批量分配
   * 
   * @deprecated OpenAPI AssignReviewerBySessionGroup is deprecated
   * 
   * @param request - AssignReviewerBySessionGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignReviewerBySessionGroupResponse
   */
  // Deprecated
  async assignReviewerBySessionGroupWithOptions(request: AssignReviewerBySessionGroupRequest, runtime: $dara.RuntimeOptions): Promise<AssignReviewerBySessionGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignReviewerBySessionGroup",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AssignReviewerBySessionGroupResponse>(await this.callApi(params, req, runtime), new AssignReviewerBySessionGroupResponse({}));
    } else {
      return $dara.cast<AssignReviewerBySessionGroupResponse>(await this.execute(params, req, runtime), new AssignReviewerBySessionGroupResponse({}));
    }

  }

  /**
   * 会话组批量分配
   * 
   * @deprecated OpenAPI AssignReviewerBySessionGroup is deprecated
   * 
   * @param request - AssignReviewerBySessionGroupRequest
   * @returns AssignReviewerBySessionGroupResponse
   */
  // Deprecated
  async assignReviewerBySessionGroup(request: AssignReviewerBySessionGroupRequest): Promise<AssignReviewerBySessionGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignReviewerBySessionGroupWithOptions(request, runtime);
  }

  /**
   * 批量复核
   * 
   * @param request - BatchSubmitReviewInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSubmitReviewInfoResponse
   */
  async batchSubmitReviewInfoWithOptions(request: BatchSubmitReviewInfoRequest, runtime: $dara.RuntimeOptions): Promise<BatchSubmitReviewInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSubmitReviewInfo",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BatchSubmitReviewInfoResponse>(await this.callApi(params, req, runtime), new BatchSubmitReviewInfoResponse({}));
    } else {
      return $dara.cast<BatchSubmitReviewInfoResponse>(await this.execute(params, req, runtime), new BatchSubmitReviewInfoResponse({}));
    }

  }

  /**
   * 批量复核
   * 
   * @param request - BatchSubmitReviewInfoRequest
   * @returns BatchSubmitReviewInfoResponse
   */
  async batchSubmitReviewInfo(request: BatchSubmitReviewInfoRequest): Promise<BatchSubmitReviewInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSubmitReviewInfoWithOptions(request, runtime);
  }

  /**
   * 创建热词模型
   * 
   * @param request - CreateAsrVocabRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAsrVocabResponse
   */
  async createAsrVocabWithOptions(request: CreateAsrVocabRequest, runtime: $dara.RuntimeOptions): Promise<CreateAsrVocabResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAsrVocabResponse>(await this.callApi(params, req, runtime), new CreateAsrVocabResponse({}));
    } else {
      return $dara.cast<CreateAsrVocabResponse>(await this.execute(params, req, runtime), new CreateAsrVocabResponse({}));
    }

  }

  /**
   * 创建热词模型
   * 
   * @param request - CreateAsrVocabRequest
   * @returns CreateAsrVocabResponse
   */
  async createAsrVocab(request: CreateAsrVocabRequest): Promise<CreateAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAsrVocabWithOptions(request, runtime);
  }

  /**
   * 创建质检方案中的质检维度
   * 
   * @param request - CreateCheckTypeToSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCheckTypeToSchemeResponse
   */
  async createCheckTypeToSchemeWithOptions(request: CreateCheckTypeToSchemeRequest, runtime: $dara.RuntimeOptions): Promise<CreateCheckTypeToSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCheckTypeToScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCheckTypeToSchemeResponse>(await this.callApi(params, req, runtime), new CreateCheckTypeToSchemeResponse({}));
    } else {
      return $dara.cast<CreateCheckTypeToSchemeResponse>(await this.execute(params, req, runtime), new CreateCheckTypeToSchemeResponse({}));
    }

  }

  /**
   * 创建质检方案中的质检维度
   * 
   * @param request - CreateCheckTypeToSchemeRequest
   * @returns CreateCheckTypeToSchemeResponse
   */
  async createCheckTypeToScheme(request: CreateCheckTypeToSchemeRequest): Promise<CreateCheckTypeToSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCheckTypeToSchemeWithOptions(request, runtime);
  }

  /**
   * 新增质检方案
   * 
   * @param request - CreateQualityCheckSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQualityCheckSchemeResponse
   */
  async createQualityCheckSchemeWithOptions(request: CreateQualityCheckSchemeRequest, runtime: $dara.RuntimeOptions): Promise<CreateQualityCheckSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new CreateQualityCheckSchemeResponse({}));
    } else {
      return $dara.cast<CreateQualityCheckSchemeResponse>(await this.execute(params, req, runtime), new CreateQualityCheckSchemeResponse({}));
    }

  }

  /**
   * 新增质检方案
   * 
   * @param request - CreateQualityCheckSchemeRequest
   * @returns CreateQualityCheckSchemeResponse
   */
  async createQualityCheckScheme(request: CreateQualityCheckSchemeRequest): Promise<CreateQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * 新建质检任务
   * 
   * @param request - CreateSchemeTaskConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSchemeTaskConfigResponse
   */
  async createSchemeTaskConfigWithOptions(request: CreateSchemeTaskConfigRequest, runtime: $dara.RuntimeOptions): Promise<CreateSchemeTaskConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new CreateSchemeTaskConfigResponse({}));
    } else {
      return $dara.cast<CreateSchemeTaskConfigResponse>(await this.execute(params, req, runtime), new CreateSchemeTaskConfigResponse({}));
    }

  }

  /**
   * 新建质检任务
   * 
   * @param request - CreateSchemeTaskConfigRequest
   * @returns CreateSchemeTaskConfigResponse
   */
  async createSchemeTaskConfig(request: CreateSchemeTaskConfigRequest): Promise<CreateSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSkillGroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillGroupConfigResponse
   */
  async createSkillGroupConfigWithOptions(request: CreateSkillGroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<CreateSkillGroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new CreateSkillGroupConfigResponse({}));
    } else {
      return $dara.cast<CreateSkillGroupConfigResponse>(await this.execute(params, req, runtime), new CreateSkillGroupConfigResponse({}));
    }

  }

  /**
   * @param request - CreateSkillGroupConfigRequest
   * @returns CreateSkillGroupConfigResponse
   */
  async createSkillGroupConfig(request: CreateSkillGroupConfigRequest): Promise<CreateSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillGroupConfigWithOptions(request, runtime);
  }

  /**
   * @param request - CreateTaskAssignRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskAssignRuleResponse
   */
  async createTaskAssignRuleWithOptions(request: CreateTaskAssignRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateTaskAssignRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTaskAssignRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTaskAssignRuleResponse>(await this.callApi(params, req, runtime), new CreateTaskAssignRuleResponse({}));
    } else {
      return $dara.cast<CreateTaskAssignRuleResponse>(await this.execute(params, req, runtime), new CreateTaskAssignRuleResponse({}));
    }

  }

  /**
   * @param request - CreateTaskAssignRuleRequest
   * @returns CreateTaskAssignRuleResponse
   */
  async createTaskAssignRule(request: CreateTaskAssignRuleRequest): Promise<CreateTaskAssignRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTaskAssignRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateWarningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWarningConfigResponse
   */
  async createWarningConfigWithOptions(request: CreateWarningConfigRequest, runtime: $dara.RuntimeOptions): Promise<CreateWarningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateWarningConfigResponse>(await this.callApi(params, req, runtime), new CreateWarningConfigResponse({}));
    } else {
      return $dara.cast<CreateWarningConfigResponse>(await this.execute(params, req, runtime), new CreateWarningConfigResponse({}));
    }

  }

  /**
   * @param request - CreateWarningConfigRequest
   * @returns CreateWarningConfigResponse
   */
  async createWarningConfig(request: CreateWarningConfigRequest): Promise<CreateWarningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWarningConfigWithOptions(request, runtime);
  }

  /**
   * 预警策略-新增
   * 
   * @param request - CreateWarningStrategyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWarningStrategyConfigResponse
   */
  async createWarningStrategyConfigWithOptions(request: CreateWarningStrategyConfigRequest, runtime: $dara.RuntimeOptions): Promise<CreateWarningStrategyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new CreateWarningStrategyConfigResponse({}));
    } else {
      return $dara.cast<CreateWarningStrategyConfigResponse>(await this.execute(params, req, runtime), new CreateWarningStrategyConfigResponse({}));
    }

  }

  /**
   * 预警策略-新增
   * 
   * @param request - CreateWarningStrategyConfigRequest
   * @returns CreateWarningStrategyConfigResponse
   */
  async createWarningStrategyConfig(request: CreateWarningStrategyConfigRequest): Promise<CreateWarningStrategyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWarningStrategyConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DelRuleCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DelRuleCategoryResponse
   */
  async delRuleCategoryWithOptions(request: DelRuleCategoryRequest, runtime: $dara.RuntimeOptions): Promise<DelRuleCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DelRuleCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DelRuleCategoryResponse>(await this.callApi(params, req, runtime), new DelRuleCategoryResponse({}));
    } else {
      return $dara.cast<DelRuleCategoryResponse>(await this.execute(params, req, runtime), new DelRuleCategoryResponse({}));
    }

  }

  /**
   * @param request - DelRuleCategoryRequest
   * @returns DelRuleCategoryResponse
   */
  async delRuleCategory(request: DelRuleCategoryRequest): Promise<DelRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delRuleCategoryWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAsrVocabRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAsrVocabResponse
   */
  async deleteAsrVocabWithOptions(request: DeleteAsrVocabRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAsrVocabResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAsrVocabResponse>(await this.callApi(params, req, runtime), new DeleteAsrVocabResponse({}));
    } else {
      return $dara.cast<DeleteAsrVocabResponse>(await this.execute(params, req, runtime), new DeleteAsrVocabResponse({}));
    }

  }

  /**
   * @param request - DeleteAsrVocabRequest
   * @returns DeleteAsrVocabResponse
   */
  async deleteAsrVocab(request: DeleteAsrVocabRequest): Promise<DeleteAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAsrVocabWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteBusinessCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBusinessCategoryResponse
   */
  async deleteBusinessCategoryWithOptions(request: DeleteBusinessCategoryRequest, runtime: $dara.RuntimeOptions): Promise<DeleteBusinessCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBusinessCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteBusinessCategoryResponse>(await this.callApi(params, req, runtime), new DeleteBusinessCategoryResponse({}));
    } else {
      return $dara.cast<DeleteBusinessCategoryResponse>(await this.execute(params, req, runtime), new DeleteBusinessCategoryResponse({}));
    }

  }

  /**
   * @param request - DeleteBusinessCategoryRequest
   * @returns DeleteBusinessCategoryResponse
   */
  async deleteBusinessCategory(request: DeleteBusinessCategoryRequest): Promise<DeleteBusinessCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBusinessCategoryWithOptions(request, runtime);
  }

  /**
   * 删除质检唯独
   * 
   * @param request - DeleteCheckTypeToSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCheckTypeToSchemeResponse
   */
  async deleteCheckTypeToSchemeWithOptions(request: DeleteCheckTypeToSchemeRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCheckTypeToSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCheckTypeToScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCheckTypeToSchemeResponse>(await this.callApi(params, req, runtime), new DeleteCheckTypeToSchemeResponse({}));
    } else {
      return $dara.cast<DeleteCheckTypeToSchemeResponse>(await this.execute(params, req, runtime), new DeleteCheckTypeToSchemeResponse({}));
    }

  }

  /**
   * 删除质检唯独
   * 
   * @param request - DeleteCheckTypeToSchemeRequest
   * @returns DeleteCheckTypeToSchemeResponse
   */
  async deleteCheckTypeToScheme(request: DeleteCheckTypeToSchemeRequest): Promise<DeleteCheckTypeToSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCheckTypeToSchemeWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteCustomizationConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomizationConfigResponse
   */
  async deleteCustomizationConfigWithOptions(request: DeleteCustomizationConfigRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCustomizationConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomizationConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCustomizationConfigResponse>(await this.callApi(params, req, runtime), new DeleteCustomizationConfigResponse({}));
    } else {
      return $dara.cast<DeleteCustomizationConfigResponse>(await this.execute(params, req, runtime), new DeleteCustomizationConfigResponse({}));
    }

  }

  /**
   * @param request - DeleteCustomizationConfigRequest
   * @returns DeleteCustomizationConfigResponse
   */
  async deleteCustomizationConfig(request: DeleteCustomizationConfigRequest): Promise<DeleteCustomizationConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomizationConfigWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DeleteDataSet is deprecated
   * 
   * @param request - DeleteDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSetResponse
   */
  // Deprecated
  async deleteDataSetWithOptions(request: DeleteDataSetRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDataSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSet",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDataSetResponse>(await this.callApi(params, req, runtime), new DeleteDataSetResponse({}));
    } else {
      return $dara.cast<DeleteDataSetResponse>(await this.execute(params, req, runtime), new DeleteDataSetResponse({}));
    }

  }

  /**
   * @deprecated OpenAPI DeleteDataSet is deprecated
   * 
   * @param request - DeleteDataSetRequest
   * @returns DeleteDataSetResponse
   */
  // Deprecated
  async deleteDataSet(request: DeleteDataSetRequest): Promise<DeleteDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSetWithOptions(request, runtime);
  }

  /**
   * @param request - DeletePrecisionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrecisionTaskResponse
   */
  async deletePrecisionTaskWithOptions(request: DeletePrecisionTaskRequest, runtime: $dara.RuntimeOptions): Promise<DeletePrecisionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeletePrecisionTaskResponse>(await this.callApi(params, req, runtime), new DeletePrecisionTaskResponse({}));
    } else {
      return $dara.cast<DeletePrecisionTaskResponse>(await this.execute(params, req, runtime), new DeletePrecisionTaskResponse({}));
    }

  }

  /**
   * @param request - DeletePrecisionTaskRequest
   * @returns DeletePrecisionTaskResponse
   */
  async deletePrecisionTask(request: DeletePrecisionTaskRequest): Promise<DeletePrecisionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrecisionTaskWithOptions(request, runtime);
  }

  /**
   * 删除质检方案
   * 
   * @param request - DeleteQualityCheckSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityCheckSchemeResponse
   */
  async deleteQualityCheckSchemeWithOptions(request: DeleteQualityCheckSchemeRequest, runtime: $dara.RuntimeOptions): Promise<DeleteQualityCheckSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new DeleteQualityCheckSchemeResponse({}));
    } else {
      return $dara.cast<DeleteQualityCheckSchemeResponse>(await this.execute(params, req, runtime), new DeleteQualityCheckSchemeResponse({}));
    }

  }

  /**
   * 删除质检方案
   * 
   * @param request - DeleteQualityCheckSchemeRequest
   * @returns DeleteQualityCheckSchemeResponse
   */
  async deleteQualityCheckScheme(request: DeleteQualityCheckSchemeRequest): Promise<DeleteQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * 删除规则
   * 
   * @deprecated OpenAPI DeleteRule is deprecated, please use Qualitycheck::2019-01-15::DeleteRuleV4 instead.
   * 
   * @param request - DeleteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRuleResponse
   */
  // Deprecated
  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.forceDelete)) {
      body["ForceDelete"] = request.forceDelete;
    }

    if (!$dara.isNull(request.isSchemeData)) {
      body["IsSchemeData"] = request.isSchemeData;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRuleResponse>(await this.callApi(params, req, runtime), new DeleteRuleResponse({}));
    } else {
      return $dara.cast<DeleteRuleResponse>(await this.execute(params, req, runtime), new DeleteRuleResponse({}));
    }

  }

  /**
   * 删除规则
   * 
   * @deprecated OpenAPI DeleteRule is deprecated, please use Qualitycheck::2019-01-15::DeleteRuleV4 instead.
   * 
   * @param request - DeleteRuleRequest
   * @returns DeleteRuleResponse
   */
  // Deprecated
  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  /**
   * V4删除规则
   * 
   * @param request - DeleteRuleV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRuleV4Response
   */
  async deleteRuleV4WithOptions(request: DeleteRuleV4Request, runtime: $dara.RuntimeOptions): Promise<DeleteRuleV4Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.forceDelete)) {
      body["ForceDelete"] = request.forceDelete;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRuleV4Response>(await this.callApi(params, req, runtime), new DeleteRuleV4Response({}));
    } else {
      return $dara.cast<DeleteRuleV4Response>(await this.execute(params, req, runtime), new DeleteRuleV4Response({}));
    }

  }

  /**
   * V4删除规则
   * 
   * @param request - DeleteRuleV4Request
   * @returns DeleteRuleV4Response
   */
  async deleteRuleV4(request: DeleteRuleV4Request): Promise<DeleteRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRuleV4WithOptions(request, runtime);
  }

  /**
   * 删除质检任务
   * 
   * @param request - DeleteSchemeTaskConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSchemeTaskConfigResponse
   */
  async deleteSchemeTaskConfigWithOptions(request: DeleteSchemeTaskConfigRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSchemeTaskConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new DeleteSchemeTaskConfigResponse({}));
    } else {
      return $dara.cast<DeleteSchemeTaskConfigResponse>(await this.execute(params, req, runtime), new DeleteSchemeTaskConfigResponse({}));
    }

  }

  /**
   * 删除质检任务
   * 
   * @param request - DeleteSchemeTaskConfigRequest
   * @returns DeleteSchemeTaskConfigResponse
   */
  async deleteSchemeTaskConfig(request: DeleteSchemeTaskConfigRequest): Promise<DeleteSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteSkillGroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSkillGroupConfigResponse
   */
  async deleteSkillGroupConfigWithOptions(request: DeleteSkillGroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSkillGroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new DeleteSkillGroupConfigResponse({}));
    } else {
      return $dara.cast<DeleteSkillGroupConfigResponse>(await this.execute(params, req, runtime), new DeleteSkillGroupConfigResponse({}));
    }

  }

  /**
   * @param request - DeleteSkillGroupConfigRequest
   * @returns DeleteSkillGroupConfigResponse
   */
  async deleteSkillGroupConfig(request: DeleteSkillGroupConfigRequest): Promise<DeleteSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillGroupConfigWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteTaskAssignRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTaskAssignRuleResponse
   */
  async deleteTaskAssignRuleWithOptions(request: DeleteTaskAssignRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteTaskAssignRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTaskAssignRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteTaskAssignRuleResponse>(await this.callApi(params, req, runtime), new DeleteTaskAssignRuleResponse({}));
    } else {
      return $dara.cast<DeleteTaskAssignRuleResponse>(await this.execute(params, req, runtime), new DeleteTaskAssignRuleResponse({}));
    }

  }

  /**
   * @param request - DeleteTaskAssignRuleRequest
   * @returns DeleteTaskAssignRuleResponse
   */
  async deleteTaskAssignRule(request: DeleteTaskAssignRuleRequest): Promise<DeleteTaskAssignRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTaskAssignRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteWarningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWarningConfigResponse
   */
  async deleteWarningConfigWithOptions(request: DeleteWarningConfigRequest, runtime: $dara.RuntimeOptions): Promise<DeleteWarningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteWarningConfigResponse>(await this.callApi(params, req, runtime), new DeleteWarningConfigResponse({}));
    } else {
      return $dara.cast<DeleteWarningConfigResponse>(await this.execute(params, req, runtime), new DeleteWarningConfigResponse({}));
    }

  }

  /**
   * @param request - DeleteWarningConfigRequest
   * @returns DeleteWarningConfigResponse
   */
  async deleteWarningConfig(request: DeleteWarningConfigRequest): Promise<DeleteWarningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWarningConfigWithOptions(request, runtime);
  }

  /**
   * 预警策略-删除
   * 
   * @param request - DeleteWarningStrategyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWarningStrategyConfigResponse
   */
  async deleteWarningStrategyConfigWithOptions(request: DeleteWarningStrategyConfigRequest, runtime: $dara.RuntimeOptions): Promise<DeleteWarningStrategyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new DeleteWarningStrategyConfigResponse({}));
    } else {
      return $dara.cast<DeleteWarningStrategyConfigResponse>(await this.execute(params, req, runtime), new DeleteWarningStrategyConfigResponse({}));
    }

  }

  /**
   * 预警策略-删除
   * 
   * @param request - DeleteWarningStrategyConfigRequest
   * @returns DeleteWarningStrategyConfigResponse
   */
  async deleteWarningStrategyConfig(request: DeleteWarningStrategyConfigRequest): Promise<DeleteWarningStrategyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWarningStrategyConfigWithOptions(request, runtime);
  }

  /**
   * @param request - GetAsrVocabRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsrVocabResponse
   */
  async getAsrVocabWithOptions(request: GetAsrVocabRequest, runtime: $dara.RuntimeOptions): Promise<GetAsrVocabResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAsrVocabResponse>(await this.callApi(params, req, runtime), new GetAsrVocabResponse({}));
    } else {
      return $dara.cast<GetAsrVocabResponse>(await this.execute(params, req, runtime), new GetAsrVocabResponse({}));
    }

  }

  /**
   * @param request - GetAsrVocabRequest
   * @returns GetAsrVocabResponse
   */
  async getAsrVocab(request: GetAsrVocabRequest): Promise<GetAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsrVocabWithOptions(request, runtime);
  }

  /**
   * @param request - GetBusinessCategoryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBusinessCategoryListResponse
   */
  async getBusinessCategoryListWithOptions(request: GetBusinessCategoryListRequest, runtime: $dara.RuntimeOptions): Promise<GetBusinessCategoryListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBusinessCategoryList",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetBusinessCategoryListResponse>(await this.callApi(params, req, runtime), new GetBusinessCategoryListResponse({}));
    } else {
      return $dara.cast<GetBusinessCategoryListResponse>(await this.execute(params, req, runtime), new GetBusinessCategoryListResponse({}));
    }

  }

  /**
   * @param request - GetBusinessCategoryListRequest
   * @returns GetBusinessCategoryListResponse
   */
  async getBusinessCategoryList(request: GetBusinessCategoryListRequest): Promise<GetBusinessCategoryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBusinessCategoryListWithOptions(request, runtime);
  }

  /**
   * 获取语音模型列表
   * 
   * @param request - GetCustomizationConfigListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomizationConfigListResponse
   */
  async getCustomizationConfigListWithOptions(request: GetCustomizationConfigListRequest, runtime: $dara.RuntimeOptions): Promise<GetCustomizationConfigListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomizationConfigList",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCustomizationConfigListResponse>(await this.callApi(params, req, runtime), new GetCustomizationConfigListResponse({}));
    } else {
      return $dara.cast<GetCustomizationConfigListResponse>(await this.execute(params, req, runtime), new GetCustomizationConfigListResponse({}));
    }

  }

  /**
   * 获取语音模型列表
   * 
   * @param request - GetCustomizationConfigListRequest
   * @returns GetCustomizationConfigListResponse
   */
  async getCustomizationConfigList(request: GetCustomizationConfigListRequest): Promise<GetCustomizationConfigListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomizationConfigListWithOptions(request, runtime);
  }

  /**
   * @param request - GetNextResultToVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNextResultToVerifyResponse
   */
  async getNextResultToVerifyWithOptions(request: GetNextResultToVerifyRequest, runtime: $dara.RuntimeOptions): Promise<GetNextResultToVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNextResultToVerify",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetNextResultToVerifyResponse>(await this.callApi(params, req, runtime), new GetNextResultToVerifyResponse({}));
    } else {
      return $dara.cast<GetNextResultToVerifyResponse>(await this.execute(params, req, runtime), new GetNextResultToVerifyResponse({}));
    }

  }

  /**
   * @param request - GetNextResultToVerifyRequest
   * @returns GetNextResultToVerifyResponse
   */
  async getNextResultToVerify(request: GetNextResultToVerifyRequest): Promise<GetNextResultToVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNextResultToVerifyWithOptions(request, runtime);
  }

  /**
   * @param request - GetPrecisionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrecisionTaskResponse
   */
  async getPrecisionTaskWithOptions(request: GetPrecisionTaskRequest, runtime: $dara.RuntimeOptions): Promise<GetPrecisionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPrecisionTaskResponse>(await this.callApi(params, req, runtime), new GetPrecisionTaskResponse({}));
    } else {
      return $dara.cast<GetPrecisionTaskResponse>(await this.execute(params, req, runtime), new GetPrecisionTaskResponse({}));
    }

  }

  /**
   * @param request - GetPrecisionTaskRequest
   * @returns GetPrecisionTaskResponse
   */
  async getPrecisionTask(request: GetPrecisionTaskRequest): Promise<GetPrecisionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrecisionTaskWithOptions(request, runtime);
  }

  /**
   * 获取质检方案
   * 
   * @param request - GetQualityCheckSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityCheckSchemeResponse
   */
  async getQualityCheckSchemeWithOptions(request: GetQualityCheckSchemeRequest, runtime: $dara.RuntimeOptions): Promise<GetQualityCheckSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new GetQualityCheckSchemeResponse({}));
    } else {
      return $dara.cast<GetQualityCheckSchemeResponse>(await this.execute(params, req, runtime), new GetQualityCheckSchemeResponse({}));
    }

  }

  /**
   * 获取质检方案
   * 
   * @param request - GetQualityCheckSchemeRequest
   * @returns GetQualityCheckSchemeResponse
   */
  async getQualityCheckScheme(request: GetQualityCheckSchemeRequest): Promise<GetQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * @param request - GetResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResultResponse
   */
  async getResultWithOptions(request: GetResultRequest, runtime: $dara.RuntimeOptions): Promise<GetResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetResultResponse>(await this.callApi(params, req, runtime), new GetResultResponse({}));
    } else {
      return $dara.cast<GetResultResponse>(await this.execute(params, req, runtime), new GetResultResponse({}));
    }

  }

  /**
   * @param request - GetResultRequest
   * @returns GetResultResponse
   */
  async getResult(request: GetResultRequest): Promise<GetResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResultWithOptions(request, runtime);
  }

  /**
   * @param request - GetResultToReviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResultToReviewResponse
   */
  async getResultToReviewWithOptions(request: GetResultToReviewRequest, runtime: $dara.RuntimeOptions): Promise<GetResultToReviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResultToReview",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetResultToReviewResponse>(await this.callApi(params, req, runtime), new GetResultToReviewResponse({}));
    } else {
      return $dara.cast<GetResultToReviewResponse>(await this.execute(params, req, runtime), new GetResultToReviewResponse({}));
    }

  }

  /**
   * @param request - GetResultToReviewRequest
   * @returns GetResultToReviewResponse
   */
  async getResultToReview(request: GetResultToReviewRequest): Promise<GetResultToReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResultToReviewWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI GetRule is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleResponse
   */
  // Deprecated
  async getRuleWithOptions(request: GetRuleRequest, runtime: $dara.RuntimeOptions): Promise<GetRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRuleResponse>(await this.callApi(params, req, runtime), new GetRuleResponse({}));
    } else {
      return $dara.cast<GetRuleResponse>(await this.execute(params, req, runtime), new GetRuleResponse({}));
    }

  }

  /**
   * @deprecated OpenAPI GetRule is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleRequest
   * @returns GetRuleResponse
   */
  // Deprecated
  async getRule(request: GetRuleRequest): Promise<GetRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  /**
   * 获取规则
   * 
   * @deprecated OpenAPI GetRuleById is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleByIdResponse
   */
  // Deprecated
  async getRuleByIdWithOptions(request: GetRuleByIdRequest, runtime: $dara.RuntimeOptions): Promise<GetRuleByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRuleById",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRuleByIdResponse>(await this.callApi(params, req, runtime), new GetRuleByIdResponse({}));
    } else {
      return $dara.cast<GetRuleByIdResponse>(await this.execute(params, req, runtime), new GetRuleByIdResponse({}));
    }

  }

  /**
   * 获取规则
   * 
   * @deprecated OpenAPI GetRuleById is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleByIdRequest
   * @returns GetRuleByIdResponse
   */
  // Deprecated
  async getRuleById(request: GetRuleByIdRequest): Promise<GetRuleByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleByIdWithOptions(request, runtime);
  }

  /**
   * @param request - GetRuleCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleCategoryResponse
   */
  async getRuleCategoryWithOptions(request: GetRuleCategoryRequest, runtime: $dara.RuntimeOptions): Promise<GetRuleCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRuleCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRuleCategoryResponse>(await this.callApi(params, req, runtime), new GetRuleCategoryResponse({}));
    } else {
      return $dara.cast<GetRuleCategoryResponse>(await this.execute(params, req, runtime), new GetRuleCategoryResponse({}));
    }

  }

  /**
   * @param request - GetRuleCategoryRequest
   * @returns GetRuleCategoryResponse
   */
  async getRuleCategory(request: GetRuleCategoryRequest): Promise<GetRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleCategoryWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI GetRuleDetail is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleDetailResponse
   */
  // Deprecated
  async getRuleDetailWithOptions(request: GetRuleDetailRequest, runtime: $dara.RuntimeOptions): Promise<GetRuleDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRuleDetail",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRuleDetailResponse>(await this.callApi(params, req, runtime), new GetRuleDetailResponse({}));
    } else {
      return $dara.cast<GetRuleDetailResponse>(await this.execute(params, req, runtime), new GetRuleDetailResponse({}));
    }

  }

  /**
   * @deprecated OpenAPI GetRuleDetail is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleDetailRequest
   * @returns GetRuleDetailResponse
   */
  // Deprecated
  async getRuleDetail(request: GetRuleDetailRequest): Promise<GetRuleDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleDetailWithOptions(request, runtime);
  }

  /**
   * V4获取规则
   * 
   * @param request - GetRuleV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleV4Response
   */
  async getRuleV4WithOptions(request: GetRuleV4Request, runtime: $dara.RuntimeOptions): Promise<GetRuleV4Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRuleV4Response>(await this.callApi(params, req, runtime), new GetRuleV4Response({}));
    } else {
      return $dara.cast<GetRuleV4Response>(await this.execute(params, req, runtime), new GetRuleV4Response({}));
    }

  }

  /**
   * V4获取规则
   * 
   * @param request - GetRuleV4Request
   * @returns GetRuleV4Response
   */
  async getRuleV4(request: GetRuleV4Request): Promise<GetRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleV4WithOptions(request, runtime);
  }

  /**
   * 获得规则列表
   * 
   * @param request - GetRulesCountListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRulesCountListResponse
   */
  async getRulesCountListWithOptions(request: GetRulesCountListRequest, runtime: $dara.RuntimeOptions): Promise<GetRulesCountListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!$dara.isNull(request.businessRange)) {
      body["BusinessRange"] = request.businessRange;
    }

    if (!$dara.isNull(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.countTotal)) {
      body["CountTotal"] = request.countTotal;
    }

    if (!$dara.isNull(request.createEmpid)) {
      body["CreateEmpid"] = request.createEmpid;
    }

    if (!$dara.isNull(request.createUserId)) {
      body["CreateUserId"] = request.createUserId;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lastUpdateEmpid)) {
      body["LastUpdateEmpid"] = request.lastUpdateEmpid;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.requireInfos)) {
      body["RequireInfos"] = request.requireInfos;
    }

    if (!$dara.isNull(request.rid)) {
      body["Rid"] = request.rid;
    }

    if (!$dara.isNull(request.ruleIdOrRuleName)) {
      body["RuleIdOrRuleName"] = request.ruleIdOrRuleName;
    }

    if (!$dara.isNull(request.ruleScoreSingleType)) {
      body["RuleScoreSingleType"] = request.ruleScoreSingleType;
    }

    if (!$dara.isNull(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.schemeId)) {
      body["SchemeId"] = request.schemeId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.typeName)) {
      body["TypeName"] = request.typeName;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      body["UpdateEndTime"] = request.updateEndTime;
    }

    if (!$dara.isNull(request.updateStartTime)) {
      body["UpdateStartTime"] = request.updateStartTime;
    }

    if (!$dara.isNull(request.updateUserId)) {
      body["UpdateUserId"] = request.updateUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRulesCountList",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRulesCountListResponse>(await this.callApi(params, req, runtime), new GetRulesCountListResponse({}));
    } else {
      return $dara.cast<GetRulesCountListResponse>(await this.execute(params, req, runtime), new GetRulesCountListResponse({}));
    }

  }

  /**
   * 获得规则列表
   * 
   * @param request - GetRulesCountListRequest
   * @returns GetRulesCountListResponse
   */
  async getRulesCountList(request: GetRulesCountListRequest): Promise<GetRulesCountListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRulesCountListWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI GetScoreInfo is deprecated
   * 
   * @param request - GetScoreInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScoreInfoResponse
   */
  // Deprecated
  async getScoreInfoWithOptions(request: GetScoreInfoRequest, runtime: $dara.RuntimeOptions): Promise<GetScoreInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScoreInfo",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetScoreInfoResponse>(await this.callApi(params, req, runtime), new GetScoreInfoResponse({}));
    } else {
      return $dara.cast<GetScoreInfoResponse>(await this.execute(params, req, runtime), new GetScoreInfoResponse({}));
    }

  }

  /**
   * @deprecated OpenAPI GetScoreInfo is deprecated
   * 
   * @param request - GetScoreInfoRequest
   * @returns GetScoreInfoResponse
   */
  // Deprecated
  async getScoreInfo(request: GetScoreInfoRequest): Promise<GetScoreInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScoreInfoWithOptions(request, runtime);
  }

  /**
   * @param request - GetSkillGroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupConfigResponse
   */
  async getSkillGroupConfigWithOptions(request: GetSkillGroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<GetSkillGroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new GetSkillGroupConfigResponse({}));
    } else {
      return $dara.cast<GetSkillGroupConfigResponse>(await this.execute(params, req, runtime), new GetSkillGroupConfigResponse({}));
    }

  }

  /**
   * @param request - GetSkillGroupConfigRequest
   * @returns GetSkillGroupConfigResponse
   */
  async getSkillGroupConfig(request: GetSkillGroupConfigRequest): Promise<GetSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupConfigWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI GetSyncResult is deprecated, please use Qualitycheck::2019-01-15::GetResult instead.
   * 
   * @param request - GetSyncResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSyncResultResponse
   */
  // Deprecated
  async getSyncResultWithOptions(request: GetSyncResultRequest, runtime: $dara.RuntimeOptions): Promise<GetSyncResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSyncResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSyncResultResponse>(await this.callApi(params, req, runtime), new GetSyncResultResponse({}));
    } else {
      return $dara.cast<GetSyncResultResponse>(await this.execute(params, req, runtime), new GetSyncResultResponse({}));
    }

  }

  /**
   * @deprecated OpenAPI GetSyncResult is deprecated, please use Qualitycheck::2019-01-15::GetResult instead.
   * 
   * @param request - GetSyncResultRequest
   * @returns GetSyncResultResponse
   */
  // Deprecated
  async getSyncResult(request: GetSyncResultRequest): Promise<GetSyncResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSyncResultWithOptions(request, runtime);
  }

  /**
   * 预警策略-详情
   * 
   * @param request - GetWarningStrategyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWarningStrategyConfigResponse
   */
  async getWarningStrategyConfigWithOptions(request: GetWarningStrategyConfigRequest, runtime: $dara.RuntimeOptions): Promise<GetWarningStrategyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new GetWarningStrategyConfigResponse({}));
    } else {
      return $dara.cast<GetWarningStrategyConfigResponse>(await this.execute(params, req, runtime), new GetWarningStrategyConfigResponse({}));
    }

  }

  /**
   * 预警策略-详情
   * 
   * @param request - GetWarningStrategyConfigRequest
   * @returns GetWarningStrategyConfigResponse
   */
  async getWarningStrategyConfig(request: GetWarningStrategyConfigRequest): Promise<GetWarningStrategyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWarningStrategyConfigWithOptions(request, runtime);
  }

  /**
   * @param request - HandleComplaintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HandleComplaintResponse
   */
  async handleComplaintWithOptions(request: HandleComplaintRequest, runtime: $dara.RuntimeOptions): Promise<HandleComplaintResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HandleComplaint",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<HandleComplaintResponse>(await this.callApi(params, req, runtime), new HandleComplaintResponse({}));
    } else {
      return $dara.cast<HandleComplaintResponse>(await this.execute(params, req, runtime), new HandleComplaintResponse({}));
    }

  }

  /**
   * @param request - HandleComplaintRequest
   * @returns HandleComplaintResponse
   */
  async handleComplaint(request: HandleComplaintRequest): Promise<HandleComplaintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.handleComplaintWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI InvalidRule is deprecated, please use Qualitycheck::2019-01-15::DeleteRuleV4 instead.
   * 
   * @param request - InvalidRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvalidRuleResponse
   */
  // Deprecated
  async invalidRuleWithOptions(request: InvalidRuleRequest, runtime: $dara.RuntimeOptions): Promise<InvalidRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvalidRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InvalidRuleResponse>(await this.callApi(params, req, runtime), new InvalidRuleResponse({}));
    } else {
      return $dara.cast<InvalidRuleResponse>(await this.execute(params, req, runtime), new InvalidRuleResponse({}));
    }

  }

  /**
   * @deprecated OpenAPI InvalidRule is deprecated, please use Qualitycheck::2019-01-15::DeleteRuleV4 instead.
   * 
   * @param request - InvalidRuleRequest
   * @returns InvalidRuleResponse
   */
  // Deprecated
  async invalidRule(request: InvalidRuleRequest): Promise<InvalidRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.invalidRuleWithOptions(request, runtime);
  }

  /**
   * 获取热词模型列表
   * 
   * @param request - ListAsrVocabRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsrVocabResponse
   */
  async listAsrVocabWithOptions(request: ListAsrVocabRequest, runtime: $dara.RuntimeOptions): Promise<ListAsrVocabResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAsrVocabResponse>(await this.callApi(params, req, runtime), new ListAsrVocabResponse({}));
    } else {
      return $dara.cast<ListAsrVocabResponse>(await this.execute(params, req, runtime), new ListAsrVocabResponse({}));
    }

  }

  /**
   * 获取热词模型列表
   * 
   * @param request - ListAsrVocabRequest
   * @returns ListAsrVocabResponse
   */
  async listAsrVocab(request: ListAsrVocabRequest): Promise<ListAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAsrVocabWithOptions(request, runtime);
  }

  /**
   * 获取数据集列表
   * 
   * @deprecated OpenAPI ListDataSet is deprecated
   * 
   * @param request - ListDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSetResponse
   */
  // Deprecated
  async listDataSetWithOptions(request: ListDataSetRequest, runtime: $dara.RuntimeOptions): Promise<ListDataSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSet",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDataSetResponse>(await this.callApi(params, req, runtime), new ListDataSetResponse({}));
    } else {
      return $dara.cast<ListDataSetResponse>(await this.execute(params, req, runtime), new ListDataSetResponse({}));
    }

  }

  /**
   * 获取数据集列表
   * 
   * @deprecated OpenAPI ListDataSet is deprecated
   * 
   * @param request - ListDataSetRequest
   * @returns ListDataSetResponse
   */
  // Deprecated
  async listDataSet(request: ListDataSetRequest): Promise<ListDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSetWithOptions(request, runtime);
  }

  /**
   * @param request - ListPrecisionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrecisionTaskResponse
   */
  async listPrecisionTaskWithOptions(request: ListPrecisionTaskRequest, runtime: $dara.RuntimeOptions): Promise<ListPrecisionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPrecisionTaskResponse>(await this.callApi(params, req, runtime), new ListPrecisionTaskResponse({}));
    } else {
      return $dara.cast<ListPrecisionTaskResponse>(await this.execute(params, req, runtime), new ListPrecisionTaskResponse({}));
    }

  }

  /**
   * @param request - ListPrecisionTaskRequest
   * @returns ListPrecisionTaskResponse
   */
  async listPrecisionTask(request: ListPrecisionTaskRequest): Promise<ListPrecisionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrecisionTaskWithOptions(request, runtime);
  }

  /**
   * 质检方案列表
   * 
   * @param request - ListQualityCheckSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQualityCheckSchemeResponse
   */
  async listQualityCheckSchemeWithOptions(request: ListQualityCheckSchemeRequest, runtime: $dara.RuntimeOptions): Promise<ListQualityCheckSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new ListQualityCheckSchemeResponse({}));
    } else {
      return $dara.cast<ListQualityCheckSchemeResponse>(await this.execute(params, req, runtime), new ListQualityCheckSchemeResponse({}));
    }

  }

  /**
   * 质检方案列表
   * 
   * @param request - ListQualityCheckSchemeRequest
   * @returns ListQualityCheckSchemeResponse
   */
  async listQualityCheckScheme(request: ListQualityCheckSchemeRequest): Promise<ListQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI ListRules is deprecated, please use Qualitycheck::2019-01-15::ListRulesV4 instead.
   * 
   * @param request - ListRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRulesResponse
   */
  // Deprecated
  async listRulesWithOptions(request: ListRulesRequest, runtime: $dara.RuntimeOptions): Promise<ListRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRules",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRulesResponse>(await this.callApi(params, req, runtime), new ListRulesResponse({}));
    } else {
      return $dara.cast<ListRulesResponse>(await this.execute(params, req, runtime), new ListRulesResponse({}));
    }

  }

  /**
   * @deprecated OpenAPI ListRules is deprecated, please use Qualitycheck::2019-01-15::ListRulesV4 instead.
   * 
   * @param request - ListRulesRequest
   * @returns ListRulesResponse
   */
  // Deprecated
  async listRules(request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  /**
   * V4获得规则列表
   * 
   * @param request - ListRulesV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRulesV4Response
   */
  async listRulesV4WithOptions(request: ListRulesV4Request, runtime: $dara.RuntimeOptions): Promise<ListRulesV4Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!$dara.isNull(request.businessRange)) {
      body["BusinessRange"] = request.businessRange;
    }

    if (!$dara.isNull(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.countTotal)) {
      body["CountTotal"] = request.countTotal;
    }

    if (!$dara.isNull(request.createEmpid)) {
      body["CreateEmpid"] = request.createEmpid;
    }

    if (!$dara.isNull(request.createUserId)) {
      body["CreateUserId"] = request.createUserId;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lastUpdateEmpid)) {
      body["LastUpdateEmpid"] = request.lastUpdateEmpid;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.requireInfos)) {
      body["RequireInfos"] = request.requireInfos;
    }

    if (!$dara.isNull(request.rid)) {
      body["Rid"] = request.rid;
    }

    if (!$dara.isNull(request.ruleIdOrRuleName)) {
      body["RuleIdOrRuleName"] = request.ruleIdOrRuleName;
    }

    if (!$dara.isNull(request.ruleScoreSingleType)) {
      body["RuleScoreSingleType"] = request.ruleScoreSingleType;
    }

    if (!$dara.isNull(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.schemeId)) {
      body["SchemeId"] = request.schemeId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.typeName)) {
      body["TypeName"] = request.typeName;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      body["UpdateEndTime"] = request.updateEndTime;
    }

    if (!$dara.isNull(request.updateStartTime)) {
      body["UpdateStartTime"] = request.updateStartTime;
    }

    if (!$dara.isNull(request.updateUserId)) {
      body["UpdateUserId"] = request.updateUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRulesV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRulesV4Response>(await this.callApi(params, req, runtime), new ListRulesV4Response({}));
    } else {
      return $dara.cast<ListRulesV4Response>(await this.execute(params, req, runtime), new ListRulesV4Response({}));
    }

  }

  /**
   * V4获得规则列表
   * 
   * @param request - ListRulesV4Request
   * @returns ListRulesV4Response
   */
  async listRulesV4(request: ListRulesV4Request): Promise<ListRulesV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRulesV4WithOptions(request, runtime);
  }

  /**
   * 获取质检任务列表
   * 
   * @param request - ListSchemeTaskConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSchemeTaskConfigResponse
   */
  async listSchemeTaskConfigWithOptions(request: ListSchemeTaskConfigRequest, runtime: $dara.RuntimeOptions): Promise<ListSchemeTaskConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new ListSchemeTaskConfigResponse({}));
    } else {
      return $dara.cast<ListSchemeTaskConfigResponse>(await this.execute(params, req, runtime), new ListSchemeTaskConfigResponse({}));
    }

  }

  /**
   * 获取质检任务列表
   * 
   * @param request - ListSchemeTaskConfigRequest
   * @returns ListSchemeTaskConfigResponse
   */
  async listSchemeTaskConfig(request: ListSchemeTaskConfigRequest): Promise<ListSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
   * 获取会话组列表
   * 
   * @deprecated OpenAPI ListSessionGroup is deprecated
   * 
   * @param request - ListSessionGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSessionGroupResponse
   */
  // Deprecated
  async listSessionGroupWithOptions(request: ListSessionGroupRequest, runtime: $dara.RuntimeOptions): Promise<ListSessionGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSessionGroup",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSessionGroupResponse>(await this.callApi(params, req, runtime), new ListSessionGroupResponse({}));
    } else {
      return $dara.cast<ListSessionGroupResponse>(await this.execute(params, req, runtime), new ListSessionGroupResponse({}));
    }

  }

  /**
   * 获取会话组列表
   * 
   * @deprecated OpenAPI ListSessionGroup is deprecated
   * 
   * @param request - ListSessionGroupRequest
   * @returns ListSessionGroupResponse
   */
  // Deprecated
  async listSessionGroup(request: ListSessionGroupRequest): Promise<ListSessionGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSessionGroupWithOptions(request, runtime);
  }

  /**
   * @param request - ListSkillGroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillGroupConfigResponse
   */
  async listSkillGroupConfigWithOptions(request: ListSkillGroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<ListSkillGroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new ListSkillGroupConfigResponse({}));
    } else {
      return $dara.cast<ListSkillGroupConfigResponse>(await this.execute(params, req, runtime), new ListSkillGroupConfigResponse({}));
    }

  }

  /**
   * @param request - ListSkillGroupConfigRequest
   * @returns ListSkillGroupConfigResponse
   */
  async listSkillGroupConfig(request: ListSkillGroupConfigRequest): Promise<ListSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillGroupConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ListTaskAssignRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskAssignRulesResponse
   */
  async listTaskAssignRulesWithOptions(request: ListTaskAssignRulesRequest, runtime: $dara.RuntimeOptions): Promise<ListTaskAssignRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskAssignRules",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTaskAssignRulesResponse>(await this.callApi(params, req, runtime), new ListTaskAssignRulesResponse({}));
    } else {
      return $dara.cast<ListTaskAssignRulesResponse>(await this.execute(params, req, runtime), new ListTaskAssignRulesResponse({}));
    }

  }

  /**
   * @param request - ListTaskAssignRulesRequest
   * @returns ListTaskAssignRulesResponse
   */
  async listTaskAssignRules(request: ListTaskAssignRulesRequest): Promise<ListTaskAssignRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskAssignRulesWithOptions(request, runtime);
  }

  /**
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<ListUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
    } else {
      return $dara.cast<ListUsersResponse>(await this.execute(params, req, runtime), new ListUsersResponse({}));
    }

  }

  /**
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * @param request - ListWarningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWarningConfigResponse
   */
  async listWarningConfigWithOptions(request: ListWarningConfigRequest, runtime: $dara.RuntimeOptions): Promise<ListWarningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListWarningConfigResponse>(await this.callApi(params, req, runtime), new ListWarningConfigResponse({}));
    } else {
      return $dara.cast<ListWarningConfigResponse>(await this.execute(params, req, runtime), new ListWarningConfigResponse({}));
    }

  }

  /**
   * @param request - ListWarningConfigRequest
   * @returns ListWarningConfigResponse
   */
  async listWarningConfig(request: ListWarningConfigRequest): Promise<ListWarningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWarningConfigWithOptions(request, runtime);
  }

  /**
   * 预警策略-列表
   * 
   * @param request - ListWarningStrategyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWarningStrategyConfigResponse
   */
  async listWarningStrategyConfigWithOptions(request: ListWarningStrategyConfigRequest, runtime: $dara.RuntimeOptions): Promise<ListWarningStrategyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new ListWarningStrategyConfigResponse({}));
    } else {
      return $dara.cast<ListWarningStrategyConfigResponse>(await this.execute(params, req, runtime), new ListWarningStrategyConfigResponse({}));
    }

  }

  /**
   * 预警策略-列表
   * 
   * @param request - ListWarningStrategyConfigRequest
   * @returns ListWarningStrategyConfigResponse
   */
  async listWarningStrategyConfig(request: ListWarningStrategyConfigRequest): Promise<ListWarningStrategyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWarningStrategyConfigWithOptions(request, runtime);
  }

  /**
   * 批量回收
   * 
   * @param request - RevertAssignedSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevertAssignedSessionResponse
   */
  async revertAssignedSessionWithOptions(request: RevertAssignedSessionRequest, runtime: $dara.RuntimeOptions): Promise<RevertAssignedSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevertAssignedSession",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RevertAssignedSessionResponse>(await this.callApi(params, req, runtime), new RevertAssignedSessionResponse({}));
    } else {
      return $dara.cast<RevertAssignedSessionResponse>(await this.execute(params, req, runtime), new RevertAssignedSessionResponse({}));
    }

  }

  /**
   * 批量回收
   * 
   * @param request - RevertAssignedSessionRequest
   * @returns RevertAssignedSessionResponse
   */
  async revertAssignedSession(request: RevertAssignedSessionRequest): Promise<RevertAssignedSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revertAssignedSessionWithOptions(request, runtime);
  }

  /**
   * 会话组批量回收
   * 
   * @deprecated OpenAPI RevertAssignedSessionGroup is deprecated
   * 
   * @param request - RevertAssignedSessionGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevertAssignedSessionGroupResponse
   */
  // Deprecated
  async revertAssignedSessionGroupWithOptions(request: RevertAssignedSessionGroupRequest, runtime: $dara.RuntimeOptions): Promise<RevertAssignedSessionGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevertAssignedSessionGroup",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RevertAssignedSessionGroupResponse>(await this.callApi(params, req, runtime), new RevertAssignedSessionGroupResponse({}));
    } else {
      return $dara.cast<RevertAssignedSessionGroupResponse>(await this.execute(params, req, runtime), new RevertAssignedSessionGroupResponse({}));
    }

  }

  /**
   * 会话组批量回收
   * 
   * @deprecated OpenAPI RevertAssignedSessionGroup is deprecated
   * 
   * @param request - RevertAssignedSessionGroupRequest
   * @returns RevertAssignedSessionGroupResponse
   */
  // Deprecated
  async revertAssignedSessionGroup(request: RevertAssignedSessionGroupRequest): Promise<RevertAssignedSessionGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revertAssignedSessionGroupWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI SaveConfigDataSet is deprecated
   * 
   * @param request - SaveConfigDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveConfigDataSetResponse
   */
  // Deprecated
  async saveConfigDataSetWithOptions(request: SaveConfigDataSetRequest, runtime: $dara.RuntimeOptions): Promise<SaveConfigDataSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveConfigDataSet",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SaveConfigDataSetResponse>(await this.callApi(params, req, runtime), new SaveConfigDataSetResponse({}));
    } else {
      return $dara.cast<SaveConfigDataSetResponse>(await this.execute(params, req, runtime), new SaveConfigDataSetResponse({}));
    }

  }

  /**
   * @deprecated OpenAPI SaveConfigDataSet is deprecated
   * 
   * @param request - SaveConfigDataSetRequest
   * @returns SaveConfigDataSetResponse
   */
  // Deprecated
  async saveConfigDataSet(request: SaveConfigDataSetRequest): Promise<SaveConfigDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveConfigDataSetWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitComplaintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitComplaintResponse
   */
  async submitComplaintWithOptions(request: SubmitComplaintRequest, runtime: $dara.RuntimeOptions): Promise<SubmitComplaintResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitComplaint",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitComplaintResponse>(await this.callApi(params, req, runtime), new SubmitComplaintResponse({}));
    } else {
      return $dara.cast<SubmitComplaintResponse>(await this.execute(params, req, runtime), new SubmitComplaintResponse({}));
    }

  }

  /**
   * @param request - SubmitComplaintRequest
   * @returns SubmitComplaintResponse
   */
  async submitComplaint(request: SubmitComplaintRequest): Promise<SubmitComplaintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitComplaintWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitPrecisionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitPrecisionTaskResponse
   */
  async submitPrecisionTaskWithOptions(request: SubmitPrecisionTaskRequest, runtime: $dara.RuntimeOptions): Promise<SubmitPrecisionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitPrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitPrecisionTaskResponse>(await this.callApi(params, req, runtime), new SubmitPrecisionTaskResponse({}));
    } else {
      return $dara.cast<SubmitPrecisionTaskResponse>(await this.execute(params, req, runtime), new SubmitPrecisionTaskResponse({}));
    }

  }

  /**
   * @param request - SubmitPrecisionTaskRequest
   * @returns SubmitPrecisionTaskResponse
   */
  async submitPrecisionTask(request: SubmitPrecisionTaskRequest): Promise<SubmitPrecisionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitPrecisionTaskWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitQualityCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitQualityCheckTaskResponse
   */
  async submitQualityCheckTaskWithOptions(request: SubmitQualityCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<SubmitQualityCheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitQualityCheckTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitQualityCheckTaskResponse>(await this.callApi(params, req, runtime), new SubmitQualityCheckTaskResponse({}));
    } else {
      return $dara.cast<SubmitQualityCheckTaskResponse>(await this.execute(params, req, runtime), new SubmitQualityCheckTaskResponse({}));
    }

  }

  /**
   * @param request - SubmitQualityCheckTaskRequest
   * @returns SubmitQualityCheckTaskResponse
   */
  async submitQualityCheckTask(request: SubmitQualityCheckTaskRequest): Promise<SubmitQualityCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitQualityCheckTaskWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitReviewInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitReviewInfoResponse
   */
  async submitReviewInfoWithOptions(request: SubmitReviewInfoRequest, runtime: $dara.RuntimeOptions): Promise<SubmitReviewInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitReviewInfo",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitReviewInfoResponse>(await this.callApi(params, req, runtime), new SubmitReviewInfoResponse({}));
    } else {
      return $dara.cast<SubmitReviewInfoResponse>(await this.execute(params, req, runtime), new SubmitReviewInfoResponse({}));
    }

  }

  /**
   * @param request - SubmitReviewInfoRequest
   * @returns SubmitReviewInfoResponse
   */
  async submitReviewInfo(request: SubmitReviewInfoRequest): Promise<SubmitReviewInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitReviewInfoWithOptions(request, runtime);
  }

  /**
   * @param request - SyncQualityCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncQualityCheckResponse
   */
  async syncQualityCheckWithOptions(request: SyncQualityCheckRequest, runtime: $dara.RuntimeOptions): Promise<SyncQualityCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncQualityCheck",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SyncQualityCheckResponse>(await this.callApi(params, req, runtime), new SyncQualityCheckResponse({}));
    } else {
      return $dara.cast<SyncQualityCheckResponse>(await this.execute(params, req, runtime), new SyncQualityCheckResponse({}));
    }

  }

  /**
   * @param request - SyncQualityCheckRequest
   * @returns SyncQualityCheckResponse
   */
  async syncQualityCheck(request: SyncQualityCheckRequest): Promise<SyncQualityCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncQualityCheckWithOptions(request, runtime);
  }

  /**
   * 测试规则
   * 
   * @param request - TestRuleV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestRuleV4Response
   */
  async testRuleV4WithOptions(request: TestRuleV4Request, runtime: $dara.RuntimeOptions): Promise<TestRuleV4Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isSchemeData)) {
      body["IsSchemeData"] = request.isSchemeData;
    }

    if (!$dara.isNull(request.testJson)) {
      body["TestJson"] = request.testJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TestRuleV4Response>(await this.callApi(params, req, runtime), new TestRuleV4Response({}));
    } else {
      return $dara.cast<TestRuleV4Response>(await this.execute(params, req, runtime), new TestRuleV4Response({}));
    }

  }

  /**
   * 测试规则
   * 
   * @param request - TestRuleV4Request
   * @returns TestRuleV4Response
   */
  async testRuleV4(request: TestRuleV4Request): Promise<TestRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testRuleV4WithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAsrVocabRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAsrVocabResponse
   */
  async updateAsrVocabWithOptions(request: UpdateAsrVocabRequest, runtime: $dara.RuntimeOptions): Promise<UpdateAsrVocabResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAsrVocabResponse>(await this.callApi(params, req, runtime), new UpdateAsrVocabResponse({}));
    } else {
      return $dara.cast<UpdateAsrVocabResponse>(await this.execute(params, req, runtime), new UpdateAsrVocabResponse({}));
    }

  }

  /**
   * @param request - UpdateAsrVocabRequest
   * @returns UpdateAsrVocabResponse
   */
  async updateAsrVocab(request: UpdateAsrVocabRequest): Promise<UpdateAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAsrVocabWithOptions(request, runtime);
  }

  /**
   * 更新质检方案中的质检维度
   * 
   * @param request - UpdateCheckTypeToSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCheckTypeToSchemeResponse
   */
  async updateCheckTypeToSchemeWithOptions(request: UpdateCheckTypeToSchemeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateCheckTypeToSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCheckTypeToScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCheckTypeToSchemeResponse>(await this.callApi(params, req, runtime), new UpdateCheckTypeToSchemeResponse({}));
    } else {
      return $dara.cast<UpdateCheckTypeToSchemeResponse>(await this.execute(params, req, runtime), new UpdateCheckTypeToSchemeResponse({}));
    }

  }

  /**
   * 更新质检方案中的质检维度
   * 
   * @param request - UpdateCheckTypeToSchemeRequest
   * @returns UpdateCheckTypeToSchemeResponse
   */
  async updateCheckTypeToScheme(request: UpdateCheckTypeToSchemeRequest): Promise<UpdateCheckTypeToSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCheckTypeToSchemeWithOptions(request, runtime);
  }

  /**
   * 更新会话随录数据
   * 
   * @param request - UpdateQualityCheckDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQualityCheckDataResponse
   */
  async updateQualityCheckDataWithOptions(request: UpdateQualityCheckDataRequest, runtime: $dara.RuntimeOptions): Promise<UpdateQualityCheckDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQualityCheckData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateQualityCheckDataResponse>(await this.callApi(params, req, runtime), new UpdateQualityCheckDataResponse({}));
    } else {
      return $dara.cast<UpdateQualityCheckDataResponse>(await this.execute(params, req, runtime), new UpdateQualityCheckDataResponse({}));
    }

  }

  /**
   * 更新会话随录数据
   * 
   * @param request - UpdateQualityCheckDataRequest
   * @returns UpdateQualityCheckDataResponse
   */
  async updateQualityCheckData(request: UpdateQualityCheckDataRequest): Promise<UpdateQualityCheckDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQualityCheckDataWithOptions(request, runtime);
  }

  /**
   * 更新质检方案
   * 
   * @param request - UpdateQualityCheckSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQualityCheckSchemeResponse
   */
  async updateQualityCheckSchemeWithOptions(request: UpdateQualityCheckSchemeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateQualityCheckSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new UpdateQualityCheckSchemeResponse({}));
    } else {
      return $dara.cast<UpdateQualityCheckSchemeResponse>(await this.execute(params, req, runtime), new UpdateQualityCheckSchemeResponse({}));
    }

  }

  /**
   * 更新质检方案
   * 
   * @param request - UpdateQualityCheckSchemeRequest
   * @returns UpdateQualityCheckSchemeResponse
   */
  async updateQualityCheckScheme(request: UpdateQualityCheckSchemeRequest): Promise<UpdateQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI UpdateRule is deprecated, please use Qualitycheck::2019-01-15::UpdateRuleV4 instead.
   * 
   * @param request - UpdateRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleResponse
   */
  // Deprecated
  async updateRuleWithOptions(request: UpdateRuleRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRuleResponse>(await this.callApi(params, req, runtime), new UpdateRuleResponse({}));
    } else {
      return $dara.cast<UpdateRuleResponse>(await this.execute(params, req, runtime), new UpdateRuleResponse({}));
    }

  }

  /**
   * @deprecated OpenAPI UpdateRule is deprecated, please use Qualitycheck::2019-01-15::UpdateRuleV4 instead.
   * 
   * @param request - UpdateRuleRequest
   * @returns UpdateRuleResponse
   */
  // Deprecated
  async updateRule(request: UpdateRuleRequest): Promise<UpdateRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleWithOptions(request, runtime);
  }

  /**
   * 更新规则
   * 
   * @deprecated OpenAPI UpdateRuleById is deprecated, please use Qualitycheck::2019-01-15::UpdateRuleV4 instead.
   * 
   * @param request - UpdateRuleByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleByIdResponse
   */
  // Deprecated
  async updateRuleByIdWithOptions(request: UpdateRuleByIdRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRuleByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isCopy)) {
      body["IsCopy"] = request.isCopy;
    }

    if (!$dara.isNull(request.jsonStrForRule)) {
      body["JsonStrForRule"] = request.jsonStrForRule;
    }

    if (!$dara.isNull(request.returnRelatedSchemes)) {
      body["ReturnRelatedSchemes"] = request.returnRelatedSchemes;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRuleById",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRuleByIdResponse>(await this.callApi(params, req, runtime), new UpdateRuleByIdResponse({}));
    } else {
      return $dara.cast<UpdateRuleByIdResponse>(await this.execute(params, req, runtime), new UpdateRuleByIdResponse({}));
    }

  }

  /**
   * 更新规则
   * 
   * @deprecated OpenAPI UpdateRuleById is deprecated, please use Qualitycheck::2019-01-15::UpdateRuleV4 instead.
   * 
   * @param request - UpdateRuleByIdRequest
   * @returns UpdateRuleByIdResponse
   */
  // Deprecated
  async updateRuleById(request: UpdateRuleByIdRequest): Promise<UpdateRuleByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleByIdWithOptions(request, runtime);
  }

  /**
   * 更新质检方案的规则
   * 
   * @param request - UpdateRuleToSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleToSchemeResponse
   */
  async updateRuleToSchemeWithOptions(request: UpdateRuleToSchemeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRuleToSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRuleToScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRuleToSchemeResponse>(await this.callApi(params, req, runtime), new UpdateRuleToSchemeResponse({}));
    } else {
      return $dara.cast<UpdateRuleToSchemeResponse>(await this.execute(params, req, runtime), new UpdateRuleToSchemeResponse({}));
    }

  }

  /**
   * 更新质检方案的规则
   * 
   * @param request - UpdateRuleToSchemeRequest
   * @returns UpdateRuleToSchemeResponse
   */
  async updateRuleToScheme(request: UpdateRuleToSchemeRequest): Promise<UpdateRuleToSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleToSchemeWithOptions(request, runtime);
  }

  /**
   * V4更新规则
   * 
   * @param request - UpdateRuleV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleV4Response
   */
  async updateRuleV4WithOptions(request: UpdateRuleV4Request, runtime: $dara.RuntimeOptions): Promise<UpdateRuleV4Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jsonStrForRule)) {
      body["JsonStrForRule"] = request.jsonStrForRule;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRuleV4Response>(await this.callApi(params, req, runtime), new UpdateRuleV4Response({}));
    } else {
      return $dara.cast<UpdateRuleV4Response>(await this.execute(params, req, runtime), new UpdateRuleV4Response({}));
    }

  }

  /**
   * V4更新规则
   * 
   * @param request - UpdateRuleV4Request
   * @returns UpdateRuleV4Response
   */
  async updateRuleV4(request: UpdateRuleV4Request): Promise<UpdateRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleV4WithOptions(request, runtime);
  }

  /**
   * 更新质检任务
   * 
   * @param request - UpdateSchemeTaskConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSchemeTaskConfigResponse
   */
  async updateSchemeTaskConfigWithOptions(request: UpdateSchemeTaskConfigRequest, runtime: $dara.RuntimeOptions): Promise<UpdateSchemeTaskConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new UpdateSchemeTaskConfigResponse({}));
    } else {
      return $dara.cast<UpdateSchemeTaskConfigResponse>(await this.execute(params, req, runtime), new UpdateSchemeTaskConfigResponse({}));
    }

  }

  /**
   * 更新质检任务
   * 
   * @param request - UpdateSchemeTaskConfigRequest
   * @returns UpdateSchemeTaskConfigResponse
   */
  async updateSchemeTaskConfig(request: UpdateSchemeTaskConfigRequest): Promise<UpdateSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateSkillGroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillGroupConfigResponse
   */
  async updateSkillGroupConfigWithOptions(request: UpdateSkillGroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<UpdateSkillGroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new UpdateSkillGroupConfigResponse({}));
    } else {
      return $dara.cast<UpdateSkillGroupConfigResponse>(await this.execute(params, req, runtime), new UpdateSkillGroupConfigResponse({}));
    }

  }

  /**
   * @param request - UpdateSkillGroupConfigRequest
   * @returns UpdateSkillGroupConfigResponse
   */
  async updateSkillGroupConfig(request: UpdateSkillGroupConfigRequest): Promise<UpdateSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillGroupConfigWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateSyncQualityCheckDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSyncQualityCheckDataResponse
   */
  async updateSyncQualityCheckDataWithOptions(request: UpdateSyncQualityCheckDataRequest, runtime: $dara.RuntimeOptions): Promise<UpdateSyncQualityCheckDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSyncQualityCheckData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateSyncQualityCheckDataResponse>(await this.callApi(params, req, runtime), new UpdateSyncQualityCheckDataResponse({}));
    } else {
      return $dara.cast<UpdateSyncQualityCheckDataResponse>(await this.execute(params, req, runtime), new UpdateSyncQualityCheckDataResponse({}));
    }

  }

  /**
   * @param request - UpdateSyncQualityCheckDataRequest
   * @returns UpdateSyncQualityCheckDataResponse
   */
  async updateSyncQualityCheckData(request: UpdateSyncQualityCheckDataRequest): Promise<UpdateSyncQualityCheckDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSyncQualityCheckDataWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateTaskAssignRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskAssignRuleResponse
   */
  async updateTaskAssignRuleWithOptions(request: UpdateTaskAssignRuleRequest, runtime: $dara.RuntimeOptions): Promise<UpdateTaskAssignRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskAssignRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTaskAssignRuleResponse>(await this.callApi(params, req, runtime), new UpdateTaskAssignRuleResponse({}));
    } else {
      return $dara.cast<UpdateTaskAssignRuleResponse>(await this.execute(params, req, runtime), new UpdateTaskAssignRuleResponse({}));
    }

  }

  /**
   * @param request - UpdateTaskAssignRuleRequest
   * @returns UpdateTaskAssignRuleResponse
   */
  async updateTaskAssignRule(request: UpdateTaskAssignRuleRequest): Promise<UpdateTaskAssignRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskAssignRuleWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
    } else {
      return $dara.cast<UpdateUserResponse>(await this.execute(params, req, runtime), new UpdateUserResponse({}));
    }

  }

  /**
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateWarningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWarningConfigResponse
   */
  async updateWarningConfigWithOptions(request: UpdateWarningConfigRequest, runtime: $dara.RuntimeOptions): Promise<UpdateWarningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateWarningConfigResponse>(await this.callApi(params, req, runtime), new UpdateWarningConfigResponse({}));
    } else {
      return $dara.cast<UpdateWarningConfigResponse>(await this.execute(params, req, runtime), new UpdateWarningConfigResponse({}));
    }

  }

  /**
   * @param request - UpdateWarningConfigRequest
   * @returns UpdateWarningConfigResponse
   */
  async updateWarningConfig(request: UpdateWarningConfigRequest): Promise<UpdateWarningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWarningConfigWithOptions(request, runtime);
  }

  /**
   * 预警策略-更新
   * 
   * @param request - UpdateWarningStrategyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWarningStrategyConfigResponse
   */
  async updateWarningStrategyConfigWithOptions(request: UpdateWarningStrategyConfigRequest, runtime: $dara.RuntimeOptions): Promise<UpdateWarningStrategyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new UpdateWarningStrategyConfigResponse({}));
    } else {
      return $dara.cast<UpdateWarningStrategyConfigResponse>(await this.execute(params, req, runtime), new UpdateWarningStrategyConfigResponse({}));
    }

  }

  /**
   * 预警策略-更新
   * 
   * @param request - UpdateWarningStrategyConfigRequest
   * @returns UpdateWarningStrategyConfigResponse
   */
  async updateWarningStrategyConfig(request: UpdateWarningStrategyConfigRequest): Promise<UpdateWarningStrategyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWarningStrategyConfigWithOptions(request, runtime);
  }

  /**
   * @param request - UploadAudioDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadAudioDataResponse
   */
  async uploadAudioDataWithOptions(request: UploadAudioDataRequest, runtime: $dara.RuntimeOptions): Promise<UploadAudioDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadAudioData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadAudioDataResponse>(await this.callApi(params, req, runtime), new UploadAudioDataResponse({}));
    } else {
      return $dara.cast<UploadAudioDataResponse>(await this.execute(params, req, runtime), new UploadAudioDataResponse({}));
    }

  }

  /**
   * @param request - UploadAudioDataRequest
   * @returns UploadAudioDataResponse
   */
  async uploadAudioData(request: UploadAudioDataRequest): Promise<UploadAudioDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadAudioDataWithOptions(request, runtime);
  }

  /**
   * 推荐使用UploadDataV4接口,支持更长的JsonStr,但仅支持POST方法.
   * 
   * @deprecated OpenAPI UploadData is deprecated, please use Qualitycheck::2019-01-15::UploadDataV4 instead.
   * 
   * @param request - UploadDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDataResponse
   */
  // Deprecated
  async uploadDataWithOptions(request: UploadDataRequest, runtime: $dara.RuntimeOptions): Promise<UploadDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadDataResponse>(await this.callApi(params, req, runtime), new UploadDataResponse({}));
    } else {
      return $dara.cast<UploadDataResponse>(await this.execute(params, req, runtime), new UploadDataResponse({}));
    }

  }

  /**
   * 推荐使用UploadDataV4接口,支持更长的JsonStr,但仅支持POST方法.
   * 
   * @deprecated OpenAPI UploadData is deprecated, please use Qualitycheck::2019-01-15::UploadDataV4 instead.
   * 
   * @param request - UploadDataRequest
   * @returns UploadDataResponse
   */
  // Deprecated
  async uploadData(request: UploadDataRequest): Promise<UploadDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadDataWithOptions(request, runtime);
  }

  /**
   * http_hsf
   * 
   * @param request - UploadDataSyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDataSyncResponse
   */
  async uploadDataSyncWithOptions(request: UploadDataSyncRequest, runtime: $dara.RuntimeOptions): Promise<UploadDataSyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadDataSync",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadDataSyncResponse>(await this.callApi(params, req, runtime), new UploadDataSyncResponse({}));
    } else {
      return $dara.cast<UploadDataSyncResponse>(await this.execute(params, req, runtime), new UploadDataSyncResponse({}));
    }

  }

  /**
   * http_hsf
   * 
   * @param request - UploadDataSyncRequest
   * @returns UploadDataSyncResponse
   */
  async uploadDataSync(request: UploadDataSyncRequest): Promise<UploadDataSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadDataSyncWithOptions(request, runtime);
  }

  /**
   * UploadDataV4
   * 
   * @param request - UploadDataV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDataV4Response
   */
  async uploadDataV4WithOptions(request: UploadDataV4Request, runtime: $dara.RuntimeOptions): Promise<UploadDataV4Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadDataV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadDataV4Response>(await this.callApi(params, req, runtime), new UploadDataV4Response({}));
    } else {
      return $dara.cast<UploadDataV4Response>(await this.execute(params, req, runtime), new UploadDataV4Response({}));
    }

  }

  /**
   * UploadDataV4
   * 
   * @param request - UploadDataV4Request
   * @returns UploadDataV4Response
   */
  async uploadDataV4(request: UploadDataV4Request): Promise<UploadDataV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadDataV4WithOptions(request, runtime);
  }

  /**
   * @param request - UploadRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadRuleResponse
   */
  async uploadRuleWithOptions(request: UploadRuleRequest, runtime: $dara.RuntimeOptions): Promise<UploadRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadRuleResponse>(await this.callApi(params, req, runtime), new UploadRuleResponse({}));
    } else {
      return $dara.cast<UploadRuleResponse>(await this.execute(params, req, runtime), new UploadRuleResponse({}));
    }

  }

  /**
   * @param request - UploadRuleRequest
   * @returns UploadRuleResponse
   */
  async uploadRule(request: UploadRuleRequest): Promise<UploadRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadRuleWithOptions(request, runtime);
  }

  /**
   * @param request - VerifyFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyFileResponse
   */
  async verifyFileWithOptions(request: VerifyFileRequest, runtime: $dara.RuntimeOptions): Promise<VerifyFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyFile",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VerifyFileResponse>(await this.callApi(params, req, runtime), new VerifyFileResponse({}));
    } else {
      return $dara.cast<VerifyFileResponse>(await this.execute(params, req, runtime), new VerifyFileResponse({}));
    }

  }

  /**
   * @param request - VerifyFileRequest
   * @returns VerifyFileResponse
   */
  async verifyFile(request: VerifyFileRequest): Promise<VerifyFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyFileWithOptions(request, runtime);
  }

  /**
   * @param request - VerifySentenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifySentenceResponse
   */
  async verifySentenceWithOptions(request: VerifySentenceRequest, runtime: $dara.RuntimeOptions): Promise<VerifySentenceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifySentence",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<VerifySentenceResponse>(await this.callApi(params, req, runtime), new VerifySentenceResponse({}));
    } else {
      return $dara.cast<VerifySentenceResponse>(await this.execute(params, req, runtime), new VerifySentenceResponse({}));
    }

  }

  /**
   * @param request - VerifySentenceRequest
   * @returns VerifySentenceResponse
   */
  async verifySentence(request: VerifySentenceRequest): Promise<VerifySentenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifySentenceWithOptions(request, runtime);
  }

}
