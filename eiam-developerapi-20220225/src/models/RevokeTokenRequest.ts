// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The token to be revoked.
   * 
   * This parameter is required.
   * 
   * @example
   * ATxxxx
   */
  token?: string;
  /**
   * @remarks
   * The type of the token. Valid values: access_token refresh_token
   * 
   * @example
   * access_token
   */
  tokenTypeHint?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'client_id',
      clientSecret: 'client_secret',
      token: 'token',
      tokenTypeHint: 'token_type_hint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      token: 'string',
      tokenTypeHint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

