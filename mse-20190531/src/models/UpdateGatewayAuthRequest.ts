// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayAuthRequestAuthResourceListAuthResourceHeaderList extends $dara.Model {
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

export class UpdateGatewayAuthRequestAuthResourceList extends $dara.Model {
  authResourceHeaderList?: UpdateGatewayAuthRequestAuthResourceListAuthResourceHeaderList[];
  /**
   * @example
   * 1765
   */
  domainId?: number;
  /**
   * @example
   * 1
   */
  id?: number;
  ignoreCase?: boolean;
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
  /**
   * @example
   * 37396
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
  /**
   * @example
   * true
   */
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

export class UpdateGatewayAuthRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * \\"\\"
   */
  authResourceConfig?: string;
  authResourceList?: UpdateGatewayAuthRequestAuthResourceList[];
  /**
   * @example
   * 1
   */
  authResourceMode?: number;
  /**
   * @example
   * app_mnvxaavggw7hcdcnr6usi6***
   */
  clientId?: string;
  /**
   * @example
   * CS6EYfx3k9yTRR9EtQ2MXWP97P6UAUwFg4teoWJ19Z****
   */
  clientSecret?: string;
  /**
   * @example
   * test.com
   */
  cookieDomain?: string;
  deleteResourceIdList?: number[];
  externalAuthZJSON?: UpdateGatewayAuthRequestExternalAuthZJSON;
  /**
   * @example
   * gw-9cdcf8e4f58144059e73ff4c5ef9****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 719
   */
  id?: number;
  /**
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @example
   * test
   */
  issuer?: string;
  /**
   * @example
   * {"keys":[{"e":"AQAB","kid":"DHFbpoIUqrY8t2zpA2qXfCmr5VO5ZEr4RzHU_-envvQ","kty":"RSA","n":"xAE7eB6qugXyCAG3yhh7pkDkT65pHymX-P7KfIupjf59vsdo91bSP9C8H07pSAGQO1MV_xFj9VswgsCg4R6otmg5PV2He95lZdHtOcU5DXIg_pbhLdKXbi66GlVeK6ABZOUW3WYtnNHD-91gVuoeJT_DwtGGcp4ignkgXfkiEm4sw-4sfb4qdt5oLbyVpmW6x9cfa7vs2WTfURiCrBoUqgBo_-4WTiULmmHSGZHOjzwa8WtrtOQGsAFjIbno85jp6MnGGGZPYZbDAa_b3y5u-YpW7ypZrvD8BgtKVjgtQgZhLAGezMt0ua3DRrWnKqTZ0BJ_EyxOGuHJrLsn00fnMQ"}]}
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
   * https://test-.com/oauth2/callback
   */
  redirectUrl?: string;
  scopesList?: string[];
  /**
   * @example
   * true
   */
  status?: boolean;
  /**
   * @example
   * example-app
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

