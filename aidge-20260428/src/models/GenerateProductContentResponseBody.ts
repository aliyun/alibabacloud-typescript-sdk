// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateProductContentResponseBodyData extends $dara.Model {
  /**
   * @example
   * title
   */
  contentType?: string;
  /**
   * @example
   * 54
   */
  length?: number;
  /**
   * @example
   * ru
   */
  outputLanguage?: string;
  pointLengths?: number[];
  points?: string[];
  /**
   * @example
   * Чашка Для Мороженого Из Нержавеющей Стали 14,5x10,8 см
   */
  text?: string;
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      length: 'Length',
      outputLanguage: 'OutputLanguage',
      pointLengths: 'PointLengths',
      points: 'Points',
      text: 'Text',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      length: 'number',
      outputLanguage: 'string',
      pointLengths: { 'type': 'array', 'itemType': 'number' },
      points: { 'type': 'array', 'itemType': 'string' },
      text: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.pointLengths)) {
      $dara.Model.validateArray(this.pointLengths);
    }
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
    }
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateProductContentResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: GenerateProductContentResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @example
   * True
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
      data: GenerateProductContentResponseBodyData,
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

