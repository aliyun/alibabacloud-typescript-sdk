// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchOAuthAuthenticationTokenResponseBodyOauthAccessTokenContent extends $dara.Model {
  /**
   * @remarks
   * The access_token field in the OAuth protocol Token endpoint response.
   * 
   * @example
   * DgEBAGP2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  accessTokenValue?: string;
  /**
   * @remarks
   * The scope field in the OAuth protocol Token endpoint response.
   * 
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
  /**
   * @remarks
   * The token_type field in the OAuth protocol Token endpoint response.
   * 
   * @example
   * Bearer
   */
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenValue: 'accessTokenValue',
      scope: 'scope',
      tokenType: 'tokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenValue: 'string',
      scope: 'string',
      tokenType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchOAuthAuthenticationTokenResponseBodyOauthAuthorizationSession extends $dara.Model {
  /**
   * @example
   * https://auth.example.com
   */
  authorizationUrl?: string;
  /**
   * @example
   * atpoas_yyy
   */
  sessionId?: string;
  /**
   * @example
   * pending
   */
  sessionStatus?: string;
  /**
   * @example
   * urn:ietf:params:oauth:request_uri:atpoas_yyy
   */
  sessionUri?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationUrl: 'authorizationUrl',
      sessionId: 'sessionId',
      sessionStatus: 'sessionStatus',
      sessionUri: 'sessionUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationUrl: 'string',
      sessionId: 'string',
      sessionStatus: 'string',
      sessionUri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchOAuthAuthenticationTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication token ID.
   * 
   * @example
   * atntkn_01kqflm0sxxx8nmdc1cb5dskxxxxx
   */
  authenticationTokenId?: string;
  /**
   * @remarks
   * The authentication token type.
   * 
   * > The value is fixed as `oauth_access_token`, indicating an OAuth Access Token type authentication token.
   * 
   * @example
   * oauth_access_token
   */
  authenticationTokenType?: string;
  /**
   * @remarks
   * The consumer ID of the authentication token.
   * 
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
   */
  consumerId?: string;
  /**
   * @remarks
   * The consumer type of the authentication token. Valid values:
   * 
   * - application: application
   * - custom: custom type
   * 
   * @example
   * application
   */
  consumerType?: string;
  /**
   * @remarks
   * The creation time of the authentication token. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator ID of the authentication token.
   * 
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
   */
  creatorId?: string;
  /**
   * @remarks
   * The creator type of the authentication token. Valid values:
   * 
   * - application: application
   * 
   * @example
   * application
   */
  creatorType?: string;
  /**
   * @remarks
   * The credential provider ID.
   * 
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @remarks
   * The expiration time of the authentication token. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1772693568000
   */
  expirationTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The authentication token content of the OAuth Access Token type.
   */
  oauthAccessTokenContent?: FetchOAuthAuthenticationTokenResponseBodyOauthAccessTokenContent;
  oauthAuthorizationSession?: FetchOAuthAuthenticationTokenResponseBodyOauthAuthorizationSession;
  /**
   * @remarks
   * Indicates whether the authentication token is revoked.
   * 
   * @example
   * false
   */
  revoked?: boolean;
  /**
   * @remarks
   * The update time of the authentication token. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830225000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      authenticationTokenId: 'authenticationTokenId',
      authenticationTokenType: 'authenticationTokenType',
      consumerId: 'consumerId',
      consumerType: 'consumerType',
      createTime: 'createTime',
      creatorId: 'creatorId',
      creatorType: 'creatorType',
      credentialProviderId: 'credentialProviderId',
      expirationTime: 'expirationTime',
      instanceId: 'instanceId',
      oauthAccessTokenContent: 'oauthAccessTokenContent',
      oauthAuthorizationSession: 'oauthAuthorizationSession',
      revoked: 'revoked',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationTokenId: 'string',
      authenticationTokenType: 'string',
      consumerId: 'string',
      consumerType: 'string',
      createTime: 'number',
      creatorId: 'string',
      creatorType: 'string',
      credentialProviderId: 'string',
      expirationTime: 'number',
      instanceId: 'string',
      oauthAccessTokenContent: FetchOAuthAuthenticationTokenResponseBodyOauthAccessTokenContent,
      oauthAuthorizationSession: FetchOAuthAuthenticationTokenResponseBodyOauthAuthorizationSession,
      revoked: 'boolean',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.oauthAccessTokenContent && typeof (this.oauthAccessTokenContent as any).validate === 'function') {
      (this.oauthAccessTokenContent as any).validate();
    }
    if(this.oauthAuthorizationSession && typeof (this.oauthAuthorizationSession as any).validate === 'function') {
      (this.oauthAuthorizationSession as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

