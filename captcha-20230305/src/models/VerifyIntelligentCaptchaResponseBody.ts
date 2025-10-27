// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyIntelligentCaptchaResponseBodyResult extends $dara.Model {
  certifyId?: string;
  verifyCode?: string;
  /**
   * @example
   * true
   */
  verifyResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      verifyCode: 'VerifyCode',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      verifyCode: 'string',
      verifyResult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyIntelligentCaptchaResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 95784F***D39FDC5
   */
  requestId?: string;
  result?: VerifyIntelligentCaptchaResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: VerifyIntelligentCaptchaResponseBodyResult,
      success: 'boolean',
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

