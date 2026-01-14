// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGatewayAuthResponseBodyData extends $dara.Model {
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
   * test.com
   */
  cookieDomain?: string;
  /**
   * @example
   * 399
   */
  gatewayId?: number;
  /**
   * @example
   * gw-e2d226bba4b2445c9e29fa7f8216****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * 2022-01-07 18:07:57
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-01-07 18:07:57
   */
  gmtModified?: string;
  /**
   * @example
   * 120
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
   * {
   *       "keys": [
   *             {
   *                   "e": "AQAB",
   *                   "kid": "DHFbpoIUqrY8t2zpA2qXfCmr5VO5ZEr4RzHU_-envvQ",
   *                   "kty": "RSA",
   *                   "n": "xAE7eB6qugXyCAG3yhh7pkDkT65pHymX-P7KfIupjf59vsdo91bSP9C8H07pSAGQO1MV_xFj9VswgsCg4R6otmg5PV2He95lZdHtOcU5DXIg_pbhLdKXbi66GlVeK6ABZOUW3WYtnNHD-91gVuoeJT_DwtGGcp4ignkgXfkiEm4sw-4sfb4qdt5oLbyVpmW6x9cfa7vs2WTfURiCrBoUqgBo_-4WTiULmmHSGZHOjzwa8WtrtOQGsAFjIbno85jp6MnGGGZPYZbDAa_b3y5u-YpW7ypZrvD8BgtKVjgtQgZhLAGezMt0ua3DRrWnKqTZ0BJ_EyxOGuHJrLsn00fnMQ"
   *             }
   *       ]
   * }
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
  scopesList?: string[];
  /**
   * @example
   * true
   */
  status?: boolean;
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
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      cookieDomain: 'CookieDomain',
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
      tokenName: 'TokenName',
      tokenNamePrefix: 'TokenNamePrefix',
      tokenPass: 'TokenPass',
      tokenPosition: 'TokenPosition',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      cookieDomain: 'string',
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
      scopesList: { 'type': 'array', 'itemType': 'string' },
      status: 'boolean',
      tokenName: 'string',
      tokenNamePrefix: 'string',
      tokenPass: 'boolean',
      tokenPosition: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scopesList)) {
      $dara.Model.validateArray(this.scopesList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayAuthResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: DeleteGatewayAuthResponseBodyData;
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
   * 316F5F64-F73D-42DC-8632-01E308B6****
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
      data: DeleteGatewayAuthResponseBodyData,
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

