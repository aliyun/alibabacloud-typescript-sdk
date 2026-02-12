// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication information of the image repository.
   */
  auth?: string;
  /**
   * @remarks
   * The address of the image repository.
   * 
   * @example
   * docker****registry.com
   */
  dockerRegistry?: string;
  /**
   * @remarks
   * The password that is used to log on to the image repository.
   * 
   * @example
   * password
   */
  password?: string;
  /**
   * @remarks
   * The username that is used to log on to the image repository.
   * 
   * @example
   * username
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      dockerRegistry: 'DockerRegistry',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'string',
      dockerRegistry: 'string',
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

