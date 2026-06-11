// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddUserResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account.
   * 
   * @example
   * xxxxxx@163.com
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the organization administrator role is assigned. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * >Notice: 
   * 
   * This parameter is deprecated. It does not take effect when `RoleIdList` is specified.
   * 
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Indicates whether the permission administrator role is assigned. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * >Notice: 
   * 
   * This parameter is deprecated. It does not take effect when `RoleIdList` is specified.
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * The Copilot modules for which the user has a quota.
   */
  copilotModules?: string[];
  /**
   * @remarks
   * The nickname of the Alibaba Cloud account.
   * 
   * @example
   * 张三
   */
  nickName?: string;
  /**
   * @remarks
   * A list of organization role IDs assigned to the user.
   */
  roleIdList?: number[];
  /**
   * @remarks
   * The user ID in Quick BI.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  /**
   * @remarks
   * The user type. Valid values:
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
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      copilotModules: 'CopilotModules',
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
      copilotModules: { 'type': 'array', 'itemType': 'string' },
      nickName: 'string',
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

export class AddUserResponseBody extends $dara.Model {
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
   * The details of the newly added Alibaba Cloud user.
   */
  result?: AddUserResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true
   * 
   * - false
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
      result: AddUserResponseBodyResult,
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

