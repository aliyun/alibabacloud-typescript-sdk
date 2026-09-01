// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID. For users who are not added through RAM self-service, the Alibaba Cloud ID can only be obtained after they log on.
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
   * Indicates whether the user is bound to the organization administrator role. Valid values:
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
   * Indicates whether the user is attached to the permission management administrator role. Valid values:
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
   * The intelligent module quota of the user.
   * 
   * - qreport: Q report
   * - qExploreNum: Q exploration edition
   * - smartQAskNum: Q data inquiry
   * - smartQDevNum: Q builder
   */
  copilotModules?: string[];
  /**
   * @remarks
   * The user status. Valid values: 
   * 
   * - false: active
   * - true: inactive
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The date when the member joined the organization.
   * 
   * @example
   * 1718691704000
   */
  joinedDate?: number;
  /**
   * @remarks
   * The last logon time.
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
   * test
   */
  nickName?: string;
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
   * - 1: developer
   * - 2: visitor
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
   * The list of users returned by the request.
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
   * The number of rows per page specified in the request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rows.
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
   * The paginated result of the user list. The detailed information of organization members is stored in the Data response parameter.
   */
  result?: QueryUserListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
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

