// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUsersRequestUser extends $dara.Model {
  /**
   * @remarks
   * The public key of the Nth user to add.
   * 
   * Valid values of N: 1 to 20.
   * 
   * This parameter is mutually exclusive with the Password parameter. This parameter takes effect when the cluster authentication method is set to key (not recommended).
   * 
   * @example
   * Abc****
   */
  authKey?: string;
  /**
   * @remarks
   * The user group of the Nth user to add. Valid values:
   * 
   * - users: ordinary permission group. This group is suitable for regular users who only need to commit and debug jobs.
   * - wheel: sudo permission group. This group is suitable for administrators who need to perform cluster management. In addition to committing and debugging jobs, users in this group can execute sudo commands to install software, restart nodes, and perform other operations.
   * 
   * Valid values of N: 1 to 20.
   * 
   * @example
   * users
   */
  group?: string;
  /**
   * @remarks
   * The password of the Nth user to add. The password must be 8 to 30 characters in length and contain at least three of the following four character types:
   * - Uppercase letters
   * - Lowercase letters
   * - Digits
   * - Special characters: ()~!@#$%^&*-_+=|{}[]:;\\"/<>,.?/
   * 
   * Valid values of N: 1 to 20.
   * 
   * This parameter is mutually exclusive with the AuthKey parameter. This parameter takes effect when the cluster authentication method is set to password (recommended).
   * 
   * @example
   * 1@a2****
   */
  password?: string;
  /**
   * @remarks
   * The username of the Nth user to add. The username must be 1 to 30 characters in length, start with a letter, and can contain digits and special characters (.).
   * 
   * Valid values of N: 1 to 20.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      group: 'Group',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      group: 'string',
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

export class CreateUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of users.
   */
  user?: CreateUsersRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': CreateUsersRequestUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

