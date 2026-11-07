// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayAuthShrinkRequest extends $dara.Model {
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
  authResourceListShrink?: string;
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
  deleteResourceIdListShrink?: string;
  /**
   * @remarks
   * The custom authentication information.
   */
  externalAuthZJSONShrink?: string;
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
  scopesListShrink?: string;
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

