// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OSUser extends $dara.Model {
  /**
   * @remarks
   * 用户组。
   * 
   * @example
   * hadoop
   */
  group?: string;
  /**
   * @remarks
   * 用户密码。
   * 
   * @example
   * 12345****
   */
  password?: string;
  /**
   * @remarks
   * 用户名称。
   * 
   * @example
   * 王五
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      password: 'Password',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      password: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

