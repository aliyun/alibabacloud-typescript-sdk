// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * ATxxx
   */
  accessToken?: string;
  /**
   * @remarks
   * The time when the token expires. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1653288641
   */
  expiresAt?: number;
  /**
   * @remarks
   * The remaining validity period of the token. Unit: seconds.
   * 
   * @example
   * 1200
   */
  expiresIn?: number;
  /**
   * @remarks
   * The ID token.
   * 
   * @example
   * xxxxx
   */
  idToken?: string;
  /**
   * @remarks
   * The refresh token.
   * 
   * @example
   * RTxxx
   */
  refreshToken?: string;
  /**
   * @remarks
   * The type of the token. Valid values: Basic Bearer
   * 
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

