// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextCorrectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The corrected text.
   * 
   * @example
   * Empfehlung
   */
  correctedText?: string;
  /**
   * @remarks
   * Usage information, including the number of input characters.
   * 
   * @example
   * {"InputCharacterCount":9}
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      correctedText: 'CorrectedText',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      correctedText: 'string',
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

export class TextCorrectResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code. Returns "success" during normal calls.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Intelligent error correction result data.
   */
  data?: TextCorrectResponseBodyData;
  /**
   * @remarks
   * Error message. Returns "Success" during normal calls. Returns specific error information during exceptions, such as "The parameters contain sensitive information. Please try a different input."
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used to identify a unique request call.
   * 
   * @example
   * 32882AD0-50D1-1D90-A221-3987325EC03E
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. true indicates success, false indicates failure.
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
      data: TextCorrectResponseBodyData,
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

