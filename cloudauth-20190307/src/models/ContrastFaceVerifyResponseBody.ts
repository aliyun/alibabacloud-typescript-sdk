// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContrastFaceVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the ID Verification request.
   * 
   * @example
   * 91707dc296d469ad38e4c5efa6a0****
   */
  certifyId?: string;
  /**
   * @remarks
   * The information of the authenticated subject. This parameter is empty in common authentication scenarios.
   * 
   * @example
   * null
   */
  identityInfo?: string;
  /**
   * @remarks
   * The attachment information of the authenticated subject, which mainly includes image materials. The value is in JSON format as follows.
   * 
   * @example
   * {"faceAttack": "F","facialPictureFront": {"qualityScore": 88.3615493774414,"verifyScore": 50.28594166529785}}
   */
  materialInfo?: string;
  /**
   * @remarks
   * Indicates whether the verification is passed. A value of T indicates that the verification is passed, and a value of F indicates that the verification fails.
   * 
   * @example
   * T
   */
  passed?: string;
  /**
   * @remarks
   * The description of the authentication result. For more information, see the SubCode description below.
   * 
   * @example
   * 200
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      identityInfo: 'IdentityInfo',
      materialInfo: 'MaterialInfo',
      passed: 'Passed',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      identityInfo: 'string',
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

export class ContrastFaceVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success, and other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
  requestId?: string;
  /**
   * @remarks
   * The request result.
   */
  resultObject?: ContrastFaceVerifyResponseBodyResultObject;
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
      resultObject: ContrastFaceVerifyResponseBodyResultObject,
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

