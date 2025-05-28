// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1355********
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account that corresponds to the member.
   * 
   * @example
   * Test user
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the organization administrator. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
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
   * - Active - false 
   * - Inactive - true
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * Join Date
   * 
   * @example
   * 1718691704000
   */
  joinedDate?: number;
  /**
   * @remarks
   * Last login time.
   * 
   * @example
   * 1718761320681
   */
  lastLoginTime?: number;
  /**
   * @remarks
   * The nickname of the organization member.
   * 
   * @example
   * Test user
   */
  nickName?: string;
  /**
   * @remarks
   * List of organization role IDs bound to the user.
   */
  roleIdList?: number[];
  /**
   * @remarks
   * The UserID in the Quick BI.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  /**
   * @remarks
   * The role type of the organization member. Valid values:
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
      accountId: 'AccountId',
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      isDeleted: 'IsDeleted',
      joinedDate: 'JoinedDate',
      lastLoginTime: 'LastLoginTime',
      nickName: 'NickName',
      roleIdList: 'RoleIdList',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      isDeleted: 'boolean',
      joinedDate: 'number',
      lastLoginTime: 'number',
      nickName: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.roleIdList)) {
      $dara.Model.validateArray(this.roleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

