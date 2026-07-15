// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageConfig extends $dara.Model {
  /**
   * @remarks
   * Image repository authentication information
   */
  auth?: string;
  /**
   * @remarks
   * Image repository address
   * 
   * @example
   * docker****registry.com
   */
  dockerRegistry?: string;
  /**
   * @remarks
   * Image repository password
   * 
   * @example
   * password
   */
  password?: string;
  /**
   * @remarks
   * Image repository username
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

