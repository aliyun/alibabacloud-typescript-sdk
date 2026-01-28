// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDataSyncResponseBodyDataResultInfoHandScoreIdList extends $dara.Model {
  handScoreIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      handScoreIdList: 'HandScoreIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handScoreIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.handScoreIdList)) {
      $dara.Model.validateArray(this.handScoreIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo extends $dara.Model {
  /**
   * @example
   * xxx
   */
  conditionInfoCid?: string;
  static names(): { [key: string]: string } {
    return {
      conditionInfoCid: 'ConditionInfoCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfoCid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo extends $dara.Model {
  conditionBasicInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionBasicInfo: 'ConditionBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionBasicInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo },
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

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids extends $dara.Model {
  cidItem?: string[];
  static names(): { [key: string]: string } {
    return {
      cidItem: 'CidItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidItem: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cidItem)) {
      $dara.Model.validateArray(this.cidItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord extends $dara.Model {
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 1
   */
  pid?: number;
  /**
   * @example
   * 1
   */
  tid?: string;
  /**
   * @example
   * 1
   */
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      pid: 'Pid',
      tid: 'Tid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      pid: 'number',
      tid: 'string',
      to: 'number',
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

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords extends $dara.Model {
  hitKeyWord?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord[];
  static names(): { [key: string]: string } {
    return {
      hitKeyWord: 'HitKeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitKeyWord: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord },
    };
  }

  validate() {
    if(Array.isArray(this.hitKeyWord)) {
      $dara.Model.validateArray(this.hitKeyWord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase extends $dara.Model {
  /**
   * @example
   * 0
   */
  begin?: number;
  /**
   * @example
   * 1564574
   */
  beginTime?: string;
  /**
   * @example
   * 2090
   */
  end?: number;
  /**
   * @example
   * 1
   */
  identity?: string;
  role?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      end: 'number',
      identity: 'string',
      role: 'string',
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

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo extends $dara.Model {
  hitCids?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids;
  hitKeyWords?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords;
  phrase?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase;
  static names(): { [key: string]: string } {
    return {
      hitCids: 'HitCids',
      hitKeyWords: 'HitKeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitCids: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids,
      hitKeyWords: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords,
      phrase: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase,
    };
  }

  validate() {
    if(this.hitCids && typeof (this.hitCids as any).validate === 'function') {
      (this.hitCids as any).validate();
    }
    if(this.hitKeyWords && typeof (this.hitKeyWords as any).validate === 'function') {
      (this.hitKeyWords as any).validate();
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

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit extends $dara.Model {
  conditionHitInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionHitInfo: 'ConditionHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo },
    };
  }

  validate() {
    if(Array.isArray(this.conditionHitInfo)) {
      $dara.Model.validateArray(this.conditionHitInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo extends $dara.Model {
  conditionInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo;
  hit?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit;
  /**
   * @example
   * 801
   */
  rid?: string;
  /**
   * @example
   * 88888888
   */
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      conditionInfo: 'ConditionInfo',
      hit: 'Hit',
      rid: 'Rid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfo: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo,
      hit: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit,
      rid: 'string',
      tid: 'string',
    };
  }

  validate() {
    if(this.conditionInfo && typeof (this.conditionInfo as any).validate === 'function') {
      (this.conditionInfo as any).validate();
    }
    if(this.hit && typeof (this.hit as any).validate === 'function') {
      (this.hit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRules extends $dara.Model {
  ruleHitInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleHitInfo: 'RuleHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleHitInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleHitInfo)) {
      $dara.Model.validateArray(this.ruleHitInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfo extends $dara.Model {
  handScoreIdList?: UploadDataSyncResponseBodyDataResultInfoHandScoreIdList;
  rules?: UploadDataSyncResponseBodyDataResultInfoRules;
  /**
   * @example
   * 100
   */
  score?: number;
  tyxmPlusCount?: string;
  tyxmTurboCount?: string;
  static names(): { [key: string]: string } {
    return {
      handScoreIdList: 'HandScoreIdList',
      rules: 'Rules',
      score: 'Score',
      tyxmPlusCount: 'TyxmPlusCount',
      tyxmTurboCount: 'TyxmTurboCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handScoreIdList: UploadDataSyncResponseBodyDataResultInfoHandScoreIdList,
      rules: UploadDataSyncResponseBodyDataResultInfoRules,
      score: 'number',
      tyxmPlusCount: 'string',
      tyxmTurboCount: 'string',
    };
  }

  validate() {
    if(this.handScoreIdList && typeof (this.handScoreIdList as any).validate === 'function') {
      (this.handScoreIdList as any).validate();
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

export class UploadDataSyncResponseBodyData extends $dara.Model {
  resultInfo?: UploadDataSyncResponseBodyDataResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resultInfo: 'ResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfo },
    };
  }

  validate() {
    if(Array.isArray(this.resultInfo)) {
      $dara.Model.validateArray(this.resultInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: UploadDataSyncResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 4987D326-83D9-4A42-B9A5-0B27F9B***
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
      data: UploadDataSyncResponseBodyData,
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

