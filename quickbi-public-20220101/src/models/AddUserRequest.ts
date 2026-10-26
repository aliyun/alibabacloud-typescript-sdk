// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * >Warning: For Quick BI versions released after December 31, 2024, AccountId is a required parameter. Update your API calls before this date.
   * 
   * @example
   * 191476xxxxx23754
   */
  accountId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name.
   * 
   * - Note: For a RAM user, the format is "primary account:RAM user". Example: master_test@aliyun.com:subaccount
   * - Format check: The maximum length is 50 characters.
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
   * 
   * @deprecated
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Specifies whether to assign the organization permission management administrator role. Valid values: 
   * 
   * - true: Yes. 
   * - false: No.
   * 
   * <notice>This parameter has expired and is no longer recommended. When RoleIds is specified, this parameter does not take effect.</notice>
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * The intelligent module quotas of the user. Separate multiple modules with commas (,).
   * 
   * - qreport -- Small Q Report
   * - qExploreNum -- Small Q Explorer
   * - smartQAskNum -- Small Q Ask
   * - smartQDevNum -- Small Q Builder
   * 
   * @example
   * qreport,qExploreNum
   */
  copilotModules?: string;
  /**
   * @remarks
   * The nickname of the Alibaba Cloud account.
   * 
   * - Format check: The maximum length is 50 characters.
   * - Special character validation: Chinese characters, English characters, digits, _ \\ / | () ] [
   * 
   * This parameter is required.
   * 
   * @example
   * John
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
   * The user type of the organization member. Valid values:
   * - 1: Developer.
   * - 2: Visitor.
   * - 3: Analyst.
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

