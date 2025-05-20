// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocOcrMaxResponseBodyResult extends $dara.Model {
  /**
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

