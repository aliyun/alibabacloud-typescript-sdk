// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageTokenResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The token used to establish a persistent connection.
   * 
   * @example
   * oauth_cloud_key:***-b0YY5Gy6Q
   */
  accessToken?: string;
  /**
   * @remarks
   * Indicates how long until the token expires. Unit: milliseconds.
   * 
   * @example
   * 86400000
   */
  accessTokenExpiredTime?: number;
  /**
   * @remarks
   * The updated token. If a token expires, you can call RefreshToken to obtain a new token.
   * 
   * @example
   * oauth_cloud_key:****-Q62xggOTdgk3gw=
   */
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessTokenExpiredTime: 'number',
      refreshToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: GetMessageTokenResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetMessageTokenResponseBodyResult,
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

