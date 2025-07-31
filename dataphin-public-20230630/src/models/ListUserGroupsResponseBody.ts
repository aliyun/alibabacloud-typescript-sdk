// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsResponseBodyPageResultUserGroupListAdminList extends $dara.Model {
  /**
   * @example
   * zhangsan
   */
  accountName?: string;
  displayName?: string;
  /**
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
   * @example
   * true
   */
  active?: boolean;
  adminList?: ListUserGroupsResponseBodyPageResultUserGroupListAdminList[];
  description?: string;
  /**
   * @example
   * 31313232
   */
  id?: string;
  /**
   * @example
   * SECURITY_ADMIN
   */
  myRole?: string;
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
   * @example
   * 49
   */
  totalCount?: number;
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
  pageResult?: ListUserGroupsResponseBodyPageResult;
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

