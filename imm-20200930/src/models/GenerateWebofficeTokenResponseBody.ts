// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWebofficeTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * Weboffice access token.
   * 
   * @example
   * 2d73dd5d87524c5e8a194c3eb5********
   */
  accessToken?: string;
  /**
   * @remarks
   * Expiration time of the access token. The expiration time is 30 minutes.
   * 
   * @example
   * 2021-08-30T13:13:11.347146982Z
   */
  accessTokenExpiredTime?: string;
  /**
   * @remarks
   * Weboffice refresh token.
   * 
   * @example
   * e374995ec532432bb678074d36********
   */
  refreshToken?: string;
  /**
   * @remarks
   * Expiration time of the refresh token. The expiration time is 1 day.
   * 
   * @example
   * 2021-08-31T12:43:11.347146982Z
   */
  refreshTokenExpiredTime?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 1759315A-CB33-0A75-A72B-62D7********
   */
  requestId?: string;
  /**
   * @remarks
   * Weboffice entry URL. Used for online preview or editing of documents.
   * > Cannot be opened directly in a browser; it needs to be used with the Weboffice JS-SDK and access token (AccessToken) to preview or edit documents. For more information, see [Getting Started](https://help.aliyun.com/document_detail/468066.html).
   * 
   * @example
   * https://office-cn-shanghai.imm.aliyuncs.com/office/s/dd221b2cdb44fb66e9070d1d70a8b9bbb6d6fff7?_w_tokentype=1
   */
  webofficeURL?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
      refreshToken: 'RefreshToken',
      refreshTokenExpiredTime: 'RefreshTokenExpiredTime',
      requestId: 'RequestId',
      webofficeURL: 'WebofficeURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessTokenExpiredTime: 'string',
      refreshToken: 'string',
      refreshTokenExpiredTime: 'string',
      requestId: 'string',
      webofficeURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

