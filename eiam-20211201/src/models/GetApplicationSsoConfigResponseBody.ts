// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims extends $dara.Model {
  /**
   * @remarks
   * The claim name.
   * 
   * @example
   * userOuIds
   */
  claimName?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of the claim.
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
   * The validity period of the issued access token. Unit: seconds. Default value: 1200.
   * 
   * @example
   * 1200
   */
  accessTokenEffectiveTime?: number;
  allowedPublicClient?: string;
  /**
   * @remarks
   * The validity period of the issued code. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  codeEffectiveTime?: number;
  /**
   * @remarks
   * The custom claims that are returned for the ID token.
   */
  customClaims?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims[];
  /**
   * @remarks
   * The scopes of user attributes that can be returned for the UserInfo endpoint or ID token.
   * 
   * @example
   * profile，email
   */
  grantScopes?: string[];
  /**
   * @remarks
   * The list of grant types that are supported for OIDC protocols.
   * 
   * @example
   * authorization_code
   */
  grantTypes?: string[];
  /**
   * @remarks
   * The validity period of the issued ID token. Unit: seconds. Default value: 300.
   * 
   * @example
   * 1200
   */
  idTokenEffectiveTime?: number;
  /**
   * @remarks
   * The ID of the identity authentication source in password mode. This parameter is returned only when the value of the GrantTypes parameter includes the password mode.
   * 
   * @example
   * ia_password
   */
  passwordAuthenticationSourceId?: string;
  /**
   * @remarks
   * Indicates whether time-based one-time password (TOTP) authentication is required in password mode. This parameter is returned only when the value of the GrantTypes parameter includes the password mode.
   * 
   * @example
   * true
   */
  passwordTotpMfaRequired?: boolean;
  /**
   * @remarks
   * The algorithms that are used to calculate the code challenge for PKCE.
   * 
   * @example
   * S256
   */
  pkceChallengeMethods?: string[];
  /**
   * @remarks
   * Indicates whether the SSO of the application requires Proof Key for Code Exchange (PKCE) (RFC 7636).
   * 
   * @example
   * true
   */
  pkceRequired?: boolean;
  /**
   * @remarks
   * The list of logout redirect URIs that are supported by the application.
   */
  postLogoutRedirectUris?: string[];
  /**
   * @remarks
   * The list of redirect URIs that are supported by the application.
   */
  redirectUris?: string[];
  /**
   * @remarks
   * The validity period of the issued refresh token. Unit: seconds. Default value: 86400.
   * 
   * @example
   * 86400
   */
  refreshTokenEffective?: number;
  /**
   * @remarks
   * The response types that are supported by the application. This parameter is returned when the value of the GrantTypes parameter includes the implicit mode.
   * 
   * @example
   * token id_token
   */
  responseTypes?: string[];
  /**
   * @remarks
   * The custom expression that is used to generate the subject ID returned for the ID token.
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
   * The OAuth2.0 authorization endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/login/app/app_mltta64q65enci54slingvvsgq/oauth2/authorize
   */
  oauth2AuthorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth2.0 device authorization endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/device/code
   */
  oauth2DeviceAuthorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth2.0 token revocation endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/revoke
   */
  oauth2RevokeEndpoint?: string;
  /**
   * @remarks
   * The OAuth2.0 token endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/token
   */
  oauth2TokenEndpoint?: string;
  /**
   * @remarks
   * The OIDC UserInfo endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/userinfo
   */
  oauth2UserinfoEndpoint?: string;
  /**
   * @remarks
   * The information about the OIDC issuer. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oidc
   */
  oidcIssuer?: string;
  /**
   * @remarks
   * The JSON Web Key Set (JWKS) URL of the OIDC issuer. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oidc/jwks
   */
  oidcJwksEndpoint?: string;
  /**
   * @remarks
   * The OIDC relying party (RP)-initiated logout endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/login/app/app_mltta64q65enci54slingvvsgq/oauth2/logout
   */
  oidcLogoutEndpoint?: string;
  /**
   * @remarks
   * The metadata URL of the SAML protocol. This parameter is returned only when the SSO protocol of the application is SAML 2.0.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/api/v2/app_mltuxdwd4lq4eer6tmtlmaxm5e/saml2/meta
   */
  samlMetaEndpoint?: string;
  /**
   * @remarks
   * The request receiving URL of the SAML protocol. This parameter is returned only when the SSO protocol of the application is SAML 2.0.
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
   * The attribute name.
   * 
   * @example
   * https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName
   */
  attributeName?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of the attribute.
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
   * The display name of the RelayState
   * 
   * @example
   * Ram Account SSO
   */
  displayName?: string;
  /**
   * @remarks
   * RelayState.The user will see the display names of multiple optional redirect addresses in the application card of the application portal. After the user clicks and completes SSO, they will automatically jump to the corresponding address. This field can only be filled in after the default redirect address is filled in.
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
   * Whether the Assertion needs a signature. ResponseSigned and AssertionSigned cannot be false at the same time.
   * 
   * true: signature is required.
   * false: signature is not required.
   * 
   * @example
   * true
   */
  assertionSigned?: boolean;
  /**
   * @remarks
   * The additional user attributes in the SAML assertion.
   */
  attributeStatements?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigAttributeStatements[];
  /**
   * @remarks
   * The default value of the RelayState attribute. If the SSO request is initiated in EIAM, the RelayState attribute in the SAML response is set to this default value.
   * 
   * @example
   * https://home.console.aliyun.com
   */
  defaultRelayState?: string;
  /**
   * @remarks
   * The custom issuer ID.
   * 
   * @example
   * https://example.com/
   */
  idPEntityId?: string;
  /**
   * @remarks
   * The Format attribute of the NameID element in the SAML assertion. Valid values:
   * 
   * *   urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified: No format is specified. How to resolve the NameID element depends on the application.
   * *   urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress: The NameID element must be an email address.
   * *   urn:oasis:names:tc:SAML:2.0:nameid-format:persistent: The NameID element must be persistent.
   * *   urn:oasis:names:tc:SAML:2.0:nameid-format:transient: The NameID element must be transient.
   * 
   * @example
   * urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified
   */
  nameIdFormat?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of NameID in the SAML assertion.
   * 
   * @example
   * user.username
   */
  nameIdValueExpression?: string;
  /**
   * @remarks
   * Optional RelayState. The user will see the display names of multiple optional redirect addresses in the application card of the application portal. After the user clicks and completes SSO, they will automatically jump to the corresponding address. This field can only be filled in after the default redirect address is filled in.
   */
  optionalRelayStates?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigOptionalRelayStates[];
  /**
   * @remarks
   * Whether the response needs to be signed. ResponseSigned and AssertionSigned cannot be false at the same time.
   * 
   * true: signature is required.
   * false: signature is not required.
   * 
   * @example
   * true
   */
  responseSigned?: boolean;
  /**
   * @remarks
   * The algorithm that is used to calculate the signature for the SAML assertion.
   * 
   * @example
   * RSA-SHA256
   */
  signatureAlgorithm?: string;
  /**
   * @remarks
   * The entity ID of the application in SAML. The application assumes the role of service provider.
   * 
   * @example
   * urn:alibaba:cloudcomputing
   */
  spEntityId?: string;
  /**
   * @remarks
   * The Assertion Consumer Service (ACS) URL of the application in SAML. The application assumes the role of service provider.
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
   * The initial SSO method. Valid values:
   * 
   * *   only_app_init_sso: Only application-initiated SSO is allowed. This method is selected by default when the SSO protocol of the application is an OIDC protocol. If this method is selected when the SSO protocol of the application is SAML, the InitLoginUrl parameter is required.
   * *   idaas_or_app_init_sso: IDaaS-initiated SSO and application-initiated SSO are allowed. This method is selected by default when the SSO protocol of the application is SAML. If this method is selected when the SSO protocol of the application is an OIDC protocol, the InitLoginUrl parameter is required.
   * 
   * @example
   * only_app_init_sso
   */
  initLoginType?: string;
  /**
   * @remarks
   * The initial webhook URL of SSO. This parameter is required when the SSO protocol of the application is an OIDC protocol and the InitLoginType parameters is set to idaas_or_app_init_sso or when the SSO protocol of the application is SAML and the InitLoginType parameter is set to only_app_init_sso.
   * 
   * @example
   * http://127.0.0.1:8000/start_login?enterprise_code=ABCDEF
   */
  initLoginUrl?: string;
  /**
   * @remarks
   * The Open ID Connect (OIDC)-based SSO configuration attributes of the application. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   */
  oidcSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfig;
  /**
   * @remarks
   * The configuration of the metadata endpoint provided by the application.
   */
  protocolEndpointDomain?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigProtocolEndpointDomain;
  /**
   * @remarks
   * The Security Assertion Markup Language (SAML)-based SSO configuration attributes of the application. This parameter is returned only if the SSO protocol of the application is SAML 2.0.
   */
  samlSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfig;
  /**
   * @remarks
   * The SSO feature status of the application. Valid values:
   * 
   * *   enabled: The feature is enabled.
   * *   disabled: The feature is disabled.
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
   * The ID of the request.
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

