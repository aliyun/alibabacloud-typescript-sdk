// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderRequestDingtalkAppConfig extends $dara.Model {
  /**
   * @remarks
   * The AppKey of the DingTalk first-party application.
   * 
   * @example
   * 49nyeaqumk7f
   */
  appKey?: string;
  /**
   * @remarks
   * The AppSecret of the DingTalk first-party application.
   * 
   * @example
   * 86nozWFL2CxgwnhKiXaG8dN4keLPkUNc5xxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * The DingTalk QR code login version.
   * 
   * @example
   * new_version
   */
  dingtalkLoginVersion?: string;
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
   * @remarks
   * The AppId of the Lark application.
   * 
   * @example
   * cli_xxxx
   */
  appId?: string;
  /**
   * @remarks
   * The AppSecret of the Lark application.
   * 
   * @example
   * KiiLzh5Dueh4wbLxxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * The encryptKey of the custom Lark application.
   * 
   * @example
   * VkdWw91mdkrjVFr3ObNwefap21dfbZbKxxxx
   */
  encryptKey?: string;
  /**
   * @remarks
   * The verificationToken of the custom Lark application.
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
   * The administrator password.
   * 
   * @example
   * xxxxxx
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
   * The communication protocol.
   * 
   * @example
   * ldap
   */
  ldapProtocol?: string;
  /**
   * @remarks
   * The server address.
   * 
   * @example
   * 123.xx.xx.89
   */
  ldapServerHost?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 636
   */
  ldapServerPort?: number;
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
   * The OIDC client secret.
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
   * The OIDC authorization endpoint.
   * 
   * @example
   * https://example.com/oauth/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The OIDC issuer information.
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
   * The OIDC UserInfo endpoint.
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
   * The OIDC client authentication configuration.
   */
  authnParam?: UpdateIdentityProviderRequestOidcConfigAuthnParam;
  /**
   * @remarks
   * The OIDC endpoint configuration.
   */
  endpointConfig?: UpdateIdentityProviderRequestOidcConfigEndpointConfig;
  /**
   * @remarks
   * The list of OIDC grant scopes.
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
   * - S256: SHA-256.
   * 
   * - plain: Plaintext.
   * 
   * @example
   * S256
   */
  pkceChallengeMethod?: string;
  /**
   * @remarks
   * Specifies whether to use PKCE in the AuthorizationCode grant mode.
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

export class UpdateIdentityProviderRequestSamlConfigCertificates extends $dara.Model {
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

export class UpdateIdentityProviderRequestSamlConfig extends $dara.Model {
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
   * The certificate list of the IdP.
   */
  certificates?: UpdateIdentityProviderRequestSamlConfigCertificates[];
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
   * Specifies whether the request must be signed.
   * 
   * @example
   * true
   */
  requireRequestSigned?: boolean;
  /**
   * @remarks
   * Specifies whether the external IdP is required to sign the Assertion.
   */
  wantAssertionsSigned?: boolean;
  /**
   * @remarks
   * Specifies whether the external IdP is required to sign the Response.
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
      certificates: { 'type': 'array', 'itemType': UpdateIdentityProviderRequestSamlConfigCertificates },
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

export class UpdateIdentityProviderRequestWeComConfig extends $dara.Model {
  /**
   * @remarks
   * The AgentId of the WeCom self-built application.
   * 
   * @example
   * 1237403
   */
  agentId?: string;
  /**
   * @remarks
   * The authorization callback domain.
   * 
   * @example
   * https://xxx.aliyunidaas.com/xxxxx
   */
  authorizeCallbackDomain?: string;
  /**
   * @example
   * mPLLiWv-_9witxxxEJCpk1xkF5hOgBzpRt4kBkxxx
   */
  contactSecret?: string;
  /**
   * @remarks
   * The CorpSecret of the WeCom self-built application.
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
   * https://xxx.aliyunidaas.com
   */
  trustableDomain?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      authorizeCallbackDomain: 'AuthorizeCallbackDomain',
      contactSecret: 'ContactSecret',
      corpSecret: 'CorpSecret',
      trustableDomain: 'TrustableDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      authorizeCallbackDomain: 'string',
      contactSecret: 'string',
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
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The value is generated by the client and must be unique across different requests.
   * 
   * @example
   * client-examplexxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The DingTalk configuration basic information.
   */
  dingtalkAppConfig?: UpdateIdentityProviderRequestDingtalkAppConfig;
  /**
   * @remarks
   * The identity provider ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idp_my664lwkhpicbyzirog3xxxxx
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
  larkConfig?: UpdateIdentityProviderRequestLarkConfig;
  /**
   * @remarks
   * The AD/LDAP basic information.
   */
  ldapConfig?: UpdateIdentityProviderRequestLdapConfig;
  /**
   * @remarks
   * The URL of the application logo.
   * 
   * @example
   * idaas-image://idaas_23aqr2ye554csg33dqpch5exxxx/tmp/d17d9adc-a943-45e7-ba0c-2838dddea678xxxx
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
   * The OIDC-related configuration.
   */
  oidcConfig?: UpdateIdentityProviderRequestOidcConfig;
  /**
   * @remarks
   * The SAML IdP configuration.
   */
  samlConfig?: UpdateIdentityProviderRequestSamlConfig;
  /**
   * @remarks
   * The WeCom basic information.
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
      samlConfig: 'SamlConfig',
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
      samlConfig: UpdateIdentityProviderRequestSamlConfig,
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
    if(this.samlConfig && typeof (this.samlConfig as any).validate === 'function') {
      (this.samlConfig as any).validate();
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

