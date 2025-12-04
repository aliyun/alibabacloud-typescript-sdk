// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderRequestDingtalkAppConfig extends $dara.Model {
  /**
   * @remarks
   * 钉钉一方应用的AppKey
   * 
   * @example
   * 49nyeaqumk7f
   */
  appKey?: string;
  /**
   * @remarks
   * 钉钉一方应用的AppSecret
   * 
   * @example
   * 86nozWFL2CxgwnhKiXaG8dN4keLPkUNc5xxxx
   */
  appSecret?: string;
  /**
   * @example
   * dingtalk
   */
  dingtalkLoginVersion?: string;
  encryptKey?: string;
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      dingtalkLoginVersion: 'DingtalkLoginVersion',
      encryptKey: 'EncryptKey',
      verificationToken: 'VerificationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
      dingtalkLoginVersion: 'string',
      encryptKey: 'string',
      verificationToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequestLarkConfig extends $dara.Model {
  /**
   * @example
   * cli_xxxx
   */
  appId?: string;
  /**
   * @example
   * KiiLzh5Dueh4wbLxxxx
   */
  appSecret?: string;
  encryptKey?: string;
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecret: 'AppSecret',
      encryptKey: 'EncryptKey',
      verificationToken: 'VerificationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
      encryptKey: 'string',
      verificationToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequestLdapConfig extends $dara.Model {
  /**
   * @remarks
   * 管理员密码
   * 
   * @example
   * xxxxxx
   */
  administratorPassword?: string;
  /**
   * @remarks
   * 管理员账号
   * 
   * @example
   * DC=example,DC=com
   */
  administratorUsername?: string;
  /**
   * @remarks
   * 是否验证指纹证书
   * 
   * @example
   * enabled
   */
  certificateFingerprintStatus?: string;
  /**
   * @remarks
   * 证书指纹列表
   */
  certificateFingerprints?: string[];
  /**
   * @remarks
   * 通信协议
   * 
   * @example
   * ldap
   */
  ldapProtocol?: string;
  /**
   * @remarks
   * ad/ldap 服务器地址
   * 
   * @example
   * 123.xx.xx.89
   */
  ldapServerHost?: string;
  /**
   * @remarks
   * 端口号
   * 
   * @example
   * 636
   */
  ldapServerPort?: number;
  /**
   * @remarks
   * startTls是否开启
   * 
   * @example
   * enabled
   */
  startTlsStatus?: string;
  static names(): { [key: string]: string } {
    return {
      administratorPassword: 'AdministratorPassword',
      administratorUsername: 'AdministratorUsername',
      certificateFingerprintStatus: 'CertificateFingerprintStatus',
      certificateFingerprints: 'CertificateFingerprints',
      ldapProtocol: 'LdapProtocol',
      ldapServerHost: 'LdapServerHost',
      ldapServerPort: 'LdapServerPort',
      startTlsStatus: 'StartTlsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administratorPassword: 'string',
      administratorUsername: 'string',
      certificateFingerprintStatus: 'string',
      certificateFingerprints: { 'type': 'array', 'itemType': 'string' },
      ldapProtocol: 'string',
      ldapServerHost: 'string',
      ldapServerPort: 'number',
      startTlsStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificateFingerprints)) {
      $dara.Model.validateArray(this.certificateFingerprints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequestOidcConfigAuthnParam extends $dara.Model {
  /**
   * @remarks
   * OIDC/oAuth2 认证方法。
   * 
   * @example
   * client_secret_post
   */
  authnMethod?: string;
  /**
   * @remarks
   * OIDC/oAuth2 客户端密钥。
   * 
   * @example
   * CSEHDddddddxxxxuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  static names(): { [key: string]: string } {
    return {
      authnMethod: 'AuthnMethod',
      clientSecret: 'ClientSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnMethod: 'string',
      clientSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequestOidcConfigEndpointConfig extends $dara.Model {
  /**
   * @remarks
   * oAuth2 授权端点。
   * 
   * @example
   * https://example.com/oauth/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * OIDC issuer信息。
   * 
   * @example
   * https://example.com/oauth
   */
  issuer?: string;
  /**
   * @remarks
   * OIDC jwks地址。
   * 
   * @example
   * https://example.com/oauth/jwks
   */
  jwksUri?: string;
  /**
   * @remarks
   * oAuth2 Token端点。
   * 
   * @example
   * https://example.com/oauth/token
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * OIDC 用户信息端点。
   * 
   * @example
   * https://example.com/oauth/userinfo
   */
  userinfoEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      issuer: 'Issuer',
      jwksUri: 'JwksUri',
      tokenEndpoint: 'TokenEndpoint',
      userinfoEndpoint: 'UserinfoEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      issuer: 'string',
      jwksUri: 'string',
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

export class UpdateIdentityProviderRequestOidcConfig extends $dara.Model {
  /**
   * @remarks
   * OIDC客户端认证配置。
   */
  authnParam?: UpdateIdentityProviderRequestOidcConfigAuthnParam;
  /**
   * @remarks
   * OIDC 端点配置。
   */
  endpointConfig?: UpdateIdentityProviderRequestOidcConfigEndpointConfig;
  /**
   * @remarks
   * OIDC标准参数，如profile、email等
   * 
   * @example
   * openid
   */
  grantScopes?: string[];
  /**
   * @remarks
   * OIDC授权类型。
   * 
   * @example
   * authorization_code
   */
  grantType?: string;
  /**
   * @remarks
   * 支持的PKCE算法类型。
   * 
   * @example
   * S256
   */
  pkceChallengeMethod?: string;
  /**
   * @remarks
   * AuthorizationCode授权模式下是否使用PKCE。
   * 
   * @example
   * true
   */
  pkceRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      authnParam: 'AuthnParam',
      endpointConfig: 'EndpointConfig',
      grantScopes: 'GrantScopes',
      grantType: 'GrantType',
      pkceChallengeMethod: 'PkceChallengeMethod',
      pkceRequired: 'PkceRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnParam: UpdateIdentityProviderRequestOidcConfigAuthnParam,
      endpointConfig: UpdateIdentityProviderRequestOidcConfigEndpointConfig,
      grantScopes: { 'type': 'array', 'itemType': 'string' },
      grantType: 'string',
      pkceChallengeMethod: 'string',
      pkceRequired: 'boolean',
    };
  }

  validate() {
    if(this.authnParam && typeof (this.authnParam as any).validate === 'function') {
      (this.authnParam as any).validate();
    }
    if(this.endpointConfig && typeof (this.endpointConfig as any).validate === 'function') {
      (this.endpointConfig as any).validate();
    }
    if(Array.isArray(this.grantScopes)) {
      $dara.Model.validateArray(this.grantScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequestWeComConfig extends $dara.Model {
  /**
   * @remarks
   * 企业微信自建应用的Id
   * 
   * @example
   * 1237403
   */
  agentId?: string;
  /**
   * @remarks
   * 授权回调域
   * 
   * @example
   * https://xxx.aliyunidaas.com/xxxxx
   */
  authorizeCallbackDomain?: string;
  /**
   * @remarks
   * 企业微信自建应用的corpSecret
   * 
   * @example
   * CSEHDddddddxxxxuxkJEHPveWRXBGqVqRsxxxx
   */
  corpSecret?: string;
  /**
   * @remarks
   * 可信域名
   * 
   * @example
   * https://xxx.aliyunidaas.com
   */
  trustableDomain?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      authorizeCallbackDomain: 'AuthorizeCallbackDomain',
      corpSecret: 'CorpSecret',
      trustableDomain: 'TrustableDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      authorizeCallbackDomain: 'string',
      corpSecret: 'string',
      trustableDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * 钉钉出基本信息
   */
  dingtalkAppConfig?: UpdateIdentityProviderRequestDingtalkAppConfig;
  /**
   * @remarks
   * IDaaS的身份提供方主键id
   * 
   * This parameter is required.
   * 
   * @example
   * idp_my664lwkhpicbyzirog3xxxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * 身份提供方名称
   * 
   * @example
   * test
   */
  identityProviderName?: string;
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
  /**
   * @remarks
   * 飞书配置
   */
  larkConfig?: UpdateIdentityProviderRequestLarkConfig;
  /**
   * @remarks
   * AD/LDAP基本信息
   */
  ldapConfig?: UpdateIdentityProviderRequestLdapConfig;
  logoUrl?: string;
  /**
   * @remarks
   * 网络端点ID
   * 
   * @example
   * nae_examplexxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * OIDC IdP配置。
   */
  oidcConfig?: UpdateIdentityProviderRequestOidcConfig;
  /**
   * @remarks
   * 企业微信基本信息
   */
  weComConfig?: UpdateIdentityProviderRequestWeComConfig;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dingtalkAppConfig: 'DingtalkAppConfig',
      identityProviderId: 'IdentityProviderId',
      identityProviderName: 'IdentityProviderName',
      instanceId: 'InstanceId',
      larkConfig: 'LarkConfig',
      ldapConfig: 'LdapConfig',
      logoUrl: 'LogoUrl',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      oidcConfig: 'OidcConfig',
      weComConfig: 'WeComConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dingtalkAppConfig: UpdateIdentityProviderRequestDingtalkAppConfig,
      identityProviderId: 'string',
      identityProviderName: 'string',
      instanceId: 'string',
      larkConfig: UpdateIdentityProviderRequestLarkConfig,
      ldapConfig: UpdateIdentityProviderRequestLdapConfig,
      logoUrl: 'string',
      networkAccessEndpointId: 'string',
      oidcConfig: UpdateIdentityProviderRequestOidcConfig,
      weComConfig: UpdateIdentityProviderRequestWeComConfig,
    };
  }

  validate() {
    if(this.dingtalkAppConfig && typeof (this.dingtalkAppConfig as any).validate === 'function') {
      (this.dingtalkAppConfig as any).validate();
    }
    if(this.larkConfig && typeof (this.larkConfig as any).validate === 'function') {
      (this.larkConfig as any).validate();
    }
    if(this.ldapConfig && typeof (this.ldapConfig as any).validate === 'function') {
      (this.ldapConfig as any).validate();
    }
    if(this.oidcConfig && typeof (this.oidcConfig as any).validate === 'function') {
      (this.oidcConfig as any).validate();
    }
    if(this.weComConfig && typeof (this.weComConfig as any).validate === 'function') {
      (this.weComConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

