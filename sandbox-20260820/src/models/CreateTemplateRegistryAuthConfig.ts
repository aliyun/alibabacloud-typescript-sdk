// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRegistryAuthConfig extends $dara.Model {
  /**
   * @remarks
   * The logon password or access token for the image repository. The value is encrypted on the server side and is not returned in plaintext when queried.
   * 
   * @example
   * Passw0rd****
   */
  password?: string;
  /**
   * @remarks
   * The username for logging on to the image repository.
   * 
   * @example
   * sandbox-puller
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

