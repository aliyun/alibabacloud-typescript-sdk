// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayAuthShrinkRequest extends $dara.Model {
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
  authResourceListShrink?: string;
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
  deleteResourceIdListShrink?: string;
  externalAuthZJSONShrink?: string;
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
  scopesListShrink?: string;
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
      authResourceListShrink: 'AuthResourceList',
      authResourceMode: 'AuthResourceMode',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      cookieDomain: 'CookieDomain',
      deleteResourceIdListShrink: 'DeleteResourceIdList',
      externalAuthZJSONShrink: 'ExternalAuthZJSON',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      isWhite: 'IsWhite',
      issuer: 'Issuer',
      jwks: 'Jwks',
      loginUrl: 'LoginUrl',
      name: 'Name',
      redirectUrl: 'RedirectUrl',
      scopesListShrink: 'ScopesList',
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
      authResourceListShrink: 'string',
      authResourceMode: 'number',
      clientId: 'string',
      clientSecret: 'string',
      cookieDomain: 'string',
      deleteResourceIdListShrink: 'string',
      externalAuthZJSONShrink: 'string',
      gatewayUniqueId: 'string',
      id: 'number',
      isWhite: 'boolean',
      issuer: 'string',
      jwks: 'string',
      loginUrl: 'string',
      name: 'string',
      redirectUrl: 'string',
      scopesListShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

