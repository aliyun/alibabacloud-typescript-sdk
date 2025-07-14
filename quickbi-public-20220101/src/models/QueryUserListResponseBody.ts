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

export class QueryUserListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Returns the list of requested users.
   */
  data?: QueryUserListResponseBodyResultData[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page set when the interface is requested.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rows in the table.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages returned.
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
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The pagination result of the user list is returned. The detailed information list of organization members is stored in the response parameter Data.
   */
  result?: QueryUserListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
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

