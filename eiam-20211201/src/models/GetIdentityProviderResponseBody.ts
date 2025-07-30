// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkAppConfig extends $dara.Model {
  /**
   * @remarks
   * The AppKey for the application.
   * 
   * @example
   * 41reopmwoy9s
   */
  appKey?: string;
  /**
   * @remarks
   * The details of the application secret.
   * 
   * @example
   * REOQ6Cl55kriOd8NOBeqWYLKpHR4p6fdZxxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * DingTalk corpId.
   * 
   * @example
   * 3756043633237690761
   */
  corpId?: string;
  /**
   * @remarks
   * DingTalk Version.
   * 
   * @example
   * public_dingtalk
   */
  dingtalkVersion?: string;
  /**
   * @remarks
   * DingTalk  encrypt key.
   * 
   * @example
   * 29003eb11d0a28b4802a6f02fb8aa25dff730e2ac26ffdxxx
   */
  encryptKey?: string;
  /**
   * @remarks
   * DingTalk  verification token.
   * 
   * @example
   * 5ba9c127a7abe029003eb11d0a28b4802a6f02fb8aa25dff730e2ac26ffxxxxx
   */
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      corpId: 'CorpId',
      dingtalkVersion: 'DingtalkVersion',
      encryptKey: 'EncryptKey',
      verificationToken: 'VerificationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
      corpId: 'string',
      dingtalkVersion: 'string',
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

