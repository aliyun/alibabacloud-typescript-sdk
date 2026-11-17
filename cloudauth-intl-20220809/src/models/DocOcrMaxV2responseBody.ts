// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocOcrMaxV2ResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID document recognition result. This parameter is returned only when the API response is successful.
   * 
   * @example
   * {
   *   "ocrIdInfo": {
   *     "id_number": "*****719******",
   *     "address": "xxxxxx",
   *     "ethnicity": "Han",
   *     "date_of_birth": "June 02, 1990",
   *     "sex": "Female",
   *     "name": "He**"
   *   },
   *   "ocrStandardData": {
   *     "given_name_s": "**",
   *     "surname_s": "HE",
   *     "date_of_birth_s": "1990-06-02",
   *     "sex_s": "F"
   *   }
   * }
   */
  extIdInfo?: string;
  /**
   * @remarks
   * Indicates whether the authentication is passed. Valid values:
   * - Y: passed.
   * - N: not passed.
   * 
   * @example
   * Y
   */
  passed?: string;
  /**
   * @remarks
   * The sub-result code.
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * The unique identifier of the authentication request.
   * 
   * @example
   * 08573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extIdInfo: 'ExtIdInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extIdInfo: 'string',
      passed: 'string',
      subCode: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocOcrMaxV2ResponseBody extends $dara.Model {
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
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5E63B760-0ECB-5C07-8503-A65C27876968
   */
  requestId?: string;
  /**
   * @remarks
   * The return result.
   */
  result?: DocOcrMaxV2ResponseBodyResult;
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
      result: DocOcrMaxV2ResponseBodyResult,
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

