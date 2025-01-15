// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateApplicationClientSecretResponseBodyApplicationClientSecret extends $dara.Model {
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client key secret of the application.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      secretId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequestFiling extends $dara.Model {
  /**
   * @remarks
   * 域名关联的备案号，长度最大限制64。
   * 
   * @example
   * 浙xx-xxxxxx
   */
  icpNumber?: string;
  static names(): { [key: string]: string } {
    return {
      icpNumber: 'IcpNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestAuthnConfig extends $dara.Model {
  /**
   * @remarks
   * 对应IdP是否支持认证
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  authnStatus?: string;
  /**
   * @remarks
   * 是否支持自动更新密码
   * 
   * @example
   * enabled
   */
  autoUpdatePasswordStatus?: string;
  static names(): { [key: string]: string } {
    return {
      authnStatus: 'AuthnStatus',
      autoUpdatePasswordStatus: 'AutoUpdatePasswordStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnStatus: 'string',
      autoUpdatePasswordStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestAutoCreateUserConfig extends $dara.Model {
  /**
   * @remarks
   * 自动创建账户是否开启
   * 
   * @example
   * disabled
   */
  autoCreateUserStatus?: string;
  targetOrganizationalUnitIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoCreateUserStatus: 'AutoCreateUserStatus',
      targetOrganizationalUnitIds: 'TargetOrganizationalUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateUserStatus: 'string',
      targetOrganizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetOrganizationalUnitIds)) {
      $dara.Model.validateArray(this.targetOrganizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestAutoUpdateUserConfig extends $dara.Model {
  /**
   * @remarks
   * 自动更新账户是否开启
   * 
   * @example
   * disabled
   */
  autoUpdateUserStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpdateUserStatus: 'AutoUpdateUserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpdateUserStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestBindingConfigAutoMatchUserProfileExpressions extends $dara.Model {
  /**
   * @remarks
   * 表达式的类型
   * 
   * This parameter is required.
   * 
   * @example
   * filed
   */
  expressionMappingType?: string;
  /**
   * @remarks
   * 映射属性取值表达式
   * 
   * This parameter is required.
   * 
   * @example
   * idpUser.phoneNumber
   */
  sourceValueExpression?: string;
  /**
   * @remarks
   * 映射目标属性名称
   * 
   * This parameter is required.
   * 
   * @example
   * user.username
   */
  targetField?: string;
  /**
   * @remarks
   * 映射目标属性名称
   */
  targetFieldDescription?: string;
  static names(): { [key: string]: string } {
    return {
      expressionMappingType: 'ExpressionMappingType',
      sourceValueExpression: 'SourceValueExpression',
      targetField: 'TargetField',
      targetFieldDescription: 'TargetFieldDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionMappingType: 'string',
      sourceValueExpression: 'string',
      targetField: 'string',
      targetFieldDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestBindingConfig extends $dara.Model {
  /**
   * @remarks
   * 自动匹配账户的规则
   */
  autoMatchUserProfileExpressions?: CreateIdentityProviderRequestBindingConfigAutoMatchUserProfileExpressions[];
  /**
   * @remarks
   * 自动匹配账户是否开启
   * 
   * @example
   * disabled
   */
  autoMatchUserStatus?: string;
  /**
   * @remarks
   * 用户手动绑定账户功能是否开启
   * 
   * @example
   * enabled
   */
  mappingBindingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoMatchUserProfileExpressions: 'AutoMatchUserProfileExpressions',
      autoMatchUserStatus: 'AutoMatchUserStatus',
      mappingBindingStatus: 'MappingBindingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoMatchUserProfileExpressions: { 'type': 'array', 'itemType': CreateIdentityProviderRequestBindingConfigAutoMatchUserProfileExpressions },
      autoMatchUserStatus: 'string',
      mappingBindingStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.autoMatchUserProfileExpressions)) {
      $dara.Model.validateArray(this.autoMatchUserProfileExpressions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestDingtalkAppConfig extends $dara.Model {
  /**
   * @remarks
   * 钉钉一方应用的AppKey
   * 
   * @example
   * Xczngvfemo4e
   */
  appKey?: string;
  /**
   * @remarks
   * 钉钉一方应用的AppSecret
   * 
   * @example
   * 5d405a12a6f84ad4ab05ee09axxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * 钉钉一方应用的corpId
   * 
   * @example
   * 3075680424786133505
   */
  corpId?: string;
  /**
   * @remarks
   * 钉钉版本
   * 
   * @example
   * public_dingtalk
   */
  dingtalkVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      corpId: 'CorpId',
      dingtalkVersion: 'DingtalkVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
      corpId: 'string',
      dingtalkVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestLarkConfig extends $dara.Model {
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
  /**
   * @example
   * FSX123111xxx
   */
  enterpriseNumber?: string;
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecret: 'AppSecret',
      encryptKey: 'EncryptKey',
      enterpriseNumber: 'EnterpriseNumber',
      verificationToken: 'VerificationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
      encryptKey: 'string',
      enterpriseNumber: 'string',
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

export class CreateIdentityProviderRequestLdapConfig extends $dara.Model {
  /**
   * @remarks
   * 管理员密码
   * 
   * @example
   * xxxx
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
   * 组成员标识
   * 
   * @example
   * member
   */
  groupMemberAttributeName?: string;
  /**
   * @remarks
   * 组objectClass
   * 
   * @example
   * group
   */
  groupObjectClass?: string;
  /**
   * @remarks
   * 组自定义Filter
   * 
   * @example
   * (|(cn=test)(group=test@test.com))
   */
  groupObjectClassCustomFilter?: string;
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
   * 组织objectClass
   * 
   * @example
   * organizationUnit,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * startTls是否开启
   * 
   * @example
   * enabled
   */
  startTlsStatus?: string;
  /**
   * @remarks
   * 用户登录标识
   * 
   * @example
   * userPrincipalName, mail
   */
  userLoginIdentifier?: string;
  /**
   * @remarks
   * 用户objectClass
   * 
   * @example
   * person,user
   */
  userObjectClass?: string;
  /**
   * @remarks
   * 用户自定义Filter
   * 
   * @example
   * (|(cn=test)(mail=test@test.com))
   */
  userObjectClassCustomFilter?: string;
  static names(): { [key: string]: string } {
    return {
      administratorPassword: 'AdministratorPassword',
      administratorUsername: 'AdministratorUsername',
      certificateFingerprintStatus: 'CertificateFingerprintStatus',
      certificateFingerprints: 'CertificateFingerprints',
      groupMemberAttributeName: 'GroupMemberAttributeName',
      groupObjectClass: 'GroupObjectClass',
      groupObjectClassCustomFilter: 'GroupObjectClassCustomFilter',
      ldapProtocol: 'LdapProtocol',
      ldapServerHost: 'LdapServerHost',
      ldapServerPort: 'LdapServerPort',
      organizationUnitObjectClass: 'OrganizationUnitObjectClass',
      startTlsStatus: 'StartTlsStatus',
      userLoginIdentifier: 'UserLoginIdentifier',
      userObjectClass: 'UserObjectClass',
      userObjectClassCustomFilter: 'UserObjectClassCustomFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administratorPassword: 'string',
      administratorUsername: 'string',
      certificateFingerprintStatus: 'string',
      certificateFingerprints: { 'type': 'array', 'itemType': 'string' },
      groupMemberAttributeName: 'string',
      groupObjectClass: 'string',
      groupObjectClassCustomFilter: 'string',
      ldapProtocol: 'string',
      ldapServerHost: 'string',
      ldapServerPort: 'number',
      organizationUnitObjectClass: 'string',
      startTlsStatus: 'string',
      userLoginIdentifier: 'string',
      userObjectClass: 'string',
      userObjectClassCustomFilter: 'string',
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

export class CreateIdentityProviderRequestOidcConfigAuthnParam extends $dara.Model {
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
   * OIDC/oAuth2 客户端ID。
   * 
   * @example
   * mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
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
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnMethod: 'string',
      clientId: 'string',
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

export class CreateIdentityProviderRequestOidcConfigEndpointConfig extends $dara.Model {
  /**
   * @remarks
   * oAuth2 授权端点。
   * 
   * @example
   * https://example.com/auth/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * OIDC issuer信息。
   * 
   * @example
   * https://example.com/auth
   */
  issuer?: string;
  /**
   * @remarks
   * OIDC jwks地址。
   * 
   * @example
   * https://example.com/auth/jwks
   */
  jwksUri?: string;
  /**
   * @remarks
   * oAuth2 Token端点。
   * 
   * @example
   * https://example.com/auth/token
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * OIDC 用户信息端点。
   * 
   * @example
   * https://example.com/auth/userinfo
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

export class CreateIdentityProviderRequestOidcConfig extends $dara.Model {
  /**
   * @remarks
   * OIDC客户端认证配置。
   */
  authnParam?: CreateIdentityProviderRequestOidcConfigAuthnParam;
  /**
   * @remarks
   * OIDC 端点配置。
   */
  endpointConfig?: CreateIdentityProviderRequestOidcConfigEndpointConfig;
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
      authnParam: CreateIdentityProviderRequestOidcConfigAuthnParam,
      endpointConfig: CreateIdentityProviderRequestOidcConfigEndpointConfig,
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

export class CreateIdentityProviderRequestUdPullConfigUdSyncScopeConfig extends $dara.Model {
  /**
   * @remarks
   * 同步来源节点
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * 同步目标节点
   * 
   * @example
   * ou_lyhyy6p7yf7mdrdiq5xxxx
   */
  targetScope?: string;
  static names(): { [key: string]: string } {
    return {
      sourceScopes: 'SourceScopes',
      targetScope: 'TargetScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceScopes: { 'type': 'array', 'itemType': 'string' },
      targetScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceScopes)) {
      $dara.Model.validateArray(this.sourceScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestUdPullConfig extends $dara.Model {
  /**
   * @remarks
   * 是否支持组同步，默认为disabled
   * 
   * @example
   * disabled
   */
  groupSyncStatus?: string;
  /**
   * @remarks
   * 增量回调状态，是否处理来自IdP的增量回调数据
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * 同步入配置信息
   * 
   * This parameter is required.
   */
  udSyncScopeConfig?: CreateIdentityProviderRequestUdPullConfigUdSyncScopeConfig;
  static names(): { [key: string]: string } {
    return {
      groupSyncStatus: 'GroupSyncStatus',
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      periodicSyncStatus: 'PeriodicSyncStatus',
      udSyncScopeConfig: 'UdSyncScopeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupSyncStatus: 'string',
      incrementalCallbackStatus: 'string',
      periodicSyncStatus: 'string',
      udSyncScopeConfig: CreateIdentityProviderRequestUdPullConfigUdSyncScopeConfig,
    };
  }

  validate() {
    if(this.udSyncScopeConfig && typeof (this.udSyncScopeConfig as any).validate === 'function') {
      (this.udSyncScopeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestUdPushConfigUdSyncScopeConfigs extends $dara.Model {
  /**
   * @remarks
   * 同步来源节点
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * 同步目标节点
   * 
   * @example
   * ou_lyhyy6p7yf7mdrdiq5xxxx
   */
  targetScope?: string;
  static names(): { [key: string]: string } {
    return {
      sourceScopes: 'SourceScopes',
      targetScope: 'TargetScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceScopes: { 'type': 'array', 'itemType': 'string' },
      targetScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceScopes)) {
      $dara.Model.validateArray(this.sourceScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestUdPushConfig extends $dara.Model {
  /**
   * @remarks
   * 增量回调状态，是否处理来自IdP的增量回调数据
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * 同步出配置信息
   */
  udSyncScopeConfigs?: CreateIdentityProviderRequestUdPushConfigUdSyncScopeConfigs[];
  static names(): { [key: string]: string } {
    return {
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      periodicSyncStatus: 'PeriodicSyncStatus',
      udSyncScopeConfigs: 'UdSyncScopeConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incrementalCallbackStatus: 'string',
      periodicSyncStatus: 'string',
      udSyncScopeConfigs: { 'type': 'array', 'itemType': CreateIdentityProviderRequestUdPushConfigUdSyncScopeConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.udSyncScopeConfigs)) {
      $dara.Model.validateArray(this.udSyncScopeConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestWeComConfig extends $dara.Model {
  /**
   * @remarks
   * 企业微信自建应用的Id
   * 
   * @example
   * 278231941749863339
   */
  agentId?: string;
  /**
   * @remarks
   * 授权回调域
   * 
   * @example
   * https://xxx.aliyunidaas.com/xxxx
   */
  authorizeCallbackDomain?: string;
  /**
   * @remarks
   * 企业微信自建应用的corpId
   * 
   * @example
   * 3756043633237690761
   */
  corpId?: string;
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
   * https://xxx.aliyunidaas.com/
   */
  trustableDomain?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      authorizeCallbackDomain: 'AuthorizeCallbackDomain',
      corpId: 'CorpId',
      corpSecret: 'CorpSecret',
      trustableDomain: 'TrustableDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      authorizeCallbackDomain: 'string',
      corpId: 'string',
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

export class CreateUserRequestCustomFields extends $dara.Model {
  /**
   * @remarks
   * The name of the extended field. You must create the extended field in advance. To create an extended field, log on to the IDaaS console. In the left-side navigation pane, choose Accounts > Extended Fields, and then click Create Field on the Extended Fields page.
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the extended field. The value follows the limits on the properties of the extended field.
   * 
   * @example
   * 10
   */
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequestPasswordInitializationConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcibly change the password status. Default value: disabled. Valid values:
   * 
   * *   enabled: forcibly changes the password status.
   * *   disabled: does not forcibly change the password status.
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The priority of the password initialization policy. By default, this parameter does not take effect. Valid values:
   * 
   * *   global: The password initialization policy globally takes effect.
   * *   custom: The password initialization policy takes effect based on custom settings.
   * 
   * @example
   * global
   */
  passwordInitializationPolicyPriority?: string;
  /**
   * @remarks
   * The password initialization method. Set the value to random,
   * 
   * *   which indicates that the password is randomly generated.
   * 
   * @example
   * random
   */
  passwordInitializationType?: string;
  /**
   * @remarks
   * The password notification methods.
   * 
   * @example
   * sms
   */
  userNotificationChannels?: string[];
  static names(): { [key: string]: string } {
    return {
      passwordForcedUpdateStatus: 'PasswordForcedUpdateStatus',
      passwordInitializationPolicyPriority: 'PasswordInitializationPolicyPriority',
      passwordInitializationType: 'PasswordInitializationType',
      userNotificationChannels: 'UserNotificationChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordForcedUpdateStatus: 'string',
      passwordInitializationPolicyPriority: 'string',
      passwordInitializationType: 'string',
      userNotificationChannels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userNotificationChannels)) {
      $dara.Model.validateArray(this.userNotificationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * The status of the Developer API feature. Valid values:
   * 
   * *   Enabled: The Developer API feature is enabled.
   * *   Disabled: The Developer API feature is disabled.
   * 
   * @example
   * disabled
   */
  apiInvokeStatus?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * SAML Application
   */
  applicationName?: string;
  /**
   * @remarks
   * The origin of the application. Valid values:
   * 
   * *   urn:alibaba:idaas:app:source:template: The application is created based on a template.
   * *   urn:alibaba:idaas: The application is created based on the standard protocol.
   * 
   * @example
   * urn:alibaba:idaas:app:source:template
   */
  applicationSourceType?: string;
  /**
   * @remarks
   * The ID of the template based on which the application is created. This parameter is returned only if the application is created based on a template.
   * 
   * @example
   * apt_rpa_tdsxxx
   */
  applicationTemplateId?: string;
  applicationVisibility?: string[];
  /**
   * @remarks
   * The authorization type of the EIAM application. Valid values:
   * 
   * *   authorize_required: Only the user with explicit authorization can access the application.
   * *   default_all: By default, all users can access the application.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The time when the application was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * The application is applicable to the test environment.
   */
  description?: string;
  /**
   * @remarks
   * The features that are supported by the application. The value is a JSON array. Valid values:
   * 
   * *   sso: The application supports SSO.
   * *   provision: The application supports account synchronization.
   * *   api_invoke: The application supports custom APIs.
   * 
   * @example
   * ["sso", "provision"]
   */
  features?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The URL of the application icon.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01lvYwpv1aGowQXDML9_!!6000000003303-0-tps-580-580.jpg
   */
  logoUrl?: string;
  /**
   * @remarks
   * The service code of the cloud service that manages the application template.
   * 
   * @example
   * rpa
   */
  managedServiceCode?: string;
  /**
   * @remarks
   * Indicates whether the application template is managed by a cloud service.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The type of the single sign-on (SSO) protocol. Valid values:
   * 
   * *   saml2: the Security Assertion Markup Language (SAML) 2.0 protocol.
   * *   oidc: the OpenID Connect (OIDC) protocol.
   * 
   * @example
   * saml2
   */
  ssoType?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   Enabled: The application is enabled.
   * *   Disabled: The application is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the application was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiInvokeStatus: 'ApiInvokeStatus',
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      applicationSourceType: 'ApplicationSourceType',
      applicationTemplateId: 'ApplicationTemplateId',
      applicationVisibility: 'ApplicationVisibility',
      authorizationType: 'AuthorizationType',
      clientId: 'ClientId',
      createTime: 'CreateTime',
      description: 'Description',
      features: 'Features',
      instanceId: 'InstanceId',
      logoUrl: 'LogoUrl',
      managedServiceCode: 'ManagedServiceCode',
      serviceManaged: 'ServiceManaged',
      ssoType: 'SsoType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInvokeStatus: 'string',
      applicationId: 'string',
      applicationName: 'string',
      applicationSourceType: 'string',
      applicationTemplateId: 'string',
      applicationVisibility: { 'type': 'array', 'itemType': 'string' },
      authorizationType: 'string',
      clientId: 'string',
      createTime: 'number',
      description: 'string',
      features: 'string',
      instanceId: 'string',
      logoUrl: 'string',
      managedServiceCode: 'string',
      serviceManaged: 'boolean',
      ssoType: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationVisibility)) {
      $dara.Model.validateArray(this.applicationVisibility);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGrantScopeResponseBodyApplicationGrantScope extends $dara.Model {
  /**
   * @remarks
   * The permissions of the Developer API feature.
   */
  grantScopes?: string[];
  static names(): { [key: string]: string } {
    return {
      grantScopes: 'GrantScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantScopes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.grantScopes)) {
      $dara.Model.validateArray(this.grantScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigCallbackProvisioningConfig extends $dara.Model {
  /**
   * @remarks
   * The URL that the application uses to receive IDaaS event callbacks.
   * 
   * @example
   * https://example.com/event/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The symmetric key for IDaaS event callbacks. The key is an AES-256 encryption key in the HEX format.
   * 
   * @example
   * 1adfdfdfd******111
   */
  encryptKey?: string;
  /**
   * @remarks
   * Indicates whether IDaaS event callback messages are encrypted. Valid values:
   * 
   * *   true: The messages are encrypted.
   * *   false: The messages are transmitted in plaintext.
   * 
   * @example
   * true
   */
  encryptRequired?: boolean;
  /**
   * @remarks
   * The list of types of IDaaS event callback messages that are supported by the listener.
   */
  listenEventScopes?: string[];
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      encryptKey: 'EncryptKey',
      encryptRequired: 'EncryptRequired',
      listenEventScopes: 'ListenEventScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      encryptKey: 'string',
      encryptRequired: 'boolean',
      listenEventScopes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.listenEventScopes)) {
      $dara.Model.validateArray(this.listenEventScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfigurationAuthnParam extends $dara.Model {
  /**
   * @remarks
   * The access token. This parameter is returned when the GrantType parameter is set to bearer_token.
   * 
   * @example
   * k52x2ru63rlkflina5utgkxxxx
   */
  accessToken?: string;
  /**
   * @remarks
   * The authentication mode of the SCIM protocol. Valid values:
   * 
   * *   client_secret_basic: The client secret is passed in the request header.
   * *   client_secret_post: The client secret is passed in the request body.
   * 
   * @example
   * client_secret_basic
   */
  authnMethod?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret of the application.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The token endpoint.
   * 
   * @example
   * https://www.example.com/oauth/token
   */
  tokenEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      authnMethod: 'AuthnMethod',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      tokenEndpoint: 'TokenEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      authnMethod: 'string',
      clientId: 'string',
      clientSecret: 'string',
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

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfiguration extends $dara.Model {
  /**
   * @remarks
   * The authentication mode of the SCIM protocol. Valid value:
   * 
   * *   oauth2: OAuth2.0 mode.
   * 
   * @example
   * oauth2
   */
  authnMode?: string;
  /**
   * @remarks
   * The configuration parameters related to authorization.
   * 
   * *   If the GrantType parameter is set to client_credentials, the configuration parameters ClientId, ClientSecret, and AuthnMethod are returned.
   * *   If the GrantType parameter is set to bearer_token, the configuration parameter AccessToken is returned.
   */
  authnParam?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfigurationAuthnParam;
  /**
   * @remarks
   * The grant type of the SCIM protocol. Valid values:
   * 
   * *   client_credentials: client mode.
   * *   bearer_token: key mode.
   * 
   * @example
   * bearer_token
   */
  grantType?: string;
  static names(): { [key: string]: string } {
    return {
      authnMode: 'AuthnMode',
      authnParam: 'AuthnParam',
      grantType: 'GrantType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnMode: 'string',
      authnParam: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfigurationAuthnParam,
      grantType: 'string',
    };
  }

  validate() {
    if(this.authnParam && typeof (this.authnParam as any).validate === 'function') {
      (this.authnParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration parameters related to SCIM-based synchronization.
   */
  authnConfiguration?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfiguration;
  /**
   * @remarks
   * The full synchronization scope of the SCIM protocol. Valid value:
   * 
   * *   urn:alibaba:idaas:app:scim:User:PUSH: full account data synchronization.
   */
  fullPushScopes?: string[];
  /**
   * @remarks
   * The resource operations of the SCIM protocol. Valid values:
   * 
   * *   urn:alibaba:idaas:app:scim:User:CREATE: account creation.
   * *   urn:alibaba:idaas:app:scim:User:UPDATE: account update.
   * *   urn:alibaba:idaas:app:scim:User:DELETE: account deletion.
   */
  provisioningActions?: string[];
  /**
   * @remarks
   * The base URL that the application uses to receive the SCIM protocol for IDaaS synchronization.
   * 
   * @example
   * https://example.com/scim
   */
  scimBaseUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authnConfiguration: 'AuthnConfiguration',
      fullPushScopes: 'FullPushScopes',
      provisioningActions: 'ProvisioningActions',
      scimBaseUrl: 'ScimBaseUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnConfiguration: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfiguration,
      fullPushScopes: { 'type': 'array', 'itemType': 'string' },
      provisioningActions: { 'type': 'array', 'itemType': 'string' },
      scimBaseUrl: 'string',
    };
  }

  validate() {
    if(this.authnConfiguration && typeof (this.authnConfiguration as any).validate === 'function') {
      (this.authnConfiguration as any).validate();
    }
    if(Array.isArray(this.fullPushScopes)) {
      $dara.Model.validateArray(this.fullPushScopes);
    }
    if(Array.isArray(this.provisioningActions)) {
      $dara.Model.validateArray(this.provisioningActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The configuration of the custom event callback protocol of IDaaS.
   */
  callbackProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigCallbackProvisioningConfig;
  /**
   * @remarks
   * The rendering mode of the account synchronization page. Valid values:
   * 
   * *   standard: standard mode
   * *   template: template mode
   * 
   * @example
   * standard
   */
  configOperateMode?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The public key endpoint for signature verification of the synchronization callback information.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk267xxxxx/app_mkv7rgt4d7i4u7zqtzev2mxxxx/provisioning/jwks
   */
  provisionJwksEndpoint?: string;
  /**
   * @remarks
   * Indicates whether the password is synchronized in IDaaS user event callbacks. Valid values:
   * 
   * *   true: The password is synchronized.
   * *   false: The password is not synchronized.
   * 
   * @example
   * true
   */
  provisionPassword?: boolean;
  /**
   * @remarks
   * The synchronization protocol type of the application. Valid values:
   * 
   * *   idaas_callback: custom event callback protocol of IDaaS.
   * *   scim2: System for Cross-domain Identity Management (SCIM) protocol.
   * 
   * @example
   * idaas_callback
   */
  provisionProtocolType?: string;
  /**
   * @remarks
   * The configuration of SCIM-based IDaaS synchronization.
   */
  scimProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfig;
  /**
   * @remarks
   * The status of the IDaaS account synchronization feature. Valid values:
   * 
   * *   enabled: The feature is enabled.
   * *   disabled: The feature is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      callbackProvisioningConfig: 'CallbackProvisioningConfig',
      configOperateMode: 'ConfigOperateMode',
      instanceId: 'InstanceId',
      provisionJwksEndpoint: 'ProvisionJwksEndpoint',
      provisionPassword: 'ProvisionPassword',
      provisionProtocolType: 'ProvisionProtocolType',
      scimProvisioningConfig: 'ScimProvisioningConfig',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      callbackProvisioningConfig: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigCallbackProvisioningConfig,
      configOperateMode: 'string',
      instanceId: 'string',
      provisionJwksEndpoint: 'string',
      provisionPassword: 'boolean',
      provisionProtocolType: 'string',
      scimProvisioningConfig: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfig,
      status: 'string',
    };
  }

  validate() {
    if(this.callbackProvisioningConfig && typeof (this.callbackProvisioningConfig as any).validate === 'function') {
      (this.callbackProvisioningConfig as any).validate();
    }
    if(this.scimProvisioningConfig && typeof (this.scimProvisioningConfig as any).validate === 'function') {
      (this.scimProvisioningConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningScopeResponseBodyApplicationProvisioningScope extends $dara.Model {
  /**
   * @remarks
   * Synchronize the list of authorized groups
   */
  groupIds?: string[];
  /**
   * @remarks
   * Instance Indicates the maximum quota number of authorized agents
   * 
   * @example
   * 20
   */
  maxQuota?: number;
  /**
   * @remarks
   * The list of organizational units that are authorized for account synchronization.
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * Indicates the quota number of used authorized agents
   * 
   * @example
   * 10
   */
  usedQuota?: number;
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      maxQuota: 'MaxQuota',
      organizationalUnitIds: 'OrganizationalUnitIds',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      maxQuota: 'number',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      usedQuota: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims extends $dara.Model {
  /**
   * @remarks
   * The claim name.
   * 
   * @example
   * userOuIds
   */
  claimName?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of the claim.
   * 
   * @example
   * ObjectToJsonString(user.organizationalUnits)
   */
  claimValueExpression?: string;
  static names(): { [key: string]: string } {
    return {
      claimName: 'ClaimName',
      claimValueExpression: 'ClaimValueExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimName: 'string',
      claimValueExpression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfig extends $dara.Model {
  /**
   * @remarks
   * The validity period of the issued access token. Unit: seconds. Default value: 1200.
   * 
   * @example
   * 1200
   */
  accessTokenEffectiveTime?: number;
  /**
   * @remarks
   * The validity period of the issued code. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  codeEffectiveTime?: number;
  /**
   * @remarks
   * The custom claims that are returned for the ID token.
   */
  customClaims?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims[];
  /**
   * @remarks
   * The scopes of user attributes that can be returned for the UserInfo endpoint or ID token.
   * 
   * @example
   * profile，email
   */
  grantScopes?: string[];
  /**
   * @remarks
   * The list of grant types that are supported for OIDC protocols.
   * 
   * @example
   * authorization_code
   */
  grantTypes?: string[];
  /**
   * @remarks
   * The validity period of the issued ID token. Unit: seconds. Default value: 300.
   * 
   * @example
   * 1200
   */
  idTokenEffectiveTime?: number;
  /**
   * @remarks
   * The ID of the identity authentication source in password mode. This parameter is returned only when the value of the GrantTypes parameter includes the password mode.
   * 
   * @example
   * ia_password
   */
  passwordAuthenticationSourceId?: string;
  /**
   * @remarks
   * Indicates whether time-based one-time password (TOTP) authentication is required in password mode. This parameter is returned only when the value of the GrantTypes parameter includes the password mode.
   * 
   * @example
   * true
   */
  passwordTotpMfaRequired?: boolean;
  /**
   * @remarks
   * The algorithms that are used to calculate the code challenge for PKCE.
   * 
   * @example
   * S256
   */
  pkceChallengeMethods?: string[];
  /**
   * @remarks
   * Indicates whether the SSO of the application requires Proof Key for Code Exchange (PKCE) (RFC 7636).
   * 
   * @example
   * true
   */
  pkceRequired?: boolean;
  /**
   * @remarks
   * The list of logout redirect URIs that are supported by the application.
   */
  postLogoutRedirectUris?: string[];
  /**
   * @remarks
   * The list of redirect URIs that are supported by the application.
   */
  redirectUris?: string[];
  /**
   * @remarks
   * The validity period of the issued refresh token. Unit: seconds. Default value: 86400.
   * 
   * @example
   * 86400
   */
  refreshTokenEffective?: number;
  /**
   * @remarks
   * The response types that are supported by the application. This parameter is returned when the value of the GrantTypes parameter includes the implicit mode.
   * 
   * @example
   * token id_token
   */
  responseTypes?: string[];
  /**
   * @remarks
   * The custom expression that is used to generate the subject ID returned for the ID token.
   * 
   * @example
   * user.userid
   */
  subjectIdExpression?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenEffectiveTime: 'AccessTokenEffectiveTime',
      codeEffectiveTime: 'CodeEffectiveTime',
      customClaims: 'CustomClaims',
      grantScopes: 'GrantScopes',
      grantTypes: 'GrantTypes',
      idTokenEffectiveTime: 'IdTokenEffectiveTime',
      passwordAuthenticationSourceId: 'PasswordAuthenticationSourceId',
      passwordTotpMfaRequired: 'PasswordTotpMfaRequired',
      pkceChallengeMethods: 'PkceChallengeMethods',
      pkceRequired: 'PkceRequired',
      postLogoutRedirectUris: 'PostLogoutRedirectUris',
      redirectUris: 'RedirectUris',
      refreshTokenEffective: 'RefreshTokenEffective',
      responseTypes: 'ResponseTypes',
      subjectIdExpression: 'SubjectIdExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenEffectiveTime: 'number',
      codeEffectiveTime: 'number',
      customClaims: { 'type': 'array', 'itemType': GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims },
      grantScopes: { 'type': 'array', 'itemType': 'string' },
      grantTypes: { 'type': 'array', 'itemType': 'string' },
      idTokenEffectiveTime: 'number',
      passwordAuthenticationSourceId: 'string',
      passwordTotpMfaRequired: 'boolean',
      pkceChallengeMethods: { 'type': 'array', 'itemType': 'string' },
      pkceRequired: 'boolean',
      postLogoutRedirectUris: { 'type': 'array', 'itemType': 'string' },
      redirectUris: { 'type': 'array', 'itemType': 'string' },
      refreshTokenEffective: 'number',
      responseTypes: { 'type': 'array', 'itemType': 'string' },
      subjectIdExpression: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customClaims)) {
      $dara.Model.validateArray(this.customClaims);
    }
    if(Array.isArray(this.grantScopes)) {
      $dara.Model.validateArray(this.grantScopes);
    }
    if(Array.isArray(this.grantTypes)) {
      $dara.Model.validateArray(this.grantTypes);
    }
    if(Array.isArray(this.pkceChallengeMethods)) {
      $dara.Model.validateArray(this.pkceChallengeMethods);
    }
    if(Array.isArray(this.postLogoutRedirectUris)) {
      $dara.Model.validateArray(this.postLogoutRedirectUris);
    }
    if(Array.isArray(this.redirectUris)) {
      $dara.Model.validateArray(this.redirectUris);
    }
    if(Array.isArray(this.responseTypes)) {
      $dara.Model.validateArray(this.responseTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigProtocolEndpointDomain extends $dara.Model {
  /**
   * @remarks
   * The OAuth2.0 authorization endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/login/app/app_mltta64q65enci54slingvvsgq/oauth2/authorize
   */
  oauth2AuthorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth2.0 device authorization endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/device/code
   */
  oauth2DeviceAuthorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth2.0 token revocation endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/revoke
   */
  oauth2RevokeEndpoint?: string;
  /**
   * @remarks
   * The OAuth2.0 token endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/token
   */
  oauth2TokenEndpoint?: string;
  /**
   * @remarks
   * The OIDC UserInfo endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/userinfo
   */
  oauth2UserinfoEndpoint?: string;
  /**
   * @remarks
   * The information about the OIDC issuer. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oidc
   */
  oidcIssuer?: string;
  /**
   * @remarks
   * The JSON Web Key Set (JWKS) URL of the OIDC issuer. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oidc/jwks
   */
  oidcJwksEndpoint?: string;
  /**
   * @remarks
   * The OIDC relying party (RP)-initiated logout endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/login/app/app_mltta64q65enci54slingvvsgq/oauth2/logout
   */
  oidcLogoutEndpoint?: string;
  /**
   * @remarks
   * The metadata URL of the SAML protocol. This parameter is returned only when the SSO protocol of the application is SAML 2.0.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/api/v2/app_mltuxdwd4lq4eer6tmtlmaxm5e/saml2/meta
   */
  samlMetaEndpoint?: string;
  /**
   * @remarks
   * The request receiving URL of the SAML protocol. This parameter is returned only when the SSO protocol of the application is SAML 2.0.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/login/app/app_mltuxdwd4lq4eer6tmtlmaxm5e/saml2/sso
   */
  samlSsoEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      oauth2AuthorizationEndpoint: 'Oauth2AuthorizationEndpoint',
      oauth2DeviceAuthorizationEndpoint: 'Oauth2DeviceAuthorizationEndpoint',
      oauth2RevokeEndpoint: 'Oauth2RevokeEndpoint',
      oauth2TokenEndpoint: 'Oauth2TokenEndpoint',
      oauth2UserinfoEndpoint: 'Oauth2UserinfoEndpoint',
      oidcIssuer: 'OidcIssuer',
      oidcJwksEndpoint: 'OidcJwksEndpoint',
      oidcLogoutEndpoint: 'OidcLogoutEndpoint',
      samlMetaEndpoint: 'SamlMetaEndpoint',
      samlSsoEndpoint: 'SamlSsoEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oauth2AuthorizationEndpoint: 'string',
      oauth2DeviceAuthorizationEndpoint: 'string',
      oauth2RevokeEndpoint: 'string',
      oauth2TokenEndpoint: 'string',
      oauth2UserinfoEndpoint: 'string',
      oidcIssuer: 'string',
      oidcJwksEndpoint: 'string',
      oidcLogoutEndpoint: 'string',
      samlMetaEndpoint: 'string',
      samlSsoEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigAttributeStatements extends $dara.Model {
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName
   */
  attributeName?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of the attribute.
   * 
   * @example
   * user.username
   */
  attributeValueExpression?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValueExpression: 'AttributeValueExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValueExpression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigOptionalRelayStates extends $dara.Model {
  /**
   * @remarks
   * The display name of the RelayState
   * 
   * @example
   * Ram Account SSO
   */
  displayName?: string;
  /**
   * @remarks
   * RelayState.The user will see the display names of multiple optional redirect addresses in the application card of the application portal. After the user clicks and completes SSO, they will automatically jump to the corresponding address. This field can only be filled in after the default redirect address is filled in.
   * 
   * @example
   * https://home.console.aliyun.com
   */
  relayState?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      relayState: 'RelayState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      relayState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfig extends $dara.Model {
  /**
   * @remarks
   * Whether the Assertion needs a signature. ResponseSigned and AssertionSigned cannot be false at the same time.
   * 
   * true: signature is required.
   * false: signature is not required.
   * 
   * @example
   * true
   */
  assertionSigned?: boolean;
  /**
   * @remarks
   * The additional user attributes in the SAML assertion.
   */
  attributeStatements?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigAttributeStatements[];
  /**
   * @remarks
   * The default value of the RelayState attribute. If the SSO request is initiated in EIAM, the RelayState attribute in the SAML response is set to this default value.
   * 
   * @example
   * https://home.console.aliyun.com
   */
  defaultRelayState?: string;
  /**
   * @remarks
   * The custom issuer ID.
   * 
   * @example
   * https://example.com/
   */
  idPEntityId?: string;
  /**
   * @remarks
   * The Format attribute of the NameID element in the SAML assertion. Valid values:
   * 
   * *   urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified: No format is specified. How to resolve the NameID element depends on the application.
   * *   urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress: The NameID element must be an email address.
   * *   urn:oasis:names:tc:SAML:2.0:nameid-format:persistent: The NameID element must be persistent.
   * *   urn:oasis:names:tc:SAML:2.0:nameid-format:transient: The NameID element must be transient.
   * 
   * @example
   * urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified
   */
  nameIdFormat?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of NameID in the SAML assertion.
   * 
   * @example
   * user.username
   */
  nameIdValueExpression?: string;
  /**
   * @remarks
   * Optional RelayState. The user will see the display names of multiple optional redirect addresses in the application card of the application portal. After the user clicks and completes SSO, they will automatically jump to the corresponding address. This field can only be filled in after the default redirect address is filled in.
   */
  optionalRelayStates?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigOptionalRelayStates[];
  /**
   * @remarks
   * Whether the response needs to be signed. ResponseSigned and AssertionSigned cannot be false at the same time.
   * 
   * true: signature is required.
   * false: signature is not required.
   * 
   * @example
   * true
   */
  responseSigned?: boolean;
  /**
   * @remarks
   * The algorithm that is used to calculate the signature for the SAML assertion.
   * 
   * @example
   * RSA-SHA256
   */
  signatureAlgorithm?: string;
  /**
   * @remarks
   * The entity ID of the application in SAML. The application assumes the role of service provider.
   * 
   * @example
   * urn:alibaba:cloudcomputing
   */
  spEntityId?: string;
  /**
   * @remarks
   * The Assertion Consumer Service (ACS) URL of the application in SAML. The application assumes the role of service provider.
   * 
   * @example
   * https://signin.aliyun.com/saml-role/sso
   */
  spSsoAcsUrl?: string;
  static names(): { [key: string]: string } {
    return {
      assertionSigned: 'AssertionSigned',
      attributeStatements: 'AttributeStatements',
      defaultRelayState: 'DefaultRelayState',
      idPEntityId: 'IdPEntityId',
      nameIdFormat: 'NameIdFormat',
      nameIdValueExpression: 'NameIdValueExpression',
      optionalRelayStates: 'OptionalRelayStates',
      responseSigned: 'ResponseSigned',
      signatureAlgorithm: 'SignatureAlgorithm',
      spEntityId: 'SpEntityId',
      spSsoAcsUrl: 'SpSsoAcsUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertionSigned: 'boolean',
      attributeStatements: { 'type': 'array', 'itemType': GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigAttributeStatements },
      defaultRelayState: 'string',
      idPEntityId: 'string',
      nameIdFormat: 'string',
      nameIdValueExpression: 'string',
      optionalRelayStates: { 'type': 'array', 'itemType': GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigOptionalRelayStates },
      responseSigned: 'boolean',
      signatureAlgorithm: 'string',
      spEntityId: 'string',
      spSsoAcsUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeStatements)) {
      $dara.Model.validateArray(this.attributeStatements);
    }
    if(Array.isArray(this.optionalRelayStates)) {
      $dara.Model.validateArray(this.optionalRelayStates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfig extends $dara.Model {
  /**
   * @remarks
   * The initial SSO method. Valid values:
   * 
   * *   only_app_init_sso: Only application-initiated SSO is allowed. This method is selected by default when the SSO protocol of the application is an OIDC protocol. If this method is selected when the SSO protocol of the application is SAML, the InitLoginUrl parameter is required.
   * *   idaas_or_app_init_sso: IDaaS-initiated SSO and application-initiated SSO are allowed. This method is selected by default when the SSO protocol of the application is SAML. If this method is selected when the SSO protocol of the application is an OIDC protocol, the InitLoginUrl parameter is required.
   * 
   * @example
   * only_app_init_sso
   */
  initLoginType?: string;
  /**
   * @remarks
   * The initial webhook URL of SSO. This parameter is required when the SSO protocol of the application is an OIDC protocol and the InitLoginType parameters is set to idaas_or_app_init_sso or when the SSO protocol of the application is SAML and the InitLoginType parameter is set to only_app_init_sso.
   * 
   * @example
   * http://127.0.0.1:8000/start_login?enterprise_code=ABCDEF
   */
  initLoginUrl?: string;
  /**
   * @remarks
   * The Open ID Connect (OIDC)-based SSO configuration attributes of the application. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   */
  oidcSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfig;
  /**
   * @remarks
   * The configuration of the metadata endpoint provided by the application.
   */
  protocolEndpointDomain?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigProtocolEndpointDomain;
  /**
   * @remarks
   * The Security Assertion Markup Language (SAML)-based SSO configuration attributes of the application. This parameter is returned only if the SSO protocol of the application is SAML 2.0.
   */
  samlSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfig;
  /**
   * @remarks
   * The SSO feature status of the application. Valid values:
   * 
   * *   enabled: The feature is enabled.
   * *   disabled: The feature is disabled.
   * 
   * @example
   * enabled
   */
  ssoStatus?: string;
  static names(): { [key: string]: string } {
    return {
      initLoginType: 'InitLoginType',
      initLoginUrl: 'InitLoginUrl',
      oidcSsoConfig: 'OidcSsoConfig',
      protocolEndpointDomain: 'ProtocolEndpointDomain',
      samlSsoConfig: 'SamlSsoConfig',
      ssoStatus: 'SsoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initLoginType: 'string',
      initLoginUrl: 'string',
      oidcSsoConfig: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfig,
      protocolEndpointDomain: GetApplicationSsoConfigResponseBodyApplicationSsoConfigProtocolEndpointDomain,
      samlSsoConfig: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfig,
      ssoStatus: 'string',
    };
  }

  validate() {
    if(this.oidcSsoConfig && typeof (this.oidcSsoConfig as any).validate === 'function') {
      (this.oidcSsoConfig as any).validate();
    }
    if(this.protocolEndpointDomain && typeof (this.protocolEndpointDomain as any).validate === 'function') {
      (this.protocolEndpointDomain as any).validate();
    }
    if(this.samlSsoConfig && typeof (this.samlSsoConfig as any).validate === 'function') {
      (this.samlSsoConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBodyDomainFiling extends $dara.Model {
  /**
   * @remarks
   * 域名关联的备案号, 长度最大限制64。
   */
  icpNumber?: string;
  static names(): { [key: string]: string } {
    return {
      icpNumber: 'IcpNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBodyDomain extends $dara.Model {
  /**
   * @remarks
   * 域名创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 是否默认域名。true表示实例默认域名，false表示非默认域名
   * 
   * @example
   * false
   */
  defaultDomain?: boolean;
  /**
   * @remarks
   * 域名。
   * 
   * @example
   * login.example.com
   */
  domain?: string;
  /**
   * @remarks
   * 域名ID。
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名类型。枚举取值:system_init(系统初始化)、user_custom(用户自定义)。
   * 
   * @example
   * system_init
   */
  domainType?: string;
  /**
   * @remarks
   * 域名备案信息。
   */
  filing?: GetDomainResponseBodyDomainFiling;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 域名锁定状态。枚举取值:unlock(正常)、lockByLicense(因License限制不可用)。
   * 
   * @example
   * unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * 域名最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultDomain: 'DefaultDomain',
      domain: 'Domain',
      domainId: 'DomainId',
      domainType: 'DomainType',
      filing: 'Filing',
      instanceId: 'InstanceId',
      lockMode: 'LockMode',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      defaultDomain: 'boolean',
      domain: 'string',
      domainId: 'string',
      domainType: 'string',
      filing: GetDomainResponseBodyDomainFiling,
      instanceId: 'string',
      lockMode: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.filing && typeof (this.filing as any).validate === 'function') {
      (this.filing as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainDnsChallengeResponseBodyDomainDnsChallenge extends $dara.Model {
  /**
   * @remarks
   * DNS challenge名称。
   * 
   * @example
   * _idaas-challenge.${domain}
   */
  dnsChallengeName?: string;
  /**
   * @remarks
   * DNS challenge值。
   * 
   * @example
   * exmple123xxx
   */
  dnsChallengeValue?: string;
  /**
   * @remarks
   * DNS记录类型。
   * 
   * @example
   * 枚举，目前只支持TXT类型
   */
  dnsType?: string;
  static names(): { [key: string]: string } {
    return {
      dnsChallengeName: 'DnsChallengeName',
      dnsChallengeValue: 'DnsChallengeValue',
      dnsType: 'DnsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsChallengeName: 'string',
      dnsChallengeValue: 'string',
      dnsType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetForgetPasswordConfigurationResponseBodyOpenForgetPasswordConfiguration extends $dara.Model {
  /**
   * @remarks
   * 表示忘记密码认证渠道。枚举取值:email(邮件)、sms(短信)
   */
  authenticationChannels?: string[];
  /**
   * @remarks
   * Indicates whether the forgot password feature is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether email authentication is enabled for the forgot password feature.
   * 
   * @example
   * true
   */
  enableEmail?: boolean;
  /**
   * @remarks
   * Indicates whether Short Message Service (SMS) authentication is enabled for the forgot password feature.
   * 
   * @example
   * true
   */
  enableSms?: boolean;
  /**
   * @remarks
   * 表示忘记密码配置状态。枚举取值:enabled(开启)、disabled(禁用)
   */
  forgetPasswordStatus?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationChannels: 'AuthenticationChannels',
      enable: 'Enable',
      enableEmail: 'EnableEmail',
      enableSms: 'EnableSms',
      forgetPasswordStatus: 'ForgetPasswordStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationChannels: { 'type': 'array', 'itemType': 'string' },
      enable: 'boolean',
      enableEmail: 'boolean',
      enableSms: 'boolean',
      forgetPasswordStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authenticationChannels)) {
      $dara.Model.validateArray(this.authenticationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyGroup extends $dara.Model {
  /**
   * @remarks
   * The time at which the group was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * test_group
   */
  description?: string;
  /**
   * @remarks
   * The external ID of the group, which can be used to associate the group with an external system. By default, the external ID is the group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupExternalId?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * group_name
   */
  groupName?: string;
  /**
   * @remarks
   * The source ID of the group. By default, the source ID is the instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  groupSourceId?: string;
  /**
   * @remarks
   * The source type of the group. Only build_in may be returned, which indicates that the group was created in IDaaS.
   * 
   * *build_in:Create By Self.
   * 
   * @example
   * build_in
   */
  groupSourceType?: string;
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
   * The time at which the group was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      groupExternalId: 'GroupExternalId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupSourceId: 'GroupSourceId',
      groupSourceType: 'GroupSourceType',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      groupExternalId: 'string',
      groupId: 'string',
      groupName: 'string',
      groupSourceId: 'string',
      groupSourceType: 'string',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkAppConfig extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM 钉钉一方应用的AppKey
   * 
   * @example
   * 41reopmwoy9s
   */
  appKey?: string;
  /**
   * @remarks
   * IDaaS EIAM 钉钉一方应用的AppSecret
   * 
   * @example
   * REOQ6Cl55kriOd8NOBeqWYLKpHR4p6fdZxxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * IDaaS EIAM 钉钉一方应用的corpId
   * 
   * @example
   * 3756043633237690761
   */
  corpId?: string;
  /**
   * @remarks
   * IDaaS EIAM 钉钉版本
   * 
   * @example
   * public_dingtalk
   */
  dingtalkVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      corpId: 'CorpId',
      dingtalkVersion: 'DingtalkVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
      corpId: 'string',
      dingtalkVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfigAuthedDepartmentIds extends $dara.Model {
  /**
   * @remarks
   * 钉钉部门Id
   * 
   * @example
   * 123xxx444
   */
  deptId?: string;
  /**
   * @remarks
   * 钉钉部门名称
   * 
   * @example
   * 测试部门
   */
  deptName?: string;
  static names(): { [key: string]: string } {
    return {
      deptId: 'DeptId',
      deptName: 'DeptName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptId: 'string',
      deptName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfigAuthedUsers extends $dara.Model {
  /**
   * @remarks
   * 钉钉用户名称
   * 
   * @example
   * 张三
   */
  name?: string;
  /**
   * @remarks
   * 钉钉用户userId
   * 
   * @example
   * 130308333929200479
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfig extends $dara.Model {
  /**
   * @remarks
   * 授权的钉钉部门
   */
  authedDepartmentIds?: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfigAuthedDepartmentIds[];
  /**
   * @remarks
   * 授权的钉钉账户列表
   */
  authedUsers?: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfigAuthedUsers[];
  /**
   * @remarks
   * 钉钉企业corpId
   * 
   * @example
   * ding_xxxxx
   */
  corpId?: string;
  /**
   * @remarks
   * 钉钉企业名称
   * 
   * @example
   * 测试企业
   */
  corpName?: string;
  static names(): { [key: string]: string } {
    return {
      authedDepartmentIds: 'AuthedDepartmentIds',
      authedUsers: 'AuthedUsers',
      corpId: 'CorpId',
      corpName: 'CorpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authedDepartmentIds: { 'type': 'array', 'itemType': GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfigAuthedDepartmentIds },
      authedUsers: { 'type': 'array', 'itemType': GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfigAuthedUsers },
      corpId: 'string',
      corpName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authedDepartmentIds)) {
      $dara.Model.validateArray(this.authedDepartmentIds);
    }
    if(Array.isArray(this.authedUsers)) {
      $dara.Model.validateArray(this.authedUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBodyIdentityProviderDetailLarkConfig extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM 飞书自建应用的corpId
   * 
   * @example
   * cli_a7a99f53a317100c
   */
  appId?: string;
  /**
   * @remarks
   * IDaaS EIAM 飞书自建应用的AppSecret
   * 
   * @example
   * ***
   */
  appSecret?: string;
  encryptKey?: string;
  /**
   * @remarks
   * IDaaS EIAM 飞书企业编码
   * 
   * @example
   * FX1231xxxx
   */
  enterpriseNumber?: string;
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecret: 'AppSecret',
      encryptKey: 'EncryptKey',
      enterpriseNumber: 'EnterpriseNumber',
      verificationToken: 'VerificationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
      encryptKey: 'string',
      enterpriseNumber: 'string',
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

export class GetIdentityProviderResponseBodyIdentityProviderDetailLdapConfig extends $dara.Model {
  /**
   * @remarks
   * 管理员密码
   * 
   * @example
   * XXXX
   */
  administratorPassword?: string;
  /**
   * @remarks
   * 管理员账号
   * 
   * @example
   * example.com
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
   * 127.xx.xx.100
   */
  ldapServerHost?: string;
  /**
   * @remarks
   * ad/ldap 服务器地址
   * 
   * @example
   * 389
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

export class GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfigAuthnParam extends $dara.Model {
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
   * OIDC/oAuth2 客户端ID。
   * 
   * @example
   * mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
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
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnMethod: 'string',
      clientId: 'string',
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

export class GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfigEndpointConfig extends $dara.Model {
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

export class GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfig extends $dara.Model {
  /**
   * @remarks
   * OIDC客户端认证配置。
   */
  authnParam?: GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfigAuthnParam;
  /**
   * @remarks
   * OIDC 端点配置。
   */
  endpointConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfigEndpointConfig;
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
      authnParam: GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfigAuthnParam,
      endpointConfig: GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfigEndpointConfig,
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

export class GetIdentityProviderResponseBodyIdentityProviderDetailUdPullConfigUdSyncScopeConfig extends $dara.Model {
  /**
   * @remarks
   * 同步来源节点
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * 同步目标节点
   * 
   * @example
   * ou_123xxxx
   */
  targetScope?: string;
  static names(): { [key: string]: string } {
    return {
      sourceScopes: 'SourceScopes',
      targetScope: 'TargetScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceScopes: { 'type': 'array', 'itemType': 'string' },
      targetScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceScopes)) {
      $dara.Model.validateArray(this.sourceScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBodyIdentityProviderDetailUdPullConfig extends $dara.Model {
  /**
   * @example
   * disabled
   */
  groupSyncStatus?: string;
  /**
   * @remarks
   * 增量回调状态，是否处理来自IdP的增量回调数据
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * 同步入配置信息
   */
  udSyncScopeConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailUdPullConfigUdSyncScopeConfig;
  static names(): { [key: string]: string } {
    return {
      groupSyncStatus: 'GroupSyncStatus',
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      udSyncScopeConfig: 'UdSyncScopeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupSyncStatus: 'string',
      incrementalCallbackStatus: 'string',
      udSyncScopeConfig: GetIdentityProviderResponseBodyIdentityProviderDetailUdPullConfigUdSyncScopeConfig,
    };
  }

  validate() {
    if(this.udSyncScopeConfig && typeof (this.udSyncScopeConfig as any).validate === 'function') {
      (this.udSyncScopeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBodyIdentityProviderDetailUdPushConfigUdSyncScopeConfigs extends $dara.Model {
  /**
   * @remarks
   * 同步来源节点
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * 同步目标节点
   * 
   * @example
   * ou_123xxxx
   */
  targetScope?: string;
  static names(): { [key: string]: string } {
    return {
      sourceScopes: 'SourceScopes',
      targetScope: 'TargetScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceScopes: { 'type': 'array', 'itemType': 'string' },
      targetScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceScopes)) {
      $dara.Model.validateArray(this.sourceScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBodyIdentityProviderDetailUdPushConfig extends $dara.Model {
  /**
   * @remarks
   * 增量回调状态，是否处理来自IdP的增量回调数据
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * 同步出配置信息
   */
  udSyncScopeConfigs?: GetIdentityProviderResponseBodyIdentityProviderDetailUdPushConfigUdSyncScopeConfigs[];
  static names(): { [key: string]: string } {
    return {
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      udSyncScopeConfigs: 'UdSyncScopeConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incrementalCallbackStatus: 'string',
      udSyncScopeConfigs: { 'type': 'array', 'itemType': GetIdentityProviderResponseBodyIdentityProviderDetailUdPushConfigUdSyncScopeConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.udSyncScopeConfigs)) {
      $dara.Model.validateArray(this.udSyncScopeConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBodyIdentityProviderDetailWeComConfig extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM 企业微信自建应用的Id
   * 
   * @example
   * 1242350
   */
  agentId?: string;
  /**
   * @remarks
   * 授权回调域
   * 
   * @example
   * https://example.com/xxxx
   */
  authorizeCallbackDomain?: string;
  /**
   * @remarks
   * IDaaS EIAM 企业微信自建应用的corpId
   * 
   * @example
   * 3562012953454577801
   */
  corpId?: string;
  /**
   * @remarks
   * IDaaS EIAM 企业微信自建应用的corpSecret
   * 
   * @example
   * weaseiszjskejskaj12sjeszojxxxx
   */
  corpSecret?: string;
  /**
   * @remarks
   * 可信域名
   * 
   * @example
   * https://example.com
   */
  trustableDomain?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      authorizeCallbackDomain: 'AuthorizeCallbackDomain',
      corpId: 'CorpId',
      corpSecret: 'CorpSecret',
      trustableDomain: 'TrustableDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      authorizeCallbackDomain: 'string',
      corpId: 'string',
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

export class GetIdentityProviderResponseBodyIdentityProviderDetail extends $dara.Model {
  /**
   * @remarks
   * 高阶配置能力
   * 
   * @example
   * disabled
   */
  advancedStatus?: string;
  /**
   * @remarks
   * IDaaS EIAM 对应的认证来源产品，okta or google or azure ad
   * 
   * @example
   * urn:alibaba:idaas:idp:bytedance:lark
   */
  authnSourceSupplier?: string;
  /**
   * @remarks
   * IDaaS EIAM 认证方式类型 oidc or saml
   * 
   * @example
   * urn:alibaba:idaas:authntype:oidc
   */
  authnSourceType?: string;
  /**
   * @remarks
   * IDaaS EIAM 对应IdP是否支持认证
   * 
   * @example
   * disabled
   */
  authnStatus?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1726021079000
   */
  createTime?: number;
  /**
   * @remarks
   * IDaaS EIAM 身份提供方描述
   * 
   * @example
   * for poc test
   */
  description?: string;
  /**
   * @remarks
   * 钉钉基础配置
   */
  dingtalkAppConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkAppConfig;
  /**
   * @remarks
   * 钉钉同步配置
   */
  dingtalkProvisioningConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfig;
  /**
   * @remarks
   * IDaaS EIAM 身份提供方外部ID
   * 
   * @example
   * idp_xxxx
   */
  identityProviderExternalId?: string;
  /**
   * @remarks
   * IDaaS EIAM 身份提供方ID
   * 
   * @example
   * idp_mwpcwnhrimlr2horx7xgg7pp7y
   */
  identityProviderId?: string;
  /**
   * @remarks
   * IDaaS EIAM 身份提供方名称
   * 
   * @example
   * test
   */
  identityProviderName?: string;
  /**
   * @remarks
   * 身份提供方同步类型
   * 
   * @example
   * urn:alibaba:idaas:idp:alibaba:dingtalk:push
   */
  identityProviderType?: string;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_x2df3bak3uwnapqm6xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 飞书配置
   */
  larkConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailLarkConfig;
  /**
   * @remarks
   * 最后一次状态检查结果
   * 
   * @example
   * success
   */
  lastStatusCheckJobResult?: string;
  /**
   * @remarks
   * AD/LDAP身份提供方相关信息
   */
  ldapConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailLdapConfig;
  /**
   * @remarks
   * 锁定原因
   * 
   * @example
   * financial
   */
  lockReason?: string;
  logoUrl?: string;
  /**
   * @remarks
   * 网络端点ID
   * 
   * @example
   * nae_mx4vsadfe6govkqkwckxxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * OIDC IdP配置。
   */
  oidcConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfig;
  /**
   * @remarks
   * 同步入配置
   */
  udPullConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailUdPullConfig;
  /**
   * @remarks
   * IDaaS EIAM 是否支持UD同步
   * 
   * @example
   * disabled
   */
  udPullStatus?: string;
  /**
   * @remarks
   * 同步出配置
   */
  udPushConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailUdPushConfig;
  /**
   * @remarks
   * 同步出能力
   * 
   * @example
   * disabled
   */
  udPushStatus?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 1726021079000
   */
  updateTime?: number;
  /**
   * @remarks
   * 企业微信
   */
  weComConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailWeComConfig;
  static names(): { [key: string]: string } {
    return {
      advancedStatus: 'AdvancedStatus',
      authnSourceSupplier: 'AuthnSourceSupplier',
      authnSourceType: 'AuthnSourceType',
      authnStatus: 'AuthnStatus',
      createTime: 'CreateTime',
      description: 'Description',
      dingtalkAppConfig: 'DingtalkAppConfig',
      dingtalkProvisioningConfig: 'DingtalkProvisioningConfig',
      identityProviderExternalId: 'IdentityProviderExternalId',
      identityProviderId: 'IdentityProviderId',
      identityProviderName: 'IdentityProviderName',
      identityProviderType: 'IdentityProviderType',
      instanceId: 'InstanceId',
      larkConfig: 'LarkConfig',
      lastStatusCheckJobResult: 'LastStatusCheckJobResult',
      ldapConfig: 'LdapConfig',
      lockReason: 'LockReason',
      logoUrl: 'LogoUrl',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      oidcConfig: 'OidcConfig',
      udPullConfig: 'UdPullConfig',
      udPullStatus: 'UdPullStatus',
      udPushConfig: 'UdPushConfig',
      udPushStatus: 'UdPushStatus',
      updateTime: 'UpdateTime',
      weComConfig: 'WeComConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedStatus: 'string',
      authnSourceSupplier: 'string',
      authnSourceType: 'string',
      authnStatus: 'string',
      createTime: 'number',
      description: 'string',
      dingtalkAppConfig: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkAppConfig,
      dingtalkProvisioningConfig: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfig,
      identityProviderExternalId: 'string',
      identityProviderId: 'string',
      identityProviderName: 'string',
      identityProviderType: 'string',
      instanceId: 'string',
      larkConfig: GetIdentityProviderResponseBodyIdentityProviderDetailLarkConfig,
      lastStatusCheckJobResult: 'string',
      ldapConfig: GetIdentityProviderResponseBodyIdentityProviderDetailLdapConfig,
      lockReason: 'string',
      logoUrl: 'string',
      networkAccessEndpointId: 'string',
      oidcConfig: GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfig,
      udPullConfig: GetIdentityProviderResponseBodyIdentityProviderDetailUdPullConfig,
      udPullStatus: 'string',
      udPushConfig: GetIdentityProviderResponseBodyIdentityProviderDetailUdPushConfig,
      udPushStatus: 'string',
      updateTime: 'number',
      weComConfig: GetIdentityProviderResponseBodyIdentityProviderDetailWeComConfig,
    };
  }

  validate() {
    if(this.dingtalkAppConfig && typeof (this.dingtalkAppConfig as any).validate === 'function') {
      (this.dingtalkAppConfig as any).validate();
    }
    if(this.dingtalkProvisioningConfig && typeof (this.dingtalkProvisioningConfig as any).validate === 'function') {
      (this.dingtalkProvisioningConfig as any).validate();
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
    if(this.udPullConfig && typeof (this.udPullConfig as any).validate === 'function') {
      (this.udPullConfig as any).validate();
    }
    if(this.udPushConfig && typeof (this.udPushConfig as any).validate === 'function') {
      (this.udPushConfig as any).validate();
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

export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationLdapUdPullConfig extends $dara.Model {
  /**
   * @remarks
   * 组成员标识
   * 
   * @example
   * group
   */
  groupMemberAttributeName?: string;
  /**
   * @remarks
   * 组objectClass
   * 
   * @example
   * member
   */
  groupObjectClass?: string;
  /**
   * @remarks
   * 组自定义Filter
   * 
   * @example
   * (|(cn=test)(group=test@test.com))
   */
  groupObjectClassCustomFilter?: string;
  /**
   * @remarks
   * 组织objectClass
   * 
   * @example
   * ou,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * 用户objectClass
   * 
   * @example
   * ou,top
   */
  userObjectClass?: string;
  /**
   * @remarks
   * 用户自定义Filter
   * 
   * @example
   * (|(cn=test)(mail=test@test.com))
   */
  userObjectClassCustomFilter?: string;
  static names(): { [key: string]: string } {
    return {
      groupMemberAttributeName: 'GroupMemberAttributeName',
      groupObjectClass: 'GroupObjectClass',
      groupObjectClassCustomFilter: 'GroupObjectClassCustomFilter',
      organizationUnitObjectClass: 'OrganizationUnitObjectClass',
      userObjectClass: 'UserObjectClass',
      userObjectClassCustomFilter: 'UserObjectClassCustomFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMemberAttributeName: 'string',
      groupObjectClass: 'string',
      groupObjectClassCustomFilter: 'string',
      organizationUnitObjectClass: 'string',
      userObjectClass: 'string',
      userObjectClassCustomFilter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPullProtectedRule extends $dara.Model {
  /**
   * @remarks
   * 同步保护规则-删除组数量
   * 
   * @example
   * 10
   */
  groupDeletedThreshold?: number;
  /**
   * @remarks
   * IDaaS EIAM 钉钉一方应用同步保护规则-删除组织数量
   * 
   * @example
   * 10
   */
  organizationalUnitDeletedThreshold?: number;
  /**
   * @remarks
   * IDaaS EIAM 钉钉一方应用同步保护规则-删除账户数量
   * 
   * @example
   * 30
   */
  userDeletedThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      groupDeletedThreshold: 'GroupDeletedThreshold',
      organizationalUnitDeletedThreshold: 'OrganizationalUnitDeletedThreshold',
      userDeletedThreshold: 'UserDeletedThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupDeletedThreshold: 'number',
      organizationalUnitDeletedThreshold: 'number',
      userDeletedThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationUdSyncScopeConfig extends $dara.Model {
  /**
   * @remarks
   * 同步来源节点
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * 同步目标节点
   * 
   * @example
   * ou_asjdfhaskfhw213mnsj33sXXX
   */
  targetScope?: string;
  static names(): { [key: string]: string } {
    return {
      sourceScopes: 'SourceScopes',
      targetScope: 'TargetScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceScopes: { 'type': 'array', 'itemType': 'string' },
      targetScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceScopes)) {
      $dara.Model.validateArray(this.sourceScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfiguration extends $dara.Model {
  /**
   * @remarks
   * 组同步状态
   * 
   * @example
   * enabled
   */
  groupSyncStatus?: string;
  /**
   * @remarks
   * IDaaS EIAM 身份提供方ID
   * 
   * @example
   * idp_my664lwkhpicbyzirog3xxxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * 增量回调状态，是否处理来自IdP的增量回调数据
   * 
   * @example
   * enabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * ldap同步侧相关配置信息
   */
  ldapUdPullConfig?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationLdapUdPullConfig;
  /**
   * @example
   * enabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * 同步入用户映射字段配置列表
   */
  pullProtectedRule?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPullProtectedRule;
  /**
   * @remarks
   * 同步入配置信息
   */
  udSyncScopeConfig?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationUdSyncScopeConfig;
  static names(): { [key: string]: string } {
    return {
      groupSyncStatus: 'GroupSyncStatus',
      identityProviderId: 'IdentityProviderId',
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      instanceId: 'InstanceId',
      ldapUdPullConfig: 'LdapUdPullConfig',
      periodicSyncStatus: 'PeriodicSyncStatus',
      pullProtectedRule: 'PullProtectedRule',
      udSyncScopeConfig: 'UdSyncScopeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupSyncStatus: 'string',
      identityProviderId: 'string',
      incrementalCallbackStatus: 'string',
      instanceId: 'string',
      ldapUdPullConfig: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationLdapUdPullConfig,
      periodicSyncStatus: 'string',
      pullProtectedRule: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPullProtectedRule,
      udSyncScopeConfig: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationUdSyncScopeConfig,
    };
  }

  validate() {
    if(this.ldapUdPullConfig && typeof (this.ldapUdPullConfig as any).validate === 'function') {
      (this.ldapUdPullConfig as any).validate();
    }
    if(this.pullProtectedRule && typeof (this.pullProtectedRule as any).validate === 'function') {
      (this.pullProtectedRule as any).validate();
    }
    if(this.udSyncScopeConfig && typeof (this.udSyncScopeConfig as any).validate === 'function') {
      (this.udSyncScopeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceDefaultEndpoint extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * example-xxx.aliyunidaas.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * *   resolved
   * *   unresolved
   * 
   * @example
   * resolved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceDomainConfig extends $dara.Model {
  /**
   * @remarks
   * The default domain of the instance.
   * 
   * @example
   * example-xxx.example.com
   */
  defaultDomain?: string;
  /**
   * @remarks
   * The init domain of the instance.
   * 
   * @example
   * example-xxx.aliyunidaas.com
   */
  initDomain?: string;
  /**
   * @remarks
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  initDomainAutoRedirectStatus?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDomain: 'DefaultDomain',
      initDomain: 'InitDomain',
      initDomainAutoRedirectStatus: 'InitDomainAutoRedirectStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDomain: 'string',
      initDomain: 'string',
      initDomainAutoRedirectStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1550115455000
   */
  createTime?: number;
  /**
   * @remarks
   * The default endpoint of the instance.
   */
  defaultEndpoint?: GetInstanceResponseBodyInstanceDefaultEndpoint;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test_description
   */
  description?: string;
  /**
   * @remarks
   * The default domain of the instance.
   */
  domainConfig?: GetInstanceResponseBodyInstanceDomainConfig;
  /**
   * @remarks
   * The outbound public CIDR blocks of the instance. For example, when you synchronize Active Directory (AD) accounts, the IDaaS EIAM instance accesses your AD service by using the outbound public CIDR blocks.
   */
  egressAddresses?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_abt3pfwojojcq323si6g5xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   creating
   * *   running
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultEndpoint: 'DefaultEndpoint',
      description: 'Description',
      domainConfig: 'DomainConfig',
      egressAddresses: 'EgressAddresses',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      defaultEndpoint: GetInstanceResponseBodyInstanceDefaultEndpoint,
      description: 'string',
      domainConfig: GetInstanceResponseBodyInstanceDomainConfig,
      egressAddresses: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.defaultEndpoint && typeof (this.defaultEndpoint as any).validate === 'function') {
      (this.defaultEndpoint as any).validate();
    }
    if(this.domainConfig && typeof (this.domainConfig as any).validate === 'function') {
      (this.domainConfig as any).validate();
    }
    if(Array.isArray(this.egressAddresses)) {
      $dara.Model.validateArray(this.egressAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLicenseResponseBodyLicense extends $dara.Model {
  /**
   * @remarks
   * Edition of the License
   * 
   * @example
   * free
   */
  edition?: string;
  /**
   * @remarks
   * End date of the validity period of the License, timestamp
   * 
   * @example
   * 1723996800000
   */
  endTime?: number;
  /**
   * @remarks
   * Payment type of the License
   * 
   * @example
   * prepay
   */
  licenseChargeType?: string;
  /**
   * @remarks
   * Detailed configuration JSON string of the License
   * 
   * @example
   * {"modules":[{"features":[{"name":"urn:alibaba:idaas:license:module:ud:customField","status":"enabled"}]……{"name":"urn:alibaba:idaas:license:tag:enterprise","status":"enabled"}],"version":"1.0"}
   */
  licenseConfigJson?: string;
  /**
   * @remarks
   * Creation time of the License, timestamp
   * 
   * @example
   * 1720509699000
   */
  licenseCreateTime?: number;
  /**
   * @remarks
   * Unique identifier of the License
   * 
   * @example
   * license_1234xxxx
   */
  licenseId?: string;
  /**
   * @remarks
   * Status of the License
   * 
   * @example
   * valid
   */
  licenseStatus?: string;
  /**
   * @remarks
   * Purchase channel of the License
   * 
   * @example
   * alibaba_cloud
   */
  purchaseChannel?: string;
  /**
   * @remarks
   * Unique external product identifier corresponding to the License
   * 
   * @example
   * eiam-cn-xxxxx
   */
  purchaseInstanceId?: string;
  /**
   * @remarks
   * Start date of the validity period of the License, timestamp
   * 
   * @example
   * 1720509699000
   */
  startTime?: number;
  /**
   * @remarks
   * User quota of the License
   * 
   * @example
   * 100
   */
  userQuota?: number;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      endTime: 'EndTime',
      licenseChargeType: 'LicenseChargeType',
      licenseConfigJson: 'LicenseConfigJson',
      licenseCreateTime: 'LicenseCreateTime',
      licenseId: 'LicenseId',
      licenseStatus: 'LicenseStatus',
      purchaseChannel: 'PurchaseChannel',
      purchaseInstanceId: 'PurchaseInstanceId',
      startTime: 'StartTime',
      userQuota: 'UserQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      endTime: 'number',
      licenseChargeType: 'string',
      licenseConfigJson: 'string',
      licenseCreateTime: 'number',
      licenseId: 'string',
      licenseStatus: 'string',
      purchaseChannel: 'string',
      purchaseInstanceId: 'string',
      startTime: 'number',
      userQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkAccessEndpointResponseBodyNetworkAccessEndpoint extends $dara.Model {
  /**
   * @remarks
   * 专属网络端点创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 网络访问端私网出口IP地址列表。
   * 
   * @example
   * 172.168.x.x
   */
  egressPrivateIpAddresses?: string[];
  /**
   * @remarks
   * 网络访问端点公网出口IP地址段
   * 
   * @example
   * 8.xx.xx.xxx/27
   */
  egressPublicIpAddresses?: string[];
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 专属网络端点ID。
   * 
   * @example
   * nae_examplexxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * 专属网络端点名称。
   * 
   * @example
   * xx业务VPC访问端点
   */
  networkAccessEndpointName?: string;
  /**
   * @remarks
   * 专属网络端点连接的类型。
   * 
   * @example
   * private
   */
  networkAccessEndpointType?: string;
  /**
   * @remarks
   * 专属网络端点使用的安全组ID。
   * 
   * @example
   * sg-examplexxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * 专属网络端点状态。
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * 专属网络端点最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  /**
   * @remarks
   * 专属网络端点连接的指定vSwitch列表。
   * 
   * @example
   * vsw-examplexxx
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * 专属网络端点连接的VpcID。
   * 
   * @example
   * vpc-examplexxx
   */
  vpcId?: string;
  /**
   * @remarks
   * 专属网络端点连接的Vpc所属地域。
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      egressPrivateIpAddresses: 'EgressPrivateIpAddresses',
      egressPublicIpAddresses: 'EgressPublicIpAddresses',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      networkAccessEndpointName: 'NetworkAccessEndpointName',
      networkAccessEndpointType: 'NetworkAccessEndpointType',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      updateTime: 'UpdateTime',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      egressPrivateIpAddresses: { 'type': 'array', 'itemType': 'string' },
      egressPublicIpAddresses: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      networkAccessEndpointName: 'string',
      networkAccessEndpointType: 'string',
      securityGroupId: 'string',
      status: 'string',
      updateTime: 'number',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.egressPrivateIpAddresses)) {
      $dara.Model.validateArray(this.egressPrivateIpAddresses);
    }
    if(Array.isArray(this.egressPublicIpAddresses)) {
      $dara.Model.validateArray(this.egressPublicIpAddresses);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitResponseBodyOrganizationalUnit extends $dara.Model {
  /**
   * @remarks
   * The time when the organizational unit was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * Test organizational unit
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the node is a leaf node.
   * 
   * @example
   * false
   */
  leaf?: boolean;
  /**
   * @remarks
   * The external ID of the organizational unit. The external ID can be used by external data to map the data of the organizational unit in IDaaS EIAM. By default, the external ID is the organizational unit ID.
   * 
   * For organizational units with the same source type and source ID, each organizational unit has a unique external ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitExternalId?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * 组织名称。
   * 
   * @example
   * test_organizationalUnit_name
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The source ID of the organizational unit.
   * 
   * If the organizational unit was created in IDaaS, its source ID is the ID of the IDaaS instance. If the organizational unit was imported, its source ID is the enterprise ID in the source. For example, if the organizational unit was imported from DingTalk, its source ID is the corpId value of the enterprise in DingTalk.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  organizationalUnitSourceId?: string;
  /**
   * @remarks
   * The source type of the organizational unit. Valid values:
   * 
   * *   build_in: The organizational unit was created in IDaaS.
   * *   ding_talk: The organizational unit was imported from DingTalk.
   * *   ad: The organizational unit was imported from Microsoft Active Directory (AD).
   * *   ldap: The organizational unit was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * @example
   * build_in
   */
  organizationalUnitSourceType?: string;
  /**
   * @remarks
   * The ID of the parent organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  /**
   * @remarks
   * The time when the organizational unit was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      leaf: 'Leaf',
      organizationalUnitExternalId: 'OrganizationalUnitExternalId',
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
      organizationalUnitSourceId: 'OrganizationalUnitSourceId',
      organizationalUnitSourceType: 'OrganizationalUnitSourceType',
      parentId: 'ParentId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      leaf: 'boolean',
      organizationalUnitExternalId: 'string',
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      organizationalUnitSourceId: 'string',
      organizationalUnitSourceType: 'string',
      parentId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfigurationPasswordComplexityRules extends $dara.Model {
  /**
   * @remarks
   * The type of the password check. Valid values:
   * 
   * *   inclusion_upper_case: The password must contain uppercase letters.
   * *   inclusion_lower_case: The password must contain lowercase letters.
   * *   inclusion_special_case: The password must contain one or more of the following special characters: @ % + \\ / \\" ! # $ ^ ? : , ( ) { } [ ] ~ - _ .
   * *   inclusion_number: The password must contain digits.
   * *   exclusion_username: The password cannot contain a username.
   * *   exclusion_email: The password cannot contain an email prefix.
   * *   exclusion_phone_number: The password cannot contain a mobile number.
   * *   exclusion_display_name: The password cannot contain a display name.
   * 
   * @example
   * inclusion_upper_case
   */
  passwordCheckType?: string;
  static names(): { [key: string]: string } {
    return {
      passwordCheckType: 'PasswordCheckType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordCheckType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfiguration extends $dara.Model {
  /**
   * @remarks
   * The password complexity rules.
   */
  passwordComplexityRules?: GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfigurationPasswordComplexityRules[];
  /**
   * @remarks
   * The minimum number of characters in a password.
   * 
   * @example
   * 3
   */
  passwordMinLength?: number;
  static names(): { [key: string]: string } {
    return {
      passwordComplexityRules: 'PasswordComplexityRules',
      passwordMinLength: 'PasswordMinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordComplexityRules: { 'type': 'array', 'itemType': GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfigurationPasswordComplexityRules },
      passwordMinLength: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.passwordComplexityRules)) {
      $dara.Model.validateArray(this.passwordComplexityRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of valid authentication IDs. The default is all ["ia_all"]
   * 
   * ia_all: All. If you fill in this value, you cannot fill in other values
   * 
   * ia_password: Account password login
   * 
   * ia_otp_sms: SMS verification code login method
   * 
   * ia_webauthn: WebAuthn authenticator login method
   * 
   * idp_xxx: Specific identity provider authentication method
   */
  effectiveAuthenticationSourceIds?: string[];
  /**
   * @remarks
   * The action to take when a password expires. Valid values:
   * 
   * *   forbid_login: Prohibit the user from using the password to log on to IDaaS.
   * *   force_update_password: Force the user to change the password.
   * *   remind_update_password: Remind the user to change the password.
   * 
   * @example
   * forbid_login
   */
  passwordExpirationAction?: string;
  /**
   * @remarks
   * The methods for receiving password expiration notifications.
   * 
   * @example
   * login
   */
  passwordExpirationNotificationChannels?: string[];
  /**
   * @remarks
   * The number of days before the expiration date during which password expiration notifications are sent. Unit: day.
   * 
   * @example
   * 7
   */
  passwordExpirationNotificationDuration?: number;
  /**
   * @remarks
   * Indicates whether the password expiration notification feature is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordExpirationNotificationStatus?: string;
  /**
   * @remarks
   * Indicates whether the password expiration feature is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordExpirationStatus?: string;
  /**
   * @remarks
   * The number of days before which users must change the password to prevent password expiration. Unit: day.
   * 
   * @example
   * 3
   */
  passwordForcedUpdateDuration?: number;
  /**
   * @remarks
   * The validity period of a password. Unit: day.
   * 
   * @example
   * 180
   */
  passwordValidMaxDay?: number;
  static names(): { [key: string]: string } {
    return {
      effectiveAuthenticationSourceIds: 'EffectiveAuthenticationSourceIds',
      passwordExpirationAction: 'PasswordExpirationAction',
      passwordExpirationNotificationChannels: 'PasswordExpirationNotificationChannels',
      passwordExpirationNotificationDuration: 'PasswordExpirationNotificationDuration',
      passwordExpirationNotificationStatus: 'PasswordExpirationNotificationStatus',
      passwordExpirationStatus: 'PasswordExpirationStatus',
      passwordForcedUpdateDuration: 'PasswordForcedUpdateDuration',
      passwordValidMaxDay: 'PasswordValidMaxDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveAuthenticationSourceIds: { 'type': 'array', 'itemType': 'string' },
      passwordExpirationAction: 'string',
      passwordExpirationNotificationChannels: { 'type': 'array', 'itemType': 'string' },
      passwordExpirationNotificationDuration: 'number',
      passwordExpirationNotificationStatus: 'string',
      passwordExpirationStatus: 'string',
      passwordForcedUpdateDuration: 'number',
      passwordValidMaxDay: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.effectiveAuthenticationSourceIds)) {
      $dara.Model.validateArray(this.effectiveAuthenticationSourceIds);
    }
    if(Array.isArray(this.passwordExpirationNotificationChannels)) {
      $dara.Model.validateArray(this.passwordExpirationNotificationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordHistoryConfigurationResponseBodyPasswordHistoryConfiguration extends $dara.Model {
  /**
   * @remarks
   * The maximum number of recent passwords that are retained.
   * 
   * @example
   * 3
   */
  passwordHistoryMaxRetention?: number;
  /**
   * @remarks
   * Indicates whether the password history feature is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordHistoryStatus?: string;
  static names(): { [key: string]: string } {
    return {
      passwordHistoryMaxRetention: 'PasswordHistoryMaxRetention',
      passwordHistoryStatus: 'PasswordHistoryStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordHistoryMaxRetention: 'number',
      passwordHistoryStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordInitializationConfigurationResponseBodyPasswordInitializationConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether forcible password change upon first logon is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The methods for receiving password initialization notifications.
   * 
   * @example
   * email
   */
  passwordInitializationNotificationChannels?: string[];
  /**
   * @remarks
   * Indicates whether the password initialization feature is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordInitializationStatus?: string;
  /**
   * @remarks
   * The password initialization method. Set the value to random.
   * 
   * *   random: A randomly generated password is used.
   * 
   * @example
   * random
   */
  passwordInitializationType?: string;
  static names(): { [key: string]: string } {
    return {
      passwordForcedUpdateStatus: 'PasswordForcedUpdateStatus',
      passwordInitializationNotificationChannels: 'PasswordInitializationNotificationChannels',
      passwordInitializationStatus: 'PasswordInitializationStatus',
      passwordInitializationType: 'PasswordInitializationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordForcedUpdateStatus: 'string',
      passwordInitializationNotificationChannels: { 'type': 'array', 'itemType': 'string' },
      passwordInitializationStatus: 'string',
      passwordInitializationType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.passwordInitializationNotificationChannels)) {
      $dara.Model.validateArray(this.passwordInitializationNotificationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRootOrganizationalUnitResponseBodyOrganizationalUnit extends $dara.Model {
  /**
   * @remarks
   * The time when the organizational unit was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * Test organizational unit
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * name001
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The time when the organizational unit was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsBinded extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsCreated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsDeleted extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsPushed extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsSame extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsUpdated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatistics extends $dara.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsBinded,
      created: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsCreated,
      deleted: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsDeleted,
      pushed: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsPushed,
      same: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsSame,
      updated: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsUpdated,
    };
  }

  validate() {
    if(this.binded && typeof (this.binded as any).validate === 'function') {
      (this.binded as any).validate();
    }
    if(this.created && typeof (this.created as any).validate === 'function') {
      (this.created as any).validate();
    }
    if(this.deleted && typeof (this.deleted as any).validate === 'function') {
      (this.deleted as any).validate();
    }
    if(this.pushed && typeof (this.pushed as any).validate === 'function') {
      (this.pushed as any).validate();
    }
    if(this.same && typeof (this.same as any).validate === 'function') {
      (this.same as any).validate();
    }
    if(this.updated && typeof (this.updated as any).validate === 'function') {
      (this.updated as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsBinded extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsCreated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsDeleted extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsPushed extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsSame extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsUpdated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatistics extends $dara.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsBinded,
      created: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsCreated,
      deleted: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsDeleted,
      pushed: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsPushed,
      same: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsSame,
      updated: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsUpdated,
    };
  }

  validate() {
    if(this.binded && typeof (this.binded as any).validate === 'function') {
      (this.binded as any).validate();
    }
    if(this.created && typeof (this.created as any).validate === 'function') {
      (this.created as any).validate();
    }
    if(this.deleted && typeof (this.deleted as any).validate === 'function') {
      (this.deleted as any).validate();
    }
    if(this.pushed && typeof (this.pushed as any).validate === 'function') {
      (this.pushed as any).validate();
    }
    if(this.same && typeof (this.same as any).validate === 'function') {
      (this.same as any).validate();
    }
    if(this.updated && typeof (this.updated as any).validate === 'function') {
      (this.updated as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsBinded extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsCreated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsDeleted extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsPushed extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsSame extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsUpdated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatistics extends $dara.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsBinded,
      created: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsCreated,
      deleted: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsDeleted,
      pushed: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsPushed,
      same: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsSame,
      updated: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsUpdated,
    };
  }

  validate() {
    if(this.binded && typeof (this.binded as any).validate === 'function') {
      (this.binded as any).validate();
    }
    if(this.created && typeof (this.created as any).validate === 'function') {
      (this.created as any).validate();
    }
    if(this.deleted && typeof (this.deleted as any).validate === 'function') {
      (this.deleted as any).validate();
    }
    if(this.pushed && typeof (this.pushed as any).validate === 'function') {
      (this.pushed as any).validate();
    }
    if(this.same && typeof (this.same as any).validate === 'function') {
      (this.same as any).validate();
    }
    if(this.updated && typeof (this.updated as any).validate === 'function') {
      (this.updated as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsBinded extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsCreated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsDeleted extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsPushed extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsSame extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsUpdated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatistics extends $dara.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsBinded,
      created: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsCreated,
      deleted: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsDeleted,
      pushed: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsPushed,
      same: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsSame,
      updated: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsUpdated,
    };
  }

  validate() {
    if(this.binded && typeof (this.binded as any).validate === 'function') {
      (this.binded as any).validate();
    }
    if(this.created && typeof (this.created as any).validate === 'function') {
      (this.created as any).validate();
    }
    if(this.deleted && typeof (this.deleted as any).validate === 'function') {
      (this.deleted as any).validate();
    }
    if(this.pushed && typeof (this.pushed as any).validate === 'function') {
      (this.pushed as any).validate();
    }
    if(this.same && typeof (this.same as any).validate === 'function') {
      (this.same as any).validate();
    }
    if(this.updated && typeof (this.updated as any).validate === 'function') {
      (this.updated as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResult extends $dara.Model {
  /**
   * @remarks
   * 同步结果错误码
   * 
   * @example
   * ErrorCodeNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * 同步结果错误信息描述
   */
  errorMessage?: string;
  /**
   * @remarks
   * 组成员同步结果统计
   */
  groupMemberStatistics?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatistics;
  /**
   * @remarks
   * 组同步结果统计
   */
  groupStatistics?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatistics;
  /**
   * @remarks
   * 组织同步结果统计
   */
  organizationalUnitStatistics?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatistics;
  /**
   * @remarks
   * 用户同步结果统计
   */
  userStatistics?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatistics;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      groupMemberStatistics: 'GroupMemberStatistics',
      groupStatistics: 'GroupStatistics',
      organizationalUnitStatistics: 'OrganizationalUnitStatistics',
      userStatistics: 'UserStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      groupMemberStatistics: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatistics,
      groupStatistics: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatistics,
      organizationalUnitStatistics: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatistics,
      userStatistics: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatistics,
    };
  }

  validate() {
    if(this.groupMemberStatistics && typeof (this.groupMemberStatistics as any).validate === 'function') {
      (this.groupMemberStatistics as any).validate();
    }
    if(this.groupStatistics && typeof (this.groupStatistics as any).validate === 'function') {
      (this.groupStatistics as any).validate();
    }
    if(this.organizationalUnitStatistics && typeof (this.organizationalUnitStatistics as any).validate === 'function') {
      (this.organizationalUnitStatistics as any).validate();
    }
    if(this.userStatistics && typeof (this.userStatistics as any).validate === 'function') {
      (this.userStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJob extends $dara.Model {
  /**
   * @remarks
   * 同步任务方向
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * 同步结束时间
   * 
   * @example
   * 1649830226000
   */
  endTime?: number;
  /**
   * @remarks
   * 同步任务结果
   */
  result?: GetSynchronizationJobResponseBodySynchronizationJobResult;
  /**
   * @remarks
   * 同步开始时间
   * 
   * @example
   * 1649830226000
   */
  startTime?: number;
  /**
   * @remarks
   * 同步任务状态
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * 同步任务ID
   * 
   * @example
   * sync_0000347vjovtcf41li0fgsd98gn24q9nj9xxxxx
   */
  synchronizationJobId?: string;
  /**
   * @remarks
   * 同步目标ID
   * 
   * @example
   * idp_my664lwkhpicbyzirog3nxxxxx
   */
  targetId?: string;
  /**
   * @remarks
   * 同步目标类型
   * 
   * @example
   * identity_provider
   */
  targetType?: string;
  /**
   * @remarks
   * 同步触发类型
   * 
   * @example
   * auto
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
      synchronizationJobId: 'SynchronizationJobId',
      targetId: 'TargetId',
      targetType: 'TargetType',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'number',
      result: GetSynchronizationJobResponseBodySynchronizationJobResult,
      startTime: 'number',
      status: 'string',
      synchronizationJobId: 'string',
      targetId: 'string',
      targetType: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserCustomFields extends $dara.Model {
  /**
   * @remarks
   * The identifier of the custom field.
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the custom field.
   * 
   * @example
   * 10
   */
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserGroups extends $dara.Model {
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * this is a test.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the organizational unit.
   * 
   * @example
   * group_test_name
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserOrganizationalUnits extends $dara.Model {
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The name of the organizational unit.
   * 
   * @example
   * test_ou_name
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * Indicates whether the organization is the primary organization.
   * 
   * @example
   * true
   */
  primary?: boolean;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
      primary: 'Primary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      primary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The time when the account expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  accountExpireTime?: number;
  /**
   * @remarks
   * The time when the account was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The list of custom fields that describe the account.
   */
  customFields?: GetUserResponseBodyUserCustomFields[];
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * Test account
   */
  description?: string;
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * display_name001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user who owns the account.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address has been verified. A value of true indicates that the email address has been verified by the user or has been set to the verified status by the administrator. A value of false indicates that the email address has not been verified.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The organizational units to which the account belongs.
   */
  groups?: GetUserResponseBodyUserGroups[];
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the account lock expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  lockExpireTime?: number;
  /**
   * @remarks
   * The organizational units to which the account belongs.
   */
  organizationalUnits?: GetUserResponseBodyUserOrganizationalUnits[];
  /**
   * @remarks
   * The time when the password of the account expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * *   If the value -1 is returned, the password does not expire.
   * *   If no value is returned, the password does not expire.
   * *   If a UNIX timestamp is returned, the password expires at the indicated point of time.
   * 
   * @example
   * 1652085686179
   */
  passwordExpireTime?: number;
  /**
   * @remarks
   * Indicates whether a password is set.
   * 
   * @example
   * false
   */
  passwordSet?: boolean;
  /**
   * @remarks
   * The mobile number of the user who owns the account.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Indicates whether the mobile number has been verified. A value of true indicates that the mobile number has been verified by the user or has been set to the verified status by the administrator. A value of false indicates that the mobile number has not been verified.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The country code of the mobile number. For example, the country code of China is 86 without 00 or +.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * Preferred language
   * 
   * @example
   * en-US
   */
  preferredLanguage?: string;
  /**
   * @remarks
   * The ID of the primary organizational unit to which the account belongs.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  primaryOrganizationalUnitId?: string;
  /**
   * @remarks
   * The time when the account was registered. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  registerTime?: number;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * *   enabled: The account is enabled.
   * *   disabled: The account is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the account was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  /**
   * @remarks
   * The external ID of the account. The external ID can be used by external data to map the data of the account in IDaaS EIAM. By default, the external ID is the account ID.
   * 
   * For accounts with the same source type and source ID, each account has a unique external ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The source ID of the account.
   * 
   * If the account was created in IDaaS, its source ID is the ID of the IDaaS instance. If the account was imported, its source ID is the enterprise ID in the source. For example, if the account was imported from DingTalk, its source ID is the corpId value of the enterprise in DingTalk.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  userSourceId?: string;
  /**
   * @remarks
   * The source type of the account. Valid values:
   * 
   * *   build_in: The account was created in IDaaS.
   * *   ding_talk: The account was imported from DingTalk.
   * *   ad: The account was imported from Microsoft Active Directory (AD).
   * *   ldap: The account was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * @example
   * build_in
   */
  userSourceType?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * name001
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountExpireTime: 'AccountExpireTime',
      createTime: 'CreateTime',
      customFields: 'CustomFields',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      emailVerified: 'EmailVerified',
      groups: 'Groups',
      instanceId: 'InstanceId',
      lockExpireTime: 'LockExpireTime',
      organizationalUnits: 'OrganizationalUnits',
      passwordExpireTime: 'PasswordExpireTime',
      passwordSet: 'PasswordSet',
      phoneNumber: 'PhoneNumber',
      phoneNumberVerified: 'PhoneNumberVerified',
      phoneRegion: 'PhoneRegion',
      preferredLanguage: 'PreferredLanguage',
      primaryOrganizationalUnitId: 'PrimaryOrganizationalUnitId',
      registerTime: 'RegisterTime',
      status: 'Status',
      updateTime: 'UpdateTime',
      userExternalId: 'UserExternalId',
      userId: 'UserId',
      userSourceId: 'UserSourceId',
      userSourceType: 'UserSourceType',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountExpireTime: 'number',
      createTime: 'number',
      customFields: { 'type': 'array', 'itemType': GetUserResponseBodyUserCustomFields },
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      groups: { 'type': 'array', 'itemType': GetUserResponseBodyUserGroups },
      instanceId: 'string',
      lockExpireTime: 'number',
      organizationalUnits: { 'type': 'array', 'itemType': GetUserResponseBodyUserOrganizationalUnits },
      passwordExpireTime: 'number',
      passwordSet: 'boolean',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      preferredLanguage: 'string',
      primaryOrganizationalUnitId: 'string',
      registerTime: 'number',
      status: 'string',
      updateTime: 'number',
      userExternalId: 'string',
      userId: 'string',
      userSourceId: 'string',
      userSourceType: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.organizationalUnits)) {
      $dara.Model.validateArray(this.organizationalUnits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationClientSecretsResponseBodyApplicationClientSecrets extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to query.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client key secret of the application. The value is not masked.
   * 
   * @example
   * eyJh*****************************************************************************************************OQ
   */
  clientSecret?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_wdziy4vnjt33ehhf7z2o2nxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the client key was last used. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
  secretId?: string;
  /**
   * @remarks
   * The status of the client key. Valid values:
   * 
   * *   Enabled: The client key is enabled.
   * *   Disabled: The client key is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      secretId: 'SecretId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientId: 'string',
      clientSecret: 'string',
      instanceId: 'string',
      lastUsedTime: 'number',
      secretId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * SAML Application
   */
  applicationName?: string;
  /**
   * @remarks
   * The origin of the application. Valid values:
   * 
   * *   urn:alibaba:idaas:app:source:template: The application is created based on a template.
   * *   urn:alibaba:idaas: The application is created based on the standard protocol.
   * 
   * @example
   * urn:alibaba:idaas:app:source:standard
   */
  applicationSourceType?: string;
  /**
   * @remarks
   * 应用模板ID
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The time when the application was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * A single application. The code is pkces.
   */
  description?: string;
  /**
   * @remarks
   * The features that are supported by the application. The value is a JSON array. Valid values:
   * 
   * *   sso: The application supports SSO.
   * *   provision: The application supports account synchronization.
   * *   api_invoke: The application supports custom APIs.
   * 
   * @example
   * ["sso", "provision"]
   */
  features?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The URL of the application icon.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01lvYwpv1aGowQXDML9_!!6000000003303-0-tps-580-580.jpg
   */
  logoUrl?: string;
  /**
   * @remarks
   * The service code of the cloud service that manages the application template.
   * 
   * @example
   * rpa
   */
  managedServiceCode?: string;
  /**
   * @remarks
   * Indicates whether the application template is managed by a cloud service.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The type of the single sign-on (SSO) protocol. Valid values:
   * 
   * *   saml2: the Security Assertion Markup Language (SAML) 2.0 protocol.
   * *   oidc: the OpenID Connect (OIDC) protocol.
   * 
   * @example
   * saml2
   */
  ssoType?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   Enabled: The application is enabled.
   * *   Disabled: The application is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the application was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      applicationSourceType: 'ApplicationSourceType',
      applicationTemplateId: 'ApplicationTemplateId',
      clientId: 'ClientId',
      createTime: 'CreateTime',
      description: 'Description',
      features: 'Features',
      instanceId: 'InstanceId',
      logoUrl: 'LogoUrl',
      managedServiceCode: 'ManagedServiceCode',
      serviceManaged: 'ServiceManaged',
      ssoType: 'SsoType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      applicationSourceType: 'string',
      applicationTemplateId: 'string',
      clientId: 'string',
      createTime: 'number',
      description: 'string',
      features: 'string',
      instanceId: 'string',
      logoUrl: 'string',
      managedServiceCode: 'string',
      serviceManaged: 'boolean',
      ssoType: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForOrganizationalUnitResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that the EIAM organization can access.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForUserResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that the EIAM account can access.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * Indicates whether the EIAM account has direct permissions on the application. Valid values:
   * 
   * *   true: The EIAM account has direct permissions on the application.
   * *   false: The EIAM account does not have direct permissions on the application.
   * 
   * @example
   * true
   */
  hasDirectAuthorization?: boolean;
  /**
   * @remarks
   * Indicates whether the EIAM account has inherited permissions on the application. Valid values:
   * 
   * *   true: A parent organization or an organization to which the EIAM account belongs has direct permissions on the application.
   * *   false: A parent organization or an organization to which the EIAM account belongs does not have direct permissions on the application.
   * 
   * @example
   * false
   */
  hasInheritAuthorization?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      hasDirectAuthorization: 'HasDirectAuthorization',
      hasInheritAuthorization: 'HasInheritAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      hasDirectAuthorization: 'boolean',
      hasInheritAuthorization: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainProxyTokensResponseBodyDomainProxyTokens extends $dara.Model {
  /**
   * @remarks
   * 域名代理Token创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 域名ID。
   * 
   * @example
   * dm_examplexxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名代理Token。
   * 
   * @example
   * PTxxxxxxxx
   */
  domainProxyToken?: string;
  /**
   * @remarks
   * 域名代理Token ID。
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 域名代理Token最近使用时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * token状态，枚举类型：(enabled）启用,（disabled）禁用。
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 域名代理Token最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainId: 'DomainId',
      domainProxyToken: 'DomainProxyToken',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      domainId: 'string',
      domainProxyToken: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
      lastUsedTime: 'number',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomainsFiling extends $dara.Model {
  /**
   * @remarks
   * 域名关联的备案号, 长度最大限制64。
   */
  icpNumber?: string;
  static names(): { [key: string]: string } {
    return {
      icpNumber: 'IcpNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomains extends $dara.Model {
  /**
   * @remarks
   * 域名创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 是否默认域名。true表示实例默认域名，false表示非默认域名
   * 
   * @example
   * false
   */
  defaultDomain?: boolean;
  /**
   * @remarks
   * 域名。
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * 域名ID。
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名类型。枚举取值:system_init(系统初始化)、user_custom(用户自定义)。
   * 
   * @example
   * system_init
   */
  domainType?: string;
  /**
   * @remarks
   * 域名备案信息。
   */
  filing?: ListDomainsResponseBodyDomainsFiling;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 域名锁定状态。枚举取值:unlock(正常)、lockByLicense(因License限制不可用)。
   * 
   * @example
   * unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * 域名最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultDomain: 'DefaultDomain',
      domain: 'Domain',
      domainId: 'DomainId',
      domainType: 'DomainType',
      filing: 'Filing',
      instanceId: 'InstanceId',
      lockMode: 'LockMode',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      defaultDomain: 'boolean',
      domain: 'string',
      domainId: 'string',
      domainType: 'string',
      filing: ListDomainsResponseBodyDomainsFiling,
      instanceId: 'string',
      lockMode: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.filing && typeof (this.filing as any).validate === 'function') {
      (this.filing as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * 实例描述信息
   */
  description?: string;
  /**
   * @remarks
   * 实例developer私网域名地址
   * 
   * @example
   * eiam-developerapi-cn.vpc-proxy.aliyuncs.com
   */
  developerAPIPrivateDomain?: string;
  /**
   * @remarks
   * 实例developer公网域名地址
   * 
   * @example
   * eiam-developerapi.cn-hangzhou.aliyuncs.com
   */
  developerAPIPublicDomain?: string;
  /**
   * @remarks
   * 实例id
   * 
   * @example
   * idaas_eypq6ljgyeuwmlw672sulxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 实例状态，Pending(初始状态)、Creating(创建中)、Running(运行中)、Disabled(禁用)、CreateFailed(创建失败)
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * 实例版本，EIAM2.0/ EIAM1.0
   * 
   * @example
   * EIAM 2.0
   */
  instanceVersion?: string;
  /**
   * @remarks
   * 实例openApi私网域名地址
   * 
   * @example
   * eiam-cn.vpc-proxy.aliyuncs.com
   */
  openAPIPrivateDomain?: string;
  /**
   * @remarks
   * 实例openApi公网域名地址
   * 
   * @example
   * eiam.cn-hangzhou.aliyuncs.com
   */
  openAPIPublicDomain?: string;
  /**
   * @remarks
   * 实例域名地址
   * 
   * @example
   * xxxx.aliyunidaas.com
   */
  SSODomain?: string;
  /**
   * @remarks
   * 实例的创建时间
   * 
   * @example
   * 1677810869300
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      developerAPIPrivateDomain: 'DeveloperAPIPrivateDomain',
      developerAPIPublicDomain: 'DeveloperAPIPublicDomain',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      instanceVersion: 'InstanceVersion',
      openAPIPrivateDomain: 'OpenAPIPrivateDomain',
      openAPIPublicDomain: 'OpenAPIPublicDomain',
      SSODomain: 'SSODomain',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      developerAPIPrivateDomain: 'string',
      developerAPIPublicDomain: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      instanceVersion: 'string',
      openAPIPrivateDomain: 'string',
      openAPIPublicDomain: 'string',
      SSODomain: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * 地域名称
   * 
   * @example
   * 华东1（杭州）
   */
  localName?: string;
  /**
   * @remarks
   * 地域ID
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The time at which the group was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * test group
   */
  description?: string;
  /**
   * @remarks
   * The external ID of the group, which can be used to associate the group with an external system. By default, the external ID is the group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupExternalId?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * group_name
   */
  groupName?: string;
  /**
   * @remarks
   * The source ID of the group. If the group was imported from other services, this value indicates the external source ID. By default, the source ID is the instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  groupSourceId?: string;
  /**
   * @remarks
   * The source type of the group. Only build_in may be returned, which indicates that the group was created in IDaaS.
   * 
   * @example
   * build_in
   */
  groupSourceType?: string;
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
   * The time at which the group was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      groupExternalId: 'GroupExternalId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupSourceId: 'GroupSourceId',
      groupSourceType: 'GroupSourceType',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      groupExternalId: 'string',
      groupId: 'string',
      groupName: 'string',
      groupSourceId: 'string',
      groupSourceType: 'string',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForApplicationResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_miu8e4t4d7i4u7uwezgr54xxxx
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * Account membership source ID
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  groupMemberRelationSourceId?: string;
  /**
   * @remarks
   * Account membership source type
   * 
   * @example
   * build_in
   */
  groupMemberRelationSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupMemberRelationSourceId: 'GroupMemberRelationSourceId',
      groupMemberRelationSourceType: 'GroupMemberRelationSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupMemberRelationSourceId: 'string',
      groupMemberRelationSourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityProvidersResponseBodyIdentityProviders extends $dara.Model {
  /**
   * @remarks
   * 高阶配置能力
   * 
   * @example
   * disabled
   */
  advancedStatus?: string;
  /**
   * @remarks
   * IDaaS EIAM 对应的认证来源产品，okta or google or azure ad
   * 
   * @example
   * urn:alibaba:idaas:idp:bytedance:lark
   */
  authnSourceSupplier?: string;
  /**
   * @remarks
   * IDaaS EIAM 认证方式类型 oidc or saml
   * 
   * @example
   * urn:alibaba:idaas:authntype:oidc
   */
  authnSourceType?: string;
  /**
   * @remarks
   * IDaaS EIAM 对应IdP是否支持认证
   * 
   * @example
   * disabled
   */
  authnStatus?: string;
  /**
   * @example
   * 1712561597000
   */
  createTime?: number;
  /**
   * @remarks
   * IDaaS EIAM 身份提供方描述
   */
  description?: string;
  /**
   * @remarks
   * IDaaS EIAM 身份提供方外部ID
   * 
   * @example
   * test_123
   */
  identityProviderExternalId?: string;
  /**
   * @remarks
   * IDaaS EIAM 身份提供方ID
   * 
   * @example
   * idp_m5b5wd5s2hpq4t6iaehhXXX
   */
  identityProviderId?: string;
  /**
   * @remarks
   * IDaaS EIAM 身份提供方名称
   */
  identityProviderName?: string;
  /**
   * @remarks
   * 身份提供方同步类型
   * 
   * @example
   * urn:alibaba:idaas:idp:bytedance:lark:pull
   */
  identityProviderType?: string;
  /**
   * @remarks
   * 增量回调状态，是否处理来自IdP的增量回调数据
   * 
   * @example
   * enabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_pbf4dth34l2qb7mydpntXXX
   */
  instanceId?: string;
  /**
   * @example
   * success
   */
  lastStatusCheckJobResult?: string;
  /**
   * @remarks
   * 锁定原因
   * 
   * @example
   * financial
   */
  lockReason?: string;
  logoUrl?: string;
  /**
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * IDaaS EIAM 是否支持UD同步
   * 
   * @example
   * disabled
   */
  udPullStatus?: string;
  /**
   * @remarks
   * 当支持ud_pullIDaaS侧UD中的范围
   * 
   * @example
   * ou_2buqmxsa3ltyqkjgpwfijurXXX
   */
  udPullTargetScope?: string;
  /**
   * @remarks
   * 同步出能力
   * 
   * @example
   * disabled
   */
  udPushStatus?: string;
  /**
   * @example
   * 1712561597000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      advancedStatus: 'AdvancedStatus',
      authnSourceSupplier: 'AuthnSourceSupplier',
      authnSourceType: 'AuthnSourceType',
      authnStatus: 'AuthnStatus',
      createTime: 'CreateTime',
      description: 'Description',
      identityProviderExternalId: 'IdentityProviderExternalId',
      identityProviderId: 'IdentityProviderId',
      identityProviderName: 'IdentityProviderName',
      identityProviderType: 'IdentityProviderType',
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      instanceId: 'InstanceId',
      lastStatusCheckJobResult: 'LastStatusCheckJobResult',
      lockReason: 'LockReason',
      logoUrl: 'LogoUrl',
      periodicSyncStatus: 'PeriodicSyncStatus',
      udPullStatus: 'UdPullStatus',
      udPullTargetScope: 'UdPullTargetScope',
      udPushStatus: 'UdPushStatus',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedStatus: 'string',
      authnSourceSupplier: 'string',
      authnSourceType: 'string',
      authnStatus: 'string',
      createTime: 'number',
      description: 'string',
      identityProviderExternalId: 'string',
      identityProviderId: 'string',
      identityProviderName: 'string',
      identityProviderType: 'string',
      incrementalCallbackStatus: 'string',
      instanceId: 'string',
      lastStatusCheckJobResult: 'string',
      lockReason: 'string',
      logoUrl: 'string',
      periodicSyncStatus: 'string',
      udPullStatus: 'string',
      udPullTargetScope: 'string',
      udPushStatus: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesDefaultEndpoint extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * example-xxx.aliyunidaas.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * *   resolved
   * *   unresolved
   * 
   * @example
   * resolved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1550115455000
   */
  createTime?: number;
  /**
   * @remarks
   * The default endpoint of the instance.
   */
  defaultEndpoint?: ListInstancesResponseBodyInstancesDefaultEndpoint;
  /**
   * @remarks
   * The description of the instance.
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_eypq6ljgyeuwmlw672sulxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   creating
   * *   running
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultEndpoint: 'DefaultEndpoint',
      description: 'Description',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      defaultEndpoint: ListInstancesResponseBodyInstancesDefaultEndpoint,
      description: 'string',
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.defaultEndpoint && typeof (this.defaultEndpoint as any).validate === 'function') {
      (this.defaultEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * 地域名称。
   * 
   * @example
   * 华东1（杭州）
   */
  localName?: string;
  /**
   * @remarks
   * 地域ID。
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableZonesResponseBodyZones extends $dara.Model {
  /**
   * @remarks
   * 可用区名称。
   * 
   * @example
   * 华东1（杭州）可用区J
   */
  localName?: string;
  /**
   * @remarks
   * 可用区ID。
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointsResponseBodyNetworkAccessEndpoints extends $dara.Model {
  /**
   * @remarks
   * 专属网络端点创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 专属网络端点ID。
   * 
   * @example
   * nae_examplexxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * 专属网络端点名称。
   * 
   * @example
   * xx业务VPC访问端点
   */
  networkAccessEndpointName?: string;
  /**
   * @remarks
   * 专属网络端点连接的类型。
   * 
   * @example
   * private
   */
  networkAccessEndpointType?: string;
  /**
   * @remarks
   * 专属网络端点使用的安全组ID。
   * 
   * @example
   * sg-examplexxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * 专属网络端点状态。
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * 专属网络端点最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  /**
   * @remarks
   * 专属网络端点连接的指定vSwitch列表。
   * 
   * @example
   * vsw-examplexxx
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * 专属网络端点连接的VpcID。
   * 
   * @example
   * vpc-examplexxx
   */
  vpcId?: string;
  /**
   * @remarks
   * 专属网络端点连接的Vpc所属地域。
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      networkAccessEndpointName: 'NetworkAccessEndpointName',
      networkAccessEndpointType: 'NetworkAccessEndpointType',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      updateTime: 'UpdateTime',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      networkAccessEndpointName: 'string',
      networkAccessEndpointType: 'string',
      securityGroupId: 'string',
      status: 'string',
      updateTime: 'number',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessPathsResponseBodyNetworkAccessPaths extends $dara.Model {
  /**
   * @remarks
   * 专属网络端点访问路径创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 专属网络端点ID。
   * 
   * @example
   * nae_examplexxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * 专属网络端点访问路径ID。
   * 
   * @example
   * nap_examplexxx
   */
  networkAccessPathId?: string;
  /**
   * @remarks
   * 专属网络端点访问路径使用的ENI ID。
   * 
   * @example
   * eni-examplexxx
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * 专属网络端点访问路径使用的ENI私网地址。
   * 
   * @example
   * cn-hangzhou
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * 专属网络端点访问路径状态。
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * 专属网络端点访问路径最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  /**
   * @remarks
   * 专属网络端点访问路径的ENI归属的交换机ID。
   * 
   * @example
   * vsw-examplexxx
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      networkAccessPathId: 'NetworkAccessPathId',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      status: 'Status',
      updateTime: 'UpdateTime',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      networkAccessPathId: 'string',
      networkInterfaceId: 'string',
      privateIpAddress: 'string',
      status: 'string',
      updateTime: 'number',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitParentsResponseBodyParents extends $dara.Model {
  /**
   * @remarks
   * 组织ID
   * 
   * @example
   * ou_4lag76zc2km5ssg5vsmm2lznvu
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * 父组织ID
   * 
   * @example
   * ou_x3beoyepv2ls5iwuge3xhjkwbm
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'OrganizationalUnitId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsResponseBodyOrganizationalUnits extends $dara.Model {
  /**
   * @remarks
   * The time when the organizational unit was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * Test organizational unit
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the node is a leaf node.
   * 
   * @example
   * false
   */
  leaf?: boolean;
  /**
   * @remarks
   * The external ID of the organizational unit. The external ID can be used by external data to map the data of the organizational unit in IDaaS EIAM. By default, the external ID is the organizational unit ID.
   * 
   * For organizational units with the same source type and source ID, each organizational unit has a unique external ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitExternalId?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * 组织名称。
   * 
   * @example
   * test_organizationalUnit_name
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The source ID of the organizational unit.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  organizationalUnitSourceId?: string;
  /**
   * @remarks
   * The source type of the organizational unit. Valid values:
   * 
   * *   build_in: The organizational unit was created in IDaaS.
   * *   ding_talk: The organizational unit was imported from DingTalk.
   * *   ad: The organizational unit was imported from Microsoft Active Directory (AD).
   * *   ldap: The organizational unit was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * @example
   * build_in
   */
  organizationalUnitSourceType?: string;
  /**
   * @remarks
   * The ID of the parent organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  /**
   * @remarks
   * The time when the organizational unit was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      leaf: 'Leaf',
      organizationalUnitExternalId: 'OrganizationalUnitExternalId',
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
      organizationalUnitSourceId: 'OrganizationalUnitSourceId',
      organizationalUnitSourceType: 'OrganizationalUnitSourceType',
      parentId: 'ParentId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      leaf: 'boolean',
      organizationalUnitExternalId: 'string',
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      organizationalUnitSourceId: 'string',
      organizationalUnitSourceType: 'string',
      parentId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnits extends $dara.Model {
  /**
   * @remarks
   * The ID of the organization that is allowed to access the application.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'OrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * eiam.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsRequestFilters extends $dara.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsBinded extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsCreated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsDeleted extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsPushed extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsSame extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsUpdated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatistics extends $dara.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsBinded,
      created: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsCreated,
      deleted: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsDeleted,
      pushed: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsPushed,
      same: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsSame,
      updated: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsUpdated,
    };
  }

  validate() {
    if(this.binded && typeof (this.binded as any).validate === 'function') {
      (this.binded as any).validate();
    }
    if(this.created && typeof (this.created as any).validate === 'function') {
      (this.created as any).validate();
    }
    if(this.deleted && typeof (this.deleted as any).validate === 'function') {
      (this.deleted as any).validate();
    }
    if(this.pushed && typeof (this.pushed as any).validate === 'function') {
      (this.pushed as any).validate();
    }
    if(this.same && typeof (this.same as any).validate === 'function') {
      (this.same as any).validate();
    }
    if(this.updated && typeof (this.updated as any).validate === 'function') {
      (this.updated as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsBinded extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsCreated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsDeleted extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsPushed extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsSame extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsUpdated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatistics extends $dara.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsBinded,
      created: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsCreated,
      deleted: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsDeleted,
      pushed: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsPushed,
      same: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsSame,
      updated: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsUpdated,
    };
  }

  validate() {
    if(this.binded && typeof (this.binded as any).validate === 'function') {
      (this.binded as any).validate();
    }
    if(this.created && typeof (this.created as any).validate === 'function') {
      (this.created as any).validate();
    }
    if(this.deleted && typeof (this.deleted as any).validate === 'function') {
      (this.deleted as any).validate();
    }
    if(this.pushed && typeof (this.pushed as any).validate === 'function') {
      (this.pushed as any).validate();
    }
    if(this.same && typeof (this.same as any).validate === 'function') {
      (this.same as any).validate();
    }
    if(this.updated && typeof (this.updated as any).validate === 'function') {
      (this.updated as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsBinded extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsCreated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsDeleted extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsPushed extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsSame extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsUpdated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatistics extends $dara.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsBinded,
      created: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsCreated,
      deleted: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsDeleted,
      pushed: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsPushed,
      same: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsSame,
      updated: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsUpdated,
    };
  }

  validate() {
    if(this.binded && typeof (this.binded as any).validate === 'function') {
      (this.binded as any).validate();
    }
    if(this.created && typeof (this.created as any).validate === 'function') {
      (this.created as any).validate();
    }
    if(this.deleted && typeof (this.deleted as any).validate === 'function') {
      (this.deleted as any).validate();
    }
    if(this.pushed && typeof (this.pushed as any).validate === 'function') {
      (this.pushed as any).validate();
    }
    if(this.same && typeof (this.same as any).validate === 'function') {
      (this.same as any).validate();
    }
    if(this.updated && typeof (this.updated as any).validate === 'function') {
      (this.updated as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsBinded extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsCreated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsDeleted extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsExported extends $dara.Model {
  failed?: number;
  skipped?: number;
  success?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsPushed extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsSame extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsUpdated extends $dara.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatistics extends $dara.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsDeleted;
  exported?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsExported;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      exported: 'Exported',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsBinded,
      created: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsCreated,
      deleted: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsDeleted,
      exported: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsExported,
      pushed: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsPushed,
      same: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsSame,
      updated: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsUpdated,
    };
  }

  validate() {
    if(this.binded && typeof (this.binded as any).validate === 'function') {
      (this.binded as any).validate();
    }
    if(this.created && typeof (this.created as any).validate === 'function') {
      (this.created as any).validate();
    }
    if(this.deleted && typeof (this.deleted as any).validate === 'function') {
      (this.deleted as any).validate();
    }
    if(this.exported && typeof (this.exported as any).validate === 'function') {
      (this.exported as any).validate();
    }
    if(this.pushed && typeof (this.pushed as any).validate === 'function') {
      (this.pushed as any).validate();
    }
    if(this.same && typeof (this.same as any).validate === 'function') {
      (this.same as any).validate();
    }
    if(this.updated && typeof (this.updated as any).validate === 'function') {
      (this.updated as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResult extends $dara.Model {
  /**
   * @remarks
   * 同步结果错误码
   * 
   * @example
   * ErrorCodeNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * 同步结果错误信息描述
   */
  errorMessage?: string;
  /**
   * @remarks
   * 组成员同步结果统计
   */
  groupMemberStatistics?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatistics;
  /**
   * @remarks
   * 组同步结果统计
   */
  groupStatistics?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatistics;
  /**
   * @remarks
   * 组织同步结果统计
   */
  organizationalUnitStatistics?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatistics;
  /**
   * @remarks
   * 用户同步结果统计
   */
  userStatistics?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatistics;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      groupMemberStatistics: 'GroupMemberStatistics',
      groupStatistics: 'GroupStatistics',
      organizationalUnitStatistics: 'OrganizationalUnitStatistics',
      userStatistics: 'UserStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      groupMemberStatistics: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatistics,
      groupStatistics: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatistics,
      organizationalUnitStatistics: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatistics,
      userStatistics: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatistics,
    };
  }

  validate() {
    if(this.groupMemberStatistics && typeof (this.groupMemberStatistics as any).validate === 'function') {
      (this.groupMemberStatistics as any).validate();
    }
    if(this.groupStatistics && typeof (this.groupStatistics as any).validate === 'function') {
      (this.groupStatistics as any).validate();
    }
    if(this.organizationalUnitStatistics && typeof (this.organizationalUnitStatistics as any).validate === 'function') {
      (this.organizationalUnitStatistics as any).validate();
    }
    if(this.userStatistics && typeof (this.userStatistics as any).validate === 'function') {
      (this.userStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobs extends $dara.Model {
  /**
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * 同步任务方向
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * 同步结束时间
   * 
   * @example
   * 1649830226000
   */
  endTime?: number;
  /**
   * @remarks
   * 同步任务结果
   */
  result?: ListSynchronizationJobsResponseBodySynchronizationJobsResult;
  /**
   * @remarks
   * 同步开始时间
   * 
   * @example
   * 1649830226000
   */
  startTime?: number;
  /**
   * @remarks
   * 同步任务状态
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * 同步任务ID
   * 
   * @example
   * sync_0000347vjovtcf41li0fgsd98gn24q9njxxxxx
   */
  synchronizationJobId?: string;
  /**
   * @remarks
   * 同步目标ID
   * 
   * @example
   * idp_my664lwkhpicbyzirog3xxxxx
   */
  targetId?: string;
  /**
   * @remarks
   * 同步目标类型
   * 
   * @example
   * identity_provider
   */
  targetType?: string;
  /**
   * @remarks
   * 同步触发类型
   * 
   * @example
   * auto
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      direction: 'Direction',
      endTime: 'EndTime',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
      synchronizationJobId: 'SynchronizationJobId',
      targetId: 'TargetId',
      targetType: 'TargetType',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      direction: 'string',
      endTime: 'number',
      result: ListSynchronizationJobsResponseBodySynchronizationJobsResult,
      startTime: 'number',
      status: 'string',
      synchronizationJobId: 'string',
      targetId: 'string',
      targetType: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The time when the account expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  accountExpireTime?: number;
  /**
   * @remarks
   * The time when the account was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * Test account
   */
  description?: string;
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * display_name001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user who owns the account.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address has been verified. A value of true indicates that the email address has been verified by the user or has been set to the verified status by the administrator. A value of false indicates that the email address has not been verified.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the account lock expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  lockExpireTime?: number;
  /**
   * @remarks
   * Time When Password Expires
   * 
   * @example
   * 1652085686179
   */
  passwordExpireTime?: number;
  /**
   * @remarks
   * Indicates whether a password is set.
   * 
   * @example
   * false
   */
  passwordSet?: boolean;
  /**
   * @remarks
   * The mobile number of the user who owns the account.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Indicates whether the mobile number has been verified. A value of true indicates that the mobile number has been verified by the user or has been set to the verified status by the administrator. A value of false indicates that the mobile number has not been verified.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The country code of the mobile number. For example, the country code of China is 86 without 00 or +.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The time when the account was registered. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  registerTime?: number;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * *   enabled: The account is enabled.
   * *   disabled: The account is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the account was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  /**
   * @remarks
   * The external ID of the account. The external ID can be used by external data to map the data of the account in IDaaS EIAM. By default, the external ID is the account ID.
   * 
   * For accounts with the same source type and source ID, each account has a unique external ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The source ID of the account.
   * 
   * If the account was created in IDaaS, its source ID is the ID of the IDaaS instance. If the account was imported, its source ID is the enterprise ID in the source. For example, if the account was imported from DingTalk, its source ID is the corpId value of the enterprise in DingTalk.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  userSourceId?: string;
  /**
   * @remarks
   * The source type of the account. Valid values:
   * 
   * *   build_in: The account was created in IDaaS.
   * *   ding_talk: The account was imported from DingTalk.
   * *   ad: The account was imported from Microsoft Active Directory (AD).
   * *   ldap: The account was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * @example
   * build_in
   */
  userSourceType?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * name001
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountExpireTime: 'AccountExpireTime',
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      emailVerified: 'EmailVerified',
      instanceId: 'InstanceId',
      lockExpireTime: 'LockExpireTime',
      passwordExpireTime: 'PasswordExpireTime',
      passwordSet: 'PasswordSet',
      phoneNumber: 'PhoneNumber',
      phoneNumberVerified: 'PhoneNumberVerified',
      phoneRegion: 'PhoneRegion',
      registerTime: 'RegisterTime',
      status: 'Status',
      updateTime: 'UpdateTime',
      userExternalId: 'UserExternalId',
      userId: 'UserId',
      userSourceId: 'UserSourceId',
      userSourceType: 'UserSourceType',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountExpireTime: 'number',
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      instanceId: 'string',
      lockExpireTime: 'number',
      passwordExpireTime: 'number',
      passwordSet: 'boolean',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      registerTime: 'number',
      status: 'string',
      updateTime: 'number',
      userExternalId: 'string',
      userId: 'string',
      userSourceId: 'string',
      userSourceType: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForApplicationResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * Account membership source id
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  groupMemberRelationSourceId?: string;
  /**
   * @remarks
   * Account membership source type
   * 
   * @example
   * build_in
   */
  groupMemberRelationSourceType?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      groupMemberRelationSourceId: 'GroupMemberRelationSourceId',
      groupMemberRelationSourceType: 'GroupMemberRelationSourceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMemberRelationSourceId: 'string',
      groupMemberRelationSourceType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainApplicationClientSecretResponseBodyApplicationClientSecret extends $dara.Model {
  /**
   * @remarks
   * The ID of the application whose client key you want to query.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client key secret of the application.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the client key was last used. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
  secretId?: string;
  /**
   * @remarks
   * The status of the client key. Valid values:
   * 
   * *   Enabled: The client key is enabled.
   * *   Disabled: The client key is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      secretId: 'SecretId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientId: 'string',
      clientSecret: 'string',
      instanceId: 'string',
      lastUsedTime: 'number',
      secretId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainDomainProxyTokenResponseBodyDomainProxyToken extends $dara.Model {
  /**
   * @remarks
   * 域名代理Token创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 域名ID。
   * 
   * @example
   * dm_examplexxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名代理Token。
   * 
   * @example
   * PTxxxxxxxx
   */
  domainProxyToken?: string;
  /**
   * @remarks
   * 域名代理Token ID。
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 域名代理Token最近使用时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * token状态，枚举类型：(enabled）启用,（disabled）禁用。
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 域名代理Token最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainId: 'DomainId',
      domainProxyToken: 'DomainProxyToken',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      domainId: 'string',
      domainProxyToken: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
      lastUsedTime: 'number',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSynchronizationJobRequestSynchronizationScopeConfig extends $dara.Model {
  groupIds?: string[];
  organizationalUnitIds?: string[];
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      organizationalUnitIds: 'OrganizationalUnitIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningConfigRequestCallbackProvisioningConfig extends $dara.Model {
  /**
   * @remarks
   * The URL that the application uses to receive IDaaS event callbacks.
   * 
   * @example
   * https://example.com/event/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The symmetric key for IDaaS event callbacks. The key is an AES-256 encryption key in the HEX format.
   * 
   * @example
   * ad3b248**************************b3561a73d7
   */
  encryptKey?: string;
  /**
   * @remarks
   * Specifies whether to encrypt IDaaS event callback messages. Valid values:
   * 
   * *   true: encrypt the messages.
   * *   false: transmit the messages in plaintext.
   * 
   * @example
   * true
   */
  encryptRequired?: boolean;
  /**
   * @remarks
   * The list of types of IDaaS event callback messages that are supported by the listener.
   */
  listenEventScopes?: string[];
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      encryptKey: 'EncryptKey',
      encryptRequired: 'EncryptRequired',
      listenEventScopes: 'ListenEventScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      encryptKey: 'string',
      encryptRequired: 'boolean',
      listenEventScopes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.listenEventScopes)) {
      $dara.Model.validateArray(this.listenEventScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfigurationAuthnParam extends $dara.Model {
  /**
   * @remarks
   * The access token. If the GrantType parameter is set to bearer_token, you can set this parameter.
   * 
   * @example
   * k52x2ru63rlkflina5utgkxxxx
   */
  accessToken?: string;
  /**
   * @remarks
   * The authentication mode of the SCIM protocol. Valid values:
   * 
   * *   client_secret_basic: The client secret is passed in the request header.
   * *   client_secret_post: The client secret is passed in the request body.
   * 
   * @example
   * client_secret_basic
   */
  authnMethod?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret of the application.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The token endpoint.
   * 
   * @example
   * https://www.example.com/oauth/token
   */
  tokenEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      authnMethod: 'AuthnMethod',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      tokenEndpoint: 'TokenEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      authnMethod: 'string',
      clientId: 'string',
      clientSecret: 'string',
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

export class SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfiguration extends $dara.Model {
  /**
   * @remarks
   * The authentication mode of the SCIM protocol. Valid value:
   * 
   * *   oauth2: OAuth2.0 mode.
   * 
   * @example
   * oauth2
   */
  authnMode?: string;
  /**
   * @remarks
   * The configuration parameters related to authorization.
   * 
   * *   If the GrantType parameter is set to client_credentials, you can set the configuration parameters ClientId, ClientSecret, and AuthnMethod.
   * *   If the GrantType parameter is set to bearer_token, you can set the configuration parameter AccessToken.
   */
  authnParam?: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfigurationAuthnParam;
  /**
   * @remarks
   * The grant type of the SCIM protocol. Valid values:
   * 
   * *   client_credentials: client mode.
   * *   bearer_token: key mode.
   * 
   * @example
   * bearer_token
   */
  grantType?: string;
  static names(): { [key: string]: string } {
    return {
      authnMode: 'AuthnMode',
      authnParam: 'AuthnParam',
      grantType: 'GrantType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnMode: 'string',
      authnParam: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfigurationAuthnParam,
      grantType: 'string',
    };
  }

  validate() {
    if(this.authnParam && typeof (this.authnParam as any).validate === 'function') {
      (this.authnParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningConfigRequestScimProvisioningConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration parameters related to SCIM-based synchronization.
   */
  authnConfiguration?: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfiguration;
  /**
   * @remarks
   * The full synchronization scope of the SCIM protocol. Valid value:
   * 
   * *   urn:alibaba:idaas:app:scim:User:PUSH: full account data synchronization.
   */
  fullPushScopes?: string[];
  /**
   * @remarks
   * The resource operations of the SCIM protocol. Valid values:
   * 
   * *   urn:alibaba:idaas:app:scim:User:CREATE: account creation.
   * *   urn:alibaba:idaas:app:scim:User:UPDATE: account update.
   * *   urn:alibaba:idaas:app:scim:User:DELETE: account deletion.
   */
  provisioningActions?: string[];
  /**
   * @remarks
   * The base URL that the application uses to receive the SCIM protocol for IDaaS synchronization.
   * 
   * @example
   * https://example.com/scim
   */
  scimBaseUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authnConfiguration: 'AuthnConfiguration',
      fullPushScopes: 'FullPushScopes',
      provisioningActions: 'ProvisioningActions',
      scimBaseUrl: 'ScimBaseUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnConfiguration: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfiguration,
      fullPushScopes: { 'type': 'array', 'itemType': 'string' },
      provisioningActions: { 'type': 'array', 'itemType': 'string' },
      scimBaseUrl: 'string',
    };
  }

  validate() {
    if(this.authnConfiguration && typeof (this.authnConfiguration as any).validate === 'function') {
      (this.authnConfiguration as any).validate();
    }
    if(Array.isArray(this.fullPushScopes)) {
      $dara.Model.validateArray(this.fullPushScopes);
    }
    if(Array.isArray(this.provisioningActions)) {
      $dara.Model.validateArray(this.provisioningActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims extends $dara.Model {
  /**
   * @remarks
   * The claim name.
   * 
   * @example
   * "Role"
   */
  claimName?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of the claim.
   * 
   * @example
   * user.dict.applicationRole
   */
  claimValueExpression?: string;
  static names(): { [key: string]: string } {
    return {
      claimName: 'ClaimName',
      claimValueExpression: 'ClaimValueExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimName: 'string',
      claimValueExpression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigRequestOidcSsoConfig extends $dara.Model {
  /**
   * @remarks
   * The validity period of the issued access token. Unit: seconds. Default value: 1200.
   * 
   * @example
   * 1200
   */
  accessTokenEffectiveTime?: number;
  /**
   * @remarks
   * The validity period of the issued code. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  codeEffectiveTime?: number;
  /**
   * @remarks
   * The custom claims that are returned for the ID token.
   */
  customClaims?: SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims[];
  /**
   * @remarks
   * The scopes of user attributes that can be returned for the UserInfo endpoint or ID token.
   * 
   * @example
   * profile，email
   */
  grantScopes?: string[];
  /**
   * @remarks
   * The list of grant types that are supported for OIDC protocols.
   * 
   * @example
   * authorization_code
   */
  grantTypes?: string[];
  /**
   * @remarks
   * The validity period of the issued ID token. Unit: seconds. Default value: 300.
   * 
   * @example
   * 300
   */
  idTokenEffectiveTime?: number;
  /**
   * @remarks
   * The ID of the identity authentication source in password mode. Specify this parameter only when the value of the GrantTypes parameter includes the password mode.
   * 
   * @example
   * ia_password
   */
  passwordAuthenticationSourceId?: string;
  /**
   * @remarks
   * Specifies whether time-based one-time password (TOTP) authentication is required in password mode. Specify this parameter only when the value of the GrantTypes parameter includes the password mode.
   * 
   * @example
   * true
   */
  passwordTotpMfaRequired?: boolean;
  /**
   * @remarks
   * The algorithms that are used to calculate the code challenge for PKCE.
   * 
   * @example
   * S256
   */
  pkceChallengeMethods?: string[];
  /**
   * @remarks
   * Specifies whether the SSO of the application requires Proof Key for Code Exchange (PKCE) (RFC 7636).
   * 
   * @example
   * true
   */
  pkceRequired?: boolean;
  /**
   * @remarks
   * The list of logout redirect URIs that are supported by the application.
   */
  postLogoutRedirectUris?: string[];
  /**
   * @remarks
   * The list of redirect URIs that are supported by the application.
   */
  redirectUris?: string[];
  /**
   * @remarks
   * The validity period of the issued refresh token. Unit: seconds. Default value: 86400.
   * 
   * @example
   * 86400
   */
  refreshTokenEffective?: number;
  /**
   * @remarks
   * The response types that are supported by the application. Specify this parameter when the value of the GrantTypes parameter includes the implicit mode.
   * 
   * @example
   * token id_token
   */
  responseTypes?: string[];
  /**
   * @remarks
   * The custom expression that is used to generate the subject ID returned for the ID token.
   * 
   * @example
   * user.userid
   */
  subjectIdExpression?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenEffectiveTime: 'AccessTokenEffectiveTime',
      codeEffectiveTime: 'CodeEffectiveTime',
      customClaims: 'CustomClaims',
      grantScopes: 'GrantScopes',
      grantTypes: 'GrantTypes',
      idTokenEffectiveTime: 'IdTokenEffectiveTime',
      passwordAuthenticationSourceId: 'PasswordAuthenticationSourceId',
      passwordTotpMfaRequired: 'PasswordTotpMfaRequired',
      pkceChallengeMethods: 'PkceChallengeMethods',
      pkceRequired: 'PkceRequired',
      postLogoutRedirectUris: 'PostLogoutRedirectUris',
      redirectUris: 'RedirectUris',
      refreshTokenEffective: 'RefreshTokenEffective',
      responseTypes: 'ResponseTypes',
      subjectIdExpression: 'SubjectIdExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenEffectiveTime: 'number',
      codeEffectiveTime: 'number',
      customClaims: { 'type': 'array', 'itemType': SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims },
      grantScopes: { 'type': 'array', 'itemType': 'string' },
      grantTypes: { 'type': 'array', 'itemType': 'string' },
      idTokenEffectiveTime: 'number',
      passwordAuthenticationSourceId: 'string',
      passwordTotpMfaRequired: 'boolean',
      pkceChallengeMethods: { 'type': 'array', 'itemType': 'string' },
      pkceRequired: 'boolean',
      postLogoutRedirectUris: { 'type': 'array', 'itemType': 'string' },
      redirectUris: { 'type': 'array', 'itemType': 'string' },
      refreshTokenEffective: 'number',
      responseTypes: { 'type': 'array', 'itemType': 'string' },
      subjectIdExpression: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customClaims)) {
      $dara.Model.validateArray(this.customClaims);
    }
    if(Array.isArray(this.grantScopes)) {
      $dara.Model.validateArray(this.grantScopes);
    }
    if(Array.isArray(this.grantTypes)) {
      $dara.Model.validateArray(this.grantTypes);
    }
    if(Array.isArray(this.pkceChallengeMethods)) {
      $dara.Model.validateArray(this.pkceChallengeMethods);
    }
    if(Array.isArray(this.postLogoutRedirectUris)) {
      $dara.Model.validateArray(this.postLogoutRedirectUris);
    }
    if(Array.isArray(this.redirectUris)) {
      $dara.Model.validateArray(this.redirectUris);
    }
    if(Array.isArray(this.responseTypes)) {
      $dara.Model.validateArray(this.responseTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigRequestSamlSsoConfigAttributeStatements extends $dara.Model {
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName
   */
  attributeName?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of the attribute.
   * 
   * @example
   * user.username
   */
  attributeValueExpression?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValueExpression: 'AttributeValueExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValueExpression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigRequestSamlSsoConfigOptionalRelayStates extends $dara.Model {
  displayName?: string;
  relayState?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      relayState: 'RelayState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      relayState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigRequestSamlSsoConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to calculate the signature for the assertion. You cannot set ResponseSigned and AssertionSigned to false at the same time.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  assertionSigned?: boolean;
  /**
   * @remarks
   * The additional user attributes in the SAML assertion.
   */
  attributeStatements?: SetApplicationSsoConfigRequestSamlSsoConfigAttributeStatements[];
  /**
   * @remarks
   * The default value of the RelayState attribute. If the SSO request is initiated in EIAM, the RelayState attribute in the SAML response is set to this default value.
   * 
   * @example
   * https://home.console.aliyun.com
   */
  defaultRelayState?: string;
  idPEntityId?: string;
  /**
   * @remarks
   * The Format attribute of the NameID element in the SAML assertion. Valid values:
   * 
   * *   urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified: No format is specified. How to resolve the NameID element depends on the application.
   * *   urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress: The NameID element must be an email address.
   * *   urn:oasis:names:tc:SAML:2.0:nameid-format:persistent: The NameID element must be persistent.
   * *   urn:oasis:names:tc:SAML:2.0:nameid-format:transient: The NameID element must be transient.
   * 
   * @example
   * urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified
   */
  nameIdFormat?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of NameID in the SAML assertion.
   * 
   * @example
   * user.email
   */
  nameIdValueExpression?: string;
  optionalRelayStates?: SetApplicationSsoConfigRequestSamlSsoConfigOptionalRelayStates[];
  /**
   * @remarks
   * Specifies whether to calculate the signature for the response. You cannot set ResponseSigned and AssertionSigned to false at the same time.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  responseSigned?: boolean;
  /**
   * @remarks
   * The algorithm that is used to calculate the signature for the SAML assertion.
   * 
   * Enumeration value:
   * 
   * *   RSA-SHA256
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the Rivest-Shamir-Adleman (RSA)-Secure Hash Algorithm 256 (SHA-256) algorithm
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * RSA-SHA256
   */
  signatureAlgorithm?: string;
  /**
   * @remarks
   * The entity ID of the application in SAML.
   * 
   * @example
   * urn:alibaba:cloudcomputing
   */
  spEntityId?: string;
  /**
   * @remarks
   * The Assertion Consumer Service (ACS) URL of the application in SAML.
   * 
   * @example
   * https://signin.aliyun.com/saml-role/sso
   */
  spSsoAcsUrl?: string;
  static names(): { [key: string]: string } {
    return {
      assertionSigned: 'AssertionSigned',
      attributeStatements: 'AttributeStatements',
      defaultRelayState: 'DefaultRelayState',
      idPEntityId: 'IdPEntityId',
      nameIdFormat: 'NameIdFormat',
      nameIdValueExpression: 'NameIdValueExpression',
      optionalRelayStates: 'OptionalRelayStates',
      responseSigned: 'ResponseSigned',
      signatureAlgorithm: 'SignatureAlgorithm',
      spEntityId: 'SpEntityId',
      spSsoAcsUrl: 'SpSsoAcsUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertionSigned: 'boolean',
      attributeStatements: { 'type': 'array', 'itemType': SetApplicationSsoConfigRequestSamlSsoConfigAttributeStatements },
      defaultRelayState: 'string',
      idPEntityId: 'string',
      nameIdFormat: 'string',
      nameIdValueExpression: 'string',
      optionalRelayStates: { 'type': 'array', 'itemType': SetApplicationSsoConfigRequestSamlSsoConfigOptionalRelayStates },
      responseSigned: 'boolean',
      signatureAlgorithm: 'string',
      spEntityId: 'string',
      spSsoAcsUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeStatements)) {
      $dara.Model.validateArray(this.attributeStatements);
    }
    if(Array.isArray(this.optionalRelayStates)) {
      $dara.Model.validateArray(this.optionalRelayStates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderUdPullConfigurationRequestLdapUdPullConfig extends $dara.Model {
  /**
   * @remarks
   * 组成员标识
   * 
   * @example
   * member
   */
  groupMemberAttributeName?: string;
  /**
   * @remarks
   * 组objectClass
   * 
   * @example
   * group
   */
  groupObjectClass?: string;
  /**
   * @remarks
   * 组自定义Filter
   * 
   * @example
   * (|(cn=test)(group=test@test.com))
   */
  groupObjectClassCustomFilter?: string;
  /**
   * @remarks
   * 组织ObjectClass
   * 
   * @example
   * organizationUnit,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * 用户ObjectClass
   * 
   * @example
   * userPrincipalName, mail
   */
  userObjectClass?: string;
  /**
   * @remarks
   * 用户自定义Filter
   * 
   * @example
   * (|(cn=test)(mail=test@test.com))
   */
  userObjectClassCustomFilter?: string;
  static names(): { [key: string]: string } {
    return {
      groupMemberAttributeName: 'GroupMemberAttributeName',
      groupObjectClass: 'GroupObjectClass',
      groupObjectClassCustomFilter: 'GroupObjectClassCustomFilter',
      organizationUnitObjectClass: 'OrganizationUnitObjectClass',
      userObjectClass: 'UserObjectClass',
      userObjectClassCustomFilter: 'UserObjectClassCustomFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMemberAttributeName: 'string',
      groupObjectClass: 'string',
      groupObjectClassCustomFilter: 'string',
      organizationUnitObjectClass: 'string',
      userObjectClass: 'string',
      userObjectClassCustomFilter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderUdPullConfigurationRequestPullProtectedRule extends $dara.Model {
  /**
   * @remarks
   * 同步保护规则-删除组数量
   * 
   * @example
   * 10
   */
  groupDeletedThreshold?: number;
  /**
   * @remarks
   * 钉钉一方应用同步保护规则-删除组织数量
   * 
   * @example
   * 10
   */
  organizationalUnitDeletedThreshold?: number;
  /**
   * @remarks
   * 钉钉一方应用同步保护规则-删除账户数量
   * 
   * @example
   * 30
   */
  userDeletedThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      groupDeletedThreshold: 'GroupDeletedThreshold',
      organizationalUnitDeletedThreshold: 'OrganizationalUnitDeletedThreshold',
      userDeletedThreshold: 'UserDeletedThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupDeletedThreshold: 'number',
      organizationalUnitDeletedThreshold: 'number',
      userDeletedThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderUdPullConfigurationRequestUdSyncScopeConfig extends $dara.Model {
  /**
   * @remarks
   * 同步来源节点
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * 同步目标节点
   * 
   * @example
   * ou_asdaq1addsxzdq1XXX
   */
  targetScope?: string;
  static names(): { [key: string]: string } {
    return {
      sourceScopes: 'SourceScopes',
      targetScope: 'TargetScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceScopes: { 'type': 'array', 'itemType': 'string' },
      targetScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceScopes)) {
      $dara.Model.validateArray(this.sourceScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordComplexityConfigurationRequestPasswordComplexityRules extends $dara.Model {
  /**
   * @remarks
   * The type of the password check. Valid values:
   * 
   * *   inclusion_upper_case: The password must contain uppercase letters.
   * *   inclusion_lower_case: The password must contain lowercase letters.
   * *   inclusion_special_case: The password must contain one or more of the following special characters: @ % + \\ / \\" ! # $ ^ ? : , ( ) { } [ ] ~ - _ .
   * *   inclusion_number: The password must contain digits.
   * *   exclusion_username: The password cannot contain a username.
   * *   exclusion_email: The password cannot contain an email prefix.
   * *   exclusion_phone_number: The password cannot contain a mobile number.
   * *   exclusion_display_name: The password cannot contain a display name.
   * 
   * @example
   * inclusion_upper_case
   */
  passwordCheckType?: string;
  static names(): { [key: string]: string } {
    return {
      passwordCheckType: 'PasswordCheckType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordCheckType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequestDingtalkAppConfig extends $dara.Model {
  /**
   * @remarks
   * 钉钉一方应用的AppKey
   * 
   * This parameter is required.
   * 
   * @example
   * 49nyeaqumk7f
   */
  appKey?: string;
  /**
   * @remarks
   * 钉钉一方应用的AppSecret
   * 
   * This parameter is required.
   * 
   * @example
   * 86nozWFL2CxgwnhKiXaG8dN4keLPkUNc5xxxx
   */
  appSecret?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appSecret: 'AppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
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

export class UpdateUserRequestCustomFields extends $dara.Model {
  /**
   * @remarks
   * The name of the extended field. You must create an extended field before you specify this parameter. To create an extended field, go to the Extended Fields page of the specified EIAM instance in the IDaaS console.
   * 
   * @example
   * nick_name
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the extended field. The value follows the limits on the properties of the extended field.
   * 
   * @example
   * test_value
   */
  fieldValue?: string;
  /**
   * @remarks
   * The operation type of the extended field. Valid values:
   * 
   * *   add: adds a value to the extended field of the account.
   * *   replace: replaces the existing value of the extended field of the account. If the existing value to be replaced does not exist, this operation changes to the add operation.
   * *   remove: removes a value from the extended field of the account.
   * 
   * @example
   * add
   */
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
      operation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToOrganizationalUnitsRequest extends $dara.Model {
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
  /**
   * @remarks
   * The organization IDs. You can add an account to a maximum of 100 organizations.
   * 
   * This parameter is required.
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToOrganizationalUnitsResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToOrganizationalUnitsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserToOrganizationalUnitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUserToOrganizationalUnitsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersToGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
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
  /**
   * @remarks
   * The account IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * [ou_001]
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersToGroupResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersToGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUsersToGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddUsersToGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The group IDs. You can specify up to 100 group IDs at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * group_miu8e4t4d7i4u7uwezgr54xxxx
   */
  groupIds?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk2676xxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToGroupsResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeApplicationToGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthorizeApplicationToGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToOrganizationalUnitsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application on which you want to grant permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk2676xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the organizations to which you want to grant permissions. You can grant permissions to a maximum of 100 organizations at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToOrganizationalUnitsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToOrganizationalUnitsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeApplicationToOrganizationalUnitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthorizeApplicationToOrganizationalUnitsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application on which you want to grant permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk2676xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the accounts to which you want to grant permissions. You can grant permissions to a maximum of 100 accounts at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeApplicationToUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthorizeApplicationToUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * Ram Account SSO
   */
  applicationName?: string;
  /**
   * @remarks
   * The type of the application source. Valid values:
   * 
   * *   urn:alibaba:idaas:app:source:template: application template
   * *   urn:alibaba:idaas:app:source:standard: standard protocol
   * 
   * This parameter is required.
   * 
   * @example
   * urn:alibaba:idaas:app:source:standard
   */
  applicationSourceType?: string;
  /**
   * @remarks
   * The ID of the application template. This parameter is required if you set the ApplicationSourceType parameter to urn:alibaba:idaas:app:source:template.
   * 
   * @example
   * template_cloud_ram
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * RAM user SSO application
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk2676xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The URL of the application logo.
   * 
   * @example
   * https://oss.cn-hangzhou.aliyuncs.com/logo.png
   */
  logoUrl?: string;
  /**
   * @remarks
   * The SSO protocol. Valid values:
   * 
   * *   saml2: the SAML 2.0 protocol.
   * *   oidc: the OpenID Connect protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * saml2
   */
  ssoType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      applicationSourceType: 'ApplicationSourceType',
      applicationTemplateId: 'ApplicationTemplateId',
      description: 'Description',
      instanceId: 'InstanceId',
      logoUrl: 'LogoUrl',
      ssoType: 'SsoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      applicationSourceType: 'string',
      applicationTemplateId: 'string',
      description: 'string',
      instanceId: 'string',
      logoUrl: 'string',
      ssoType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mnkom
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationClientSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application for which you want to create a client key.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationClientSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the client key.
   */
  applicationClientSecret?: CreateApplicationClientSecretResponseBodyApplicationClientSecret;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationClientSecret: 'ApplicationClientSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationClientSecret: CreateApplicationClientSecretResponseBodyApplicationClientSecret,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationClientSecret && typeof (this.applicationClientSecret as any).validate === 'function') {
      (this.applicationClientSecret as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationClientSecretResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationClientSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApplicationClientSecretResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * 域名。最大长度限制255，格式由数字、字母、横线（-）点（.）组成;
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * 备案信息参数。
   */
  filing?: CreateDomainRequestFiling;
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
      domain: 'Domain',
      filing: 'Filing',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      filing: CreateDomainRequestFiling,
      instanceId: 'string',
    };
  }

  validate() {
    if(this.filing && typeof (this.filing as any).validate === 'function') {
      (this.filing as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $dara.Model {
  /**
   * @example
   * dm_mtohn6mltdz3ibtly2rxvnvxxx
   */
  domainId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDomainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainProxyTokenRequest extends $dara.Model {
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
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
      domainId: 'DomainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainProxyTokenResponseBody extends $dara.Model {
  /**
   * @example
   * pt_mtohn73423stghoivjmi4jwxxx
   */
  domainProxyTokenId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainProxyTokenId: 'DomainProxyTokenId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainProxyTokenId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainProxyTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainProxyTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDomainProxyTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the group. The value can be up to 256 characters in length.
   * 
   * @example
   * this is a test.
   */
  description?: string;
  /**
   * @remarks
   * The external ID of the group, which can be used to associate the group with an external system. By default, the external ID is the group ID. The value can be up to 64 characters in length.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupExternalId?: string;
  /**
   * @remarks
   * The name of the group. The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * name_test
   */
  groupName?: string;
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
      description: 'Description',
      groupExternalId: 'GroupExternalId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupExternalId: 'string',
      groupName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
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
      groupId: 'GroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequest extends $dara.Model {
  /**
   * @remarks
   * 认证配置
   */
  authnConfig?: CreateIdentityProviderRequestAuthnConfig;
  /**
   * @remarks
   * 自动创建账户账户规则配置。
   */
  autoCreateUserConfig?: CreateIdentityProviderRequestAutoCreateUserConfig;
  /**
   * @remarks
   * 自动更新账户规则配置。
   */
  autoUpdateUserConfig?: CreateIdentityProviderRequestAutoUpdateUserConfig;
  /**
   * @remarks
   * 账户绑定规则配置。
   */
  bindingConfig?: CreateIdentityProviderRequestBindingConfig;
  /**
   * @remarks
   * 钉钉配置
   */
  dingtalkAppConfig?: CreateIdentityProviderRequestDingtalkAppConfig;
  /**
   * @remarks
   * 身份提供方名称
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  identityProviderName?: string;
  /**
   * @remarks
   * 身份提供发类型
   * 
   * This parameter is required.
   * 
   * @example
   * urn:alibaba:idaas:idp:alibaba:dingtalk:push
   */
  identityProviderType?: string;
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
  larkConfig?: CreateIdentityProviderRequestLarkConfig;
  /**
   * @remarks
   * AD/LDAP配置
   */
  ldapConfig?: CreateIdentityProviderRequestLdapConfig;
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
  oidcConfig?: CreateIdentityProviderRequestOidcConfig;
  /**
   * @remarks
   * 同步入配置
   */
  udPullConfig?: CreateIdentityProviderRequestUdPullConfig;
  /**
   * @remarks
   * 同步出配置
   */
  udPushConfig?: CreateIdentityProviderRequestUdPushConfig;
  /**
   * @remarks
   * WeCom配置
   */
  weComConfig?: CreateIdentityProviderRequestWeComConfig;
  static names(): { [key: string]: string } {
    return {
      authnConfig: 'AuthnConfig',
      autoCreateUserConfig: 'AutoCreateUserConfig',
      autoUpdateUserConfig: 'AutoUpdateUserConfig',
      bindingConfig: 'BindingConfig',
      dingtalkAppConfig: 'DingtalkAppConfig',
      identityProviderName: 'IdentityProviderName',
      identityProviderType: 'IdentityProviderType',
      instanceId: 'InstanceId',
      larkConfig: 'LarkConfig',
      ldapConfig: 'LdapConfig',
      logoUrl: 'LogoUrl',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      oidcConfig: 'OidcConfig',
      udPullConfig: 'UdPullConfig',
      udPushConfig: 'UdPushConfig',
      weComConfig: 'WeComConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnConfig: CreateIdentityProviderRequestAuthnConfig,
      autoCreateUserConfig: CreateIdentityProviderRequestAutoCreateUserConfig,
      autoUpdateUserConfig: CreateIdentityProviderRequestAutoUpdateUserConfig,
      bindingConfig: CreateIdentityProviderRequestBindingConfig,
      dingtalkAppConfig: CreateIdentityProviderRequestDingtalkAppConfig,
      identityProviderName: 'string',
      identityProviderType: 'string',
      instanceId: 'string',
      larkConfig: CreateIdentityProviderRequestLarkConfig,
      ldapConfig: CreateIdentityProviderRequestLdapConfig,
      logoUrl: 'string',
      networkAccessEndpointId: 'string',
      oidcConfig: CreateIdentityProviderRequestOidcConfig,
      udPullConfig: CreateIdentityProviderRequestUdPullConfig,
      udPushConfig: CreateIdentityProviderRequestUdPushConfig,
      weComConfig: CreateIdentityProviderRequestWeComConfig,
    };
  }

  validate() {
    if(this.authnConfig && typeof (this.authnConfig as any).validate === 'function') {
      (this.authnConfig as any).validate();
    }
    if(this.autoCreateUserConfig && typeof (this.autoCreateUserConfig as any).validate === 'function') {
      (this.autoCreateUserConfig as any).validate();
    }
    if(this.autoUpdateUserConfig && typeof (this.autoUpdateUserConfig as any).validate === 'function') {
      (this.autoUpdateUserConfig as any).validate();
    }
    if(this.bindingConfig && typeof (this.bindingConfig as any).validate === 'function') {
      (this.bindingConfig as any).validate();
    }
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
    if(this.udPullConfig && typeof (this.udPullConfig as any).validate === 'function') {
      (this.udPullConfig as any).validate();
    }
    if(this.udPushConfig && typeof (this.udPushConfig as any).validate === 'function') {
      (this.udPushConfig as any).validate();
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

export class CreateIdentityProviderResponseBody extends $dara.Model {
  /**
   * @example
   * idp_mwpcwnhrimlr2horxXXXX
   */
  identityProviderId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIdentityProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIdentityProviderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the instance. The description can be up to 128 characters in length.
   * 
   * @example
   * instance_for_test
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that is created.
   * 
   * @example
   * idaas_wj5htncdvoc4q5xxxxxxxxx
   */
  instanceId?: string;
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
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAccessEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
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
   * 专属网络端点名称。
   * 
   * This parameter is required.
   * 
   * @example
   * xx业务VPC访问端点
   */
  networkAccessEndpointName?: string;
  /**
   * @remarks
   * 专属网络端点连接的指定vSwitch。
   * 
   * @example
   * vsw-examplexxx
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * 专属网络端点连接的VpcID。
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-examplexxx
   */
  vpcId?: string;
  /**
   * @remarks
   * 专属网络端点连接的VpcID所属地域，该地域取值必须在ListNetworkAccessEndpointAvailableRegions接口中返回。
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      networkAccessEndpointName: 'NetworkAccessEndpointName',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      networkAccessEndpointName: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAccessEndpointResponseBody extends $dara.Model {
  /**
   * @example
   * nae_examplexxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessEndpointId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAccessEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNetworkAccessEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNetworkAccessEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationalUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the organization. The value can be up to 256 characters in length.
   * 
   * @example
   * description
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
  /**
   * @remarks
   * The external ID of the organization, which can be used to associate the organization with an external system. By default, the external ID is the organization ID. The value can be up to 64 characters in length.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitExternalId?: string;
  /**
   * @remarks
   * The name of the organization. The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_ou_name
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      organizationalUnitExternalId: 'OrganizationalUnitExternalId',
      organizationalUnitName: 'OrganizationalUnitName',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      organizationalUnitExternalId: 'string',
      organizationalUnitName: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationalUnitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
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
      organizationalUnitId: 'OrganizationalUnitId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationalUnitResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOrganizationalUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOrganizationalUnitResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The extended fields.
   * 
   * @example
   * description
   */
  customFields?: CreateUserRequestCustomFields[];
  /**
   * @remarks
   * The description of the organizational unit. The description can be up to 256 characters in length.
   * 
   * @example
   * description text
   */
  description?: string;
  /**
   * @remarks
   * The display name of the account. The display name can be up to 64 characters in length.
   * 
   * @example
   * name_001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user who owns the account. The email address prefix can contain letters, digits, underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Specifies whether the email address is a trusted email address. This parameter is required if the Email parameter is specified. If you have no special business requirements, set this parameter to true.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of organizational units to which the account belongs. An account can belong to multiple organizational units.
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The password of the account. For more information, view the password policy of the instance in the IDaaS console.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The configurations for password initialization.
   */
  passwordInitializationConfig?: CreateUserRequestPasswordInitializationConfig;
  /**
   * @remarks
   * The mobile phone number, which contains 6 to 15 digits.
   * 
   * @example
   * 12345678901
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Specifies whether the mobile phone number is a trusted mobile phone number. This parameter is required if the PhoneNumber parameter is specified. If you have no special business requirements, set this parameter to true.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The country code of the mobile phone number. The country code contains only digits and does not contain a plus sign (+).
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The ID of the primary organizational unit to which the account belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  primaryOrganizationalUnitId?: string;
  /**
   * @remarks
   * The external ID of the account. The external ID can be used to associate the account with an external system. The external ID can be up to 64 characters in length. If you do not specify an external ID for the account, the ID of the account is used as the external ID by default.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The name of the account. The name can be up to 64 characters in length and can contain letters, digits, underscores (_), periods (.), at signs (@), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * user_001
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'CustomFields',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      emailVerified: 'EmailVerified',
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
      password: 'Password',
      passwordInitializationConfig: 'PasswordInitializationConfig',
      phoneNumber: 'PhoneNumber',
      phoneNumberVerified: 'PhoneNumberVerified',
      phoneRegion: 'PhoneRegion',
      primaryOrganizationalUnitId: 'PrimaryOrganizationalUnitId',
      userExternalId: 'UserExternalId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'array', 'itemType': CreateUserRequestCustomFields },
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      password: 'string',
      passwordInitializationConfig: CreateUserRequestPasswordInitializationConfig,
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      primaryOrganizationalUnitId: 'string',
      userExternalId: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    if(this.passwordInitializationConfig && typeof (this.passwordInitializationConfig as any).validate === 'function') {
      (this.passwordInitializationConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationClientSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application for which you want to delete a client key.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the client key that you want to delete for the application.
   * 
   * This parameter is required.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      secretId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationClientSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationClientSecretResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationClientSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApplicationClientSecretResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $dara.Model {
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxx
   */
  domainId?: string;
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
      domainId: 'DomainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDomainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainProxyTokenRequest extends $dara.Model {
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名代理Token ID。
   * 
   * This parameter is required.
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
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
      domainId: 'DomainId',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainProxyTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainProxyTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainProxyTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDomainProxyTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
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
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIdentityProviderRequest extends $dara.Model {
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
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIdentityProviderResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIdentityProviderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIdentityProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIdentityProviderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkAccessEndpointRequest extends $dara.Model {
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
   * 专属网络端点ID。
   * 
   * This parameter is required.
   * 
   * @example
   * nae_examplexxxx
   */
  networkAccessEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkAccessEndpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkAccessEndpointResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkAccessEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNetworkAccessEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNetworkAccessEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrganizationalUnitRequest extends $dara.Model {
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
  /**
   * @remarks
   * The organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrganizationalUnitResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrganizationalUnitResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteOrganizationalUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteOrganizationalUnitResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrganizationalUnitChildrenRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Organizational Unit ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrganizationalUnitChildrenResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrganizationalUnitChildrenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteOrganizationalUnitChildrenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteOrganizationalUnitChildrenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $dara.Model {
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
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to disable.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationApiInvokeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationApiInvokeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationApiInvokeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationApiInvokeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableApplicationApiInvokeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationClientSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application for which you want to disable a client key.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      secretId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationClientSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationClientSecretResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationClientSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableApplicationClientSecretResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationProvisioningRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationProvisioningResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationProvisioningResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationProvisioningResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableApplicationProvisioningResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationSsoRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的应用主键id
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationSsoResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationSsoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationSsoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableApplicationSsoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDomainProxyTokenRequest extends $dara.Model {
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名代理Token ID。
   * 
   * This parameter is required.
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
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
      domainId: 'DomainId',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDomainProxyTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDomainProxyTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableDomainProxyTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableDomainProxyTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableIdentityProviderUdPullRequest extends $dara.Model {
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
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableIdentityProviderUdPullResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableIdentityProviderUdPullResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableIdentityProviderUdPullResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableIdentityProviderUdPullResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInitDomainAutoRedirectRequest extends $dara.Model {
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
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInitDomainAutoRedirectResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInitDomainAutoRedirectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableInitDomainAutoRedirectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableInitDomainAutoRedirectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserRequest extends $dara.Model {
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
  /**
   * @remarks
   * The ID of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to enable.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationApiInvokeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationApiInvokeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationApiInvokeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationApiInvokeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableApplicationApiInvokeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationClientSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      secretId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationClientSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationClientSecretResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationClientSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableApplicationClientSecretResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationProvisioningRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationProvisioningResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationProvisioningResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationProvisioningResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableApplicationProvisioningResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationSsoRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的应用主键id
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationSsoResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationSsoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationSsoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableApplicationSsoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDomainProxyTokenRequest extends $dara.Model {
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名代理Token ID。
   * 
   * This parameter is required.
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
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
      domainId: 'DomainId',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDomainProxyTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDomainProxyTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableDomainProxyTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableDomainProxyTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableIdentityProviderUdPullRequest extends $dara.Model {
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
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableIdentityProviderUdPullResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableIdentityProviderUdPullResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableIdentityProviderUdPullResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableIdentityProviderUdPullResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInitDomainAutoRedirectRequest extends $dara.Model {
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
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInitDomainAutoRedirectResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInitDomainAutoRedirectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableInitDomainAutoRedirectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableInitDomainAutoRedirectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableUserRequest extends $dara.Model {
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
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableUserResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the application.
   */
  application?: GetApplicationResponseBodyApplication;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  validate() {
    if(this.application && typeof (this.application as any).validate === 'function') {
      (this.application as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGrantScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGrantScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permissions of the Developer API feature.
   */
  applicationGrantScope?: GetApplicationGrantScopeResponseBodyApplicationGrantScope;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGrantScope: 'ApplicationGrantScope',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGrantScope: GetApplicationGrantScopeResponseBodyApplicationGrantScope,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationGrantScope && typeof (this.applicationGrantScope as any).validate === 'function') {
      (this.applicationGrantScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGrantScopeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationGrantScopeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApplicationGrantScopeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
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
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the account synchronization feature for the application.
   */
  applicationProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfig;
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
      applicationProvisioningConfig: 'ApplicationProvisioningConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationProvisioningConfig: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationProvisioningConfig && typeof (this.applicationProvisioningConfig as any).validate === 'function') {
      (this.applicationProvisioningConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationProvisioningConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApplicationProvisioningConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The scope of account synchronization.
   */
  applicationProvisioningScope?: GetApplicationProvisioningScopeResponseBodyApplicationProvisioningScope;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationProvisioningScope: 'ApplicationProvisioningScope',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationProvisioningScope: GetApplicationProvisioningScopeResponseBodyApplicationProvisioningScope,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationProvisioningScope && typeof (this.applicationProvisioningScope as any).validate === 'function') {
      (this.applicationProvisioningScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningScopeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationProvisioningScopeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApplicationProvisioningScopeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The single sign-on (SSO) configuration information of the application.
   */
  applicationSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationSsoConfig: 'ApplicationSsoConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationSsoConfig: GetApplicationSsoConfigResponseBodyApplicationSsoConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationSsoConfig && typeof (this.applicationSsoConfig as any).validate === 'function') {
      (this.applicationSsoConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationSsoConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApplicationSsoConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainRequest extends $dara.Model {
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
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
      domainId: 'DomainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBody extends $dara.Model {
  domain?: GetDomainResponseBodyDomain;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: GetDomainResponseBodyDomain,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domain && typeof (this.domain as any).validate === 'function') {
      (this.domain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDomainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainDnsChallengeRequest extends $dara.Model {
  /**
   * @remarks
   * 域名。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxx
   */
  domain?: string;
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
      domain: 'Domain',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainDnsChallengeResponseBody extends $dara.Model {
  domainDnsChallenge?: GetDomainDnsChallengeResponseBodyDomainDnsChallenge;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainDnsChallenge: 'DomainDnsChallenge',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDnsChallenge: GetDomainDnsChallengeResponseBodyDomainDnsChallenge,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainDnsChallenge && typeof (this.domainDnsChallenge as any).validate === 'function') {
      (this.domainDnsChallenge as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainDnsChallengeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDomainDnsChallengeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDomainDnsChallengeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetForgetPasswordConfigurationRequest extends $dara.Model {
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
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetForgetPasswordConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The forgot password configurations.
   */
  openForgetPasswordConfiguration?: GetForgetPasswordConfigurationResponseBodyOpenForgetPasswordConfiguration;
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
      openForgetPasswordConfiguration: 'OpenForgetPasswordConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openForgetPasswordConfiguration: GetForgetPasswordConfigurationResponseBodyOpenForgetPasswordConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.openForgetPasswordConfiguration && typeof (this.openForgetPasswordConfiguration as any).validate === 'function') {
      (this.openForgetPasswordConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetForgetPasswordConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetForgetPasswordConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetForgetPasswordConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
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
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the account group.
   */
  group?: GetGroupResponseBodyGroup;
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
      group: 'Group',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: GetGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderRequest extends $dara.Model {
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
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBody extends $dara.Model {
  identityProviderDetail?: GetIdentityProviderResponseBodyIdentityProviderDetail;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderDetail: 'IdentityProviderDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderDetail: GetIdentityProviderResponseBodyIdentityProviderDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.identityProviderDetail && typeof (this.identityProviderDetail as any).validate === 'function') {
      (this.identityProviderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIdentityProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIdentityProviderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPullConfigurationRequest extends $dara.Model {
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
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPullConfigurationResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  udPullConfiguration?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      udPullConfiguration: 'UdPullConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      udPullConfiguration: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfiguration,
    };
  }

  validate() {
    if(this.udPullConfiguration && typeof (this.udPullConfiguration as any).validate === 'function') {
      (this.udPullConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPullConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIdentityProviderUdPullConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIdentityProviderUdPullConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $dara.Model {
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
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the instance.
   */
  instance?: GetInstanceResponseBodyInstance;
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
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: GetInstanceResponseBodyInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLicenseRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk2676xxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLicenseResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned result.
   */
  license?: GetInstanceLicenseResponseBodyLicense;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      license: 'License',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      license: GetInstanceLicenseResponseBodyLicense,
      requestId: 'string',
    };
  }

  validate() {
    if(this.license && typeof (this.license as any).validate === 'function') {
      (this.license as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkAccessEndpointRequest extends $dara.Model {
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
   * 专属网络端点ID。
   * 
   * This parameter is required.
   * 
   * @example
   * nae-examplexxxx
   */
  networkAccessEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkAccessEndpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkAccessEndpointResponseBody extends $dara.Model {
  networkAccessEndpoint?: GetNetworkAccessEndpointResponseBodyNetworkAccessEndpoint;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAccessEndpoint: 'NetworkAccessEndpoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessEndpoint: GetNetworkAccessEndpointResponseBodyNetworkAccessEndpoint,
      requestId: 'string',
    };
  }

  validate() {
    if(this.networkAccessEndpoint && typeof (this.networkAccessEndpoint as any).validate === 'function') {
      (this.networkAccessEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkAccessEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNetworkAccessEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNetworkAccessEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object of the organizational unit.
   */
  organizationalUnit?: GetOrganizationalUnitResponseBodyOrganizationalUnit;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnit: 'OrganizationalUnit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnit: GetOrganizationalUnitResponseBodyOrganizationalUnit,
      requestId: 'string',
    };
  }

  validate() {
    if(this.organizationalUnit && typeof (this.organizationalUnit as any).validate === 'function') {
      (this.organizationalUnit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOrganizationalUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOrganizationalUnitResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordComplexityConfigurationRequest extends $dara.Model {
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
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordComplexityConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The password complexity configurations.
   */
  passwordComplexityConfiguration?: GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfiguration;
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
      passwordComplexityConfiguration: 'PasswordComplexityConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordComplexityConfiguration: GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.passwordComplexityConfiguration && typeof (this.passwordComplexityConfiguration as any).validate === 'function') {
      (this.passwordComplexityConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordComplexityConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPasswordComplexityConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPasswordComplexityConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordExpirationConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordExpirationConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The password expiration configurations.
   */
  passwordExpirationConfiguration?: GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passwordExpirationConfiguration: 'PasswordExpirationConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordExpirationConfiguration: GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.passwordExpirationConfiguration && typeof (this.passwordExpirationConfiguration as any).validate === 'function') {
      (this.passwordExpirationConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordExpirationConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPasswordExpirationConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPasswordExpirationConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordHistoryConfigurationRequest extends $dara.Model {
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
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordHistoryConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The password history configurations.
   */
  passwordHistoryConfiguration?: GetPasswordHistoryConfigurationResponseBodyPasswordHistoryConfiguration;
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
      passwordHistoryConfiguration: 'PasswordHistoryConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordHistoryConfiguration: GetPasswordHistoryConfigurationResponseBodyPasswordHistoryConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.passwordHistoryConfiguration && typeof (this.passwordHistoryConfiguration as any).validate === 'function') {
      (this.passwordHistoryConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordHistoryConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPasswordHistoryConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPasswordHistoryConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordInitializationConfigurationRequest extends $dara.Model {
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
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordInitializationConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The password initialization configurations.
   */
  passwordInitializationConfiguration?: GetPasswordInitializationConfigurationResponseBodyPasswordInitializationConfiguration;
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
      passwordInitializationConfiguration: 'PasswordInitializationConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordInitializationConfiguration: GetPasswordInitializationConfigurationResponseBodyPasswordInitializationConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.passwordInitializationConfiguration && typeof (this.passwordInitializationConfiguration as any).validate === 'function') {
      (this.passwordInitializationConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordInitializationConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPasswordInitializationConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPasswordInitializationConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRootOrganizationalUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRootOrganizationalUnitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object of the organizational unit.
   */
  organizationalUnit?: GetRootOrganizationalUnitResponseBodyOrganizationalUnit;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnit: 'OrganizationalUnit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnit: GetRootOrganizationalUnitResponseBodyOrganizationalUnit,
      requestId: 'string',
    };
  }

  validate() {
    if(this.organizationalUnit && typeof (this.organizationalUnit as any).validate === 'function') {
      (this.organizationalUnit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRootOrganizationalUnitResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRootOrganizationalUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRootOrganizationalUnitResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobRequest extends $dara.Model {
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
   * 同步任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * sync_0000347vjovtcf41li0fgsd98gn24q9njxxxxx
   */
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      synchronizationJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  synchronizationJob?: GetSynchronizationJobResponseBodySynchronizationJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      synchronizationJob: 'SynchronizationJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      synchronizationJob: GetSynchronizationJobResponseBodySynchronizationJob,
    };
  }

  validate() {
    if(this.synchronizationJob && typeof (this.synchronizationJob as any).validate === 'function') {
      (this.synchronizationJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSynchronizationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSynchronizationJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The data object of the account.
   */
  user?: GetUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: GetUserResponseBodyUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationClientSecretsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationClientSecretsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the client keys.
   */
  applicationClientSecrets?: ListApplicationClientSecretsResponseBodyApplicationClientSecrets[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationClientSecrets: 'ApplicationClientSecrets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationClientSecrets: { 'type': 'array', 'itemType': ListApplicationClientSecretsResponseBodyApplicationClientSecrets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationClientSecrets)) {
      $dara.Model.validateArray(this.applicationClientSecrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationClientSecretsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationClientSecretsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationClientSecretsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications.
   * 
   * @example
   * Ram Account SSO
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The name of the application. Only fuzzy match from the leftmost character is supported.
   * 
   * @example
   * Ram Account SSO
   */
  applicationName?: string;
  /**
   * @remarks
   * The authorization of the application. Valid values:
   * 
   * *   authorize_required: Only the user with explicit authorization can access the application.
   * *   default_all: By default, all users can access the application.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   Enabled: The application is enabled.
   * *   Disabled: The application is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationName: 'ApplicationName',
      authorizationType: 'AuthorizationType',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationName: 'string',
      authorizationType: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the applications.
   */
  applications?: ListApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplications },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForOrganizationalUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications that the EIAM organization can access. You can query a maximum of 100 application IDs at a time.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the EIAM organization.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      organizationalUnitId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForOrganizationalUnitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The applications that the EIAM organization can access.
   */
  applications?: ListApplicationsForOrganizationalUnitResponseBodyApplications[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForOrganizationalUnitResponseBodyApplications },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForOrganizationalUnitResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsForOrganizationalUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationsForOrganizationalUnitResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForUserRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the applications that the EIAM account can access. You can query a maximum of 100 application IDs at a time.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query mode. Default value: **OnlyDirect**. Valid values:
   * 
   * *   OnlyDirect: Only the direct permissions are queried. Direct permissions are the permissions that are directly granted to the account.
   * *   IncludeInherit: Both the permissions that are directly granted to the account and the inherited permissions are queried. Inherited permissions are the permissions that an account inherits from the parent organization or the group to which the account belongs.
   * 
   * @example
   * OnlyDirect
   */
  queryMode?: string;
  /**
   * @remarks
   * The ID of the EIAM account.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryMode: 'QueryMode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryMode: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The applications that the EIAM account can access.
   */
  applications?: ListApplicationsForUserResponseBodyApplications[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForUserResponseBodyApplications },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationsForUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainProxyTokensRequest extends $dara.Model {
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
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
      domainId: 'DomainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainProxyTokensResponseBody extends $dara.Model {
  domainProxyTokens?: ListDomainProxyTokensResponseBodyDomainProxyTokens[];
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainProxyTokens: 'DomainProxyTokens',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainProxyTokens: { 'type': 'array', 'itemType': ListDomainProxyTokensResponseBodyDomainProxyTokens },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainProxyTokens)) {
      $dara.Model.validateArray(this.domainProxyTokens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainProxyTokensResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDomainProxyTokensResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDomainProxyTokensResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsRequest extends $dara.Model {
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
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $dara.Model {
  domains?: ListDomainsResponseBodyDomains[];
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomains },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDomainsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * 实例ID列表，支持0到100个
   */
  instanceIds?: string[];
  /**
   * @remarks
   * 实例所属Region
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      instanceRegionId: 'InstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamInstancesResponseBody extends $dara.Model {
  instances?: ListEiamInstancesResponseBodyInstances[];
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListEiamInstancesResponseBodyInstances },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEiamInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEiamInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamRegionsResponseBody extends $dara.Model {
  regions?: ListEiamRegionsResponseBodyRegions[];
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListEiamRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEiamRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEiamRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The external ID of the group.
   * 
   * @example
   * group_external_id
   */
  groupExternalId?: string;
  /**
   * @remarks
   * The group IDs.
   */
  groupIds?: string[];
  /**
   * @remarks
   * The name of the group. If you specify this parameter, the query is based on an exact match.
   * 
   * @example
   * name_test
   */
  groupName?: string;
  /**
   * @remarks
   * The prefix of the group name. If you specify this parameter, the query follows the leftmost matching principle.
   * 
   * @example
   * name
   */
  groupNameStartsWith?: string;
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
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      groupExternalId: 'GroupExternalId',
      groupIds: 'GroupIds',
      groupName: 'GroupName',
      groupNameStartsWith: 'GroupNameStartsWith',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupExternalId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      groupNameStartsWith: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried account groups.
   */
  groups?: ListGroupsResponseBodyGroups[];
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
   * The total number of entries returned. The maximum number of entries returned at a time depends on the value of PageSize.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The group IDs. You can specify up to 100 group IDs at a time.
   * 
   * @example
   * group_miu8e4t4d7i4u7uwezgr54xxxx
   */
  groupIds?: string[];
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
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The group IDs.
   */
  groups?: ListGroupsForApplicationResponseBodyGroups[];
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
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsForApplicationResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupsForApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupsForApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserRequest extends $dara.Model {
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
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried account groups.
   */
  groups?: ListGroupsForUserResponseBodyGroups[];
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
   * The total number of entries returned. The maximum number of entries returned at a time depends on the value of PageSize.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsForUserResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupsForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupsForUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityProvidersRequest extends $dara.Model {
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
   * 当前查询的列表页码，默认为1。
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 当前查询的列表页码，默认为20。
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityProvidersResponseBody extends $dara.Model {
  identityProviders?: ListIdentityProvidersResponseBodyIdentityProviders[];
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      identityProviders: 'IdentityProviders',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviders: { 'type': 'array', 'itemType': ListIdentityProvidersResponseBodyIdentityProviders },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.identityProviders)) {
      $dara.Model.validateArray(this.identityProviders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityProvidersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIdentityProvidersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIdentityProvidersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   creating
   * *   running
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of instances.
   */
  instances?: ListInstancesResponseBodyInstances[];
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
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableRegionsResponseBody extends $dara.Model {
  regions?: ListNetworkAccessEndpointAvailableRegionsResponseBodyRegions[];
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListNetworkAccessEndpointAvailableRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworkAccessEndpointAvailableRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNetworkAccessEndpointAvailableRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableZonesRequest extends $dara.Model {
  /**
   * @remarks
   * 专属网络端点支持的地域
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  naeRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      naeRegionId: 'NaeRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      naeRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableZonesResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  zones?: ListNetworkAccessEndpointAvailableZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': ListNetworkAccessEndpointAvailableZonesResponseBodyZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableZonesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworkAccessEndpointAvailableZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNetworkAccessEndpointAvailableZonesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointsRequest extends $dara.Model {
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
   * 分页查询时每页行数。默认值为20，最大值为100。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 专属网络端点连接的状态。NetworkAccessEndpointType取值为shared时不生效。
   * 
   * @example
   * running
   */
  networkAccessEndpointStatus?: string;
  /**
   * @remarks
   * 专属网络端点连接的类型。取值可选范围：1. private - 专属网络端点；2. shared - 共享网络端点
   * 
   * @example
   * private
   */
  networkAccessEndpointType?: string;
  /**
   * @remarks
   * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * 专属网络端点连接的Vpc ID。NetworkAccessEndpointType取值为shared时不生效。
   * 
   * @example
   * vpc-examplexxx
   */
  vpcId?: string;
  /**
   * @remarks
   * 专属网络端点连接的Vpc所属地域，该地域取值必须在ListNetworkAccessEndpointAvailableRegions接口中返回。NetworkAccessEndpointType取值为shared时不生效。
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      networkAccessEndpointStatus: 'NetworkAccessEndpointStatus',
      networkAccessEndpointType: 'NetworkAccessEndpointType',
      nextToken: 'NextToken',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      networkAccessEndpointStatus: 'string',
      networkAccessEndpointType: 'string',
      nextToken: 'string',
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointsResponseBody extends $dara.Model {
  networkAccessEndpoints?: ListNetworkAccessEndpointsResponseBodyNetworkAccessEndpoints[];
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于下一次翻页查询。
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkAccessEndpoints: 'NetworkAccessEndpoints',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessEndpoints: { 'type': 'array', 'itemType': ListNetworkAccessEndpointsResponseBodyNetworkAccessEndpoints },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkAccessEndpoints)) {
      $dara.Model.validateArray(this.networkAccessEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworkAccessEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNetworkAccessEndpointsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessPathsRequest extends $dara.Model {
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
   * 专属网络端点ID。
   * 
   * This parameter is required.
   * 
   * @example
   * nae_examplexxxx
   */
  networkAccessEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkAccessEndpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessPathsResponseBody extends $dara.Model {
  networkAccessPaths?: ListNetworkAccessPathsResponseBodyNetworkAccessPaths[];
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAccessPaths: 'NetworkAccessPaths',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessPaths: { 'type': 'array', 'itemType': ListNetworkAccessPathsResponseBodyNetworkAccessPaths },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkAccessPaths)) {
      $dara.Model.validateArray(this.networkAccessPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessPathsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworkAccessPathsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNetworkAccessPathsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitParentsRequest extends $dara.Model {
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
   * 组织ID。
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitParentsResponseBody extends $dara.Model {
  parents?: ListOrganizationalUnitParentsResponseBodyParents[];
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parents: 'Parents',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parents: { 'type': 'array', 'itemType': ListOrganizationalUnitParentsResponseBodyParents },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parents)) {
      $dara.Model.validateArray(this.parents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitParentsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOrganizationalUnitParentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOrganizationalUnitParentsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of organizational units.
   * 
   * @example
   * [ou_wovwffm62xifdziem7an7xxxxx]
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The name of the organizational unit.
   * 
   * @example
   * name_001
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * Organization name, matching left
   * 
   * @example
   * name
   */
  organizationalUnitNameStartsWith?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
      organizationalUnitName: 'OrganizationalUnitName',
      organizationalUnitNameStartsWith: 'OrganizationalUnitNameStartsWith',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      organizationalUnitName: 'string',
      organizationalUnitNameStartsWith: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data objects of organizational units.
   */
  organizationalUnits?: ListOrganizationalUnitsResponseBodyOrganizationalUnits[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries in the list.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      organizationalUnits: 'OrganizationalUnits',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnits: { 'type': 'array', 'itemType': ListOrganizationalUnitsResponseBodyOrganizationalUnits },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnits)) {
      $dara.Model.validateArray(this.organizationalUnits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOrganizationalUnitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOrganizationalUnitsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the organizations that are allowed to access the application. You can query a maximum of 100 organization IDs at a time.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the organizations that are allowed to access the application.
   */
  organizationalUnits?: ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnits[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      organizationalUnits: 'OrganizationalUnits',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnits: { 'type': 'array', 'itemType': ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnits },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnits)) {
      $dara.Model.validateArray(this.organizationalUnits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOrganizationalUnitsForApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOrganizationalUnitsForApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The supported regions.
   */
  regions?: ListRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsRequest extends $dara.Model {
  /**
   * @remarks
   * 同步方向[ingress,egress]
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * 同步结束时间
   * 
   * @example
   * 1649830226000
   */
  endTime?: number;
  filters?: ListSynchronizationJobsRequestFilters[];
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
   * 分页查询时每页行数。默认值为20，最大值为100。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * 当前查询的列表页码，默认为1。
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 当前查询的列表页码，默认为20。
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 同步开始时间
   * 
   * @example
   * 1649830226000
   */
  startTime?: number;
  /**
   * @remarks
   * 同步状态[pending,running,suspending,failed,partial_success,success]
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * 同步目标ID
   * 
   * @example
   * target_001
   */
  targetIds?: string[];
  /**
   * @remarks
   * 同步目标类型[identity_provider,organizational_unit,application,user]
   * 
   * @example
   * identity_provider
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      filters: 'Filters',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      targetIds: 'TargetIds',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': ListSynchronizationJobsRequestFilters },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      status: 'string',
      targetIds: { 'type': 'array', 'itemType': 'string' },
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.targetIds)) {
      $dara.Model.validateArray(this.targetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于下一次翻页查询。
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  synchronizationJobs?: ListSynchronizationJobsResponseBodySynchronizationJobs[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      synchronizationJobs: 'SynchronizationJobs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      synchronizationJobs: { 'type': 'array', 'itemType': ListSynchronizationJobsResponseBodySynchronizationJobs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.synchronizationJobs)) {
      $dara.Model.validateArray(this.synchronizationJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSynchronizationJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSynchronizationJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * Displayname
   * 
   * @example
   * name_001
   */
  displayNameStartsWith?: string;
  /**
   * @remarks
   * The email address of the user who owns the account.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The mobile number of the user who owns the account.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The country code of the mobile number. For example, the country code of China is 86 without 00 or +.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * *   enabled: The account is enabled.
   * *   disabled: The account is disabled.
   * 
   * @example
   * enable
   */
  status?: string;
  /**
   * @remarks
   * The external ID of the account. The external ID can be used by external data to map the data of the account in IDaaS EIAM.
   * 
   * For accounts with the same source type and source ID, each account has a unique external ID.
   * 
   * @example
   * id_wovwffm62xifdziem7an7xxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * User ID set
   */
  userIds?: string[];
  /**
   * @remarks
   * The source ID of the account.
   * 
   * If the account was created in IDaaS, its source ID is the ID of the IDaaS instance. If the account was imported, its source ID is the enterprise ID in the source. For example, if the account was imported from DingTalk, its source ID is the corpId value of the enterprise in DingTalk.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  userSourceId?: string;
  /**
   * @remarks
   * The source type of the account. Valid values:
   * 
   * *   build_in: The account was created in IDaaS.
   * *   ding_talk: The account was imported from DingTalk.
   * *   ad: The account was imported from Microsoft Active Directory (AD).
   * *   ldap: The account was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * @example
   * build_in
   */
  userSourceType?: string;
  /**
   * @remarks
   * Username
   * 
   * @example
   * name_001
   */
  usernameStartsWith?: string;
  static names(): { [key: string]: string } {
    return {
      displayNameStartsWith: 'DisplayNameStartsWith',
      email: 'Email',
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      phoneRegion: 'PhoneRegion',
      status: 'Status',
      userExternalId: 'UserExternalId',
      userIds: 'UserIds',
      userSourceId: 'UserSourceId',
      userSourceType: 'UserSourceType',
      usernameStartsWith: 'UsernameStartsWith',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayNameStartsWith: 'string',
      email: 'string',
      instanceId: 'string',
      organizationalUnitId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      phoneRegion: 'string',
      status: 'string',
      userExternalId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
      userSourceId: 'string',
      userSourceType: 'string',
      usernameStartsWith: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries in the list.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of data objects of accounts.
   */
  users?: ListUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the accounts. You can query a maximum of 100 accounts at a time.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The IDs of the accounts.
   */
  users?: ListUsersForApplicationResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersForApplicationResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForApplicationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersForApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsersForApplicationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
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
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The account IDs. A maximum of 100 accounts can be queried.
   * 
   * @example
   * [ou_001]
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupResponseBody extends $dara.Model {
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
   * The total number of entries returned. The maximum number of entries that can be returned per page is specified by PageSize.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about accounts.
   */
  users?: ListUsersForGroupResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersForGroupResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersForGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsersForGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainApplicationClientSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application whose client key you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      secretId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainApplicationClientSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the client key.
   */
  applicationClientSecret?: ObtainApplicationClientSecretResponseBodyApplicationClientSecret;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationClientSecret: 'ApplicationClientSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationClientSecret: ObtainApplicationClientSecretResponseBodyApplicationClientSecret,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationClientSecret && typeof (this.applicationClientSecret as any).validate === 'function') {
      (this.applicationClientSecret as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainApplicationClientSecretResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ObtainApplicationClientSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ObtainApplicationClientSecretResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainDomainProxyTokenRequest extends $dara.Model {
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名代理Token ID。
   * 
   * This parameter is required.
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
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
      domainId: 'DomainId',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainDomainProxyTokenResponseBody extends $dara.Model {
  domainProxyToken?: ObtainDomainProxyTokenResponseBodyDomainProxyToken;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainProxyToken: 'DomainProxyToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainProxyToken: ObtainDomainProxyTokenResponseBodyDomainProxyToken,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainProxyToken && typeof (this.domainProxyToken as any).validate === 'function') {
      (this.domainProxyToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainDomainProxyTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ObtainDomainProxyTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ObtainDomainProxyTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromOrganizationalUnitsRequest extends $dara.Model {
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
  /**
   * @remarks
   * The organization IDs. You can remove an account from a maximum of 100 organizations.
   * 
   * This parameter is required.
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromOrganizationalUnitsResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromOrganizationalUnitsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUserFromOrganizationalUnitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUserFromOrganizationalUnitsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
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
  /**
   * @remarks
   * The account IDs. A maximum of 100 accounts can be removed from a group.
   * 
   * This parameter is required.
   * 
   * @example
   * [ou_001]
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromGroupResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUsersFromGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUsersFromGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The group IDs. You can specify up to 100 group IDs at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * group_miu8e4t4d7i4u7uwezgr54xxxx
   */
  groupIds?: string[];
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
      applicationId: 'ApplicationId',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromGroupsResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeApplicationFromGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeApplicationFromGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromOrganizationalUnitsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the organizations. You can revoke the access permissions from a maximum of 100 organizations at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromOrganizationalUnitsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromOrganizationalUnitsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeApplicationFromOrganizationalUnitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeApplicationFromOrganizationalUnitsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the accounts. You can revoke the access permissions from a maximum of 100 accounts at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeApplicationFromUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeApplicationFromUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSynchronizationJobRequest extends $dara.Model {
  /**
   * @example
   * 描述
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
  passwordInitialization?: boolean;
  synchronizationScopeConfig?: RunSynchronizationJobRequestSynchronizationScopeConfig;
  /**
   * @remarks
   * 同步目标ID
   * 
   * This parameter is required.
   * 
   * @example
   * idp_my664lwkhpicbyzirog3ngxxxxx
   */
  targetId?: string;
  /**
   * @remarks
   * 同步目标类型
   * 
   * This parameter is required.
   * 
   * @example
   * identity_provider
   */
  targetType?: string;
  userIdentityTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      passwordInitialization: 'PasswordInitialization',
      synchronizationScopeConfig: 'SynchronizationScopeConfig',
      targetId: 'TargetId',
      targetType: 'TargetType',
      userIdentityTypes: 'UserIdentityTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      passwordInitialization: 'boolean',
      synchronizationScopeConfig: RunSynchronizationJobRequestSynchronizationScopeConfig,
      targetId: 'string',
      targetType: 'string',
      userIdentityTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.synchronizationScopeConfig && typeof (this.synchronizationScopeConfig as any).validate === 'function') {
      (this.synchronizationScopeConfig as any).validate();
    }
    if(Array.isArray(this.userIdentityTypes)) {
      $dara.Model.validateArray(this.userIdentityTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSynchronizationJobResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * sync_0000347vjovtcf41li0fgsd98gn24q9nj9xxxxx
   */
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      synchronizationJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSynchronizationJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunSynchronizationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunSynchronizationJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationGrantScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to configure.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The permissions of the Developer API feature.
   */
  grantScopes?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      grantScopes: 'GrantScopes',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      grantScopes: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.grantScopes)) {
      $dara.Model.validateArray(this.grantScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationGrantScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationGrantScopeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetApplicationGrantScopeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetApplicationGrantScopeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The configuration of event callback synchronization. This parameter is required when the ProvisionProtocolType parameter is set to idaas_callback.
   */
  callbackProvisioningConfig?: SetApplicationProvisioningConfigRequestCallbackProvisioningConfig;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to synchronize the password in IDaaS user event callbacks. Valid values:
   * 
   * *   true: synchronize the password.
   * *   false: do not synchronize the password.
   * 
   * @example
   * true
   */
  provisionPassword?: boolean;
  /**
   * @remarks
   * The synchronization protocol type of the application. Valid values:
   * 
   * *   idaas_callback: custom event callback protocol of IDaaS.
   * *   scim2: System for Cross-domain Identity Management (SCIM) protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_callback
   */
  provisionProtocolType?: string;
  /**
   * @remarks
   * The configuration of SCIM-based IDaaS synchronization. This parameter is required when the ProvisionProtocolType parameter is set to scim2.
   */
  scimProvisioningConfig?: SetApplicationProvisioningConfigRequestScimProvisioningConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      callbackProvisioningConfig: 'CallbackProvisioningConfig',
      instanceId: 'InstanceId',
      provisionPassword: 'ProvisionPassword',
      provisionProtocolType: 'ProvisionProtocolType',
      scimProvisioningConfig: 'ScimProvisioningConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      callbackProvisioningConfig: SetApplicationProvisioningConfigRequestCallbackProvisioningConfig,
      instanceId: 'string',
      provisionPassword: 'boolean',
      provisionProtocolType: 'string',
      scimProvisioningConfig: SetApplicationProvisioningConfigRequestScimProvisioningConfig,
    };
  }

  validate() {
    if(this.callbackProvisioningConfig && typeof (this.callbackProvisioningConfig as any).validate === 'function') {
      (this.callbackProvisioningConfig as any).validate();
    }
    if(this.scimProvisioningConfig && typeof (this.scimProvisioningConfig as any).validate === 'function') {
      (this.scimProvisioningConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetApplicationProvisioningConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetApplicationProvisioningConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * List of groups that are authorized to be synchronized from
   */
  groupIds?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of organizational units that are authorized for account synchronization.
   */
  organizationalUnitIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningScopeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetApplicationProvisioningScopeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetApplicationProvisioningScopeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  clientToken?: string;
  /**
   * @remarks
   * The initial SSO method. Valid values:
   * 
   * *   only_app_init_sso: Only application-initiated SSO is allowed. This method is selected by default when the SSO protocol of the application is an OIDC protocol. If this method is selected when the SSO protocol of the application is SAML, the InitLoginUrl parameter is required.
   * *   idaas_or_app_init_sso: IDaaS-initiated SSO and application-initiated SSO are allowed. This method is selected by default when the SSO protocol of the application is SAML. If this method is selected when the SSO protocol of the application is an OIDC protocol, the InitLoginUrl parameter is required.
   * 
   * @example
   * only_app_init_sso
   */
  initLoginType?: string;
  /**
   * @remarks
   * The initial webhook URL of SSO. This parameter is required when the SSO protocol of the application is an OIDC protocol and the InitLoginType parameters is set to idaas_or_app_init_sso or when the SSO protocol of the application is SAML and the InitLoginType parameter is set to only_app_init_sso.
   * 
   * @example
   * http://127.0.0.1:8000/start_login?enterprise_code=ABCDEF
   */
  initLoginUrl?: string;
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
  /**
   * @remarks
   * The Open ID Connect (OIDC)-based SSO configuration attributes of the application.
   */
  oidcSsoConfig?: SetApplicationSsoConfigRequestOidcSsoConfig;
  /**
   * @remarks
   * The Security Assertion Markup Language (SAML)-based single sign-on (SSO) configuration attributes of the application.
   */
  samlSsoConfig?: SetApplicationSsoConfigRequestSamlSsoConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientToken: 'ClientToken',
      initLoginType: 'InitLoginType',
      initLoginUrl: 'InitLoginUrl',
      instanceId: 'InstanceId',
      oidcSsoConfig: 'OidcSsoConfig',
      samlSsoConfig: 'SamlSsoConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientToken: 'string',
      initLoginType: 'string',
      initLoginUrl: 'string',
      instanceId: 'string',
      oidcSsoConfig: SetApplicationSsoConfigRequestOidcSsoConfig,
      samlSsoConfig: SetApplicationSsoConfigRequestSamlSsoConfig,
    };
  }

  validate() {
    if(this.oidcSsoConfig && typeof (this.oidcSsoConfig as any).validate === 'function') {
      (this.oidcSsoConfig as any).validate();
    }
    if(this.samlSsoConfig && typeof (this.samlSsoConfig as any).validate === 'function') {
      (this.samlSsoConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetApplicationSsoConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetApplicationSsoConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultDomainRequest extends $dara.Model {
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
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
      domainId: 'DomainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultDomainResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDefaultDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDefaultDomainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetForgetPasswordConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication channels. Valid values: email and sms.
   * 
   * @example
   * email
   */
  authenticationChannels?: string[];
  /**
   * @remarks
   * The status of the forgot password feature. Valid values: enabled and disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  forgetPasswordStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eiam-111ccc1111
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationChannels: 'AuthenticationChannels',
      forgetPasswordStatus: 'ForgetPasswordStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationChannels: { 'type': 'array', 'itemType': 'string' },
      forgetPasswordStatus: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authenticationChannels)) {
      $dara.Model.validateArray(this.authenticationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetForgetPasswordConfigurationResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetForgetPasswordConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetForgetPasswordConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetForgetPasswordConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderUdPullConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * 组同步状态
   * 
   * @example
   * disabled
   */
  groupSyncStatus?: string;
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
   * 增量回调状态，是否处理来自IdP的增量回调数据
   * 
   * This parameter is required.
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
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
   * ldap同步侧相关配置信息
   */
  ldapUdPullConfig?: SetIdentityProviderUdPullConfigurationRequestLdapUdPullConfig;
  /**
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * 同步入保护规则,根据IdP的type做解析
   */
  pullProtectedRule?: SetIdentityProviderUdPullConfigurationRequestPullProtectedRule;
  /**
   * @remarks
   * 同步入配置信息
   */
  udSyncScopeConfig?: SetIdentityProviderUdPullConfigurationRequestUdSyncScopeConfig;
  static names(): { [key: string]: string } {
    return {
      groupSyncStatus: 'GroupSyncStatus',
      identityProviderId: 'IdentityProviderId',
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      instanceId: 'InstanceId',
      ldapUdPullConfig: 'LdapUdPullConfig',
      periodicSyncStatus: 'PeriodicSyncStatus',
      pullProtectedRule: 'PullProtectedRule',
      udSyncScopeConfig: 'UdSyncScopeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupSyncStatus: 'string',
      identityProviderId: 'string',
      incrementalCallbackStatus: 'string',
      instanceId: 'string',
      ldapUdPullConfig: SetIdentityProviderUdPullConfigurationRequestLdapUdPullConfig,
      periodicSyncStatus: 'string',
      pullProtectedRule: SetIdentityProviderUdPullConfigurationRequestPullProtectedRule,
      udSyncScopeConfig: SetIdentityProviderUdPullConfigurationRequestUdSyncScopeConfig,
    };
  }

  validate() {
    if(this.ldapUdPullConfig && typeof (this.ldapUdPullConfig as any).validate === 'function') {
      (this.ldapUdPullConfig as any).validate();
    }
    if(this.pullProtectedRule && typeof (this.pullProtectedRule as any).validate === 'function') {
      (this.pullProtectedRule as any).validate();
    }
    if(this.udSyncScopeConfig && typeof (this.udSyncScopeConfig as any).validate === 'function') {
      (this.udSyncScopeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderUdPullConfigurationResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderUdPullConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetIdentityProviderUdPullConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetIdentityProviderUdPullConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordComplexityConfigurationRequest extends $dara.Model {
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
  /**
   * @remarks
   * The password complexity rules.
   */
  passwordComplexityRules?: SetPasswordComplexityConfigurationRequestPasswordComplexityRules[];
  /**
   * @remarks
   * The minimum number of characters in a password.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  passwordMinLength?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      passwordComplexityRules: 'PasswordComplexityRules',
      passwordMinLength: 'PasswordMinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      passwordComplexityRules: { 'type': 'array', 'itemType': SetPasswordComplexityConfigurationRequestPasswordComplexityRules },
      passwordMinLength: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.passwordComplexityRules)) {
      $dara.Model.validateArray(this.passwordComplexityRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordComplexityConfigurationResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordComplexityConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPasswordComplexityConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetPasswordComplexityConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordExpirationConfigurationRequest extends $dara.Model {
  effectiveAuthenticationSourceIds?: string[];
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
  /**
   * @remarks
   * The action to take upon password expiration. This parameter must be specified when PasswordExpirationStatus is set to enabled. Valid values:
   * 
   * *   forbid_login: Users cannot log on to IDaaS.
   * *   force_update_password: Users must change the password.
   * *   remind_update_password: IDaaS reminds users to change the password upon each logon.
   * 
   * @example
   * force_update_password
   */
  passwordExpirationAction?: string;
  /**
   * @remarks
   * The methods for receiving password expiration notifications. This parameter must be specified when PasswordExpirationNotificationStatus is set to enabled.
   * 
   * @example
   * login
   */
  passwordExpirationNotificationChannels?: string[];
  /**
   * @remarks
   * The number of days before the expiration date during which password expiration notifications are sent. Unit: day. This parameter must be specified when PasswordExpirationNotificationStatus is set to enabled.
   * 
   * @example
   * 7
   */
  passwordExpirationNotificationDuration?: number;
  /**
   * @remarks
   * Specifies whether to enable the password expiration notification feature. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordExpirationNotificationStatus?: string;
  /**
   * @remarks
   * Specifies whether to enable the password expiration feature. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  passwordExpirationStatus?: string;
  /**
   * @remarks
   * The number of days before which users must change the password to prevent password expiration. Unit: day. You must set this parameter to a value greater than the value of PasswordExpirationNotificationDuration.
   * 
   * @example
   * 7
   */
  passwordForcedUpdateDuration?: number;
  /**
   * @remarks
   * The validity period of a password. Unit: day. This parameter must be specified when PasswordExpirationStatus is set to enabled.
   * 
   * @example
   * 180
   */
  passwordValidMaxDay?: number;
  static names(): { [key: string]: string } {
    return {
      effectiveAuthenticationSourceIds: 'EffectiveAuthenticationSourceIds',
      instanceId: 'InstanceId',
      passwordExpirationAction: 'PasswordExpirationAction',
      passwordExpirationNotificationChannels: 'PasswordExpirationNotificationChannels',
      passwordExpirationNotificationDuration: 'PasswordExpirationNotificationDuration',
      passwordExpirationNotificationStatus: 'PasswordExpirationNotificationStatus',
      passwordExpirationStatus: 'PasswordExpirationStatus',
      passwordForcedUpdateDuration: 'PasswordForcedUpdateDuration',
      passwordValidMaxDay: 'PasswordValidMaxDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveAuthenticationSourceIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      passwordExpirationAction: 'string',
      passwordExpirationNotificationChannels: { 'type': 'array', 'itemType': 'string' },
      passwordExpirationNotificationDuration: 'number',
      passwordExpirationNotificationStatus: 'string',
      passwordExpirationStatus: 'string',
      passwordForcedUpdateDuration: 'number',
      passwordValidMaxDay: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.effectiveAuthenticationSourceIds)) {
      $dara.Model.validateArray(this.effectiveAuthenticationSourceIds);
    }
    if(Array.isArray(this.passwordExpirationNotificationChannels)) {
      $dara.Model.validateArray(this.passwordExpirationNotificationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordExpirationConfigurationResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordExpirationConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPasswordExpirationConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetPasswordExpirationConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordHistoryConfigurationRequest extends $dara.Model {
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
  /**
   * @remarks
   * The maximum number of recent passwords that can be retained. This parameter must be specified when PasswordHistoryStatus is set to enabled.
   * 
   * @example
   * 3
   */
  passwordHistoryMaxRetention?: number;
  /**
   * @remarks
   * Specifies whether to enable the password history feature. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  passwordHistoryStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      passwordHistoryMaxRetention: 'PasswordHistoryMaxRetention',
      passwordHistoryStatus: 'PasswordHistoryStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      passwordHistoryMaxRetention: 'number',
      passwordHistoryStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordHistoryConfigurationResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordHistoryConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPasswordHistoryConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetPasswordHistoryConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordInitializationConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable forcible password change upon first logon. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The methods for receiving password initialization notifications.
   * 
   * @example
   * email
   */
  passwordInitializationNotificationChannels?: string[];
  /**
   * @remarks
   * Specifies whether to enable password initialization. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  passwordInitializationStatus?: string;
  /**
   * @remarks
   * The password initialization method. This parameter is required when PasswordInitializationStatus is set to enabled. Set the value to random.
   * 
   * *   random: A randomly generated password is used.
   * 
   * @example
   * random
   */
  passwordInitializationType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      passwordForcedUpdateStatus: 'PasswordForcedUpdateStatus',
      passwordInitializationNotificationChannels: 'PasswordInitializationNotificationChannels',
      passwordInitializationStatus: 'PasswordInitializationStatus',
      passwordInitializationType: 'PasswordInitializationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      passwordForcedUpdateStatus: 'string',
      passwordInitializationNotificationChannels: { 'type': 'array', 'itemType': 'string' },
      passwordInitializationStatus: 'string',
      passwordInitializationType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.passwordInitializationNotificationChannels)) {
      $dara.Model.validateArray(this.passwordInitializationNotificationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordInitializationConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordInitializationConfigurationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPasswordInitializationConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetPasswordInitializationConfigurationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserPrimaryOrganizationalUnitRequest extends $dara.Model {
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
  /**
   * @remarks
   * The ID of the new primary organizational unit.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserPrimaryOrganizationalUnitResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserPrimaryOrganizationalUnitResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetUserPrimaryOrganizationalUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetUserPrimaryOrganizationalUnitResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUserRequest extends $dara.Model {
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
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUserResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnlockUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnlockUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationAuthorizationTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The authorization type of the application. Valid values:
   * 
   * *   authorize_required: Only the user with explicit authorization can access the application.
   * *   default_all: By default, all users can access the application.
   * 
   * This parameter is required.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      authorizationType: 'AuthorizationType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      authorizationType: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationAuthorizationTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationAuthorizationTypeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationAuthorizationTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateApplicationAuthorizationTypeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * A demo application that is used for test.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk2676xxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      description: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationDescriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationDescriptionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateApplicationDescriptionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The external ID of the group.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupExternalId?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * name_test
   */
  groupName?: string;
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
      groupExternalId: 'GroupExternalId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupExternalId: 'string',
      groupId: 'string',
      groupName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account group.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  description?: string;
  /**
   * @remarks
   * The ID of the account group.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
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
      description: 'Description',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupDescriptionResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupDescriptionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGroupDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGroupDescriptionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequest extends $dara.Model {
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

export class UpdateIdentityProviderResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIdentityProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIdentityProviderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the instance.
   * 
   * @example
   * 测试实例
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance whose description you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceDescriptionResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceDescriptionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceDescriptionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkAccessEndpointNameRequest extends $dara.Model {
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
   * 专属网络端点ID。
   * 
   * This parameter is required.
   * 
   * @example
   * nae_examplexxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * 专属网络端点名称。
   * 
   * This parameter is required.
   * 
   * @example
   * xx业务VPC访问端点
   */
  networkAccessEndpointName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      networkAccessEndpointName: 'NetworkAccessEndpointName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      networkAccessEndpointName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkAccessEndpointNameResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkAccessEndpointNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNetworkAccessEndpointNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNetworkAccessEndpointNameResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitRequest extends $dara.Model {
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
  /**
   * @remarks
   * The organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The name of the organization. The name can be up to 128 characters in length and must be unique in the same parent organization.
   * 
   * @example
   * ou_name
   */
  organizationalUnitName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOrganizationalUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateOrganizationalUnitResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the organization. The value can be up to 256 characters in length.
   * 
   * @example
   * organizationalUnit_test
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
  /**
   * @remarks
   * The organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      organizationalUnitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitDescriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitDescriptionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOrganizationalUnitDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateOrganizationalUnitDescriptionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitParentIdRequest extends $dara.Model {
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
  /**
   * @remarks
   * The organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitParentIdResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitParentIdResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOrganizationalUnitParentIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateOrganizationalUnitParentIdResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The custom extended fields.
   */
  customFields?: UpdateUserRequestCustomFields[];
  /**
   * @remarks
   * The display name of the account. The display name can be up to 64 characters in length.
   * 
   * @example
   * test_name
   */
  displayName?: string;
  /**
   * @remarks
   * The email address. The prefix of the email address can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Specifies whether the email address is verified. This parameter must be specified if you specify Email. You can set this parameter to true if you have no special business requirements.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
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
  /**
   * @remarks
   * The mobile number. The mobile number must be 6 to 15 digits in length.
   * 
   * @example
   * 156xxxxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Specifies whether the mobile number is verified. This parameter must be specified if you specify PhoneNumber. You can set this parameter to true if you have no special business requirements.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The area code of the mobile number. For example, the area code of a mobile number in the Chinese mainland is 86 without 00 or the plus sign (+). This parameter must be specified if you specify PhoneNumber.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The name of the account. The name can be up to 64 characters in length. It can contain letters, digits, and the following special characters: _ . @ -
   * 
   * @example
   * username_test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'CustomFields',
      displayName: 'DisplayName',
      email: 'Email',
      emailVerified: 'EmailVerified',
      instanceId: 'InstanceId',
      phoneNumber: 'PhoneNumber',
      phoneNumberVerified: 'PhoneNumberVerified',
      phoneRegion: 'PhoneRegion',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'array', 'itemType': UpdateUserRequestCustomFields },
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      instanceId: 'string',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account. The value can be up to 256 characters in length.
   * 
   * @example
   * this is a test.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDescriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDescriptionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserDescriptionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserPasswordRequest extends $dara.Model {
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
  /**
   * @remarks
   * The new password of the account. For more information about the password format, see the "Password Policies" topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to enable forcible password change upon first logon. Default value: disabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The methods for receiving password notifications.
   * 
   * @example
   * sms
   */
  userNotificationChannels?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
      passwordForcedUpdateStatus: 'PasswordForcedUpdateStatus',
      userId: 'UserId',
      userNotificationChannels: 'UserNotificationChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      password: 'string',
      passwordForcedUpdateStatus: 'string',
      userId: 'string',
      userNotificationChannels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userNotificationChannels)) {
      $dara.Model.validateArray(this.userNotificationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserPasswordResponseBody extends $dara.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserPasswordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserPasswordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eiam", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Adds an Employee Identity and Access Management (EIAM) account to multiple EIAM organizations of Identity as a Service (IDaaS). If the account already exists in the organizational unit, the system directly returns a success response.
   * 
   * @param request - AddUserToOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToOrganizationalUnitsResponse
   */
  async addUserToOrganizationalUnitsWithOptions(request: AddUserToOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<AddUserToOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserToOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddUserToOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new AddUserToOrganizationalUnitsResponse({}));
  }

  /**
   * Adds an Employee Identity and Access Management (EIAM) account to multiple EIAM organizations of Identity as a Service (IDaaS). If the account already exists in the organizational unit, the system directly returns a success response.
   * 
   * @param request - AddUserToOrganizationalUnitsRequest
   * @returns AddUserToOrganizationalUnitsResponse
   */
  async addUserToOrganizationalUnits(request: AddUserToOrganizationalUnitsRequest): Promise<AddUserToOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserToOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Adds Employee Identity and Access Management (EIAM) accounts to an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - AddUsersToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUsersToGroupResponse
   */
  async addUsersToGroupWithOptions(request: AddUsersToGroupRequest, runtime: $dara.RuntimeOptions): Promise<AddUsersToGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUsersToGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddUsersToGroupResponse>(await this.callApi(params, req, runtime), new AddUsersToGroupResponse({}));
  }

  /**
   * Adds Employee Identity and Access Management (EIAM) accounts to an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - AddUsersToGroupRequest
   * @returns AddUsersToGroupResponse
   */
  async addUsersToGroup(request: AddUsersToGroupRequest): Promise<AddUsersToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUsersToGroupWithOptions(request, runtime);
  }

  /**
   * Grants the permissions to access an application to multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - AuthorizeApplicationToGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationToGroupsResponse
   */
  async authorizeApplicationToGroupsWithOptions(request: AuthorizeApplicationToGroupsRequest, runtime: $dara.RuntimeOptions): Promise<AuthorizeApplicationToGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeApplicationToGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AuthorizeApplicationToGroupsResponse>(await this.callApi(params, req, runtime), new AuthorizeApplicationToGroupsResponse({}));
  }

  /**
   * Grants the permissions to access an application to multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - AuthorizeApplicationToGroupsRequest
   * @returns AuthorizeApplicationToGroupsResponse
   */
  async authorizeApplicationToGroups(request: AuthorizeApplicationToGroupsRequest): Promise<AuthorizeApplicationToGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeApplicationToGroupsWithOptions(request, runtime);
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - AuthorizeApplicationToOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationToOrganizationalUnitsResponse
   */
  async authorizeApplicationToOrganizationalUnitsWithOptions(request: AuthorizeApplicationToOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<AuthorizeApplicationToOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeApplicationToOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AuthorizeApplicationToOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new AuthorizeApplicationToOrganizationalUnitsResponse({}));
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - AuthorizeApplicationToOrganizationalUnitsRequest
   * @returns AuthorizeApplicationToOrganizationalUnitsResponse
   */
  async authorizeApplicationToOrganizationalUnits(request: AuthorizeApplicationToOrganizationalUnitsRequest): Promise<AuthorizeApplicationToOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeApplicationToOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - AuthorizeApplicationToUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationToUsersResponse
   */
  async authorizeApplicationToUsersWithOptions(request: AuthorizeApplicationToUsersRequest, runtime: $dara.RuntimeOptions): Promise<AuthorizeApplicationToUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeApplicationToUsers",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AuthorizeApplicationToUsersResponse>(await this.callApi(params, req, runtime), new AuthorizeApplicationToUsersResponse({}));
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - AuthorizeApplicationToUsersRequest
   * @returns AuthorizeApplicationToUsersResponse
   */
  async authorizeApplicationToUsers(request: AuthorizeApplicationToUsersRequest): Promise<AuthorizeApplicationToUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeApplicationToUsersWithOptions(request, runtime);
  }

  /**
   * Adds an application to an Enterprise Identity Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @remarks
   * IDaaS EIAM supports the following two standard single sign-on (SSO) protocols for adding applications: SAML 2.0 and OIDC. You can select an SSO protocol based on your business requirements when you add an application. You cannot change the SSO protocol that you selected after the application is added.
   * 
   * @param request - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
  async createApplicationWithOptions(request: CreateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<CreateApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.applicationSourceType)) {
      query["ApplicationSourceType"] = request.applicationSourceType;
    }

    if (!$dara.isNull(request.applicationTemplateId)) {
      query["ApplicationTemplateId"] = request.applicationTemplateId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    if (!$dara.isNull(request.ssoType)) {
      query["SsoType"] = request.ssoType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateApplicationResponse>(await this.callApi(params, req, runtime), new CreateApplicationResponse({}));
  }

  /**
   * Adds an application to an Enterprise Identity Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @remarks
   * IDaaS EIAM supports the following two standard single sign-on (SSO) protocols for adding applications: SAML 2.0 and OIDC. You can select an SSO protocol based on your business requirements when you add an application. You cannot change the SSO protocol that you selected after the application is added.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * Creates a client key for an Employee Identity and Access Management (EIAM) application. An EIAM application can have up to two client keys.
   * 
   * @param request - CreateApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationClientSecretResponse
   */
  async createApplicationClientSecretWithOptions(request: CreateApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<CreateApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new CreateApplicationClientSecretResponse({}));
  }

  /**
   * Creates a client key for an Employee Identity and Access Management (EIAM) application. An EIAM application can have up to two client keys.
   * 
   * @param request - CreateApplicationClientSecretRequest
   * @returns CreateApplicationClientSecretResponse
   */
  async createApplicationClientSecret(request: CreateApplicationClientSecretRequest): Promise<CreateApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * 创建域名。
   * 
   * @param request - CreateDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(request: CreateDomainRequest, runtime: $dara.RuntimeOptions): Promise<CreateDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.filing)) {
      query["Filing"] = request.filing;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateDomainResponse>(await this.callApi(params, req, runtime), new CreateDomainResponse({}));
  }

  /**
   * 创建域名。
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  /**
   * 创建域名代理Token。
   * 
   * @param request - CreateDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainProxyTokenResponse
   */
  async createDomainProxyTokenWithOptions(request: CreateDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<CreateDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new CreateDomainProxyTokenResponse({}));
  }

  /**
   * 创建域名代理Token。
   * 
   * @param request - CreateDomainProxyTokenRequest
   * @returns CreateDomainProxyTokenResponse
   */
  async createDomainProxyToken(request: CreateDomainProxyTokenRequest): Promise<CreateDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * Creates an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: CreateGroupRequest, runtime: $dara.RuntimeOptions): Promise<CreateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupExternalId)) {
      query["GroupExternalId"] = request.groupExternalId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateGroupResponse>(await this.callApi(params, req, runtime), new CreateGroupResponse({}));
  }

  /**
   * Creates an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * 创建身份提供方
   * 
   * @param request - CreateIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdentityProviderResponse
   */
  async createIdentityProviderWithOptions(request: CreateIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<CreateIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authnConfig)) {
      query["AuthnConfig"] = request.authnConfig;
    }

    if (!$dara.isNull(request.autoCreateUserConfig)) {
      query["AutoCreateUserConfig"] = request.autoCreateUserConfig;
    }

    if (!$dara.isNull(request.autoUpdateUserConfig)) {
      query["AutoUpdateUserConfig"] = request.autoUpdateUserConfig;
    }

    if (!$dara.isNull(request.bindingConfig)) {
      query["BindingConfig"] = request.bindingConfig;
    }

    if (!$dara.isNull(request.dingtalkAppConfig)) {
      query["DingtalkAppConfig"] = request.dingtalkAppConfig;
    }

    if (!$dara.isNull(request.identityProviderName)) {
      query["IdentityProviderName"] = request.identityProviderName;
    }

    if (!$dara.isNull(request.identityProviderType)) {
      query["IdentityProviderType"] = request.identityProviderType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.larkConfig)) {
      query["LarkConfig"] = request.larkConfig;
    }

    if (!$dara.isNull(request.ldapConfig)) {
      query["LdapConfig"] = request.ldapConfig;
    }

    if (!$dara.isNull(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.oidcConfig)) {
      query["OidcConfig"] = request.oidcConfig;
    }

    if (!$dara.isNull(request.udPullConfig)) {
      query["UdPullConfig"] = request.udPullConfig;
    }

    if (!$dara.isNull(request.udPushConfig)) {
      query["UdPushConfig"] = request.udPushConfig;
    }

    if (!$dara.isNull(request.weComConfig)) {
      query["WeComConfig"] = request.weComConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIdentityProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateIdentityProviderResponse>(await this.callApi(params, req, runtime), new CreateIdentityProviderResponse({}));
  }

  /**
   * 创建身份提供方
   * 
   * @param request - CreateIdentityProviderRequest
   * @returns CreateIdentityProviderResponse
   */
  async createIdentityProvider(request: CreateIdentityProviderRequest): Promise<CreateIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Creates an instance based on which all capabilities of Identity as a Service (IDaaS) Enterprise Identity and Access Management (EIAM) are provided.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * Creates an instance based on which all capabilities of Identity as a Service (IDaaS) Enterprise Identity and Access Management (EIAM) are provided.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * 创建一个专属网络端点。
   * 
   * @param request - CreateNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkAccessEndpointResponse
   */
  async createNetworkAccessEndpointWithOptions(request: CreateNetworkAccessEndpointRequest, runtime: $dara.RuntimeOptions): Promise<CreateNetworkAccessEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointName)) {
      query["NetworkAccessEndpointName"] = request.networkAccessEndpointName;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new CreateNetworkAccessEndpointResponse({}));
  }

  /**
   * 创建一个专属网络端点。
   * 
   * @param request - CreateNetworkAccessEndpointRequest
   * @returns CreateNetworkAccessEndpointResponse
   */
  async createNetworkAccessEndpoint(request: CreateNetworkAccessEndpointRequest): Promise<CreateNetworkAccessEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * Creates an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrganizationalUnitResponse
   */
  async createOrganizationalUnitWithOptions(request: CreateOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<CreateOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitExternalId)) {
      query["OrganizationalUnitExternalId"] = request.organizationalUnitExternalId;
    }

    if (!$dara.isNull(request.organizationalUnitName)) {
      query["OrganizationalUnitName"] = request.organizationalUnitName;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new CreateOrganizationalUnitResponse({}));
  }

  /**
   * Creates an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateOrganizationalUnitRequest
   * @returns CreateOrganizationalUnitResponse
   */
  async createOrganizationalUnit(request: CreateOrganizationalUnitRequest): Promise<CreateOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Creates an account in an Identity as a Service (IDaaS) Enterprise Identity Access Management (EIAM) instance.
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: CreateUserRequest, runtime: $dara.RuntimeOptions): Promise<CreateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customFields)) {
      query["CustomFields"] = request.customFields;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.emailVerified)) {
      query["EmailVerified"] = request.emailVerified;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordInitializationConfig)) {
      query["PasswordInitializationConfig"] = request.passwordInitializationConfig;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.phoneNumberVerified)) {
      query["PhoneNumberVerified"] = request.phoneNumberVerified;
    }

    if (!$dara.isNull(request.phoneRegion)) {
      query["PhoneRegion"] = request.phoneRegion;
    }

    if (!$dara.isNull(request.primaryOrganizationalUnitId)) {
      query["PrimaryOrganizationalUnitId"] = request.primaryOrganizationalUnitId;
    }

    if (!$dara.isNull(request.userExternalId)) {
      query["UserExternalId"] = request.userExternalId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateUserResponse>(await this.callApi(params, req, runtime), new CreateUserResponse({}));
  }

  /**
   * Creates an account in an Identity as a Service (IDaaS) Enterprise Identity Access Management (EIAM) instance.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) application.
   * 
   * @remarks
   * Make sure that the EIAM application that you want to delete is not used before you delete the EIAM application. After you delete the EIAM application, all configurations are deleted and cannot be restored.
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: DeleteApplicationRequest, runtime: $dara.RuntimeOptions): Promise<DeleteApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteApplicationResponse>(await this.callApi(params, req, runtime), new DeleteApplicationResponse({}));
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) application.
   * 
   * @remarks
   * Make sure that the EIAM application that you want to delete is not used before you delete the EIAM application. After you delete the EIAM application, all configurations are deleted and cannot be restored.
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * Deletes a client key for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DeleteApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationClientSecretResponse
   */
  async deleteApplicationClientSecretWithOptions(request: DeleteApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<DeleteApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new DeleteApplicationClientSecretResponse({}));
  }

  /**
   * Deletes a client key for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DeleteApplicationClientSecretRequest
   * @returns DeleteApplicationClientSecretResponse
   */
  async deleteApplicationClientSecret(request: DeleteApplicationClientSecretRequest): Promise<DeleteApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * 删除域名。
   * 
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  /**
   * 删除域名。
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * 删除指定域名代理Token，删除之前请保证代理Token处于禁用状态。
   * 
   * @param request - DeleteDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainProxyTokenResponse
   */
  async deleteDomainProxyTokenWithOptions(request: DeleteDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new DeleteDomainProxyTokenResponse({}));
  }

  /**
   * 删除指定域名代理Token，删除之前请保证代理Token处于禁用状态。
   * 
   * @param request - DeleteDomainProxyTokenRequest
   * @returns DeleteDomainProxyTokenResponse
   */
  async deleteDomainProxyToken(request: DeleteDomainProxyTokenRequest): Promise<DeleteDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * Deletes the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - DeleteGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $dara.RuntimeOptions): Promise<DeleteGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteGroupResponse>(await this.callApi(params, req, runtime), new DeleteGroupResponse({}));
  }

  /**
   * Deletes the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * 删除身份提供方
   * 
   * @param request - DeleteIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIdentityProviderResponse
   */
  async deleteIdentityProviderWithOptions(request: DeleteIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<DeleteIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIdentityProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteIdentityProviderResponse>(await this.callApi(params, req, runtime), new DeleteIdentityProviderResponse({}));
  }

  /**
   * 删除身份提供方
   * 
   * @param request - DeleteIdentityProviderRequest
   * @returns DeleteIdentityProviderResponse
   */
  async deleteIdentityProvider(request: DeleteIdentityProviderRequest): Promise<DeleteIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Deletes an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS) that you do not need.
   * 
   * @remarks
   * Make sure that the instance to be deleted is no longer used. If the instance is deleted, all data related to the instance will be deleted.
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  /**
   * Deletes an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS) that you do not need.
   * 
   * @remarks
   * Make sure that the instance to be deleted is no longer used. If the instance is deleted, all data related to the instance will be deleted.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * 删除一个专属网络端点。
   * 
   * @param request - DeleteNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkAccessEndpointResponse
   */
  async deleteNetworkAccessEndpointWithOptions(request: DeleteNetworkAccessEndpointRequest, runtime: $dara.RuntimeOptions): Promise<DeleteNetworkAccessEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new DeleteNetworkAccessEndpointResponse({}));
  }

  /**
   * 删除一个专属网络端点。
   * 
   * @param request - DeleteNetworkAccessEndpointRequest
   * @returns DeleteNetworkAccessEndpointResponse
   */
  async deleteNetworkAccessEndpoint(request: DeleteNetworkAccessEndpointRequest): Promise<DeleteNetworkAccessEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * Deletes an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the organization has EIAM accounts or child organizations, the delete operation fails.
   * 
   * @param request - DeleteOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnitWithOptions(request: DeleteOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<DeleteOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new DeleteOrganizationalUnitResponse({}));
  }

  /**
   * Deletes an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the organization has EIAM accounts or child organizations, the delete operation fails.
   * 
   * @param request - DeleteOrganizationalUnitRequest
   * @returns DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnit(request: DeleteOrganizationalUnitRequest): Promise<DeleteOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Delete organizational unit information, forcibly deleting all accounts and sub-organizations beneath it
   * 
   * @param request - DeleteOrganizationalUnitChildrenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOrganizationalUnitChildrenResponse
   */
  async deleteOrganizationalUnitChildrenWithOptions(request: DeleteOrganizationalUnitChildrenRequest, runtime: $dara.RuntimeOptions): Promise<DeleteOrganizationalUnitChildrenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOrganizationalUnitChildren",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteOrganizationalUnitChildrenResponse>(await this.callApi(params, req, runtime), new DeleteOrganizationalUnitChildrenResponse({}));
  }

  /**
   * Delete organizational unit information, forcibly deleting all accounts and sub-organizations beneath it
   * 
   * @param request - DeleteOrganizationalUnitChildrenRequest
   * @returns DeleteOrganizationalUnitChildrenResponse
   */
  async deleteOrganizationalUnitChildren(request: DeleteOrganizationalUnitChildrenRequest): Promise<DeleteOrganizationalUnitChildrenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOrganizationalUnitChildrenWithOptions(request, runtime);
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The information related to the account is cleared.
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $dara.RuntimeOptions): Promise<DeleteUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The information related to the account is cleared.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * Disables an enabled Employee Identity and Access Management (EIAM) application. All features of the EIAM application cannot be used if you disable the EIAM application.
   * 
   * @remarks
   * All features of the EIAM application cannot be used if you disable the EIAM application, such as single sign-on (SSO) and account synchronization. Make sure that you acknowledge the risks of the delete operation.
   * 
   * @param request - DisableApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationResponse
   */
  async disableApplicationWithOptions(request: DisableApplicationRequest, runtime: $dara.RuntimeOptions): Promise<DisableApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisableApplicationResponse>(await this.callApi(params, req, runtime), new DisableApplicationResponse({}));
  }

  /**
   * Disables an enabled Employee Identity and Access Management (EIAM) application. All features of the EIAM application cannot be used if you disable the EIAM application.
   * 
   * @remarks
   * All features of the EIAM application cannot be used if you disable the EIAM application, such as single sign-on (SSO) and account synchronization. Make sure that you acknowledge the risks of the delete operation.
   * 
   * @param request - DisableApplicationRequest
   * @returns DisableApplicationResponse
   */
  async disableApplication(request: DisableApplicationRequest): Promise<DisableApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationWithOptions(request, runtime);
  }

  /**
   * Disables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationApiInvokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationApiInvokeResponse
   */
  async disableApplicationApiInvokeWithOptions(request: DisableApplicationApiInvokeRequest, runtime: $dara.RuntimeOptions): Promise<DisableApplicationApiInvokeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationApiInvoke",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisableApplicationApiInvokeResponse>(await this.callApi(params, req, runtime), new DisableApplicationApiInvokeResponse({}));
  }

  /**
   * Disables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationApiInvokeRequest
   * @returns DisableApplicationApiInvokeResponse
   */
  async disableApplicationApiInvoke(request: DisableApplicationApiInvokeRequest): Promise<DisableApplicationApiInvokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationApiInvokeWithOptions(request, runtime);
  }

  /**
   * Disables a client key of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationClientSecretResponse
   */
  async disableApplicationClientSecretWithOptions(request: DisableApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<DisableApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisableApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new DisableApplicationClientSecretResponse({}));
  }

  /**
   * Disables a client key of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationClientSecretRequest
   * @returns DisableApplicationClientSecretResponse
   */
  async disableApplicationClientSecret(request: DisableApplicationClientSecretRequest): Promise<DisableApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * Disables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - DisableApplicationProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationProvisioningResponse
   */
  async disableApplicationProvisioningWithOptions(request: DisableApplicationProvisioningRequest, runtime: $dara.RuntimeOptions): Promise<DisableApplicationProvisioningResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationProvisioning",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisableApplicationProvisioningResponse>(await this.callApi(params, req, runtime), new DisableApplicationProvisioningResponse({}));
  }

  /**
   * Disables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - DisableApplicationProvisioningRequest
   * @returns DisableApplicationProvisioningResponse
   */
  async disableApplicationProvisioning(request: DisableApplicationProvisioningRequest): Promise<DisableApplicationProvisioningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationProvisioningWithOptions(request, runtime);
  }

  /**
   * 禁用应用SSO能力
   * 
   * @param request - DisableApplicationSsoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationSsoResponse
   */
  async disableApplicationSsoWithOptions(request: DisableApplicationSsoRequest, runtime: $dara.RuntimeOptions): Promise<DisableApplicationSsoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationSso",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisableApplicationSsoResponse>(await this.callApi(params, req, runtime), new DisableApplicationSsoResponse({}));
  }

  /**
   * 禁用应用SSO能力
   * 
   * @param request - DisableApplicationSsoRequest
   * @returns DisableApplicationSsoResponse
   */
  async disableApplicationSso(request: DisableApplicationSsoRequest): Promise<DisableApplicationSsoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableApplicationSsoWithOptions(request, runtime);
  }

  /**
   * 禁用指定域名代理Token。
   * 
   * @param request - DisableDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDomainProxyTokenResponse
   */
  async disableDomainProxyTokenWithOptions(request: DisableDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<DisableDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisableDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new DisableDomainProxyTokenResponse({}));
  }

  /**
   * 禁用指定域名代理Token。
   * 
   * @param request - DisableDomainProxyTokenRequest
   * @returns DisableDomainProxyTokenResponse
   */
  async disableDomainProxyToken(request: DisableDomainProxyTokenRequest): Promise<DisableDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * 禁用同步入
   * 
   * @param request - DisableIdentityProviderUdPullRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableIdentityProviderUdPullResponse
   */
  async disableIdentityProviderUdPullWithOptions(request: DisableIdentityProviderUdPullRequest, runtime: $dara.RuntimeOptions): Promise<DisableIdentityProviderUdPullResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableIdentityProviderUdPull",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisableIdentityProviderUdPullResponse>(await this.callApi(params, req, runtime), new DisableIdentityProviderUdPullResponse({}));
  }

  /**
   * 禁用同步入
   * 
   * @param request - DisableIdentityProviderUdPullRequest
   * @returns DisableIdentityProviderUdPullResponse
   */
  async disableIdentityProviderUdPull(request: DisableIdentityProviderUdPullRequest): Promise<DisableIdentityProviderUdPullResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableIdentityProviderUdPullWithOptions(request, runtime);
  }

  /**
   * 关闭初始化域名自动跳转。
   * 
   * @param request - DisableInitDomainAutoRedirectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableInitDomainAutoRedirectResponse
   */
  async disableInitDomainAutoRedirectWithOptions(request: DisableInitDomainAutoRedirectRequest, runtime: $dara.RuntimeOptions): Promise<DisableInitDomainAutoRedirectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableInitDomainAutoRedirect",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisableInitDomainAutoRedirectResponse>(await this.callApi(params, req, runtime), new DisableInitDomainAutoRedirectResponse({}));
  }

  /**
   * 关闭初始化域名自动跳转。
   * 
   * @param request - DisableInitDomainAutoRedirectRequest
   * @returns DisableInitDomainAutoRedirectResponse
   */
  async disableInitDomainAutoRedirect(request: DisableInitDomainAutoRedirectRequest): Promise<DisableInitDomainAutoRedirectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableInitDomainAutoRedirectWithOptions(request, runtime);
  }

  /**
   * Disables an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account. If the account is disabled, a success message is returned.
   * 
   * @param request - DisableUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableUserResponse
   */
  async disableUserWithOptions(request: DisableUserRequest, runtime: $dara.RuntimeOptions): Promise<DisableUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DisableUserResponse>(await this.callApi(params, req, runtime), new DisableUserResponse({}));
  }

  /**
   * Disables an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account. If the account is disabled, a success message is returned.
   * 
   * @param request - DisableUserRequest
   * @returns DisableUserResponse
   */
  async disableUser(request: DisableUserRequest): Promise<DisableUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableUserWithOptions(request, runtime);
  }

  /**
   * Enables a disabled Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationResponse
   */
  async enableApplicationWithOptions(request: EnableApplicationRequest, runtime: $dara.RuntimeOptions): Promise<EnableApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EnableApplicationResponse>(await this.callApi(params, req, runtime), new EnableApplicationResponse({}));
  }

  /**
   * Enables a disabled Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationRequest
   * @returns EnableApplicationResponse
   */
  async enableApplication(request: EnableApplicationRequest): Promise<EnableApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationWithOptions(request, runtime);
  }

  /**
   * Enables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationApiInvokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationApiInvokeResponse
   */
  async enableApplicationApiInvokeWithOptions(request: EnableApplicationApiInvokeRequest, runtime: $dara.RuntimeOptions): Promise<EnableApplicationApiInvokeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationApiInvoke",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EnableApplicationApiInvokeResponse>(await this.callApi(params, req, runtime), new EnableApplicationApiInvokeResponse({}));
  }

  /**
   * Enables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationApiInvokeRequest
   * @returns EnableApplicationApiInvokeResponse
   */
  async enableApplicationApiInvoke(request: EnableApplicationApiInvokeRequest): Promise<EnableApplicationApiInvokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationApiInvokeWithOptions(request, runtime);
  }

  /**
   * Enables the client key of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationClientSecretResponse
   */
  async enableApplicationClientSecretWithOptions(request: EnableApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<EnableApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EnableApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new EnableApplicationClientSecretResponse({}));
  }

  /**
   * Enables the client key of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationClientSecretRequest
   * @returns EnableApplicationClientSecretResponse
   */
  async enableApplicationClientSecret(request: EnableApplicationClientSecretRequest): Promise<EnableApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * Enables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationProvisioningResponse
   */
  async enableApplicationProvisioningWithOptions(request: EnableApplicationProvisioningRequest, runtime: $dara.RuntimeOptions): Promise<EnableApplicationProvisioningResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationProvisioning",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EnableApplicationProvisioningResponse>(await this.callApi(params, req, runtime), new EnableApplicationProvisioningResponse({}));
  }

  /**
   * Enables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationProvisioningRequest
   * @returns EnableApplicationProvisioningResponse
   */
  async enableApplicationProvisioning(request: EnableApplicationProvisioningRequest): Promise<EnableApplicationProvisioningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationProvisioningWithOptions(request, runtime);
  }

  /**
   * 启用应用SSO能力
   * 
   * @param request - EnableApplicationSsoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationSsoResponse
   */
  async enableApplicationSsoWithOptions(request: EnableApplicationSsoRequest, runtime: $dara.RuntimeOptions): Promise<EnableApplicationSsoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationSso",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EnableApplicationSsoResponse>(await this.callApi(params, req, runtime), new EnableApplicationSsoResponse({}));
  }

  /**
   * 启用应用SSO能力
   * 
   * @param request - EnableApplicationSsoRequest
   * @returns EnableApplicationSsoResponse
   */
  async enableApplicationSso(request: EnableApplicationSsoRequest): Promise<EnableApplicationSsoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableApplicationSsoWithOptions(request, runtime);
  }

  /**
   * 启用指定域名代理Token。
   * 
   * @param request - EnableDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDomainProxyTokenResponse
   */
  async enableDomainProxyTokenWithOptions(request: EnableDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<EnableDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EnableDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new EnableDomainProxyTokenResponse({}));
  }

  /**
   * 启用指定域名代理Token。
   * 
   * @param request - EnableDomainProxyTokenRequest
   * @returns EnableDomainProxyTokenResponse
   */
  async enableDomainProxyToken(request: EnableDomainProxyTokenRequest): Promise<EnableDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * 启用同步入
   * 
   * @param request - EnableIdentityProviderUdPullRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableIdentityProviderUdPullResponse
   */
  async enableIdentityProviderUdPullWithOptions(request: EnableIdentityProviderUdPullRequest, runtime: $dara.RuntimeOptions): Promise<EnableIdentityProviderUdPullResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableIdentityProviderUdPull",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EnableIdentityProviderUdPullResponse>(await this.callApi(params, req, runtime), new EnableIdentityProviderUdPullResponse({}));
  }

  /**
   * 启用同步入
   * 
   * @param request - EnableIdentityProviderUdPullRequest
   * @returns EnableIdentityProviderUdPullResponse
   */
  async enableIdentityProviderUdPull(request: EnableIdentityProviderUdPullRequest): Promise<EnableIdentityProviderUdPullResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableIdentityProviderUdPullWithOptions(request, runtime);
  }

  /**
   * 开启初始化域名自动跳转。开启后，访问初始化域名将会自动跳转至默认域名。
   * 
   * @param request - EnableInitDomainAutoRedirectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableInitDomainAutoRedirectResponse
   */
  async enableInitDomainAutoRedirectWithOptions(request: EnableInitDomainAutoRedirectRequest, runtime: $dara.RuntimeOptions): Promise<EnableInitDomainAutoRedirectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableInitDomainAutoRedirect",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EnableInitDomainAutoRedirectResponse>(await this.callApi(params, req, runtime), new EnableInitDomainAutoRedirectResponse({}));
  }

  /**
   * 开启初始化域名自动跳转。开启后，访问初始化域名将会自动跳转至默认域名。
   * 
   * @param request - EnableInitDomainAutoRedirectRequest
   * @returns EnableInitDomainAutoRedirectResponse
   */
  async enableInitDomainAutoRedirect(request: EnableInitDomainAutoRedirectRequest): Promise<EnableInitDomainAutoRedirectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableInitDomainAutoRedirectWithOptions(request, runtime);
  }

  /**
   * Enables an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - EnableUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableUserResponse
   */
  async enableUserWithOptions(request: EnableUserRequest, runtime: $dara.RuntimeOptions): Promise<EnableUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<EnableUserResponse>(await this.callApi(params, req, runtime), new EnableUserResponse({}));
  }

  /**
   * Enables an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - EnableUserRequest
   * @returns EnableUserResponse
   */
  async enableUser(request: EnableUserRequest): Promise<EnableUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableUserWithOptions(request, runtime);
  }

  /**
   * Queries the details of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
  async getApplicationWithOptions(request: GetApplicationRequest, runtime: $dara.RuntimeOptions): Promise<GetApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetApplicationResponse>(await this.callApi(params, req, runtime), new GetApplicationResponse({}));
  }

  /**
   * Queries the details of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: GetApplicationRequest): Promise<GetApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the permissions of the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationGrantScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationGrantScopeResponse
   */
  async getApplicationGrantScopeWithOptions(request: GetApplicationGrantScopeRequest, runtime: $dara.RuntimeOptions): Promise<GetApplicationGrantScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationGrantScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetApplicationGrantScopeResponse>(await this.callApi(params, req, runtime), new GetApplicationGrantScopeResponse({}));
  }

  /**
   * Queries the permissions of the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationGrantScopeRequest
   * @returns GetApplicationGrantScopeResponse
   */
  async getApplicationGrantScope(request: GetApplicationGrantScopeRequest): Promise<GetApplicationGrantScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationGrantScopeWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetApplicationProvisioningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationProvisioningConfigResponse
   */
  async getApplicationProvisioningConfigWithOptions(request: GetApplicationProvisioningConfigRequest, runtime: $dara.RuntimeOptions): Promise<GetApplicationProvisioningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationProvisioningConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetApplicationProvisioningConfigResponse>(await this.callApi(params, req, runtime), new GetApplicationProvisioningConfigResponse({}));
  }

  /**
   * Queries the configuration of the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetApplicationProvisioningConfigRequest
   * @returns GetApplicationProvisioningConfigResponse
   */
  async getApplicationProvisioningConfig(request: GetApplicationProvisioningConfigRequest): Promise<GetApplicationProvisioningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationProvisioningConfigWithOptions(request, runtime);
  }

  /**
   * Queries the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - GetApplicationProvisioningScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScopeWithOptions(request: GetApplicationProvisioningScopeRequest, runtime: $dara.RuntimeOptions): Promise<GetApplicationProvisioningScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationProvisioningScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetApplicationProvisioningScopeResponse>(await this.callApi(params, req, runtime), new GetApplicationProvisioningScopeResponse({}));
  }

  /**
   * Queries the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - GetApplicationProvisioningScopeRequest
   * @returns GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScope(request: GetApplicationProvisioningScopeRequest): Promise<GetApplicationProvisioningScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationProvisioningScopeWithOptions(request, runtime);
  }

  /**
   * Queries the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetApplicationSsoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationSsoConfigResponse
   */
  async getApplicationSsoConfigWithOptions(request: GetApplicationSsoConfigRequest, runtime: $dara.RuntimeOptions): Promise<GetApplicationSsoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationSsoConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetApplicationSsoConfigResponse>(await this.callApi(params, req, runtime), new GetApplicationSsoConfigResponse({}));
  }

  /**
   * Queries the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetApplicationSsoConfigRequest
   * @returns GetApplicationSsoConfigResponse
   */
  async getApplicationSsoConfig(request: GetApplicationSsoConfigRequest): Promise<GetApplicationSsoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationSsoConfigWithOptions(request, runtime);
  }

  /**
   * 查询一个域名的详细信息。
   * 
   * @param request - GetDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainResponse
   */
  async getDomainWithOptions(request: GetDomainRequest, runtime: $dara.RuntimeOptions): Promise<GetDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetDomainResponse>(await this.callApi(params, req, runtime), new GetDomainResponse({}));
  }

  /**
   * 查询一个域名的详细信息。
   * 
   * @param request - GetDomainRequest
   * @returns GetDomainResponse
   */
  async getDomain(request: GetDomainRequest): Promise<GetDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDomainWithOptions(request, runtime);
  }

  /**
   * 查看域名的DNS Challenge记录。
   * 
   * @param request - GetDomainDnsChallengeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainDnsChallengeResponse
   */
  async getDomainDnsChallengeWithOptions(request: GetDomainDnsChallengeRequest, runtime: $dara.RuntimeOptions): Promise<GetDomainDnsChallengeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomainDnsChallenge",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetDomainDnsChallengeResponse>(await this.callApi(params, req, runtime), new GetDomainDnsChallengeResponse({}));
  }

  /**
   * 查看域名的DNS Challenge记录。
   * 
   * @param request - GetDomainDnsChallengeRequest
   * @returns GetDomainDnsChallengeResponse
   */
  async getDomainDnsChallenge(request: GetDomainDnsChallengeRequest): Promise<GetDomainDnsChallengeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDomainDnsChallengeWithOptions(request, runtime);
  }

  /**
   * Queries the forgot password configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetForgetPasswordConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetForgetPasswordConfigurationResponse
   */
  async getForgetPasswordConfigurationWithOptions(request: GetForgetPasswordConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<GetForgetPasswordConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetForgetPasswordConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetForgetPasswordConfigurationResponse>(await this.callApi(params, req, runtime), new GetForgetPasswordConfigurationResponse({}));
  }

  /**
   * Queries the forgot password configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetForgetPasswordConfigurationRequest
   * @returns GetForgetPasswordConfigurationResponse
   */
  async getForgetPasswordConfiguration(request: GetForgetPasswordConfigurationRequest): Promise<GetForgetPasswordConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getForgetPasswordConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(request: GetGroupRequest, runtime: $dara.RuntimeOptions): Promise<GetGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetGroupResponse>(await this.callApi(params, req, runtime), new GetGroupResponse({}));
  }

  /**
   * Queries the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: GetGroupRequest): Promise<GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * 获取身份提供方
   * 
   * @param request - GetIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProviderWithOptions(request: GetIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<GetIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetIdentityProviderResponse>(await this.callApi(params, req, runtime), new GetIdentityProviderResponse({}));
  }

  /**
   * 获取身份提供方
   * 
   * @param request - GetIdentityProviderRequest
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProvider(request: GetIdentityProviderRequest): Promise<GetIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityProviderWithOptions(request, runtime);
  }

  /**
   * 获取IdP同步入配置
   * 
   * @param request - GetIdentityProviderUdPullConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityProviderUdPullConfigurationResponse
   */
  async getIdentityProviderUdPullConfigurationWithOptions(request: GetIdentityProviderUdPullConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<GetIdentityProviderUdPullConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdentityProviderUdPullConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetIdentityProviderUdPullConfigurationResponse>(await this.callApi(params, req, runtime), new GetIdentityProviderUdPullConfigurationResponse({}));
  }

  /**
   * 获取IdP同步入配置
   * 
   * @param request - GetIdentityProviderUdPullConfigurationRequest
   * @returns GetIdentityProviderUdPullConfigurationResponse
   */
  async getIdentityProviderUdPullConfiguration(request: GetIdentityProviderUdPullConfigurationRequest): Promise<GetIdentityProviderUdPullConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIdentityProviderUdPullConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the information of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<GetInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  /**
   * Queries the information of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Query the currently effective License information of the instance
   * 
   * @remarks
   * Please ensure that your current instance is no longer in use. When the EIAM instance is deleted, all related data will be deleted.
   * 
   * @param request - GetInstanceLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceLicenseResponse
   */
  async getInstanceLicenseWithOptions(request: GetInstanceLicenseRequest, runtime: $dara.RuntimeOptions): Promise<GetInstanceLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceLicense",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetInstanceLicenseResponse>(await this.callApi(params, req, runtime), new GetInstanceLicenseResponse({}));
  }

  /**
   * Query the currently effective License information of the instance
   * 
   * @remarks
   * Please ensure that your current instance is no longer in use. When the EIAM instance is deleted, all related data will be deleted.
   * 
   * @param request - GetInstanceLicenseRequest
   * @returns GetInstanceLicenseResponse
   */
  async getInstanceLicense(request: GetInstanceLicenseRequest): Promise<GetInstanceLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceLicenseWithOptions(request, runtime);
  }

  /**
   * 查询一个专属网络端点的详细信息。
   * 
   * @param request - GetNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkAccessEndpointResponse
   */
  async getNetworkAccessEndpointWithOptions(request: GetNetworkAccessEndpointRequest, runtime: $dara.RuntimeOptions): Promise<GetNetworkAccessEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new GetNetworkAccessEndpointResponse({}));
  }

  /**
   * 查询一个专属网络端点的详细信息。
   * 
   * @param request - GetNetworkAccessEndpointRequest
   * @returns GetNetworkAccessEndpointResponse
   */
  async getNetworkAccessEndpoint(request: GetNetworkAccessEndpointRequest): Promise<GetNetworkAccessEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * Queries the information about an organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrganizationalUnitResponse
   */
  async getOrganizationalUnitWithOptions(request: GetOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<GetOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new GetOrganizationalUnitResponse({}));
  }

  /**
   * Queries the information about an organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetOrganizationalUnitRequest
   * @returns GetOrganizationalUnitResponse
   */
  async getOrganizationalUnit(request: GetOrganizationalUnitRequest): Promise<GetOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Queries the password complexity configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordComplexityConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordComplexityConfigurationResponse
   */
  async getPasswordComplexityConfigurationWithOptions(request: GetPasswordComplexityConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<GetPasswordComplexityConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordComplexityConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetPasswordComplexityConfigurationResponse>(await this.callApi(params, req, runtime), new GetPasswordComplexityConfigurationResponse({}));
  }

  /**
   * Queries the password complexity configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordComplexityConfigurationRequest
   * @returns GetPasswordComplexityConfigurationResponse
   */
  async getPasswordComplexityConfiguration(request: GetPasswordComplexityConfigurationRequest): Promise<GetPasswordComplexityConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordComplexityConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the password expiration configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordExpirationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordExpirationConfigurationResponse
   */
  async getPasswordExpirationConfigurationWithOptions(request: GetPasswordExpirationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<GetPasswordExpirationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordExpirationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetPasswordExpirationConfigurationResponse>(await this.callApi(params, req, runtime), new GetPasswordExpirationConfigurationResponse({}));
  }

  /**
   * Queries the password expiration configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordExpirationConfigurationRequest
   * @returns GetPasswordExpirationConfigurationResponse
   */
  async getPasswordExpirationConfiguration(request: GetPasswordExpirationConfigurationRequest): Promise<GetPasswordExpirationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordExpirationConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the password history configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordHistoryConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordHistoryConfigurationResponse
   */
  async getPasswordHistoryConfigurationWithOptions(request: GetPasswordHistoryConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<GetPasswordHistoryConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordHistoryConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetPasswordHistoryConfigurationResponse>(await this.callApi(params, req, runtime), new GetPasswordHistoryConfigurationResponse({}));
  }

  /**
   * Queries the password history configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordHistoryConfigurationRequest
   * @returns GetPasswordHistoryConfigurationResponse
   */
  async getPasswordHistoryConfiguration(request: GetPasswordHistoryConfigurationRequest): Promise<GetPasswordHistoryConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordHistoryConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the password initialization configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordInitializationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordInitializationConfigurationResponse
   */
  async getPasswordInitializationConfigurationWithOptions(request: GetPasswordInitializationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<GetPasswordInitializationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPasswordInitializationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetPasswordInitializationConfigurationResponse>(await this.callApi(params, req, runtime), new GetPasswordInitializationConfigurationResponse({}));
  }

  /**
   * Queries the password initialization configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordInitializationConfigurationRequest
   * @returns GetPasswordInitializationConfigurationResponse
   */
  async getPasswordInitializationConfiguration(request: GetPasswordInitializationConfigurationRequest): Promise<GetPasswordInitializationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPasswordInitializationConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the information about the root organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetRootOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRootOrganizationalUnitResponse
   */
  async getRootOrganizationalUnitWithOptions(request: GetRootOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<GetRootOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRootOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetRootOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new GetRootOrganizationalUnitResponse({}));
  }

  /**
   * Queries the information about the root organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetRootOrganizationalUnitRequest
   * @returns GetRootOrganizationalUnitResponse
   */
  async getRootOrganizationalUnit(request: GetRootOrganizationalUnitRequest): Promise<GetRootOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRootOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * 查询同步任务
   * 
   * @param request - GetSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSynchronizationJobResponse
   */
  async getSynchronizationJobWithOptions(request: GetSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<GetSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSynchronizationJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSynchronizationJobResponse>(await this.callApi(params, req, runtime), new GetSynchronizationJobResponse({}));
  }

  /**
   * 查询同步任务
   * 
   * @param request - GetSynchronizationJobRequest
   * @returns GetSynchronizationJobResponse
   */
  async getSynchronizationJob(request: GetSynchronizationJobRequest): Promise<GetSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Queries the details of an account in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: GetUserRequest, runtime: $dara.RuntimeOptions): Promise<GetUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  /**
   * Queries the details of an account in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * Queries all client keys of an Employee Identity and Access Management (EIAM) application. The returned key secret is not masked. If you want to query the key secret that is masked, call the ObtainApplicationClientSecret operation.
   * 
   * @param request - ListApplicationClientSecretsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationClientSecretsResponse
   */
  async listApplicationClientSecretsWithOptions(request: ListApplicationClientSecretsRequest, runtime: $dara.RuntimeOptions): Promise<ListApplicationClientSecretsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationClientSecrets",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListApplicationClientSecretsResponse>(await this.callApi(params, req, runtime), new ListApplicationClientSecretsResponse({}));
  }

  /**
   * Queries all client keys of an Employee Identity and Access Management (EIAM) application. The returned key secret is not masked. If you want to query the key secret that is masked, call the ObtainApplicationClientSecret operation.
   * 
   * @param request - ListApplicationClientSecretsRequest
   * @returns ListApplicationClientSecretsResponse
   */
  async listApplicationClientSecrets(request: ListApplicationClientSecretsRequest): Promise<ListApplicationClientSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationClientSecretsWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or multiple Employee Identity and Access Management (EIAM) applications by page.
   * 
   * @param request - ListApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
   */
  async listApplicationsWithOptions(request: ListApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<ListApplicationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.authorizationType)) {
      query["AuthorizationType"] = request.authorizationType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplications",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListApplicationsResponse>(await this.callApi(params, req, runtime), new ListApplicationsResponse({}));
  }

  /**
   * Queries the information about one or multiple Employee Identity and Access Management (EIAM) applications by page.
   * 
   * @param request - ListApplicationsRequest
   * @returns ListApplicationsResponse
   */
  async listApplications(request: ListApplicationsRequest): Promise<ListApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) organization can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @remarks
   * You can only query the permissions that are directly granted to the EIAM organization by calling the ListApplicationsForOrganizationalUnit operation. You can filter applications by configuring the **ApplicationIds** parameter when you call this operation.
   * 
   * @param request - ListApplicationsForOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForOrganizationalUnitResponse
   */
  async listApplicationsForOrganizationalUnitWithOptions(request: ListApplicationsForOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<ListApplicationsForOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListApplicationsForOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new ListApplicationsForOrganizationalUnitResponse({}));
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) organization can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @remarks
   * You can only query the permissions that are directly granted to the EIAM organization by calling the ListApplicationsForOrganizationalUnit operation. You can filter applications by configuring the **ApplicationIds** parameter when you call this operation.
   * 
   * @param request - ListApplicationsForOrganizationalUnitRequest
   * @returns ListApplicationsForOrganizationalUnitResponse
   */
  async listApplicationsForOrganizationalUnit(request: ListApplicationsForOrganizationalUnitRequest): Promise<ListApplicationsForOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) account can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @param request - ListApplicationsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForUserResponse
   */
  async listApplicationsForUserWithOptions(request: ListApplicationsForUserRequest, runtime: $dara.RuntimeOptions): Promise<ListApplicationsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListApplicationsForUserResponse>(await this.callApi(params, req, runtime), new ListApplicationsForUserResponse({}));
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) account can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @param request - ListApplicationsForUserRequest
   * @returns ListApplicationsForUserResponse
   */
  async listApplicationsForUser(request: ListApplicationsForUserRequest): Promise<ListApplicationsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsForUserWithOptions(request, runtime);
  }

  /**
   * 列表查询域名代理Token信息。
   * 
   * @param request - ListDomainProxyTokensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainProxyTokensResponse
   */
  async listDomainProxyTokensWithOptions(request: ListDomainProxyTokensRequest, runtime: $dara.RuntimeOptions): Promise<ListDomainProxyTokensResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomainProxyTokens",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListDomainProxyTokensResponse>(await this.callApi(params, req, runtime), new ListDomainProxyTokensResponse({}));
  }

  /**
   * 列表查询域名代理Token信息。
   * 
   * @param request - ListDomainProxyTokensRequest
   * @returns ListDomainProxyTokensResponse
   */
  async listDomainProxyTokens(request: ListDomainProxyTokensRequest): Promise<ListDomainProxyTokensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDomainProxyTokensWithOptions(request, runtime);
  }

  /**
   * 列表查询域名记录。
   * 
   * @param request - ListDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: ListDomainsRequest, runtime: $dara.RuntimeOptions): Promise<ListDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomains",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListDomainsResponse>(await this.callApi(params, req, runtime), new ListDomainsResponse({}));
  }

  /**
   * 列表查询域名记录。
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

  /**
   * 查询EIAM2.0/EIAM1.0实例列表
   * 
   * @param request - ListEiamInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEiamInstancesResponse
   */
  async listEiamInstancesWithOptions(request: ListEiamInstancesRequest, runtime: $dara.RuntimeOptions): Promise<ListEiamInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceRegionId)) {
      query["InstanceRegionId"] = request.instanceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEiamInstances",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListEiamInstancesResponse>(await this.callApi(params, req, runtime), new ListEiamInstancesResponse({}));
  }

  /**
   * 查询EIAM2.0/EIAM1.0实例列表
   * 
   * @param request - ListEiamInstancesRequest
   * @returns ListEiamInstancesResponse
   */
  async listEiamInstances(request: ListEiamInstancesRequest): Promise<ListEiamInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEiamInstancesWithOptions(request, runtime);
  }

  /**
   * 查询EIAM2.0/EIAM1.0地域列表
   * 
   * @param request - ListEiamRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEiamRegionsResponse
   */
  async listEiamRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<ListEiamRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListEiamRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListEiamRegionsResponse>(await this.callApi(params, req, runtime), new ListEiamRegionsResponse({}));
  }

  /**
   * 查询EIAM2.0/EIAM1.0地域列表
   * @returns ListEiamRegionsResponse
   */
  async listEiamRegions(): Promise<ListEiamRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEiamRegionsWithOptions(runtime);
  }

  /**
   * Queries a list of account groups in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - ListGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
  async listGroupsWithOptions(request: ListGroupsRequest, runtime: $dara.RuntimeOptions): Promise<ListGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupExternalId)) {
      query["GroupExternalId"] = request.groupExternalId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupNameStartsWith)) {
      query["GroupNameStartsWith"] = request.groupNameStartsWith;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListGroupsResponse>(await this.callApi(params, req, runtime), new ListGroupsResponse({}));
  }

  /**
   * Queries a list of account groups in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of account groups to which the permissions to access an application are granted. The returned results contain the group IDs. You can call the GetGroup operation to query the information about an account group based on the group ID.
   * 
   * @param request - ListGroupsForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForApplicationResponse
   */
  async listGroupsForApplicationWithOptions(request: ListGroupsForApplicationRequest, runtime: $dara.RuntimeOptions): Promise<ListGroupsForApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupsForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListGroupsForApplicationResponse>(await this.callApi(params, req, runtime), new ListGroupsForApplicationResponse({}));
  }

  /**
   * Queries a list of account groups to which the permissions to access an application are granted. The returned results contain the group IDs. You can call the GetGroup operation to query the information about an account group based on the group ID.
   * 
   * @param request - ListGroupsForApplicationRequest
   * @returns ListGroupsForApplicationResponse
   */
  async listGroupsForApplication(request: ListGroupsForApplicationRequest): Promise<ListGroupsForApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsForApplicationWithOptions(request, runtime);
  }

  /**
   * Queries a list of account groups to which an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) belongs.
   * 
   * @param request - ListGroupsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUserWithOptions(request: ListGroupsForUserRequest, runtime: $dara.RuntimeOptions): Promise<ListGroupsForUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupsForUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListGroupsForUserResponse>(await this.callApi(params, req, runtime), new ListGroupsForUserResponse({}));
  }

  /**
   * Queries a list of account groups to which an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) belongs.
   * 
   * @param request - ListGroupsForUserRequest
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUser(request: ListGroupsForUserRequest): Promise<ListGroupsForUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupsForUserWithOptions(request, runtime);
  }

  /**
   * 查询身份提供方
   * 
   * @param request - ListIdentityProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdentityProvidersResponse
   */
  async listIdentityProvidersWithOptions(request: ListIdentityProvidersRequest, runtime: $dara.RuntimeOptions): Promise<ListIdentityProvidersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdentityProviders",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListIdentityProvidersResponse>(await this.callApi(params, req, runtime), new ListIdentityProvidersResponse({}));
  }

  /**
   * 查询身份提供方
   * 
   * @param request - ListIdentityProvidersRequest
   * @returns ListIdentityProvidersResponse
   */
  async listIdentityProviders(request: ListIdentityProvidersRequest): Promise<ListIdentityProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdentityProvidersWithOptions(request, runtime);
  }

  /**
   * Queries the information of one or more Enterprise Identity and Access Management (EIAM) instances of Identity as a Service (IDaaS).
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<ListInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * Queries the information of one or more Enterprise Identity and Access Management (EIAM) instances of Identity as a Service (IDaaS).
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * 获取支持专属端点的region列表
   * 
   * @param request - ListNetworkAccessEndpointAvailableRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessEndpointAvailableRegionsResponse
   */
  async listNetworkAccessEndpointAvailableRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<ListNetworkAccessEndpointAvailableRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkAccessEndpointAvailableRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListNetworkAccessEndpointAvailableRegionsResponse>(await this.callApi(params, req, runtime), new ListNetworkAccessEndpointAvailableRegionsResponse({}));
  }

  /**
   * 获取支持专属端点的region列表
   * @returns ListNetworkAccessEndpointAvailableRegionsResponse
   */
  async listNetworkAccessEndpointAvailableRegions(): Promise<ListNetworkAccessEndpointAvailableRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointAvailableRegionsWithOptions(runtime);
  }

  /**
   * 获取支持NAE的可用区列表
   * 
   * @param request - ListNetworkAccessEndpointAvailableZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessEndpointAvailableZonesResponse
   */
  async listNetworkAccessEndpointAvailableZonesWithOptions(request: ListNetworkAccessEndpointAvailableZonesRequest, runtime: $dara.RuntimeOptions): Promise<ListNetworkAccessEndpointAvailableZonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.naeRegionId)) {
      query["NaeRegionId"] = request.naeRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkAccessEndpointAvailableZones",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListNetworkAccessEndpointAvailableZonesResponse>(await this.callApi(params, req, runtime), new ListNetworkAccessEndpointAvailableZonesResponse({}));
  }

  /**
   * 获取支持NAE的可用区列表
   * 
   * @param request - ListNetworkAccessEndpointAvailableZonesRequest
   * @returns ListNetworkAccessEndpointAvailableZonesResponse
   */
  async listNetworkAccessEndpointAvailableZones(request: ListNetworkAccessEndpointAvailableZonesRequest): Promise<ListNetworkAccessEndpointAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointAvailableZonesWithOptions(request, runtime);
  }

  /**
   * 列表查询专属网络端点。
   * 
   * @param request - ListNetworkAccessEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessEndpointsResponse
   */
  async listNetworkAccessEndpointsWithOptions(request: ListNetworkAccessEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<ListNetworkAccessEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.networkAccessEndpointStatus)) {
      query["NetworkAccessEndpointStatus"] = request.networkAccessEndpointStatus;
    }

    if (!$dara.isNull(request.networkAccessEndpointType)) {
      query["NetworkAccessEndpointType"] = request.networkAccessEndpointType;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkAccessEndpoints",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListNetworkAccessEndpointsResponse>(await this.callApi(params, req, runtime), new ListNetworkAccessEndpointsResponse({}));
  }

  /**
   * 列表查询专属网络端点。
   * 
   * @param request - ListNetworkAccessEndpointsRequest
   * @returns ListNetworkAccessEndpointsResponse
   */
  async listNetworkAccessEndpoints(request: ListNetworkAccessEndpointsRequest): Promise<ListNetworkAccessEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointsWithOptions(request, runtime);
  }

  /**
   * 列表某个网络访问端点下的访问路径。
   * 
   * @param request - ListNetworkAccessPathsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessPathsResponse
   */
  async listNetworkAccessPathsWithOptions(request: ListNetworkAccessPathsRequest, runtime: $dara.RuntimeOptions): Promise<ListNetworkAccessPathsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkAccessPaths",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListNetworkAccessPathsResponse>(await this.callApi(params, req, runtime), new ListNetworkAccessPathsResponse({}));
  }

  /**
   * 列表某个网络访问端点下的访问路径。
   * 
   * @param request - ListNetworkAccessPathsRequest
   * @returns ListNetworkAccessPathsResponse
   */
  async listNetworkAccessPaths(request: ListNetworkAccessPathsRequest): Promise<ListNetworkAccessPathsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkAccessPathsWithOptions(request, runtime);
  }

  /**
   * 查询组织的所有父级路径
   * 
   * @param request - ListOrganizationalUnitParentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitParentsResponse
   */
  async listOrganizationalUnitParentsWithOptions(request: ListOrganizationalUnitParentsRequest, runtime: $dara.RuntimeOptions): Promise<ListOrganizationalUnitParentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationalUnitParents",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListOrganizationalUnitParentsResponse>(await this.callApi(params, req, runtime), new ListOrganizationalUnitParentsResponse({}));
  }

  /**
   * 查询组织的所有父级路径
   * 
   * @param request - ListOrganizationalUnitParentsRequest
   * @returns ListOrganizationalUnitParentsResponse
   */
  async listOrganizationalUnitParents(request: ListOrganizationalUnitParentsRequest): Promise<ListOrganizationalUnitParentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationalUnitParentsWithOptions(request, runtime);
  }

  /**
   * Queries the information about organizational units in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitsResponse
   */
  async listOrganizationalUnitsWithOptions(request: ListOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<ListOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.organizationalUnitName)) {
      query["OrganizationalUnitName"] = request.organizationalUnitName;
    }

    if (!$dara.isNull(request.organizationalUnitNameStartsWith)) {
      query["OrganizationalUnitNameStartsWith"] = request.organizationalUnitNameStartsWith;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new ListOrganizationalUnitsResponse({}));
  }

  /**
   * Queries the information about organizational units in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListOrganizationalUnitsRequest
   * @returns ListOrganizationalUnitsResponse
   */
  async listOrganizationalUnits(request: ListOrganizationalUnitsRequest): Promise<ListOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Queries the organizations that are allowed to access an Employee Identity and Access Management (EIAM) application by page. The return result includes the IDs of the organizations. If you want to obtain the details of the organizations, call the GetOrganizationalUnit operation.
   * 
   * @param request - ListOrganizationalUnitsForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitsForApplicationResponse
   */
  async listOrganizationalUnitsForApplicationWithOptions(request: ListOrganizationalUnitsForApplicationRequest, runtime: $dara.RuntimeOptions): Promise<ListOrganizationalUnitsForApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationalUnitsForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListOrganizationalUnitsForApplicationResponse>(await this.callApi(params, req, runtime), new ListOrganizationalUnitsForApplicationResponse({}));
  }

  /**
   * Queries the organizations that are allowed to access an Employee Identity and Access Management (EIAM) application by page. The return result includes the IDs of the organizations. If you want to obtain the details of the organizations, call the GetOrganizationalUnit operation.
   * 
   * @param request - ListOrganizationalUnitsForApplicationRequest
   * @returns ListOrganizationalUnitsForApplicationResponse
   */
  async listOrganizationalUnitsForApplication(request: ListOrganizationalUnitsForApplicationRequest): Promise<ListOrganizationalUnitsForApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOrganizationalUnitsForApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the supported Alibaba Cloud regions.
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  /**
   * Queries the supported Alibaba Cloud regions.
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  /**
   * 查询同步任务
   * 
   * @param request - ListSynchronizationJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSynchronizationJobsResponse
   */
  async listSynchronizationJobsWithOptions(request: ListSynchronizationJobsRequest, runtime: $dara.RuntimeOptions): Promise<ListSynchronizationJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.targetIds)) {
      query["TargetIds"] = request.targetIds;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSynchronizationJobs",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListSynchronizationJobsResponse>(await this.callApi(params, req, runtime), new ListSynchronizationJobsResponse({}));
  }

  /**
   * 查询同步任务
   * 
   * @param request - ListSynchronizationJobsRequest
   * @returns ListSynchronizationJobsResponse
   */
  async listSynchronizationJobs(request: ListSynchronizationJobsRequest): Promise<ListSynchronizationJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSynchronizationJobsWithOptions(request, runtime);
  }

  /**
   * Queries the details of accounts in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<ListUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayNameStartsWith)) {
      query["DisplayNameStartsWith"] = request.displayNameStartsWith;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.phoneRegion)) {
      query["PhoneRegion"] = request.phoneRegion;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userExternalId)) {
      query["UserExternalId"] = request.userExternalId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    if (!$dara.isNull(request.userSourceId)) {
      query["UserSourceId"] = request.userSourceId;
    }

    if (!$dara.isNull(request.userSourceType)) {
      query["UserSourceType"] = request.userSourceType;
    }

    if (!$dara.isNull(request.usernameStartsWith)) {
      query["UsernameStartsWith"] = request.usernameStartsWith;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  /**
   * Queries the details of accounts in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Queries the accounts that are allowed to access an Employee Identity and Access Management (EIAM) application. The return results include the IDs of the accounts. If you need to obtain the details of the accounts, call the GetUser operation.
   * 
   * @param request - ListUsersForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForApplicationResponse
   */
  async listUsersForApplicationWithOptions(request: ListUsersForApplicationRequest, runtime: $dara.RuntimeOptions): Promise<ListUsersForApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsersForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListUsersForApplicationResponse>(await this.callApi(params, req, runtime), new ListUsersForApplicationResponse({}));
  }

  /**
   * Queries the accounts that are allowed to access an Employee Identity and Access Management (EIAM) application. The return results include the IDs of the accounts. If you need to obtain the details of the accounts, call the GetUser operation.
   * 
   * @param request - ListUsersForApplicationRequest
   * @returns ListUsersForApplicationResponse
   */
  async listUsersForApplication(request: ListUsersForApplicationRequest): Promise<ListUsersForApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersForApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the information of accounts in an Employee Identity and Access Management (EIAM) group of Identity as a Service (IDaaS).
   * 
   * @param request - ListUsersForGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroupWithOptions(request: ListUsersForGroupRequest, runtime: $dara.RuntimeOptions): Promise<ListUsersForGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsersForGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListUsersForGroupResponse>(await this.callApi(params, req, runtime), new ListUsersForGroupResponse({}));
  }

  /**
   * Queries the information of accounts in an Employee Identity and Access Management (EIAM) group of Identity as a Service (IDaaS).
   * 
   * @param request - ListUsersForGroupRequest
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroup(request: ListUsersForGroupRequest): Promise<ListUsersForGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersForGroupWithOptions(request, runtime);
  }

  /**
   * Queries a client key of an Employee Identity and Access Management (EIAM) application. The returned key secret is masked. If you want to query the key secret that is not masked, call the ListApplicationClientSecrets operation.
   * 
   * @param request - ObtainApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainApplicationClientSecretResponse
   */
  async obtainApplicationClientSecretWithOptions(request: ObtainApplicationClientSecretRequest, runtime: $dara.RuntimeOptions): Promise<ObtainApplicationClientSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ObtainApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ObtainApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new ObtainApplicationClientSecretResponse({}));
  }

  /**
   * Queries a client key of an Employee Identity and Access Management (EIAM) application. The returned key secret is masked. If you want to query the key secret that is not masked, call the ListApplicationClientSecrets operation.
   * 
   * @param request - ObtainApplicationClientSecretRequest
   * @returns ObtainApplicationClientSecretResponse
   */
  async obtainApplicationClientSecret(request: ObtainApplicationClientSecretRequest): Promise<ObtainApplicationClientSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.obtainApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * 查看指定域名安全代理Token。
   * 
   * @param request - ObtainDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainDomainProxyTokenResponse
   */
  async obtainDomainProxyTokenWithOptions(request: ObtainDomainProxyTokenRequest, runtime: $dara.RuntimeOptions): Promise<ObtainDomainProxyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ObtainDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ObtainDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new ObtainDomainProxyTokenResponse({}));
  }

  /**
   * 查看指定域名安全代理Token。
   * 
   * @param request - ObtainDomainProxyTokenRequest
   * @returns ObtainDomainProxyTokenResponse
   */
  async obtainDomainProxyToken(request: ObtainDomainProxyTokenRequest): Promise<ObtainDomainProxyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.obtainDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * Removes an Employee Identity and Access Management (EIAM) account from multiple EIAM organizations of Identity as a Service (IDaaS). You cannot remove an account from a primary organization.
   * 
   * @param request - RemoveUserFromOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromOrganizationalUnitsResponse
   */
  async removeUserFromOrganizationalUnitsWithOptions(request: RemoveUserFromOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<RemoveUserFromOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUserFromOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RemoveUserFromOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new RemoveUserFromOrganizationalUnitsResponse({}));
  }

  /**
   * Removes an Employee Identity and Access Management (EIAM) account from multiple EIAM organizations of Identity as a Service (IDaaS). You cannot remove an account from a primary organization.
   * 
   * @param request - RemoveUserFromOrganizationalUnitsRequest
   * @returns RemoveUserFromOrganizationalUnitsResponse
   */
  async removeUserFromOrganizationalUnits(request: RemoveUserFromOrganizationalUnitsRequest): Promise<RemoveUserFromOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUserFromOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Removes Employee Identity and Access Management (EIAM) accounts from an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - RemoveUsersFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroupWithOptions(request: RemoveUsersFromGroupRequest, runtime: $dara.RuntimeOptions): Promise<RemoveUsersFromGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUsersFromGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RemoveUsersFromGroupResponse>(await this.callApi(params, req, runtime), new RemoveUsersFromGroupResponse({}));
  }

  /**
   * Removes Employee Identity and Access Management (EIAM) accounts from an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - RemoveUsersFromGroupRequest
   * @returns RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroup(request: RemoveUsersFromGroupRequest): Promise<RemoveUsersFromGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUsersFromGroupWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access an application from multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - RevokeApplicationFromGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeApplicationFromGroupsResponse
   */
  async revokeApplicationFromGroupsWithOptions(request: RevokeApplicationFromGroupsRequest, runtime: $dara.RuntimeOptions): Promise<RevokeApplicationFromGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeApplicationFromGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RevokeApplicationFromGroupsResponse>(await this.callApi(params, req, runtime), new RevokeApplicationFromGroupsResponse({}));
  }

  /**
   * Revokes the permissions to access an application from multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - RevokeApplicationFromGroupsRequest
   * @returns RevokeApplicationFromGroupsResponse
   */
  async revokeApplicationFromGroups(request: RevokeApplicationFromGroupsRequest): Promise<RevokeApplicationFromGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeApplicationFromGroupsWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - RevokeApplicationFromOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeApplicationFromOrganizationalUnitsResponse
   */
  async revokeApplicationFromOrganizationalUnitsWithOptions(request: RevokeApplicationFromOrganizationalUnitsRequest, runtime: $dara.RuntimeOptions): Promise<RevokeApplicationFromOrganizationalUnitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeApplicationFromOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RevokeApplicationFromOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new RevokeApplicationFromOrganizationalUnitsResponse({}));
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - RevokeApplicationFromOrganizationalUnitsRequest
   * @returns RevokeApplicationFromOrganizationalUnitsResponse
   */
  async revokeApplicationFromOrganizationalUnits(request: RevokeApplicationFromOrganizationalUnitsRequest): Promise<RevokeApplicationFromOrganizationalUnitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeApplicationFromOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - RevokeApplicationFromUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeApplicationFromUsersResponse
   */
  async revokeApplicationFromUsersWithOptions(request: RevokeApplicationFromUsersRequest, runtime: $dara.RuntimeOptions): Promise<RevokeApplicationFromUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeApplicationFromUsers",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RevokeApplicationFromUsersResponse>(await this.callApi(params, req, runtime), new RevokeApplicationFromUsersResponse({}));
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - RevokeApplicationFromUsersRequest
   * @returns RevokeApplicationFromUsersResponse
   */
  async revokeApplicationFromUsers(request: RevokeApplicationFromUsersRequest): Promise<RevokeApplicationFromUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeApplicationFromUsersWithOptions(request, runtime);
  }

  /**
   * 运行同步任务
   * 
   * @param request - RunSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSynchronizationJobResponse
   */
  async runSynchronizationJobWithOptions(request: RunSynchronizationJobRequest, runtime: $dara.RuntimeOptions): Promise<RunSynchronizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordInitialization)) {
      query["PasswordInitialization"] = request.passwordInitialization;
    }

    if (!$dara.isNull(request.synchronizationScopeConfig)) {
      query["SynchronizationScopeConfig"] = request.synchronizationScopeConfig;
    }

    if (!$dara.isNull(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.userIdentityTypes)) {
      query["UserIdentityTypes"] = request.userIdentityTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSynchronizationJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RunSynchronizationJobResponse>(await this.callApi(params, req, runtime), new RunSynchronizationJobResponse({}));
  }

  /**
   * 运行同步任务
   * 
   * @param request - RunSynchronizationJobRequest
   * @returns RunSynchronizationJobResponse
   */
  async runSynchronizationJob(request: RunSynchronizationJobRequest): Promise<RunSynchronizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Configures the permissions of the Developer API feature of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - SetApplicationGrantScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationGrantScopeResponse
   */
  async setApplicationGrantScopeWithOptions(request: SetApplicationGrantScopeRequest, runtime: $dara.RuntimeOptions): Promise<SetApplicationGrantScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.grantScopes)) {
      query["GrantScopes"] = request.grantScopes;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationGrantScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetApplicationGrantScopeResponse>(await this.callApi(params, req, runtime), new SetApplicationGrantScopeResponse({}));
  }

  /**
   * Configures the permissions of the Developer API feature of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - SetApplicationGrantScopeRequest
   * @returns SetApplicationGrantScopeResponse
   */
  async setApplicationGrantScope(request: SetApplicationGrantScopeRequest): Promise<SetApplicationGrantScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationGrantScopeWithOptions(request, runtime);
  }

  /**
   * Configures the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - SetApplicationProvisioningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationProvisioningConfigResponse
   */
  async setApplicationProvisioningConfigWithOptions(request: SetApplicationProvisioningConfigRequest, runtime: $dara.RuntimeOptions): Promise<SetApplicationProvisioningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.callbackProvisioningConfig)) {
      query["CallbackProvisioningConfig"] = request.callbackProvisioningConfig;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.provisionPassword)) {
      query["ProvisionPassword"] = request.provisionPassword;
    }

    if (!$dara.isNull(request.provisionProtocolType)) {
      query["ProvisionProtocolType"] = request.provisionProtocolType;
    }

    if (!$dara.isNull(request.scimProvisioningConfig)) {
      query["ScimProvisioningConfig"] = request.scimProvisioningConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationProvisioningConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetApplicationProvisioningConfigResponse>(await this.callApi(params, req, runtime), new SetApplicationProvisioningConfigResponse({}));
  }

  /**
   * Configures the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - SetApplicationProvisioningConfigRequest
   * @returns SetApplicationProvisioningConfigResponse
   */
  async setApplicationProvisioningConfig(request: SetApplicationProvisioningConfigRequest): Promise<SetApplicationProvisioningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationProvisioningConfigWithOptions(request, runtime);
  }

  /**
   * Sets the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - SetApplicationProvisioningScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationProvisioningScopeResponse
   */
  async setApplicationProvisioningScopeWithOptions(request: SetApplicationProvisioningScopeRequest, runtime: $dara.RuntimeOptions): Promise<SetApplicationProvisioningScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationProvisioningScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetApplicationProvisioningScopeResponse>(await this.callApi(params, req, runtime), new SetApplicationProvisioningScopeResponse({}));
  }

  /**
   * Sets the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - SetApplicationProvisioningScopeRequest
   * @returns SetApplicationProvisioningScopeResponse
   */
  async setApplicationProvisioningScope(request: SetApplicationProvisioningScopeRequest): Promise<SetApplicationProvisioningScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationProvisioningScopeWithOptions(request, runtime);
  }

  /**
   * Specifies the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @remarks
   * In IDaaS EIAM, the application management feature supports multiple SSO protocols for applications, including SAML 2.0 and OIDC protocols. Each application supports only one protocol, and the protocol cannot be changed after the application is created. You can specify the SSO configuration attributes of an application based on the supported SSO protocol.
   * 
   * @param request - SetApplicationSsoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationSsoConfigResponse
   */
  async setApplicationSsoConfigWithOptions(request: SetApplicationSsoConfigRequest, runtime: $dara.RuntimeOptions): Promise<SetApplicationSsoConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.initLoginType)) {
      query["InitLoginType"] = request.initLoginType;
    }

    if (!$dara.isNull(request.initLoginUrl)) {
      query["InitLoginUrl"] = request.initLoginUrl;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.oidcSsoConfig)) {
      query["OidcSsoConfig"] = request.oidcSsoConfig;
    }

    if (!$dara.isNull(request.samlSsoConfig)) {
      query["SamlSsoConfig"] = request.samlSsoConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetApplicationSsoConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetApplicationSsoConfigResponse>(await this.callApi(params, req, runtime), new SetApplicationSsoConfigResponse({}));
  }

  /**
   * Specifies the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @remarks
   * In IDaaS EIAM, the application management feature supports multiple SSO protocols for applications, including SAML 2.0 and OIDC protocols. Each application supports only one protocol, and the protocol cannot be changed after the application is created. You can specify the SSO configuration attributes of an application based on the supported SSO protocol.
   * 
   * @param request - SetApplicationSsoConfigRequest
   * @returns SetApplicationSsoConfigResponse
   */
  async setApplicationSsoConfig(request: SetApplicationSsoConfigRequest): Promise<SetApplicationSsoConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setApplicationSsoConfigWithOptions(request, runtime);
  }

  /**
   * 设置默认域名。
   * 
   * @param request - SetDefaultDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultDomainResponse
   */
  async setDefaultDomainWithOptions(request: SetDefaultDomainRequest, runtime: $dara.RuntimeOptions): Promise<SetDefaultDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetDefaultDomainResponse>(await this.callApi(params, req, runtime), new SetDefaultDomainResponse({}));
  }

  /**
   * 设置默认域名。
   * 
   * @param request - SetDefaultDomainRequest
   * @returns SetDefaultDomainResponse
   */
  async setDefaultDomain(request: SetDefaultDomainRequest): Promise<SetDefaultDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultDomainWithOptions(request, runtime);
  }

  /**
   * Configures a forgot password policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetForgetPasswordConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetForgetPasswordConfigurationResponse
   */
  async setForgetPasswordConfigurationWithOptions(request: SetForgetPasswordConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<SetForgetPasswordConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationChannels)) {
      query["AuthenticationChannels"] = request.authenticationChannels;
    }

    if (!$dara.isNull(request.forgetPasswordStatus)) {
      query["ForgetPasswordStatus"] = request.forgetPasswordStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetForgetPasswordConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetForgetPasswordConfigurationResponse>(await this.callApi(params, req, runtime), new SetForgetPasswordConfigurationResponse({}));
  }

  /**
   * Configures a forgot password policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetForgetPasswordConfigurationRequest
   * @returns SetForgetPasswordConfigurationResponse
   */
  async setForgetPasswordConfiguration(request: SetForgetPasswordConfigurationRequest): Promise<SetForgetPasswordConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setForgetPasswordConfigurationWithOptions(request, runtime);
  }

  /**
   * 修改IdP同步入配置
   * 
   * @param request - SetIdentityProviderUdPullConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetIdentityProviderUdPullConfigurationResponse
   */
  async setIdentityProviderUdPullConfigurationWithOptions(request: SetIdentityProviderUdPullConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<SetIdentityProviderUdPullConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupSyncStatus)) {
      query["GroupSyncStatus"] = request.groupSyncStatus;
    }

    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.incrementalCallbackStatus)) {
      query["IncrementalCallbackStatus"] = request.incrementalCallbackStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ldapUdPullConfig)) {
      query["LdapUdPullConfig"] = request.ldapUdPullConfig;
    }

    if (!$dara.isNull(request.periodicSyncStatus)) {
      query["PeriodicSyncStatus"] = request.periodicSyncStatus;
    }

    if (!$dara.isNull(request.pullProtectedRule)) {
      query["PullProtectedRule"] = request.pullProtectedRule;
    }

    if (!$dara.isNull(request.udSyncScopeConfig)) {
      query["UdSyncScopeConfig"] = request.udSyncScopeConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetIdentityProviderUdPullConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetIdentityProviderUdPullConfigurationResponse>(await this.callApi(params, req, runtime), new SetIdentityProviderUdPullConfigurationResponse({}));
  }

  /**
   * 修改IdP同步入配置
   * 
   * @param request - SetIdentityProviderUdPullConfigurationRequest
   * @returns SetIdentityProviderUdPullConfigurationResponse
   */
  async setIdentityProviderUdPullConfiguration(request: SetIdentityProviderUdPullConfigurationRequest): Promise<SetIdentityProviderUdPullConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setIdentityProviderUdPullConfigurationWithOptions(request, runtime);
  }

  /**
   * Configures a password complexity policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordComplexityConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordComplexityConfigurationResponse
   */
  async setPasswordComplexityConfigurationWithOptions(request: SetPasswordComplexityConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<SetPasswordComplexityConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordComplexityRules)) {
      query["PasswordComplexityRules"] = request.passwordComplexityRules;
    }

    if (!$dara.isNull(request.passwordMinLength)) {
      query["PasswordMinLength"] = request.passwordMinLength;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordComplexityConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetPasswordComplexityConfigurationResponse>(await this.callApi(params, req, runtime), new SetPasswordComplexityConfigurationResponse({}));
  }

  /**
   * Configures a password complexity policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordComplexityConfigurationRequest
   * @returns SetPasswordComplexityConfigurationResponse
   */
  async setPasswordComplexityConfiguration(request: SetPasswordComplexityConfigurationRequest): Promise<SetPasswordComplexityConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordComplexityConfigurationWithOptions(request, runtime);
  }

  /**
   * Configures a password expiration policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordExpirationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordExpirationConfigurationResponse
   */
  async setPasswordExpirationConfigurationWithOptions(request: SetPasswordExpirationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<SetPasswordExpirationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveAuthenticationSourceIds)) {
      query["EffectiveAuthenticationSourceIds"] = request.effectiveAuthenticationSourceIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordExpirationAction)) {
      query["PasswordExpirationAction"] = request.passwordExpirationAction;
    }

    if (!$dara.isNull(request.passwordExpirationNotificationChannels)) {
      query["PasswordExpirationNotificationChannels"] = request.passwordExpirationNotificationChannels;
    }

    if (!$dara.isNull(request.passwordExpirationNotificationDuration)) {
      query["PasswordExpirationNotificationDuration"] = request.passwordExpirationNotificationDuration;
    }

    if (!$dara.isNull(request.passwordExpirationNotificationStatus)) {
      query["PasswordExpirationNotificationStatus"] = request.passwordExpirationNotificationStatus;
    }

    if (!$dara.isNull(request.passwordExpirationStatus)) {
      query["PasswordExpirationStatus"] = request.passwordExpirationStatus;
    }

    if (!$dara.isNull(request.passwordForcedUpdateDuration)) {
      query["PasswordForcedUpdateDuration"] = request.passwordForcedUpdateDuration;
    }

    if (!$dara.isNull(request.passwordValidMaxDay)) {
      query["PasswordValidMaxDay"] = request.passwordValidMaxDay;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordExpirationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetPasswordExpirationConfigurationResponse>(await this.callApi(params, req, runtime), new SetPasswordExpirationConfigurationResponse({}));
  }

  /**
   * Configures a password expiration policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordExpirationConfigurationRequest
   * @returns SetPasswordExpirationConfigurationResponse
   */
  async setPasswordExpirationConfiguration(request: SetPasswordExpirationConfigurationRequest): Promise<SetPasswordExpirationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordExpirationConfigurationWithOptions(request, runtime);
  }

  /**
   * Configures a password history policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordHistoryConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordHistoryConfigurationResponse
   */
  async setPasswordHistoryConfigurationWithOptions(request: SetPasswordHistoryConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<SetPasswordHistoryConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordHistoryMaxRetention)) {
      query["PasswordHistoryMaxRetention"] = request.passwordHistoryMaxRetention;
    }

    if (!$dara.isNull(request.passwordHistoryStatus)) {
      query["PasswordHistoryStatus"] = request.passwordHistoryStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordHistoryConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetPasswordHistoryConfigurationResponse>(await this.callApi(params, req, runtime), new SetPasswordHistoryConfigurationResponse({}));
  }

  /**
   * Configures a password history policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordHistoryConfigurationRequest
   * @returns SetPasswordHistoryConfigurationResponse
   */
  async setPasswordHistoryConfiguration(request: SetPasswordHistoryConfigurationRequest): Promise<SetPasswordHistoryConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordHistoryConfigurationWithOptions(request, runtime);
  }

  /**
   * Sets the password initialization configurations for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordInitializationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordInitializationConfigurationResponse
   */
  async setPasswordInitializationConfigurationWithOptions(request: SetPasswordInitializationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<SetPasswordInitializationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.passwordForcedUpdateStatus)) {
      query["PasswordForcedUpdateStatus"] = request.passwordForcedUpdateStatus;
    }

    if (!$dara.isNull(request.passwordInitializationNotificationChannels)) {
      query["PasswordInitializationNotificationChannels"] = request.passwordInitializationNotificationChannels;
    }

    if (!$dara.isNull(request.passwordInitializationStatus)) {
      query["PasswordInitializationStatus"] = request.passwordInitializationStatus;
    }

    if (!$dara.isNull(request.passwordInitializationType)) {
      query["PasswordInitializationType"] = request.passwordInitializationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetPasswordInitializationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetPasswordInitializationConfigurationResponse>(await this.callApi(params, req, runtime), new SetPasswordInitializationConfigurationResponse({}));
  }

  /**
   * Sets the password initialization configurations for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordInitializationConfigurationRequest
   * @returns SetPasswordInitializationConfigurationResponse
   */
  async setPasswordInitializationConfiguration(request: SetPasswordInitializationConfigurationRequest): Promise<SetPasswordInitializationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setPasswordInitializationConfigurationWithOptions(request, runtime);
  }

  /**
   * Updates the primary organizational unit to which an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account belongs. This account will be removed from the previous primary organizational unit and added to the new primary organization.
   * 
   * @param request - SetUserPrimaryOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserPrimaryOrganizationalUnitResponse
   */
  async setUserPrimaryOrganizationalUnitWithOptions(request: SetUserPrimaryOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<SetUserPrimaryOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetUserPrimaryOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetUserPrimaryOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new SetUserPrimaryOrganizationalUnitResponse({}));
  }

  /**
   * Updates the primary organizational unit to which an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account belongs. This account will be removed from the previous primary organizational unit and added to the new primary organization.
   * 
   * @param request - SetUserPrimaryOrganizationalUnitRequest
   * @returns SetUserPrimaryOrganizationalUnitResponse
   */
  async setUserPrimaryOrganizationalUnit(request: SetUserPrimaryOrganizationalUnitRequest): Promise<SetUserPrimaryOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setUserPrimaryOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Unlocks an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) that is locked.
   * 
   * @param request - UnlockUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockUserResponse
   */
  async unlockUserWithOptions(request: UnlockUserRequest, runtime: $dara.RuntimeOptions): Promise<UnlockUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UnlockUserResponse>(await this.callApi(params, req, runtime), new UnlockUserResponse({}));
  }

  /**
   * Unlocks an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) that is locked.
   * 
   * @param request - UnlockUserRequest
   * @returns UnlockUserResponse
   */
  async unlockUser(request: UnlockUserRequest): Promise<UnlockUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockUserWithOptions(request, runtime);
  }

  /**
   * Modifies the authorization type of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationAuthorizationTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationAuthorizationTypeResponse
   */
  async updateApplicationAuthorizationTypeWithOptions(request: UpdateApplicationAuthorizationTypeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateApplicationAuthorizationTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.authorizationType)) {
      query["AuthorizationType"] = request.authorizationType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationAuthorizationType",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateApplicationAuthorizationTypeResponse>(await this.callApi(params, req, runtime), new UpdateApplicationAuthorizationTypeResponse({}));
  }

  /**
   * Modifies the authorization type of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationAuthorizationTypeRequest
   * @returns UpdateApplicationAuthorizationTypeResponse
   */
  async updateApplicationAuthorizationType(request: UpdateApplicationAuthorizationTypeRequest): Promise<UpdateApplicationAuthorizationTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationAuthorizationTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescriptionWithOptions(request: UpdateApplicationDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<UpdateApplicationDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateApplicationDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateApplicationDescriptionResponse({}));
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationDescriptionRequest
   * @returns UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescription(request: UpdateApplicationDescriptionRequest): Promise<UpdateApplicationDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the information about an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the information is empty, the information is not updated by default.
   * 
   * @param request - UpdateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(request: UpdateGroupRequest, runtime: $dara.RuntimeOptions): Promise<UpdateGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupExternalId)) {
      query["GroupExternalId"] = request.groupExternalId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateGroupResponse>(await this.callApi(params, req, runtime), new UpdateGroupResponse({}));
  }

  /**
   * Updates the information about an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the information is empty, the information is not updated by default.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  /**
   * Updates the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account group.
   * 
   * @param request - UpdateGroupDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupDescriptionResponse
   */
  async updateGroupDescriptionWithOptions(request: UpdateGroupDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<UpdateGroupDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroupDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateGroupDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateGroupDescriptionResponse({}));
  }

  /**
   * Updates the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account group.
   * 
   * @param request - UpdateGroupDescriptionRequest
   * @returns UpdateGroupDescriptionResponse
   */
  async updateGroupDescription(request: UpdateGroupDescriptionRequest): Promise<UpdateGroupDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGroupDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新idp基础配置
   * 
   * @param request - UpdateIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProviderWithOptions(request: UpdateIdentityProviderRequest, runtime: $dara.RuntimeOptions): Promise<UpdateIdentityProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dingtalkAppConfig)) {
      query["DingtalkAppConfig"] = request.dingtalkAppConfig;
    }

    if (!$dara.isNull(request.identityProviderId)) {
      query["IdentityProviderId"] = request.identityProviderId;
    }

    if (!$dara.isNull(request.identityProviderName)) {
      query["IdentityProviderName"] = request.identityProviderName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.larkConfig)) {
      query["LarkConfig"] = request.larkConfig;
    }

    if (!$dara.isNull(request.ldapConfig)) {
      query["LdapConfig"] = request.ldapConfig;
    }

    if (!$dara.isNull(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.oidcConfig)) {
      query["OidcConfig"] = request.oidcConfig;
    }

    if (!$dara.isNull(request.weComConfig)) {
      query["WeComConfig"] = request.weComConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIdentityProvider",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateIdentityProviderResponse>(await this.callApi(params, req, runtime), new UpdateIdentityProviderResponse({}));
  }

  /**
   * 更新idp基础配置
   * 
   * @param request - UpdateIdentityProviderRequest
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProvider(request: UpdateIdentityProviderRequest): Promise<UpdateIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateInstanceDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceDescriptionResponse
   */
  async updateInstanceDescriptionWithOptions(request: UpdateInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateInstanceDescriptionResponse({}));
  }

  /**
   * Modifies the description of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateInstanceDescriptionRequest
   * @returns UpdateInstanceDescriptionResponse
   */
  async updateInstanceDescription(request: UpdateInstanceDescriptionRequest): Promise<UpdateInstanceDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新一个专属网络端点的名称。
   * 
   * @param request - UpdateNetworkAccessEndpointNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNetworkAccessEndpointNameResponse
   */
  async updateNetworkAccessEndpointNameWithOptions(request: UpdateNetworkAccessEndpointNameRequest, runtime: $dara.RuntimeOptions): Promise<UpdateNetworkAccessEndpointNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!$dara.isNull(request.networkAccessEndpointName)) {
      query["NetworkAccessEndpointName"] = request.networkAccessEndpointName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNetworkAccessEndpointName",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateNetworkAccessEndpointNameResponse>(await this.callApi(params, req, runtime), new UpdateNetworkAccessEndpointNameResponse({}));
  }

  /**
   * 更新一个专属网络端点的名称。
   * 
   * @param request - UpdateNetworkAccessEndpointNameRequest
   * @returns UpdateNetworkAccessEndpointNameResponse
   */
  async updateNetworkAccessEndpointName(request: UpdateNetworkAccessEndpointNameRequest): Promise<UpdateNetworkAccessEndpointNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNetworkAccessEndpointNameWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) organization. The basic information about the organization is not updated by default if no parameter is specified.
   * 
   * @param request - UpdateOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationalUnitResponse
   */
  async updateOrganizationalUnitWithOptions(request: UpdateOrganizationalUnitRequest, runtime: $dara.RuntimeOptions): Promise<UpdateOrganizationalUnitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.organizationalUnitName)) {
      query["OrganizationalUnitName"] = request.organizationalUnitName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new UpdateOrganizationalUnitResponse({}));
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) organization. The basic information about the organization is not updated by default if no parameter is specified.
   * 
   * @param request - UpdateOrganizationalUnitRequest
   * @returns UpdateOrganizationalUnitResponse
   */
  async updateOrganizationalUnit(request: UpdateOrganizationalUnitRequest): Promise<UpdateOrganizationalUnitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) organization.
   * 
   * @param request - UpdateOrganizationalUnitDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationalUnitDescriptionResponse
   */
  async updateOrganizationalUnitDescriptionWithOptions(request: UpdateOrganizationalUnitDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<UpdateOrganizationalUnitDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrganizationalUnitDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateOrganizationalUnitDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateOrganizationalUnitDescriptionResponse({}));
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) organization.
   * 
   * @param request - UpdateOrganizationalUnitDescriptionRequest
   * @returns UpdateOrganizationalUnitDescriptionResponse
   */
  async updateOrganizationalUnitDescription(request: UpdateOrganizationalUnitDescriptionRequest): Promise<UpdateOrganizationalUnitDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOrganizationalUnitDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the parent organization ID of an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). In this case, the organization is moved from a parent node to a new node.
   * 
   * @param request - UpdateOrganizationalUnitParentIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationalUnitParentIdResponse
   */
  async updateOrganizationalUnitParentIdWithOptions(request: UpdateOrganizationalUnitParentIdRequest, runtime: $dara.RuntimeOptions): Promise<UpdateOrganizationalUnitParentIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrganizationalUnitParentId",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateOrganizationalUnitParentIdResponse>(await this.callApi(params, req, runtime), new UpdateOrganizationalUnitParentIdResponse({}));
  }

  /**
   * Updates the parent organization ID of an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). In this case, the organization is moved from a parent node to a new node.
   * 
   * @param request - UpdateOrganizationalUnitParentIdRequest
   * @returns UpdateOrganizationalUnitParentIdResponse
   */
  async updateOrganizationalUnitParentId(request: UpdateOrganizationalUnitParentIdRequest): Promise<UpdateOrganizationalUnitParentIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOrganizationalUnitParentIdWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customFields)) {
      query["CustomFields"] = request.customFields;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.emailVerified)) {
      query["EmailVerified"] = request.emailVerified;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.phoneNumberVerified)) {
      query["PhoneNumberVerified"] = request.phoneNumberVerified;
    }

    if (!$dara.isNull(request.phoneRegion)) {
      query["PhoneRegion"] = request.phoneRegion;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - UpdateUserDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDescriptionResponse
   */
  async updateUserDescriptionWithOptions(request: UpdateUserDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateUserDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateUserDescriptionResponse({}));
  }

  /**
   * Modifies the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - UpdateUserDescriptionRequest
   * @returns UpdateUserDescriptionResponse
   */
  async updateUserDescription(request: UpdateUserDescriptionRequest): Promise<UpdateUserDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the password information of an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The password must meet the requirements of the password policies that are configured in the IDaaS console.
   * 
   * @param request - UpdateUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserPasswordResponse
   */
  async updateUserPasswordWithOptions(request: UpdateUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<UpdateUserPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordForcedUpdateStatus)) {
      query["PasswordForcedUpdateStatus"] = request.passwordForcedUpdateStatus;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userNotificationChannels)) {
      query["UserNotificationChannels"] = request.userNotificationChannels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserPassword",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateUserPasswordResponse>(await this.callApi(params, req, runtime), new UpdateUserPasswordResponse({}));
  }

  /**
   * Updates the password information of an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The password must meet the requirements of the password policies that are configured in the IDaaS console.
   * 
   * @param request - UpdateUserPasswordRequest
   * @returns UpdateUserPasswordResponse
   */
  async updateUserPassword(request: UpdateUserPasswordRequest): Promise<UpdateUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserPasswordWithOptions(request, runtime);
  }

}
