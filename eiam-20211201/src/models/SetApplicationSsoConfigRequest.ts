// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims extends $dara.Model {
  /**
   * @remarks
   * The name of the returned claim.
   * 
   * @example
   * "Role"
   */
  claimName?: string;
  /**
   * @remarks
   * The value expression of the returned claim.
   * 
   * @example
   * user.dict.applicationRole
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

export class SetApplicationSsoConfigRequestOidcSsoConfig extends $dara.Model {
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
   * Specifies whether the application is allowed to act as a public client to request the IDaaS EIAM authorization server. This parameter can be enabled only in authorization code mode and device mode. Default value: false.
   * 
   * @example
   * true
   */
  allowedPublicClient?: boolean;
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
   * The custom user information included in the returned ID token.
   */
  customClaims?: SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims[];
  /**
   * @remarks
   * The OIDC standard parameter scope, which specifies the range of user attributes that can be returned by the userinfo endpoint or the id_token.
   * 
   * @example
   * profile，email
   */
  grantScopes?: string[];
  /**
   * @remarks
   * The list of supported OIDC grant types.
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
   * 300
   */
  idTokenEffectiveTime?: number;
  /**
   * @remarks
   * The ID of the authentication source used in password mode. This parameter takes effect only when the GrantTypes specified for the OIDC application include the password mode.
   * 
   * @example
   * ia_password
   */
  passwordAuthenticationSourceId?: string;
  /**
   * @remarks
   * Specifies whether TOTP-based secondary authentication is required for password mode. This parameter takes effect only when the GrantTypes specified for the OIDC application include the password mode.
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
   * Specifies whether Proof Key for Code Exchange (PKCE) (RFC 7636) is required for application SSO.
   * 
   * @example
   * true
   */
  pkceRequired?: boolean;
  /**
   * @remarks
   * The list of logout callback URIs supported by the application.
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
   * The response types supported by the application when OidcSsoConfig.GrantTypes includes the implicit grant type.
   * 
   * @example
   * token id_token
   */
  responseTypes?: string[];
  /**
   * @remarks
   * The custom expression for the sub claim value returned in the ID token.
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
      allowedPublicClient: 'boolean',
      codeEffectiveTime: 'number',
      customClaims: { 'type': 'array', 'itemType': SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims },
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

export class SetApplicationSsoConfigRequestSamlSsoConfigAttributeStatements extends $dara.Model {
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
   * The value expression of the attribute in the SAML assertion.
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

export class SetApplicationSsoConfigRequestSamlSsoConfigOptionalRelayStates extends $dara.Model {
  /**
   * @remarks
   * The display name of the RelayState.
   * 
   * @example
   * Ram
   */
  displayName?: string;
  /**
   * @remarks
   * The RelayState value.
   * 
   * @example
   * https://ram.console.aliyun.com/
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

export class SetApplicationSsoConfigRequestSamlSsoConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the assertion needs to be signed. ResponseSigned and AssertionSigned cannot both be set to false.
   * - true: The assertion is signed.
   * - false: The assertion is not signed.
   * 
   * @example
   * true
   */
  assertionSigned?: boolean;
  /**
   * @remarks
   * The additional user attribute configurations included in the SAML assertion.
   */
  attributeStatements?: SetApplicationSsoConfigRequestSamlSsoConfigAttributeStatements[];
  /**
   * @remarks
   * The default RelayState value. When a single sign-on (SSO) logon request is initiated by EIAM, the SAML Response provided by EIAM specifies the RelayState as this value.
   * 
   * @example
   * https://home.console.aliyun.com
   */
  defaultRelayState?: string;
  /**
   * @remarks
   * The Entity ID that represents the IdP identity in the SAML protocol. URL format and URN format are supported.
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
   * user.email
   */
  nameIdValueExpression?: string;
  /**
   * @remarks
   * The optional RelayState configurations.
   */
  optionalRelayStates?: SetApplicationSsoConfigRequestSamlSsoConfigOptionalRelayStates[];
  /**
   * @remarks
   * Specifies whether SSO AuthnRequest signature verification is enabled. Default value: false. If set to true, spSigningCertificates must be configured (the array must not be empty).
   * 
   * @example
   * false
   */
  requireAuthnRequestSigned?: boolean;
  /**
   * @remarks
   * Specifies whether the response needs to be signed. ResponseSigned and AssertionSigned cannot both be set to false.
   * - true: The response is signed.
   * - false: The response is not signed.
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
   * The array of SP signature verification certificates in PEM format. A maximum of two certificates are allowed and are shared by SSO and SLO. Each certificate is validated for format and validity upon write. Requests with more than two certificates are rejected.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIC0jCCAbqgAwIBAgIQXXXXX -----END CERTIFICATE-----
   */
  spSigningCertificates?: string[];
  /**
   * @remarks
   * The URL on the SP side that receives the LogoutResponse. This parameter is optional.
   * 
   * @example
   * https://example.com/api/slo/response
   */
  spSloResponseUrl?: string;
  /**
   * @remarks
   * The SAML assertion consumer service URL of the application (SP).
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
      attributeStatements: { 'type': 'array', 'itemType': SetApplicationSsoConfigRequestSamlSsoConfigAttributeStatements },
      defaultRelayState: 'string',
      idPEntityId: 'string',
      nameIdFormat: 'string',
      nameIdValueExpression: 'string',
      optionalRelayStates: { 'type': 'array', 'itemType': SetApplicationSsoConfigRequestSamlSsoConfigOptionalRelayStates },
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

export class SetApplicationSsoConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique value from your client. The value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * client-examplexxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The initial single sign-on (SSO) logon method. Valid values:
   * - only_app_init_sso: Only application-initiated SSO is supported. This is the default value for OIDC protocol applications. When a SAML application uses this method, InitLoginUrl must be specified.
   * - idaas_or_app_init_sso: Both IDaaS portal-initiated and application-initiated SSO are supported. This is the default value for SAML protocol applications. When an OIDC protocol application uses this method, InitLoginUrl must be specified.
   * 
   * @example
   * only_app_init_sso
   */
  initLoginType?: string;
  /**
   * @remarks
   * The initial single sign-on (SSO) logon trigger URL.
   * This parameter is required when an OIDC protocol application sets InitLoginType to idaas_or_app_init_sso.
   * This parameter is required when a SAML protocol application sets InitLoginType to only_app_init_sso.
   * 
   * @example
   * http://127.0.0.1:8000/start_login?enterprise_code=ABCDEF
   */
  initLoginUrl?: string;
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
   * The SSO configuration parameters for an OIDC-based application.
   */
  oidcSsoConfig?: SetApplicationSsoConfigRequestOidcSsoConfig;
  /**
   * @remarks
   * The SSO configuration parameters for a SAML-based application.
   */
  samlSsoConfig?: SetApplicationSsoConfigRequestSamlSsoConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientToken: 'ClientToken',
      initLoginType: 'InitLoginType',
      initLoginUrl: 'InitLoginUrl',
      instanceId: 'InstanceId',
      oidcSsoConfig: 'OidcSsoConfig',
      samlSsoConfig: 'SamlSsoConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientToken: 'string',
      initLoginType: 'string',
      initLoginUrl: 'string',
      instanceId: 'string',
      oidcSsoConfig: SetApplicationSsoConfigRequestOidcSsoConfig,
      samlSsoConfig: SetApplicationSsoConfigRequestSamlSsoConfig,
    };
  }

  validate() {
    if(this.oidcSsoConfig && typeof (this.oidcSsoConfig as any).validate === 'function') {
      (this.oidcSsoConfig as any).validate();
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

