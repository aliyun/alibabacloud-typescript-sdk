// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeAuthenticationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * Original authentication token.
   * 
   * > You can pass either the original authentication token or a derived short token.
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  token?: string;
  /**
   * @remarks
   * Authentication token type hint.
   * 
   * >Notice: 
   * 
   * Currently, no value is required.
   * 
   * @example
   * -
   */
  tokenTypeHint?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'token',
      tokenTypeHint: 'token_type_hint',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

