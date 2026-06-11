// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.>Warning: The `AccountId` parameter will be required in Quick BI versions released after December 31, 2024. We recommend that you update your API calls to include this parameter before then.
   * 
   * @example
   * 191476xxxxx23754
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account.
   * 
   * - For a sub-account, use the format `master account:sub-account`. Example: `master_test@aliyun.com:subaccount`.
   * 
   * - The maximum length is 50 characters.
   * 
   * @example
   * xxxxxx@163.com
   * 
   * @deprecated
   */
  accountName?: string;
  /**
   * @remarks
   * Specifies whether to assign the organization administrator role. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * >Notice: 
   * 
   * This parameter is deprecated. It is ignored if `RoleIds` is specified.
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
   * Specifies whether to assign the permission administrator role. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * >Notice: 
   * 
   * This parameter is deprecated. It is ignored if `RoleIds` is specified.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * The Copilot modules to enable for the user. To enable multiple modules, specify their codes separated by a comma (,).
   * 
   * - `qreport`: Q Report
   * 
   * - `qExploreNum`: Q Explore
   * 
   * - `smartQAskNum`: Q\\&A with Data
   * 
   * - `smartQDevNum`: Q-assisted Building
   * 
   * @example
   * qreport,qExploreNum
   */
  copilotModules?: string;
  /**
   * @remarks
   * The user\\"s nickname.
   * 
   * - The maximum length is 50 characters.
   * 
   * - The nickname can contain Chinese characters, letters, digits, and the following special characters: `_ \\ / | () []`.
   * 
   * This parameter is required.
   * 
   * @example
   * 张三
   */
  nickName?: string;
  /**
   * @remarks
   * The IDs of the predefined or custom organization roles to assign. You can specify up to three role IDs, separated by commas (,). Valid values for predefined roles:
   * 
   * - `111111111`: organization administrator
   * 
   * - `111111112`: permission administrator
   * 
   * - `111111113`: regular user
   * 
   * @example
   * 111111111,456
   */
  roleIds?: string;
  /**
   * @remarks
   * The type of the organization member. Valid values:
   * 
   * - 1: developer
   * 
   * - 2: viewer
   * 
   * - 3: analyst
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
      copilotModules: 'CopilotModules',
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
      copilotModules: 'string',
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

