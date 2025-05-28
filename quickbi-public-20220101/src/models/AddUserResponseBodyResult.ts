// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddUserResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Aliyun account.
   * 
   * @example
   * xxxxxx@163.com
   */
  accountName?: string;
  /**
   * @remarks
   * Whether the organization administrator role is assigned. Value range: 
   * 
   * - true: Yes
   * - false: No
   * 
   * <notice>This parameter is deprecated and not recommended for use. It is invalid when RoleIdList is provided.</notice>
   * 
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Whether the permission administrator role is assigned. Value range: 
   * 
   * - true: Yes
   * - false: No
   * 
   * <notice>This parameter is deprecated and not recommended for use. It is invalid when RoleIdList is provided.</notice>
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * Aliyun account nickname.
   * 
   * @example
   * ddd
   */
  nickName?: string;
  /**
   * @remarks
   * List of organization role IDs bound to the user.
   */
  roleIdList?: number[];
  /**
   * @remarks
   * UserID in Quick BI.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  /**
   * @remarks
   * User type of the organization member. Value range: 
   * - 1: Developer 
   * - 2: Visitor 
   * - 3: Analyst
   * 
   * @example
   * 1
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      nickName: 'NickName',
      roleIdList: 'RoleIdList',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
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

