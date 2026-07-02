// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAddFeishuUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the users to be added.
   * 
   * @example
   * {"ad****fd": "test", "82****5a": "t\\"t"}"
   */
  feishuUsers?: string;
  /**
   * @remarks
   * Specifies whether the user is an admin user. Valid values:
   * - true
   * - false
   * 
   * Default value: false.
   * 
   * @example
   * False
   */
  isAdmin?: boolean;
  /**
   * @remarks
   * Specifies whether the user is a permission management administrator. Valid values:
   * 
   * - true
   * - false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isAuthAdmin?: boolean;
  /**
   * @remarks
   * The user groups to which the users belong.
   * 
   * @example
   * "0d5fb19b-5555-41f0-99da-1248fc27ca51,0f868dd6_68dd_4d13_8422_c5dca3bd4b61"
   */
  userGroupIds?: string;
  /**
   * @remarks
   * The user type. Valid values:
   * - 1: developer
   * - 2: visitor
   * - 3: analyst
   * 
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      feishuUsers: 'FeishuUsers',
      isAdmin: 'IsAdmin',
      isAuthAdmin: 'IsAuthAdmin',
      userGroupIds: 'UserGroupIds',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feishuUsers: 'string',
      isAdmin: 'boolean',
      isAuthAdmin: 'boolean',
      userGroupIds: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

