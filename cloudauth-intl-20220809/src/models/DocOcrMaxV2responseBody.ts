// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocOcrMaxV2ResponseBodyResult extends $dara.Model {
  /**
   * @example
   * {
   *   "ocrIdInfo": {
   *     "id_number": "*****719******",
   *     "address": "xxxxxx,
   *     "ethnicity": "汉",
   *     "date_of_birth": "1990年06月02日",
   *     "sex": "女",
   *     "name": "何**"
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
   * @example
   * Y
   */
  passed?: string;
  /**
   * @example
   * 200
   */
  subCode?: string;
  /**
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
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5E63B760-0ECB-5C07-8503-A65C27876968
   */
  requestId?: string;
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

