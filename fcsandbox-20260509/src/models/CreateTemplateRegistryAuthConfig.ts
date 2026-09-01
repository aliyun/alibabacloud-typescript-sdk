// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRegistryAuthConfig extends $dara.Model {
  /**
   * @remarks
   * The password of the image repository.
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * The username of the image repository.
   * 
   * @example
   * my-user
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

