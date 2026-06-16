// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderRequestDingtalkAppConfig extends $dara.Model {
  /**
   * @remarks
   * The AppKey of the DingTalk application.
   * 
   * @example
   * 49nyeaqumk7f
   */
  appKey?: string;
  /**
   * @remarks
   * The AppSecret of the DingTalk application.
   * 
   * @example
   * 86nozWFL2CxgwnhKiXaG8dN4keLPkUNc5xxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * The version of the DingTalk QR code login.
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
   * The verification token of the DingTalk application.
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
   * The application ID of the custom application in Lark.
   * 
   * @example
   * cli_xxxx
   */
  appId?: string;
  /**
   * @remarks
   * The application secret of the custom application in Lark.
   * 
   * @example
   * KiiLzh5Dueh4wbLxxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * The EncryptKey of the custom application in Lark.
   * 
   * @example
   * VkdWw91mdkrjVFr3ObNwefap21dfbZbKxxxx
   */
  encryptKey?: string;
  /**
   * @remarks
   * The verification token of the custom application in Lark.
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
   * The password for the administrator account.
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
   * Specifies whether to enable certificate fingerprint verification. Valid values:
   * 
   * - `disabled`: Verification is disabled.
   * 
   * - `enabled`: Verification is enabled.
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
   * Specifies whether to enable StartTLS. Valid values:
   * 
   * - `disabled`: StartTLS is disabled.
   * 
   * - `enabled`: StartTLS is enabled.
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
   * The OIDC client authentication method. Valid values:
   * 
   * - `client_secret_basic`
   * 
   * - `client_secret_post`
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
   * The OIDC issuer.
   * 
   * @example
   * https://example.com/oauth
   */
  issuer?: string;
  /**
   * @remarks
   * The JSON Web Key Set (JWKS) URI.
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
   * The OIDC authorization scopes.
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
   * The Proof Key for Code Exchange (PKCE) method. Valid values:
   * 
   * - `S256`: The SHA-256 algorithm.
   * 
   * - `plain`: The plaintext format.
   * 
   * @example
   * S256
   */
  pkceChallengeMethod?: string;
  /**
   * @remarks
   * Specifies whether PKCE is required for the authorization code grant type.
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
   * The content of the signing certificate.
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
   * The SAML binding method for the SSO request. Valid values are `HTTP-POST` and `HTTP-REDIRECT`.
   * 
   * @example
   * HTTP-REDIRECT
   */
  bindingMethod?: string;
  /**
   * @remarks
   * The signing certificates from the SAML identity provider.
   */
  certificates?: UpdateIdentityProviderRequestSamlConfigCertificates[];
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
   * The maximum allowed clock skew, in seconds.
   * 
   * @example
   * 180
   */
  maxClockSkew?: number;
  /**
   * @remarks
   * Specifies whether the SAML authentication request must be signed.
   * 
   * @example
   * true
   */
  requireRequestSigned?: boolean;
  /**
   * @remarks
   * Specifies whether the assertions in the SAML response must be signed.
   */
  wantAssertionsSigned?: boolean;
  /**
   * @remarks
   * Specifies whether the SAML response must be signed.
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
   * The agent ID of the custom application in WeCom.
   * 
   * @example
   * 1237403
   */
  agentId?: string;
  /**
   * @remarks
   * The authorized callback domain.
   * 
   * @example
   * https://xxx.aliyunidaas.com/xxxxx
   */
  authorizeCallbackDomain?: string;
  /**
   * @remarks
   * The CorpSecret of the custom application in WeCom.
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
  /**
   * @remarks
   * A client-generated token to ensure request idempotence. This value must be unique across requests.
   * 
   * @example
   * client-examplexxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration for the DingTalk identity provider.
   */
  dingtalkAppConfig?: UpdateIdentityProviderRequestDingtalkAppConfig;
  /**
   * @remarks
   * The ID of the identity provider.
   * 
   * This parameter is required.
   * 
   * @example
   * idp_my664lwkhpicbyzirog3xxxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * The name of the identity provider.
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
   * The configuration for the Lark identity provider.
   */
  larkConfig?: UpdateIdentityProviderRequestLarkConfig;
  /**
   * @remarks
   * The configuration for the Active Directory (AD) or Lightweight Directory Access Protocol (LDAP) identity provider.
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
   * The ID of the network access endpoint.
   * 
   * @example
   * nae_examplexxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The OpenID Connect (OIDC) configuration.
   */
  oidcConfig?: UpdateIdentityProviderRequestOidcConfig;
  /**
   * @remarks
   * The configuration for the SAML identity provider.
   */
  samlConfig?: UpdateIdentityProviderRequestSamlConfig;
  /**
   * @remarks
   * The configuration for the WeCom identity provider.
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

