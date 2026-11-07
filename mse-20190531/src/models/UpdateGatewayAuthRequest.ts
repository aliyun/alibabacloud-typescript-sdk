// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayAuthRequestAuthResourceListAuthResourceHeaderList extends $dara.Model {
  /**
   * @remarks
   * The request header name.
   * 
   * @example
   * x-req
   */
  headerKey?: string;
  /**
   * @remarks
   * The matching condition. Valid values:
   * 
   * - EQUAL: equal to.
   * - NOT_EQUAL: not equal to.
   * - EXIST: exists.
   * - NOT_EXIST: does not exist.
   * - INCLUDE: contains.
   * - EXCLUDE: does not contain.
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

export class UpdateGatewayAuthRequestAuthResourceList extends $dara.Model {
  /**
   * @remarks
   * The request headers of the rule. Currently only used for custom authentication.
   */
  authResourceHeaderList?: UpdateGatewayAuthRequestAuthResourceListAuthResourceHeaderList[];
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
   * The resource record ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Specifies whether case sensitivity is enabled for the path. This parameter is used when creating custom authentication. Other authentication types enable case sensitivity by default. Valid values:
   * 
   * - true: case sensitivity is enabled.
   * - false: case sensitivity is disabled.
   */
  ignoreCase?: boolean;
  /**
   * @remarks
   * The matching type for the request path. Valid values:
   * 
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
      id: 'Id',
      ignoreCase: 'IgnoreCase',
      matchType: 'MatchType',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authResourceHeaderList: { 'type': 'array', 'itemType': UpdateGatewayAuthRequestAuthResourceListAuthResourceHeaderList },
      domainId: 'number',
      id: 'number',
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

export class UpdateGatewayAuthRequestExternalAuthZJSON extends $dara.Model {
  /**
   * @remarks
   * The allowed request header names.
   */
  allowRequestHeaders?: string[];
  /**
   * @remarks
   * The allowed response header names.
   */
  allowUpstreamHeaders?: string[];
  /**
   * @remarks
   * The maximum number of bytes for the body.
   * 
   * @example
   * 4000000
   */
  bodyMaxBytes?: number;
  /**
   * @remarks
   * The custom authentication mode. Valid values:
   * 
   * - true: strict mode. When the authentication service is unavailable (connection establishment fails or a 5xx response is returned), the gateway rejects client requests.
   * - false: loose mode. When the authentication service is unavailable (connection establishment fails or a 5xx response is returned), the gateway allows client requests.
   * 
   * @example
   * true
   */
  isRestrict?: boolean;
  /**
   * @remarks
   * The path of the authentication API provided by the authentication service. The API path must use prefix matching.
   * 
   * @example
   * /auth
   */
  prefixPath?: string;
  /**
   * @remarks
   * The authentication service ID.
   * 
   * @example
   * 37396
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
   * The header in which the token is located in the request message. Common values include Authorization and Cookie.
   * 
   * @example
   * Authorization
   */
  tokenKey?: string;
  /**
   * @remarks
   * Specifies whether to re-match routes after authentication is complete.
   * 
   * @example
   * true
   */
  withRematchRoute?: boolean;
  /**
   * @remarks
   * Specifies whether to allow carrying the body.
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

export class UpdateGatewayAuthRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh (default): Chinese. en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The YAML configuration for complex mode.
   * 
   * @example
   * \\"\\"
   */
  authResourceConfig?: string;
  /**
   * @remarks
   * The list of authorization rules for authentication. Multiple rule conditions have an OR relationship. Multiple matching items within a rule condition have an AND relationship.
   */
  authResourceList?: UpdateGatewayAuthRequestAuthResourceList[];
  /**
   * @remarks
   * The authorization resource mode. Valid values:
   * 
   * - 0: simple mode.
   * - 1: complex mode.
   * 
   * @example
   * 1
   */
  authResourceMode?: number;
  /**
   * @remarks
   * The application ID registered with the service. This parameter is used for OIDC/IDaaS.
   * 
   * @example
   * app_mnvxaavggw7hcdcnr6usi6***
   */
  clientId?: string;
  /**
   * @remarks
   * The application secret registered with the OIDC authentication service.
   * 
   * @example
   * CS6EYfx3k9yTRR9EtQ2MXWP97P6UAUwFg4teoWJ19Z****
   */
  clientSecret?: string;
  /**
   * @remarks
   * The cookie domain name. After authentication succeeds, the cookie is sent to the specified domain name to maintain the logon state.
   * 
   * Example: If you set `Cookie-domain=a.example.com`, the cookie is sent to the domain name `a.example.com`. If you set `Cookie-domain=.example.com`, the cookie is sent to all subdomains of `example.com`.
   * 
   * @example
   * test.com
   */
  cookieDomain?: string;
  /**
   * @remarks
   * The list of resource record IDs to delete.
   */
  deleteResourceIdList?: number[];
  /**
   * @remarks
   * The custom authentication information.
   */
  externalAuthZJSON?: UpdateGatewayAuthRequestExternalAuthZJSON;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-9cdcf8e4f58144059e73ff4c5ef9****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The authentication rule ID.
   * 
   * @example
   * 719
   */
  id?: number;
  /**
   * @remarks
   * The authorization blacklist/whitelist mode. Valid values:
   * 
   * - true: whitelist mode. Hosts and paths in the list can be accessed without verification. All others require verification.
   * - false: blacklist mode. Hosts and paths in the list require verification. All others can be accessed directly.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * Used when the authentication type is JWT or OIDC:
   * 
   * - JWT: the iss (issuer) in JWT claims, which specifies the token issuer.
   * - OIDC: the iss (issuer) in OIDC claims, which specifies the token issuer.
   * 
   * @example
   * test
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
   * The user logon page URL of the IDaaS instance. This parameter is used for IDaaS.
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
   * The redirect URL after successful authorization. This parameter is used for OIDC/IDaaS and must be consistent with the redirect URL configured in OIDC/IDaaS.
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
   * The enabled status. Valid values:
   * 
   * - false: disabled.
   * - true: enabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * Used when the authentication type is JWT. The sub (subject) in JWT claims, which specifies the principal. Make sure that the value of the sub field in the JWT payload is consistent with the value configured here. If this parameter is not set or is empty, the value defaults to the value of the Issuer parameter.
   * 
   * @example
   * example-app
   */
  sub?: string;
  /**
   * @remarks
   * The location where the JWT token is stored.
   * 
   * The token parameter information to be verified. By default, the token is placed in the Authorization header with the Bearer prefix. Example: `Authorization: Bearer token`.
   * 
   * @example
   * Authorization
   */
  tokenName?: string;
  /**
   * @remarks
   * The prefix of the JWT token.
   * 
   * The token parameter information to be verified. By default, the token is placed in the Authorization header with the Bearer prefix. Example: `Authorization: Bearer token`.
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
   * The JWT token type. Valid values:
   * 
   * - HEADER: transmitted through a header.
   * 
   * The token parameter information to be verified. By default, the token is placed in the Authorization header with the Bearer prefix. Example: Authorization: Bearer token.
   * 
   * @example
   * HEADER
   */
  tokenPosition?: string;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * - JWT
   * - OIDC
   * - IDaaS
   * - ExternalAuthZ: a self-managed authentication service.
   * 
   * @example
   * ExternalAuthZ
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
      deleteResourceIdList: 'DeleteResourceIdList',
      externalAuthZJSON: 'ExternalAuthZJSON',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
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
      authResourceList: { 'type': 'array', 'itemType': UpdateGatewayAuthRequestAuthResourceList },
      authResourceMode: 'number',
      clientId: 'string',
      clientSecret: 'string',
      cookieDomain: 'string',
      deleteResourceIdList: { 'type': 'array', 'itemType': 'number' },
      externalAuthZJSON: UpdateGatewayAuthRequestExternalAuthZJSON,
      gatewayUniqueId: 'string',
      id: 'number',
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
    if(Array.isArray(this.deleteResourceIdList)) {
      $dara.Model.validateArray(this.deleteResourceIdList);
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

