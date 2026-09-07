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
   * The user group ID.
   * 
   * @example
   * ug-12341234****
   */
  groupId?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * UserGroup1
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
   * The department ID.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * The department name.
   * 
   * @example
   * Department1
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
   * Hangzhou ***
   */
  address?: string;
  /**
   * @remarks
   * The URL of the user\\"s profile picture.
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
   * Indicates whether administrator access permissions are enabled.
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
   * The username imported from an external source.
   * 
   * > This field is not publicly available.
   * 
   * @example
   * Ma**
   */
  externalName?: string;
  /**
   * @remarks
   * The extended user information.
   */
  extras?: DescribeUsersResponseBodyUsersExtras;
  /**
   * @remarks
   * The collection of user groups to which the convenience account belongs.
   */
  groups?: DescribeUsersResponseBodyUsersGroups[];
  /**
   * @remarks
   * The convenience account ID.
   * 
   * @example
   * 4205**
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the user is a user administrator. If the convenience account is of the administrator-activated type, a user administrator must be specified. Notifications such as password resets initiated by end users through the client are sent to the user administrator\\"s email or phone. For more information, see [Create a convenience account](https://help.aliyun.com/document_detail/214472.html).
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
   * The nickname of the user. The value is determined in the following order:
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
   * The department ID to which the convenience account belongs.
   * > This parameter will be deprecated soon.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * The collection of departments to which the convenience account belongs.
   */
  orgs?: DescribeUsersResponseBodyUsersOrgs[];
  /**
   * @remarks
   * The convenience account type, which includes:
   * 
   * * Administrator-activated type: The administrator sets the username and password. User notifications such as password resets are sent to the administrator\\"s email or phone.
   * * User-activated type: The administrator sets the username and the user\\"s email or phone for receiving notifications. User notifications such as cloud computer provisioning notifications (including the initial password) are sent to the user\\"s email or phone.
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  passwordExpireDays?: number;
  passwordExpireRestDays?: number;
  /**
   * @remarks
   * The phone number. This parameter is not returned if it is not set.
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
   * The remark of the convenience account.
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
   * The total number of users that meet the query conditions
   */
  count?: number;
  /**
   * @remarks
   * The pagination token for the next query. An empty NextToken indicates that no more results exist.
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
   * The collection of convenience account information.
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

