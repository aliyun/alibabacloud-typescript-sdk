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
   * Specifies whether the application is allowed to act as a public client to request the IDaaS EIAM authorization server. Only the authorization code mode and device mode support this feature. Default value: false.
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
   * The custom user information included in the ID token response.
   */
  customClaims?: SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims[];
  /**
   * @remarks
   * The OIDC standard parameter scope, which specifies the scope of user attributes that can be returned by the userinfo endpoint or the ID token.
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
   * 300
   */
  idTokenEffectiveTime?: number;
  /**
   * @remarks
   * The ID of the identity authentication source used for the password mode. This parameter takes effect only when the GrantTypes of the OIDC application includes the password mode.
   * 
   * @example
   * ia_password
   */
  passwordAuthenticationSourceId?: string;
  /**
   * @remarks
   * Specifies whether TOTP-based secondary authentication is required for the password mode. This parameter takes effect only when the GrantTypes of the OIDC application includes the password mode.
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
   * The list of RedirectUris supported by the application.
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
   * The Name of the attribute in the SAML assertion.
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
   * Specifies whether the Assertion needs to be signed. ResponseSigned and AssertionSigned cannot both be set to false.
   * - true: The Assertion is signed.
   * - false: The Assertion is not signed.
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
   * The default RelayState value. When the single sign-on (SSO) request is initiated by EIAM, the SAML Response provided by EIAM specifies the RelayState as this value.
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
   * The expression used to generate the actual NameID value for the SAML protocol.
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
   * Specifies whether the Response needs to be signed. ResponseSigned and AssertionSigned cannot both be set to false.
   * - true: The Response is signed.
   * - false: The Response is not signed.
   * 
   * @example
   * true
   */
  responseSigned?: boolean;
  /**
   * @remarks
   * The SAML assertion signature algorithm.
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
   * The SAML assertion consumer service (ACS) URL of the application (SP).
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * client-examplexxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The initialization single sign-on (SSO) method. Valid values:
   * - only_app_init_sso: Only application-initiated SSO. This is the default value for OIDC protocol applications. When a SAML application specifies this method, InitLoginUrl must be specified.
   * - idaas_or_app_init_sso: SSO initiated from the IDaaS portal or the application. This is the default value for SAML protocol applications. When an OIDC protocol application specifies this method, InitLoginUrl must be specified.
   * 
   * @example
   * only_app_init_sso
   */
  initLoginType?: string;
  /**
   * @remarks
   * The URL that triggers the initialization single sign-on (SSO).
   * When an OIDC protocol application sets InitLoginType to idaas_or_app_init_sso, this parameter is required.
   * When a SAML protocol application sets InitLoginType to only_app_init_sso, this parameter is required.
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
   * The SSO configuration parameters for an OIDC protocol-based application.
   */
  oidcSsoConfig?: SetApplicationSsoConfigRequestOidcSsoConfig;
  /**
   * @remarks
   * The SSO configuration parameters for a SAML protocol-based application.
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

