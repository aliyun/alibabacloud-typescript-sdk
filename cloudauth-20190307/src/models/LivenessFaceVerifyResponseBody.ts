// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LivenessFaceVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The unique identity of the ID Verification request.
   * 
   * @example
   * 91707dc296d469ad38e4c5efa6a0f24b
   */
  certifyId?: string;
  /**
   * @remarks
   * The attachment information of the facial verification subject, including face quality, face attack detection, face or OCR images, and intent verification data.
   * 
   * @example
   * {"faceAttack": "F","facialPictureFront": {"qualityScore": 88.3615493774414,"verifyScore": 50.28594166529785}}
   */
  materialInfo?: string;
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * - T: Passed.
   * 
   * - F: Failed.
   * 
   * @example
   * T
   */
  passed?: string;
  /**
   * @remarks
   * The verification result code.
   * 
   * @example
   * 200
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      materialInfo: 'MaterialInfo',
      passed: 'Passed',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      materialInfo: 'string',
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

export class LivenessFaceVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. **200** indicates that the API operation is successful.
   * 
   * @example
   * 200
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
   * The ID of this request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  resultObject?: LivenessFaceVerifyResponseBodyResultObject;
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
      resultObject: LivenessFaceVerifyResponseBodyResultObject,
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

