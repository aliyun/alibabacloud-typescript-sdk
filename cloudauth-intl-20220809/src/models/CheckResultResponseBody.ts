// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResultResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Authentication result.
   * 
   * @example
   * **
   */
  ekycResult?: string;
  /**
   * @remarks
   * Extended basic information.
   * 
   * @example
   * **
   */
  extBasicInfo?: string;
  /**
   * @remarks
   * Face information.
   * 
   * @example
   * **
   */
  extFaceInfo?: string;
  /**
   * @remarks
   * ID information.
   * 
   * @example
   * **
   */
  extIdInfo?: string;
  /**
   * @remarks
   * Extended information, in JSON string format.
   * 
   * @example
   * {}
   */
  extInfo?: string;
  /**
   * @remarks
   * Risk information.
   * 
   * @example
   * **
   */
  extRiskInfo?: string;
  /**
   * @remarks
   * Detailed verification results from the data source (example using Indonesian data sources):
   * - **govId, fullName, dob**: A comparison score of 1.0 indicates complete consistency with the official data source; less than 1.0 indicates inconsistency. 
   * - **selfiePhoto**: A comparison score greater than 0.8 indicates consistency with the official data source; less than or equal to 0.8 indicates inconsistency. 
   * - **liveness**: A score higher than 0.95 indicates a risk of liveness detection. 
   * - **imgManipulationScore**: A score higher than 0.95 indicates a risk of image manipulation.
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
   * Whether the authentication is passed.
   * 
   * - Y: Passed
   * - N: Not passed
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
   * Return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return message.
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
   * Return result.
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

