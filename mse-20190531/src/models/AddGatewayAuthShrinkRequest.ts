// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayAuthShrinkRequest extends $dara.Model {
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
  authResourceListShrink?: string;
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
  externalAuthZJSONShrink?: string;
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
  scopesListShrink?: string;
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

