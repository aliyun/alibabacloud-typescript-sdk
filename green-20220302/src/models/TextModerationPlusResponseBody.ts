// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextModerationPlusResponseBodyDataAdvice extends $dara.Model {
  /**
   * @remarks
   * The suggested answer.
   * 
   * @example
   * XXX
   */
  answer?: string;
  /**
   * @remarks
   * The label that was hit.
   * 
   * @example
   * XXX
   */
  hitLabel?: string;
  /**
   * @remarks
   * The name of the keyword library that was hit.
   * 
   * @example
   * XXX
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
   * The attack level.
   * 
   * @example
   * none
   */
  attackLevel?: string;
  /**
   * @remarks
   * The confidence score.
   * 
   * @example
   * 0
   */
  confidence?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * safe
   */
  description?: string;
  /**
   * @remarks
   * The label.
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
  /**
   * @remarks
   * The output.
   * 
   * @example
   * 正常。文本中无风险内容。
   */
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
  /**
   * @remarks
   * The LLM output.
   */
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
   * The keywords that were hit, separated by commas.
   * 
   * @example
   * xxx
   */
  keyWords?: string;
  /**
   * @remarks
   * The name of the keyword library.
   * 
   * @example
   * 测试词库
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

export class TextModerationPlusResponseBodyDataResultRiskPositions extends $dara.Model {
  /**
   * @remarks
   * The end position of the non-compliant word.
   * 
   * @example
   * 6
   */
  endPos?: number;
  /**
   * @remarks
   * The non-compliant word.
   * 
   * @example
   * 词A
   */
  riskWord?: string;
  /**
   * @remarks
   * The start position of the non-compliant word.
   * 
   * @example
   * 4
   */
  startPos?: number;
  static names(): { [key: string]: string } {
    return {
      endPos: 'EndPos',
      riskWord: 'RiskWord',
      startPos: 'StartPos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPos: 'number',
      riskWord: 'string',
      startPos: 'number',
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
   * The confidence score. The value ranges from 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The custom keywords that were hit.
   */
  customizedHit?: TextModerationPlusResponseBodyDataResultCustomizedHit[];
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * 未检测出风险
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
   * The position information of the risk words.
   */
  riskPositions?: TextModerationPlusResponseBodyDataResultRiskPositions[];
  /**
   * @remarks
   * The risk keywords that were hit.
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
      riskPositions: 'RiskPositions',
      riskWords: 'RiskWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      customizedHit: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataResultCustomizedHit },
      description: 'string',
      label: 'string',
      riskPositions: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataResultRiskPositions },
      riskWords: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customizedHit)) {
      $dara.Model.validateArray(this.customizedHit);
    }
    if(Array.isArray(this.riskPositions)) {
      $dara.Model.validateArray(this.riskPositions);
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
   * The description.
   * 
   * @example
   * 省份
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * 1234
   */
  label?: string;
  /**
   * @remarks
   * The list of sensitive data.
   */
  sensitiveData?: string[];
  /**
   * @remarks
   * The sensitivity level.
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
  /**
   * @remarks
   * The AccountId from the request.
   * 
   * @example
   * 123456789
   */
  accountId?: string;
  /**
   * @remarks
   * The suggested actions.
   */
  advice?: TextModerationPlusResponseBodyDataAdvice[];
  /**
   * @remarks
   * The attack level.
   * 
   * @example
   * none
   */
  attackLevel?: string;
  /**
   * @remarks
   * The prompt attack detection results.
   */
  attackResult?: TextModerationPlusResponseBodyDataAttackResult[];
  /**
   * @remarks
   * The ID of the data that was moderated.
   * 
   * > If you specify the \\`dataId\\` parameter in the request, the value of this parameter is returned.
   * 
   * @example
   * text1234
   */
  dataId?: string;
  /**
   * @remarks
   * The detected language.
   * 
   * @example
   * en
   */
  detectedLanguage?: string;
  /**
   * @remarks
   * The auxiliary information.
   */
  ext?: TextModerationPlusResponseBodyDataExt;
  /**
   * @remarks
   * The ID of the manual review task.
   * 
   * @example
   * xxxxx-xxxxx
   */
  manualTaskId?: string;
  /**
   * @remarks
   * The moderation results.
   */
  result?: TextModerationPlusResponseBodyDataResult[];
  /**
   * @remarks
   * The risk level.
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
   * The sensitivity level.
   * 
   * @example
   * S0
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The sensitive data detection results.
   */
  sensitiveResult?: TextModerationPlusResponseBodyDataSensitiveResult[];
  /**
   * @remarks
   * The translated content.
   * 
   * @example
   * hello
   */
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
   * The return code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: TextModerationPlusResponseBodyData;
  /**
   * @remarks
   * A human-readable description of the error.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
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

