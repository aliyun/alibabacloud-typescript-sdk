// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EkycVerifyResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The face verification result information.
   * 
   * @example
   * {
   * "faceAttack": "N",
   * "faceComparisonScore": 52.57,
   * "facePassed": "N",
   * "authorityComparisonScore": 80.39
   * }
   */
  extFaceInfo?: string;
  /**
   * @remarks
   * The document recognition result. This parameter is returned only when the API response is successful.
   * 
   * @example
   * {
   *  "ocrIdInfo": {
   *  "firstName": "**龙",
   *  "lastName": "**",
   *  "countryCode": "CHN",
   *  "docType": "01560001",
   *  "dateOfBirth": "2002-08-04",
   *  "idNumber": "410************19"
   *  },
   *  "ocrIdPassed": "N",
   *  "spoofInfo": {
   *  "spoofResult": "Y",
   *  }
   * }
   */
  extIdInfo?: string;
  /**
   * @remarks
   * Indicates whether the verification is passed. Valid values:
   * - T: Passed.
   * - F: Not passed.
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
   * 205
   */
  subCode?: string;
  /**
   * @remarks
   * The unique identifier of the verification request.
   * 
   * @example
   * 4ab0b***cbde97
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extFaceInfo: 'ExtFaceInfo',
      extIdInfo: 'ExtIdInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extFaceInfo: 'string',
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

export class EkycVerifyResponseBody extends $dara.Model {
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
   * 4EB356FE-BB6A-5DCC-B4C5-E8051787EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: EkycVerifyResponseBodyResult;
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
      result: EkycVerifyResponseBodyResult,
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

