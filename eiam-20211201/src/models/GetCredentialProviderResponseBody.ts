// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfigJwtProviderConfig extends $dara.Model {
  /**
   * @remarks
   * 签发出的JWT中的issuer字段的允许列表。
   */
  allowedTokenIssuers?: string[];
  /**
   * @remarks
   * 是否开启JWT派生短令牌能力。
   * 
   * @example
   * false
   */
  derivedShortTokenEnabled?: boolean;
  /**
   * @remarks
   * JWT的有效时长，单位秒。
   * 
   * @example
   * 900
   */
  expiration?: number;
  /**
   * @remarks
   * 是否开启JWT过期清理。
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
   * JWKs端点地址。
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
   * OAuth协议中的client_id，客户端ID。
   * 
   * @example
   * client_id_example_xxx
   */
  clientId?: string;
  /**
   * @remarks
   * OAuth协议中的scope，权限范围。
   * 
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
  /**
   * @remarks
   * OAuth协议的Token端点。
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
   * JWT身份提供商配置。
   */
  jwtProviderConfig?: GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfigJwtProviderConfig;
  /**
   * @remarks
   * OAuth 2LO机用类型的提供商的配置。
   */
  OAuthProviderConfig?: GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfigOAuthProviderConfig;
  /**
   * @remarks
   * 认证令牌提供商的敏感配置对应的凭据ID列表。
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
   * 认证令牌提供商的创建时间，Unix时间戳。
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * 认证令牌提供商的配置。
   */
  credentialProviderConfig?: GetCredentialProviderResponseBodyCredentialProviderCredentialProviderConfig;
  /**
   * @remarks
   * 认证令牌提供商的创建类型。
   * 
   * @example
   * user_custom
   */
  credentialProviderCreationType?: string;
  /**
   * @remarks
   * 认证令牌提供商ID。
   * 
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @remarks
   * 认证令牌提供商的业务标识。
   * 
   * @example
   * test_example_identifier
   */
  credentialProviderIdentifier?: string;
  /**
   * @remarks
   * 认证令牌提供商名称。
   * 
   * @example
   * test_example_name
   */
  credentialProviderName?: string;
  /**
   * @remarks
   * 认证令牌提供商的类型。
   * 
   * @example
   * oauth
   */
  credentialProviderType?: string;
  /**
   * @remarks
   * 描述。
   * 
   * @example
   * This is an example description
   */
  description?: string;
  /**
   * @remarks
   * EIAM实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 认证令牌提供商的状态。
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 认证令牌提供商的更新时间，Unix时间戳。
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
  credentialProvider?: GetCredentialProviderResponseBodyCredentialProvider;
  /**
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

