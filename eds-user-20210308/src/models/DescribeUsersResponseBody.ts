// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersResponseBodyUsersExtrasResourcePolicyList extends $dara.Model {
  policyId?: string;
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsersExtras extends $dara.Model {
  /**
   * @remarks
   * The number of assigned cloud resources.
   */
  assignedResourceCount?: { [key: string]: any };
  resourcePolicyList?: DescribeUsersResponseBodyUsersExtrasResourcePolicyList[];
  static names(): { [key: string]: string } {
    return {
      assignedResourceCount: 'AssignedResourceCount',
      resourcePolicyList: 'ResourcePolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedResourceCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourcePolicyList: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsersExtrasResourcePolicyList },
    };
  }

  validate() {
    if(this.assignedResourceCount) {
      $dara.Model.validateMap(this.assignedResourceCount);
    }
    if(Array.isArray(this.resourcePolicyList)) {
      $dara.Model.validateArray(this.resourcePolicyList);
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
   * 用户组1
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
   * The ID of the organization.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * 部门1
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
  /**
   * @remarks
   * The property key.
   * 
   * @example
   * Role
   */
  key?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * Student
   */
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
   * The work address of the user.
   * 
   * @example
   * 杭州市***
   */
  address?: string;
  /**
   * @remarks
   * The URL of the user\\"s avatar.
   * 
   * @example
   * https://cdn.*****
   */
  avatar?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether administrator access is enabled.
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * The end user ID.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The name of the user imported from an external system.
   * 
   * > This parameter is for internal use only.
   * 
   * @example
   * 马**
   */
  externalName?: string;
  /**
   * @remarks
   * The extended properties of the user.
   */
  extras?: DescribeUsersResponseBodyUsersExtras;
  /**
   * @remarks
   * The user groups to which the convenience account belongs.
   */
  groups?: DescribeUsersResponseBodyUsersGroups[];
  /**
   * @remarks
   * The ID of the convenience account.
   * 
   * @example
   * 4205**
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the user is a tenant manager. When you create a convenience account of the `CreateFromManager` type, you must specify a tenant manager. Notifications, such as password resets initiated by an end user from a client, are sent to the tenant manager\\"s email or mobile phone. For more information, see [Create a convenience account](https://help.aliyun.com/document_detail/214472.html).
   * 
   * @example
   * true
   */
  isTenantManager?: boolean;
  /**
   * @remarks
   * The employee ID.
   * 
   * @example
   * A10000**
   */
  jobNumber?: string;
  /**
   * @remarks
   * The nickname of the user.<br>
   * The value is determined from the following parameters, in order of priority:<br>
   * 
   * - `RealNickName`
   * 
   * - `Remark`
   * 
   * - `EndUserId`
   * 
   * @example
   * 李**
   */
  nickName?: string;
  /**
   * @remarks
   * The ID of the organization to which the convenience account belongs.
   * 
   * > This parameter is deprecated and may be removed in a future release.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * The organizations to which the convenience account belongs.
   */
  orgs?: DescribeUsersResponseBodyUsersOrgs[];
  /**
   * @remarks
   * The type of the convenience account. The account can be activated in one of the following ways:
   * 
   * - Tenant manager-activated: The tenant manager sets the username and password. Notifications such as password resets are sent to the tenant manager\\"s email address or mobile phone.
   * 
   * - End user-activated: The tenant manager sets the username and the end user\\"s email address or mobile phone. Notifications for the end user, such as the initial password for the cloud desktop, are sent to the end user\\"s email address or mobile phone.
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  passwordExpireDays?: number;
  passwordExpireRestDays?: number;
  /**
   * @remarks
   * The phone number. This parameter is returned only if a phone number is set.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * A list of custom properties for the user.
   */
  properties?: DescribeUsersResponseBodyUsersProperties[];
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * 李**
   */
  realNickName?: string;
  /**
   * @remarks
   * The note about the convenience account.
   * 
   * @example
   * Test user.
   */
  remark?: string;
  /**
   * @remarks
   * The status of the convenience account.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The globally unique ID of the convenience account.
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
      passwordExpireDays: 'PasswordExpireDays',
      passwordExpireRestDays: 'PasswordExpireRestDays',
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
      passwordExpireDays: 'number',
      passwordExpireRestDays: 'number',
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
   * The token to start the next query. If this parameter is empty, all results have been returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the convenience accounts.
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

