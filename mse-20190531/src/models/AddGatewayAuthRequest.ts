// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayAuthRequestAuthResourceListAuthResourceHeaderList extends $dara.Model {
  /**
   * @example
   * x-req
   */
  headerKey?: string;
  /**
   * @example
   * EQUAL
   */
  headerMethod?: string;
  /**
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
  authResourceHeaderList?: AddGatewayAuthRequestAuthResourceListAuthResourceHeaderList[];
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 1
   */
  domainId?: number;
  /**
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @example
   * EQUAL
   */
  matchType?: string;
  /**
   * @remarks
   * The request path.
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
   * The header that can be carried in an authentication request.
   */
  allowRequestHeaders?: string[];
  /**
   * @remarks
   * The header that can be retained in an authentication response.
   */
  allowUpstreamHeaders?: string[];
  /**
   * @example
   * 4000000
   */
  bodyMaxBytes?: number;
  /**
   * @remarks
   * Specifies whether the gateway allows a client request when the authentication server is unavailable. If a connection to the authentication server fails to be established or a 5xx error code is returned, the authentication server is unavailable.
   * 
   * @example
   * true
   */
  isRestrict?: boolean;
  /**
   * @remarks
   * The path of the authentication API provided by the authentication service. The path supports the prefix match method.
   * 
   * @example
   * /auth
   */
  prefixPath?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @remarks
   * The timeout period. Unit: seconds.
   * 
   * @example
   * 100
   */
  timeout?: number;
  /**
   * @remarks
   * The header that stores a token in an authentication request. In most cases, a token is stored in the Authorization or Cookie header.
   * 
   * @example
   * Authorization
   */
  tokenKey?: string;
  withRematchRoute?: boolean;
  /**
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
   * @example
   * zh
   */
  acceptLanguage?: string;
  authResourceConfig?: string;
  /**
   * @remarks
   * The information about the resource to be authorized.
   */
  authResourceList?: AddGatewayAuthRequestAuthResourceList[];
  /**
   * @example
   * 1
   */
  authResourceMode?: number;
  /**
   * @remarks
   * The application ID registered with the OIDC authentication service.
   * 
   * @example
   * 23460e2fdd9bf9ad106****
   */
  clientId?: string;
  /**
   * @remarks
   * The application secret registered with the OIDC authentication service.
   * 
   * @example
   * 123****
   */
  clientSecret?: string;
  /**
   * @remarks
   * The domain name of the cookie. After the authentication is passed, the cookie is sent to the specified domain name to maintain the logon status. For example, if you set `Cookie-domain` to a.example.com, the cookie is sent to the domain name `a.example.com`. If you set `Cookie-domain` to .example.com, the cookie is sent to all subdomains of `example.com`.
   * 
   * @example
   * test.com
   */
  cookieDomain?: string;
  /**
   * @remarks
   * The information about the custom authentication service.
   */
  externalAuthZJSON?: AddGatewayAuthRequestExternalAuthZJSON;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-492af9b04bb4474cae9d645be850e3d7
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Specifies whether to enable the whitelist feature.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * The iss value of JWT claims, which indicates the issuer. You must make sure that the value of this parameter is the same as the iss value in the payload of JWT claims.
   * 
   * @example
   * testing@secure.istio.io
   */
  issuer?: string;
  /**
   * @remarks
   * The JWT public key. The JSON format is supported.
   * 
   * @example
   * {"keys":[{"e":"AQAB","kid":"DHFbpoIUqrY8t2zpA2qXfCmr5VO5ZEr4RzHU_-envvQ","kty":"RSA","n":"xAE7eB6qugXyCAG3yhh7pkDkT65pHymX-P7KfIupjf59vsdo91bSP9C8H07pSAGQO1MV_xFj9VswgsCg4R6otmg5PV2He95lZdHtOcU5DXIg_pbhLdKXbi66GlVeK6ABZOUW3WYtnNHD-91gVuoeJT_DwtGGcp4ignkgXfkiEm4sw-4sfb4qdt5oLbyVpmW6x9cfa7vs2WTfURiCrBoUqgBo_-4WTiULmmHSGZHOjzwa8WtrtOQGsAFjIbno85jp6MnGGGZPYZbDAa_b3y5u-YpW7ypZrvD8BgtKVjgtQgZhLAGezMt0ua3DRrWnKqTZ0BJ_EyxOGuHJrLsn00fnMQ"}]}
   */
  jwks?: string;
  /**
   * @remarks
   * The URL that is used to log on to the IDaaS instance.
   * 
   * @example
   * ***
   */
  loginUrl?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * jwt
   */
  name?: string;
  /**
   * @remarks
   * The redirect URL.
   * 
   * @example
   * https://test-.com/oauth2/callback
   */
  redirectUrl?: string;
  /**
   * @remarks
   * The OIDC scope.
   */
  scopesList?: string[];
  /**
   * @remarks
   * The status.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The sub value of JWT claims, which indicates the subject. You must make sure that the value of this parameter is the same as the sub value in the payload of JWT claims. If you do not set this parameter or leave it empty, the default value, which is the value of the Issuer parameter, is used.
   * 
   * @example
   * testing@secure.istio.io
   */
  sub?: string;
  /**
   * @remarks
   * The name of the parameter that is required to verify a token. By default, a token is prefixed with Bearer and stored in the authorization header. Example: `Authorization: Bearer token`.
   * 
   * @example
   * Authorization
   */
  tokenName?: string;
  /**
   * @remarks
   * The name prefix of the parameter that is required to verify a token. By default, a token is prefixed with Bearer and stored in the authorization header. Example: `Authorization: Bearer token`
   * 
   * @example
   * Bearer
   */
  tokenNamePrefix?: string;
  /**
   * @remarks
   * Specifies whether to enable pass-through.
   * 
   * @example
   * true
   */
  tokenPass?: boolean;
  /**
   * @remarks
   * The position of the parameter that is required to verify a token. By default, a token is prefixed with Bearer and stored in the authorization header. Example: `Authorization: Bearer token`.
   * 
   * @example
   * HEADER
   */
  tokenPosition?: string;
  /**
   * @remarks
   * The authentication type. JSON Web Token (JWT) authentication, OpenID Connect (OIDC) authentication, Identity as a Service (IDaaS) authentication, or custom authentication are supported.
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

