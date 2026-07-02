// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentityProviderRequestAuthnConfig extends $dara.Model {
  /**
   * @remarks
   * Whether the corresponding IdP supports authentication. Valid values:
   * - Disabled: disabled
   * 
   * - Enabled: enabled
   * 
   * @example
   * enabled
   */
  authnStatus?: string;
  /**
   * @remarks
   * Whether automatic password update is supported. Valid values:
   * - Disabled: disabled
   * 
   * - Enabled: enabled
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
   * Whether automatic account creation is enabled. Valid values:
   * - Disabled: disabled
   * 
   * - Enabled: enabled
   * 
   * @example
   * disabled
   */
  autoCreateUserStatus?: string;
  /**
   * @remarks
   * Set of target organizational unit IDs.
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
   * Whether automatic account update is enabled. Valid values:
   * - Disabled: disabled
   * 
   * - Enabled: enabled
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
   * Expression type. Valid values:
   * 
   * - Field: field
   * 
   * - Expression: expression
   * 
   * @example
   * field
   */
  expressionMappingType?: string;
  /**
   * @remarks
   * Mapping attribute value expression.
   * 
   * @example
   * idpUser.phoneNumber
   */
  sourceValueExpression?: string;
  /**
   * @remarks
   * Mapping target attribute name.
   * 
   * @example
   * user.username
   */
  targetField?: string;
  /**
   * @remarks
   * Mapping target attribute description.
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
   * List of rules for automatic account matching.
   */
  autoMatchUserProfileExpressions?: CreateIdentityProviderRequestBindingConfigAutoMatchUserProfileExpressions[];
  /**
   * @remarks
   * Whether automatic account matching is enabled. Valid values:
   * 
   * - Disabled: disabled
   * 
   * - Enabled: enabled
   * 
   * @example
   * disabled
   */
  autoMatchUserStatus?: string;
  /**
   * @remarks
   * Whether the manual account binding feature is enabled. Valid values:
   * - Disabled: disabled
   * 
   * - Enabled: enabled
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
   * AppKey of the DingTalk first-party application.
   * 
   * @example
   * Xczngvfemo4e
   */
  appKey?: string;
  /**
   * @remarks
   * AppSecret of the DingTalk first-party application.
   * 
   * @example
   * 5d405a12a6f84ad4ab05ee09axxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * CorpId of the DingTalk first-party application.
   * 
   * @example
   * 307568042478613xxxx
   */
  corpId?: string;
  /**
   * @remarks
   * DingTalk version. Valid values:
   * 
   * - Standard DingTalk: public_dingtalk
   * 
   * - Exclusive DingTalk: private_dingtalk
   * 
   * @example
   * public_dingtalk
   */
  dingtalkVersion?: string;
  /**
   * @remarks
   * DingTalk application EncryptKey.
   * 
   * @example
   * VkdWw91mdkrjVFr3ObNwefap21dfxxxx
   */
  encryptKey?: string;
  /**
   * @remarks
   * DingTalk application VerificationToken.
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
   * Lark application AppId.
   * 
   * @example
   * cli_xxxx
   */
  appId?: string;
  /**
   * @remarks
   * Lark application Secret.
   * 
   * @example
   * KiiLzh5Dueh4wbLxxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * EncryptKey of the Lark self-built application.
   * 
   * @example
   * VkdWw91mdkrjVFr3ObNwefap21dfxxxx
   */
  encryptKey?: string;
  /**
   * @remarks
   * Lark enterprise code.
   * 
   * @example
   * FSX123111xxx
   */
  enterpriseNumber?: string;
  /**
   * @remarks
   * VerificationToken of the Lark self-built application.
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
   * Administrator password.
   * 
   * @example
   * xxxx
   */
  administratorPassword?: string;
  /**
   * @remarks
   * Administrator account.
   * 
   * @example
   * DC=example,DC=com
   */
  administratorUsername?: string;
  /**
   * @remarks
   * Whether to verify certificate fingerprint. Valid values:
   * 
   * - Disabled: disabled
   * 
   * - Enabled: enabled
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
   * Group member attribute.
   * 
   * @example
   * member
   */
  groupMemberAttributeName?: string;
  /**
   * @remarks
   * Group ObjectClass.
   * 
   * @example
   * group
   */
  groupObjectClass?: string;
  /**
   * @remarks
   * Group custom filter.
   * 
   * @example
   * (|(cn=test)(group=test@test.com))
   */
  groupObjectClassCustomFilter?: string;
  /**
   * @remarks
   * Communication protocol.
   * 
   * @example
   * ldap
   */
  ldapProtocol?: string;
  /**
   * @remarks
   * AD/LDAP server address.
   * 
   * @example
   * 123.xx.xx.89
   */
  ldapServerHost?: string;
  /**
   * @remarks
   * AD/LDAP port number.
   * 
   * @example
   * 636
   */
  ldapServerPort?: number;
  /**
   * @remarks
   * Organization ObjectClass.
   * 
   * @example
   * organizationUnit,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * Organization RDN.
   * 
   * @example
   * ou
   */
  organizationalUnitRdn?: string;
  /**
   * @remarks
   * Password synchronization switch.
   * 
   * @example
   * enabled
   */
  passwordSyncStatus?: string;
  /**
   * @remarks
   * Whether startTLS is enabled. Valid values:
   * - Disabled: disabled
   * 
   * - Enabled: enabled
   * 
   * @example
   * enabled
   */
  startTlsStatus?: string;
  /**
   * @remarks
   * User login identifier.
   * 
   * @example
   * userPrincipalName, mail
   */
  userLoginIdentifier?: string;
  /**
   * @remarks
   * User ObjectClass.
   * 
   * @example
   * person,user
   */
  userObjectClass?: string;
  /**
   * @remarks
   * User custom filter.
   * 
   * @example
   * (|(cn=test)(mail=test@test.com))
   */
  userObjectClassCustomFilter?: string;
  /**
   * @remarks
   * User RDN.
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
   * OIDC authentication method. Valid values:
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
   * OIDC client ID.
   * 
   * @example
   * mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * OIDC client secret.
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
   * OIDC authorization endpoint.
   * 
   * @example
   * https://example.com/auth/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * OIDC issuer.
   * 
   * @example
   * https://example.com/auth
   */
  issuer?: string;
  /**
   * @remarks
   * OIDC JWKS URI.
   * 
   * @example
   * https://example.com/auth/jwks
   */
  jwksUri?: string;
  /**
   * @remarks
   * OIDC token endpoint.
   * 
   * @example
   * https://example.com/auth/token
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * OIDC UserInfo endpoint.
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
   * OIDC client authentication configuration.
   */
  authnParam?: CreateIdentityProviderRequestOidcConfigAuthnParam;
  /**
   * @remarks
   * OIDC endpoint configuration.
   */
  endpointConfig?: CreateIdentityProviderRequestOidcConfigEndpointConfig;
  /**
   * @remarks
   * OIDC grant scopes.
   * 
   * @example
   * openid
   */
  grantScopes?: string[];
  /**
   * @remarks
   * OIDC grant type.
   * 
   * @example
   * authorization_code
   */
  grantType?: string;
  /**
   * @remarks
   * PKCE algorithm. Valid values:
   * 
   * - SHA256: S256
   * 
   * - Plain text: plain
   * 
   * @example
   * S256
   */
  pkceChallengeMethod?: string;
  /**
   * @remarks
   * Whether to use PKCE in Authorization Code grant mode.
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
   * Cron expression.
   * 
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  /**
   * @remarks
   * Set of execution time points.
   */
  periodicSyncTimes?: number[];
  /**
   * @remarks
   * Type.
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
   * Source synchronization node list.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * Target synchronization node. Enter the IDaaS organization ID.
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
   * Whether group synchronization is supported. Default: disabled. Valid values:
   * 
   * - Disabled: disabled
   * 
   * - Enabled: enabled
   * 
   * @example
   * disabled
   */
  groupSyncStatus?: string;
  /**
   * @remarks
   * Incremental callback status. Specifies whether to process incremental callback data from the IdP. Valid values:
   * 
   * - Disabled: disabled
   * 
   * - Enabled: enabled
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * Periodic verification configuration.
   */
  periodicSyncConfig?: CreateIdentityProviderRequestUdPullConfigPeriodicSyncConfig;
  /**
   * @remarks
   * Periodic verification status. Specifies whether to periodically verify data differences between EIAM and the identity provider. Valid values:
   * - Disabled: disabled
   * 
   * - Enabled: enabled
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * Synchronization scope configuration.
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
   * Cron expression.
   * 
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  /**
   * @remarks
   * Set of execution time points.
   */
  periodicSyncTimes?: number[];
  /**
   * @remarks
   * Type.
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
   * Source synchronization node list.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * Target synchronization node.
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
   * Incremental callback status. This field is not yet enabled. Please ignore it.
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * Periodic verification configuration.
   */
  periodicSyncConfig?: CreateIdentityProviderRequestUdPushConfigPeriodicSyncConfig;
  /**
   * @remarks
   * Periodic verification status. This field is not yet enabled. Please ignore it.
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * Outbound synchronization configuration.
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
   * AgentId of the WeCom self-built application.
   * 
   * @example
   * 278231941749863339
   */
  agentId?: string;
  /**
   * @remarks
   * Authorization callback domain.
   * 
   * @example
   * https://xxx.aliyunidaas.com/xxxx
   */
  authorizeCallbackDomain?: string;
  /**
   * @remarks
   * CorpId of the WeCom self-built application.
   * 
   * @example
   * 3756043633237690761
   */
  corpId?: string;
  /**
   * @remarks
   * CorpSecret of the WeCom self-built application.
   * 
   * @example
   * CSEHDddddddxxxxuxkJEHPveWRXBGqVqRsxxxx
   */
  corpSecret?: string;
  /**
   * @remarks
   * Trusted domain.
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
   * Authentication configuration.
   */
  authnConfig?: CreateIdentityProviderRequestAuthnConfig;
  /**
   * @remarks
   * Automatic account creation rule configuration.
   */
  autoCreateUserConfig?: CreateIdentityProviderRequestAutoCreateUserConfig;
  /**
   * @remarks
   * Automatic account update rule configuration.
   */
  autoUpdateUserConfig?: CreateIdentityProviderRequestAutoUpdateUserConfig;
  /**
   * @remarks
   * OIDC identity provider account binding rule configuration.
   */
  bindingConfig?: CreateIdentityProviderRequestBindingConfig;
  /**
   * @remarks
   * Client token used to ensure the idempotency of the request. Generate a parameter value from your client to ensure the value is unique across different requests. ClientToken only supports ASCII characters. If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * clientToken_20250704_Axxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * DingTalk configuration.
   */
  dingtalkAppConfig?: CreateIdentityProviderRequestDingtalkAppConfig;
  /**
   * @remarks
   * Identity provider name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  identityProviderName?: string;
  /**
   * @remarks
   * Identity provider synchronization type.
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
   * - SASE Custom OIDC: urn:alibaba:idaas:idp:alibaba:sase
   * 
   * This parameter is required.
   * 
   * @example
   * urn:alibaba:idaas:idp:alibaba:dingtalk:push
   */
  identityProviderType?: string;
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
   * Lark configuration.
   */
  larkConfig?: CreateIdentityProviderRequestLarkConfig;
  /**
   * @remarks
   * AD/LDAP configuration.
   */
  ldapConfig?: CreateIdentityProviderRequestLdapConfig;
  /**
   * @remarks
   * Application logo URL.
   * 
   * @example
   * xxxx-image://xxxx_23aqr2ye554csg33dqpch5eu3q/tmp/d17d9adc-a943-45e7-ba0c-2838dddea678
   */
  logoUrl?: string;
  /**
   * @remarks
   * Network access endpoint ID.
   * 
   * @example
   * nae_examplexxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * OIDC IdP configuration.
   */
  oidcConfig?: CreateIdentityProviderRequestOidcConfig;
  samlConfig?: CreateIdentityProviderRequestSamlConfig;
  /**
   * @remarks
   * Inbound synchronization configuration.
   */
  udPullConfig?: CreateIdentityProviderRequestUdPullConfig;
  /**
   * @remarks
   * Outbound synchronization configuration.
   */
  udPushConfig?: CreateIdentityProviderRequestUdPushConfig;
  /**
   * @remarks
   * WeCom configuration.
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

