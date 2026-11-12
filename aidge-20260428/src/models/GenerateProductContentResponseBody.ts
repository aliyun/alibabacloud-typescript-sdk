// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateProductContentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The actual copy type processed.
   * 
   * @example
   * title
   */
  contentType?: string;
  /**
   * @remarks
   * The total number of characters in data.text, including formatting characters such as spaces, punctuation marks, and line breaks.
   * 
   * @example
   * 54
   */
  length?: number;
  /**
   * @remarks
   * The code of the actual output language.
   * 
   * @example
   * ru
   */
  outputLanguage?: string;
  /**
   * @remarks
   * Returned only when bullet point processing is successful. The number of characters for each point, corresponding to data.points one by one.
   */
  pointLengths?: number[];
  /**
   * @remarks
   * Returned only when bullet point processing is successful. The selling point texts arranged in output order.
   */
  points?: string[];
  /**
   * @remarks
   * The final copy. Generated keywords are separated by commas and spaces. Rewritten keywords are separated by spaces. Bullet points are separated by line breaks.
   * 
   * @example
   * Чашка Для Мороженого Из Нержавеющей Стали 14,5x10,8 см
   */
  text?: string;
  /**
   * @remarks
   * The usage information.
   */
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
   * @remarks
   * The error code. This parameter is not returned for normal calls.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The processing result. Contains copy data upon success. Returns a fixed value when the business processing fails.
   */
  data?: GenerateProductContentResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned for normal calls.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID, used for troubleshooting. It may be empty in extreme exception cases.
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the business processing is successful. Valid values:
   * - true: The output passes the verification.
   * - false: The business processing fails.
   * 
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

