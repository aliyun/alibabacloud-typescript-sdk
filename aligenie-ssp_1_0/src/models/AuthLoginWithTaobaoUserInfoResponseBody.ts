// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthLoginWithTaobaoUserInfoResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1659506854230
   */
  expiredTimeLong?: number;
  /**
   * @example
   * d15aa92de679d0d225aa845268be19ee
   */
  loginStateAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTimeLong: 'ExpiredTimeLong',
      loginStateAccessToken: 'LoginStateAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTimeLong: 'number',
      loginStateAccessToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithTaobaoUserInfoResponseBody extends $dara.Model {
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
  result?: AuthLoginWithTaobaoUserInfoResponseBodyResult;
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
      result: AuthLoginWithTaobaoUserInfoResponseBodyResult,
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

