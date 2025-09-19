// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EkycVerifyResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Information about the face liveness verification result. For the JSON format, see the example on the right. For more information, see [ExtFaceInfo](https://www.alibabacloud.com/help/en/ekyc/latest/im1u641gyesiqmbg?spm=a2c63.p38356.0.i18#JJ40j).
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
   * Information about the certificate detection result.
   * 
   * For the JSON format, see the example on the right. For more information, see [ExtIdInfo](https://www.alibabacloud.com/help/en/ekyc/latest/im1u641gyesiqmbg?spm=a2c63.p38356.0.i18#iWOBY).
   * 
   * @example
   * {
   *   "ocrIdInfo": {
   *     "expiryDate": "",
   *     "originOfIssue": "Exit and Entry Administration of the Ministry of Public Security",
   *     "englishName": "LI SI",
   *     "sex": "Male",
   *     "name": "Li Si",
   *     "idNumber": "H11111112",
   *     "issueDate": "2013-01-02",
   *     "birthDate": "1990-02-21"
   *   },
   *   "ocrIdPassed": "N",
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
   * The final authentication result. Valid values:
   * 
   * - **Y**: The authentication is passed.
   * 
   * - **N**: The authentication fails.
   * 
   * @example
   * Y
   */
  passed?: string;
  /**
   * @remarks
   * A description of the authentication result. For more information, see [Error codes for ResultObject.SubCode](https://www.alibabacloud.com/help/en/ekyc/latest/im1u641gyesiqmbg?spm=a2c63.p38356.0.i18#HCGLb).
   * 
   * @example
   * 205
   */
  subCode?: string;
  /**
   * @remarks
   * The transaction ID.
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
   * The [response code](https://www.alibabacloud.com/help/en/ekyc/latest/im1u641gyesiqmbg?spm=a2c63.p38356.0.i18#GiGmf).
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * A detailed description of the response code.
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
   * Result object
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

