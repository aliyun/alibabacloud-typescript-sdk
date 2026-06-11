// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserInfoByAccountResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud ID. For users not added through RAM self-service, this ID becomes available only after the user\\"s first login.
   * 
   * @example
   * 135****5848
   */
  accountId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name. For a RAM user, the domain suffix (the part after the @ symbol) is omitted. For example, for the user `test@test.com`, the value `test` is returned.
   * 
   * @example
   * 1386587****@163.com
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the user is assigned the organization administrator role. Valid values:
   * 
   * - true: Yes
   * 
   * - false: No
   * 
   * >Notice: 
   * 
   * This parameter is deprecated. Use the `RoleIdList` parameter instead.
   * 
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Indicates whether the user is assigned the permission administrator role. Valid values:
   * 
   * - true: Yes
   * 
   * - false: No
   * 
   * >Notice: 
   * 
   * This parameter is deprecated. Use the `RoleIdList` parameter instead.
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * The intelligent modules for which the user has a quota.
   */
  copilotModules?: string[];
  /**
   * @remarks
   * The user\\"s email address.
   * 
   * @example
   * 1386587****@163.com
   */
  email?: string;
  /**
   * @remarks
   * The user\\"s nickname.
   * 
   * @example
   * 测试用户
   */
  nickName?: string;
  /**
   * @remarks
   * The user\\"s phone number.
   * 
   * @example
   * 1386587****
   */
  phone?: string;
  /**
   * @remarks
   * The IDs of the organization roles assigned to the user.
   */
  roleIdList?: number[];
  /**
   * @remarks
   * The user ID in Quick BI.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  /**
   * @remarks
   * The user type of the organization member. Valid values:
   * 
   * - 1: developer
   * 
   * - 2: viewer
   * 
   * - 3: analyst
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
      email: 'Email',
      nickName: 'NickName',
      phone: 'Phone',
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
      copilotModules: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      nickName: 'string',
      phone: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.copilotModules)) {
      $dara.Model.validateArray(this.copilotModules);
    }
    if(Array.isArray(this.roleIdList)) {
      $dara.Model.validateArray(this.roleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserInfoByAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The user information of the organization member.
   */
  result?: QueryUserInfoByAccountResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryUserInfoByAccountResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

