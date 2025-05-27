// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectionsResponseBodyDataConnectionsAuthParametersBasicAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The password for basic authentication.
   * 
   * @example
   * admin
   */
  password?: string;
  /**
   * @remarks
   * The username for basic authentication.
   * 
   * @example
   * admin
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      username: 'Username',
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

