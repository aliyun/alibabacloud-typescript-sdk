// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageCacheRequestImageRegistryCredential extends $dara.Model {
  /**
   * @remarks
   * The password that is used to access the image repository.
   * 
   * @example
   * password
   */
  password?: string;
  /**
   * @remarks
   * The image repository address without `http://` or `https://` as a prefix.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  server?: string;
  /**
   * @remarks
   * The username that is used to access the image repository.
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

