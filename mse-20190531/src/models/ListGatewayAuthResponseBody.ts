// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayAuthResponseBodyDataResultExternalAuthZService extends $dara.Model {
  /**
   * @remarks
   * The name of the service group.
   * 
   * @example
   * com.mse.console.test.3YXO
   */
  groupName?: string;
  /**
   * @remarks
   * The authentication service name.
   * 
   * @example
   * updatetime
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
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
   * MSE
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

export class ListGatewayAuthResponseBodyDataResultExternalAuthZ extends $dara.Model {
  /**
   * @remarks
   * The names of the allowed request headers.
   */
  allowRequestHeaders?: string[];
  /**
   * @remarks
   * The names of the allowed response headers.
   */
  allowUpstreamHeaders?: string[];
  /**
   * @remarks
   * The maximum number of bytes for the request body.
   * 
   * @example
   * 1024
   */
  bodyMaxBytes?: number;
  /**
   * @remarks
   * The custom authentication mode. Valid values:
   * - true: strict mode. When the authentication service is unavailable (connection establishment fails or a 5xx status code is returned), the gateway rejects the client request.
   * - false: loose mode. When the authentication service is unavailable (connection establishment fails or a 5xx status code is returned), the gateway allows the client request.
   * 
   * @example
   * true
   */
  isRestrict?: boolean;
  /**
   * @remarks
   * The path of the authentication API provided by the authentication service. The API path must be prefix-matched.
   * 
   * @example
   * /auth
   */
  prefixPath?: string;
  /**
   * @remarks
   * The authentication service information.
   */
  service?: ListGatewayAuthResponseBodyDataResultExternalAuthZService;
  /**
   * @remarks
   * The ID of the authentication service.
   * 
   * @example
   * 45186
   */
  serviceId?: number;
  /**
   * @remarks
   * The timeout period of the authentication service. Unit: seconds.
   * 
   * @example
   * 30
   */
  timeout?: number;
  /**
   * @remarks
   * The token location, which indicates the header in the request message where the token is located. Common values include Authorization and Cookie.
   * 
   * @example
   * Authorization
   */
  tokenKey?: string;
  /**
   * @remarks
   * Specifies whether to rematch the route after authentication is completed.
   * 
   * @example
   * true
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
      service: ListGatewayAuthResponseBodyDataResultExternalAuthZService,
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

export class ListGatewayAuthResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The authorization resource mode. Valid values:
   * - 0: simple mode.
   * - 1: complex mode.
   * 
   * @example
   * 0
   */
  authResourceMode?: number;
  /**
   * @remarks
   * The application ID registered in the service. This parameter is used for OIDC or IDaaS.
   * 
   * @example
   * app_mnvxaavggw7hcdcnr6usi6***
   */
  clientId?: string;
  /**
   * @remarks
   * The application secret registered in the service. This parameter is used for OIDC or IDaaS.
   * 
   * @example
   * CS6EYfx3k9yTRR9EtQ2MXWP97P6UAUwFg4teoWJ19Z****
   */
  clientSecret?: string;
  /**
   * @remarks
   * The domain name of the cookie. After authentication, the cookie is sent to the specified domain name to maintain the logon status. This parameter is used for OIDC or IDaaS.
   * 
   * @example
   * test.com
   */
  cookieDomain?: string;
  /**
   * @remarks
   * The custom authentication information.
   */
  externalAuthZ?: ListGatewayAuthResponseBodyDataResultExternalAuthZ;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-e2d226bba4b2445c9e29fa7f8216****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-09-13 19:24:23
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2021-09-13 19:24:23
   */
  gmtModified?: string;
  /**
   * @remarks
   * The authentication ID.
   * 
   * @example
   * 549
   */
  id?: number;
  /**
   * @remarks
   * The authorization blacklists and whitelists mode. Valid values:
   * - true: whitelist mode. Hosts and paths in the whitelist can be accessed without verification, while all other hosts and paths require verification.
   * - false: blacklist mode. Hosts and paths in the blacklist require verification, while all other hosts and paths can be accessed directly.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * Used when the authentication type is JWT or OIDC:
   * - JWT: the iss (issuer) claim in the JWT, which represents the issuer.
   * - OIDC: the iss (issuer) claim in the OIDC token, which represents the issuer.
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
   * {\\"keys\\":[{\\"kty\\":\\"oct\\",\\"k\\":\\"9V9lpiuAQsME1efQChI0kEQz6fdVlJbDRFFa1lvEB_A\\",\\"alg\\":\\"HS256\\"}]}
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
   * The name of the authentication rule.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The redirect URL after successful authorization. This parameter is used for OIDC or IDaaS and must be consistent with the redirect URL configured in OIDC or IDaaS.
   * 
   * @example
   * http://test.com/oauth2/callback
   */
  redirectUrl?: string;
  /**
   * @remarks
   * The OIDC authorization scopes. This parameter is used for OIDC.
   * 
   * @example
   * ["openid"]
   */
  scopesList?: string;
  /**
   * @remarks
   * The enabling status. Valid values:
   * - false: disabled.
   * - true: enabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * Used when the authentication type is JWT. The sub (subject) claim in the JWT, which represents the subject.
   * 
   * @example
   * example-app
   */
  sub?: string;
  /**
   * @remarks
   * The location where the JWT token is stored.
   * 
   * By default, the token to be verified is prefixed with Bearer and placed in the Authorization header, for example, `Authorization: Bearer token`.
   * 
   * @example
   * Authorization
   */
  tokenName?: string;
  /**
   * @remarks
   * The prefix of the JWT token.
   * 
   * By default, the token to be verified is prefixed with Bearer and placed in the Authorization header, for example, `Authorization: Bearer token`.
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
   * The JWT token position. Valid values:
   * - HEADER: transmitted through the header.
   * 
   * By default, the token to be verified is prefixed with Bearer and placed in the Authorization header, for example, Authorization: Bearer token.
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
   * - ExternalAuthZ: self-managed authentication service
   * 
   * @example
   * JWT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
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
      authResourceMode: 'number',
      clientId: 'string',
      clientSecret: 'string',
      cookieDomain: 'string',
      externalAuthZ: ListGatewayAuthResponseBodyDataResultExternalAuthZ,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListGatewayAuthResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 9
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListGatewayAuthResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListGatewayAuthResponseBodyData;
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
   * The error message.
   * 
   * @example
   * Request processed successfully
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EC1EED4A-B147-597B-B949-FD3131AB4298
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
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
      data: ListGatewayAuthResponseBodyData,
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

