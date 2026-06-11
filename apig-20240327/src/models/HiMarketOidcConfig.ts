// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketOidcConfigAuthCodeConfig extends $dara.Model {
  /**
   * @remarks
   * The URL of the identity provider\\"s authorization endpoint.
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The client ID obtained from the identity provider after registering your application.
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret obtained from the identity provider after registering your application.
   */
  clientSecret?: string;
  /**
   * @remarks
   * The identity provider\\"s unique issuer URL, used to validate ID tokens.
   */
  issuer?: string;
  /**
   * @remarks
   * The provider\\"s JWK Set URI. This URI provides the public keys needed to verify ID token signatures.
   */
  jwkSetUri?: string;
  /**
   * @remarks
   * The application\\"s redirect URI. The provider sends the authorization code to this URI after successful authentication. You must register this URI with the identity provider.
   */
  redirectUri?: string;
  /**
   * @remarks
   * A space-separated list of scopes to request from the provider. The `openid` scope is required for OIDC authentication. For example: `openid profile email`.
   */
  scopes?: string;
  /**
   * @remarks
   * The URL of the identity provider\\"s token endpoint.
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * The URL of the identity provider\\"s user info endpoint.
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

export class HiMarketOidcConfigIdentityMapping extends $dara.Model {
  /**
   * @remarks
   * Maps additional claims from the ID token to custom user attributes. For each mapping, the key is the target attribute in your system, and the value is the name of the claim from the ID token.
   */
  customFields?: { [key: string]: string };
  /**
   * @remarks
   * The ID token claim that maps to the user\\"s email address. The `email` claim is a common choice.
   */
  emailField?: string;
  /**
   * @remarks
   * The ID token claim that maps to the user\\"s unique ID. The `sub` claim is a common choice.
   */
  userIdField?: string;
  /**
   * @remarks
   * The ID token claim that maps to the user\\"s display name. Common choices include `name` and `preferred_username`.
   */
  userNameField?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'customFields',
      emailField: 'emailField',
      userIdField: 'userIdField',
      userNameField: 'userNameField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      emailField: 'string',
      userIdField: 'string',
      userNameField: 'string',
    };
  }

  validate() {
    if(this.customFields) {
      $dara.Model.validateMap(this.customFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketOidcConfig extends $dara.Model {
  /**
   * @remarks
   * Configuration settings for the authorization code grant type.
   */
  authCodeConfig?: HiMarketOidcConfigAuthCodeConfig;
  /**
   * @remarks
   * Enables or disables this identity provider. If set to `false`, users cannot sign in with this provider.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The OAuth 2.0 grant type. For OIDC, this must be `authorization_code`.
   */
  grantType?: string;
  /**
   * @remarks
   * Specifies how to map claims from an ID token to user attributes in your system.
   */
  identityMapping?: HiMarketOidcConfigIdentityMapping;
  /**
   * @remarks
   * The URL for the provider\\"s logo. This logo appears on the sign-in page.
   */
  logoUrl?: string;
  /**
   * @remarks
   * The provider\\"s display name. This name appears on the sign-in page.
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier for the identity provider.
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      authCodeConfig: 'authCodeConfig',
      enabled: 'enabled',
      grantType: 'grantType',
      identityMapping: 'identityMapping',
      logoUrl: 'logoUrl',
      name: 'name',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCodeConfig: HiMarketOidcConfigAuthCodeConfig,
      enabled: 'boolean',
      grantType: 'string',
      identityMapping: HiMarketOidcConfigIdentityMapping,
      logoUrl: 'string',
      name: 'string',
      provider: 'string',
    };
  }

  validate() {
    if(this.authCodeConfig && typeof (this.authCodeConfig as any).validate === 'function') {
      (this.authCodeConfig as any).validate();
    }
    if(this.identityMapping && typeof (this.identityMapping as any).validate === 'function') {
      (this.identityMapping as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

