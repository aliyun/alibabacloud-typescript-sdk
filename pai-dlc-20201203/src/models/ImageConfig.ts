// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageConfig extends $dara.Model {
  auth?: string;
  /**
   * @example
   * registry.cn-hangzhou.aliyuncs.com
   */
  dockerRegistry?: string;
  password?: string;
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

