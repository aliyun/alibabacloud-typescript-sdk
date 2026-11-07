// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGatewayAuthResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID registered for the service. This parameter is used for OIDC or IDaaS.
   * 
   * @example
   * example-app
   */
  clientId?: string;
  /**
   * @remarks
   * The application secret registered for the service. This parameter is used for OIDC or IDaaS.
   * 
   * @example
   * xxxxx
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
   * The gateway ID.
   * 
   * @example
   * 399
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
   * 2022-01-07 18:07:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The authentication ID.
   * 
   * @example
   * 120
   */
  id?: number;
  /**
   * @remarks
   * The authorization blacklist and whitelist mode. Valid values:
   * - true: whitelist mode. Hosts and paths in the whitelist can be accessed without verification, while all other hosts and paths require verification.
   * - false: blacklist mode. Hosts and paths in the blacklist require verification, while all other hosts and paths can be accessed directly.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * The issuer used when the authentication type is JWT or OIDC:
   * - JWT: the iss (issuer) claim of the JWT, which represents the issuer.
   * - OIDC: the iss (issuer) claim of the OIDC, which represents the issuer.
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
   * The redirect URL after successful authorization. This parameter is used for OIDC or IDaaS and must be consistent with the redirect URL configured in OIDC or IDaaS.
   * 
   * @example
   * https://yourdomain/path
   */
  redirectUrl?: string;
  /**
   * @remarks
   * The OIDC scopes. This parameter is used for OIDC.
   */
  scopesList?: string[];
  /**
   * @remarks
   * The enabling status. Valid values:
   * - true: enabled.
   * - false: disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The name of the token parameter to be verified. By default, the token is prefixed with Bearer and placed in the Authorization header. Example: `Authorization: Bearer token`.
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
   * - HEADER: transmitted through the header.
   * The token parameter to be verified. By default, the token is prefixed with Bearer and placed in the Authorization header. Example: `Authorization: Bearer token`.
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
   * - ExternalAuthZ: custom authentication service.
   * 
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
   * @remarks
   * The code returned in synchronization with the Success parameter. When Success is true, the value is 200.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: DeleteGatewayAuthResponseBodyData;
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
   * The returned message.
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
   * 316F5F64-F73D-42DC-8632-01E308B6****
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

