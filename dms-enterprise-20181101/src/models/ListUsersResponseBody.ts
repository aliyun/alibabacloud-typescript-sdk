// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyUserListUserRoleIdList extends $dara.Model {
  roleIds?: number[];
  static names(): { [key: string]: string } {
    return {
      roleIds: 'RoleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.roleIds)) {
      $dara.Model.validateArray(this.roleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUserListUserRoleNameList extends $dara.Model {
  roleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      roleNames: 'RoleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.roleNames)) {
      $dara.Model.validateArray(this.roleNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUserListUser extends $dara.Model {
  curExecuteCount?: number;
  curResultCount?: number;
  dingRobot?: string;
  email?: string;
  lastLoginTime?: string;
  maxExecuteCount?: number;
  maxResultCount?: number;
  mobile?: string;
  nickName?: string;
  notificationMode?: string;
  parentUid?: string;
  roleIdList?: ListUsersResponseBodyUserListUserRoleIdList;
  roleNameList?: ListUsersResponseBodyUserListUserRoleNameList;
  signatureMethod?: string;
  state?: string;
  uid?: string;
  userId?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      curExecuteCount: 'CurExecuteCount',
      curResultCount: 'CurResultCount',
      dingRobot: 'DingRobot',
      email: 'Email',
      lastLoginTime: 'LastLoginTime',
      maxExecuteCount: 'MaxExecuteCount',
      maxResultCount: 'MaxResultCount',
      mobile: 'Mobile',
      nickName: 'NickName',
      notificationMode: 'NotificationMode',
      parentUid: 'ParentUid',
      roleIdList: 'RoleIdList',
      roleNameList: 'RoleNameList',
      signatureMethod: 'SignatureMethod',
      state: 'State',
      uid: 'Uid',
      userId: 'UserId',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curExecuteCount: 'number',
      curResultCount: 'number',
      dingRobot: 'string',
      email: 'string',
      lastLoginTime: 'string',
      maxExecuteCount: 'number',
      maxResultCount: 'number',
      mobile: 'string',
      nickName: 'string',
      notificationMode: 'string',
      parentUid: 'string',
      roleIdList: ListUsersResponseBodyUserListUserRoleIdList,
      roleNameList: ListUsersResponseBodyUserListUserRoleNameList,
      signatureMethod: 'string',
      state: 'string',
      uid: 'string',
      userId: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.roleIdList && typeof (this.roleIdList as any).validate === 'function') {
      (this.roleIdList as any).validate();
    }
    if(this.roleNameList && typeof (this.roleNameList as any).validate === 'function') {
      (this.roleNameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUserList extends $dara.Model {
  user?: ListUsersResponseBodyUserListUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersResponseBodyUserListUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
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
   * The error code returned if the request failed.
   * 
   * @example
   * InvalidTid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69161997-6030-53BA-A333-DBEC83B732FF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  userList?: ListUsersResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      userList: ListUsersResponseBodyUserList,
    };
  }

  validate() {
    if(this.userList && typeof (this.userList as any).validate === 'function') {
      (this.userList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

