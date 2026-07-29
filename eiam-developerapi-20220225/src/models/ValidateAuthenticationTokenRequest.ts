// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateAuthenticationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The original authentication token.
   * 
   * > Pass either the original authentication token or a derived short token.
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  token?: string;
  /**
   * @remarks
   * A hint about the type of the authentication token.
   * 
   * >Notice: 
   * 
   * No value is currently required for this parameter.
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

