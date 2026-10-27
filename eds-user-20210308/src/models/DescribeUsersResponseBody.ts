// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersResponseBodyUsersExtrasResourcePolicyList extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource policy.
   */
  policyId?: string;
  /**
   * @remarks
   * The Policy Name of the resource policy.
   */
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
   * The number of allocated cloud resources.
   */
  assignedResourceCount?: { [key: string]: any };
  /**
   * @remarks
   * The list of resource policies associated with the user.
   */
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
   * The ID of the department.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * The name of the department.
   * 
   * @example
   * Department 1
   */
  orgName?: string;
  /**
   * @remarks
   * The name path from the root organization to the current organization.
   * 
   * @example
   * Product Department/Design Department
   */
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
   * The property name.
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
   * Hangzhou***
   */
  address?: string;
  /**
   * @remarks
   * The URL of the profile picture.
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
   * Specifies whether to enable administrator access permissions.
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The name of the externally imported user.
   * > This field is not publicly available.
   * 
   * @example
   * Ma**
   */
  externalName?: string;
  /**
   * @remarks
   * The extended information of the user.
   */
  extras?: DescribeUsersResponseBodyUsersExtras;
  /**
   * @remarks
   * The collection of user groups to which the convenience user belongs.
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
   * Indicates whether the user is a tenant administrator. If the convenience user to be created uses the administrator activation type, you must specify a tenant administrator. Notifications such as password resets initiated by end users through the client are sent to the email address or mobile phone number of the tenant administrator. For more information, see [Create a convenience user](https://help.aliyun.com/document_detail/214472.html).
   * 
   * @example
   * true
   */
  isTenantManager?: boolean;
  /**
   * @remarks
   * The employee ID of the user.
   * 
   * @example
   * A10000**
   */
  jobNumber?: string;
  /**
   * @remarks
   * The nickname of the user. The value is obtained in the following order:
   * - RealNickName
   * - Remark
   * - EndUserId
   * 
   * @example
   * Li**
   */
  nickName?: string;
  /**
   * @remarks
   * The ID of the department to which the convenience user belongs.
   * > **[Deprecated]** This parameter will be deprecated soon.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * The collection of departments to which the convenience user belongs.
   */
  orgs?: DescribeUsersResponseBodyUsersOrgs[];
  /**
   * @remarks
   * The convenience user type. Valid values:
   * - CreateFromManager: administrator-activated. The administrator sets the username and password. User notifications such as password reset notifications are sent to the email address or mobile phone number of the administrator.
   * - Normal: user-activated. The administrator sets the username and the email address or mobile phone number for receiving notifications. User notifications such as cloud desktop activation notifications (including the initial password) are sent to the email address or mobile phone number of the user.
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * The password validity period, in days. Valid values: 30 to 365. By default, the password never expires.
   * 
   * @example
   * 30
   */
  passwordExpireDays?: number;
  /**
   * @remarks
   * The remaining days of the password validity period.
   * 
   * @example
   * 10
   */
  passwordExpireRestDays?: number;
  /**
   * @remarks
   * The mobile phone number. This parameter is not returned if it is not configured.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The user properties.
   */
  properties?: DescribeUsersResponseBodyUsersProperties[];
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * Li**
   */
  realNickName?: string;
  /**
   * @remarks
   * The remarks for the convenience user.
   * 
   * @example
   * Test user.
   */
  remark?: string;
  /**
   * @remarks
   * The status.
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
   * The total number of users that meet the query conditions.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The token for the next query. An empty NextToken indicates that no more results are available.
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
   * The collection of convenience user information.
   */
  users?: DescribeUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

