// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResultResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The authentication result.
   * 
   * @example
   * **
   */
  ekycResult?: string;
  /**
   * @remarks
   * The extended basic information.
   * 
   * @example
   * **
   */
  extBasicInfo?: string;
  /**
   * @remarks
   * The face information.
   * 
   * @example
   * {"facePassed":"Y"}
   */
  extFaceInfo?: string;
  /**
   * @remarks
   * The ID information.
   * 
   * @example
   * {"ocrIdPassed":"Y"}
   */
  extIdInfo?: string;
  /**
   * @remarks
   * The extended information, which is a JSON string.
   * 
   * @example
   * {}
   */
  extInfo?: string;
  /**
   * @remarks
   * The risk information.
   * 
   * @example
   * **
   */
  extRiskInfo?: string;
  /**
   * @remarks
   * The detailed verification results of the data source. The following descriptions use the Indonesian data source as an example:
   * - **govId, fullName, dob**: A comparison score of 1.0 indicates an exact match with the official data source information. A score lower than 1.0 indicates a mismatch. 
   * - **selfiePhoto**: A comparison score greater than 0.8 indicates a match with the official data source information. A score lower than or equal to 0.8 indicates a mismatch. 
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
   * Specifies whether the authentication is passed. Valid values:
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
  static names(): { [key: string]: string } {
    return {
      ekycResult: 'EkycResult',
      extBasicInfo: 'ExtBasicInfo',
      extFaceInfo: 'ExtFaceInfo',
      extIdInfo: 'ExtIdInfo',
      extInfo: 'ExtInfo',
      extRiskInfo: 'ExtRiskInfo',
      extSourceInfo: 'ExtSourceInfo',
      passed: 'Passed',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ekycResult: 'string',
      extBasicInfo: 'string',
      extFaceInfo: 'string',
      extIdInfo: 'string',
      extInfo: 'string',
      extRiskInfo: 'string',
      extSourceInfo: 'string',
      passed: 'string',
      subCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResultResponseBody extends $dara.Model {
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
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * The return result.
   */
  result?: CheckResultResponseBodyResult;
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
      result: CheckResultResponseBodyResult,
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

