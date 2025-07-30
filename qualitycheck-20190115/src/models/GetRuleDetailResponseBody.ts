// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

