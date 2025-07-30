// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersResponseBodyUsersExtras extends $dara.Model {
  assignedResourceCount?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      assignedResourceCount: 'AssignedResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedResourceCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.assignedResourceCount) {
      $dara.Model.validateMap(this.assignedResourceCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsersGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * ug-12341234****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * User Group 1
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsersOrgs extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * Organization 1
   */
  orgName?: string;
  orgNamePath?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
      orgNamePath: 'OrgNamePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
      orgNamePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsersProperties extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The work address of the convenience user.
   * 
   * @example
   * Hangzhou \\*\\*\\*
   */
  address?: string;
  /**
   * @remarks
   * The profile picture of the convenience user.
   * 
   * @example
   * https://cdn.*****
   */
  avatar?: string;
  /**
   * @remarks
   * The email address of the convenience user.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * The username of the convenience user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  externalName?: string;
  extras?: DescribeUsersResponseBodyUsersExtras;
  /**
   * @remarks
   * The user groups to which the convenience user belongs.
   */
  groups?: DescribeUsersResponseBodyUsersGroups[];
  /**
   * @remarks
   * The ID of the convenience user.
   * 
   * @example
   * 4205**
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the convenience user is an administrator. If the convenience user is of the administrator-activated type, you must specify a user administrator. Notifications such as password reset on a client are sent to the email address or mobile number of the user administrator. For more information, see [Create a convenience user](https://help.aliyun.com/document_detail/214472.html).
   * 
   * @example
   * true
   */
  isTenantManager?: boolean;
  /**
   * @remarks
   * The employee number of the convenience user.
   * 
   * @example
   * A10000**
   */
  jobNumber?: string;
  /**
   * @remarks
   * The nickname of the convenience user.
   * 
   * @example
   * Lee
   */
  nickName?: string;
  /**
   * @remarks
   * The ID of the organization to which the convenience user belongs.
   * 
   * >  This parameter will be deprecated in the future.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * The organizations to which the convenience user belongs.
   */
  orgs?: DescribeUsersResponseBodyUsersOrgs[];
  /**
   * @remarks
   * The type of the convenience account.
   * 
   * *   Administrator-activated type: The administrator specifies the username and password of the convenience account. User notifications such as password reset notifications are sent to the email address or mobile number of the administrator.
   * *   User-activated type: The administrator specifies the username and the email address or mobile number of a convenience user. Notifications such as activation notifications that contain the default password are sent to the email address or mobile number of the convenience user.
   * 
   * Valid values:
   * 
   * *   CreateFromManager
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     administrator-activated
   * 
   *     <!-- -->
   * 
   * *   Normal
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     user-activated
   * 
   *     <!-- -->
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * The mobile number of the convenience user. If you leave this parameter empty, the value of this parameter is not returned.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  properties?: DescribeUsersResponseBodyUsersProperties[];
  realNickName?: string;
  /**
   * @remarks
   * The remarks on the convenience user.
   * 
   * @example
   * TestUser
   */
  remark?: string;
  /**
   * @remarks
   * The status of the convenience user.
   * 
   * Valid values:
   * 
   * *   0: The convenience user is normal.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   9: The convenience user is locked.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The globally unique ID of the convenience user.
   * 
   * @example
   * 41fd1254d8f7****
   */
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      avatar: 'Avatar',
      email: 'Email',
      enableAdminAccess: 'EnableAdminAccess',
      endUserId: 'EndUserId',
      externalName: 'ExternalName',
      extras: 'Extras',
      groups: 'Groups',
      id: 'Id',
      isTenantManager: 'IsTenantManager',
      jobNumber: 'JobNumber',
      nickName: 'NickName',
      orgId: 'OrgId',
      orgs: 'Orgs',
      ownerType: 'OwnerType',
      phone: 'Phone',
      properties: 'Properties',
      realNickName: 'RealNickName',
      remark: 'Remark',
      status: 'Status',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      avatar: 'string',
      email: 'string',
      enableAdminAccess: 'boolean',
      endUserId: 'string',
      externalName: 'string',
      extras: DescribeUsersResponseBodyUsersExtras,
      groups: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsersGroups },
      id: 'number',
      isTenantManager: 'boolean',
      jobNumber: 'string',
      nickName: 'string',
      orgId: 'string',
      orgs: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsersOrgs },
      ownerType: 'string',
      phone: 'string',
      properties: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsersProperties },
      realNickName: 'string',
      remark: 'string',
      status: 'number',
      wyId: 'string',
    };
  }

  validate() {
    if(this.extras && typeof (this.extras as any).validate === 'function') {
      (this.extras as any).validate();
    }
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.orgs)) {
      $dara.Model.validateArray(this.orgs);
    }
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that determines the start point of the next query. If this parameter is left empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The convenience accounts.
   */
  users?: DescribeUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

