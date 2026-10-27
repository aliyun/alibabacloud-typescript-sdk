// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ThirdAppOidcSsoConfigEndpoints extends $dara.Model {
  /**
   * @remarks
   * The authorization endpoint.
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The discovery endpoint.
   */
  discoveryEndpoint?: string;
  /**
   * @remarks
   * The guest authorization endpoint.
   */
  guestAuthorizationEndpoint?: string;
  /**
   * @remarks
   * Issuer
   */
  issuer?: string;
  /**
   * @remarks
   * The signature public key endpoint.
   */
  jwksEndpoint?: string;
  /**
   * @remarks
   * The logout endpoint.
   */
  logoutEndpoint?: string;
  /**
   * @remarks
   * The revocation endpoint.
   */
  revokeEndpoint?: string;
  /**
   * @remarks
   * The token endpoint.
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * The user information endpoint.
   */
  userinfoEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      discoveryEndpoint: 'DiscoveryEndpoint',
      guestAuthorizationEndpoint: 'GuestAuthorizationEndpoint',
      issuer: 'Issuer',
      jwksEndpoint: 'JwksEndpoint',
      logoutEndpoint: 'LogoutEndpoint',
      revokeEndpoint: 'RevokeEndpoint',
      tokenEndpoint: 'TokenEndpoint',
      userinfoEndpoint: 'UserinfoEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      discoveryEndpoint: 'string',
      guestAuthorizationEndpoint: 'string',
      issuer: 'string',
      jwksEndpoint: 'string',
      logoutEndpoint: 'string',
      revokeEndpoint: 'string',
      tokenEndpoint: 'string',
      userinfoEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ThirdAppOidcSsoConfig extends $dara.Model {
  /**
   * @remarks
   * 1
   */
  accessTokenEffectiveTime?: number;
  /**
   * @remarks
   * 1
   */
  codeEffectiveTime?: number;
  /**
   * @remarks
   * Specifies whether to enable authorized logon.
   */
  enableAuthLogin?: boolean;
  /**
   * @remarks
   * The endpoints.
   */
  endpoints?: ThirdAppOidcSsoConfigEndpoints;
  /**
   * @remarks
   * The grant scopes.
   */
  grantScopes?: string[];
  /**
   * @remarks
   * The grant types.
   */
  grantTypes?: string[];
  /**
   * @remarks
   * The signature type.
   */
  idTokenAlgorithmType?: string;
  /**
   * @remarks
   * 1
   */
  idTokenEffectiveTime?: number;
  /**
   * @remarks
   * The URI whitelist.
   */
  redirectUris?: string[];
  /**
   * @remarks
   * 1
   */
  refreshTokenEffective?: number;
  static names(): { [key: string]: string } {
    return {
      accessTokenEffectiveTime: 'AccessTokenEffectiveTime',
      codeEffectiveTime: 'CodeEffectiveTime',
      enableAuthLogin: 'EnableAuthLogin',
      endpoints: 'Endpoints',
      grantScopes: 'GrantScopes',
      grantTypes: 'GrantTypes',
      idTokenAlgorithmType: 'IdTokenAlgorithmType',
      idTokenEffectiveTime: 'IdTokenEffectiveTime',
      redirectUris: 'RedirectUris',
      refreshTokenEffective: 'RefreshTokenEffective',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenEffectiveTime: 'number',
      codeEffectiveTime: 'number',
      enableAuthLogin: 'boolean',
      endpoints: ThirdAppOidcSsoConfigEndpoints,
      grantScopes: { 'type': 'array', 'itemType': 'string' },
      grantTypes: { 'type': 'array', 'itemType': 'string' },
      idTokenAlgorithmType: 'string',
      idTokenEffectiveTime: 'number',
      redirectUris: { 'type': 'array', 'itemType': 'string' },
      refreshTokenEffective: 'number',
    };
  }

  validate() {
    if(this.endpoints && typeof (this.endpoints as any).validate === 'function') {
      (this.endpoints as any).validate();
    }
    if(Array.isArray(this.grantScopes)) {
      $dara.Model.validateArray(this.grantScopes);
    }
    if(Array.isArray(this.grantTypes)) {
      $dara.Model.validateArray(this.grantTypes);
    }
    if(Array.isArray(this.redirectUris)) {
      $dara.Model.validateArray(this.redirectUris);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ThirdAppSecrets extends $dara.Model {
  /**
   * @remarks
   * Specifies whether it is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The ciphertext.
   */
  secret?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      secret: 'Secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      secret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ThirdApp extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   */
  appKey?: string;
  /**
   * @remarks
   * The application name.
   */
  name?: string;
  /**
   * @remarks
   * The OIDC configuration.
   */
  oidcSsoConfig?: ThirdAppOidcSsoConfig;
  /**
   * @remarks
   * The secrets.
   */
  secrets?: ThirdAppSecrets[];
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      name: 'Name',
      oidcSsoConfig: 'OidcSsoConfig',
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      name: 'string',
      oidcSsoConfig: ThirdAppOidcSsoConfig,
      secrets: { 'type': 'array', 'itemType': ThirdAppSecrets },
    };
  }

  validate() {
    if(this.oidcSsoConfig && typeof (this.oidcSsoConfig as any).validate === 'function') {
      (this.oidcSsoConfig as any).validate();
    }
    if(Array.isArray(this.secrets)) {
      $dara.Model.validateArray(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

