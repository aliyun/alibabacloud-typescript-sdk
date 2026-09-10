// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentityProviderRequestAuthnConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the corresponding IdP supports authentication. Valid values:
   * 
   * - disabled: Disabled.
   * - enabled: Enabled.
   * 
   * @example
   * enabled
   */
  authnStatus?: string;
  /**
   * @remarks
   * Specifies whether automatic password update is supported. Valid values:
   * 
   * - disabled: Disabled.
   * - enabled: Enabled.
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
   * Specifies whether automatic creation of accounts is enabled. Valid values:
   * - disabled: Disabled.
   * 
   * - enabled: Enabled.
   * 
   * @example
   * disabled
   */
  autoCreateUserStatus?: string;
  /**
   * @remarks
   * The collection of target organizational unit IDs.
   */
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
   * Specifies whether automatic account update is enabled. Valid values:
   * - disabled: Disabled.
   * 
   * - enabled: Enabled.
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
   * The type of the expression. Valid values:
   * 
   * - field: field
   * - expression: expression
   * 
   * @example
   * field
   */
  expressionMappingType?: string;
  /**
   * @remarks
   * The expression for the mapping attribute value.
   * 
   * @example
   * idpUser.phoneNumber
   */
  sourceValueExpression?: string;
  /**
   * @remarks
   * The name of the mapping target attribute.
   * 
   * @example
   * user.username
   */
  targetField?: string;
  /**
   * @remarks
   * The name of the mapping target attribute.
   * 
   * @example
   * username
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
   * The list of rules for automatically matching accounts.
   */
  autoMatchUserProfileExpressions?: CreateIdentityProviderRequestBindingConfigAutoMatchUserProfileExpressions[];
  /**
   * @remarks
   * Specifies whether automatic account matching is enabled. Valid values:
   * 
   * - disabled: Disabled.
   * - enabled: Enabled.
   * 
   * @example
   * disabled
   */
  autoMatchUserStatus?: string;
  /**
   * @remarks
   * Specifies whether the manual account binding feature is enabled. Valid values:
   * 
   * - disabled: Disabled.
   * - enabled: Enabled.
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
   * The appKey of the DingTalk first-party application.
   * 
   * @example
   * Xczngvfemo4e
   */
  appKey?: string;
  /**
   * @remarks
   * The appSecret of the DingTalk first-party application.
   * 
   * @example
   * 5d405a12a6f84ad4ab05ee09axxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * The corpId of the DingTalk first-party application.
   * 
   * @example
   * 307568042478613xxxx
   */
  corpId?: string;
  /**
   * @remarks
   * The DingTalk version. Valid values:
   * 
   * - public_dingtalk: standard DingTalk
   * 
   * - private_dingtalk: exclusive DingTalk
   * 
   * @example
   * public_dingtalk
   */
  dingtalkVersion?: string;
  /**
   * @remarks
   * The EncryptKey of the DingTalk application.
   * 
   * @example
   * VkdWw91mdkrjVFr3ObNwefap21dfxxxx
   */
  encryptKey?: string;
  /**
   * @remarks
   * The VerificationToken of the DingTalk application.
   * 
   * @example
   * myDingApp_VerifyTokenxxxxx
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

export class CreateIdentityProviderRequestLarkConfig extends $dara.Model {
  /**
   * @remarks
   * The Lark application AppId.
   * 
   * @example
   * cli_xxxx
   */
  appId?: string;
  /**
   * @remarks
   * The Lark application Secret.
   * 
   * @example
   * KiiLzh5Dueh4wbLxxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * The encryptKey of the Lark custom application.
   * 
   * @example
   * VkdWw91mdkrjVFr3ObNwefap21dfxxxx
   */
  encryptKey?: string;
  /**
   * @remarks
   * The Lark enterprise number.
   * 
   * @example
   * FSX123111xxx
   */
  enterpriseNumber?: string;
  /**
   * @remarks
   * The verificationToken of the Lark custom application.
   * 
   * @example
   * feishuVerifyTokenxxxxx
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

export class CreateIdentityProviderRequestLdapConfig extends $dara.Model {
  /**
   * @remarks
   * The administrator password.
   * 
   * @example
   * xxxx
   */
  administratorPassword?: string;
  /**
   * @remarks
   * The administrator account.
   * 
   * @example
   * DC=example,DC=com
   */
  administratorUsername?: string;
  /**
   * @remarks
   * Specifies whether to verify the certificate fingerprint. Valid values:
   * 
   * - disabled: Disabled.
   * 
   * - enabled: Enabled.
   * 
   * @example
   * enabled
   */
  certificateFingerprintStatus?: string;
  /**
   * @remarks
   * The list of certificate fingerprints.
   */
  certificateFingerprints?: string[];
  /**
   * @remarks
   * The group member attribute name.
   * 
   * @example
   * member
   */
  groupMemberAttributeName?: string;
  /**
   * @remarks
   * The group ObjectClass.
   * 
   * @example
   * group
   */
  groupObjectClass?: string;
  /**
   * @remarks
   * The custom filter for groups.
   * 
   * @example
   * (|(cn=test)(group=test@test.com))
   */
  groupObjectClassCustomFilter?: string;
  /**
   * @remarks
   * The communication protocol.
   * 
   * @example
   * ldap
   */
  ldapProtocol?: string;
  /**
   * @remarks
   * The AD/LDAP server address.
   * 
   * @example
   * 123.xx.xx.89
   */
  ldapServerHost?: string;
  /**
   * @remarks
   * The AD/LDAP port number.
   * 
   * @example
   * 636
   */
  ldapServerPort?: number;
  /**
   * @remarks
   * The organization ObjectClass.
   * 
   * @example
   * organizationUnit,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * The organization RDN.
   * 
   * @example
   * ou
   */
  organizationalUnitRdn?: string;
  /**
   * @remarks
   * The password synchronization switch.
   * 
   * @example
   * enabled
   */
  passwordSyncStatus?: string;
  /**
   * @remarks
   * Specifies whether StartTLS is enabled. Valid values:
   * - disabled: Disabled.
   * 
   * - enabled: Enabled.
   * 
   * @example
   * enabled
   */
  startTlsStatus?: string;
  /**
   * @remarks
   * The user logon identifier.
   * 
   * @example
   * userPrincipalName, mail
   */
  userLoginIdentifier?: string;
  /**
   * @remarks
   * The user ObjectClass.
   * 
   * @example
   * person,user
   */
  userObjectClass?: string;
  /**
   * @remarks
   * The custom filter for users.
   * 
   * @example
   * (|(cn=test)(mail=test@test.com))
   */
  userObjectClassCustomFilter?: string;
  /**
   * @remarks
   * The user RDN.
   * 
   * @example
   * cn
   */
  userRdn?: string;
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
      organizationalUnitRdn: 'OrganizationalUnitRdn',
      passwordSyncStatus: 'PasswordSyncStatus',
      startTlsStatus: 'StartTlsStatus',
      userLoginIdentifier: 'UserLoginIdentifier',
      userObjectClass: 'UserObjectClass',
      userObjectClassCustomFilter: 'UserObjectClassCustomFilter',
      userRdn: 'UserRdn',
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
      organizationalUnitRdn: 'string',
      passwordSyncStatus: 'string',
      startTlsStatus: 'string',
      userLoginIdentifier: 'string',
      userObjectClass: 'string',
      userObjectClassCustomFilter: 'string',
      userRdn: 'string',
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
   * The OIDC authentication method. Valid values:
   * 
   * - client_secret_basic
   * 
   * - client_secret_post
   * 
   * @example
   * client_secret_post
   */
  authnMethod?: string;
  /**
   * @remarks
   * The OIDC client ID.
   * 
   * @example
   * mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The OIDC client secret.
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
   * The OIDC authorization endpoint.
   * 
   * @example
   * https://example.com/auth/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The OIDC issuer information.
   * 
   * @example
   * https://example.com/auth
   */
  issuer?: string;
  /**
   * @remarks
   * The OIDC JWKS URI.
   * 
   * @example
   * https://example.com/auth/jwks
   */
  jwksUri?: string;
  /**
   * @remarks
   * The OIDC token endpoint.
   * 
   * @example
   * https://example.com/auth/token
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * The OIDC UserInfo endpoint.
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
   * The OIDC client authentication configuration.
   */
  authnParam?: CreateIdentityProviderRequestOidcConfigAuthnParam;
  /**
   * @remarks
   * The OIDC endpoint configuration.
   */
  endpointConfig?: CreateIdentityProviderRequestOidcConfigEndpointConfig;
  /**
   * @remarks
   * The collection of OIDC grant scopes.
   * 
   * @example
   * openid
   */
  grantScopes?: string[];
  /**
   * @remarks
   * The OIDC grant type.
   * 
   * @example
   * authorization_code
   */
  grantType?: string;
  /**
   * @remarks
   * The PKCE algorithm. Valid values:
   * 
   * - SHA256: S256
   * 
   * - plaintext: plain
   * 
   * @example
   * S256
   */
  pkceChallengeMethod?: string;
  /**
   * @remarks
   * Specifies whether to use PKCE in AuthorizationCode grant mode.
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

export class CreateIdentityProviderRequestSamlConfigCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate content.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIC0jCCAbqgAwIBAgIQXXXXX-----END CERTIFICATE-----
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestSamlConfig extends $dara.Model {
  /**
   * @remarks
   * The binding type.
   * 
   * @example
   * HTTP-REDIRECT
   */
  bindingMethod?: string;
  /**
   * @remarks
   * The list of IdP certificates.
   */
  certificates?: CreateIdentityProviderRequestSamlConfigCertificates[];
  /**
   * @remarks
   * The EntityId of the IdP.
   * 
   * @example
   * http://dc.test.com/adfs/services/trust
   */
  idPEntityId?: string;
  /**
   * @remarks
   * The logon URL of the IdP.
   * 
   * @example
   * https://dc.test.com/adfs/ls/
   */
  idPSsoUrl?: string;
  /**
   * @remarks
   * The maximum clock skew.
   * 
   * @example
   * 180
   */
  maxClockSkew?: number;
  /**
   * @remarks
   * Specifies whether requests must be signed.
   * 
   * @example
   * true
   */
  requireRequestSigned?: boolean;
  /**
   * @remarks
   * Specifies whether the external IdP must sign assertions.
   */
  wantAssertionsSigned?: boolean;
  /**
   * @remarks
   * Specifies whether the external IdP must sign responses.
   */
  wantResponseSigned?: boolean;
  static names(): { [key: string]: string } {
    return {
      bindingMethod: 'BindingMethod',
      certificates: 'Certificates',
      idPEntityId: 'IdPEntityId',
      idPSsoUrl: 'IdPSsoUrl',
      maxClockSkew: 'MaxClockSkew',
      requireRequestSigned: 'RequireRequestSigned',
      wantAssertionsSigned: 'WantAssertionsSigned',
      wantResponseSigned: 'WantResponseSigned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingMethod: 'string',
      certificates: { 'type': 'array', 'itemType': CreateIdentityProviderRequestSamlConfigCertificates },
      idPEntityId: 'string',
      idPSsoUrl: 'string',
      maxClockSkew: 'number',
      requireRequestSigned: 'boolean',
      wantAssertionsSigned: 'boolean',
      wantResponseSigned: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdentityProviderRequestUdPullConfigPeriodicSyncConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  /**
   * @remarks
   * The collection of execution time points.
   */
  periodicSyncTimes?: number[];
  /**
   * @remarks
   * The type.
   * 
   * @example
   * cron
   */
  periodicSyncType?: string;
  static names(): { [key: string]: string } {
    return {
      periodicSyncCron: 'PeriodicSyncCron',
      periodicSyncTimes: 'PeriodicSyncTimes',
      periodicSyncType: 'PeriodicSyncType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodicSyncCron: 'string',
      periodicSyncTimes: { 'type': 'array', 'itemType': 'number' },
      periodicSyncType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.periodicSyncTimes)) {
      $dara.Model.validateArray(this.periodicSyncTimes);
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
   * The list of source nodes for synchronization.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * The target node for synchronization. Set this parameter to an IDaaS organization ID.
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
   * Specifies whether group synchronization is supported. Default value: disabled. Valid values:
   * 
   * - disabled: Disabled.
   * - enabled: Enabled.
   * 
   * @example
   * disabled
   */
  groupSyncStatus?: string;
  /**
   * @remarks
   * Specifies whether to process incremental callback data from the IdP. Valid values:
   * 
   * - disabled: Disabled.
   * - enabled: Enabled.
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * The periodic verification configuration.
   */
  periodicSyncConfig?: CreateIdentityProviderRequestUdPullConfigPeriodicSyncConfig;
  /**
   * @remarks
   * Specifies whether to periodically verify data differences between EIAM and the identity provider. Valid values:
   * 
   * - disabled: Disabled.
   * - enabled: Enabled.
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * The synchronization scope configuration.
   */
  udSyncScopeConfig?: CreateIdentityProviderRequestUdPullConfigUdSyncScopeConfig;
  static names(): { [key: string]: string } {
    return {
      groupSyncStatus: 'GroupSyncStatus',
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      periodicSyncConfig: 'PeriodicSyncConfig',
      periodicSyncStatus: 'PeriodicSyncStatus',
      udSyncScopeConfig: 'UdSyncScopeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupSyncStatus: 'string',
      incrementalCallbackStatus: 'string',
      periodicSyncConfig: CreateIdentityProviderRequestUdPullConfigPeriodicSyncConfig,
      periodicSyncStatus: 'string',
      udSyncScopeConfig: CreateIdentityProviderRequestUdPullConfigUdSyncScopeConfig,
    };
  }

  validate() {
    if(this.periodicSyncConfig && typeof (this.periodicSyncConfig as any).validate === 'function') {
      (this.periodicSyncConfig as any).validate();
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

export class CreateIdentityProviderRequestUdPushConfigPeriodicSyncConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  /**
   * @remarks
   * The collection of execution time points.
   */
  periodicSyncTimes?: number[];
  /**
   * @remarks
   * The type.
   * 
   * @example
   * cron
   */
  periodicSyncType?: string;
  static names(): { [key: string]: string } {
    return {
      periodicSyncCron: 'PeriodicSyncCron',
      periodicSyncTimes: 'PeriodicSyncTimes',
      periodicSyncType: 'PeriodicSyncType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodicSyncCron: 'string',
      periodicSyncTimes: { 'type': 'array', 'itemType': 'number' },
      periodicSyncType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.periodicSyncTimes)) {
      $dara.Model.validateArray(this.periodicSyncTimes);
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
   * The list of source nodes for synchronization.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * The target node for synchronization.
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
   * The incremental callback status. This field is not yet available. Ignore this field.
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * The periodic verification configuration.
   */
  periodicSyncConfig?: CreateIdentityProviderRequestUdPushConfigPeriodicSyncConfig;
  /**
   * @remarks
   * The periodic verification status. This field is not yet available. Ignore this field.
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * The outbound synchronization configuration.
   */
  udSyncScopeConfigs?: CreateIdentityProviderRequestUdPushConfigUdSyncScopeConfigs[];
  static names(): { [key: string]: string } {
    return {
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      periodicSyncConfig: 'PeriodicSyncConfig',
      periodicSyncStatus: 'PeriodicSyncStatus',
      udSyncScopeConfigs: 'UdSyncScopeConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incrementalCallbackStatus: 'string',
      periodicSyncConfig: CreateIdentityProviderRequestUdPushConfigPeriodicSyncConfig,
      periodicSyncStatus: 'string',
      udSyncScopeConfigs: { 'type': 'array', 'itemType': CreateIdentityProviderRequestUdPushConfigUdSyncScopeConfigs },
    };
  }

  validate() {
    if(this.periodicSyncConfig && typeof (this.periodicSyncConfig as any).validate === 'function') {
      (this.periodicSyncConfig as any).validate();
    }
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
   * The agentId of the WeCom self-built application.
   * 
   * @example
   * 278231941749863339
   */
  agentId?: string;
  /**
   * @remarks
   * The authorization callback domain.
   * 
   * @example
   * https://xxx.aliyunidaas.com/xxxx
   */
  authorizeCallbackDomain?: string;
  /**
   * @remarks
   * The WeCom address book secret.
   * 
   * @example
   * mPLLiWv-_9wittxxxEJCpk1xkF5hOgBzpRt4kBkxxx
   */
  contactSecret?: string;
  /**
   * @remarks
   * The corpId of the WeCom self-built application.
   * 
   * @example
   * 3756043633237690761
   */
  corpId?: string;
  /**
   * @remarks
   * The corpSecret of the WeCom self-built application.
   * 
   * @example
   * CSEHDddddddxxxxuxkJEHPveWRXBGqVqRsxxxx
   */
  corpSecret?: string;
  /**
   * @remarks
   * The trusted domain.
   * 
   * @example
   * https://xxx.aliyunidaas.com/
   */
  trustableDomain?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      authorizeCallbackDomain: 'AuthorizeCallbackDomain',
      contactSecret: 'ContactSecret',
      corpId: 'CorpId',
      corpSecret: 'CorpSecret',
      trustableDomain: 'TrustableDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      authorizeCallbackDomain: 'string',
      contactSecret: 'string',
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

export class CreateIdentityProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication configuration.
   */
  authnConfig?: CreateIdentityProviderRequestAuthnConfig;
  /**
   * @remarks
   * The automatic creation rule configuration for accounts.
   */
  autoCreateUserConfig?: CreateIdentityProviderRequestAutoCreateUserConfig;
  /**
   * @remarks
   * The automatic account update rule configuration.
   */
  autoUpdateUserConfig?: CreateIdentityProviderRequestAutoUpdateUserConfig;
  /**
   * @remarks
   * The account binding rule configuration for the OIDC identity provider.
   */
  bindingConfig?: CreateIdentityProviderRequestBindingConfig;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a parameter value from your client to ensure that the value is unique among different requests. ClientToken supports only ASCII characters. If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may vary for each API request.
   * 
   * @example
   * clientToken_20250704_Axxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The DingTalk configuration.
   */
  dingtalkAppConfig?: CreateIdentityProviderRequestDingtalkAppConfig;
  /**
   * @remarks
   * The name of the identity provider.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  identityProviderName?: string;
  /**
   * @remarks
   * The synchronization type of the identity provider. Valid values:
   * 
   * - urn:alibaba:idaas:idp:alibaba:dingtalk:pull: inbound DingTalk
   * - urn:alibaba:idaas:idp:alibaba:dingtalk:push: outbound DingTalk
   * - urn:alibaba:idaas:idp:tencent:wecom:pull: inbound WeCom
   * - urn:alibaba:idaas:idp:bytedance:lark:pull: inbound Lark
   * - urn:alibaba:idaas:idp:microsoft:ad:pull: inbound AD
   * - urn:alibaba:idaas:idp:unknown:ldap:pull: inbound LDAP
   * - urn:alibaba:idaas:idp:standard:oidc: standard OIDC
   * - urn:alibaba:idaas:idp:alibaba:sase: SASE custom OIDC
   * 
   * This parameter is required.
   * 
   * @example
   * urn:alibaba:idaas:idp:alibaba:dingtalk:push
   */
  identityProviderType?: string;
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
   * The Lark configuration information.
   */
  larkConfig?: CreateIdentityProviderRequestLarkConfig;
  /**
   * @remarks
   * The AD/LDAP configuration information.
   */
  ldapConfig?: CreateIdentityProviderRequestLdapConfig;
  /**
   * @remarks
   * The URL of the application logo.
   * 
   * @example
   * xxxx-image://xxxx_23aqr2ye554csg33dqpch5eu3q/tmp/d17d9adc-a943-45e7-ba0c-2838dddea678
   */
  logoUrl?: string;
  /**
   * @remarks
   * The network access endpoint ID.
   * 
   * @example
   * nae_examplexxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The OIDC IdP configuration.
   */
  oidcConfig?: CreateIdentityProviderRequestOidcConfig;
  /**
   * @remarks
   * The SAML IdP configuration.
   */
  samlConfig?: CreateIdentityProviderRequestSamlConfig;
  /**
   * @remarks
   * The inbound synchronization configuration.
   */
  udPullConfig?: CreateIdentityProviderRequestUdPullConfig;
  /**
   * @remarks
   * The outbound synchronization configuration.
   */
  udPushConfig?: CreateIdentityProviderRequestUdPushConfig;
  /**
   * @remarks
   * The WeCom configuration information.
   */
  weComConfig?: CreateIdentityProviderRequestWeComConfig;
  static names(): { [key: string]: string } {
    return {
      authnConfig: 'AuthnConfig',
      autoCreateUserConfig: 'AutoCreateUserConfig',
      autoUpdateUserConfig: 'AutoUpdateUserConfig',
      bindingConfig: 'BindingConfig',
      clientToken: 'ClientToken',
      dingtalkAppConfig: 'DingtalkAppConfig',
      identityProviderName: 'IdentityProviderName',
      identityProviderType: 'IdentityProviderType',
      instanceId: 'InstanceId',
      larkConfig: 'LarkConfig',
      ldapConfig: 'LdapConfig',
      logoUrl: 'LogoUrl',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      oidcConfig: 'OidcConfig',
      samlConfig: 'SamlConfig',
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
      clientToken: 'string',
      dingtalkAppConfig: CreateIdentityProviderRequestDingtalkAppConfig,
      identityProviderName: 'string',
      identityProviderType: 'string',
      instanceId: 'string',
      larkConfig: CreateIdentityProviderRequestLarkConfig,
      ldapConfig: CreateIdentityProviderRequestLdapConfig,
      logoUrl: 'string',
      networkAccessEndpointId: 'string',
      oidcConfig: CreateIdentityProviderRequestOidcConfig,
      samlConfig: CreateIdentityProviderRequestSamlConfig,
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
    if(this.samlConfig && typeof (this.samlConfig as any).validate === 'function') {
      (this.samlConfig as any).validate();
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

