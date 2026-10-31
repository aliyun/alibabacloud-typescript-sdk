// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyPageResultUserListDeptList extends $dara.Model {
  /**
   * @remarks
   * The sub-department list.
   */
  children?: { [key: string]: any }[];
  /**
   * @remarks
   * The full path of the department.
   * 
   * @example
   * Sample Company/R&D Department
   */
  fullName?: string;
  /**
   * @remarks
   * The department ID.
   * 
   * @example
   * dept-001
   */
  id?: string;
  /**
   * @remarks
   * The department name.
   * 
   * @example
   * R&D Department
   */
  name?: string;
  /**
   * @remarks
   * The parent department ID.
   * 
   * @example
   * dept-root
   */
  parentId?: string;
  /**
   * @remarks
   * The parent department list.
   */
  parents?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      fullName: 'FullName',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
      parents: 'Parents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      fullName: 'string',
      id: 'string',
      name: 'string',
      parentId: 'string',
      parents: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(Array.isArray(this.parents)) {
      $dara.Model.validateArray(this.parents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyPageResultUserList extends $dara.Model {
  /**
   * @remarks
   * The logon name of the original account.
   * 
   * @example
   * example-account
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the user is deleted.
   * 
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @remarks
   * The department list.
   */
  deptList?: ListUsersResponseBodyPageResultUserListDeptList[];
  /**
   * @remarks
   * The DingTalk number.
   * 
   * @example
   * example-ding-number
   */
  dingNumber?: string;
  /**
   * @remarks
   * The display name of the original account.
   * 
   * @example
   * Sample User
   */
  displayName?: string;
  /**
   * @remarks
   * The display name of the original account without the status suffix.
   * 
   * @example
   * Sample User
   */
  displayNameWithoutStatus?: string;
  /**
   * @remarks
   * Indicates whether the IP whitelist is enabled.
   * 
   * @example
   * false
   */
  enableWhiteIp?: boolean;
  /**
   * @remarks
   * The Lark bot.
   * 
   * @example
   * example-feishu-robot
   */
  feiShuRobot?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-01-02T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 10001
   */
  id?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * user@example.com
   */
  mail?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 13800000000
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The user name.
   * 
   * @example
   * example-user
   */
  name?: string;
  /**
   * @remarks
   * The nickname of the original account.
   * 
   * @example
   * Sample Nickname
   */
  nickName?: string;
  /**
   * @remarks
   * The user ID of the tenant owner.
   * 
   * @example
   * 30001011
   */
  parentId?: string;
  /**
   * @remarks
   * The real name of the original account.
   * 
   * @example
   * John Doe
   */
  realName?: string;
  /**
   * @remarks
   * The original account ID.
   * 
   * @example
   * 10001
   */
  sourceId?: string;
  /**
   * @remarks
   * The original account type.
   * 
   * @example
   * ALIYUN
   */
  sourceType?: string;
  /**
   * @remarks
   * The WeCom bot.
   * 
   * @example
   * example-wechat-robot
   */
  weChatRobot?: string;
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * @example
   * 192.0.2.1
   */
  whiteIp?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      deleted: 'Deleted',
      deptList: 'DeptList',
      dingNumber: 'DingNumber',
      displayName: 'DisplayName',
      displayNameWithoutStatus: 'DisplayNameWithoutStatus',
      enableWhiteIp: 'EnableWhiteIp',
      feiShuRobot: 'FeiShuRobot',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      id: 'Id',
      mail: 'Mail',
      mobilePhone: 'MobilePhone',
      name: 'Name',
      nickName: 'NickName',
      parentId: 'ParentId',
      realName: 'RealName',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      weChatRobot: 'WeChatRobot',
      whiteIp: 'WhiteIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      deleted: 'boolean',
      deptList: { 'type': 'array', 'itemType': ListUsersResponseBodyPageResultUserListDeptList },
      dingNumber: 'string',
      displayName: 'string',
      displayNameWithoutStatus: 'string',
      enableWhiteIp: 'boolean',
      feiShuRobot: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      id: 'string',
      mail: 'string',
      mobilePhone: 'string',
      name: 'string',
      nickName: 'string',
      parentId: 'string',
      realName: 'string',
      sourceId: 'string',
      sourceType: 'string',
      weChatRobot: 'string',
      whiteIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deptList)) {
      $dara.Model.validateArray(this.deptList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The user list.
   */
  userList?: ListUsersResponseBodyPageResultUserList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': ListUsersResponseBodyPageResultUserList },
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

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request error code. OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code of the backend response.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListUsersResponseBodyPageResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72F479F0-EE9F-5511-85C1-3AF3B7668E25
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      pageResult: ListUsersResponseBodyPageResult,
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

