// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialRecognitionIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Identified key information in JSON format.
   * 
   * @example
   * {
   *   "address": "",
   *   "name":""
   * }
   */
  extIdInfo?: string;
  /**
   * @remarks
   * Authentication result description
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * Extraction result. Values:
   * - S: Success.
   * - F: Failure.
   * 
   * @example
   * S
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      extIdInfo: 'ExtIdInfo',
      subCode: 'SubCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extIdInfo: 'string',
      subCode: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialRecognitionIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Response message for the returned information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result.
   */
  result?: CredentialRecognitionIntlResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CredentialRecognitionIntlResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

