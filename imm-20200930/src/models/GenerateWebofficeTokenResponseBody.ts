// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWebofficeTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 2d73dd5d87524c5e8a194c3eb5********
   */
  accessToken?: string;
  /**
   * @example
   * 2021-08-30T13:13:11.347146982Z
   */
  accessTokenExpiredTime?: string;
  /**
   * @example
   * e374995ec532432bb678074d36********
   */
  refreshToken?: string;
  /**
   * @example
   * 2021-08-31T12:43:11.347146982Z
   */
  refreshTokenExpiredTime?: string;
  /**
   * @example
   * 1759315A-CB33-0A75-A72B-62D7********
   */
  requestId?: string;
  /**
   * @example
   * https://office-hl.imm.aliyuncs.com/office/s/dd221b2cdb44fb66e9070d1d70a8b9bbb6d6fff7?_w_tokentype=1
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

