// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims extends $dara.Model {
  /**
   * @remarks
   * The name of the claim.
   * 
   * @example
   * userOuIds
   */
  claimName?: string;
  /**
   * @remarks
   * The expression used to generate the value of the claim.
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
   * The validity period of the access token. Unit: seconds. Default value: 1200 (20 minutes).
   * 
   * @example
   * 1200
   */
  accessTokenEffectiveTime?: number;
  /**
   * @remarks
   * Indicates whether the application is allowed to make requests to the IDaaS EIAM authorization server as a public client. This feature is supported only for the authorization code and device code grant types. Default value: false.
   * 
   * @example
   * true
   */
  allowedPublicClient?: string;
  /**
   * @remarks
   * The validity period of the authorization code. Unit: seconds. Default value: 60 (1 minute).
   * 
   * @example
   * 60
   */
  codeEffectiveTime?: number;
  /**
   * @remarks
   * The custom claims that are returned in the ID token.
   */
  customClaims?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims[];
  /**
   * @remarks
   * The OIDC-compliant scope parameter. This parameter specifies the scope of user attributes that can be returned by the userinfo endpoint or included in the ID token.
   * 
   * @example
   * profile，email
   */
  grantScopes?: string[];
  /**
   * @remarks
   * The list of OIDC grant types that are supported.
   * 
   * @example
   * authorization_code
   */
  grantTypes?: string[];
  /**
   * @remarks
   * The validity period of the ID token. Unit: seconds. Default value: 300 (5 minutes).
   * 
   * @example
   * 1200
   */
  idTokenEffectiveTime?: number;
  /**
   * @remarks
   * The ID of the authentication source for password-based logon. This parameter is valid only if GrantTypes for the OIDC application is set to password.
   * 
   * @example
   * ia_password
   */
  passwordAuthenticationSourceId?: string;
  /**
   * @remarks
   * Indicates whether Time-based One-Time Password (TOTP) multi-factor authentication (MFA) is required for password-based logon. This parameter is valid only if GrantTypes for the OIDC application is set to password.
   * 
   * @example
   * true
   */
  passwordTotpMfaRequired?: boolean;
  /**
   * @remarks
   * The algorithm used to calculate the code challenge in PKCE.
   * 
   * @example
   * S256
   */
  pkceChallengeMethods?: string[];
  /**
   * @remarks
   * Indicates whether Proof Key for Code Exchange (PKCE) is required for the application SSO. For more information, see RFC 7636.
   * 
   * @example
   * true
   */
  pkceRequired?: boolean;
  /**
   * @remarks
   * The list of post-logout redirect URIs.
   */
  postLogoutRedirectUris?: string[];
  /**
   * @remarks
   * The list of redirect URIs that the application supports.
   */
  redirectUris?: string[];
  /**
   * @remarks
   * The validity period of the refresh token. Unit: seconds. Default value: 86400 (1 day).
   * 
   * @example
   * 86400
   */
  refreshTokenEffective?: number;
  /**
   * @remarks
   * The response type that the application supports. This parameter is returned only if OidcSsoConfig.GrantTypes is set to implicit.
   * 
   * @example
   * token id_token
   */
  responseTypes?: string[];
  /**
   * @remarks
   * The expression used to generate the value of the sub claim in the ID token.
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
   * The OAuth 2.0 authorization endpoint. This parameter is returned only when the application uses OIDC for SSO.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/login/app/app_mltta64q65enci54slingvvsgq/oauth2/authorize
   */
  oauth2AuthorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth 2.0 device authorization endpoint. This parameter is returned only when the application uses OIDC for SSO.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/device/code
   */
  oauth2DeviceAuthorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth 2.0 token revocation endpoint. This parameter is returned only when the application uses OIDC for SSO.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/revoke
   */
  oauth2RevokeEndpoint?: string;
  /**
   * @remarks
   * The OAuth 2.0 token endpoint. This parameter is returned only when the application uses OIDC for SSO.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/token
   */
  oauth2TokenEndpoint?: string;
  /**
   * @remarks
   * The OIDC userinfo endpoint. This parameter is returned only when the application uses OIDC for SSO.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/userinfo
   */
  oauth2UserinfoEndpoint?: string;
  /**
   * @remarks
   * The OIDC issuer. This parameter is returned only when the application uses OIDC for SSO.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oidc
   */
  oidcIssuer?: string;
  /**
   * @remarks
   * The JSON Web Key Set (JWKS) endpoint for OIDC. This parameter is returned only when the application uses OIDC for SSO.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oidc/jwks
   */
  oidcJwksEndpoint?: string;
  /**
   * @remarks
   * The OIDC Relying Party (RP)-initiated logout endpoint. This parameter is returned only when the application uses OIDC for SSO.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/login/app/app_mltta64q65enci54slingvvsgq/oauth2/logout
   */
  oidcLogoutEndpoint?: string;
  /**
   * @remarks
   * The metadata endpoint for the SAML protocol. This parameter is returned only when the application uses SAML 2.0 for SSO.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/api/v2/app_mltuxdwd4lq4eer6tmtlmaxm5e/saml2/meta
   */
  samlMetaEndpoint?: string;
  /**
   * @remarks
   * The endpoint that receives AuthnRequest requests for the SAML protocol. This parameter is returned only when the application uses SAML 2.0 for SSO.
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
   * The name of the attribute in the SAML assertion.
   * 
   * @example
   * https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName
   */
  attributeName?: string;
  /**
   * @remarks
   * The expression used to generate the value of the attribute in the SAML assertion.
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
   * The optional RelayState value. The display names of multiple redirect URLs are shown on the application card in the application portal. After a user clicks a URL and completes the SSO, the user is redirected to the URL.
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
   * Indicates whether the assertion needs to be signed. ResponseSigned and AssertionSigned cannot both be false.
   * 
   * - true: The assertion must be signed.
   * 
   * - false: The assertion does not need to be signed.
   * 
   * @example
   * true
   */
  assertionSigned?: boolean;
  /**
   * @remarks
   * The configuration of additional user attributes in the SAML assertion.
   */
  attributeStatements?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigAttributeStatements[];
  /**
   * @remarks
   * The default value of RelayState. If the SSO is initiated by EIAM, the RelayState in the SAML response is set to this value.
   * 
   * @example
   * https://home.console.aliyun.com
   */
  defaultRelayState?: string;
  /**
   * @remarks
   * The EntityID of the identity provider (IdP) in the SAML protocol.
   * 
   * @example
   * https://example.com/
   */
  idPEntityId?: string;
  /**
   * @remarks
   * The format of the NameID in the SAML protocol. Valid values:
   * 
   * - urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified: Unspecified. The application determines how to parse the NameID.
   * 
   * - urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress: Email address format.
   * 
   * - urn:oasis:names:tc:SAML:2.0:nameid-format:persistent: Persistent NameID.
   * 
   * - urn:oasis:names:tc:SAML:2.0:nameid-format:transient: Transient NameID.
   * 
   * @example
   * urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified
   */
  nameIdFormat?: string;
  /**
   * @remarks
   * The expression used to generate the value of the NameID in the SAML assertion.
   * 
   * @example
   * user.username
   */
  nameIdValueExpression?: string;
  /**
   * @remarks
   * The optional RelayState values. The display names of multiple redirect URLs are shown on the application card in the application portal. After a user clicks a URL and completes the SSO, the user is redirected to the URL. You must specify a default redirect URL before you can specify optional RelayState values.
   */
  optionalRelayStates?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigOptionalRelayStates[];
  /**
   * @remarks
   * Indicates whether the response needs to be signed. ResponseSigned and AssertionSigned cannot both be false.
   * 
   * - true: The response must be signed.
   * 
   * - false: The response does not need to be signed.
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
   * The SAML EntityID of the application (service provider).
   * 
   * @example
   * urn:alibaba:cloudcomputing
   */
  spEntityId?: string;
  /**
   * @remarks
   * The SAML assertion consumer service (ACS) URL of the application (service provider).
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
   * The SSO initiation method. Valid values:
   * 
   * - only_app_init_sso: SSO is initiated only by the application. This is the default value for OIDC applications. If this method is used for a SAML application, you must specify InitLoginUrl.
   * 
   * - idaas_or_app_init_sso: SSO can be initiated by the IDaaS console or the application. This is the default value for SAML applications. If this method is used for an OIDC application, you must specify InitLoginUrl.
   * 
   * @example
   * only_app_init_sso
   */
  initLoginType?: string;
  /**
   * @remarks
   * The URL that triggers SSO. This parameter is required when InitLoginType for an OIDC application is set to idaas_or_app_init_sso. This parameter is also required when InitLoginType for a SAML application is set to only_app_init_sso.
   * 
   * @example
   * http://127.0.0.1:8000/start_login?enterprise_code=ABCDEF
   */
  initLoginUrl?: string;
  /**
   * @remarks
   * The SSO configuration parameters for the application that uses OpenID Connect (OIDC). This parameter is returned only when the application uses OIDC for SSO.
   */
  oidcSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfig;
  /**
   * @remarks
   * The configuration of the metadata endpoint provided by the application.
   */
  protocolEndpointDomain?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigProtocolEndpointDomain;
  /**
   * @remarks
   * The SSO configuration parameters for the application that uses Security Assertion Markup Language (SAML) 2.0. This parameter is returned only when the application uses SAML 2.0 for SSO.
   */
  samlSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfig;
  /**
   * @remarks
   * The status of the SSO feature for the application. Valid values:
   * 
   * - enabled: Enabled.
   * 
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
   * The SSO configuration of the application.
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

