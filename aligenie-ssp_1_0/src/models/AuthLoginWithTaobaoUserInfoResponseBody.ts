// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthLoginWithTaobaoUserInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Expiration time of the login state access token (long integer)
   * 
   * @example
   * 1659506854230
   */
  expiredTimeLong?: number;
  /**
   * @remarks
   * Login state access token
   * 
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
   * @remarks
   * Response code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  /**
   * @remarks
   * Response Result
   */
  result?: AuthLoginWithTaobaoUserInfoResponseBodyResult;
  /**
   * @remarks
   * Flag indicating whether the invocation succeeded
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

