// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeveloperRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the developer account. The password must be 6 to 32 characters in length.
   * 
   * @example
   * abcd1234
   */
  password?: string;
  /**
   * @remarks
   * The logon username of the developer. The username can be up to 64 characters in length.
   * 
   * @example
   * developer-demo
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

