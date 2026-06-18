// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterUsersResponseBodyUsersExternalInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the mapped external account.
   * 
   * @example
   * account
   */
  externalName?: string;
  /**
   * @remarks
   * The ID of the external account, such as a student ID or an employee ID.
   * 
   * @example
   * 030801
   */
  jobNumber?: string;
  static names(): { [key: string]: string } {
    return {
      externalName: 'ExternalName',
      jobNumber: 'JobNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalName: 'string',
      jobNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsersGroups extends $dara.Model {
  groupId?: string;
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

export class FilterUsersResponseBodyUsersOrgList extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   */
  orgId?: string;
  /**
   * @remarks
   * The organization name.
   */
  orgName?: string;
  /**
   * @remarks
   * The organization name path.
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

export class FilterUsersResponseBodyUsersResourcePolicyList extends $dara.Model {
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

export class FilterUsersResponseBodyUsersSupportLoginIdps extends $dara.Model {
  /**
   * @remarks
   * The ID of the identity provider (IdP).
   */
  idpId?: string;
  /**
   * @remarks
   * The name of the identity provider (IdP).
   */
  idpName?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      idpName: 'IdpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'string',
      idpName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues extends $dara.Model {
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * dev
   */
  propertyValue?: string;
  /**
   * @remarks
   * The ID of the property value.
   * 
   * @example
   * 42
   */
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsersUserSetPropertiesModels extends $dara.Model {
  /**
   * @remarks
   * The ID of the user property.
   * 
   * @example
   * 12
   */
  propertyId?: number;
  /**
   * @remarks
   * The name of the user property.
   * 
   * @example
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * The type of the user property.
   * 
   * @example
   * 2
   */
  propertyType?: number;
  /**
   * @remarks
   * The property values.
   */
  propertyValues?: FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues[];
  /**
   * @remarks
   * The ID of the user associated with the property.
   * 
   * @example
   * 4205**
   */
  userId?: number;
  /**
   * @remarks
   * The user name associated with the property.
   * 
   * @example
   * alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyType: 'PropertyType',
      propertyValues: 'PropertyValues',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyType: 'number',
      propertyValues: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues },
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyValues)) {
      $dara.Model.validateArray(this.propertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The date the account will be automatically locked.
   * 
   * @example
   * 2023-03-03
   */
  autoLockTime?: string;
  /**
   * @remarks
   * The number of cloud desktops assigned to the user.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of desktop groups the user can access. This parameter is returned only when `IncludeDesktopGroupCount` is set to `true`.
   * 
   * @example
   * 2
   */
  desktopGroupCount?: number;
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
   * Indicates whether the user has local administrator permissions.
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * The user name.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * External user information.
   */
  externalInfo?: FilterUsersResponseBodyUsersExternalInfo;
  groups?: FilterUsersResponseBodyUsersGroups[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 4205**
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the user is a tenant administrator.
   * 
   * @example
   * true
   */
  isTenantManager?: boolean;
  /**
   * @remarks
   * A list of organizations the user belongs to.
   */
  orgList?: FilterUsersResponseBodyUsersOrgList[];
  /**
   * @remarks
   * The account ownership type.
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * The password validity period in days. By default, passwords do not expire. Set this to a value from 30 to 365 to enforce an expiration policy. When a password expires, the user must change it before logging on again.
   * 
   * > This feature is in preview and available by invitation only. To use this feature, submit a ticket.
   * 
   * @example
   * 30
   */
  passwordExpireDays?: number;
  /**
   * @remarks
   * The number of days until the password expires.
   * 
   * @example
   * 10
   */
  passwordExpireRestDays?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The user\\"s nickname.
   * 
   * @example
   * 小明
   */
  realNickName?: string;
  /**
   * @remarks
   * The remark about the user.
   * 
   * @example
   * 测试专用
   */
  remark?: string;
  resourcePolicyList?: FilterUsersResponseBodyUsersResourcePolicyList[];
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
   * A list of identity providers (IdPs) that the user can use to log on.
   */
  supportLoginIdps?: FilterUsersResponseBodyUsersSupportLoginIdps[];
  /**
   * @remarks
   * A list of user properties.
   */
  userSetPropertiesModels?: FilterUsersResponseBodyUsersUserSetPropertiesModels[];
  static names(): { [key: string]: string } {
    return {
      autoLockTime: 'AutoLockTime',
      desktopCount: 'DesktopCount',
      desktopGroupCount: 'DesktopGroupCount',
      email: 'Email',
      enableAdminAccess: 'EnableAdminAccess',
      endUserId: 'EndUserId',
      externalInfo: 'ExternalInfo',
      groups: 'Groups',
      id: 'Id',
      isTenantManager: 'IsTenantManager',
      orgList: 'OrgList',
      ownerType: 'OwnerType',
      passwordExpireDays: 'PasswordExpireDays',
      passwordExpireRestDays: 'PasswordExpireRestDays',
      phone: 'Phone',
      realNickName: 'RealNickName',
      remark: 'Remark',
      resourcePolicyList: 'ResourcePolicyList',
      status: 'Status',
      supportLoginIdps: 'SupportLoginIdps',
      userSetPropertiesModels: 'UserSetPropertiesModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoLockTime: 'string',
      desktopCount: 'number',
      desktopGroupCount: 'number',
      email: 'string',
      enableAdminAccess: 'boolean',
      endUserId: 'string',
      externalInfo: FilterUsersResponseBodyUsersExternalInfo,
      groups: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersGroups },
      id: 'number',
      isTenantManager: 'boolean',
      orgList: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersOrgList },
      ownerType: 'string',
      passwordExpireDays: 'number',
      passwordExpireRestDays: 'number',
      phone: 'string',
      realNickName: 'string',
      remark: 'string',
      resourcePolicyList: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersResourcePolicyList },
      status: 'number',
      supportLoginIdps: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersSupportLoginIdps },
      userSetPropertiesModels: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersUserSetPropertiesModels },
    };
  }

  validate() {
    if(this.externalInfo && typeof (this.externalInfo as any).validate === 'function') {
      (this.externalInfo as any).validate();
    }
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.orgList)) {
      $dara.Model.validateArray(this.orgList);
    }
    if(Array.isArray(this.resourcePolicyList)) {
      $dara.Model.validateArray(this.resourcePolicyList);
    }
    if(Array.isArray(this.supportLoginIdps)) {
      $dara.Model.validateArray(this.supportLoginIdps);
    }
    if(Array.isArray(this.userSetPropertiesModels)) {
      $dara.Model.validateArray(this.userSetPropertiesModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token for paginated results. If the response is truncated, this parameter is returned. To retrieve the next page of results, include this value in a subsequent request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
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
   * A list of convenience accounts.
   */
  users?: FilterUsersResponseBodyUsers[];
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
      users: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsers },
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

