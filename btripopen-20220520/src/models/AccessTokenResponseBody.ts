// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccessTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * **Deprecated. Use the** `module` **field instead**.
   * 
   * @example
   * -
   */
  expire?: number;
  /**
   * @remarks
   * **Deprecated. Use the** `module` **field instead**.
   * 
   * @example
   * -
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'expire',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessTokenResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The validity duration of the token. The initial value is 2 hours (7200000 ms). To prevent token expiration, set the refresh interval to: **5 minutes ≤ interval ≤ 2 hours**. If you refresh within this interval, the token obtained from the previous request remains valid.
   * 
   * @example
   * 7200000
   */
  expire?: number;
  /**
   * @remarks
   * The time when the token takes effect.
   * 
   * @example
   * 1652410740914
   */
  start?: number;
  /**
   * @remarks
   * The application access token.
   * 
   * @example
   * 37***df
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'expire',
      start: 'start',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
      start: 'number',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccessTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The response data. **Deprecated. Use the** `module` **field instead**.
   */
  data?: AccessTokenResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The response data.
   */
  module?: AccessTokenResponseBodyModule;
  /**
   * @remarks
   * The unique identifier of this request.
   * 
   * @example
   * 407543AF-****-****-****-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The global trace identifier of the request, typically used for troubleshooting.
   * 
   * @example
   * 21041ce********056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AccessTokenResponseBodyData,
      message: 'string',
      module: AccessTokenResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

