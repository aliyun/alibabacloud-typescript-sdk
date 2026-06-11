// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserInfoByUserIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 135****5848
   */
  accountId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name.
   * 
   * @example
   * 1386587****@163.com
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the organization administrator role is assigned to the user. Valid values:
   * 
   * - true: The role is assigned.
   * 
   * - false: The role is not assigned.
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
   * Indicates whether the permission administrator role is assigned to the user. Valid values:
   * 
   * - true: The role is assigned.
   * 
   * - false: The role is not assigned.
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
   * The list of `CopilotModules` available to the user.
   */
  copilotModules?: string[];
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * 1386587****@163.com
   */
  email?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * 测试用户
   */
  nickName?: string;
  /**
   * @remarks
   * The phone number of the user.
   * 
   * @example
   * 1386587****
   */
  phone?: string;
  /**
   * @remarks
   * The list of organization role IDs that are assigned to the user.
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

export class QueryUserInfoByUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the organization user.
   */
  result?: QueryUserInfoByUserIdResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
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
      result: QueryUserInfoByUserIdResponseBodyResult,
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

