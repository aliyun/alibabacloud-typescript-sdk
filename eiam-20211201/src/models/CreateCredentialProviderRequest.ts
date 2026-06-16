// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The list of allowed issuers for JWTs.
   * 
   * > The list can contain a maximum of 200 issuers.
   */
  allowedTokenIssuers?: string[];
  /**
   * @remarks
   * Specifies whether to enable the short-lived token derivation feature for JWTs.
   * 
   * @example
   * false
   */
  derivedShortTokenEnabled?: boolean;
  /**
   * @remarks
   * The validity period of the JSON Web Token (JWT). Unit: seconds.
   * 
   * @example
   * 900
   */
  expiration?: number;
  /**
   * @remarks
   * Specifies whether to enable the cleanup of expired JWTs.
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
   * The client ID. This parameter corresponds to the client_id parameter in the OAuth protocol.
   * 
   * > The client ID cannot exceed 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * client_id_example_xxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client key. This parameter corresponds to the client_secret parameter in the OAuth protocol.
   * 
   * > The client key cannot exceed 1024 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * client_secret_example_xxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The scope of permissions. This parameter corresponds to the scope parameter in the OAuth protocol.
   * 
   * > The scope that you configure for the OAuth credential provider is used as a fallback value. If you do not specify the scope parameter when you call a DeveloperAPI operation to obtain an OAuth access token, the scope that you configure for the credential provider is used.
   * 
   * >Notice: 
   * 
   * Separate multiple scopes with spaces.
   * 
   * 
   * 
   * The following limits apply to a single scope:
   * 
   * 1. The scope can contain lowercase letters, digits, and the following special characters: `|/:_-.`
   * 
   * 2. The scope must contain lowercase letters or digits.
   * 
   * 3. The scope must start with a special character `.`, a lowercase letter, or a digit.
   * 
   * 4. The scope cannot exceed 1024 characters in length.
   * 
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
  /**
   * @remarks
   * The token endpoint. This parameter corresponds to the token endpoint in the OAuth protocol.
   * 
   * > The value must start with `http://` or `https://` and cannot exceed 1024 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/token
   */
  tokenEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      scope: 'Scope',
      tokenEndpoint: 'TokenEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
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
   * The idempotence token. It is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to make sure that the value is unique among different requests. The ClientToken parameter can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
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
   * > The identifier can contain uppercase letters, lowercase letters, digits, and the following special characters: `.-_`. The identifier cannot exceed 64 characters in length.
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
   * > The name cannot exceed 64 characters in length.
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
   * - oauth: OAuth credential provider
   * 
   * - jwt: JWT credential provider
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
   * > The description cannot exceed 128 characters in length.
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

