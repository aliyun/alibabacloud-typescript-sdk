// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthLoginWithThirdUserInfoResponseBodyDataObj extends $dara.Model {
  /**
   * @example
   * dbe2eb4458302b9246c6da17fbc95f4b
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginWithThirdUserInfoResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1659428051452
   */
  expiredTimeLong?: number;
  /**
   * @example
   * bd9ccdb121ee950ddead51e943e081fe
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

export class AuthLoginWithThirdUserInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  dataObj?: AuthLoginWithThirdUserInfoResponseBodyDataObj;
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
  result?: AuthLoginWithThirdUserInfoResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataObj: 'DataObj',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dataObj: AuthLoginWithThirdUserInfoResponseBodyDataObj,
      message: 'string',
      requestId: 'string',
      result: AuthLoginWithThirdUserInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataObj && typeof (this.dataObj as any).validate === 'function') {
      (this.dataObj as any).validate();
    }
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

