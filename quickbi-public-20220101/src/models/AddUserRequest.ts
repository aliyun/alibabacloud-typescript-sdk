// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserRequest extends $dara.Model {
  /**
   * @remarks
   * Aliyun account ID.
   * >Warning: For versions of Quick BI released after December 31, 2024, AccountId will be a required parameter. Please modify your API before this date.
   * 
   * <props="china">Published only on the China site
   * 
   * @example
   * 191476xxxxx23754
   */
  accountId?: string;
  /**
   * @remarks
   * Aliyun account name.
   * 
   * - Note: If it is a sub-account, the format should be \\"primary account: sub-account\\". For example: master_test@aliyun.com:subaccount
   * - Format check: Maximum length of 50 characters.
   * 
   * @example
   * xxxxxx@163.com
   * 
   * @deprecated
   */
  accountName?: string;
  /**
   * @remarks
   * Whether to assign the organization administrator role. Value range: 
   * 
   * - true: Yes 
   * - false: No
   * 
   * <notice>This parameter is deprecated and not recommended for use. It is invalid when RoleIds is provided.</notice>
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   * 
   * @deprecated
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Whether to assign the organization permission administrator role. Value range: 
   * 
   * - true: Yes 
   * - false: No
   * 
   * <notice>This parameter is deprecated and not recommended for use. It is invalid when RoleIds is provided.</notice>
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * Aliyun account nickname.
   * 
   * - Format check: Maximum length of 50 characters.
   * - Special format validation: Chinese and English characters, numbers, _ \\ / | () ] [
   * 
   * This parameter is required.
   * 
   * @example
   * ddd
   */
  nickName?: string;
  /**
   * @remarks
   * Preset or custom organization role IDs bound to the user, separated by commas, with a maximum of 3. Value range:
   * - Organization Administrator (preset role): 111111111
   * - Permission Administrator (preset role): 111111112
   * - Regular User (preset role): 111111113
   * 
   * @example
   * 111111111,456
   */
  roleIds?: string;
  /**
   * @remarks
   * The user type of the organization member. Value range:
   * - 1: Developer
   * - 2: Visitor
   * - 3: Analyst
   * 
   * This parameter is required.
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
      nickName: 'NickName',
      roleIds: 'RoleIds',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      adminUser: 'boolean',
      authAdminUser: 'boolean',
      nickName: 'string',
      roleIds: 'string',
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

