// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageCacheRequestImageRegistryCredential extends $dara.Model {
  /**
   * @remarks
   * The password that is used to log on to image repository N.
   * 
   * @example
   * password
   */
  password?: string;
  /**
   * @remarks
   * The address of the image repository without the `http://` or `https://` prefix.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  server?: string;
  /**
   * @remarks
   * The username that is used to log on to image repository N.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
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

