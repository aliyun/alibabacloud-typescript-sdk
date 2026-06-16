// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddFaceRecordResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The face result information.
   * 
   * @example
   * {
   * "faceQuality": "HIGH"
   * }
   */
  extFaceInfo?: string;
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
  static names(): { [key: string]: string } {
    return {
      extFaceInfo: 'ExtFaceInfo',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extFaceInfo: 'string',
      passed: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceRecordResponseBody extends $dara.Model {
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
   * 7A0D192A-CC0C-5DE5-A3B6-A14CF45508F2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: AddFaceRecordResponseBodyResult;
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
      result: AddFaceRecordResponseBodyResult,
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

