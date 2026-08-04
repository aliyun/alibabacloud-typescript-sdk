// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClientUserPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1128
   */
  id?: string;
  /**
   * @remarks
   * The password. If this parameter is left empty, a random password is automatically generated.
   * 
   * @example
   * kehudiyidj
   */
  password?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * 张三
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

