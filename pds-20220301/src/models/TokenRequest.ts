// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TokenRequest extends $dara.Model {
  /**
   * @remarks
   * The JWT assertion that is signed by using the JWT private key. The JWT assertion contains the information about the user to be authorized and the authorization parameters. For more information about the structure of the JWT assertion, see JWTPayload. This parameter is required if grant_type is set to urn:ietf:params:oauth:grant-type:jwt-bearer.
   * 
   * @example
   * ey***asd
   */
  assertion?: string;
  /**
   * @remarks
   * The AppId of the application that is created in the Drive and Photo Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * 1Zu***flH
   */
  clientId?: string;
  /**
   * @remarks
   * The AppSecret of the application that is created in the Drive and Photo Service console. This parameter is required if the application is of the WebServer type.
   * 
   * @example
   * 80D***3i5
   */
  clientSecret?: string;
  /**
   * @remarks
   * The authorization code in the redirect URI that is specified after the authorization process is complete. This parameter is required if grant_type is set to authorization_code.
   * 
   * @example
   * 0045157fa8e24f4f9a0d9e3ff158c1e0
   */
  code?: string;
  /**
   * @remarks
   * The method that is used to generate an access token. Valid values:
   * 
   * authorization_code: generates an access token by using the authorization code that is returned after the authorization process is complete.
   * 
   * refresh_token: generates an access token by using the refresh token that is returned after the authorization process is complete.
   * 
   * urn:ietf:params:oauth:grant-type:jwt-bearer: generates an access token by using a JWT assertion.
   * 
   * This parameter is required.
   * 
   * @example
   * refresh_token
   */
  grantType?: string;
  /**
   * @remarks
   * The redirect URI that is specified when you initiate the authorization request. This parameter is required if grant_type is set to authorization_code.
   * 
   * @example
   * https://aliyun.com/pds
   */
  redirectUri?: string;
  /**
   * @remarks
   * The refresh token that is used to refresh the access token. This parameter is required if grant_type is set to refresh_token.
   * 
   * @example
   * 399623e13353490391266c7d48a13ed1
   */
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      assertion: 'assertion',
      clientId: 'client_id',
      clientSecret: 'client_secret',
      code: 'code',
      grantType: 'grant_type',
      redirectUri: 'redirect_uri',
      refreshToken: 'refresh_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertion: 'string',
      clientId: 'string',
      clientSecret: 'string',
      code: 'string',
      grantType: 'string',
      redirectUri: 'string',
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

