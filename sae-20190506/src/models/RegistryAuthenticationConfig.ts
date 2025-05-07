// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistryAuthenticationConfig extends $dara.Model {
  /**
   * @example
   * abc***
   */
  password?: string;
  /**
   * @example
   * admin
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

