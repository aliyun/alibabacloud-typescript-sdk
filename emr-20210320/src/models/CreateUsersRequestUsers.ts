// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUsersRequestUsers extends $dara.Model {
  /**
   * @remarks
   * 用户密码。
   * 
   * This parameter is required.
   * 
   * @example
   * *Ab123
   */
  password?: string;
  /**
   * @remarks
   * 用户名。
   * 
   * This parameter is required.
   * 
   * @example
   * xi
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userName: 'UserName',
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

