// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageResponseBodyImageContainerImageSpecRegistryCredential extends $dara.Model {
  /**
   * @example
   * userpassword
   */
  password?: string;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  server?: string;
  /**
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

