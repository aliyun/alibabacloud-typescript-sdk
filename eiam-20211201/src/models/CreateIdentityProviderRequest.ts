// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentityProviderRequestAuthnConfig extends $dara.Model {
  /**
   * @remarks
   * Whether the corresponding IdP supports authentication. Value range:
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
   * Whether automatic password update is supported. Value range:
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
   * Whether auto-creation of accounts is enabled. Possible values:
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
   * Target organizational unit IDs collection.
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
   * Whether auto-updating of accounts is enabled. Possible values:
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
   * Type of the expression. Value range:
   * 
   * - Field: filed
   * 
   * - Expression: expression
   * 
   * @example
   * filed
   */
  expressionMappingType?: string;
  /**
   * @remarks
   * Expression for the mapped attribute value.
   * 
   * @example
   * idpUser.phoneNumber
   */
  sourceValueExpression?: string;
  /**
   * @remarks
   * Name of the target attribute.
   * 
   * @example
   * user.username
   */
  targetField?: string;
  /**
   * @remarks
   * Description of the target attribute.
   * 
   * @example
   * user.username
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
   * List of rules for automatically matching accounts.
   */
  autoMatchUserProfileExpressions?: CreateIdentityProviderRequestBindingConfigAutoMatchUserProfileExpressions[];
  /**
   * @remarks
   * Whether automatic account matching is enabled. Value range:
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
   * Whether the user manual account binding function is enabled. Value range:
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
   * AppKey of the DingTalk application.
   * 
   * @example
   * Xczngvfemo4e
   */
  appKey?: string;
  /**
   * @remarks
   * AppSecret of the DingTalk application.
   * 
   * @example
   * 5d405a12a6f84ad4ab05ee09axxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * CorpId of the DingTalk application.
   * 
   * @example
   * 3075680424786133505
   */
  corpId?: string;
  /**
   * @remarks
   * DingTalk edition. Valid values:
   * 
   * public_dingtalk – Standard DingTalk.
   * 
   * private_dingtalk – Dedicated DingTalk.
   * 
   * @example
   * public_dingtalk
   */
  dingtalkVersion?: string;
  /**
   * @remarks
   * DingTalk encrypt key.
   * 
   * @example
   * 29003eb11d0a28b4802a6f02fb8aa25dff730e2ac26ffd200dxxxx
   */
  encryptKey?: string;
  /**
   * @remarks
   * DingTalk verification token.
   * 
   * @example
   * 5ba9c127a7abe029003eb11d0a28b4802a6f02fb8aa25dff730e2ac26ffd200dxxxx
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
   * Lark (Feishu) app appId.
   * 
   * @example
   * cli_xxxx
   */
  appId?: string;
  /**
   * @remarks
   * Lark (Feishu) app secret.
   * 
   * @example
   * KiiLzh5Dueh4wbLxxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * Lark (Feishu) encrypt key.
   * 
   * @example
   * 29003eb11d0a28b4802a6f02fb8aa25dff730e2ac26ffd200dxxxx
   */
  encryptKey?: string;
  /**
   * @remarks
   * Lark (Feishu) enterprise number.
   * 
   * @example
   * FSX123111xxx
   */
  enterpriseNumber?: string;
  /**
   * @remarks
   * Lark (Feishu)  verification token.
   * 
   * @example
   * 5ba9c127a7abe029003eb11d0a28b4802a6f02fb8aa25dff730e2ac26ffd200dxxxx
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
   * Administrator username.
   * 
   * @example
   * DC=example,DC=com
   */
  administratorUsername?: string;
  /**
   * @remarks
   * Whether to verify the certificate fingerprint. Value range:
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
   * List of certificate fingerprints.
   */
  certificateFingerprints?: string[];
  /**
   * @remarks
   * Group member attribute name.
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
   * Custom filter for Group ObjectClass.
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
   * Organization Unit ObjectClass.
   * 
   * @example
   * organizationUnit,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @example
   * ou
   */
  organizationalUnitRdn?: string;
  /**
   * @example
   * enabled
   */
  passwordSyncStatus?: string;
  /**
   * @remarks
   * Whether startTLS is enabled. Value range:
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
   * Custom filter for User ObjectClass.
   * 
   * @example
   * (|(cn=test)(mail=test@test.com))
   */
  userObjectClassCustomFilter?: string;
  /**
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
   * OIDC authentication method. Value range:
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
   * The ID of the client.
   * 
   * @example
   * mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The  secret of the client.
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
   * OIDC issuer information.
   * 
   * @example
   * https://example.com/auth
   */
  issuer?: string;
  /**
   * @remarks
   * OIDC jwks uri.
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
   * OIDC user info endpoint.
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
   * OIDC grant scopes collection.
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
   * PKCE algorithm. Possible values:
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
   * Whether to use PKCE in the AuthorizationCode grant mode.
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

export class CreateIdentityProviderRequestUdPullConfigPeriodicSyncConfig extends $dara.Model {
  /**
   * @remarks
   * cron expression.
   * 
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  /**
   * @remarks
   * Collection of time points.
   */
  periodicSyncTimes?: number[];
  /**
   * @remarks
   * type.
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
   * List of source nodes for synchronization.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * Synchronize target node, and fill in the IDaaS organization ID.
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
   * Whether group synchronization is supported. The default value is disabled. Possible values:
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
   * Incremental callback status, indicating whether to process incremental callback data from the IdP. Possible values:
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
   * Scheduled configuration verification.
   */
  periodicSyncConfig?: CreateIdentityProviderRequestUdPullConfigPeriodicSyncConfig;
  /**
   * @remarks
   * Periodic check status, indicating whether to periodically check the data differences between EIAM and the identity provider. Possible values:
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
   * Synchronization scope configuration information.
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
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  periodicSyncTimes?: number[];
  /**
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
   * List of source nodes for synchronization.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * Target node for synchronization.
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
   * Incremental callback status. This field is reserved and currently not in use; please ignore it.
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  periodicSyncConfig?: CreateIdentityProviderRequestUdPushConfigPeriodicSyncConfig;
  /**
   * @remarks
   * Periodic check status. This field is currently not in use, please ignore it.
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * Outbound synchronization configuration information.
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
   * Agent ID of the self-built WeCom application.
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
   * Corp ID of the self-built WeCom application.
   * 
   * @example
   * 3756043633237690761
   */
  corpId?: string;
  /**
   * @remarks
   * Corp Secret of the self-built WeCom application.
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
   * Authentication configuration information.
   */
  authnConfig?: CreateIdentityProviderRequestAuthnConfig;
  /**
   * @remarks
   * Auto-create account rule configuration.
   */
  autoCreateUserConfig?: CreateIdentityProviderRequestAutoCreateUserConfig;
  /**
   * @remarks
   * Auto-update account rule configuration.
   */
  autoUpdateUserConfig?: CreateIdentityProviderRequestAutoUpdateUserConfig;
  /**
   * @remarks
   * OIDC identity provider account binding rule configuration.
   */
  bindingConfig?: CreateIdentityProviderRequestBindingConfig;
  /**
   * @remarks
   * Idp client token.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * DingTalk configuration information.
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
   * - Inbound to DingTalk: urn:alibaba:idaas:idp:alibaba:dingtalk:pull
   * 
   * - Outbound to DingTalk: urn:alibaba:idaas:idp:alibaba:dingtalk:push
   * 
   * - Inbound to WeCom: urn:alibaba:idaas:idp:tencent:wecom:pull
   * 
   * - Inbound to Lark: urn:alibaba:idaas:idp:bytedance:lark:pull
   * 
   * - Inbound to AD: urn:alibaba:idaas:idp:microsoft:ad:pull
   * 
   * - Inbound to LDAP: urn:alibaba:idaas:idp:unknown:ldap:pull
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
   * Lark (Feishu) configuration information.
   */
  larkConfig?: CreateIdentityProviderRequestLarkConfig;
  /**
   * @remarks
   * AD/LDAP configuration information.
   */
  ldapConfig?: CreateIdentityProviderRequestLdapConfig;
  /**
   * @remarks
   * IdP logo url.
   * 
   * @example
   * xxxx-image://idaas_23aqr2ye554csg33dqpch5eu3q/tmp/d17d9adc-a943-45e7-ba0c-2838dddexxxxx
   */
  logoUrl?: string;
  /**
   * @remarks
   * The unique identifier of the network access endpoint.
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
  /**
   * @remarks
   * Inbound synchronization configuration information.
   */
  udPullConfig?: CreateIdentityProviderRequestUdPullConfig;
  /**
   * @remarks
   * Outbound synchronization configuration information.
   */
  udPushConfig?: CreateIdentityProviderRequestUdPushConfig;
  /**
   * @remarks
   * WeCom configuration information.
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

