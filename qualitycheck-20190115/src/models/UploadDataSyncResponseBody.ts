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
  customizeCode?: string;
  from?: number;
  isMatch?: string;
  pid?: number;
  tid?: string;
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      customizeCode: 'CustomizeCode',
      from: 'From',
      isMatch: 'IsMatch',
      pid: 'Pid',
      tid: 'Tid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizeCode: 'string',
      from: 'number',
      isMatch: 'string',
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
  begin?: number;
  beginTime?: string;
  end?: number;
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
  llmResponse?: string;
  rid?: string;
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      conditionInfo: 'ConditionInfo',
      hit: 'Hit',
      llmResponse: 'LlmResponse',
      rid: 'Rid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfo: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo,
      hit: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit,
      llmResponse: 'string',
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
   * @remarks
   * The result `code`. A value of **200** indicates that the request was successful. Other values indicate failure. Use this field to identify the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  data?: UploadDataSyncResponseBodyData;
  /**
   * @remarks
   * The response message. If the request succeeds, the value is **successful**. Otherwise, this parameter provides error details.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The `request ID`.
   * 
   * @example
   * 4987D326-83D9-4A42-B9A5-0B27F9B***
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the request succeeded. `true` indicates success; `false` or `null` indicates failure.
   * 
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

