// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistryAuthConfig extends $dara.Model {
  /**
   * @remarks
   * 镜像仓库的登录密码
   * 
   * @example
   * abc***
   */
  password?: string;
  /**
   * @remarks
   * 镜像仓库的登录用户名
   * 
   * @example
   * admin
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

