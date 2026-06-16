// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims extends $dara.Model {
  /**
   * @remarks
   * The name of the claim.
   * 
   * @example
   * "Role"
   */
  claimName?: string;
  /**
   * @remarks
   * The expression used to generate the value of the claim.
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
   * The validity period of the access token. Unit: seconds. Default value: 1200 (20 minutes).
   * 
   * @example
   * 1200
   */
  accessTokenEffectiveTime?: number;
  /**
   * @remarks
   * Specifies whether the application is allowed to act as a public client to request the IDaaS authorization server. This parameter can be enabled only for the authorization code grant type and the device authorization grant type. Default value: false.
   * 
   * @example
   * true
   */
  allowedPublicClient?: boolean;
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
  customClaims?: SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims[];
  /**
   * @remarks
   * The scope parameter in the OIDC protocol. This parameter specifies the scope of user information that can be returned by the userinfo endpoint or included in the ID token.
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
   * 300
   */
  idTokenEffectiveTime?: number;
  /**
   * @remarks
   * The ID of the identity source for the resource owner password credentials grant type. This parameter is valid only when the GrantTypes for the OIDC application is set to password.
   * 
   * @example
   * ia_password
   */
  passwordAuthenticationSourceId?: string;
  /**
   * @remarks
   * Specifies whether Time-based One-time Password (TOTP) multi-factor authentication (MFA) is required for the resource owner password credentials grant type. This parameter is valid only when the GrantTypes for the OIDC application is set to password.
   * 
   * @example
   * true
   */
  passwordTotpMfaRequired?: boolean;
  /**
   * @remarks
   * The algorithm used to compute the code challenge in PKCE.
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
   * The list of post-logout redirect URIs that the application supports.
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
   * The response type supported by the application when OidcSsoConfig.GrantTypes is set to implicit.
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
   * The value of RelayState.
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
   * Specifies whether the assertion must be signed. ResponseSigned and AssertionSigned cannot both be false.
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
   * The configurations of additional user attributes in the SAML assertion.
   */
  attributeStatements?: SetApplicationSsoConfigRequestSamlSsoConfigAttributeStatements[];
  /**
   * @remarks
   * The default value of RelayState. When an SSO request is initiated by IDaaS, the SAML response provided by IDaaS contains this value for RelayState.
   * 
   * @example
   * https://home.console.aliyun.com
   */
  defaultRelayState?: string;
  /**
   * @remarks
   * The entity ID of the identity provider (IdP) in the SAML protocol. The value can be in a URL or URN format.
   * 
   * @example
   * https://example.com/
   */
  idPEntityId?: string;
  /**
   * @remarks
   * The format of the NameID in the SAML protocol. Valid values:
   * 
   * - urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified: The format is not specified. The application determines how to parse the NameID.
   * 
   * - urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress: The email address format.
   * 
   * - urn:oasis:names:tc:SAML:2.0:nameid-format:persistent: The persistent NameID.
   * 
   * - urn:oasis:names:tc:SAML:2.0:nameid-format:transient: The transient NameID.
   * 
   * @example
   * urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified
   */
  nameIdFormat?: string;
  /**
   * @remarks
   * The expression used to generate the value of the NameID in the SAML protocol.
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
   * Specifies whether the response must be signed. ResponseSigned and AssertionSigned cannot both be false.
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
   * The entity ID of the application (service provider) that uses SAML.
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
      attributeStatements: { 'type': 'array', 'itemType': SetApplicationSsoConfigRequestSamlSsoConfigAttributeStatements },
      defaultRelayState: 'string',
      idPEntityId: 'string',
      nameIdFormat: 'string',
      nameIdValueExpression: 'string',
      optionalRelayStates: { 'type': 'array', 'itemType': SetApplicationSsoConfigRequestSamlSsoConfigOptionalRelayStates },
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
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * client-examplexxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The SSO initiation method. Valid values:
   * 
   * - only_app_init_sso: SSO is initiated only by the application. This is the default value for OIDC applications. If you set this parameter to this value for a SAML application, you must specify InitLoginUrl.
   * 
   * - idaas_or_app_init_sso: SSO can be initiated by the IDaaS console or the application. This is the default value for SAML applications. If you set this parameter to this value for an OIDC application, you must specify InitLoginUrl.
   * 
   * @example
   * only_app_init_sso
   */
  initLoginType?: string;
  /**
   * @remarks
   * The URL that is used to initiate SSO. You must specify this parameter if you set InitLoginType to idaas_or_app_init_sso for an OIDC application. You must specify this parameter if you set InitLoginType to only_app_init_sso for a SAML application.
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
   * The SSO properties for an application that uses the OIDC protocol.
   */
  oidcSsoConfig?: SetApplicationSsoConfigRequestOidcSsoConfig;
  /**
   * @remarks
   * The SSO properties for an application that uses the SAML protocol.
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

