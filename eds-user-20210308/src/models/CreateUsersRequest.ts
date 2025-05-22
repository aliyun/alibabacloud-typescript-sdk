// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateUsersRequestUsers } from "./CreateUsersRequestUsers";


export class CreateUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The date on which the convenience users are automatically locked.
   * 
   * @example
   * 2023-03-03
   */
  autoLockTime?: string;
  isLocalAdmin?: boolean;
  /**
   * @remarks
   * The initial password. If this parameter is left empty, an email for password reset is sent to the specified email address.
   * 
   * @example
   * Test123****
   */
  password?: string;
  passwordExpireDays?: string;
  /**
   * @remarks
   * The information about the convenience user.
   * 
   * This parameter is required.
   * 
   * @example
   * CreateUsers
   */
  users?: CreateUsersRequestUsers[];
  static names(): { [key: string]: string } {
    return {
      autoLockTime: 'AutoLockTime',
      isLocalAdmin: 'IsLocalAdmin',
      password: 'Password',
      passwordExpireDays: 'PasswordExpireDays',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLockTime: 'string',
      isLocalAdmin: 'boolean',
      password: 'string',
      passwordExpireDays: 'string',
      users: { 'type': 'array', 'itemType': CreateUsersRequestUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

