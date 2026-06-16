// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialRecognitionIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The key information extracted from the credential, in JSON format.
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
   * The description of the authentication result.
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * The extraction result. Valid values:
   * - S: Succeeded.
   * - F: Failed.
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
   * The return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
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

