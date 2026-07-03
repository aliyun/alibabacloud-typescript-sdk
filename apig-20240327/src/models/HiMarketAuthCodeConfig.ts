// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketAuthCodeConfig extends $dara.Model {
  /**
   * @remarks
   * The OAuth2 authorization endpoint URL.
   * 
   * @example
   * https://idp.example.com/oauth2/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth2 client ID.
   * 
   * @example
   * my-client-id
   */
  clientId?: string;
  /**
   * @remarks
   * The OAuth2 client secret. The secret is AES-encrypted when stored.
   * 
   * @example
   * my-client-secret
   */
  clientSecret?: string;
  /**
   * @remarks
   * The OIDC issuer URL.
   * 
   * @example
   * https://idp.example.com
   */
  issuer?: string;
  /**
   * @remarks
   * The JWKS public key set URI, used for token signature verification.
   * 
   * @example
   * https://idp.example.com/.well-known/jwks.json
   */
  jwkSetUri?: string;
  /**
   * @remarks
   * The OAuth2 callback URL.
   * 
   * @example
   * https://gateway.example.com/callback
   */
  redirectUri?: string;
  /**
   * @remarks
   * The OAuth2 authorization scopes, separated by spaces.
   * 
   * @example
   * openid profile email
   */
  scopes?: string;
  /**
   * @remarks
   * The OAuth2 token endpoint URL.
   * 
   * @example
   * https://idp.example.com/oauth2/token
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * The OIDC UserInfo endpoint URL.
   * 
   * @example
   * https://idp.example.com/userinfo
   */
  userInfoEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'authorizationEndpoint',
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      issuer: 'issuer',
      jwkSetUri: 'jwkSetUri',
      redirectUri: 'redirectUri',
      scopes: 'scopes',
      tokenEndpoint: 'tokenEndpoint',
      userInfoEndpoint: 'userInfoEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      clientId: 'string',
      clientSecret: 'string',
      issuer: 'string',
      jwkSetUri: 'string',
      redirectUri: 'string',
      scopes: 'string',
      tokenEndpoint: 'string',
      userInfoEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

