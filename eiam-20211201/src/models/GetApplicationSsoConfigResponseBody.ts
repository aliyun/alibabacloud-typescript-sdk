// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims extends $dara.Model {
  /**
   * @remarks
   * The name of the returned claim.
   * 
   * @example
   * userOuIds
   */
  claimName?: string;
  /**
   * @remarks
   * The value expression of the returned claim.
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
   * The validity period of the issued access token. Unit: seconds. Default value: 1200 (20 minutes).
   * 
   * @example
   * 1200
   */
  accessTokenEffectiveTime?: number;
  /**
   * @remarks
   * Specifies whether the application is allowed to request the IDaaS EIAM authorization server as a public client. This parameter can be enabled only in authorization code mode and device mode. Default value: false.
   * 
   * @example
   * true
   */
  allowedPublicClient?: string;
  /**
   * @remarks
   * The validity period of the issued code. Unit: seconds. Default value: 60 (1 minute).
   * 
   * @example
   * 60
   */
  codeEffectiveTime?: number;
  /**
   * @remarks
   * The custom user information included in the ID token response.
   */
  customClaims?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims[];
  /**
   * @remarks
   * The OIDC standard parameter scope, which specifies the range of user attributes that can be returned by the userinfo endpoint or ID token.
   * 
   * @example
   * profile，email
   */
  grantScopes?: string[];
  /**
   * @remarks
   * The list of supported OIDC protocol grant types.
   * 
   * @example
   * authorization_code
   */
  grantTypes?: string[];
  /**
   * @remarks
   * The validity period of the issued ID token. Unit: seconds. Default value: 300 (5 minutes).
   * 
   * @example
   * 1200
   */
  idTokenEffectiveTime?: number;
  /**
   * @remarks
   * The ID of the identity authentication source used in password mode. This parameter takes effect only when the GrantTypes specified for the OIDC protocol application include the password mode.
   * 
   * @example
   * ia_password
   */
  passwordAuthenticationSourceId?: string;
  /**
   * @remarks
   * Specifies whether TOTP-based secondary authentication is required in password mode. This parameter takes effect only when the GrantTypes specified for the OIDC protocol application include the password mode.
   * 
   * @example
   * true
   */
  passwordTotpMfaRequired?: boolean;
  /**
   * @remarks
   * The algorithm used to calculate the Code Challenge in PKCE.
   * 
   * @example
   * S256
   */
  pkceChallengeMethods?: string[];
  /**
   * @remarks
   * Specifies whether the application SSO requires PKCE (RFC 7636).
   * 
   * @example
   * true
   */
  pkceRequired?: boolean;
  /**
   * @remarks
   * The list of logout callback addresses supported by the application.
   */
  postLogoutRedirectUris?: string[];
  /**
   * @remarks
   * The list of redirect URIs supported by the application.
   */
  redirectUris?: string[];
  /**
   * @remarks
   * The validity period of the issued refresh token. Unit: seconds. Default value: 86400 (1 day).
   * 
   * @example
   * 86400
   */
  refreshTokenEffective?: number;
  /**
   * @remarks
   * The response types supported by the application when OidcSsoConfig.GrantTypes includes the implicit mode.
   * 
   * @example
   * token id_token
   */
  responseTypes?: string[];
  /**
   * @remarks
   * The custom expression for the sub value returned in the ID token.
   * 
   * @example
   * user.userid
   */
  subjectIdExpression?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenEffectiveTime: 'AccessTokenEffectiveTime',
      allowedPublicClient: 'AllowedPublicClient',
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
      allowedPublicClient: 'string',
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
   * The OAuth 2.0 authorization endpoint. This parameter is returned only when the application SSO protocol is OIDC.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/login/app/app_mltta64q65enci54slingvvsgq/oauth2/authorize
   */
  oauth2AuthorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth 2.0 device authorization endpoint. This parameter is returned only when the application SSO protocol is OIDC.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/device/code
   */
  oauth2DeviceAuthorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth 2.0 token revocation endpoint. This parameter is returned only when the application SSO protocol is OIDC.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/revoke
   */
  oauth2RevokeEndpoint?: string;
  /**
   * @remarks
   * The OAuth 2.0 token endpoint. This parameter is returned only when the application SSO protocol is OIDC.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/token
   */
  oauth2TokenEndpoint?: string;
  /**
   * @remarks
   * The OIDC user information endpoint. This parameter is returned only when the application SSO protocol is OIDC.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/userinfo
   */
  oauth2UserinfoEndpoint?: string;
  /**
   * @remarks
   * The OIDC issuer information. This parameter is returned only when the application SSO protocol is OIDC.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oidc
   */
  oidcIssuer?: string;
  /**
   * @remarks
   * The OIDC JWKS endpoint. This parameter is returned only when the application SSO protocol is OIDC.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oidc/jwks
   */
  oidcJwksEndpoint?: string;
  /**
   * @remarks
   * The OIDC RP-initiated logout endpoint. This parameter is returned only when the application SSO protocol is OIDC.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/login/app/app_mltta64q65enci54slingvvsgq/oauth2/logout
   */
  oidcLogoutEndpoint?: string;
  /**
   * @remarks
   * The SAML protocol metadata endpoint URL. This parameter is returned only when the application SSO protocol is SAML 2.0.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/api/v2/app_mltuxdwd4lq4eer6tmtlmaxm5e/saml2/meta
   */
  samlMetaEndpoint?: string;
  /**
   * @remarks
   * The SAML single logout URL (SLO URL) on the IdP side. The SP redirects the user to this URL to initiate single logout.
   * 
   * @example
   * https://example.com/saml/slo
   */
  samlSloEndpoint?: string;
  /**
   * @remarks
   * The SAML protocol AuthnRequest receiving endpoint. This parameter is returned only when the application SSO protocol is SAML 2.0.
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
      samlSloEndpoint: 'SamlSloEndpoint',
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
      samlSloEndpoint: 'string',
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
   * The Name of the attribute in the SAML assertion.
   * 
   * @example
   * https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName
   */
  attributeName?: string;
  /**
   * @remarks
   * The attribute value expression in the SAML assertion.
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
   * The display name of the RelayState.
   * 
   * @example
   * Ram Account SSO
   */
  displayName?: string;
  /**
   * @remarks
   * The optional RelayState value. In the application portal, the application card displays multiple optional redirect addresses with display names. After a user clicks an address and completes SSO, the user is automatically redirected to the corresponding address.
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
   * Specifies whether the assertion needs to be signed. ResponseSigned and AssertionSigned cannot both be set to false.
   * - true: Signed.
   * - false: Not signed.
   * 
   * @example
   * true
   */
  assertionSigned?: boolean;
  /**
   * @remarks
   * The additional user attribute configuration included in the SAML assertion.
   */
  attributeStatements?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigAttributeStatements[];
  /**
   * @remarks
   * The default RelayState value. When the single sign-on (SSO) request is initiated by EIAM, the SAML Response provided by EIAM specifies the RelayState as this value. This applies when the user logon request is initiated by EIAM.
   * 
   * @example
   * https://home.console.aliyun.com
   */
  defaultRelayState?: string;
  /**
   * @remarks
   * The Entity ID that represents the IdP identity in the SAML protocol.
   * 
   * @example
   * https://example.com/
   */
  idPEntityId?: string;
  /**
   * @remarks
   * The NameID format defined by the SAML protocol standard. Valid values:
   * - urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified: Unspecified. The application determines how to parse the NameID.
   * - urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress: Email address format.
   * - urn:oasis:names:tc:SAML:2.0:nameid-format:persistent: Persistent NameID.
   * - urn:oasis:names:tc:SAML:2.0:nameid-format:transient: Transient NameID.
   * 
   * @example
   * urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified
   */
  nameIdFormat?: string;
  /**
   * @remarks
   * The expression used to generate the actual NameID value in the SAML protocol.
   * 
   * @example
   * user.username
   */
  nameIdValueExpression?: string;
  /**
   * @remarks
   * The optional RelayState values. In the application portal, the application card displays multiple optional redirect addresses with display names. After a user clicks an address and completes SSO, the user is automatically redirected to the corresponding address. You can specify optional redirect addresses only after you specify a default redirect address.
   */
  optionalRelayStates?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigOptionalRelayStates[];
  /**
   * @remarks
   * Indicates whether SSO AuthnRequest signature verification is enabled.
   * 
   * @example
   * true
   */
  requireAuthnRequestSigned?: boolean;
  /**
   * @remarks
   * Indicates whether the Response needs to be signed. ResponseSigned and AssertionSigned cannot both be set to false. Valid values:
   * - true: Signing is required.
   * - false: Signing is not required.
   * 
   * @example
   * true
   */
  responseSigned?: boolean;
  /**
   * @remarks
   * The signature algorithm for the SAML assertion.
   * 
   * @example
   * RSA-SHA256
   */
  signatureAlgorithm?: string;
  /**
   * @remarks
   * The SAML EntityId of the application (SP).
   * 
   * @example
   * urn:alibaba:cloudcomputing
   */
  spEntityId?: string;
  /**
   * @remarks
   * The configured SP signing verification certificates in PEM format. A maximum of two certificates are returned for the console or API caller to read and display.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIC0jCCAbqgAwIBAgIQXXXXX -----END CERTIFICATE-----
   */
  spSigningCertificates?: string[];
  /**
   * @remarks
   * The configured SP SLO response URL.
   * 
   * @example
   * https://example.com/api/slo/response
   */
  spSloResponseUrl?: string;
  /**
   * @remarks
   * The SAML Assertion Consumer Service (ACS) URL of the application (SP).
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
      requireAuthnRequestSigned: 'RequireAuthnRequestSigned',
      responseSigned: 'ResponseSigned',
      signatureAlgorithm: 'SignatureAlgorithm',
      spEntityId: 'SpEntityId',
      spSigningCertificates: 'SpSigningCertificates',
      spSloResponseUrl: 'SpSloResponseUrl',
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
      requireAuthnRequestSigned: 'boolean',
      responseSigned: 'boolean',
      signatureAlgorithm: 'string',
      spEntityId: 'string',
      spSigningCertificates: { 'type': 'array', 'itemType': 'string' },
      spSloResponseUrl: 'string',
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
    if(Array.isArray(this.spSigningCertificates)) {
      $dara.Model.validateArray(this.spSigningCertificates);
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
   * The initialization single sign-on (SSO) method. Valid values:
   * - only_app_init_sso: Only application-initiated SSO. This is the default value for OIDC protocol applications. When a SAML application specifies this method, InitLoginUrl must be specified.
   * - idaas_or_app_init_sso: IDaaS portal-initiated or application-initiated SSO. This is the default value for SAML protocol applications. When an OIDC application specifies this method, InitLoginUrl must be specified.
   * 
   * @example
   * only_app_init_sso
   */
  initLoginType?: string;
  /**
   * @remarks
   * The initialization single sign-on (SSO) trigger URL. This parameter is required when the InitLoginType of an OIDC protocol application is set to idaas_or_app_init_sso, or when the InitLoginType of a SAML protocol application is set to only_app_init_sso.
   * 
   * @example
   * http://127.0.0.1:8000/start_login?enterprise_code=ABCDEF
   */
  initLoginUrl?: string;
  /**
   * @remarks
   * The SSO configuration parameters for OIDC protocol applications. This parameter is returned only when the application SSO protocol is OIDC.
   */
  oidcSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfig;
  /**
   * @remarks
   * The metadata endpoint configuration provided by the application.
   */
  protocolEndpointDomain?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigProtocolEndpointDomain;
  /**
   * @remarks
   * The SSO configuration parameters for SAML protocol applications. This parameter is returned only when the application SSO protocol is SAML 2.0.
   */
  samlSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfig;
  /**
   * @remarks
   * The SSO status of the application. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
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

export class GetApplicationSsoConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The single sign-on (SSO) configuration information of the application.
   */
  applicationSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfig;
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

