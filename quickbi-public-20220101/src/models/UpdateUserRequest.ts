// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to assign the organization administrator role to the user. Valid values:
   * 
   * - `true`
   * 
   * - `false`
   * 
   * >Notice: 
   * 
   * This parameter is deprecated and is ignored if RoleIds is also specified.
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
   * Whether to assign the permission administrator role to the user. Valid values:
   * 
   * - `true`
   * 
   * - `false`
   * 
   * >Notice: 
   * 
   * This parameter is deprecated and is ignored if RoleIds is also specified.
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @example
   * [
   *     {
   *         "moduleType": "smartQAskNum",
   *         "status": 1
   *     },
   *     {
   *         "moduleType": "smartQDevNum",
   *         "status": 0
   *     }
   * ]
   */
  copilotModules?: string;
  /**
   * @remarks
   * The user status:
   * 
   * - **`false`**: active
   * 
   * - **`true`**: inactive
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * - The nickname can be up to 50 characters in length.
   * 
   * - The nickname can contain Chinese characters, letters, digits, and the following special characters: `_ \\ / | () ] [`
   * 
   * @example
   * test
   */
  nickName?: string;
  /**
   * @remarks
   * The IDs of the built-in or custom organization roles to assign to the user. Specify up to three comma-separated role IDs.
   * 
   * - organization administrator (built-in role): 111111111
   * 
   * - permission administrator (built-in role): 111111112
   * 
   * - standard user (built-in role): 111111113
   * 
   * @example
   * 111111111,456
   */
  roleIds?: string;
  /**
   * @remarks
   * The ID of the Quick BI user to update. This is not an Alibaba Cloud UID.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  /**
   * @remarks
   * The user type of the organization member. Valid values:
   * 
   * - `1`: developer
   * 
   * - `2`: viewer
   * 
   * - `3`: analyst
   * 
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      copilotModules: 'CopilotModules',
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
      copilotModules: 'string',
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

