// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachScriptResponseBodyCheckCheatConfig extends $dara.Model {
  checkImage?: boolean;
  checkVoice?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkImage: 'checkImage',
      checkVoice: 'checkVoice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkImage: 'boolean',
      checkVoice: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyCompleteStrategy extends $dara.Model {
  /**
   * @example
   * 5
   */
  abnormalQuitSessionExpired?: number;
  /**
   * @example
   * true
   */
  abnormalQuitSessionExpiredFlag?: boolean;
  /**
   * @example
   * true
   */
  clickCompleteAutoEnd?: boolean;
  /**
   * @example
   * 15
   */
  duration?: number;
  /**
   * @example
   * true
   */
  durationFlag?: boolean;
  /**
   * @example
   * true
   */
  fullCoverageAutoEnd?: boolean;
  static names(): { [key: string]: string } {
    return {
      abnormalQuitSessionExpired: 'abnormalQuitSessionExpired',
      abnormalQuitSessionExpiredFlag: 'abnormalQuitSessionExpiredFlag',
      clickCompleteAutoEnd: 'clickCompleteAutoEnd',
      duration: 'duration',
      durationFlag: 'durationFlag',
      fullCoverageAutoEnd: 'fullCoverageAutoEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalQuitSessionExpired: 'number',
      abnormalQuitSessionExpiredFlag: 'boolean',
      clickCompleteAutoEnd: 'boolean',
      duration: 'number',
      durationFlag: 'boolean',
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

export class GetAICoachScriptResponseBodyCustomReplyRulesActionParameters extends $dara.Model {
  assessPointId?: string;
  customContent?: string;
  static names(): { [key: string]: string } {
    return {
      assessPointId: 'assessPointId',
      customContent: 'customContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessPointId: 'string',
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

export class GetAICoachScriptResponseBodyCustomReplyRulesAction extends $dara.Model {
  parameters?: GetAICoachScriptResponseBodyCustomReplyRulesActionParameters;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: GetAICoachScriptResponseBodyCustomReplyRulesActionParameters,
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

export class GetAICoachScriptResponseBodyCustomReplyRulesMainConditionParameters extends $dara.Model {
  assessPointId?: string;
  static names(): { [key: string]: string } {
    return {
      assessPointId: 'assessPointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessPointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyCustomReplyRulesMainCondition extends $dara.Model {
  parameters?: GetAICoachScriptResponseBodyCustomReplyRulesMainConditionParameters;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: GetAICoachScriptResponseBodyCustomReplyRulesMainConditionParameters,
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

export class GetAICoachScriptResponseBodyCustomReplyRulesSubCondition extends $dara.Model {
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

export class GetAICoachScriptResponseBodyCustomReplyRules extends $dara.Model {
  action?: GetAICoachScriptResponseBodyCustomReplyRulesAction;
  logic?: string;
  mainCondition?: GetAICoachScriptResponseBodyCustomReplyRulesMainCondition;
  priority?: number;
  subCondition?: GetAICoachScriptResponseBodyCustomReplyRulesSubCondition;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      logic: 'logic',
      mainCondition: 'mainCondition',
      priority: 'priority',
      subCondition: 'subCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: GetAICoachScriptResponseBodyCustomReplyRulesAction,
      logic: 'string',
      mainCondition: GetAICoachScriptResponseBodyCustomReplyRulesMainCondition,
      priority: 'number',
      subCondition: GetAICoachScriptResponseBodyCustomReplyRulesSubCondition,
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

export class GetAICoachScriptResponseBodyExpressivenessList extends $dara.Model {
  desc?: string;
  enabled?: boolean;
  expressivenessId?: string;
  name?: string;
  rule?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enabled: 'enabled',
      expressivenessId: 'expressivenessId',
      name: 'name',
      rule: 'rule',
      type: 'type',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enabled: 'boolean',
      expressivenessId: 'string',
      name: 'string',
      rule: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyPointDeductionRuleList extends $dara.Model {
  /**
   * @example
   * demo
   */
  description?: string;
  punishmentTypes?: string[];
  ruleValue?: string;
  /**
   * @example
   * 90
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      punishmentTypes: 'punishmentTypes',
      ruleValue: 'ruleValue',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      punishmentTypes: { 'type': 'array', 'itemType': 'string' },
      ruleValue: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.punishmentTypes)) {
      $dara.Model.validateArray(this.punishmentTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesKeywordValues extends $dara.Model {
  name?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesScoringRules extends $dara.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetAICoachScriptResponseBodyPointsAnswerListAnswerValues extends $dara.Model {
  answerName?: string;
  answerWeight?: number;
  keywordValues?: GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesKeywordValues[];
  keywordWeight?: number;
  scoringRules?: GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesScoringRules[];
  static names(): { [key: string]: string } {
    return {
      answerName: 'answerName',
      answerWeight: 'answerWeight',
      keywordValues: 'keywordValues',
      keywordWeight: 'keywordWeight',
      scoringRules: 'scoringRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerName: 'string',
      answerWeight: 'number',
      keywordValues: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesKeywordValues },
      keywordWeight: 'number',
      scoringRules: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerListAnswerValuesScoringRules },
    };
  }

  validate() {
    if(Array.isArray(this.keywordValues)) {
      $dara.Model.validateArray(this.keywordValues);
    }
    if(Array.isArray(this.scoringRules)) {
      $dara.Model.validateArray(this.scoringRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyPointsAnswerListParameters extends $dara.Model {
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class GetAICoachScriptResponseBodyPointsAnswerList extends $dara.Model {
  answerValues?: GetAICoachScriptResponseBodyPointsAnswerListAnswerValues[];
  enabledKeyword?: boolean;
  name?: string;
  nameList?: string[];
  operators?: string;
  parameters?: GetAICoachScriptResponseBodyPointsAnswerListParameters[];
  /**
   * @example
   * normalKnowledge
   */
  type?: string;
  /**
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      answerValues: 'answerValues',
      enabledKeyword: 'enabledKeyword',
      name: 'name',
      nameList: 'nameList',
      operators: 'operators',
      parameters: 'parameters',
      type: 'type',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerValues: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerListAnswerValues },
      enabledKeyword: 'boolean',
      name: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      operators: 'string',
      parameters: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerListParameters },
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.answerValues)) {
      $dara.Model.validateArray(this.answerValues);
    }
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodyPoints extends $dara.Model {
  answerList?: GetAICoachScriptResponseBodyPointsAnswerList[];
  knowledgeList?: string[];
  /**
   * @example
   * demo
   */
  name?: string;
  pointId?: string;
  /**
   * @example
   * test
   */
  questionDescription?: string;
  /**
   * @example
   * 1
   */
  sortNo?: number;
  /**
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      answerList: 'answerList',
      knowledgeList: 'knowledgeList',
      name: 'name',
      pointId: 'pointId',
      questionDescription: 'questionDescription',
      sortNo: 'sortNo',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerList: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointsAnswerList },
      knowledgeList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      pointId: 'string',
      questionDescription: 'string',
      sortNo: 'number',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.answerList)) {
      $dara.Model.validateArray(this.answerList);
    }
    if(Array.isArray(this.knowledgeList)) {
      $dara.Model.validateArray(this.knowledgeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachScriptResponseBodySampleDialogueList extends $dara.Model {
  message?: string;
  /**
   * @example
   * coach
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

export class GetAICoachScriptResponseBodyScoreConfigLevels extends $dara.Model {
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

export class GetAICoachScriptResponseBodyScoreConfig extends $dara.Model {
  enabled?: boolean;
  levelEnabled?: boolean;
  levels?: GetAICoachScriptResponseBodyScoreConfigLevels[];
  passScore?: string;
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
      levels: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyScoreConfigLevels },
      passScore: 'string',
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

export class GetAICoachScriptResponseBodyWeights extends $dara.Model {
  /**
   * @example
   * 10
   */
  abilityEvaluation?: number;
  /**
   * @example
   * false
   */
  abilityEvaluationEnabled?: boolean;
  /**
   * @example
   * 10
   */
  assessmentPoint?: number;
  assessmentPointEnabled?: boolean;
  customReplyRuleEnabled?: boolean;
  /**
   * @example
   * 10
   */
  expressiveness?: number;
  /**
   * @example
   * true
   */
  expressivenessEnabled?: boolean;
  /**
   * @example
   * 10
   */
  pointDeductionRule?: number;
  /**
   * @example
   * true
   */
  pointDeductionRuleEnabled?: boolean;
  similarPronunciationScoringEnabled?: boolean;
  /**
   * @example
   * 10
   */
  standard?: number;
  /**
   * @example
   * true
   */
  standardEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      abilityEvaluation: 'abilityEvaluation',
      abilityEvaluationEnabled: 'abilityEvaluationEnabled',
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
      abilityEvaluation: 'number',
      abilityEvaluationEnabled: 'boolean',
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

export class GetAICoachScriptResponseBody extends $dara.Model {
  agentId?: string;
  appendQuestionFlag?: boolean;
  /**
   * @example
   * point
   */
  assessmentScope?: string;
  checkCheatConfig?: GetAICoachScriptResponseBodyCheckCheatConfig;
  closingRemarks?: string;
  completeStrategy?: GetAICoachScriptResponseBodyCompleteStrategy;
  /**
   * @example
   * https://demo.com
   */
  coverUrl?: string;
  customReplyRules?: GetAICoachScriptResponseBodyCustomReplyRules[];
  /**
   * @example
   * 500
   */
  dialogueInputTextLimit?: number;
  /**
   * @example
   * true
   */
  dialogueTextFlag?: boolean;
  /**
   * @example
   * true
   */
  dialogueTipFlag?: boolean;
  /**
   * @example
   * 30
   */
  dialogueVoiceLimit?: number;
  /**
   * @example
   * true
   */
  evaluateReportFlag?: boolean;
  expressiveness?: { [key: string]: number };
  expressivenessList?: GetAICoachScriptResponseBodyExpressivenessList[];
  gifDynamicUrl?: string;
  gifStaticUrl?: string;
  /**
   * @example
   * 2025-02-24 12:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-02-24 12:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * coach
   */
  initiator?: string;
  interactionInputTypes?: string[];
  /**
   * @example
   * 1
   */
  interactionType?: number;
  /**
   * @example
   * demo
   */
  introduce?: string;
  /**
   * @example
   * demo
   */
  name?: string;
  openingRemarks?: string;
  /**
   * @example
   * true
   */
  orderAckFlag?: boolean;
  pointDeductionRuleList?: GetAICoachScriptResponseBodyPointDeductionRuleList[];
  points?: GetAICoachScriptResponseBodyPoints[];
  /**
   * @example
   * 1
   */
  requestId?: string;
  sampleDialogueList?: GetAICoachScriptResponseBodySampleDialogueList[];
  scoreConfig?: GetAICoachScriptResponseBodyScoreConfig;
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
  /**
   * @example
   * true
   */
  studentThinkTimeFlag?: boolean;
  /**
   * @example
   * 100
   */
  studentThinkTimeLimit?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  voiceId?: string;
  voiceLanguage?: string;
  weights?: GetAICoachScriptResponseBodyWeights;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      appendQuestionFlag: 'appendQuestionFlag',
      assessmentScope: 'assessmentScope',
      checkCheatConfig: 'checkCheatConfig',
      closingRemarks: 'closingRemarks',
      completeStrategy: 'completeStrategy',
      coverUrl: 'coverUrl',
      customReplyRules: 'customReplyRules',
      dialogueInputTextLimit: 'dialogueInputTextLimit',
      dialogueTextFlag: 'dialogueTextFlag',
      dialogueTipFlag: 'dialogueTipFlag',
      dialogueVoiceLimit: 'dialogueVoiceLimit',
      evaluateReportFlag: 'evaluateReportFlag',
      expressiveness: 'expressiveness',
      expressivenessList: 'expressivenessList',
      gifDynamicUrl: 'gifDynamicUrl',
      gifStaticUrl: 'gifStaticUrl',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      initiator: 'initiator',
      interactionInputTypes: 'interactionInputTypes',
      interactionType: 'interactionType',
      introduce: 'introduce',
      name: 'name',
      openingRemarks: 'openingRemarks',
      orderAckFlag: 'orderAckFlag',
      pointDeductionRuleList: 'pointDeductionRuleList',
      points: 'points',
      requestId: 'requestId',
      sampleDialogueList: 'sampleDialogueList',
      scoreConfig: 'scoreConfig',
      scriptRecordId: 'scriptRecordId',
      sparringTipContent: 'sparringTipContent',
      sparringTipTitle: 'sparringTipTitle',
      status: 'status',
      studentThinkTimeFlag: 'studentThinkTimeFlag',
      studentThinkTimeLimit: 'studentThinkTimeLimit',
      type: 'type',
      voiceId: 'voiceId',
      voiceLanguage: 'voiceLanguage',
      weights: 'weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appendQuestionFlag: 'boolean',
      assessmentScope: 'string',
      checkCheatConfig: GetAICoachScriptResponseBodyCheckCheatConfig,
      closingRemarks: 'string',
      completeStrategy: GetAICoachScriptResponseBodyCompleteStrategy,
      coverUrl: 'string',
      customReplyRules: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyCustomReplyRules },
      dialogueInputTextLimit: 'number',
      dialogueTextFlag: 'boolean',
      dialogueTipFlag: 'boolean',
      dialogueVoiceLimit: 'number',
      evaluateReportFlag: 'boolean',
      expressiveness: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      expressivenessList: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyExpressivenessList },
      gifDynamicUrl: 'string',
      gifStaticUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      initiator: 'string',
      interactionInputTypes: { 'type': 'array', 'itemType': 'string' },
      interactionType: 'number',
      introduce: 'string',
      name: 'string',
      openingRemarks: 'string',
      orderAckFlag: 'boolean',
      pointDeductionRuleList: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPointDeductionRuleList },
      points: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodyPoints },
      requestId: 'string',
      sampleDialogueList: { 'type': 'array', 'itemType': GetAICoachScriptResponseBodySampleDialogueList },
      scoreConfig: GetAICoachScriptResponseBodyScoreConfig,
      scriptRecordId: 'string',
      sparringTipContent: 'string',
      sparringTipTitle: 'string',
      status: 'number',
      studentThinkTimeFlag: 'boolean',
      studentThinkTimeLimit: 'number',
      type: 'number',
      voiceId: 'string',
      voiceLanguage: 'string',
      weights: GetAICoachScriptResponseBodyWeights,
    };
  }

  validate() {
    if(this.checkCheatConfig && typeof (this.checkCheatConfig as any).validate === 'function') {
      (this.checkCheatConfig as any).validate();
    }
    if(this.completeStrategy && typeof (this.completeStrategy as any).validate === 'function') {
      (this.completeStrategy as any).validate();
    }
    if(Array.isArray(this.customReplyRules)) {
      $dara.Model.validateArray(this.customReplyRules);
    }
    if(this.expressiveness) {
      $dara.Model.validateMap(this.expressiveness);
    }
    if(Array.isArray(this.expressivenessList)) {
      $dara.Model.validateArray(this.expressivenessList);
    }
    if(Array.isArray(this.interactionInputTypes)) {
      $dara.Model.validateArray(this.interactionInputTypes);
    }
    if(Array.isArray(this.pointDeductionRuleList)) {
      $dara.Model.validateArray(this.pointDeductionRuleList);
    }
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
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

