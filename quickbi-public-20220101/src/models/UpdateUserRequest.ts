// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the organization administrator. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Indicate whether the RAM user is a permission administrator. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * User status: 
   * * **false**: Active
   *  * **true**: Inactive
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The nickname of the account.
   * 
   * *   Format check: The value can be up to 50 characters in length.
   * *   Special format verification: Chinese and English digits_ \\ / | () ] [
   * 
   * @example
   * Xiao Zhang
   */
  nickName?: string;
  /**
   * @remarks
   * The IDs of the preset or custom organization roles bound to the user, separated by English commas \\",\\", with a maximum of 3. The value range is as follows: - Organization Administrator (preset role): 111111111 - Permission Administrator (preset role): 111111112 - Regular User (preset role): 111111113
   * 
   * @example
   * 111111111,456
   */
  roleIds?: string;
  /**
   * @remarks
   * The ID of the user to be updated. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  /**
   * @remarks
   * The type of user who is a member of the organization. Valid values:
   * 
   * *   1 : developer
   * *   2 : visitors
   * *   3 : Analyst
   * 
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      isDeleted: 'IsDeleted',
      nickName: 'NickName',
      roleIds: 'RoleIds',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      isDeleted: 'boolean',
      nickName: 'string',
      roleIds: 'string',
      userId: 'string',
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

