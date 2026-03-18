// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReinstateAuthenticationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  token?: string;
  /**
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

