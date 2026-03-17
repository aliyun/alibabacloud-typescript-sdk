// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTokenByAuthorizationServerResponseBody extends $dara.Model {
  /**
   * @example
   * eyJraWQiOiJLRVlLZ0Iyxxxxx
   */
  accessToken?: string;
  /**
   * @example
   * 1653288641
   */
  expiresAt?: number;
  /**
   * @example
   * 1200
   */
  expiresIn?: number;
  /**
   * @example
   * eyJraWQiOiJLRVlLZ0Iyxxxxx
   */
  idToken?: string;
  /**
   * @example
   * ATxxxxx
   */
  refreshToken?: string;
  /**
   * @example
   * openid
   */
  scope?: string;
  /**
   * @example
   * Bearer
   */
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'access_token',
      expiresAt: 'expires_at',
      expiresIn: 'expires_in',
      idToken: 'id_token',
      refreshToken: 'refresh_token',
      scope: 'scope',
      tokenType: 'token_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      expiresAt: 'number',
      expiresIn: 'number',
      idToken: 'string',
      refreshToken: 'string',
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