export class GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfigAuthedDepartmentIds extends $dara.Model {
  /**
   * @remarks
   * Department ID.
   * 
   * @example
   * 123xxx444
   */
  deptId?: string;
  /**
   * @remarks
   * Department name.
   * 
   * @example
   * test_xxx
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
   * DingTalk user name.
   * 
   * @example
   * zhangsan
   */
  name?: string;
  /**
   * @remarks
   * DingTalk user id.
   * 
   * @example
   * 13030833392920xxx
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
   * List of authorized DingTalk departments.
   */
  authedDepartmentIds?: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfigAuthedDepartmentIds[];
  /**
   * @remarks
   * Authorized DingTalk account list.
   */
  authedUsers?: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfigAuthedUsers[];
  /**
   * @remarks
   * DingTalk enterprise corpId.
   * 
   * @example
   * ding_xxxxx
   */
  corpId?: string;
  /**
   * @remarks
   * The name of the company.
   * 
   * @example
   * test_xxx
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
   * The application ID.
   * 
   * @example
   * cli_a7a99f53a317xxxx
   */
  appId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * ***
   */
  appSecret?: string;
  /**
   * @remarks
   * Feishu encryptKey.
   * 
   * @example
   * c5db46da8d4b751a7878e5d670402fb60e4d2391de3fa01f7c9e6353f6d1xxxxx
   */
  encryptKey?: string;
  /**
   * @remarks
   * Feishu enterprise code.
   * 
   * @example
   * FX1231xxxx
   */
  enterpriseNumber?: string;
  /**
   * @remarks
   * Feishu verificationToken.
   * 
   * @example
   * c5db46da8d4b751a7878e5d670402fb60e4d2391de3fa01f7c9e6353f6d1xxxxx
   */
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
   * Administrator password.
   * 
   * @example
   * XXXX
   */
  administratorPassword?: string;
  /**
   * @remarks
   * Administrator username.
   * 
   * @example
   * example.com
   */
  administratorUsername?: string;
  /**
   * @remarks
   * Whether to verify the fingerprint certificate.
   * 
   * @example
   * enabled
   */
  certificateFingerprintStatus?: string;
  /**
   * @remarks
   * Certificate fingerprint list.
   */
  certificateFingerprints?: string[];
  /**
   * @remarks
   * Ldap protocol.
   * 
   * @example
   * ldap
   */
  ldapProtocol?: string;
  /**
   * @remarks
   * ldap server host.
   * 
   * @example
   * 127.xx.xx.100
   */
  ldapServerHost?: string;
  /**
   * @remarks
   * ldap server port.
   * 
   * @example
   * 389
   */
  ldapServerPort?: number;
  /**
   * @remarks
   * StartTls status.
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
   * OIDC/OAuth2 authentication method.
   * 
   * @example
   * client_secret_post
   */
  authnMethod?: string;
  /**
   * @remarks
   * The client ID of the device whose access credential you want to query.
   * 
   * @example
   * mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The application secret registered with the OIDC authentication service.
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
   * OAuth2 authorization endpoint.
   * 
   * @example
   * https://example.com/oauth/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The CA that issued the certificate.
   * 
   * @example
   * https://example.com/oauth
   */
  issuer?: string;
  /**
   * @remarks
   * Jwks uri.
   * 
   * @example
   * https://example.com/oauth/jwks
   */
  jwksUri?: string;
  /**
   * @remarks
   * Token endpoint.
   * 
   * @example
   * https://example.com/oauth/token
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * OIDC user info endpoint.
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
   * OIDC client authentication configuration.
   */
  authnParam?: GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfigAuthnParam;
  /**
   * @remarks
   * OIDC endpoint configuration.
   */
  endpointConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfigEndpointConfig;
  /**
   * @remarks
   * OIDC authorization scope list.
   * 
   * @example
   * openid
   */
  grantScopes?: string[];
  /**
   * @remarks
   * OIDC authorization grant type.
   * 
   * @example
   * authorization_code
   */
  grantType?: string;
  /**
   * @remarks
   * Supported PKCE code challenge methods.
   * 
   * @example
   * S256
   */
  pkceChallengeMethod?: string;
  /**
   * @remarks
   * Whether to use PKCE in authorization code grant flow.
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
   * Synchronization source node.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * Synchronization target node.
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
   * @remarks
   * Whether to enable group synchronization. Possible values:
   * 
   * Disabled: disabled
   * 
   * Enabled: enabled
   * 
   * @example
   * disabled
   */
  groupSyncStatus?: string;
  /**
   * @remarks
   * Incremental callback status: Whether to process incremental callback data from the IdP.
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * Inbound synchronization configuration Information.
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
   * Synchronization source node.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * Synchronization target node.
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
   * Incremental callback status: Whether to process incremental callback data from the IdP.
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * Outbound synchronization configuration Information.
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
   * The ID of the load generator. This parameter is disabled.
   * 
   * @example
   * 1242350
   */
  agentId?: string;
  /**
   * @remarks
   * Authorization callback domain.
   * 
   * @example
   * https://example.com/xxxx
   */
  authorizeCallbackDomain?: string;
  /**
   * @remarks
   * CorpId.
   * 
   * @example
   * 356201295345457xxxxx
   */
  corpId?: string;
  /**
   * @remarks
   * Corp secret.
   * 
   * @example
   * weaseiszjskejskaj12sjeszojxxxx
   */
  corpSecret?: string;
  /**
   * @remarks
   * Trusted domain.
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
   * Advanced configuration capability. 
   * Value range:  
   * Disabled: disabled  
   * Enable: enabled
   * 
   * @example
   * disabled
   */
  advancedStatus?: string;
  /**
   * @remarks
   * The corresponding identity provider product, e.g., Okta, Google, or Azure AD. Possible values:
   * 
   * DingTalk: urn:alibaba:idaas:idp:alibaba:dingtalk
   * 
   * LDAP: urn:alibaba:idaas:idp:unknown:ldap
   * 
   * Alibaba Cloud IDaaS: urn:alibaba:idaas:idp:alibaba:idaas
   * 
   * WeCom (Enterprise WeChat): urn:alibaba:idaas:idp:tencent:wecom
   * 
   * Lark (Feishu): urn:alibaba:idaas:idp:bytedance:lark
   * 
   * Active Directory: urn:alibaba:idaas:idp:microsoft:ad
   * 
   * Azure Active Directory: urn:alibaba:idaas:idp:microsoft:aad
   * 
   * Alibaba Cloud SASE: urn:alibaba:idaas:idp:alibaba:sase
   * 
   * @example
   * urn:alibaba:idaas:idp:bytedance:lark
   */
  authnSourceSupplier?: string;
  /**
   * @remarks
   * Authentication type — OIDC or SAML. Possible values:
   * 
   * OIDC: urn:alibaba:idaas:authntype:oidc
   * 
   * SAML: urn:alibaba:idaas:authntype:saml2
   * 
   * @example
   * urn:alibaba:idaas:authntype:oidc
   */
  authnSourceType?: string;
  /**
   * @remarks
   * Whether the corresponding IdP supports authentication. Value range: 
   * Disabled: disabled  
   * Enabled: enabled
   * 
   * @example
   * disabled
   */
  authnStatus?: string;
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 1726021079000
   */
  createTime?: number;
  /**
   * @remarks
   * Identity provider description.
   * 
   * @example
   * for poc test
   */
  description?: string;
  /**
   * @remarks
   * DingTalk Basic Configuration
   */
  dingtalkAppConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkAppConfig;
  /**
   * @remarks
   * DingTalk synchronous configuration.
   */
  dingtalkProvisioningConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfig;
  /**
   * @remarks
   * Identity provider external ID.
   * 
   * @example
   * idp_xxxx
   */
  identityProviderExternalId?: string;
  /**
   * @remarks
   * Identity provider ID.
   * 
   * @example
   * idp_mwpcwnhrimlr2horx7xgg7xxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * Identity provider name.
   * 
   * @example
   * test
   */
  identityProviderName?: string;
  /**
   * @remarks
   * Identity provider type.
   * 
   * @example
   * urn:alibaba:idaas:idp:alibaba:dingtalk:push
   */
  identityProviderType?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * idaas_x2df3bak3uwnapqm6xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Lark configuration.
   */
  larkConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailLarkConfig;
  /**
   * @remarks
   * Last status check result.
   * 
   * @example
   * success
   */
  lastStatusCheckJobResult?: string;
  /**
   * @remarks
   * AD/LDAP Identity provider information.
   */
  ldapConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailLdapConfig;
  /**
   * @remarks
   * The reason why write operations on the instance are locked.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  /**
   * @remarks
   * The URL of the application logo.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01OB8fJj22fpoZm4sd0_!!6000000007148-2-tps-149-xxx.png
   */
  logoUrl?: string;
  /**
   * @remarks
   * The unique identifier of the network access endpoint.
   * 
   * @example
   * nae_mx4vsadfe6govkqkwckxxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * OIDC IdP configuration.
   */
  oidcConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfig;
  /**
   * @remarks
   * Sync in configuration.
   */
  udPullConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailUdPullConfig;
  /**
   * @remarks
   * Indicates whether the IDaaS EIAM system supports UD (User Directory) synchronization.
   * 
   * @example
   * disabled
   */
  udPullStatus?: string;
  /**
   * @remarks
   * Outbound synchronization configuration.
   */
  udPushConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailUdPushConfig;
  /**
   * @remarks
   * Outbound synchronization capability.
   * 
   * @example
   * disabled
   */
  udPushStatus?: string;
  /**
   * @remarks
   * The time when the serviceInstance  was last updated.
   * 
   * @example
   * 1726021079000
   */
  updateTime?: number;
  /**
   * @remarks
   * WeCom configuration.
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

export class GetIdentityProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * Identity provider Information.
   */
  identityProviderDetail?: GetIdentityProviderResponseBodyIdentityProviderDetail;
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

