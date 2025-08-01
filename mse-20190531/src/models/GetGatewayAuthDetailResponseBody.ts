// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayAuthDetailResponseBodyDataExternalAuthZService extends $dara.Model {
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * httpbin-auth-service
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * K8S
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
  allowRequestHeaders?: string[];
  allowUpstreamHeaders?: string[];
  /**
   * @example
   * 4000000
   */
  bodyMaxBytes?: number;
  /**
   * @example
   * true
   */
  isRestrict?: boolean;
  /**
   * @example
   * /auth
   */
  prefixPath?: string;
  service?: GetGatewayAuthDetailResponseBodyDataExternalAuthZService;
  /**
   * @example
   * 15300
   */
  serviceId?: number;
  /**
   * @example
   * 10
   */
  timeout?: number;
  /**
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

export class GetGatewayAuthDetailResponseBodyDataResourceList extends $dara.Model {
  /**
   * @example
   * 2274
   */
  authId?: number;
  authResourceHeaderList?: GetGatewayAuthDetailResponseBodyDataResourceListAuthResourceHeaderList[];
  /**
   * @example
   * 1765
   */
  domainId?: number;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 2274
   */
  gatewayId?: number;
  /**
   * @example
   * gw-6f0dbd108a0249d2b675b3ef50b*****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 2024-02-19T03:32:38.000+0000
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-02-19T03:32:38.000+0000
   */
  gmtModified?: string;
  /**
   * @example
   * 1303
   */
  id?: number;
  /**
   * @example
   * true
   */
  ignoreCase?: boolean;
  /**
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @example
   * EQUAL
   */
  matchType?: string;
  /**
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
  authResourceConfig?: string;
  /**
   * @example
   * 0
   */
  authResourceMode?: number;
  /**
   * @example
   * example-app
   */
  clientId?: string;
  /**
   * @example
   * xxxxx
   */
  clientSecret?: string;
  /**
   * @example
   * hello.com
   */
  cookieDomain?: string;
  externalAuthZ?: GetGatewayAuthDetailResponseBodyDataExternalAuthZ;
  /**
   * @example
   * 2274
   */
  gatewayId?: number;
  /**
   * @example
   * gw-6f0dbd108a0249d2b675b3ef50b*****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 2024-02-19T02:41:03.000+0000
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-02-19T02:41:03.000+0000
   */
  gmtModified?: string;
  /**
   * @example
   * 1100
   */
  id?: number;
  /**
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @example
   * https://example.com/auth
   */
  issuer?: string;
  /**
   * @example
   * {\\n  \\"keys\\":[\\n    {\\n      \\"kty\\": \\"RSA\\",\\n      \\"e\\": \\"AQAB\\",\\n      \\"use\\": \\"sig\\",\\n      \\"kid\\": \\"1rGufmH1YN8rqM9ZOLgo7eEST3AnL89Y-m-XGFioLoA\\",\\n      \\"alg\\": \\"RS256\\",\\n      \\"n\\": \\"rM2GIc0YTMqwNCwXnjKbW5QndkCEZgyLu3uQUnyZF7HvMTekiTvQg_39mg3dV1eaYYkYfZBogyroJBqAQXhk6VVCxlBjFVp2xstJPVWngMOOlcafwN_BKdN-EQ06O_Uu__e7gNKI3DunkNk0cNaFETE7d4meRYyTlgEzYgsrW05_ufR0BKoddL3E5JsCpUxRjH9ICbodBx0U74W6Dcci-R2EA1DBrEcboE6n90uoJs6UJNriAK_71nAsYonihU5aQFFnyPTkJHfRwHK6JlME6rn-b-rpLSpdyc6U1nOFZP2DEpz8U5FrYoLYSZIU-MQGxDhCnGc_rxl2IyP9B2qcCQ\\"\\n    }\\n  ]\\n}\\n
   */
  jwks?: string;
  /**
   * @example
   * https://daxxxxcn.aliyunidaas.com/
   */
  loginUrl?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * https://yourdomain/path
   */
  redirectUrl?: string;
  resourceList?: GetGatewayAuthDetailResponseBodyDataResourceList[];
  /**
   * @example
   * ["openid","email"]
   */
  scopesList?: string;
  /**
   * @example
   * false
   */
  status?: boolean;
  /**
   * @example
   * https://example.com/auth
   */
  sub?: string;
  /**
   * @example
   * Authorization
   */
  tokenName?: string;
  /**
   * @example
   * Bearer
   */
  tokenNamePrefix?: string;
  /**
   * @example
   * true
   */
  tokenPass?: boolean;
  /**
   * @example
   * HEADER
   */
  tokenPosition?: string;
  /**
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
   * @example
   * 200
   */
  code?: number;
  data?: GetGatewayAuthDetailResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 9C96CDF8-9E6C-XXXX-XXXX-8F87A10117E6
   */
  requestId?: string;
  /**
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

