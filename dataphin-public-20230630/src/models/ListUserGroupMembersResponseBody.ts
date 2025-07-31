// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupMembersResponseBodyPageResultMemberListCreator extends $dara.Model {
  /**
   * @example
   * 12121111
   */
  accountName?: string;
  /**
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
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
   * @example
   * atest
   */
  accountName?: string;
  displayName?: string;
  /**
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
  creator?: ListUserGroupMembersResponseBodyPageResultMemberListCreator;
  /**
   * @example
   * zhangsan
   */
  gmtCreate?: number;
  /**
   * @example
   * 2324211
   */
  id?: string;
  /**
   * @example
   * 231111
   */
  userGroupId?: string;
  userInfo?: ListUserGroupMembersResponseBodyPageResultMemberListUserInfo;
  /**
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
  memberList?: ListUserGroupMembersResponseBodyPageResultMemberList[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListUserGroupMembersResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
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

