// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFaceVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for the real-person authentication request.
   * 
   * @example
   * 08573be80f944d95ac812e019e3655a8
   */
  certifyId?: string;
  /**
   * @remarks
   * Whether the verification passed, T for pass, F for fail.
   * 
   * @example
   * T
   */
  passed?: string;
  /**
   * @remarks
   * Face comparison score.
   * 
   * @example
   * 99.60875
   */
  verifyScore?: number;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      passed: 'Passed',
      verifyScore: 'VerifyScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      passed: 'string',
      verifyScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code: 200 for success, other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
  requestId?: string;
  /**
   * @remarks
   * Face comparison result information.
   */
  resultObject?: CompareFaceVerifyResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: CompareFaceVerifyResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

