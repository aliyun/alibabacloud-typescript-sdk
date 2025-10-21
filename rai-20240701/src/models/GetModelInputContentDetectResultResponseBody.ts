// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoListBlockWordList extends $dara.Model {
  /**
   * @remarks
   * Word
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

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoList extends $dara.Model {
  /**
   * @remarks
   * Keyword detection result object list
   */
  blockWordList?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoListBlockWordList[];
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
      blockWordList: { 'type': 'array', 'itemType': GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoListBlockWordList },
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

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWord extends $dara.Model {
  /**
   * @remarks
   * Keyword detection result object list
   */
  blockWordGroupInfoList?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoList[];
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
      blockWordGroupInfoList: { 'type': 'array', 'itemType': GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWordBlockWordGroupInfoList },
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

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoDenyTopicsTopicInfoList extends $dara.Model {
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

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoDenyTopics extends $dara.Model {
  /**
   * @remarks
   * ConfidenceScore
   * 
   * @example
   * 0.0
   */
  confidenceScore?: number;
  /**
   * @remarks
   * 0: No risk
   * 1: Risk exists
   * 
   * @example
   * 1
   */
  riskResult?: number;
  /**
   * @remarks
   * List of sensitive topics
   */
  topicInfoList?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoDenyTopicsTopicInfoList[];
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
      topicInfoList: { 'type': 'array', 'itemType': GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoDenyTopicsTopicInfoList },
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

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategoriesHarmfulCategoryInfoList extends $dara.Model {
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
   * 0
   */
  securityLevel?: number;
  /**
   * @remarks
   * Sub-category label
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

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategories extends $dara.Model {
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
  harmfulCategoryInfoList?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategoriesHarmfulCategoryInfoList[];
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
      harmfulCategoryInfoList: { 'type': 'array', 'itemType': GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategoriesHarmfulCategoryInfoList },
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

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoPromptAttackPromptAttackInfoList extends $dara.Model {
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

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoPromptAttack extends $dara.Model {
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
   * Prompt attack list
   */
  promptAttackInfoList?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoPromptAttackPromptAttackInfoList[];
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
      promptAttackInfoList: { 'type': 'array', 'itemType': GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoPromptAttackPromptAttackInfoList },
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

export class GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfo extends $dara.Model {
  /**
   * @remarks
   * Detected keywords
   */
  blockWord?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWord;
  /**
   * @remarks
   * Sensitive topic object list
   */
  denyTopics?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoDenyTopics;
  /**
   * @remarks
   * List of harmful category result objects
   */
  harmfulCategories?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategories;
  /**
   * @remarks
   * Prompt attack information
   */
  promptAttack?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoPromptAttack;
  static names(): { [key: string]: string } {
    return {
      blockWord: 'BlockWord',
      denyTopics: 'DenyTopics',
      harmfulCategories: 'HarmfulCategories',
      promptAttack: 'PromptAttack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockWord: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoBlockWord,
      denyTopics: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoDenyTopics,
      harmfulCategories: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoHarmfulCategories,
      promptAttack: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfoPromptAttack,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelInputContentDetectResultResponseBodyDetectResultList extends $dara.Model {
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
   * 0: Queued
   * 1: Processing
   * 2: Completed
   * 3: Failed
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * Inspection result
   */
  traceInfo?: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfo;
  static names(): { [key: string]: string } {
    return {
      riskResult: 'RiskResult',
      status: 'Status',
      traceInfo: 'TraceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskResult: 'number',
      status: 'number',
      traceInfo: GetModelInputContentDetectResultResponseBodyDetectResultListTraceInfo,
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

export class GetModelInputContentDetectResultResponseBody extends $dara.Model {
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
   * Detection result object
   */
  detectResultList?: GetModelInputContentDetectResultResponseBodyDetectResultList[];
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
   * Number of processed items in the task.
   * 
   * @example
   * 1
   */
  processedCount?: number;
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
   * Indicates whether the operation was successful. true means success, false means failure.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
   */
  taskId?: string;
  /**
   * @remarks
   * Task processing status:
   * 0: Queued
   * 1: Processing
   * 2: Completed
   * 3: Failed
   * 
   * @example
   * 2
   */
  taskStatus?: number;
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detectResultList: 'DetectResultList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      processedCount: 'ProcessedCount',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detectResultList: { 'type': 'array', 'itemType': GetModelInputContentDetectResultResponseBodyDetectResultList },
      httpStatusCode: 'number',
      message: 'string',
      processedCount: 'number',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
      taskStatus: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detectResultList)) {
      $dara.Model.validateArray(this.detectResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

