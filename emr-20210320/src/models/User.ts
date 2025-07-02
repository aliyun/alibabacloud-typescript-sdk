// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class User extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * 12345****
   */
  password?: string;
  /**
   * @remarks
   * 用户ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 1238539****
   */
  userId?: string;
  /**
   * @remarks
   * 用户名称。
   * 
   * This parameter is required.
   * 
   * @example
   * 王五
   */
  userName?: string;
  /**
   * @remarks
   * 用户类型。
   * 
   * @example
   * LDAP
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      password: 'Password',
      userId: 'UserId',
      userName: 'UserName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      password: 'string',
      userId: 'string',
      userName: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

