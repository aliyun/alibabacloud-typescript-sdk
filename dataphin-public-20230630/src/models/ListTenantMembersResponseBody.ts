// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantMembersResponseBodyPageResultUserListUserGroupList extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  description?: string;
  /**
   * @example
   * 121313
   */
  id?: string;
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
   * @example
   * zhangsan
   */
  accountName?: string;
  /**
   * @example
   * dd123123
   */
  dingNumber?: string;
  /**
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @example
   * zhangsan
   */
  displayNameWithoutStatus?: string;
  /**
   * @example
   * true
   */
  enableWhiteIp?: string;
  /**
   * @example
   * 1730000000000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1730000000000
   */
  gmtModified?: number;
  /**
   * @example
   * 132321
   */
  id?: string;
  /**
   * @example
   * 123@aliyun.com
   */
  mail?: string;
  /**
   * @example
   * 13888888888
   */
  mobilePhone?: string;
  /**
   * @example
   * zhangsan
   */
  name?: string;
  /**
   * @example
   * susan
   */
  nickName?: string;
  realName?: string;
  roleList?: string[];
  /**
   * @example
   * 213213232422222
   */
  sourceId?: string;
  /**
   * @example
   * aliyun
   */
  sourceType?: string;
  userGroupList?: ListTenantMembersResponseBodyPageResultUserListUserGroupList[];
  /**
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
   * @example
   * 110
   */
  totalCount?: number;
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
  pageResult?: ListTenantMembersResponseBodyPageResult;
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

