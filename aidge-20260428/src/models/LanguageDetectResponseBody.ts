// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LanguageDetectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The detected language code.
   * 
   * @example
   * zh
   */
  detectedLanguage?: string;
  /**
   * @remarks
   * The usage information, including the number of input characters.
   * 
   * @example
   * {"InputCharacterCount":4}
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      detectedLanguage: 'DetectedLanguage',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectedLanguage: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LanguageDetectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates a successful call. For other response codes, refer to the error code information.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The language identification result data, including the detected language and usage information.
   */
  data?: LanguageDetectResponseBodyData;
  /**
   * @remarks
   * The error message. "Success" is returned for a successful call. A specific error message is returned for a failed call, such as "The parameters contain sensitive information. Try other input."
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which uniquely identifies the request.
   * 
   * @example
   * 42542C6C-F2A4-1B2B-8EFF-130C8FD06F54
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success. A value of false indicates failure.
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
      data: LanguageDetectResponseBodyData,
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

