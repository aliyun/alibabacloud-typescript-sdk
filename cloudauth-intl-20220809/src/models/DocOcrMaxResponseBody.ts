// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocOcrMaxResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Card and document recognition result	Only returned when the interface response is successful
   * 
   * @example
   * {
   *   "docType": "PPTW01",
   *   "ocrIdInfo": {
   *     "passportNo": "36*******",
   *     "expiryDate": "2032/02/10",
   *     "placeOfBirth": "TAIWAN",
   *     "surname": "CHEN",
   *     "givenname": "LIN-CHUN",
   *     "countryCode": "TWN",
   *     "sex": "F",
   *     "personalNo": "S22********",
   *     "issueDate": "2022/02/10",
   *     "birthDate": "1988/10/04"
   *   }
   * }
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
   * Authentication ID
   * 
   * @example
   * hk573be80f944d95ac812e0*******a8
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

export class DocOcrMaxResponseBody extends $dara.Model {
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
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * Return result
   */
  result?: DocOcrMaxResponseBodyResult;
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
      result: DocOcrMaxResponseBodyResult,
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

