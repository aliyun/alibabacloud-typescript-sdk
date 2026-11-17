// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdnAuthorityVerifyIntlResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The detailed verification results of the data source. The following descriptions use the Indonesian data source as an example:
   * - **govId, fullName, dob**: A comparison score of 1.0 indicates that the information is completely consistent with the official data source. A score lower than 1.0 indicates inconsistency. 
   * - **selfiePhoto**: A comparison score greater than 0.8 indicates that the information is consistent with the official data source. A score lower than or equal to 0.8 indicates inconsistency. 
   * - **liveness**: A score higher than 0.95 indicates a liveness detection risk. 
   * - **imgManipulationScore**: A score higher than 0.95 indicates an image tampering risk.
   * 
   * @example
   * {
   *   "govId": 1.0,
   *   "fullName": 1.0,
   *   "dob": 0.9,
   *   "selfiePhoto": 0.8777,
   *   "liveness": 0.1152,
   *   "imgManipulationScore": 0.2253
   * }
   */
  extSourceInfo?: string;
  /**
   * @remarks
   * Indicates whether the verification is passed. Valid values:
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
   * hk573be80f944d95ac812e0*******a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extSourceInfo: 'ExtSourceInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSourceInfo: 'string',
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

export class IdnAuthorityVerifyIntlResponseBody extends $dara.Model {
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
   * 5E63B760-0ECB-5C07-8503-A65C27876968
   */
  requestId?: string;
  /**
   * @remarks
   * The response result.
   */
  result?: IdnAuthorityVerifyIntlResponseBodyResult;
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
      result: IdnAuthorityVerifyIntlResponseBodyResult,
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

