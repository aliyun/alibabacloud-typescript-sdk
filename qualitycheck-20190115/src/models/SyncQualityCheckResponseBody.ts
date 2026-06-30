// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncQualityCheckResponseBodyDataRulesHitHitKeyWords extends $dara.Model {
  /**
   * @remarks
   * Condition ID of the rule.
   * 
   * @example
   * 2312
   */
  cid?: number;
  /**
   * @remarks
   * Start position of the keyword.
   * 
   * @example
   * 1
   */
  from?: number;
  /**
   * @remarks
   * Index value of the hit sentence in the entire conversation.
   * 
   * @example
   * 4
   */
  pid?: number;
  /**
   * @remarks
   * End position of the keyword.
   * 
   * @example
   * 4
   */
  to?: number;
  /**
   * @remarks
   * Keyword.
   * 
   * @example
   * 你好
   */
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
   * @remarks
   * Start time of this sentence relative to the entire conversation, in milliseconds.
   * 
   * @example
   * 1230
   */
  begin?: number;
  /**
   * @remarks
   * Emotional value of this sentence, 0-10. Higher values indicate stronger emotions.
   * 
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @remarks
   * End time of this sentence relative to the entire conversation, in milliseconds.
   * 
   * @example
   * 3440
   */
  end?: number;
  /**
   * @remarks
   * Deprecated field. Ignore it.
   * 
   * @example
   * xxx
   */
  identity?: string;
  /**
   * @remarks
   * Role of this sentence. Valid values: customer service representative, customer.
   * 
   * @example
   * 客服
   */
  role?: string;
  /**
   * @remarks
   * Deprecated field. Ignore it.
   * 
   * @example
   * 123
   */
  silenceDuration?: number;
  /**
   * @remarks
   * Speech rate of this sentence, in characters per minute.
   * 
   * @example
   * 233
   */
  speechRate?: number;
  /**
   * @remarks
   * Dialogue content.
   * 
   * @example
   * 你好请问有什么可以帮您的
   */
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
  /**
   * @remarks
   * Keywords that met the condition.
   */
  hitKeyWords?: SyncQualityCheckResponseBodyDataRulesHitHitKeyWords[];
  /**
   * @remarks
   * Dialogue content that met the condition.
   */
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
  /**
   * @remarks
   * Rule remarks
   * 
   * @example
   * 邀约客户，客户不同意参加试听
   */
  comments?: string;
  /**
   * @remarks
   * Rule importance level
   * 
   * @example
   * 2
   */
  level?: number;
  /**
   * @remarks
   * Rule category name
   * >Notice: The requiredFields parameter must include "ruleInfoBase.ruleCategoryName".
   * 
   * @example
   * 服务规范
   */
  ruleCategoryName?: string;
  /**
   * @remarks
   * Score value
   * 
   * @example
   * 1
   */
  scoreNum?: number;
  /**
   * @remarks
   * Scoring type. 0: bonus/penalty points, 1: one-time score.
   * 
   * @example
   * 1
   */
  scoreNumType?: number;
  /**
   * @remarks
   * 1 for bonus points, 3 for penalty points. Default is 1.
   * 
   * @example
   * 1
   */
  scoreType?: number;
  /**
   * @remarks
   * Rule type ID
   * >Notice: The requiredFields parameter must include "ruleInfoBase".
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * List of hit sentences. For this API, if a hit occurs, it is a single data entry.
   */
  hit?: SyncQualityCheckResponseBodyDataRulesHit[];
  /**
   * @remarks
   * ID of the hit rule.
   * 
   * @example
   * 232232
   */
  rid?: string;
  /**
   * @remarks
   * Rule basic information
   */
  ruleInfoBase?: SyncQualityCheckResponseBodyDataRulesRuleInfoBase;
  /**
   * @remarks
   * Name of the hit rule.
   * 
   * @example
   * 禁用语
   */
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
   * @remarks
   * Time of recording and dialogue occurrence, in milliseconds since January 1, 1970, 00:00:00 UTC (UNIX timestamp in milliseconds, such as 1584535485856).
   * 
   * @example
   * 1584535485856
   */
  beginTime?: number;
  /**
   * @remarks
   * List of hit rules. Each item is a rule. Only hit rule information and hit rule location information are returned.
   */
  rules?: SyncQualityCheckResponseBodyDataRules[];
  /**
   * @remarks
   * Final score, with a maximum of 100.
   * 
   * @example
   * 100
   */
  score?: number;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 66E1ACB866E1ACB8
   */
  taskId?: string;
  /**
   * @remarks
   * Unique identifier for the current conversation.
   * 
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
   * @remarks
   * Result status code. 200 indicates success. Other values indicate failure. The caller can determine the reason for failure using this field.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned result, including hit information.
   */
  data?: SyncQualityCheckResponseBodyData;
  /**
   * @remarks
   * Error details if an error occurs. "successful" if successful.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier.
   * 
   * @example
   * 66E1ACB8-17B2-4BE8-8581-954A8*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. The caller can use this field to determine if the request succeeded: true for success; false/null for failure.
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

