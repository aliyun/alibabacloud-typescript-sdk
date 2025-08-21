// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EcologyOpennessSendVerificationCodeResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 900
   */
  expireIn?: number;
  /**
   * @example
   * 60
   */
  repeatInterval?: number;
  static names(): { [key: string]: string } {
    return {
      expireIn: 'ExpireIn',
      repeatInterval: 'RepeatInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireIn: 'number',
      repeatInterval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcologyOpennessSendVerificationCodeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  result?: EcologyOpennessSendVerificationCodeResponseBodyResult;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: EcologyOpennessSendVerificationCodeResponseBodyResult,
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

