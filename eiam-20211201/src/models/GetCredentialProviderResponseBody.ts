// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfigJwtProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The list of allowed JWT issuers.
   */
  allowedTokenIssuers?: string[];
  /**
   * @remarks
   * Indicates whether the JWT derived short token feature is enabled.
   * 
   * @example
   * false
   */
  derivedShortTokenEnabled?: boolean;
  /**
   * @remarks
   * The validity period of the JWT. Unit: seconds.
   * 
   * @example
   * 900
   */
  expiration?: number;
  /**
   * @remarks
   * Indicates whether JWT expiration cleanup is enabled.
   * 
   * @example
   * true
   */
  expirationCleanupEnabled?: boolean;
  /**
   * @remarks
   * JWT issuer。
   * 
   * @example
   * https://test.issuer.com
   */
  issuer?: string;
  /**
   * @remarks
   * The JWKs endpoint URL.
   * 
   * @example
   * https://example123456.aliyunidaas.com/api/v2/auths_ngz2wj35ixxxdyat55nexxxxxx/oauth2/jwks
   */
  jwksEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      allowedTokenIssuers: 'AllowedTokenIssuers',
      derivedShortTokenEnabled: 'DerivedShortTokenEnabled',
      expiration: 'Expiration',
      expirationCleanupEnabled: 'ExpirationCleanupEnabled',
      issuer: 'Issuer',
      jwksEndpoint: 'JwksEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedTokenIssuers: { 'type': 'array', 'itemType': 'string' },
      derivedShortTokenEnabled: 'boolean',
      expiration: 'number',
      expirationCleanupEnabled: 'boolean',
      issuer: 'string',
      jwksEndpoint: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedTokenIssuers)) {
      $dara.Model.validateArray(this.allowedTokenIssuers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfigOAuthProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The authorization endpoint of the OAuth protocol.
   * 
   * @example
   * https://example.com/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth authorization flow type. Valid values:
   * - m2m: Machine-to-machine.
   * - user_federation: User federation.
   * 
   * @example
   * m2m
   */
  authorizationFlow?: string;
  /**
   * @remarks
   * The client_id in the OAuth protocol, which is the client ID.
   * 
   * @example
   * client_id_example_xxx
   */
  clientId?: string;
  /**
   * @remarks
   * The URL of the OAuth discovery document.
   * 
   * @example
   * https://example.com/.well-known/openid-configuration
   */
  discoveryUrl?: string;
  /**
   * @remarks
   * The issuer endpoint of the OAuth protocol.
   * 
   * @example
   * https://example.com/issuer
   */
  issuer?: string;
  /**
   * @remarks
   * The algorithm used to calculate the code challenge in PKCE. Valid values:
   * - S256.
   * - plain.
   * 
   * @example
   * S256
   */
  pkceChallengeMethod?: string;
  /**
   * @remarks
   * Indicates whether Proof Key for Code Exchange (PKCE) is enabled.
   * 
   * @example
   * true
   */
  pkceEnabled?: boolean;
  /**
   * @remarks
   * The OAuth provider vendor type. Valid values:
   * - custom: Custom.
   * - dingtalk: DingTalk.
   * - feishu: Lark.
   * - github: GitHub.
   * - microsoft: Microsoft.
   * - google: Google.
   * 
   * @example
   * custom
   */
  providerVendor?: string;
  /**
   * @remarks
   * The scope in the OAuth protocol, which specifies the permission scope.
   * 
   * > The scope configuration of the OAuth credential provider serves as the default value. If the scope parameter is not specified when you call the DeveloperAPI to obtain an OAuth access token, the scope configuration of the credential provider is used for token issuance.
   * 
   * >Notice: Multiple scope values are separated by spaces.
   * 
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
  /**
   * @remarks
   * The system-generated redirect URI.
   * 
   * @example
   * https://example.com/callback
   */
  systemRedirectUri?: string;
  /**
   * @remarks
   * The token endpoint of the OAuth protocol.
   * 
   * @example
   * https://example.com/token
   */
  tokenEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      authorizationFlow: 'AuthorizationFlow',
      clientId: 'ClientId',
      discoveryUrl: 'DiscoveryUrl',
      issuer: 'Issuer',
      pkceChallengeMethod: 'PkceChallengeMethod',
      pkceEnabled: 'PkceEnabled',
      providerVendor: 'ProviderVendor',
      scope: 'Scope',
      systemRedirectUri: 'SystemRedirectUri',
      tokenEndpoint: 'TokenEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      authorizationFlow: 'string',
      clientId: 'string',
      discoveryUrl: 'string',
      issuer: 'string',
      pkceChallengeMethod: 'string',
      pkceEnabled: 'boolean',
      providerVendor: 'string',
      scope: 'string',
      systemRedirectUri: 'string',
      tokenEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of the JWT credential provider.
   */
  jwtProviderConfig?: GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfigJwtProviderConfig;
  /**
   * @remarks
   * The configuration of the OAuth credential provider.
   */
  OAuthProviderConfig?: GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfigOAuthProviderConfig;
  /**
   * @remarks
   * The list of credential IDs that correspond to the sensitive configurations of the credential provider.
   * 
   * > The system securely stores the sensitive configuration information of the credential provider in the form of credentials.
   */
  providerCredentialIds?: string[];
  static names(): { [key: string]: string } {
    return {
      jwtProviderConfig: 'JwtProviderConfig',
      OAuthProviderConfig: 'OAuthProviderConfig',
      providerCredentialIds: 'ProviderCredentialIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtProviderConfig: GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfigJwtProviderConfig,
      OAuthProviderConfig: GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfigOAuthProviderConfig,
      providerCredentialIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.jwtProviderConfig && typeof (this.jwtProviderConfig as any).validate === 'function') {
      (this.jwtProviderConfig as any).validate();
    }
    if(this.OAuthProviderConfig && typeof (this.OAuthProviderConfig as any).validate === 'function') {
      (this.OAuthProviderConfig as any).validate();
    }
    if(Array.isArray(this.providerCredentialIds)) {
      $dara.Model.validateArray(this.providerCredentialIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialProviderResponseBodyCredentialProvider extends $dara.Model {
  /**
   * @remarks
   * The creation time of the credential provider. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * The configuration of the credential provider.
   */
  credentialProviderConfig?: GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfig;
  /**
   * @remarks
   * The creation type of the credential provider. Valid values:
   * 
   * - system_init: Created by the system.
   * - user_custom: Created by the user.
   * 
   * @example
   * user_custom
   */
  credentialProviderCreationType?: string;
  /**
   * @remarks
   * The credential provider ID.
   * 
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @remarks
   * The business identifier of the credential provider.
   * 
   * @example
   * test_example_identifier
   */
  credentialProviderIdentifier?: string;
  /**
   * @remarks
   * The name of the credential provider.
   * 
   * @example
   * test_example_name
   */
  credentialProviderName?: string;
  /**
   * @remarks
   * The type of the credential provider. Valid values:
   * 
   * - oauth: OAuth credential provider.
   * - jwt: JWT credential provider.
   * 
   * @example
   * oauth
   */
  credentialProviderType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is an example description
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the credential provider. Valid values:
   * 
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The update time of the credential provider. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      credentialProviderConfig: 'CredentialProviderConfig',
      credentialProviderCreationType: 'CredentialProviderCreationType',
      credentialProviderId: 'CredentialProviderId',
      credentialProviderIdentifier: 'CredentialProviderIdentifier',
      credentialProviderName: 'CredentialProviderName',
      credentialProviderType: 'CredentialProviderType',
      description: 'Description',
      instanceId: 'InstanceId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      credentialProviderConfig: GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfig,
      credentialProviderCreationType: 'string',
      credentialProviderId: 'string',
      credentialProviderIdentifier: 'string',
      credentialProviderName: 'string',
      credentialProviderType: 'string',
      description: 'string',
      instanceId: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.credentialProviderConfig && typeof (this.credentialProviderConfig as any).validate === 'function') {
      (this.credentialProviderConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The credential provider.
   */
  credentialProvider?: GetCredentialProviderResponseBodyCredentialProvider;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialProvider: 'CredentialProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialProvider: GetCredentialProviderResponseBodyCredentialProvider,
      requestId: 'string',
    };
  }

  validate() {
    if(this.credentialProvider && typeof (this.credentialProvider as any).validate === 'function') {
      (this.credentialProvider as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

