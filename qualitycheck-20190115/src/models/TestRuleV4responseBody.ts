// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConditionBasicInfo } from "./ConditionBasicInfo";
import { TaskGraphFlow } from "./TaskGraphFlow";
import { NextNodeSituations } from "./NextNodeSituations";


export class TestRuleV4ResponseBodyDataHitRuleReviewInfoListBranchInfoList extends $dara.Model {
  /**
   * @remarks
   * Check item type.
   * 
   * @example
   * 0
   */
  checkType?: number;
  /**
   * @remarks
   * Index number.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * Lambda expression.
   * 
   * @example
   * a&&b
   */
  lambda?: string;
  /**
   * @remarks
   * Node name.
   * 
   * @example
   * 节点A
   */
  name?: string;
  /**
   * @remarks
   * ID of the next flow node.
   * 
   * @example
   * 2
   */
  nextNodeId?: number;
  /**
   * @remarks
   * Flow node condition.
   */
  situation?: NextNodeSituations;
  /**
   * @remarks
   * List of trigger IDs.
   */
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
   * @remarks
   * Condition ID.
   * 
   * @example
   * 4
   */
  cid?: string;
  /**
   * @remarks
   * Internal field. Ignore this field.
   * 
   * @example
   * 无
   */
  customizeCode?: string;
  /**
   * @remarks
   * Starting character position for highlighting. Index starts at 0. Maximum value is the total number of characters in the sentence minus 1. The character at position from is included in the highlight.
   * 
   * @example
   * 1
   */
  from?: number;
  /**
   * @remarks
   * Operator ID.
   * 
   * @example
   * 123
   */
  oid?: string;
  /**
   * @remarks
   * Key information matched by the operator.
   * 
   * @example
   * 无
   */
  operatorKey?: string;
  /**
   * @remarks
   * Index of this sentence in the full list of sentences. This is the index of the sentence in the dialogues array of the request parameters, starting from 0.
   * 
   * @example
   * 13
   */
  pid?: number;
  /**
   * @remarks
   * Similar phrase.
   * 
   * @example
   * 您好
   */
  similarPhrase?: string;
  /**
   * @remarks
   * Internal use only. Ignore this field.
   * 
   * @example
   * 无
   */
  tid?: string;
  /**
   * @remarks
   * The position of the character that follows the highlighted keyword. The character at the \\`to\\` position is not included in the highlight. For example, if \\`from\\` is 0 and \\`to\\` is 3, the highlighted keyword consists of the characters at indices 0, 1, and 2. The maximum value is one less than the total number of characters in the sentence.
   * 
   * @example
   * 3
   */
  to?: number;
  /**
   * @remarks
   * Internal use only. Ignore this field.
   * 
   * @example
   * 无
   */
  uuid?: string;
  /**
   * @remarks
   * Key information matched by the operator. For details, see **Detailed explanation of Val key information** in the response parameter description below.
   * 
   * @example
   * 你好
   */
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
   * @remarks
   * Start time offset of this sentence relative to the start of the full dialogue, in milliseconds. For example, if the total audio duration is 2 minutes and 10 seconds, and a customer starts speaking at 1 minute and 12 seconds and finishes at 1 minute and 20 seconds, then begin equals 72000 and end equals 80000.
   * 
   * @example
   * 72000
   */
  begin?: number;
  /**
   * @remarks
   * Start time of this sentence. Example: 2019-11-25 15:37:16.
   * 
   * @example
   * 2019-11-25 15:37:16
   */
  beginTime?: string;
  /**
   * @remarks
   * Channel ID.
   * 
   * @example
   * 0
   */
  channelId?: number;
  /**
   * @remarks
   * Internal use only. Ignore this field.
   * 
   * @example
   * 忽略
   */
  emotionFineGrainedValue?: number;
  /**
   * @remarks
   * Emotion intensity score. Value equals volume in decibels divided by 10. Valid range: [1, 10]. Higher values indicate stronger emotion.
   * 
   * @example
   * 7
   */
  emotionValue?: number;
  /**
   * @remarks
   * End time offset of this sentence relative to the start of the full dialogue, in milliseconds. For example, if the total audio duration is 2 minutes and 10 seconds, and a customer starts speaking at 1 minute and 12 seconds and finishes at 1 minute and 20 seconds, then begin equals 72000 and end equals 80000.
   * 
   * @example
   * 80000
   */
  end?: number;
  /**
   * @remarks
   * Hit status. Valid values:
   * 
   * - **0**: Not hit
   * 
   * - **1**: Hit
   * 
   * @example
   * 1
   */
  hitStatus?: number;
  /**
   * @remarks
   * Start time of this sentence in hh:mm:ss format.
   * 
   * @example
   * 10:00:00
   */
  hourMinSec?: string;
  /**
   * @remarks
   * Role identifier. In offline voice scenarios, roles are limited to agent or customer. In offline text quality check scenarios, this field shows the identity value passed in during upload.
   * 
   * @example
   * 客服
   */
  identity?: string;
  /**
   * @remarks
   * Index of this sentence in the full list of sentences. This is the index of the sentence in the dialogues array of the request parameters, starting from 0.
   * 
   * @example
   * 3
   */
  pid?: number;
  /**
   * @remarks
   * Internal use only. Ignore this field.
   * 
   * @example
   * 无
   */
  renterId?: number;
  /**
   * @remarks
   * Speaker role for this sentence. Valid values: agent and customer.
   * 
   * @example
   * 客服
   */
  role?: string;
  /**
   * @remarks
   * Internal use only. Ignore this field.
   * 
   * @example
   * 无
   */
  sid?: number;
  /**
   * @remarks
   * Silence duration, in milliseconds.
   * 
   * @example
   * 1000
   */
  silenceDuration?: number;
  /**
   * @remarks
   * Average speech rate for this sentence, in words per minute.
   * 
   * @example
   * 100
   */
  speechRate?: number;
  /**
   * @remarks
   * Internal use only. Ignore this field.
   * 
   * @example
   * 无
   */
  uuid?: string;
  /**
   * @remarks
   * Dialogue content.
   * 
   * @example
   * 你好，请问有什么可以帮您
   */
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
  /**
   * @remarks
   * Condition ID.
   */
  cid?: string[];
  /**
   * @remarks
   * Key information that was hit. This information appears highlighted on the review page. Examples include keywords matched by a keyword-check operator or category information matched by an agent-model-check operator.
   */
  keyWords?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListKeyWords[];
  /**
   * @remarks
   * Sentence details for the current hit check item.
   */
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
   * @remarks
   * ID of the hit branch.
   * 
   * @example
   * 1
   */
  branchHitId?: number;
  /**
   * @remarks
   * List of branch information.
   */
  branchInfoList?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListBranchInfoList[];
  /**
   * @remarks
   * Information about hit conditions.
   */
  conditionHitInfoList?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoList[];
  /**
   * @remarks
   * List of conditions.
   */
  conditionInfoList?: ConditionBasicInfo[];
  /**
   * @remarks
   * Judgement node name.
   * 
   * @example
   * 判断节点A
   */
  judgeNodeName?: string;
  /**
   * @remarks
   * Lambda expression. Example: a&\\&b.
   * 
   * @example
   * a&&b
   */
  lambda?: string;
  /**
   * @remarks
   * Whether the rule was hit.
   * 
   * @example
   * true
   */
  matched?: boolean;
  /**
   * @remarks
   * Node type.
   * 
   * @example
   * 0
   */
  nodeType?: string;
  /**
   * @remarks
   * Check item ID.
   * 
   * @example
   * 451
   */
  rid?: number;
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * 规则A
   */
  ruleName?: string;
  /**
   * @remarks
   * Whether scoring applies. Valid values: 1 (no scoring) and 3 (scoring).
   * 
   * @example
   * 1
   */
  ruleScoreType?: number;
  /**
   * @remarks
   * Scoring type. Valid values: 0 (add or subtract points on hit) and 1 (one-time score on hit).
   * 
   * @example
   * 1
   */
  scoreNumType?: number;
  /**
   * @remarks
   * Flow ID.
   * 
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
  /**
   * @remarks
   * Flowchart canvas.
   */
  graphFlow?: TaskGraphFlow;
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 1
   */
  rid?: number;
  /**
   * @remarks
   * Flowchart type. Deprecated. Default value: 1.
   * 
   * @example
   * 无
   */
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
  /**
   * @remarks
   * List of conditions.
   */
  conditionInfoList?: ConditionBasicInfo[];
  /**
   * @remarks
   * Whether the rule was hit.
   * 
   * @example
   * true
   */
  matched?: boolean;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 2
   */
  rid?: number;
  /**
   * @remarks
   * Flowchart type. Deprecated. Default value: 1.
   * 
   * @example
   * 忽略
   */
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
  /**
   * @remarks
   * Information about hit check items.
   */
  hitRuleReviewInfoList?: TestRuleV4ResponseBodyDataHitRuleReviewInfoList[];
  /**
   * @remarks
   * List of hit advanced flow nodes.
   */
  hitTaskFlowList?: TestRuleV4ResponseBodyDataHitTaskFlowList[];
  /**
   * @remarks
   * Information about rules that were not hit.
   */
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

export class TestRuleV4ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. 200 indicates success. Other values indicate failure. Callers can use this field to identify the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Full response body.
   */
  data?: TestRuleV4ResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error details when an error occurs. Returns successful when the request succeeds.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 96138D8D-XXXX-4E41-XXXX-77AED1088BBD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Callers can use this field to determine success: true means success; false or null means failure.
   * 
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

