// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResultResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The verification result.
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
   * **
   */
  extFaceInfo?: string;
  /**
   * @remarks
   * The ID information.
   * 
   * @example
   * **
   */
  extIdInfo?: string;
  /**
   * @remarks
   * The extended information, in JSON string format.
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
   * The data source verification details are described as follows (using the Indonesian data source as an example):
   * - **govId, fullName, dob**: A comparison score equal to 1.0 indicates a complete match with the official data source. A score lower than 1.0 indicates a mismatch. 
   * - **selfiePhoto**: A comparison score greater than 0.8 indicates a match with the official data source. A score equal to or lower than 0.8 indicates a mismatch. 
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
   * ***
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
   * The returned result.
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

