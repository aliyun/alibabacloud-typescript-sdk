// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncQualityCheckResponseBodyDataRulesHitHitKeyWords extends $dara.Model {
  /**
   * @example
   * 2312
   */
  cid?: number;
  /**
   * @example
   * 1
   */
  from?: number;
  /**
   * @example
   * 4
   */
  pid?: number;
  /**
   * @example
   * 4
   */
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      from: 'From',
      pid: 'Pid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'number',
      from: 'number',
      pid: 'number',
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

export class SyncQualityCheckResponseBodyDataRulesHitPhrase extends $dara.Model {
  /**
   * @example
   * 1230
   */
  begin?: number;
  /**
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @example
   * 3440
   */
  end?: number;
  /**
   * @example
   * xxx
   */
  identity?: string;
  role?: string;
  /**
   * @example
   * 123
   */
  silenceDuration?: number;
  /**
   * @example
   * 233
   */
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      identity: 'string',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
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

export class SyncQualityCheckResponseBodyDataRulesHit extends $dara.Model {
  hitKeyWords?: SyncQualityCheckResponseBodyDataRulesHitHitKeyWords[];
  phrase?: SyncQualityCheckResponseBodyDataRulesHitPhrase;
  static names(): { [key: string]: string } {
    return {
      hitKeyWords: 'HitKeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitKeyWords: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRulesHitHitKeyWords },
      phrase: SyncQualityCheckResponseBodyDataRulesHitPhrase,
    };
  }

  validate() {
    if(Array.isArray(this.hitKeyWords)) {
      $dara.Model.validateArray(this.hitKeyWords);
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

export class SyncQualityCheckResponseBodyDataRulesRuleInfoBase extends $dara.Model {
  comments?: string;
  level?: number;
  ruleCategoryName?: string;
  scoreNum?: number;
  scoreNumType?: number;
  scoreType?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      level: 'Level',
      ruleCategoryName: 'RuleCategoryName',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreType: 'ScoreType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      level: 'number',
      ruleCategoryName: 'string',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreType: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRules extends $dara.Model {
  hit?: SyncQualityCheckResponseBodyDataRulesHit[];
  /**
   * @example
   * 232232
   */
  rid?: string;
  ruleInfoBase?: SyncQualityCheckResponseBodyDataRulesRuleInfoBase;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
      rid: 'Rid',
      ruleInfoBase: 'RuleInfoBase',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRulesHit },
      rid: 'string',
      ruleInfoBase: SyncQualityCheckResponseBodyDataRulesRuleInfoBase,
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hit)) {
      $dara.Model.validateArray(this.hit);
    }
    if(this.ruleInfoBase && typeof (this.ruleInfoBase as any).validate === 'function') {
      (this.ruleInfoBase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1584535485856
   */
  beginTime?: number;
  rules?: SyncQualityCheckResponseBodyDataRules[];
  /**
   * @example
   * 100
   */
  score?: number;
  /**
   * @example
   * 66E1ACB866E1ACB8
   */
  taskId?: string;
  /**
   * @example
   * 20200876-66E1ACB8
   */
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      rules: 'Rules',
      score: 'Score',
      taskId: 'TaskId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      rules: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRules },
      score: 'number',
      taskId: 'string',
      tid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: SyncQualityCheckResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 66E1ACB8-17B2-4BE8-8581-954A8*****
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
      data: SyncQualityCheckResponseBodyData,
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

