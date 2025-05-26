// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshWebofficeTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 4996466c690a4902846ce00f96********
   */
  accessToken?: string;
  /**
   * @example
   * 2021-08-31T13:07:28.950065359Z
   */
  accessTokenExpiredTime?: string;
  /**
   * @example
   * 72a52ab3702a4123ab5594671a********
   */
  refreshToken?: string;
  /**
   * @example
   * 2021-09-01T12:37:28.950065359Z
   */
  refreshTokenExpiredTime?: string;
  /**
   * @example
   * 501339F9-4B70-0CE2-AB8C-866C********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
      refreshToken: 'RefreshToken',
      refreshTokenExpiredTime: 'RefreshTokenExpiredTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessTokenExpiredTime: 'string',
      refreshToken: 'string',
      refreshTokenExpiredTime: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

