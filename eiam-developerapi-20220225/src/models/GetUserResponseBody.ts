// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyCustomFields extends $dara.Model {
  /**
   * @remarks
   * The name of the extended field.
   * 
   * @example
   * xxxx
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the extended field. Field values are returned as strings regardless of the data types of the fields. For example, true or false is returned for a Boolean field.
   * 
   * @example
   * 字段数据值
   */
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      fieldValue: 'fieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The group description.
   * 
   * @example
   * description_demo
   */
  description?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_ufdsasn35ea5lmthk267xxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * name_test
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      groupId: 'groupId',
      groupName: 'groupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class GetUserResponseBodyOrganizationalUnits extends $dara.Model {
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The name of the organizational unit.
   * 
   * @example
   * name001
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * Indicates whether the organizational unit is the primary organizational unit.
   * 
   * @example
   * true
   */
  primary?: boolean;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'organizationalUnitId',
      organizationalUnitName: 'organizationalUnitName',
      primary: 'primary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      primary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the account expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
  accountExpireTime?: number;
  /**
   * @remarks
   * The time when the account was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The extended fields of the account.
   */
  customFields?: GetUserResponseBodyCustomFields[];
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * xxxx
   */
  description?: string;
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * display_name001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address has been verified. A value of true indicates that the email address has been verified by the user or has been set to the verified status by the administrator. A value of false indicates that the email address has not been verified.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The groups to which the account belongs.
   */
  groups?: GetUserResponseBodyGroups[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the account lock expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
  lockExpireTime?: number;
  /**
   * @remarks
   * The organizational units to which the account belongs.
   */
  organizationalUnits?: GetUserResponseBodyOrganizationalUnits[];
  /**
   * @remarks
   * Indicates whether the password is set.
   * 
   * @example
   * true
   */
  passwordSet?: boolean;
  /**
   * @remarks
   * The mobile number of the user who owns the account.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Indicates whether the mobile number has been verified. A value of true indicates that the mobile number has been verified by the user or has been set to the verified status by the administrator. A value of false indicates that the mobile number has not been verified.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The country code of the mobile number. For example, the country code of China is 86 without 00 or +.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The ID of the primary organizational unit of the account.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  primaryOrganizationalUnitId?: string;
  /**
   * @remarks
   * The time when the account was registered. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
  registerTime?: number;
  /**
   * @remarks
   * The status of the account. Valid values: enabled disabled
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the account was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  /**
   * @remarks
   * The external ID of the account. The external ID can be used to map external data to the data of the account in EIAM of Identity as a Service (IDaaS). By default, the external ID is the account ID.
   * 
   * Note: For accounts with the same source type and source ID, each account has a unique external ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The source ID of the account.
   * 
   * If the account was created in IDaaS, its source ID is the ID of the IDaaS instance. If the account was imported, its source ID is the enterprise ID in the source. For example, if the account was imported from DingTalk, its source ID is the corpId value of the enterprise in DingTalk.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  userSourceId?: string;
  /**
   * @remarks
   * The source type of the account. Valid values:
   * 
   * *   build_in: The account was created in IDaaS.
   * *   ding_talk: The account was imported from DingTalk.
   * *   ad: The account was imported from Microsoft Active Directory (AD).
   * *   ldap: The account was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * @example
   * build_in
   */
  userSourceType?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * name001
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountExpireTime: 'accountExpireTime',
      createTime: 'createTime',
      customFields: 'customFields',
      description: 'description',
      displayName: 'displayName',
      email: 'email',
      emailVerified: 'emailVerified',
      groups: 'groups',
      instanceId: 'instanceId',
      lockExpireTime: 'lockExpireTime',
      organizationalUnits: 'organizationalUnits',
      passwordSet: 'passwordSet',
      phoneNumber: 'phoneNumber',
      phoneNumberVerified: 'phoneNumberVerified',
      phoneRegion: 'phoneRegion',
      primaryOrganizationalUnitId: 'primaryOrganizationalUnitId',
      registerTime: 'registerTime',
      status: 'status',
      updateTime: 'updateTime',
      userExternalId: 'userExternalId',
      userId: 'userId',
      userSourceId: 'userSourceId',
      userSourceType: 'userSourceType',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountExpireTime: 'number',
      createTime: 'number',
      customFields: { 'type': 'array', 'itemType': GetUserResponseBodyCustomFields },
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      groups: { 'type': 'array', 'itemType': GetUserResponseBodyGroups },
      instanceId: 'string',
      lockExpireTime: 'number',
      organizationalUnits: { 'type': 'array', 'itemType': GetUserResponseBodyOrganizationalUnits },
      passwordSet: 'boolean',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      primaryOrganizationalUnitId: 'string',
      registerTime: 'number',
      status: 'string',
      updateTime: 'number',
      userExternalId: 'string',
      userId: 'string',
      userSourceId: 'string',
      userSourceType: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.organizationalUnits)) {
      $dara.Model.validateArray(this.organizationalUnits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

