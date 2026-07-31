// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The list of allowed JWT issuers.
   * 
   * > The list length cannot exceed 200.
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
   * The validity duration of the JWT. Unit: seconds.
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

export class CreateCredentialProviderRequestCredentialProviderConfigOAuthProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The endpoint address used to guide users through authorization. Conditionally required: required when AuthorizationFlow=user_federation and ProviderVendor=custom. For preset vendors, this can be automatically populated through DiscoveryUrl.
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth authorization flow type. Valid values: m2m: machine-to-machine (2LO, Client Credentials). user_federation: user federation (3LO, Authorization Code).
   */
  authorizationFlow?: string;
  /**
   * @remarks
   * The client_id in the OAuth protocol.
   * 
   * > The length cannot exceed 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * client_id_example_xxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client_secret in the OAuth protocol.
   * 
   * > The length cannot exceed 1024 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * client_secret_example_xxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The Discovery document URL used to automatically retrieve OAuth endpoint configurations. Conditionally optional: used when AuthorizationFlow=user_federation. If DiscoveryUrl is not provided, you must manually configure fields such as TokenEndpoint and AuthorizationEndpoint.
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
   * Specifies whether to use the PKCE extension to enhance security. We recommend that you always enable this feature.
   */
  pkceEnabled?: boolean;
  /**
   * @remarks
   * The preset vendor or custom configuration. Optional. Default value: custom.
   */
  providerVendor?: string;
  /**
   * @remarks
   * The scope in the OAuth protocol, which defines the permission range.
   * 
   * > The Scope configuration on the credential provider serves as the fallback value. If the scope parameter is not specified when calling the DeveloperAPI to obtain an OAuth Access Token, the Scope configuration on the credential provider is used for issuance.
   * 
   * >Notice: Separate multiple Scope values with spaces.
   * 
   * Restrictions for each individual Scope value:
   * 1. Allowed characters: lowercase letters, digits, and the special characters `|/:_-.`
   * 2. Must contain at least one lowercase letter or digit.
   * 3. Must start with the special character `.`, a lowercase letter, or a digit.
   * 4. The length cannot exceed 1024 characters.
   * 
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
  /**
   * @remarks
   * The token endpoint of the OAuth protocol.
   * 
   * > Must start with `http://` or `https://`, and the length cannot exceed 1024 characters.
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
      clientId: 'string',
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

export class CreateCredentialProviderRequestCredentialProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of the JWT credential provider.
   */
  jwtProviderConfig?: CreateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig;
  /**
   * @remarks
   * The configuration of the OAuth credential provider.
   */
  OAuthProviderConfig?: CreateCredentialProviderRequestCredentialProviderConfigOAuthProviderConfig;
  static names(): { [key: string]: string } {
    return {
      jwtProviderConfig: 'JwtProviderConfig',
      OAuthProviderConfig: 'OAuthProviderConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtProviderConfig: CreateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig,
      OAuthProviderConfig: CreateCredentialProviderRequestCredentialProviderConfigOAuthProviderConfig,
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

export class CreateCredentialProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token that ensures the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see References [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration of the credential provider.
   */
  credentialProviderConfig?: CreateCredentialProviderRequestCredentialProviderConfig;
  /**
   * @remarks
   * The identifier of the credential provider.
   * 
   * > Allowed characters include uppercase and lowercase letters, digits, and the special characters `.-_`. The length cannot exceed 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test_example_identifier
   */
  credentialProviderIdentifier?: string;
  /**
   * @remarks
   * The name of the credential provider.
   * 
   * > The length cannot exceed 64 characters.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * oauth
   */
  credentialProviderType?: string;
  /**
   * @remarks
   * The description.
   * 
   * > The length cannot exceed 128 characters.
   * 
   * @example
   * This is an example description
   */
  description?: string;
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
      credentialProviderIdentifier: 'CredentialProviderIdentifier',
      credentialProviderName: 'CredentialProviderName',
      credentialProviderType: 'CredentialProviderType',
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      credentialProviderConfig: CreateCredentialProviderRequestCredentialProviderConfig,
      credentialProviderIdentifier: 'string',
      credentialProviderName: 'string',
      credentialProviderType: 'string',
      description: 'string',
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

