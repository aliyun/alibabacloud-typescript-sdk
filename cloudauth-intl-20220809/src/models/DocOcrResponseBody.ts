// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocOcrResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The card and certificate recognition result. This parameter is returned only when the API response is successful.
   * 
   * @example
   * {
   *   "idFaceQualityScore": 98.0
   *   "ocrIdInfo": {
   *     "expiryDate": "",
   *     "originOfIssue": "公安部出入境管理局",
   *     "englishName": "LI SI",
   *     "sex": "男",
   *     "name": "李四",
   *     "idNumber": "H11111112",
   *     "issueDate": "2013-01-02",
   *     "birthDate": "1990-02-21"
   *   },
   *   "spoofInfo": {
   *     "spoofResult": "Y",
   *     "spoofType": [
   *       "SCREEN_REMARK"
   *     ]
   *   }
   * }
   */
  extIdInfo?: string;
  /**
   * @remarks
   * Indicates whether the authentication is passed. Valid values:
   * 
   * - Y: Passed.
   * - N: Not passed.
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

export class DocOcrResponseBody extends $dara.Model {
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
   * 86C40EC3-5940-5F47-995C-BFE90B70E540
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DocOcrResponseBodyResult;
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
      result: DocOcrResponseBodyResult,
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

