// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayAuthDetailResponseBodyDataExternalAuthZService extends $dara.Model {
  /**
   * @remarks
   * The group to which the authentication service belongs.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The authentication service name.
   * 
   * @example
   * httpbin-auth-service
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the authentication service.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The source type of the authentication service.
   * 
   * @example
   * K8s
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      name: 'Name',
      namespace: 'Namespace',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayAuthDetailResponseBodyDataExternalAuthZ extends $dara.Model {
  /**
   * @remarks
   * The allowed request headers.
   */
  allowRequestHeaders?: string[];
  /**
   * @remarks
   * The allowed response headers.
   */
  allowUpstreamHeaders?: string[];
  /**
   * @remarks
   * The maximum size of the request body in bytes.
   * 
   * @example
   * 4000000
   */
  bodyMaxBytes?: number;
  /**
   * @remarks
   * Specifies the custom authentication mode. Valid values:
   * - true: Strict mode. If the authentication service is unavailable (for example, the connection fails or a 5xx status code is returned), the gateway rejects the client request.
   * - false: Loose mode. If the authentication service is unavailable (for example, the connection fails or a 5xx status code is returned), the gateway allows the client request.
   * 
   * @example
   * true
   */
  isRestrict?: boolean;
  /**
   * @remarks
   * The path of the authentication API.
   * 
   * @example
   * /auth
   */
  prefixPath?: string;
  /**
   * @remarks
   * The authentication service information.
   */
  service?: GetGatewayAuthDetailResponseBodyDataExternalAuthZService;
  /**
   * @remarks
   * The ID of the authentication service.
   * 
   * @example
   * 15300
   */
  serviceId?: number;
  /**
   * @remarks
   * The timeout period of the authentication service, in seconds.
   * 
   * @example
   * 10
   */
  timeout?: number;
  /**
   * @remarks
   * The position of the token, which indicates the HTTP header that contains the token in the request. Common values include Authorization and Cookie.
   * 
   * @example
   * Authorization
   */
  tokenKey?: string;
  /**
   * @remarks
   * Specifies whether to rematch the route after authentication is completed.
   */
  withRematchRoute?: boolean;
  /**
   * @remarks
   * Specifies whether the request body is allowed.
   * 
   * @example
   * true
   */
  withRequestBody?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowRequestHeaders: 'AllowRequestHeaders',
      allowUpstreamHeaders: 'AllowUpstreamHeaders',
      bodyMaxBytes: 'BodyMaxBytes',
      isRestrict: 'IsRestrict',
      prefixPath: 'PrefixPath',
      service: 'Service',
      serviceId: 'ServiceId',
      timeout: 'Timeout',
      tokenKey: 'TokenKey',
      withRematchRoute: 'WithRematchRoute',
      withRequestBody: 'WithRequestBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRequestHeaders: { 'type': 'array', 'itemType': 'string' },
      allowUpstreamHeaders: { 'type': 'array', 'itemType': 'string' },
      bodyMaxBytes: 'number',
      isRestrict: 'boolean',
      prefixPath: 'string',
      service: GetGatewayAuthDetailResponseBodyDataExternalAuthZService,
      serviceId: 'number',
      timeout: 'number',
      tokenKey: 'string',
      withRematchRoute: 'boolean',
      withRequestBody: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.allowRequestHeaders)) {
      $dara.Model.validateArray(this.allowRequestHeaders);
    }
    if(Array.isArray(this.allowUpstreamHeaders)) {
      $dara.Model.validateArray(this.allowUpstreamHeaders);
    }
    if(this.service && typeof (this.service as any).validate === 'function') {
      (this.service as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayAuthDetailResponseBodyDataResourceListAuthResourceHeaderList extends $dara.Model {
  /**
   * @remarks
   * The name of the request header.
   * 
   * @example
   * x-req
   */
  headerKey?: string;
  /**
   * @remarks
   * The matching condition. Valid values:
   * - EQUAL: Equal to.
   * - NOT_EQUAL: Not equal to.
   * - EXIST: Exists.
   * - NOT_EXIST: Does not exist.
   * - INCLUDE: Includes.
   * - EXCLUDE: Excludes.
   * - PREFIX: Prefix.
   * - SUFFIX: Suffix.
   * - REGREX: Regular expression.
   * 
   * @example
   * EQUAL
   */
  headerMethod?: string;
  /**
   * @remarks
   * The value of the request header.
   * 
   * @example
   * 123
   */
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      headerMethod: 'HeaderMethod',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      headerMethod: 'string',
      headerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayAuthDetailResponseBodyDataResourceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the authentication to which the rule belongs.
   * 
   * @example
   * 2274
   */
  authId?: number;
  /**
   * @remarks
   * The request headers of the rule. This parameter is currently only used for custom authentication.
   */
  authResourceHeaderList?: GetGatewayAuthDetailResponseBodyDataResourceListAuthResourceHeaderList[];
  /**
   * @remarks
   * The ID of the domain name in the rule.
   * 
   * @example
   * 1765
   */
  domainId?: number;
  /**
   * @remarks
   * The domain name in the rule.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the gateway to which the rule belongs.
   * 
   * @example
   * 2274
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway to which the rule belongs.
   * 
   * @example
   * gw-6f0dbd108a0249d2b675b3ef50b*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The GMT time when the authorization rule was created.
   * 
   * @example
   * 2024-02-19T03:32:38.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The GMT time when the authorization rule was last modified.
   * 
   * @example
   * 2024-02-19T03:32:38.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the authorization rule.
   * 
   * @example
   * 1303
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether case sensitivity is enabled for the path. Valid values:
   * - true: Case sensitivity is enabled.
   * - false: Case sensitivity is disabled.
   * 
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @remarks
   * The authorization blacklist and whitelist mode. Valid values:
   * - true: Whitelist mode. Hosts and paths in the list can be accessed without verification, while all others require verification.
   * - false: Blacklist mode. Hosts and paths in the list require verification, while all others can be accessed directly.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * The matching type for the request path. Valid values:
   * - EQUAL: Exact match.
   * - PRE: Prefix match.
   * - ERGULAR: Regular expression match.
   * 
   * @example
   * EQUAL
   */
  matchType?: string;
  /**
   * @remarks
   * The matching path of the rule.
   * 
   * @example
   * /test
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      authResourceHeaderList: 'AuthResourceHeaderList',
      domainId: 'DomainId',
      domainName: 'DomainName',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ignoreCase: 'IgnoreCase',
      isWhite: 'IsWhite',
      matchType: 'MatchType',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'number',
      authResourceHeaderList: { 'type': 'array', 'itemType': GetGatewayAuthDetailResponseBodyDataResourceListAuthResourceHeaderList },
      domainId: 'number',
      domainName: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      ignoreCase: 'boolean',
      isWhite: 'boolean',
      matchType: 'string',
      path: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authResourceHeaderList)) {
      $dara.Model.validateArray(this.authResourceHeaderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayAuthDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The YAML configuration for the complex mode.
   * 
   * @example
   * permissions:
   *   - not_rule:
   *       or_rules:
   *         rules:
   *         - and_rules:
   *             rules:
   *             - url_path:
   *                 path:
   *                   ignore_case: false
   *                   prefix: /version
   *         - and_rules:
   *             rules:
   *             - url_path:
   *                 path:
   *                   ignore_case: false
   *                   prefix: /header
   */
  authResourceConfig?: string;
  /**
   * @remarks
   * The authorization resource mode. Valid values:
   * - 0: Simple mode.
   * - 1: Complex mode.
   * 
   * @example
   * 0
   */
  authResourceMode?: number;
  /**
   * @remarks
   * The application ID registered for the service. This parameter is used for OIDC and IDaaS.
   * 
   * @example
   * example-app
   */
  clientId?: string;
  /**
   * @remarks
   * The application secret registered for the service. This parameter is used for OIDC and IDaaS.
   * 
   * @example
   * xxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The domain name of the cookie. After authentication, the cookie is sent to the specified domain name to maintain the logon state. This parameter is used for OIDC and IDaaS.
   * 
   * @example
   * hello.com
   */
  cookieDomain?: string;
  /**
   * @remarks
   * The custom authentication information.
   */
  externalAuthZ?: GetGatewayAuthDetailResponseBodyDataExternalAuthZ;
  /**
   * @remarks
   * The ID of the gateway to which the authentication belongs.
   * 
   * @example
   * 2274
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway to which the authentication belongs.
   * 
   * @example
   * gw-6f0dbd108a0249d2b675b3ef50b*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The GMT time when the authentication was created.
   * 
   * @example
   * 2024-02-19T02:41:03.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The GMT time when the authentication was modified.
   * 
   * @example
   * 2024-02-19T02:41:03.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The authentication ID.
   * 
   * @example
   * 1100
   */
  id?: number;
  /**
   * @remarks
   * Authorization blacklist and whitelist mode:
   * 
   * - true: whitelist mode (hosts and paths in the list can be accessed without authentication, while all others require authentication).
   * - false: blacklist mode (hosts and paths in the list require authentication, while all others can be accessed directly).
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * Used when the authentication type is JWT or OIDC. For JWT, it represents the iss (issuer) claim in the JWT. For OIDC, it represents the iss (issuer) claim in the OIDC token.
   * 
   * @example
   * https://example.com/auth
   */
  issuer?: string;
  /**
   * @remarks
   * The JWT public key in JSON format.
   * 
   * @example
   * {\\n  \\"keys\\":[\\n    {\\n      \\"kty\\": \\"RSA\\",\\n      \\"e\\": \\"AQAB\\",\\n      \\"use\\": \\"sig\\",\\n      \\"kid\\": \\"1rGufmH1YN8rqM9ZOLgo7eEST3AnL89Y-m-XGFioLoA\\",\\n      \\"alg\\": \\"RS256\\",\\n      \\"n\\": \\"rM2GIc0YTMqwNCwXnjKbW5QndkCEZgyLu3uQUnyZF7HvMTekiTvQg_39mg3dV1eaYYkYfZBogyroJBqAQXhk6VVCxlBjFVp2xstJPVWngMOOlcafwN_BKdN-EQ06O_Uu__e7gNKI3DunkNk0cNaFETE7d4meRYyTlgEzYgsrW05_ufR0BKoddL3E5JsCpUxRjH9ICbodBx0U74W6Dcci-R2EA1DBrEcboE6n90uoJs6UJNriAK_71nAsYonihU5aQFFnyPTkJHfRwHK6JlME6rn-b-rpLSpdyc6U1nOFZP2DEpz8U5FrYoLYSZIU-MQGxDhCnGc_rxl2IyP9B2qcCQ\\"\\n    }\\n  ]\\n}\\n
   */
  jwks?: string;
  /**
   * @remarks
   * The URL of the user logon page for the IDaaS instance. This parameter is used for IDaaS.
   * 
   * @example
   * https://daxxxxcn.aliyunidaas.com/
   */
  loginUrl?: string;
  /**
   * @remarks
   * The authentication name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The redirect URL after successful authorization. This parameter is used for OIDC and IDaaS, and must be consistent with the redirect URL configured in OIDC or IDaaS.
   * 
   * @example
   * https://yourdomain/path
   */
  redirectUrl?: string;
  /**
   * @remarks
   * The list of authorization rules for authentication. Multiple rule conditions have an OR relationship, and multiple matching items within a rule condition have an AND relationship.
   */
  resourceList?: GetGatewayAuthDetailResponseBodyDataResourceList[];
  /**
   * @remarks
   * The OIDC scopes. This parameter is used for OIDC.
   * 
   * @example
   * ["openid","email"]
   */
  scopesList?: string;
  /**
   * @remarks
   * Indicates whether authentication is enabled.
   * 
   * @example
   * false
   */
  status?: boolean;
  /**
   * @remarks
   * Used when the authentication type is JWT. It represents the sub (subject) claim in the JWT.
   * 
   * @example
   * https://example.com/auth
   */
  sub?: string;
  /**
   * @remarks
   * The location where the JWT token is stored.
   * 
   * @example
   * Authorization
   */
  tokenName?: string;
  /**
   * @remarks
   * The prefix of the JWT token.
   * 
   * @example
   * Bearer
   */
  tokenNamePrefix?: string;
  /**
   * @remarks
   * Specifies whether to pass through the token.
   * 
   * @example
   * true
   */
  tokenPass?: boolean;
  /**
   * @remarks
   * The position of the JWT token. Valid values:
   * - HEADER: Transmitted through the HTTP header.
   * 
   * @example
   * HEADER
   */
  tokenPosition?: string;
  /**
   * @remarks
   * The authentication type. Valid values:
   * - JWT
   * - OIDC
   * - IDaaS
   * - ExternalAuthZ (self-managed authentication service)
   * 
   * @example
   * JWT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authResourceConfig: 'AuthResourceConfig',
      authResourceMode: 'AuthResourceMode',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      cookieDomain: 'CookieDomain',
      externalAuthZ: 'ExternalAuthZ',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isWhite: 'IsWhite',
      issuer: 'Issuer',
      jwks: 'Jwks',
      loginUrl: 'LoginUrl',
      name: 'Name',
      redirectUrl: 'RedirectUrl',
      resourceList: 'ResourceList',
      scopesList: 'ScopesList',
      status: 'Status',
      sub: 'Sub',
      tokenName: 'TokenName',
      tokenNamePrefix: 'TokenNamePrefix',
      tokenPass: 'TokenPass',
      tokenPosition: 'TokenPosition',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authResourceConfig: 'string',
      authResourceMode: 'number',
      clientId: 'string',
      clientSecret: 'string',
      cookieDomain: 'string',
      externalAuthZ: GetGatewayAuthDetailResponseBodyDataExternalAuthZ,
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isWhite: 'boolean',
      issuer: 'string',
      jwks: 'string',
      loginUrl: 'string',
      name: 'string',
      redirectUrl: 'string',
      resourceList: { 'type': 'array', 'itemType': GetGatewayAuthDetailResponseBodyDataResourceList },
      scopesList: 'string',
      status: 'boolean',
      sub: 'string',
      tokenName: 'string',
      tokenNamePrefix: 'string',
      tokenPass: 'boolean',
      tokenPosition: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.externalAuthZ && typeof (this.externalAuthZ as any).validate === 'function') {
      (this.externalAuthZ as any).validate();
    }
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayAuthDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. It synchronizes with the Success parameter. If Success is true, the code is 200.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The authentication details.
   */
  data?: GetGatewayAuthDetailResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C96CDF8-9E6C-XXXX-XXXX-8F87A10117E6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetGatewayAuthDetailResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

