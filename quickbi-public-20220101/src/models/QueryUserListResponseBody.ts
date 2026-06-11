// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID. For users not added through RAM, this ID is available only after they log in.
   * 
   * @example
   * 1355********
   */
  accountId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the user is an organization administrator. Valid values:
   * 
   * - `true`: Yes
   * 
   * - `false`: No
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
   * Indicates whether the user is a permission administrator. Valid values:
   * 
   * - `true`: Yes
   * 
   * - `false`: No
   * 
   * >Notice: 
   * 
   * This parameter is deprecated. Use the `RoleIdList` parameter instead.
   * 
   * @example
   * true
   */
  authAdminUser?: boolean;
  copilotModules?: string[];
  /**
   * @remarks
   * Indicates whether the user is inactive.
   * 
   * - `false`: Active
   * 
   * - `true`: Inactive
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The Unix timestamp (in milliseconds) that indicates when the user joined the organization.
   * 
   * @example
   * 1718691704000
   */
  joinedDate?: number;
  /**
   * @remarks
   * The Unix timestamp (in milliseconds) of the user\\"s last login.
   * 
   * @example
   * 1718761320681
   */
  lastLoginTime?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * test
   */
  nickName?: string;
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
      copilotModules: { 'type': 'array', 'itemType': 'string' },
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

export class QueryUserListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The list of users.
   */
  data?: QueryUserListResponseBodyResultData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of matching users.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryUserListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserListResponseBody extends $dara.Model {
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
   * The paginated list of users. The `Data` parameter contains the details of each organization member.
   */
  result?: QueryUserListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
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
      result: QueryUserListResponseBodyResult,
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

