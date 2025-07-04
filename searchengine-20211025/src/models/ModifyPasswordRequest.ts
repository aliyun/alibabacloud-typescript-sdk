// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The password.
   * 
   * @example
   * ******************************
   */
  password?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * "username"
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

