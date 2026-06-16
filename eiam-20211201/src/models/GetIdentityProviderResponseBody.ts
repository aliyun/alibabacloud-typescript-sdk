// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkAppConfig extends $dara.Model {
  /**
   * @remarks
   * The AppKey of your first-party application in DingTalk.
   * 
   * @example
   * 41reopmwoy9s
   */
  appKey?: string;
  /**
   * @remarks
   * The AppSecret of your first-party application in DingTalk.
   * 
   * @example
   * REOQ6Cl55kriOd8NOBeqWYLKpHR4p6fdZxxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * The corporate ID of your first-party application in DingTalk.
   * 
   * @example
   * 3756043633237690761
   */
  corpId?: string;
  /**
   * @remarks
   * The version of DingTalk QR code login.
   * 
   * @example
   * old_version
   */
  dingtalkLoginVersion?: string;
  /**
   * @remarks
   * The DingTalk edition. Valid values:
   * 
   * - Standard DingTalk: `public_dingtalk`
   * 
   * - Exclusive DingTalk: `private_dingtalk`
   * 
   * @example
   * public_dingtalk
   */
  dingtalkVersion?: string;
  /**
   * @remarks
   * The encryption key for your first-party application in DingTalk.
   * 
   * @example
   * 29003eb11d0a28b4802a6f02fb8aa25dff730e2ac26ffd200d
   */
  encryptKey?: string;
  /**
   * @remarks
   * The verification token for your first-party application in DingTalk.
   * 
   * @example
   * 5ba9c127a7abe029003eb11d0a28b4802a6f02fb8aa25dff730e2ac26ffd200d
   */
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      corpId: 'CorpId',
      dingtalkLoginVersion: 'DingtalkLoginVersion',
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
      dingtalkLoginVersion: 'string',
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
   * The department ID in DingTalk.
   * 
   * @example
   * 123xxx444
   */
  deptId?: string;
  /**
   * @remarks
   * The department name in DingTalk.
   * 
   * @example
   * test_department
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
   * The user name in DingTalk.
   * 
   * @example
   * zhangsan
   */
  name?: string;
  /**
   * @remarks
   * The user ID in DingTalk.
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
   * The authorized DingTalk departments.
   */
  authedDepartmentIds?: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfigAuthedDepartmentIds[];
  /**
   * @remarks
   * The list of authorized DingTalk user accounts.
   */
  authedUsers?: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfigAuthedUsers[];
  /**
   * @remarks
   * The corporate ID in DingTalk.
   * 
   * @example
   * ding_xxxxx
   */
  corpId?: string;
  /**
   * @remarks
   * The corporate name in DingTalk.
   * 
   * @example
   * test_enterprise
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

export class GetIdentityProviderResponseBodyIdentityProviderDetailEndpointMetadata extends $dara.Model {
  /**
   * @remarks
   * SAML ACS address
   * 
   * @example
   * https://9test.aliyunidaas.com/login/saml2/idp_nhlraxfiwsx7w7zp26qzyoxxxx/acs
   */
  samlAcsEndpoint?: string;
  /**
   * @remarks
   * SAML EntityId
   * 
   * @example
   * https://9test.aliyunidaas.com/login/saml2/idp_nhlraxfiwsx7w7zp26qzyoxxxx/meta
   */
  samlEntityId?: string;
  /**
   * @remarks
   * SAML metadata address
   * 
   * @example
   * https://9test.aliyunidaas.com/login/saml2/idp_nhlraxfiwsx7w7zp26qzyoxxxx/meta
   */
  samlMetaEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      samlAcsEndpoint: 'SamlAcsEndpoint',
      samlEntityId: 'SamlEntityId',
      samlMetaEndpoint: 'SamlMetaEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      samlAcsEndpoint: 'string',
      samlEntityId: 'string',
      samlMetaEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBodyIdentityProviderDetailLarkConfig extends $dara.Model {
  /**
   * @remarks
   * The App ID of your custom application in Lark.
   * 
   * @example
   * cli_a7a99f53a317100c
   */
  appId?: string;
  /**
   * @remarks
   * The App Secret of your custom application in Lark.
   * 
   * @example
   * ***
   */
  appSecret?: string;
  /**
   * @remarks
   * The encryption key for your custom application in Lark.
   * 
   * @example
   * VkdWw91mdkrjVFr3ObNwefap21dfbZbK
   */
  encryptKey?: string;
  /**
   * @remarks
   * The enterprise code for Lark.
   * 
   * @example
   * FX1231xxxx
   */
  enterpriseNumber?: string;
  /**
   * @remarks
   * The Verification Token of your custom application in Lark.
   * 
   * @example
   * VkdWw91mdkrjVFr3ObNwefap21dfbZbK
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
   * The password of the AD/LDAP administrator.
   * 
   * @example
   * XXXX
   */
  administratorPassword?: string;
  /**
   * @remarks
   * The username of the AD/LDAP administrator.
   * 
   * @example
   * example.com
   */
  administratorUsername?: string;
  /**
   * @remarks
   * Indicates whether to verify the certificate fingerprint. Valid values:
   * 
   * - `disabled`
   * 
   * - `enabled`
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
   * The communication protocol for AD/LDAP.
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
   * 127.xx.xx.100
   */
  ldapServerHost?: string;
  /**
   * @remarks
   * The port of the AD/LDAP server.
   * 
   * @example
   * 389
   */
  ldapServerPort?: number;
  /**
   * @remarks
   * Indicates whether StartTLS is enabled. Valid values:
   * 
   * - `disabled`
   * 
   * - `enabled`
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
   * The OIDC authentication method.
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

export class GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfigEndpointConfig extends $dara.Model {
  /**
   * @remarks
   * The OIDC authorization endpoint.
   * 
   * @example
   * https://example.com/oauth/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The OIDC issuer.
   * 
   * @example
   * https://example.com/oauth
   */
  issuer?: string;
  /**
   * @remarks
   * The OIDC JWKS URI.
   * 
   * @example
   * https://example.com/oauth/jwks
   */
  jwksUri?: string;
  /**
   * @remarks
   * The OIDC token endpoint.
   * 
   * @example
   * https://example.com/oauth/token
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * The OIDC userinfo endpoint.
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
   * The OIDC client authentication configuration.
   */
  authnParam?: GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfigAuthnParam;
  /**
   * @remarks
   * The OIDC endpoint configuration.
   */
  endpointConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfigEndpointConfig;
  /**
   * @remarks
   * The list of OIDC authorization scopes.
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
   * The algorithm for Proof Key for Code Exchange (PKCE). Valid values:
   * 
   * - SHA256: `S256`
   * 
   * - Plaintext: `plain`
   * 
   * @example
   * S256
   */
  pkceChallengeMethod?: string;
  /**
   * @remarks
   * Indicates whether to use PKCE in the authorization code grant type.
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

export class GetIdentityProviderResponseBodyIdentityProviderDetailSamlConfigCertificatesCertificateMetadata extends $dara.Model {
  /**
   * @remarks
   * Certificate expiration on or before
   * 
   * @example
   * 1704067200000
   */
  notAfter?: number;
  /**
   * @remarks
   * Certificate not valid before
   * 
   * @example
   * 1672531200000
   */
  notBefore?: number;
  static names(): { [key: string]: string } {
    return {
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notAfter: 'number',
      notBefore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBodyIdentityProviderDetailSamlConfigCertificates extends $dara.Model {
  /**
   * @remarks
   * The metadata of the certificate.
   */
  certificateMetadata?: GetIdentityProviderResponseBodyIdentityProviderDetailSamlConfigCertificatesCertificateMetadata;
  /**
   * @remarks
   * The content of the certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIC0jCCAbqgAwIBAgIQXXXXX -----END CERTIFICATE-----
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      certificateMetadata: 'CertificateMetadata',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateMetadata: GetIdentityProviderResponseBodyIdentityProviderDetailSamlConfigCertificatesCertificateMetadata,
      content: 'string',
    };
  }

  validate() {
    if(this.certificateMetadata && typeof (this.certificateMetadata as any).validate === 'function') {
      (this.certificateMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderResponseBodyIdentityProviderDetailSamlConfig extends $dara.Model {
  /**
   * @remarks
   * Binding Type
   * 
   * @example
   * HTTP-REDIRECT
   */
  bindingMethod?: string;
  /**
   * @remarks
   * The list of signing certificates for the SAML identity provider.
   */
  certificates?: GetIdentityProviderResponseBodyIdentityProviderDetailSamlConfigCertificates[];
  /**
   * @remarks
   * The entity ID of the SAML identity provider.
   * 
   * @example
   * http://dc.test.com/adfs/services/trust
   */
  idPEntityId?: string;
  /**
   * @remarks
   * The single sign-on (SSO) URL of the SAML identity provider.
   * 
   * @example
   * https://dc.test.com/adfs/ls/
   */
  idPSsoUrl?: string;
  /**
   * @remarks
   * Maximum clock skew
   * 
   * @example
   * 180
   */
  maxClockSkew?: number;
  /**
   * @remarks
   * Is request signing required?
   * 
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
      certificates: { 'type': 'array', 'itemType': GetIdentityProviderResponseBodyIdentityProviderDetailSamlConfigCertificates },
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

export class GetIdentityProviderResponseBodyIdentityProviderDetailUdPullConfigUdSyncScopeConfig extends $dara.Model {
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
   * Indicates whether group synchronization is enabled. Valid values:
   * 
   * - `disabled`
   * 
   * - `enabled`
   * 
   * @example
   * disabled
   */
  groupSyncStatus?: string;
  /**
   * @remarks
   * Indicates whether to process incremental callback data from the identity provider. Valid values:
   * 
   * - `disabled`
   * 
   * - `enabled`
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * The synchronization scope configuration.
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
   * The list of source nodes for synchronization.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * The target node for synchronization.
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
   * This parameter is reserved for future use.
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * The list of synchronization scope configurations.
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
   * The ID of your custom application in WeCom.
   * 
   * @example
   * 1242350
   */
  agentId?: string;
  /**
   * @remarks
   * The authorized callback domain.
   * 
   * @example
   * https://example.com/xxxx
   */
  authorizeCallbackDomain?: string;
  /**
   * @remarks
   * The corporate ID of your custom application in WeCom.
   * 
   * @example
   * 3562012953454577801
   */
  corpId?: string;
  /**
   * @remarks
   * The secret of your custom application in WeCom.
   * 
   * @example
   * weaseiszjskejskaj12sjeszojxxxx
   */
  corpSecret?: string;
  /**
   * @remarks
   * The trusted domain.
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
   * The status of the advanced configuration. Valid values:
   * 
   * - `disabled`
   * 
   * - `enabled`
   * 
   * @example
   * disabled
   */
  advancedStatus?: string;
  /**
   * @remarks
   * The authentication source product, such as Okta, Google, or Azure AD. Valid values:
   * 
   * - DingTalk: `urn:alibaba:idaas:idp:alibaba:dingtalk`
   * 
   * - LDAP: `urn:alibaba:idaas:idp:unknown:ldap`
   * 
   * - Alibaba Cloud IDaaS: `urn:alibaba:idaas:idp:alibaba:idaas`
   * 
   * - WeCom: `urn:alibaba:idaas:idp:tencent:wecom`
   * 
   * - Lark: `urn:alibaba:idaas:idp:bytedance:lark`
   * 
   * - Active Directory: `urn:alibaba:idaas:idp:microsoft:ad`
   * 
   * - Azure Active Directory: `urn:alibaba:idaas:idp:microsoft:aad`
   * 
   * - Alibaba Cloud SASE: `urn:alibaba:idaas:idp:alibaba:sase`
   * 
   * @example
   * urn:alibaba:idaas:idp:bytedance:lark
   */
  authnSourceSupplier?: string;
  /**
   * @remarks
   * The authentication protocol. Valid values:
   * 
   * - OIDC: `urn:alibaba:idaas:authntype:oidc`
   * 
   * - SAML: `urn:alibaba:idaas:authntype:saml2`
   * 
   * @example
   * urn:alibaba:idaas:authntype:oidc
   */
  authnSourceType?: string;
  /**
   * @remarks
   * Indicates whether the identity provider supports authentication. Valid values:
   * 
   * - `disabled`
   * 
   * - `enabled`
   * 
   * @example
   * disabled
   */
  authnStatus?: string;
  /**
   * @remarks
   * The time when the identity provider was created, represented as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1726021079000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the identity provider.
   * 
   * @example
   * for poc test
   */
  description?: string;
  /**
   * @remarks
   * The basic configuration for DingTalk.
   */
  dingtalkAppConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkAppConfig;
  /**
   * @remarks
   * The DingTalk provisioning configuration. This parameter is returned only for DingTalk identity providers.
   */
  dingtalkProvisioningConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailDingtalkProvisioningConfig;
  /**
   * @remarks
   * Endpoint metadata
   */
  endpointMetadata?: GetIdentityProviderResponseBodyIdentityProviderDetailEndpointMetadata;
  /**
   * @remarks
   * The external ID of the identity provider.
   * 
   * @example
   * idp_xxxx
   */
  identityProviderExternalId?: string;
  /**
   * @remarks
   * The identity provider ID.
   * 
   * @example
   * idp_mwpcwnhrimlr2horx7xgg7pp7y
   */
  identityProviderId?: string;
  /**
   * @remarks
   * The identity provider name.
   * 
   * @example
   * test
   */
  identityProviderName?: string;
  /**
   * @remarks
   * The provisioning type of the identity provider.
   * 
   * - Inbound DingTalk: `urn:alibaba:idaas:idp:alibaba:dingtalk:pull`
   * 
   * - Outbound DingTalk: `urn:alibaba:idaas:idp:alibaba:dingtalk:push`
   * 
   * - Inbound WeCom: `urn:alibaba:idaas:idp:tencent:wecom:pull`
   * 
   * - Inbound Lark: `urn:alibaba:idaas:idp:bytedance:lark:pull`
   * 
   * - Inbound AD: `urn:alibaba:idaas:idp:microsoft:ad:pull`
   * 
   * - Inbound LDAP: `urn:alibaba:idaas:idp:unknown:ldap:pull`
   * 
   * - Standard OIDC: `urn:alibaba:idaas:idp:standard:oidc`
   * 
   * - Customized OIDC for SASE: `urn:alibaba:idaas:idp:alibaba:sase`
   * 
   * @example
   * urn:alibaba:idaas:idp:alibaba:dingtalk:push
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_x2df3bak3uwnapqm6xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration for Lark.
   */
  larkConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailLarkConfig;
  /**
   * @remarks
   * The result of the last status check.
   * 
   * @example
   * success
   */
  lastStatusCheckJobResult?: string;
  /**
   * @remarks
   * The information about the AD/LDAP identity provider.
   */
  ldapConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailLdapConfig;
  /**
   * @remarks
   * The lock reason.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  /**
   * @remarks
   * The URL of the custom logo for the identity provider.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01lvYwpv1aGowQXDML9_!!6000000003303-0-tps-580-580.jpg
   */
  logoUrl?: string;
  /**
   * @remarks
   * The network access endpoint ID.
   * 
   * @example
   * nae_mx4vsadfe6govkqkwckxxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The OIDC identity provider configuration.
   */
  oidcConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailOidcConfig;
  /**
   * @remarks
   * The SAML identity provider configuration.
   */
  samlConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailSamlConfig;
  /**
   * @remarks
   * The inbound synchronization configuration.
   */
  udPullConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailUdPullConfig;
  /**
   * @remarks
   * Indicates whether inbound synchronization is supported. Valid values:
   * 
   * - `disabled`
   * 
   * - `enabled`
   * 
   * @example
   * disabled
   */
  udPullStatus?: string;
  /**
   * @remarks
   * The outbound synchronization configuration.
   */
  udPushConfig?: GetIdentityProviderResponseBodyIdentityProviderDetailUdPushConfig;
  /**
   * @remarks
   * Indicates whether outbound synchronization is enabled. Valid values:
   * 
   * - `disabled`
   * 
   * - `enabled`
   * 
   * @example
   * disabled
   */
  udPushStatus?: string;
  /**
   * @remarks
   * The last update time, represented as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1726021079000
   */
  updateTime?: number;
  /**
   * @remarks
   * The configuration information for WeCom.
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
      endpointMetadata: 'EndpointMetadata',
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
      samlConfig: 'SamlConfig',
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
      endpointMetadata: GetIdentityProviderResponseBodyIdentityProviderDetailEndpointMetadata,
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
      samlConfig: GetIdentityProviderResponseBodyIdentityProviderDetailSamlConfig,
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
    if(this.endpointMetadata && typeof (this.endpointMetadata as any).validate === 'function') {
      (this.endpointMetadata as any).validate();
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

export class GetIdentityProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the identity provider.
   */
  identityProviderDetail?: GetIdentityProviderResponseBodyIdentityProviderDetail;
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

