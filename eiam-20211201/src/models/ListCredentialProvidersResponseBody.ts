// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialProvidersResponseBodyCredentialProvidersCredentialProviderConfigJwtProviderConfig extends $dara.Model {
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
   * The validity period of the JWT, in seconds.
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

export class ListCredentialProvidersResponseBodyCredentialProvidersCredentialProviderConfigOAuthProviderConfig extends $dara.Model {
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
   * The scope in the OAuth protocol, which specifies the permission scope.
   * 
   * > The Scope configuration of the OAuth credential provider serves as the default value. If the scope parameter is not specified when calling the DeveloperAPI to obtain an OAuth access token, the Scope configuration of the credential provider is used for token issuance.
   * 
   * >Notice: Multiple Scope values are separated by spaces.
   * 
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
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

export class ListCredentialProvidersResponseBodyCredentialProvidersCredentialProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of the JWT credential provider.
   */
  jwtProviderConfig?: ListCredentialProvidersResponseBodyCredentialProvidersCredentialProviderConfigJwtProviderConfig;
  /**
   * @remarks
   * The configuration of the OAuth credential provider.
   */
  OAuthProviderConfig?: ListCredentialProvidersResponseBodyCredentialProvidersCredentialProviderConfigOAuthProviderConfig;
  /**
   * @remarks
   * The list of credential IDs that correspond to the sensitive configuration of the credential provider.
   * 
   * > The system securely stores the sensitive configuration of the credential provider as credentials.
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
      jwtProviderConfig: ListCredentialProvidersResponseBodyCredentialProvidersCredentialProviderConfigJwtProviderConfig,
      OAuthProviderConfig: ListCredentialProvidersResponseBodyCredentialProvidersCredentialProviderConfigOAuthProviderConfig,
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

export class ListCredentialProvidersResponseBodyCredentialProviders extends $dara.Model {
  /**
   * @remarks
   * The creation time of the credential provider. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * The credential provider configuration.
   */
  credentialProviderConfig?: ListCredentialProvidersResponseBodyCredentialProvidersCredentialProviderConfig;
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
   * The credential provider identifier.
   * 
   * @example
   * test_example_identifier
   */
  credentialProviderIdentifier?: string;
  /**
   * @remarks
   * The credential provider name.
   * 
   * @example
   * test_example_name
   */
  credentialProviderName?: string;
  /**
   * @remarks
   * The credential provider type. Valid values:
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
   * The credential provider status. Valid values:
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
   * The update time of the credential provider. This value is a UNIX timestamp in milliseconds.
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
      credentialProviderConfig: ListCredentialProvidersResponseBodyCredentialProvidersCredentialProviderConfig,
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

export class ListCredentialProvidersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of credential providers.
   */
  credentialProviders?: ListCredentialProvidersResponseBodyCredentialProviders[];
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned by this call.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      credentialProviders: 'CredentialProviders',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialProviders: { 'type': 'array', 'itemType': ListCredentialProvidersResponseBodyCredentialProviders },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.credentialProviders)) {
      $dara.Model.validateArray(this.credentialProviders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

