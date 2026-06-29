// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantMembersResponseBodyPageResultUserListUserGroupList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user group is enabled.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * 121313
   */
  id?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * xx测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantMembersResponseBodyPageResultUserList extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * zhangsan
   */
  accountName?: string;
  /**
   * @remarks
   * The DingTalk number.
   * 
   * @example
   * dd123123
   */
  dingNumber?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @remarks
   * The display name of the user without status.
   * 
   * @example
   * zhangsan
   */
  displayNameWithoutStatus?: string;
  /**
   * @remarks
   * Indicates whether the IP address whitelist is enabled.
   * 
   * @example
   * true
   */
  enableWhiteIp?: string;
  /**
   * @remarks
   * The time when the user was created.
   * 
   * @example
   * 1730000000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the user was last modified.
   * 
   * @example
   * 1730000000000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 132321
   */
  id?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * 123@aliyun.com
   */
  mail?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 13888888888
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * zhangsan
   */
  name?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * susan
   */
  nickName?: string;
  /**
   * @remarks
   * The real name of the user.
   * 
   * @example
   * 张三
   */
  realName?: string;
  /**
   * @remarks
   * The list of member roles.
   */
  roleList?: string[];
  /**
   * @remarks
   * The user source ID.
   * 
   * @example
   * 213213232422222
   */
  sourceId?: string;
  /**
   * @remarks
   * The user source.
   * 
   * @example
   * aliyun
   */
  sourceType?: string;
  /**
   * @remarks
   * The list of user groups to which the user belongs.
   */
  userGroupList?: ListTenantMembersResponseBodyPageResultUserListUserGroupList[];
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * @example
   * 0.0.0.0/0
   */
  whiteIp?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dingNumber: 'DingNumber',
      displayName: 'DisplayName',
      displayNameWithoutStatus: 'DisplayNameWithoutStatus',
      enableWhiteIp: 'EnableWhiteIp',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mail: 'Mail',
      mobilePhone: 'MobilePhone',
      name: 'Name',
      nickName: 'NickName',
      realName: 'RealName',
      roleList: 'RoleList',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      userGroupList: 'UserGroupList',
      whiteIp: 'WhiteIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dingNumber: 'string',
      displayName: 'string',
      displayNameWithoutStatus: 'string',
      enableWhiteIp: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      mail: 'string',
      mobilePhone: 'string',
      name: 'string',
      nickName: 'string',
      realName: 'string',
      roleList: { 'type': 'array', 'itemType': 'string' },
      sourceId: 'string',
      sourceType: 'string',
      userGroupList: { 'type': 'array', 'itemType': ListTenantMembersResponseBodyPageResultUserListUserGroupList },
      whiteIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roleList)) {
      $dara.Model.validateArray(this.roleList);
    }
    if(Array.isArray(this.userGroupList)) {
      $dara.Model.validateArray(this.userGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantMembersResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 110
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of users.
   */
  userList?: ListTenantMembersResponseBodyPageResultUserList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': ListTenantMembersResponseBodyPageResultUserList },
    };
  }

  validate() {
    if(Array.isArray(this.userList)) {
      $dara.Model.validateArray(this.userList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. OK indicates a successful request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
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
   * The paginated query result.
   */
  pageResult?: ListTenantMembersResponseBodyPageResult;
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
      pageResult: ListTenantMembersResponseBodyPageResult,
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

