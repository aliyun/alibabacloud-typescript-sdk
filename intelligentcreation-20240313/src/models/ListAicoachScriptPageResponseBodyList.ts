// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAICoachScriptPageResponseBodyListCompleteStrategy } from "./ListAicoachScriptPageResponseBodyListCompleteStrategy";
import { ListAICoachScriptPageResponseBodyListCustomReplyRules } from "./ListAicoachScriptPageResponseBodyListCustomReplyRules";
import { ListAICoachScriptPageResponseBodyListSampleDialogueList } from "./ListAicoachScriptPageResponseBodyListSampleDialogueList";
import { ListAICoachScriptPageResponseBodyListScoreConfig } from "./ListAicoachScriptPageResponseBodyListScoreConfig";
import { ListAICoachScriptPageResponseBodyListWeights } from "./ListAicoachScriptPageResponseBodyListWeights";


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

