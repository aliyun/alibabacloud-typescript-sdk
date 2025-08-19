// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AIGCFaceVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Unique real-person authentication identifier.
   * 
   * @example
   * 91707dc296d469ad38e4c5efa6a0****
   */
  certifyId?: string;
  /**
   * @remarks
   * Authentication result. Values:
   * 
   * ● Y: AIGC-generated face.
   * 
   * ● N: Not detected
   * 
   * @example
   * Y
   */
  result?: string;
  /**
   * @remarks
   * Detection score
   * 
   * @example
   * 1.0000
   */
  score?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      result: 'Result',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      result: 'string',
      score: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIGCFaceVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code: 200 for success, others for failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Message.
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result
   */
  resultObject?: AIGCFaceVerifyResponseBodyResultObject;
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
      resultObject: AIGCFaceVerifyResponseBodyResultObject,
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

