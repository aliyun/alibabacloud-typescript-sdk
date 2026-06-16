// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentityProviderRequestAuthnConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the IdP supports authentication. Valid values:
   * 
   * - disabled
   * 
   * - enabled
   * 
   * @example
   * enabled
   */
  authnStatus?: string;
  /**
   * @remarks
   * Specifies whether to automatically update passwords. Valid values:
   * 
   * - disabled
   * 
   * - enabled
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
   * Specifies whether to automatically create accounts. Valid values:
   * 
   * - disabled
   * 
   * - enabled
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
   * Specifies whether to automatically update accounts. Valid values:
   * 
   * - disabled
   * 
   * - enabled
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
   * - field
   * 
   * - expression
   * 
   * @example
   * field
   */
  expressionMappingType?: string;
  /**
   * @remarks
   * The expression for the value of the mapped attribute.
   * 
   * @example
   * idpUser.phoneNumber
   */
  sourceValueExpression?: string;
  /**
   * @remarks
   * The name of the target mapped attribute.
   * 
   * @example
   * user.username
   */
  targetField?: string;
  /**
   * @remarks
   * The name of the mapping\\"s target property.
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
   * Specifies whether to automatically match accounts. Valid values:
   * 
   * - disabled
   * 
   * - enabled
   * 
   * @example
   * disabled
   */
  autoMatchUserStatus?: string;
  /**
   * @remarks
   * Specifies whether to allow users to manually bind accounts. Valid values:
   * 
   * - disabled
   * 
   * - enabled
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
   * The AppKey of the DingTalk application.
   * 
   * @example
   * Xczngvfemo4e
   */
  appKey?: string;
  /**
   * @remarks
   * The AppSecret of the DingTalk application.
   * 
   * @example
   * 5d405a12a6f84ad4ab05ee09axxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * The CorpId of the DingTalk application.
   * 
   * @example
   * 307568042478613xxxx
   */
  corpId?: string;
  /**
   * @remarks
   * The DingTalk version. Valid values:
   * 
   * - public_dingtalk: Standard DingTalk
   * 
   * - private_dingtalk: Enterprise DingTalk
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
   * The AppId of the Lark application.
   * 
   * @example
   * cli_xxxx
   */
  appId?: string;
  /**
   * @remarks
   * The App Secret of the Lark application.
   * 
   * @example
   * KiiLzh5Dueh4wbLxxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * The EncryptKey of the custom Lark application.
   * 
   * @example
   * VkdWw91mdkrjVFr3ObNwefap21dfxxxx
   */
  encryptKey?: string;
  /**
   * @remarks
   * The enterprise code of Lark.
   * 
   * @example
   * FSX123111xxx
   */
  enterpriseNumber?: string;
  /**
   * @remarks
   * The VerificationToken of the custom Lark application.
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
   * - disabled
   * 
   * - enabled
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
   * The group member identifier.
   * 
   * @example
   * member
   */
  groupMemberAttributeName?: string;
  /**
   * @remarks
   * The objectClass for groups.
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
   * The address of the AD/LDAP server.
   * 
   * @example
   * 123.xx.xx.89
   */
  ldapServerHost?: string;
  /**
   * @remarks
   * The port number of the AD/LDAP server.
   * 
   * @example
   * 636
   */
  ldapServerPort?: number;
  /**
   * @remarks
   * The objectClass for organizational units.
   * 
   * @example
   * organizationUnit,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * The RDN for organizational units.
   * 
   * @example
   * ou
   */
  organizationalUnitRdn?: string;
  /**
   * @remarks
   * The switch for password synchronization.
   * 
   * @example
   * enabled
   */
  passwordSyncStatus?: string;
  /**
   * @remarks
   * Specifies whether to enable StartTLS. Valid values:
   * 
   * - disabled
   * 
   * - enabled
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
   * The objectClass for users.
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
   * The RDN for users.
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
   * The OpenID Connect (OIDC) client secret.
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
   * The OIDC issuer.
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
   * The OIDC user information endpoint.
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
   * The OIDC client authentication configurations.
   */
  authnParam?: CreateIdentityProviderRequestOidcConfigAuthnParam;
  /**
   * @remarks
   * The OIDC endpoint configurations.
   */
  endpointConfig?: CreateIdentityProviderRequestOidcConfigEndpointConfig;
  /**
   * @remarks
   * The collection of OIDC authorization scopes.
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
   * - S256: SHA256
   * 
   * - plain: Plaintext
   * 
   * @example
   * S256
   */
  pkceChallengeMethod?: string;
  /**
   * @remarks
   * Specifies whether to use PKCE in the Authorization Code grant type.
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
   * @example
   * HTTP-REDIRECT
   */
  bindingMethod?: string;
  certificates?: CreateIdentityProviderRequestSamlConfigCertificates[];
  /**
   * @example
   * http://dc.test.com/adfs/services/trust
   */
  idPEntityId?: string;
  /**
   * @example
   * https://dc.test.com/adfs/ls/
   */
  idPSsoUrl?: string;
  /**
   * @example
   * 180
   */
  maxClockSkew?: number;
  /**
   * @example
   * true
   */
  requireRequestSigned?: boolean;
  wantAssertionsSigned?: boolean;
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
   * The collection of running time points.
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
   * The target node for synchronization. Enter the IDaaS organization ID.
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
   * Specifies whether to synchronize groups. The default value is disabled. Valid values:
   * 
   * - disabled
   * 
   * - enabled
   * 
   * @example
   * disabled
   */
  groupSyncStatus?: string;
  /**
   * @remarks
   * The status of incremental callbacks. Specifies whether to process incremental callback data from the identity provider (IdP). Valid values:
   * 
   * - disabled
   * 
   * - enabled
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * The configuration for periodic synchronization.
   */
  periodicSyncConfig?: CreateIdentityProviderRequestUdPullConfigPeriodicSyncConfig;
  /**
   * @remarks
   * The status of periodic synchronization. Specifies whether to periodically check for data differences between IDaaS and the IdP. Valid values:
   * 
   * - disabled
   * 
   * - enabled
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * The synchronization scope configurations.
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
   * The collection of running time points.
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
   * The status of incremental callbacks. This parameter is not in use. Ignore this parameter.
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * The periodic synchronization configurations.
   */
  periodicSyncConfig?: CreateIdentityProviderRequestUdPushConfigPeriodicSyncConfig;
  /**
   * @remarks
   * The status of periodic synchronization. This parameter is not in use. Ignore this parameter.
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * The configurations of the outbound synchronization scope.
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
   * The agent ID of the custom WeCom application.
   * 
   * @example
   * 278231941749863339
   */
  agentId?: string;
  /**
   * @remarks
   * The authorized callback domain.
   * 
   * @example
   * https://xxx.aliyunidaas.com/xxxx
   */
  authorizeCallbackDomain?: string;
  /**
   * @remarks
   * The CorpId of the custom WeCom application.
   * 
   * @example
   * 3756043633237690761
   */
  corpId?: string;
  /**
   * @remarks
   * The CorpSecret of the custom WeCom application.
   * 
   * @example
   * CSEHDddddddxxxxuxkJEHPveWRXBGqVqRsxxxx
   */
  corpSecret?: string;
  /**
   * @remarks
   * The trusted domain name.
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

export class CreateIdentityProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication configurations.
   */
  authnConfig?: CreateIdentityProviderRequestAuthnConfig;
  /**
   * @remarks
   * The rule configurations for automatic account creation.
   */
  autoCreateUserConfig?: CreateIdentityProviderRequestAutoCreateUserConfig;
  /**
   * @remarks
   * The rule configurations for automatic account updates.
   */
  autoUpdateUserConfig?: CreateIdentityProviderRequestAutoUpdateUserConfig;
  /**
   * @remarks
   * The account binding rule configurations for the OIDC identity provider.
   */
  bindingConfig?: CreateIdentityProviderRequestBindingConfig;
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. Generate a unique value from your client for each request. The ClientToken can only contain ASCII characters. Note: If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * clientToken_20250704_Axxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The DingTalk configurations.
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
   * The synchronization type of the identity provider.
   * 
   * - Inbound DingTalk: urn:alibaba:idaas:idp:alibaba:dingtalk:pull
   * 
   * - Outbound DingTalk: urn:alibaba:idaas:idp:alibaba:dingtalk:push
   * 
   * - Inbound WeCom: urn:alibaba:idaas:idp:tencent:wecom:pull
   * 
   * - Inbound Lark: urn:alibaba:idaas:idp:bytedance:lark:pull
   * 
   * - Inbound AD: urn:alibaba:idaas:idp:microsoft:ad:pull
   * 
   * - Inbound LDAP: urn:alibaba:idaas:idp:unknown:ldap:pull
   * 
   * - Standard OIDC: urn:alibaba:idaas:idp:standard:oidc
   * 
   * - SASE-specific OIDC: urn:alibaba:idaas:idp:alibaba:sase
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
   * The Lark configurations.
   */
  larkConfig?: CreateIdentityProviderRequestLarkConfig;
  /**
   * @remarks
   * The AD/LDAP configurations.
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
   * The network endpoint ID.
   * 
   * @example
   * nae_examplexxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The OIDC IdP configurations.
   */
  oidcConfig?: CreateIdentityProviderRequestOidcConfig;
  samlConfig?: CreateIdentityProviderRequestSamlConfig;
  /**
   * @remarks
   * The inbound synchronization configurations.
   */
  udPullConfig?: CreateIdentityProviderRequestUdPullConfig;
  /**
   * @remarks
   * The outbound synchronization configurations.
   */
  udPushConfig?: CreateIdentityProviderRequestUdPushConfig;
  /**
   * @remarks
   * The WeCom configurations.
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

