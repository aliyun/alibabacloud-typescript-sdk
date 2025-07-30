// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConditionBasicInfo } from "./ConditionBasicInfo";
import { TaskGraphFlow } from "./TaskGraphFlow";
import { NextNodeSituations } from "./NextNodeSituations";


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

