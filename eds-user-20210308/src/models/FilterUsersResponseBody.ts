// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterUsersResponseBodyUsersExternalInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the external account associated with the user.
   * 
   * @example
   * account
   */
  externalName?: string;
  /**
   * @remarks
   * The external account, student ID, or employee ID associated with the user.
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
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * ug-2412ojkwtybd****
   */
  groupId?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * TestGroup
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

export class FilterUsersResponseBodyUsersOrgList extends $dara.Model {
  /**
   * @remarks
   * The organization structure ID.
   * 
   * @example
   * org-1mox****
   */
  orgId?: string;
  /**
   * @remarks
   * The organization structure name.
   * 
   * @example
   * Design Department
   */
  orgName?: string;
  /**
   * @remarks
   * The organization structure name path.
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

export class FilterUsersResponseBodyUsersResourcePolicyList extends $dara.Model {
  /**
   * @remarks
   * The resource policy ID.
   */
  policyId?: string;
  /**
   * @remarks
   * The resource policy name.
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

export class FilterUsersResponseBodyUsersSupportLoginIdps extends $dara.Model {
  /**
   * @remarks
   * The enterprise identity source ID.
   * 
   * @example
   * idp-hlyexfvwert9m8****
   */
  idpId?: string;
  /**
   * @remarks
   * The enterprise identity source name.
   * 
   * @example
   * DingTalk
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
   * The user property value.
   * 
   * @example
   * dev
   */
  propertyValue?: string;
  /**
   * @remarks
   * The user property value ID.
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
   * The user property ID.
   * 
   * @example
   * 12
   */
  propertyId?: number;
  /**
   * @remarks
   * The user property name.
   * 
   * @example
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * The user property number.
   * 
   * @example
   * 2
   */
  propertyType?: number;
  /**
   * @remarks
   * The user property value.
   */
  propertyValues?: FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues[];
  /**
   * @remarks
   * The ID of the user to which the property is bound.
   * 
   * @example
   * 4205**
   */
  userId?: number;
  /**
   * @remarks
   * The username of the user to which the property is bound.
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
   * The date when the account is automatically locked, in the YYYY-MM-DD format.
   * 
   * @example
   * 2023-03-03
   */
  autoLockTime?: string;
  /**
   * @remarks
   * The number of cloud computers assigned to the user.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of cloud computer pools authorized for the user. This value is returned when `IncludeDesktopGroupCount` is set to `true`.
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
   * Indicates whether the user is a local administrator.
   * 
   * @example
   * true
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
   * The extended user information.
   */
  externalInfo?: FilterUsersResponseBodyUsersExternalInfo;
  /**
   * @remarks
   * The list of user groups to which the convenience user belongs.
   */
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
   * The list of organizations to which the user belongs.
   */
  orgList?: FilterUsersResponseBodyUsersOrgList[];
  /**
   * @remarks
   * The ownership type of the account.
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * The password of the user account is valid permanently by default. You can use this parameter to set a password validity period of 30 to 365 days. After the password expires, the end user must change the password before logging on again.
   * 
   * > This feature is currently in invitational preview. To use this feature, submit a ticket.
   * 
   * @example
   * 30
   */
  passwordExpireDays?: number;
  /**
   * @remarks
   * The remaining days of the password validity period for the account.
   * 
   * @example
   * 10
   */
  passwordExpireRestDays?: number;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The user nickname.
   * 
   * @example
   * Xiaoming
   */
  realNickName?: string;
  /**
   * @remarks
   * The user remarks.
   * 
   * @example
   * For testing only
   */
  remark?: string;
  /**
   * @remarks
   * The list of resource policies associated with the convenience user.
   */
  resourcePolicyList?: FilterUsersResponseBodyUsersResourcePolicyList[];
  /**
   * @remarks
   * The status of the convenience user.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The supported logon identity sources.
   */
  supportLoginIdps?: FilterUsersResponseBodyUsersSupportLoginIdps[];
  /**
   * @remarks
   * The collection of user properties.
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
   * The token for the next query. If a query does not return all results, the returned NextToken is not empty. You can pass the returned NextToken in a subsequent query to continue the query.
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
   * The collection of convenience user information.
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

