// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret. This parameter is required if grant_type is set to client_credentials.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The authorization code. This parameter is required if grant_type is set to authorization_code.
   * 
   * @example
   * xxxx
   */
  code?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * @example
   * xxx
   */
  codeVerifier?: string;
  /**
   * @remarks
   * The device code. This parameter is required if grant_type is set to authorization_code.urn:ietf:params:oauth:grant-type:device_code.
   * 
   * @example
   * xxxx
   */
  deviceCode?: string;
  /**
   * @remarks
   * The excluded tags.
   * 
   * @example
   * ATxxx
   */
  exclusiveTag?: string;
  /**
   * @remarks
   * The supported authorization types are as follows:
   * - client_credentials:Client credentials flow, requires client_id and client_secret.
   * - refresh_token:Refresh token flow.
   * - authorization_code:Authorization code flow.
   * - urn:ietf:params:oauth:grant-type:device_code:Device authorization flow.
   * - password:Password (Resource Owner Password Credentials) flow.
   * 
   * This parameter is required.
   * 
   * @example
   * client_credentials
   */
  grantType?: string;
  /**
   * @remarks
   * The username. This parameter is required if grant_type is set to password. The password authentication type is not supported.
   * 
   * @example
   * xxxxxx
   */
  password?: string;
  /**
   * @remarks
   * The redirect URI. This parameter is required if grant_type is set to authorization_code. The value of this parameter must be the same as the redirect URI in the request to obtain the authorization code.
   * 
   * @example
   * xxx
   */
  redirectUri?: string;
  /**
   * @remarks
   * The refreshed token. This parameter is required if grant_type is set to refresh_token.
   * 
   * @example
   * ATxxx
   */
  refreshToken?: string;
  /**
   * @remarks
   * The authorization scope. Valid values:
   * 
   * *   openid
   * *   email
   * *   phone
   * *   profile
   * 
   * @example
   * xxxx
   */
  scope?: string;
  /**
   * @remarks
   * The username. This parameter is required if grant_type is set to password. The password authentication type is not supported.
   * 
   * @example
   * uesrname_001
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'client_id',
      clientSecret: 'client_secret',
      code: 'code',
      codeVerifier: 'code_verifier',
      deviceCode: 'device_code',
      exclusiveTag: 'exclusive_tag',
      grantType: 'grant_type',
      password: 'password',
      redirectUri: 'redirect_uri',
      refreshToken: 'refresh_token',
      scope: 'scope',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      code: 'string',
      codeVerifier: 'string',
      deviceCode: 'string',
      exclusiveTag: 'string',
      grantType: 'string',
      password: 'string',
      redirectUri: 'string',
      refreshToken: 'string',
      scope: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

