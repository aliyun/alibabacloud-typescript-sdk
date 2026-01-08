// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextModerationPlusResponseBodyDataAdvice extends $dara.Model {
  /**
   * @remarks
   * The answer.
   * 
   * @example
   * XXX
   */
  answer?: string;
  /**
   * @remarks
   * Hit Label
   * 
   * @example
   * xxx
   */
  hitLabel?: string;
  /**
   * @remarks
   * Hit Library Name
   * 
   * @example
   * xxx
   */
  hitLibName?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      hitLabel: 'HitLabel',
      hitLibName: 'HitLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      hitLabel: 'string',
      hitLibName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataAttackResult extends $dara.Model {
  /**
   * @remarks
   * The level of prompt attack
   * 
   * @example
   * none
   */
  attackLevel?: string;
  /**
   * @remarks
   * The confidence
   * 
   * @example
   * 0
   */
  confidence?: number;
  /**
   * @remarks
   * Description
   * 
   * @example
   * safe
   */
  description?: string;
  /**
   * @remarks
   * The label
   * 
   * @example
   * safe
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      attackLevel: 'AttackLevel',
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackLevel: 'string',
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataExtLlmContent extends $dara.Model {
  outputText?: string;
  static names(): { [key: string]: string } {
    return {
      outputText: 'OutputText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataExt extends $dara.Model {
  llmContent?: TextModerationPlusResponseBodyDataExtLlmContent;
  static names(): { [key: string]: string } {
    return {
      llmContent: 'LlmContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmContent: TextModerationPlusResponseBodyDataExtLlmContent,
    };
  }

  validate() {
    if(this.llmContent && typeof (this.llmContent as any).validate === 'function') {
      (this.llmContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataResultCustomizedHit extends $dara.Model {
  /**
   * @remarks
   * The terms that are hit. Multiple terms are separated by commas (,).
   * 
   * @example
   * xxx
   */
  keyWords?: string;
  /**
   * @remarks
   * The library name.
   * 
   * @example
   * test
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The custom term hit by the moderated content.
   */
  customizedHit?: TextModerationPlusResponseBodyDataResultCustomizedHit[];
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * none
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The term hit by the moderated content.
   * 
   * @example
   * XXX
   */
  riskWords?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      customizedHit: 'CustomizedHit',
      description: 'Description',
      label: 'Label',
      riskWords: 'RiskWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      customizedHit: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataResultCustomizedHit },
      description: 'string',
      label: 'string',
      riskWords: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customizedHit)) {
      $dara.Model.validateArray(this.customizedHit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyDataSensitiveResult extends $dara.Model {
  /**
   * @remarks
   * Description
   * 
   * @example
   * xxx
   */
  description?: string;
  /**
   * @remarks
   * The label
   * 
   * @example
   * 1234
   */
  label?: string;
  /**
   * @remarks
   * The sensitive data.
   */
  sensitiveData?: string[];
  /**
   * @remarks
   * The level of sensitivity data
   * 
   * @example
   * S1
   */
  sensitiveLevel?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      sensitiveData: 'SensitiveData',
      sensitiveLevel: 'SensitiveLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      sensitiveData: { 'type': 'array', 'itemType': 'string' },
      sensitiveLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveData)) {
      $dara.Model.validateArray(this.sensitiveData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBodyData extends $dara.Model {
  accountId?: string;
  /**
   * @remarks
   * The suggestion.
   */
  advice?: TextModerationPlusResponseBodyDataAdvice[];
  /**
   * @remarks
   * The level of prompt attack
   * 
   * @example
   * none
   */
  attackLevel?: string;
  /**
   * @remarks
   * The result of prompt attack detect
   */
  attackResult?: TextModerationPlusResponseBodyDataAttackResult[];
  /**
   * @remarks
   * The id of data
   * 
   * @example
   * text1234
   */
  dataId?: string;
  detectedLanguage?: string;
  ext?: TextModerationPlusResponseBodyDataExt;
  manualTaskId?: string;
  /**
   * @remarks
   * The results.
   */
  result?: TextModerationPlusResponseBodyDataResult[];
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 1
   */
  score?: number;
  /**
   * @remarks
   * The level of sensitivity data
   * 
   * @example
   * S0
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The result of sensitivity data detect
   */
  sensitiveResult?: TextModerationPlusResponseBodyDataSensitiveResult[];
  translatedContent?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      advice: 'Advice',
      attackLevel: 'AttackLevel',
      attackResult: 'AttackResult',
      dataId: 'DataId',
      detectedLanguage: 'DetectedLanguage',
      ext: 'Ext',
      manualTaskId: 'ManualTaskId',
      result: 'Result',
      riskLevel: 'RiskLevel',
      score: 'Score',
      sensitiveLevel: 'SensitiveLevel',
      sensitiveResult: 'SensitiveResult',
      translatedContent: 'TranslatedContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      advice: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataAdvice },
      attackLevel: 'string',
      attackResult: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataAttackResult },
      dataId: 'string',
      detectedLanguage: 'string',
      ext: TextModerationPlusResponseBodyDataExt,
      manualTaskId: 'string',
      result: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataResult },
      riskLevel: 'string',
      score: 'number',
      sensitiveLevel: 'string',
      sensitiveResult: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataSensitiveResult },
      translatedContent: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.advice)) {
      $dara.Model.validateArray(this.advice);
    }
    if(Array.isArray(this.attackResult)) {
      $dara.Model.validateArray(this.attackResult);
    }
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.sensitiveResult)) {
      $dara.Model.validateArray(this.sensitiveResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationPlusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The moderation results.
   */
  data?: TextModerationPlusResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TextModerationPlusResponseBodyData,
      message: 'string',
      requestId: 'string',
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

