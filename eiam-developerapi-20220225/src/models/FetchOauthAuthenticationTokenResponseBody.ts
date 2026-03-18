// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchOAuthAuthenticationTokenResponseBodyOauthAccessTokenContent extends $dara.Model {
  /**
   * @example
   * DgEBAGP2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  accessTokenValue?: string;
  /**
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
  /**
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

export class FetchOAuthAuthenticationTokenResponseBody extends $dara.Model {
  /**
   * @example
   * atntkn_01kqflm0sxxx8nmdc1cb5dskxxxxx
   */
  authenticationTokenId?: string;
  /**
   * @example
   * oauth_access_token
   */
  authenticationTokenType?: string;
  /**
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
   */
  consumerId?: string;
  /**
   * @example
   * application
   */
  consumerType?: string;
  /**
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @example
   * app_ngtkgrrxxxxktg5eao6z4xxxxx
   */
  creatorId?: string;
  /**
   * @example
   * application
   */
  creatorType?: string;
  /**
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @example
   * 1772693568000
   */
  expirationTime?: number;
  /**
   * @remarks
   * EIAM实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  oauthAccessTokenContent?: FetchOAuthAuthenticationTokenResponseBodyOauthAccessTokenContent;
  /**
   * @example
   * false
   */
  revoked?: boolean;
  /**
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
      revoked: 'boolean',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.oauthAccessTokenContent && typeof (this.oauthAccessTokenContent as any).validate === 'function') {
      (this.oauthAccessTokenContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

