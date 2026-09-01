// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to assign the organization administrator role. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * <notice>This parameter is deprecated. When RoleIds is specified, this parameter does not take effect.</notice>
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
   * Specifies whether to assign the organization permission management administrator role. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * <notice>This parameter has expired and is not recommended. When RoleIds is specified, this parameter does not take effect.</notice>
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * The intelligent module quota modification information.
   * 
   * Pass the parameter as a JSON array. Each array element contains the following fields:
   * 
   * moduleType -- The intelligent module.
   * - smartQAskNum -- Smart Q questions.
   * - smartQDevNum -- Smart Q building.
   * - qreport -- Smart Q reports.
   * - qExploreNum -- Smart Q exploration edition.
   * 
   * status -- Specifies whether to enable the module.
   * 
   * - 0 -- Revoke authorization.
   * - 1 -- Grant authorization.
   * 
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
   * The user status. Valid values:
   * * **false**: Activated.
   * * **true**: Deactivated.
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The nickname.
   * 
   * - Format check: The maximum length is 50 characters.
   * - Special format check: Chinese characters, English characters, digits, _ \\ / | () ] [
   * 
   * @example
   * test
   */
  nickName?: string;
  /**
   * @remarks
   * The IDs of preset or custom organization roles to attach to the user, separated by commas (,). A maximum of three role IDs are supported. Valid values:
   * - Organization administrator (preset role): 111111111
   * - Permission management administrator (preset role): 111111112
   * - Common user (preset role): 111111113
   * 
   * @example
   * 111111111,456
   */
  roleIds?: string;
  /**
   * @remarks
   * The ID of the user to update. This user ID is the Quick BI UserID, not the Alibaba Cloud UID.
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
   * - 1: Developer.
   * - 2: Visitor.
   * - 3: Analyst.
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

