// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayAuthDetailResponseBodyDataExternalAuthZ } from "./GetGatewayAuthDetailResponseBodyDataExternalAuthZ";
import { GetGatewayAuthDetailResponseBodyDataResourceList } from "./GetGatewayAuthDetailResponseBodyDataResourceList";


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

