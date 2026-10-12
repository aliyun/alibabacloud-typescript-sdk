// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeveloperRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the developer account. The length must be 6 to 32 characters.
   * 
   * @example
   * abcd1234
   */
  password?: string;
  /**
   * @remarks
   * The logon username of the developer. The length must not exceed 64 characters.
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

