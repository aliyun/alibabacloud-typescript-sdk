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
   * Extended information
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

