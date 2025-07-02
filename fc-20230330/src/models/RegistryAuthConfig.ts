// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistryAuthConfig extends $dara.Model {
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
      password: 'password',
      userName: 'userName',
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

