// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyPhoneWithTokenResponseBodyGateVerify extends $dara.Model {
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 12134****
   */
  verifyId?: string;
  /**
   * @remarks
   * The verification results. Valid values:
   * 
   * *   PASS: The input phone number is consistent with the phone number used in HTML5 pages.
   * *   REJECT: The input phone number is different from the phone number used in HTML5 pages.
   * *   UNKNOWN: The system cannot judge whether the input phone number is consistent with the phone number used in HTML5 pages.
   * 
   * @example
   * PASS
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      verifyId: 'VerifyId',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyId: 'string',
      verifyResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  gateVerify?: VerifyPhoneWithTokenResponseBodyGateVerify;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateVerify: 'GateVerify',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gateVerify: VerifyPhoneWithTokenResponseBodyGateVerify,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.gateVerify && typeof (this.gateVerify as any).validate === 'function') {
      (this.gateVerify as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

