// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CardOcrResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Document recognition result
   * 
   * @example
   * {
   *   "idFaceQualityScore": 98.90,
   *   "ocrIdInfo": {
   *     "expiryDate": "2024-04-20",
   *     "placeOfIssue": "广东",
   *     "englishName": "ZHENGJIAN,YANGBEN",
   *     "originOfIssue": "公安部出入境管理局",
   *     "sex": "女",
   *     "name": "证件样本",
   *     "idNumber": "C00000000",
   *     "issueDate": "2014-04-21",
   *     "birthDate": "1981-08-03"
   *   },
   *   "spoofInfo": {
   *     "spoofResult": "N",
   *     "spoofType": [
   *       "SCREEN_REMARK"
   *     ]
   *   }
   * }
   */
  extCardInfo?: string;
  /**
   * @remarks
   * Additional result information
   * 
   * @example
   * **
   */
  extIdInfo?: string;
  /**
   * @remarks
   * Whether the authentication passed.
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
   * Sub-result code.
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * Unique identifier for the authentication request
   * 
   * @example
   * 08573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extCardInfo: 'ExtCardInfo',
      extIdInfo: 'ExtIdInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extCardInfo: 'string',
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

export class CardOcrResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 4EB356FE-BB6A-5DCC-B4C5-E8051787EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * Return result
   */
  result?: CardOcrResponseBodyResult;
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
      result: CardOcrResponseBodyResult,
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

