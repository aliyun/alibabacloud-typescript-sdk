// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayAuthShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned result. Valid values:
   * - zh: Chinese. This is the default value.
   * - en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The YAML configuration for the complex mode.
   * 
   * @example
   * permissions:
   *   - not_rule:
   *       or_rules:
   *         rules:
   *         - and_rules:
   *             rules:
   *             - url_path:
   *                 path:
   *                   ignore_case: false
   *                   prefix: /version
   *         - and_rules:
   *             rules:
   *             - url_path:
   *                 path:
   *                   ignore_case: false
   *                   prefix: /header
   */
  authResourceConfig?: string;
  /**
   * @remarks
   * The list of authorization rules for authentication. Multiple rule conditions use the OR operator, and multiple matching items within a rule condition use the AND operator.
   */
  authResourceListShrink?: string;
  /**
   * @remarks
   * The authorization resource mode. Valid values:
   * - 0: simple mode.
   * - 1: complex mode.
   * 
   * @example
   * 1
   */
  authResourceMode?: number;
  /**
   * @remarks
   * The application ID registered in the service. This parameter is used for OIDC and IDaaS.
   * 
   * @example
   * 23460e2fdd9bf9ad106****
   */
  clientId?: string;
  /**
   * @remarks
   * The application secret registered in the service. This parameter is used for OIDC and IDaaS.
   * 
   * @example
   * 123****
   */
  clientSecret?: string;
  /**
   * @remarks
   * The domain name of the cookie. After authentication, the cookie is sent to the specified domain name to maintain the logon state.
   * 
   * For example, if you set the value to `Cookie-domain=a.example.com`, the cookie is sent to the `a.example.com` domain name. If you set the value to `Cookie-domain=.example.com`, the cookie is sent to all subdomains of `example.com`.
   * 
   * @example
   * test.com
   */
  cookieDomain?: string;
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
   * gw-*****9b04bb4474cae9d645be850e3d7
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The authorization blacklist and whitelist mode. Valid values:
   * - true: whitelist mode. Hosts and paths in the list can be accessed without verification, while all others require verification.
   * - false: blacklist mode. Hosts and paths in the list require verification, while all others can be accessed directly.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * Used when the authentication type is JWT or OIDC:
   * - JWT: specifies the `iss` (issuer) claim of the JWT.
   * - OIDC: specifies the `iss` (issuer) claim of the OIDC token.
   * 
   * @example
   * https://example.com/auth
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
   * The URL of the user logon page for the IDaaS instance. This parameter is used for IDaaS.
   * 
   * @example
   * https://daxxxxcn.aliyunidaas.com/
   */
  loginUrl?: string;
  /**
   * @remarks
   * The name of the authentication.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The redirect URL after successful authorization. This parameter is used for OIDC and IDaaS. The value must be the same as the redirect URL configured in OIDC or IDaaS.
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
   * An unavailable parameter. You do not need to specify this parameter. By default, authentication is disabled after it is created.
   * 
   * @example
   * false
   */
  status?: boolean;
  /**
   * @remarks
   * Used when the authentication type is JWT. Specifies the `sub` (subject) claim of the JWT. Make sure that the value of the `sub` field in the JWT payload is the same as the value configured here. If this parameter is not specified or is empty, the default value is the same as the value of the Issuer parameter.
   * 
   * @example
   * testing@secure.istio.io
   */
  sub?: string;
  /**
   * @remarks
   * The location where the JWT token is stored.
   * 
   * By default, the token to be verified is placed in the Authorization header with the Bearer prefix, such as `Authorization: Bearer token`.
   * 
   * @example
   * Authorization
   */
  tokenName?: string;
  /**
   * @remarks
   * The prefix of the JWT token.
   * 
   * By default, the token to be verified is placed in the Authorization header with the Bearer prefix, such as `Authorization: Bearer token`.
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
   * - HEADER: transmitted in the HTTP header.
   * 
   * By default, the token to be verified is placed in the Authorization header with the Bearer prefix, such as Authorization: Bearer token.
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
   * - ExternalAuthZ (custom authentication service)
   * 
   * @example
   * JWT
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
      externalAuthZJSONShrink: 'ExternalAuthZJSON',
      gatewayUniqueId: 'GatewayUniqueId',
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
      externalAuthZJSONShrink: 'string',
      gatewayUniqueId: 'string',
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

