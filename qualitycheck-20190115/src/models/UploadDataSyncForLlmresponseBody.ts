// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo extends $dara.Model {
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

export class UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo extends $dara.Model {
  conditionBasicInfo?: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionBasicInfo: 'ConditionBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionBasicInfo: { 'type': 'array', 'itemType': UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo },
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

export class UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids extends $dara.Model {
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

export class UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord extends $dara.Model {
  from?: number;
  pid?: number;
  tid?: string;
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

export class UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords extends $dara.Model {
  hitKeyWord?: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord[];
  static names(): { [key: string]: string } {
    return {
      hitKeyWord: 'HitKeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitKeyWord: { 'type': 'array', 'itemType': UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord },
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

export class UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase extends $dara.Model {
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

export class UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo extends $dara.Model {
  hitCids?: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids;
  hitKeyWords?: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords;
  phrase?: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase;
  static names(): { [key: string]: string } {
    return {
      hitCids: 'HitCids',
      hitKeyWords: 'HitKeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitCids: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids,
      hitKeyWords: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords,
      phrase: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase,
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

export class UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHit extends $dara.Model {
  conditionHitInfo?: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionHitInfo: 'ConditionHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfo: { 'type': 'array', 'itemType': UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo },
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

export class UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfo extends $dara.Model {
  conditionInfo?: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo;
  hit?: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHit;
  rid?: string;
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
      conditionInfo: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo,
      hit: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHit,
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

export class UploadDataSyncForLLMResponseBodyDataResultInfoRules extends $dara.Model {
  ruleHitInfo?: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleHitInfo: 'RuleHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleHitInfo: { 'type': 'array', 'itemType': UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfo },
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

export class UploadDataSyncForLLMResponseBodyDataResultInfo extends $dara.Model {
  rules?: UploadDataSyncForLLMResponseBodyDataResultInfoRules;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: UploadDataSyncForLLMResponseBodyDataResultInfoRules,
      score: 'number',
    };
  }

  validate() {
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncForLLMResponseBodyData extends $dara.Model {
  resultInfo?: UploadDataSyncForLLMResponseBodyDataResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resultInfo: 'ResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultInfo: { 'type': 'array', 'itemType': UploadDataSyncForLLMResponseBodyDataResultInfo },
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

export class UploadDataSyncForLLMResponseBody extends $dara.Model {
  code?: string;
  data?: UploadDataSyncForLLMResponseBodyData;
  message?: string;
  requestId?: string;
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
      data: UploadDataSyncForLLMResponseBodyData,
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

