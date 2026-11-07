// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayAuthRequestAuthResourceListAuthResourceHeaderList extends $dara.Model {
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
   * - EQUAL: equal to.
   * - NOT_EQUAL: not equal to.
   * - EXIST: exists.
   * - NOT_EXIST: does not exist.
   * - INCLUDE: includes.
   * - EXCLUDE: excludes.
   * - PREFIX: prefix.
   * - SUFFIX: suffix.
   * - REGREX: regular expression.
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

export class AddGatewayAuthRequestAuthResourceList extends $dara.Model {
  /**
   * @remarks
   * The request headers of the rule. This parameter is currently only used for custom authentication.
   */
  authResourceHeaderList?: AddGatewayAuthRequestAuthResourceListAuthResourceHeaderList[];
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
   * Specifies whether the path is case-sensitive. This parameter is used when creating custom authentication. For other authentication types, case sensitivity is enabled by default. Valid values:
   * - true: case-sensitive.
   * - false: case-insensitive.
   * 
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @remarks
   * The matching type for the request path. Valid values:
   * - EQUAL: exact match.
   * - PRE: prefix match.
   * - ERGULAR: regular expression match.
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
      authResourceHeaderList: 'AuthResourceHeaderList',
      domainId: 'DomainId',
      ignoreCase: 'IgnoreCase',
      matchType: 'MatchType',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authResourceHeaderList: { 'type': 'array', 'itemType': AddGatewayAuthRequestAuthResourceListAuthResourceHeaderList },
      domainId: 'number',
      ignoreCase: 'boolean',
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

export class AddGatewayAuthRequestExternalAuthZJSON extends $dara.Model {
  /**
   * @remarks
   * The headers allowed in the authentication request.
   */
  allowRequestHeaders?: string[];
  /**
   * @remarks
   * The headers to retain in the authentication response.
   */
  allowUpstreamHeaders?: string[];
  /**
   * @remarks
   * The maximum number of bytes for the request body.
   * 
   * @example
   * 4000000
   */
  bodyMaxBytes?: number;
  /**
   * @remarks
   * The custom authentication mode. Valid values:
   * - true: strict mode. If the authentication service is unavailable, such as when a connection fails to be established or a 5xx error is returned, the gateway rejects the client request.
   * - false: loose mode. If the authentication service is unavailable, such as when a connection fails to be established or a 5xx error is returned, the gateway allows the client request.
   * 
   * @example
   * true
   */
  isRestrict?: boolean;
  /**
   * @remarks
   * The path of the authentication API provided by the authentication service. The API path must match the prefix.
   * 
   * @example
   * /auth
   */
  prefixPath?: string;
  /**
   * @remarks
   * The ID of the authentication service.
   * 
   * @example
   * 1343
   */
  serviceId?: number;
  /**
   * @remarks
   * The timeout period of the authentication service. Unit: seconds.
   * 
   * @example
   * 10
   */
  timeout?: number;
  /**
   * @remarks
   * The header in the request message that contains the token. Common headers include Authorization and Cookie.
   * 
   * @example
   * Authorization
   */
  tokenKey?: string;
  /**
   * @remarks
   * Specifies whether to rematch the route after authentication.
   */
  withRematchRoute?: boolean;
  /**
   * @remarks
   * Specifies whether to include the request body.
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayAuthRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned result. Valid values:
   * - zh: Chinese. This is the default value.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
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
   * The list of authorization rules for authentication. Multiple rule conditions use the OR operator, and multiple matching items within a rule condition use the AND operator.
   */
  authResourceList?: AddGatewayAuthRequestAuthResourceList[];
  /**
   * @remarks
   * The authorization resource mode. Valid values:
   * - 0: simple mode.
   * - 1: complex mode.
   * 
   * @example
   * 1
   */
  authResourceMode?: number;
  /**
   * @remarks
   * The application ID registered in the service. This parameter is used for OIDC and IDaaS.
   * 
   * @example
   * 23460e2fdd9bf9ad106****
   */
  clientId?: string;
  /**
   * @remarks
   * The application secret registered in the service. This parameter is used for OIDC and IDaaS.
   * 
   * @example
   * 123****
   */
  clientSecret?: string;
  /**
   * @remarks
   * The domain name of the cookie. After authentication, the cookie is sent to the specified domain name to maintain the logon state.
   * 
   * For example, if you set the value to `Cookie-domain=a.example.com`, the cookie is sent to the `a.example.com` domain name. If you set the value to `Cookie-domain=.example.com`, the cookie is sent to all subdomains of `example.com`.
   * 
   * @example
   * test.com
   */
  cookieDomain?: string;
  /**
   * @remarks
   * The custom authentication information.
   */
  externalAuthZJSON?: AddGatewayAuthRequestExternalAuthZJSON;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-*****9b04bb4474cae9d645be850e3d7
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The authorization blacklist and whitelist mode. Valid values:
   * - true: whitelist mode. Hosts and paths in the list can be accessed without verification, while all others require verification.
   * - false: blacklist mode. Hosts and paths in the list require verification, while all others can be accessed directly.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * Used when the authentication type is JWT or OIDC:
   * - JWT: specifies the `iss` (issuer) claim of the JWT.
   * - OIDC: specifies the `iss` (issuer) claim of the OIDC token.
   * 
   * @example
   * https://example.com/auth
   */
  issuer?: string;
  /**
   * @remarks
   * The JWT public key. JSON format is supported.
   * 
   * @example
   * {"keys":[{"e":"AQAB","kid":"DHFbpoIUqrY8t2zpA2qXfCmr5VO5ZEr4RzHU_-envvQ","kty":"RSA","n":"xAE7eB6qugXyCAG3yhh7pkDkT65pHymX-P7KfIupjf59vsdo91bSP9C8H07pSAGQO1MV_xFj9VswgsCg4R6otmg5PV2He95lZdHtOcU5DXIg_pbhLdKXbi66GlVeK6ABZOUW3WYtnNHD-91gVuoeJT_DwtGGcp4ignkgXfkiEm4sw-4sfb4qdt5oLbyVpmW6x9cfa7vs2WTfURiCrBoUqgBo_-4WTiULmmHSGZHOjzwa8WtrtOQGsAFjIbno85jp6MnGGGZPYZbDAa_b3y5u-YpW7ypZrvD8BgtKVjgtQgZhLAGezMt0ua3DRrWnKqTZ0BJ_EyxOGuHJrLsn00fnMQ"}]}
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
   * The name of the authentication.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The redirect URL after successful authorization. This parameter is used for OIDC and IDaaS. The value must be the same as the redirect URL configured in OIDC or IDaaS.
   * 
   * @example
   * https://test-.com/oauth2/callback
   */
  redirectUrl?: string;
  /**
   * @remarks
   * The OIDC authorization scopes. This parameter is used for OIDC.
   */
  scopesList?: string[];
  /**
   * @remarks
   * An unavailable parameter. You do not need to specify this parameter. By default, authentication is disabled after it is created.
   * 
   * @example
   * false
   */
  status?: boolean;
  /**
   * @remarks
   * Used when the authentication type is JWT. Specifies the `sub` (subject) claim of the JWT. Make sure that the value of the `sub` field in the JWT payload is the same as the value configured here. If this parameter is not specified or is empty, the default value is the same as the value of the Issuer parameter.
   * 
   * @example
   * testing@secure.istio.io
   */
  sub?: string;
  /**
   * @remarks
   * The location where the JWT token is stored.
   * 
   * By default, the token to be verified is placed in the Authorization header with the Bearer prefix, such as `Authorization: Bearer token`.
   * 
   * @example
   * Authorization
   */
  tokenName?: string;
  /**
   * @remarks
   * The prefix of the JWT token.
   * 
   * By default, the token to be verified is placed in the Authorization header with the Bearer prefix, such as `Authorization: Bearer token`.
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
   * - HEADER: transmitted in the HTTP header.
   * 
   * By default, the token to be verified is placed in the Authorization header with the Bearer prefix, such as Authorization: Bearer token.
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
   * - ExternalAuthZ (custom authentication service)
   * 
   * @example
   * JWT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      authResourceConfig: 'AuthResourceConfig',
      authResourceList: 'AuthResourceList',
      authResourceMode: 'AuthResourceMode',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      cookieDomain: 'CookieDomain',
      externalAuthZJSON: 'ExternalAuthZJSON',
      gatewayUniqueId: 'GatewayUniqueId',
      isWhite: 'IsWhite',
      issuer: 'Issuer',
      jwks: 'Jwks',
      loginUrl: 'LoginUrl',
      name: 'Name',
      redirectUrl: 'RedirectUrl',
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
      acceptLanguage: 'string',
      authResourceConfig: 'string',
      authResourceList: { 'type': 'array', 'itemType': AddGatewayAuthRequestAuthResourceList },
      authResourceMode: 'number',
      clientId: 'string',
      clientSecret: 'string',
      cookieDomain: 'string',
      externalAuthZJSON: AddGatewayAuthRequestExternalAuthZJSON,
      gatewayUniqueId: 'string',
      isWhite: 'boolean',
      issuer: 'string',
      jwks: 'string',
      loginUrl: 'string',
      name: 'string',
      redirectUrl: 'string',
      scopesList: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.authResourceList)) {
      $dara.Model.validateArray(this.authResourceList);
    }
    if(this.externalAuthZJSON && typeof (this.externalAuthZJSON as any).validate === 'function') {
      (this.externalAuthZJSON as any).validate();
    }
    if(Array.isArray(this.scopesList)) {
      $dara.Model.validateArray(this.scopesList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

