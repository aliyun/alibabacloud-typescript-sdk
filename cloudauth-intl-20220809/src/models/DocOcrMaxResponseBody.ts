// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocOcrMaxResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The card and certificate recognition result. This parameter is returned only when the API response is successful.
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
   * Indicates whether the authentication is passed. Valid values:
   * 
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
   * The authentication ID.
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
   * The response code.
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
   * Id of the request
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
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

