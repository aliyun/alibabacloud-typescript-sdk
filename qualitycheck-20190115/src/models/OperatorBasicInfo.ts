// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JudgeNodeMetaDesc } from "./JudgeNodeMetaDesc";


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

