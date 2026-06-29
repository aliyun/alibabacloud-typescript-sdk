// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsResponseBodyPageResultUserGroupListAdminList extends $dara.Model {
  /**
   * @remarks
   * The account name of the user.
   * 
   * @example
   * zhangsan
   */
  accountName?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 32313131
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

export class ListUserGroupsResponseBodyPageResultUserGroupList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the user group is enabled.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The administrators of the user group.
   */
  adminList?: ListUserGroupsResponseBodyPageResultUserGroupListAdminList[];
  /**
   * @remarks
   * The description of the user group.
   * 
   * @example
   * xx 测试
   */
  description?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * 31313232
   */
  id?: string;
  /**
   * @remarks
   * The role of the current user in the user group.
   * 
   * @example
   * SECURITY_ADMIN
   */
  myRole?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * xx测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      adminList: 'AdminList',
      description: 'Description',
      id: 'Id',
      myRole: 'MyRole',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      adminList: { 'type': 'array', 'itemType': ListUserGroupsResponseBodyPageResultUserGroupListAdminList },
      description: 'string',
      id: 'string',
      myRole: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adminList)) {
      $dara.Model.validateArray(this.adminList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  /**
   * @remarks
   * The paged list.
   */
  userGroupList?: ListUserGroupsResponseBodyPageResultUserGroupList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      userGroupList: 'UserGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      userGroupList: { 'type': 'array', 'itemType': ListUserGroupsResponseBodyPageResultUserGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupList)) {
      $dara.Model.validateArray(this.userGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBody extends $dara.Model {
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
  pageResult?: ListUserGroupsResponseBodyPageResult;
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
      pageResult: ListUserGroupsResponseBodyPageResult,
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

