// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoListBlockWordList extends $dara.Model {
  /**
   * @remarks
   * Keyword
   * 
   * @example
   * testWord
   */
  word?: string;
  /**
   * @remarks
   * Label
   * 
   * @example
   * testLabel
   */
  wordLabel?: string;
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
      wordLabel: 'WordLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: 'string',
      wordLabel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoList extends $dara.Model {
  /**
   * @remarks
   * List of keyword detection result objects
   */
  blockWordList?: ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoListBlockWordList[];
  /**
   * @remarks
   * Keyword group name
   * 
   * @example
   * testGroup
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      blockWordList: 'BlockWordList',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWordList: { 'type': 'array', 'itemType': ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoListBlockWordList },
      groupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blockWordList)) {
      $dara.Model.validateArray(this.blockWordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWord extends $dara.Model {
  /**
   * @remarks
   * List of keyword detection result objects
   */
  blockWordGroupInfoList?: ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoList[];
  /**
   * @remarks
   * 0: No risk
   * 1: Risk exists
   * 
   * @example
   * 0
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      blockWordGroupInfoList: 'BlockWordGroupInfoList',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWordGroupInfoList: { 'type': 'array', 'itemType': ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWordBlockWordGroupInfoList },
      riskResult: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.blockWordGroupInfoList)) {
      $dara.Model.validateArray(this.blockWordGroupInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoDenyTopicsTopicInfoList extends $dara.Model {
  /**
   * @remarks
   * 0: Text
   * 1: Image
   * 
   * @example
   * 0
   */
  categoryType?: number;
  /**
   * @remarks
   * 0: No risk
   * 1: Risk present
   * 
   * @example
   * 1
   */
  riskResult?: number;
  /**
   * @remarks
   * Security level
   * 0: Low
   * 1: Medium
   * 2: High
   * 
   * @example
   * 0
   */
  securityLevel?: number;
  /**
   * @remarks
   * Topic name
   * 
   * @example
   * Buss.
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'CategoryType',
      riskResult: 'RiskResult',
      securityLevel: 'SecurityLevel',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'number',
      riskResult: 'number',
      securityLevel: 'number',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoDenyTopics extends $dara.Model {
  /**
   * @remarks
   * Confidence score
   * 
   * @example
   * 0.0
   */
  confidenceScore?: number;
  /**
   * @remarks
   * 0: No risk
   * 1: Risk present
   * 
   * @example
   * 0
   */
  riskResult?: number;
  /**
   * @remarks
   * Sensitive topic list
   */
  topicInfoList?: ModelOutputContentSyncDetectResponseBodyTraceInfoDenyTopicsTopicInfoList[];
  static names(): { [key: string]: string } {
    return {
      confidenceScore: 'ConfidenceScore',
      riskResult: 'RiskResult',
      topicInfoList: 'TopicInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidenceScore: 'number',
      riskResult: 'number',
      topicInfoList: { 'type': 'array', 'itemType': ModelOutputContentSyncDetectResponseBodyTraceInfoDenyTopicsTopicInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.topicInfoList)) {
      $dara.Model.validateArray(this.topicInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoHarmfulCategoriesHarmfulCategoryInfoList extends $dara.Model {
  /**
   * @remarks
   * Category name
   * 
   * @example
   * Morality
   */
  categoryLabel?: string;
  /**
   * @remarks
   * 0: Text
   * 1: Image
   * 
   * @example
   * 0
   */
  categoryType?: number;
  /**
   * @remarks
   * 0: No risk
   * 1: Risk exists
   * 
   * @example
   * 0
   */
  riskResult?: number;
  /**
   * @remarks
   * Security level
   * 0: Low
   * 1: Medium
   * 2: High
   * 
   * @example
   * 1
   */
  securityLevel?: number;
  /**
   * @remarks
   * Subcategory label
   * 
   * @example
   * morality_ethics
   */
  subCategoryLabel?: string;
  static names(): { [key: string]: string } {
    return {
      categoryLabel: 'CategoryLabel',
      categoryType: 'CategoryType',
      riskResult: 'RiskResult',
      securityLevel: 'SecurityLevel',
      subCategoryLabel: 'SubCategoryLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryLabel: 'string',
      categoryType: 'number',
      riskResult: 'number',
      securityLevel: 'number',
      subCategoryLabel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoHarmfulCategories extends $dara.Model {
  /**
   * @remarks
   * Confidence score
   * 
   * @example
   * 0.0
   */
  confidenceScore?: number;
  /**
   * @remarks
   * List of harmful category objects
   */
  harmfulCategoryInfoList?: ModelOutputContentSyncDetectResponseBodyTraceInfoHarmfulCategoriesHarmfulCategoryInfoList[];
  /**
   * @remarks
   * 0: No risk
   * 1: Risk exists
   * 
   * @example
   * 0
   */
  riskResult?: number;
  static names(): { [key: string]: string } {
    return {
      confidenceScore: 'ConfidenceScore',
      harmfulCategoryInfoList: 'HarmfulCategoryInfoList',
      riskResult: 'RiskResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidenceScore: 'number',
      harmfulCategoryInfoList: { 'type': 'array', 'itemType': ModelOutputContentSyncDetectResponseBodyTraceInfoHarmfulCategoriesHarmfulCategoryInfoList },
      riskResult: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.harmfulCategoryInfoList)) {
      $dara.Model.validateArray(this.harmfulCategoryInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoPromptAttackPromptAttackInfoList extends $dara.Model {
  /**
   * @remarks
   * Category name
   * 
   * @example
   * Role Play
   */
  categoryLabel?: string;
  /**
   * @remarks
   * 0: Text
   * 1: Image
   * 
   * @example
   * 0
   */
  categoryType?: number;
  /**
   * @remarks
   * 0: No risk
   * 1: Risk present
   * 
   * @example
   * 1
   */
  riskResult?: number;
  /**
   * @remarks
   * Security level
   * 0: Low
   * 1: Medium
   * 2: High
   * 
   * @example
   * 0
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      categoryLabel: 'CategoryLabel',
      categoryType: 'CategoryType',
      riskResult: 'RiskResult',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryLabel: 'string',
      categoryType: 'number',
      riskResult: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoPromptAttack extends $dara.Model {
  /**
   * @remarks
   * Confidence score
   * 
   * @example
   * 0.0
   */
  confidenceScore?: number;
  /**
   * @remarks
   * Prompt attack detection result object
   * 
   * @example
   * Role Play
   */
  promptAttackInfo?: string;
  /**
   * @remarks
   * List of prompt attacks
   */
  promptAttackInfoList?: ModelOutputContentSyncDetectResponseBodyTraceInfoPromptAttackPromptAttackInfoList[];
  /**
   * @remarks
   * 0: No risk
   * 1: Risk exists
   * 
   * @example
   * 0
   */
  riskResult?: number;
  /**
   * @remarks
   * Security level
   * 0: Low
   * 1: Medium
   * 2: High
   * 
   * @example
   * 0
   */
  securityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      confidenceScore: 'ConfidenceScore',
      promptAttackInfo: 'PromptAttackInfo',
      promptAttackInfoList: 'PromptAttackInfoList',
      riskResult: 'RiskResult',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidenceScore: 'number',
      promptAttackInfo: 'string',
      promptAttackInfoList: { 'type': 'array', 'itemType': ModelOutputContentSyncDetectResponseBodyTraceInfoPromptAttackPromptAttackInfoList },
      riskResult: 'number',
      securityLevel: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.promptAttackInfoList)) {
      $dara.Model.validateArray(this.promptAttackInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoSensitiveTypeSensitiveTypeInfoList extends $dara.Model {
  actionType?: number;
  maskedContent?: string;
  sensitiveCategory?: number;
  sensitiveContent?: string;
  sensitiveTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      maskedContent: 'MaskedContent',
      sensitiveCategory: 'SensitiveCategory',
      sensitiveContent: 'SensitiveContent',
      sensitiveTypeName: 'SensitiveTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      maskedContent: 'string',
      sensitiveCategory: 'number',
      sensitiveContent: 'string',
      sensitiveTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfoSensitiveType extends $dara.Model {
  maskedContent?: string;
  riskResult?: number;
  sensitiveTypeInfoList?: ModelOutputContentSyncDetectResponseBodyTraceInfoSensitiveTypeSensitiveTypeInfoList[];
  static names(): { [key: string]: string } {
    return {
      maskedContent: 'MaskedContent',
      riskResult: 'RiskResult',
      sensitiveTypeInfoList: 'SensitiveTypeInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maskedContent: 'string',
      riskResult: 'number',
      sensitiveTypeInfoList: { 'type': 'array', 'itemType': ModelOutputContentSyncDetectResponseBodyTraceInfoSensitiveTypeSensitiveTypeInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveTypeInfoList)) {
      $dara.Model.validateArray(this.sensitiveTypeInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBodyTraceInfo extends $dara.Model {
  /**
   * @remarks
   * Detected keywords
   */
  blockWord?: ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWord;
  /**
   * @remarks
   * Sensitive topic object list
   */
  denyTopics?: ModelOutputContentSyncDetectResponseBodyTraceInfoDenyTopics;
  /**
   * @remarks
   * HarmfulCategories
   */
  harmfulCategories?: ModelOutputContentSyncDetectResponseBodyTraceInfoHarmfulCategories;
  /**
   * @remarks
   * Prompt attack information
   */
  promptAttack?: ModelOutputContentSyncDetectResponseBodyTraceInfoPromptAttack;
  sensitiveType?: ModelOutputContentSyncDetectResponseBodyTraceInfoSensitiveType;
  static names(): { [key: string]: string } {
    return {
      blockWord: 'BlockWord',
      denyTopics: 'DenyTopics',
      harmfulCategories: 'HarmfulCategories',
      promptAttack: 'PromptAttack',
      sensitiveType: 'SensitiveType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWord: ModelOutputContentSyncDetectResponseBodyTraceInfoBlockWord,
      denyTopics: ModelOutputContentSyncDetectResponseBodyTraceInfoDenyTopics,
      harmfulCategories: ModelOutputContentSyncDetectResponseBodyTraceInfoHarmfulCategories,
      promptAttack: ModelOutputContentSyncDetectResponseBodyTraceInfoPromptAttack,
      sensitiveType: ModelOutputContentSyncDetectResponseBodyTraceInfoSensitiveType,
    };
  }

  validate() {
    if(this.blockWord && typeof (this.blockWord as any).validate === 'function') {
      (this.blockWord as any).validate();
    }
    if(this.denyTopics && typeof (this.denyTopics as any).validate === 'function') {
      (this.denyTopics as any).validate();
    }
    if(this.harmfulCategories && typeof (this.harmfulCategories as any).validate === 'function') {
      (this.harmfulCategories as any).validate();
    }
    if(this.promptAttack && typeof (this.promptAttack as any).validate === 'function') {
      (this.promptAttack as any).validate();
    }
    if(this.sensitiveType && typeof (this.sensitiveType as any).validate === 'function') {
      (this.sensitiveType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelOutputContentSyncDetectResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code, 00000 indicates success; others indicate failure.
   * 
   * @example
   * 00000
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Risk labels, separated by commas if multiple.
   * 
   * @example
   * “”
   */
  riskInfo?: string;
  /**
   * @remarks
   * 0: No risk
   * 1: Risk exists
   * 
   * @example
   * 0
   */
  riskResult?: number;
  safeAnswer?: string;
  /**
   * @remarks
   * 操作是否成功。true表示成功，false表示失败。
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Inspection result
   */
  traceInfo?: ModelOutputContentSyncDetectResponseBodyTraceInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      riskInfo: 'RiskInfo',
      riskResult: 'RiskResult',
      safeAnswer: 'SafeAnswer',
      success: 'Success',
      traceInfo: 'TraceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      riskInfo: 'string',
      riskResult: 'number',
      safeAnswer: 'string',
      success: 'boolean',
      traceInfo: ModelOutputContentSyncDetectResponseBodyTraceInfo,
    };
  }

  validate() {
    if(this.traceInfo && typeof (this.traceInfo as any).validate === 'function') {
      (this.traceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

