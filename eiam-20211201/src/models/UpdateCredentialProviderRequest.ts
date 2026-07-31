// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The list of allowed JWT issuers.
   * 
   * > The list cannot contain more than 200 entries.
   * 
   * >Notice: To clear the issuer list, pass an empty list or an empty string when calling the API.
   */
  allowedTokenIssuers?: string[];
  /**
   * @remarks
   * Specifies whether to enable the JWT derived short token capability.
   * 
   * @example
   * false
   */
  derivedShortTokenEnabled?: boolean;
  /**
   * @remarks
   * The validity period of the JWT, in seconds.
   * 
   * @example
   * 900
   */
  expiration?: number;
  /**
   * @remarks
   * Specifies whether to enable JWT expiration cleanup.
   * 
   * @example
   * true
   */
  expirationCleanupEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowedTokenIssuers: 'AllowedTokenIssuers',
      derivedShortTokenEnabled: 'DerivedShortTokenEnabled',
      expiration: 'Expiration',
      expirationCleanupEnabled: 'ExpirationCleanupEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedTokenIssuers: { 'type': 'array', 'itemType': 'string' },
      derivedShortTokenEnabled: 'boolean',
      expiration: 'number',
      expirationCleanupEnabled: 'boolean',
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

export class UpdateCredentialProviderRequestCredentialProviderConfigOAuthProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The endpoint URL used to guide users through authorization. Conditionally required: this parameter is required when AuthorizationFlow is set to user_federation and ProviderVendor is set to custom. For preset vendors, this value can be automatically populated through DiscoveryUrl.
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth authorization flow type. Valid values:
   * - m2m: Machine-to-machine (2LO, Client Credentials).
   * - user_federation: User federation (3LO, Authorization Code).
   */
  authorizationFlow?: string;
  /**
   * @remarks
   * The client_secret in the OAuth protocol.
   * 
   * > The value cannot exceed 1024 characters in length.
   * 
   * @example
   * client_secret_example_xxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The Discovery document URL used to automatically retrieve OAuth endpoint configurations. Conditionally optional: this parameter is used when AuthorizationFlow is set to user_federation. If DiscoveryUrl is not provided, you must manually configure fields such as TokenEndpoint and AuthorizationEndpoint.
   */
  discoveryUrl?: string;
  issuer?: string;
  /**
   * @remarks
   * The PKCE code_challenge generation method. Default value: s256.
   */
  pkceChallengeMethod?: string;
  /**
   * @remarks
   * Specifies whether to use the PKCE extension for enhanced security. We recommend that you always enable this feature.
   */
  pkceEnabled?: boolean;
  /**
   * @remarks
   * The preset vendor or custom configuration. This parameter is optional. Default value: custom.
   */
  providerVendor?: string;
  /**
   * @remarks
   * The scope in the OAuth protocol, which specifies the permission scope.
   * 
   * > The Scope configuration on the OAuth credential provider serves as a fallback value. If the scope parameter is not specified when calling the DeveloperAPI to obtain an OAuth Access Token, the Scope configuration on the credential provider is used for token issuance.
   * 
   * >Notice: Separate multiple Scope values with spaces. To clear the Scope configuration, pass an empty string.
   * 
   * Restrictions for each individual Scope value:
   * 1. Allowed characters: lowercase letters, digits, and special characters `|/:_-.`
   * 2. Must contain at least one lowercase letter or digit.
   * 3. Must start with a special character `.`, a lowercase letter, or a digit.
   * 4. Cannot exceed 1024 characters in length.
   * 
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
  /**
   * @remarks
   * The token endpoint of the OAuth protocol.
   * 
   * > The value must start with `http://` or `https://` and cannot exceed 1024 characters in length.
   * 
   * @example
   * https://example.com/token
   */
  tokenEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      authorizationFlow: 'AuthorizationFlow',
      clientSecret: 'ClientSecret',
      discoveryUrl: 'DiscoveryUrl',
      issuer: 'Issuer',
      pkceChallengeMethod: 'PkceChallengeMethod',
      pkceEnabled: 'PkceEnabled',
      providerVendor: 'ProviderVendor',
      scope: 'Scope',
      tokenEndpoint: 'TokenEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      authorizationFlow: 'string',
      clientSecret: 'string',
      discoveryUrl: 'string',
      issuer: 'string',
      pkceChallengeMethod: 'string',
      pkceEnabled: 'boolean',
      providerVendor: 'string',
      scope: 'string',
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

export class UpdateCredentialProviderRequestCredentialProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of the JWT credential provider.
   */
  jwtProviderConfig?: UpdateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig;
  /**
   * @remarks
   * The configuration of the OAuth credential provider.
   */
  OAuthProviderConfig?: UpdateCredentialProviderRequestCredentialProviderConfigOAuthProviderConfig;
  static names(): { [key: string]: string } {
    return {
      jwtProviderConfig: 'JwtProviderConfig',
      OAuthProviderConfig: 'OAuthProviderConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtProviderConfig: UpdateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig,
      OAuthProviderConfig: UpdateCredentialProviderRequestCredentialProviderConfigOAuthProviderConfig,
    };
  }

  validate() {
    if(this.jwtProviderConfig && typeof (this.jwtProviderConfig as any).validate === 'function') {
      (this.jwtProviderConfig as any).validate();
    }
    if(this.OAuthProviderConfig && typeof (this.OAuthProviderConfig as any).validate === 'function') {
      (this.OAuthProviderConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token that ensures the idempotence of the request.
   * 
   * Generate a unique parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see References: [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The credential provider configuration.
   */
  credentialProviderConfig?: UpdateCredentialProviderRequestCredentialProviderConfig;
  /**
   * @remarks
   * The credential provider ID.
   * 
   * This parameter is required.
   * 
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @remarks
   * The credential provider name.
   * 
   * > The name cannot exceed 64 characters in length.
   * 
   * @example
   * test_example_name
   */
  credentialProviderName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      credentialProviderConfig: 'CredentialProviderConfig',
      credentialProviderId: 'CredentialProviderId',
      credentialProviderName: 'CredentialProviderName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      credentialProviderConfig: UpdateCredentialProviderRequestCredentialProviderConfig,
      credentialProviderId: 'string',
      credentialProviderName: 'string',
      instanceId: 'string',
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

