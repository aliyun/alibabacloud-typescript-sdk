// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWebofficeTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Weboffice access credential.
   * 
   * @example
   * 2d73dd5d87524c5e8a194c3eb5********
   */
  accessToken?: string;
  /**
   * @remarks
   * The expiration time of the access credential. The credential expires in 30 minutes. Format: YYYY-MM-DDTHH:mm:ss.
   * 
   * @example
   * 2021-08-30T13:13:11.347146982Z
   */
  accessTokenExpiredTime?: string;
  /**
   * @remarks
   * The Weboffice refresh credential.
   * 
   * @example
   * e374995ec532432bb678074d36********
   */
  refreshToken?: string;
  /**
   * @remarks
   * The expiration time of the refresh credential. The credential expires in 1 day. Format: YYYY-MM-DDTHH:mm:ss.
   * 
   * @example
   * 2021-08-31T12:43:11.347146982Z
   */
  refreshTokenExpiredTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1759315A-CB33-0A75-A72B-62D7********
   */
  requestId?: string;
  /**
   * @remarks
   * The Weboffice entry URL for previewing or editing documents online.
   * > This URL cannot be opened directly in a browser. You must use it together with the Weboffice JS-SDK and the access credential (AccessToken) to preview or edit documents. For more information, see [Getting Started](https://help.aliyun.com/document_detail/468066.html).
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

