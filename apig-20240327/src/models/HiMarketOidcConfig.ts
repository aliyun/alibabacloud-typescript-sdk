// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketOidcConfigAuthCodeConfig extends $dara.Model {
  /**
   * @remarks
   * The authorization endpoint URL.
   * 
   * @example
   * https://idaas.example.com/oauth2/authorize
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
   * The OAuth2 client secret.
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
   * https://idaas.example.com
   */
  issuer?: string;
  /**
   * @remarks
   * The JWKS public key set URI.
   * 
   * @example
   * https://idaas.example.com/.well-known/jwks.json
   */
  jwkSetUri?: string;
  /**
   * @remarks
   * The OAuth2 redirect URI.
   * 
   * @example
   * https://gateway.example.com/callback
   */
  redirectUri?: string;
  /**
   * @remarks
   * The OAuth2 authorization scopes.
   * 
   * @example
   * openid profile email
   */
  scopes?: string;
  /**
   * @remarks
   * The token endpoint URL.
   * 
   * @example
   * https://idaas.example.com/oauth2/token
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * The UserInfo endpoint URL.
   * 
   * @example
   * https://idaas.example.com/userinfo
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
   * The custom field mappings.
   */
  customFields?: { [key: string]: string };
  /**
   * @remarks
   * The identity field name that corresponds to the email address.
   * 
   * @example
   * email
   */
  emailField?: string;
  /**
   * @remarks
   * The identity field name that corresponds to the user ID.
   * 
   * @example
   * sub
   */
  userIdField?: string;
  /**
   * @remarks
   * The identity field name that corresponds to the username.
   * 
   * @example
   * name
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
   * The OAuth2 Authorization Code configuration.
   */
  authCodeConfig?: HiMarketOidcConfigAuthCodeConfig;
  /**
   * @remarks
   * Indicates whether the OIDC configuration is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The authorization type.
   * 
   * @example
   * authorization_code
   */
  grantType?: string;
  /**
   * @remarks
   * The identity field mapping configuration.
   */
  identityMapping?: HiMarketOidcConfigIdentityMapping;
  /**
   * @remarks
   * The provider logo URL.
   * 
   * @example
   * https://example.com/logo.png
   */
  logoUrl?: string;
  /**
   * @remarks
   * The OIDC configuration name.
   * 
   * @example
   * my-oidc-config
   */
  name?: string;
  /**
   * @remarks
   * The OIDC provider name.
   * 
   * @example
   * 阿里云IDaaS
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

