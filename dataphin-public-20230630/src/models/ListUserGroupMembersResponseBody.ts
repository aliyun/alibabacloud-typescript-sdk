// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupMembersResponseBodyPageResultMemberListCreator extends $dara.Model {
  /**
   * @remarks
   * The account name of the user.
   * 
   * @example
   * 12121111
   */
  accountName?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 12121111
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      displayName: 'DisplayName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      displayName: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersResponseBodyPageResultMemberListUserInfo extends $dara.Model {
  /**
   * @remarks
   * The account name of the user.
   * 
   * @example
   * atest
   */
  accountName?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xx测试
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 13232
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      displayName: 'DisplayName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      displayName: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersResponseBodyPageResultMemberList extends $dara.Model {
  /**
   * @remarks
   * The user who added the member.
   */
  creator?: ListUserGroupMembersResponseBodyPageResultMemberListCreator;
  /**
   * @remarks
   * The time when the member was added to the user group.
   * 
   * @example
   * zhangsan
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The user group member ID.
   * 
   * @example
   * 2324211
   */
  id?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * 231111
   */
  userGroupId?: string;
  /**
   * @remarks
   * The user group member.
   */
  userInfo?: ListUserGroupMembersResponseBodyPageResultMemberListUserInfo;
  /**
   * @remarks
   * The role of the member in the user group.
   * 
   * @example
   * SECURITY_ADMIN
   */
  userRole?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      userGroupId: 'UserGroupId',
      userInfo: 'UserInfo',
      userRole: 'UserRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: ListUserGroupMembersResponseBodyPageResultMemberListCreator,
      gmtCreate: 'number',
      id: 'string',
      userGroupId: 'string',
      userInfo: ListUserGroupMembersResponseBodyPageResultMemberListUserInfo,
      userRole: 'string',
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The paged list.
   */
  memberList?: ListUserGroupMembersResponseBodyPageResultMemberList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 217
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': ListUserGroupMembersResponseBodyPageResultMemberList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListUserGroupMembersResponseBodyPageResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListUserGroupMembersResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

