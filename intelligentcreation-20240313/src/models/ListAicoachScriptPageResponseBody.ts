// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICoachScriptPageResponseBodyListCompleteStrategy extends $dara.Model {
  /**
   * @example
   * true
   */
  clickCompleteAutoEnd?: boolean;
  /**
   * @example
   * 75
   */
  duration?: number;
  /**
   * @example
   * false
   */
  fullCoverageAutoEnd?: boolean;
  static names(): { [key: string]: string } {
    return {
      clickCompleteAutoEnd: 'clickCompleteAutoEnd',
      duration: 'duration',
      fullCoverageAutoEnd: 'fullCoverageAutoEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clickCompleteAutoEnd: 'boolean',
      duration: 'number',
      fullCoverageAutoEnd: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListCustomReplyRulesActionParameters extends $dara.Model {
  assessPoint?: string;
  customContent?: string;
  static names(): { [key: string]: string } {
    return {
      assessPoint: 'assessPoint',
      customContent: 'customContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessPoint: 'string',
      customContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListCustomReplyRulesAction extends $dara.Model {
  parameters?: ListAICoachScriptPageResponseBodyListCustomReplyRulesActionParameters;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: ListAICoachScriptPageResponseBodyListCustomReplyRulesActionParameters,
      type: 'string',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListCustomReplyRulesMainConditionParameters extends $dara.Model {
  assessPoint?: string;
  static names(): { [key: string]: string } {
    return {
      assessPoint: 'assessPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessPoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListCustomReplyRulesMainCondition extends $dara.Model {
  parameters?: ListAICoachScriptPageResponseBodyListCustomReplyRulesMainConditionParameters;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: ListAICoachScriptPageResponseBodyListCustomReplyRulesMainConditionParameters,
      type: 'string',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListCustomReplyRulesSubCondition extends $dara.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListCustomReplyRules extends $dara.Model {
  action?: ListAICoachScriptPageResponseBodyListCustomReplyRulesAction;
  logic?: string;
  mainCondition?: ListAICoachScriptPageResponseBodyListCustomReplyRulesMainCondition;
  priority?: number;
  sortNo?: number;
  subCondition?: ListAICoachScriptPageResponseBodyListCustomReplyRulesSubCondition;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      logic: 'logic',
      mainCondition: 'mainCondition',
      priority: 'priority',
      sortNo: 'sortNo',
      subCondition: 'subCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: ListAICoachScriptPageResponseBodyListCustomReplyRulesAction,
      logic: 'string',
      mainCondition: ListAICoachScriptPageResponseBodyListCustomReplyRulesMainCondition,
      priority: 'number',
      sortNo: 'number',
      subCondition: ListAICoachScriptPageResponseBodyListCustomReplyRulesSubCondition,
    };
  }

  validate() {
    if(this.action && typeof (this.action as any).validate === 'function') {
      (this.action as any).validate();
    }
    if(this.mainCondition && typeof (this.mainCondition as any).validate === 'function') {
      (this.mainCondition as any).validate();
    }
    if(this.subCondition && typeof (this.subCondition as any).validate === 'function') {
      (this.subCondition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListSampleDialogueList extends $dara.Model {
  message?: string;
  /**
   * @example
   * student
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListScoreConfigLevels extends $dara.Model {
  max?: number;
  min?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'max',
      min: 'min',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
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

export class ListAICoachScriptPageResponseBodyListScoreConfig extends $dara.Model {
  enabled?: boolean;
  levelEnabled?: boolean;
  levels?: ListAICoachScriptPageResponseBodyListScoreConfigLevels[];
  passScore?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      levelEnabled: 'levelEnabled',
      levels: 'levels',
      passScore: 'passScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      levelEnabled: 'boolean',
      levels: { 'type': 'array', 'itemType': ListAICoachScriptPageResponseBodyListScoreConfigLevels },
      passScore: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.levels)) {
      $dara.Model.validateArray(this.levels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyListWeights extends $dara.Model {
  /**
   * @example
   * 50
   */
  assessmentPoint?: number;
  assessmentPointEnabled?: boolean;
  customReplyRuleEnabled?: boolean;
  /**
   * @example
   * 30
   */
  expressiveness?: number;
  expressivenessEnabled?: boolean;
  pointDeductionRule?: number;
  pointDeductionRuleEnabled?: boolean;
  similarPronunciationScoringEnabled?: boolean;
  /**
   * @example
   * 20
   */
  standard?: number;
  /**
   * @example
   * true
   */
  standardEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      assessmentPoint: 'assessmentPoint',
      assessmentPointEnabled: 'assessmentPointEnabled',
      customReplyRuleEnabled: 'customReplyRuleEnabled',
      expressiveness: 'expressiveness',
      expressivenessEnabled: 'expressivenessEnabled',
      pointDeductionRule: 'pointDeductionRule',
      pointDeductionRuleEnabled: 'pointDeductionRuleEnabled',
      similarPronunciationScoringEnabled: 'similarPronunciationScoringEnabled',
      standard: 'standard',
      standardEnabled: 'standardEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessmentPoint: 'number',
      assessmentPointEnabled: 'boolean',
      customReplyRuleEnabled: 'boolean',
      expressiveness: 'number',
      expressivenessEnabled: 'boolean',
      pointDeductionRule: 'number',
      pointDeductionRuleEnabled: 'boolean',
      similarPronunciationScoringEnabled: 'boolean',
      standard: 'number',
      standardEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBodyList extends $dara.Model {
  appendQuestionFlag?: string;
  assessmentScope?: string;
  closingRemarks?: string;
  completeStrategy?: ListAICoachScriptPageResponseBodyListCompleteStrategy;
  /**
   * @example
   * https://oss-ata.alibaba.com/front/live/banner1.png
   */
  coverUrl?: string;
  customReplyRules?: ListAICoachScriptPageResponseBodyListCustomReplyRules[];
  dialogueTextFlag?: boolean;
  dialogueTipFlag?: boolean;
  evaluateReportFlag?: boolean;
  expressiveness?: { [key: string]: string };
  gifDynamicUrl?: string;
  gifStaticUrl?: string;
  /**
   * @example
   * 2024-12-25 14:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-12-25 14:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * student
   */
  initiator?: string;
  /**
   * @example
   * 4
   */
  interactionType?: string;
  introduce?: string;
  /**
   * @example
   * prod-ydsf
   */
  name?: string;
  openingRemarks?: string;
  orderAckFlag?: boolean;
  sampleDialogueList?: ListAICoachScriptPageResponseBodyListSampleDialogueList[];
  scoreConfig?: ListAICoachScriptPageResponseBodyListScoreConfig;
  /**
   * @example
   * 1
   */
  scriptRecordId?: string;
  sparringTipContent?: string;
  sparringTipTitle?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  studentThinkTimeFlag?: boolean;
  type?: number;
  weights?: ListAICoachScriptPageResponseBodyListWeights;
  static names(): { [key: string]: string } {
    return {
      appendQuestionFlag: 'appendQuestionFlag',
      assessmentScope: 'assessmentScope',
      closingRemarks: 'closingRemarks',
      completeStrategy: 'completeStrategy',
      coverUrl: 'coverUrl',
      customReplyRules: 'customReplyRules',
      dialogueTextFlag: 'dialogueTextFlag',
      dialogueTipFlag: 'dialogueTipFlag',
      evaluateReportFlag: 'evaluateReportFlag',
      expressiveness: 'expressiveness',
      gifDynamicUrl: 'gifDynamicUrl',
      gifStaticUrl: 'gifStaticUrl',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      initiator: 'initiator',
      interactionType: 'interactionType',
      introduce: 'introduce',
      name: 'name',
      openingRemarks: 'openingRemarks',
      orderAckFlag: 'orderAckFlag',
      sampleDialogueList: 'sampleDialogueList',
      scoreConfig: 'scoreConfig',
      scriptRecordId: 'scriptRecordId',
      sparringTipContent: 'sparringTipContent',
      sparringTipTitle: 'sparringTipTitle',
      status: 'status',
      studentThinkTimeFlag: 'studentThinkTimeFlag',
      type: 'type',
      weights: 'weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendQuestionFlag: 'string',
      assessmentScope: 'string',
      closingRemarks: 'string',
      completeStrategy: ListAICoachScriptPageResponseBodyListCompleteStrategy,
      coverUrl: 'string',
      customReplyRules: { 'type': 'array', 'itemType': ListAICoachScriptPageResponseBodyListCustomReplyRules },
      dialogueTextFlag: 'boolean',
      dialogueTipFlag: 'boolean',
      evaluateReportFlag: 'boolean',
      expressiveness: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gifDynamicUrl: 'string',
      gifStaticUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      initiator: 'string',
      interactionType: 'string',
      introduce: 'string',
      name: 'string',
      openingRemarks: 'string',
      orderAckFlag: 'boolean',
      sampleDialogueList: { 'type': 'array', 'itemType': ListAICoachScriptPageResponseBodyListSampleDialogueList },
      scoreConfig: ListAICoachScriptPageResponseBodyListScoreConfig,
      scriptRecordId: 'string',
      sparringTipContent: 'string',
      sparringTipTitle: 'string',
      status: 'number',
      studentThinkTimeFlag: 'boolean',
      type: 'number',
      weights: ListAICoachScriptPageResponseBodyListWeights,
    };
  }

  validate() {
    if(this.completeStrategy && typeof (this.completeStrategy as any).validate === 'function') {
      (this.completeStrategy as any).validate();
    }
    if(Array.isArray(this.customReplyRules)) {
      $dara.Model.validateArray(this.customReplyRules);
    }
    if(this.expressiveness) {
      $dara.Model.validateMap(this.expressiveness);
    }
    if(Array.isArray(this.sampleDialogueList)) {
      $dara.Model.validateArray(this.sampleDialogueList);
    }
    if(this.scoreConfig && typeof (this.scoreConfig as any).validate === 'function') {
      (this.scoreConfig as any).validate();
    }
    if(this.weights && typeof (this.weights as any).validate === 'function') {
      (this.weights as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICoachScriptPageResponseBody extends $dara.Model {
  /**
   * @example
   * PARAM_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * SYSTEM_ERROR
   */
  errorMessage?: string;
  list?: ListAICoachScriptPageResponseBodyList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      list: 'list',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      list: { 'type': 'array', 'itemType': ListAICoachScriptPageResponseBodyList },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

