// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAICoachScriptResponseBodyCheckCheatConfig } from "./GetAicoachScriptResponseBodyCheckCheatConfig";
import { GetAICoachScriptResponseBodyCompleteStrategy } from "./GetAicoachScriptResponseBodyCompleteStrategy";
import { GetAICoachScriptResponseBodyCustomReplyRules } from "./GetAicoachScriptResponseBodyCustomReplyRules";
import { GetAICoachScriptResponseBodyExpressivenessList } from "./GetAicoachScriptResponseBodyExpressivenessList";
import { GetAICoachScriptResponseBodyPointDeductionRuleList } from "./GetAicoachScriptResponseBodyPointDeductionRuleList";
import { GetAICoachScriptResponseBodyPoints } from "./GetAicoachScriptResponseBodyPoints";
import { GetAICoachScriptResponseBodySampleDialogueList } from "./GetAicoachScriptResponseBodySampleDialogueList";
import { GetAICoachScriptResponseBodyScoreConfig } from "./GetAicoachScriptResponseBodyScoreConfig";
import { GetAICoachScriptResponseBodyWeights } from "./GetAicoachScriptResponseBodyWeights";


export class GetAICoachScriptResponseBody extends $dara.Model {
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
  weights?: GetAICoachScriptResponseBodyWeights;
  static names(): { [key: string]: string } {
    return {
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
      weights: 'weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

