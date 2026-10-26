// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserInfoByAccountResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID. For users who are not added through RAM self-service reading, the Alibaba Cloud ID can be obtained only after logon.
   * 
   * @example
   * 135****5848
   */
  accountId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name. For RAM users, the domain name after the at sign (@) is removed. For example, test@test.com returns test.
   * 
   * @example
   * 1386587****@163.com
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the organization administrator role is bound. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * <notice>This parameter is deprecated. Use the RoleIdList parameter instead.</notice>
   * 
   * @example
   * true
   */
  adminUser?: boolean;
  /**
   * @remarks
   * Indicates whether the permission management administrator role is attached. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * <notice>This parameter has expired and is no longer recommended. Use the RoleIdList parameter instead.</notice>
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  /**
   * @remarks
   * The intelligent modules with quota.
   */
  copilotModules?: string[];
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * 1386587****@163.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the user is disabled. Valid values:
   * 
   * - true: Disabled.
   * - false: Active.
   * 
   * @example
   * true
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The nickname.
   * 
   * @example
   * TestUser
   */
  nickName?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 1386587****
   */
  phone?: string;
  /**
   * @remarks
   * The list of organization role IDs bound to the user.
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
      accountId: 'AccountId',
      accountName: 'AccountName',
      adminUser: 'AdminUser',
      authAdminUser: 'AuthAdminUser',
      copilotModules: 'CopilotModules',
      email: 'Email',
      isDeleted: 'IsDeleted',
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
      isDeleted: 'boolean',
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
   * The organization user information returned.
   */
  result?: QueryUserInfoByAccountResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: The request was successful.
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

