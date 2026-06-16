// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfigJwtProviderConfig extends $dara.Model {
  /**
   * @remarks
   * List of allowed JWT issuers.
   */
  allowedTokenIssuers?: string[];
  /**
   * @remarks
   * Enable JWT derived short token.
   * 
   * @example
   * false
   */
  derivedShortTokenEnabled?: boolean;
  /**
   * @remarks
   * Validity period of the JWT. Unit: seconds.
   * 
   * @example
   * 900
   */
  expiration?: number;
  /**
   * @remarks
   * Enable JWT expiration cleanup.
   * 
   * @example
   * true
   */
  expirationCleanupEnabled?: boolean;
  /**
   * @remarks
   * JWT issuer.
   * 
   * @example
   * https://test.issuer.com
   */
  issuer?: string;
  /**
   * @remarks
   * JWKs endpoint URL.
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
   * Client ID, corresponding to client_id in the OAuth protocol.
   * 
   * @example
   * client_id_example_xxx
   */
  clientId?: string;
  /**
   * @remarks
   * Scope, corresponding to scope in the OAuth protocol.
   * 
   * > The Scope value configured for the OAuth credential provider serves as the default. If you do not specify the scope parameter when calling the Developer API to obtain an OAuth access token, the system uses this default Scope value.
   * 
   * >Notice: 
   * 
   * Separate multiple Scope values with spaces.
   * 
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
  /**
   * @remarks
   * Token endpoint, corresponding to the OAuth protocol.
   * 
   * @example
   * https://example.com/token
   */
  tokenEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      scope: 'Scope',
      tokenEndpoint: 'TokenEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
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

export class GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfig extends $dara.Model {
  /**
   * @remarks
   * Configuration for a JWT credential provider.
   */
  jwtProviderConfig?: GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfigJwtProviderConfig;
  /**
   * @remarks
   * Configuration for an OAuth credential provider.
   */
  OAuthProviderConfig?: GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfigOAuthProviderConfig;
  /**
   * @remarks
   * List of credential IDs for sensitive configurations of the credential provider.
   * 
   * > The system securely stores sensitive configuration information as credentials.
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
   * Creation time of the credential provider, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * Credential provider configuration.
   */
  credentialProviderConfig?: GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfig;
  /**
   * @remarks
   * Credential provider creation type. Valid values:
   * 
   * - system_init: Created by the system
   * 
   * - user_custom: Created by a user
   * 
   * @example
   * user_custom
   */
  credentialProviderCreationType?: string;
  /**
   * @remarks
   * Credential provider ID.
   * 
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @remarks
   * Credential provider identifier.
   * 
   * @example
   * test_example_identifier
   */
  credentialProviderIdentifier?: string;
  /**
   * @remarks
   * Credential provider name.
   * 
   * @example
   * test_example_name
   */
  credentialProviderName?: string;
  /**
   * @remarks
   * Credential provider type. Valid values:
   * 
   * - oauth: OAuth credential provider
   * 
   * - jwt: JWT credential provider
   * 
   * @example
   * oauth
   */
  credentialProviderType?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * This is an example description
   */
  description?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Credential provider status. Valid values:
   * 
   * - enabled: Enabled
   * 
   * - disabled: Disabled
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * Update time of the credential provider, in UNIX timestamp format. Unit: milliseconds.
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
   * Credential provider.
   */
  credentialProvider?: GetCredentialProviderResponseBodyCredentialProvider;
  /**
   * @remarks
   * Request ID.
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

