// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerGroupRequestImageRegistryCredential extends $dara.Model {
  /**
   * @remarks
   * The password that you use to access the image repository.
   * 
   * @example
   * yourpassword
   */
  password?: string;
  /**
   * @remarks
   * The address of the image repository.
   * 
   * @example
   * registry-vpc.cn-shanghai.aliyuncs.com
   */
  server?: string;
  /**
   * @remarks
   * The username that you use to access the image repository.
   * 
   * @example
   * yourusername
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

