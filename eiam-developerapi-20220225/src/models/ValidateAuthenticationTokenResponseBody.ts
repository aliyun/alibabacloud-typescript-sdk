// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateAuthenticationTokenResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

