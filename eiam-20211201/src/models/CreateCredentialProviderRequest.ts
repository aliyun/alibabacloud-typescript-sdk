// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig extends $dara.Model {
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
   * OAuth协议中的client_id，客户端ID。
   * 
   * This parameter is required.
   * 
   * @example
   * client_id_example_xxx
   */
  clientId?: string;
  /**
   * @remarks
   * OAuth协议中的client_secret，客户端密钥。
   * 
   * This parameter is required.
   * 
   * @example
   * client_secret_example_xxx
   */
  clientSecret?: string;
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
   * JWT身份提供商配置。
   */
  jwtProviderConfig?: CreateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig;
  /**
   * @remarks
   * OAuth 2LO机用类型的提供商的配置。
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
   * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
   * 
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * 认证令牌提供商的配置。
   */
  credentialProviderConfig?: CreateCredentialProviderRequestCredentialProviderConfig;
  /**
   * @remarks
   * 认证令牌提供商的业务标识。是一个具备可读性的唯一标识。
   * 
   * This parameter is required.
   * 
   * @example
   * test_example_identifier
   */
  credentialProviderIdentifier?: string;
  /**
   * @remarks
   * 认证令牌提供商名称。
   * 
   * This parameter is required.
   * 
   * @example
   * test_example_name
   */
  credentialProviderName?: string;
  /**
   * @remarks
   * 认证令牌提供商的类型。
   * 
   * This parameter is required.
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
   * IDaaS EIAM实例的ID。
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

