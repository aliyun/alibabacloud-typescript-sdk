// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterUsersResponseBodyUsersExternalInfo extends $dara.Model {
  /**
   * @remarks
   * The account that is associated with the convenience user.
   * 
   * @example
   * test
   */
  externalName?: string;
  /**
   * @remarks
   * The account, student ID, or employee ID that is associated with the convenience user.
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

export class FilterUsersResponseBodyUsersOrgList extends $dara.Model {
  orgId?: string;
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

export class FilterUsersResponseBodyUsersSupportLoginIdps extends $dara.Model {
  idpId?: string;
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
   * A
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
   * The property ID.
   * 
   * @example
   * 12
   */
  propertyId?: number;
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * department
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property type.
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
   * The ID of the convenience user that is bound to the property.
   * 
   * @example
   * 12345
   */
  userId?: number;
  /**
   * @remarks
   * The username of the convenience user that is bound to the property.
   * 
   * @example
   * testName
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
   * The date when a convenience account is automatically locked.
   * 
   * @example
   * 2023-03-03
   */
  autoLockTime?: string;
  /**
   * @remarks
   * The number of cloud desktops that are assigned to the convenience user.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of cloud desktop pools that are assigned to the convenience user. This value is returned if you set `IncludeDesktopGroupCount` to `true`.
   * 
   * @example
   * 2
   */
  desktopGroupCount?: number;
  /**
   * @remarks
   * The email address of the convenience user.
   * 
   * @example
   * testName@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the convenience user is a local administrator.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * The username of the convenience user.
   * 
   * @example
   * testName
   */
  endUserId?: string;
  /**
   * @remarks
   * The additional information about the convenience user.
   */
  externalInfo?: FilterUsersResponseBodyUsersExternalInfo;
  /**
   * @remarks
   * The ID of the convenience user.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the convenience user is a tenant administrator.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  isTenantManager?: boolean;
  orgList?: FilterUsersResponseBodyUsersOrgList[];
  /**
   * @remarks
   * The type of the account ownership.
   * 
   * Valid values:
   * 
   * *   CreateFromManager: administrator-activated
   * *   Normal: user-activated
   * 
   * @example
   * Normal
   */
  ownerType?: string;
  /**
   * @remarks
   * By default, user account passwords do not expire. However, you can set a validity period between 30 and 365 days. Once the period expires, end users must change their password before they can log on to terminals.
   * 
   * >  The feature is in invitational preview. If you want to use this feature, submit a ticket.
   * 
   * @example
   * 30
   */
  passwordExpireDays?: number;
  /**
   * @remarks
   * The number of days remaining until the account password expires.
   * 
   * @example
   * 10
   */
  passwordExpireRestDays?: number;
  /**
   * @remarks
   * The mobile number of the convenience user.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The nickname of the convenience user.
   * 
   * @example
   * Oliver
   */
  realNickName?: string;
  /**
   * @remarks
   * The remarks on the convenience user.
   * 
   * @example
   * 1
   */
  remark?: string;
  /**
   * @remarks
   * The remarks on the convenience account.
   * 
   * Valid values:
   * 
   * *   0: The convenience account is normal.
   * *   9: The convenience account is locked.
   * 
   * @example
   * 0
   */
  status?: number;
  supportLoginIdps?: FilterUsersResponseBodyUsersSupportLoginIdps[];
  /**
   * @remarks
   * The information about the properties.
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
      id: 'Id',
      isTenantManager: 'IsTenantManager',
      orgList: 'OrgList',
      ownerType: 'OwnerType',
      passwordExpireDays: 'PasswordExpireDays',
      passwordExpireRestDays: 'PasswordExpireRestDays',
      phone: 'Phone',
      realNickName: 'RealNickName',
      remark: 'Remark',
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
      id: 'number',
      isTenantManager: 'boolean',
      orgList: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersOrgList },
      ownerType: 'string',
      passwordExpireDays: 'number',
      passwordExpireRestDays: 'number',
      phone: 'string',
      realNickName: 'string',
      remark: 'string',
      status: 'number',
      supportLoginIdps: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersSupportLoginIdps },
      userSetPropertiesModels: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersUserSetPropertiesModels },
    };
  }

  validate() {
    if(this.externalInfo && typeof (this.externalInfo as any).validate === 'function') {
      (this.externalInfo as any).validate();
    }
    if(Array.isArray(this.orgList)) {
      $dara.Model.validateArray(this.orgList);
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
   * The pagination token that is used in the next request to retrieve a new page of results. If not all results are returned in a query, a value is returned for the NextToken parameter. In this case, you can use the returned NextToken value to start the next query.
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
   * DBD276B5-00FF-5E04-8EF7-5CBA09BF112A
   */
  requestId?: string;
  /**
   * @remarks
   * The convenience accounts.
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

