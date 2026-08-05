// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageTokenResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Token used for establishing persistent connections.
   * 
   * @example
   * oauth_cloud_key:***-b0YY5Gy6Q
   */
  accessToken?: string;
  /**
   * @remarks
   * Logon token expiration time in milliseconds.
   * 
   * @example
   * 86400000
   */
  accessTokenExpiredTime?: number;
  /**
   * @remarks
   * Refresh token. If the AccessToken expires, you can use the RefreshToken to obtain a new token.
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
   * Request ID.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * Return results.
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

