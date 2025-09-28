// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthTokenResponseBodyTokenInfo extends $dara.Model {
  /**
   * @remarks
   * The business authentication token.
   * 
   * >  AccessToken is valid for 10 minutes and can be used repeatedly within its validity period.
   * 
   * @example
   * agag****
   */
  accessToken?: string;
  /**
   * @remarks
   * The API authentication token.
   * 
   * >  JwtToken is valid for 1 hour and can be used repeatedly within its validity period.
   * 
   * @example
   * aweghd****
   */
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      jwtToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponseBody extends $dara.Model {
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
  /**
   * @remarks
   * The response parameters.
   */
  tokenInfo?: GetAuthTokenResponseBodyTokenInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      tokenInfo: 'TokenInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      tokenInfo: GetAuthTokenResponseBodyTokenInfo,
    };
  }

  validate() {
    if(this.tokenInfo && typeof (this.tokenInfo as any).validate === 'function') {
      (this.tokenInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

