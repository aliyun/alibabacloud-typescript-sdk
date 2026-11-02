// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoginDeveloperRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the developer account. This field is marked as sensitive in the API definition.
   * 
   * @example
   * abcd1234
   */
  password?: string;
  /**
   * @remarks
   * The developer logon username.
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

