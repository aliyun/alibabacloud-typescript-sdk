// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketAuthCodeConfig extends $dara.Model {
  /**
   * @remarks
   * The URL of the identity provider\\"s authorization endpoint. Your application redirects users to this URL to sign in and grant consent.
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The unique identifier for your application. The identity provider assigns this ID when you register your application.
   */
  clientId?: string;
  /**
   * @remarks
   * The secret key for your application. This secret authenticates your application with the identity provider.
   */
  clientSecret?: string;
  /**
   * @remarks
   * The URL of the identity provider that issues the tokens. This URL uniquely identifies the provider.
   */
  issuer?: string;
  /**
   * @remarks
   * The URL of the identity provider\\"s JSON Web Key Set (JWKS) document. This document contains the public signing keys for token validation.
   */
  jwkSetUri?: string;
  /**
   * @remarks
   * The URL where the identity provider redirects the user after authorizing your application. This URL must be registered in your application settings with the identity provider.
   */
  redirectUri?: string;
  /**
   * @remarks
   * A space-separated list of requested permissions. For example: `openid profile`.
   */
  scopes?: string;
  /**
   * @remarks
   * The URL of the identity provider\\"s token endpoint. Your application uses this endpoint to exchange an authorization code for an access token.
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * The URL of the identity provider\\"s user info endpoint. Your application can use this endpoint to retrieve the authenticated user\\"s profile information.
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

