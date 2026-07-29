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
   * The client secret. This parameter is required when \\`grant_type\\` is \\`client_credentials\\` and the \\`client_secret_post\\` method is used.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The authorization code. This parameter is required when \\`grant_type\\` is \\`authorization_code\\`.
   * 
   * @example
   * xxxx
   */
  code?: string;
  /**
   * @remarks
   * The code verifier. This is used in the authorization code grant type when PKCE is enabled.
   * 
   * @example
   * xxx
   */
  codeVerifier?: string;
  /**
   * @remarks
   * The device code. This parameter is required when \\`grant_type\\` is \\`urn:ietf:params:oauth:grant-type:device_code\\` (device flow).
   * 
   * @example
   * xxxx
   */
  deviceCode?: string;
  /**
   * @remarks
   * The excluded tag.
   * 
   * @example
   * ATxxx
   */
  exclusiveTag?: string;
  /**
   * @remarks
   * The authorization grant type. The following types are supported:
   * 
   * - \\`client_credentials\\`: Client credentials grant. Requires \\`client_id\\` and \\`client_secret\\`.
   * 
   * - \\`refresh_token\\`: Refresh token grant.
   * 
   * - \\`authorization_code\\`: Authorization code grant.
   * 
   * - \\`urn:ietf:params:oauth:grant-type:device_code\\`: Device flow.
   * 
   * - \\`password\\`: Password grant.
   * 
   * This parameter is required.
   * 
   * @example
   * client_credentials
   */
  grantType?: string;
  /**
   * @remarks
   * The username. This parameter is required for password mode.
   * 
   * @example
   * xxxxxx
   */
  password?: string;
  /**
   * @remarks
   * The redirection URI. This parameter is required for the authorization code grant type. It must match the redirection URI in the request to get the authorization code.
   * 
   * @example
   * xxx
   */
  redirectUri?: string;
  /**
   * @remarks
   * The refresh token. This parameter is required when \\`grant_type\\` is \\`refresh_token\\` (refresh token grant).
   * 
   * @example
   * ATxxx
   */
  refreshToken?: string;
  /**
   * @remarks
   * The scope. This parameter is optional. Multiple values are supported. Separate multiple values with spaces.
   * Valid values:
   * 
   * - openid
   * 
   * - email
   * 
   * - phone
   * 
   * - profile
   * 
   * @example
   * xxxx
   */
  scope?: string;
  /**
   * @remarks
   * The username. This parameter is required for the password grant type.
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

