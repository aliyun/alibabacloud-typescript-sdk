// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyUserCustomFields extends $dara.Model {
  /**
   * @remarks
   * The identifier of the custom field.
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the custom field.
   * 
   * @example
   * 10
   */
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
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

export class GetUserResponseBodyUserGroups extends $dara.Model {
  /**
   * @remarks
   * The group description.
   * 
   * @example
   * this is a test.
   */
  description?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * group_test_name
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
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

export class GetUserResponseBodyUserOrganizationalUnits extends $dara.Model {
  /**
   * @remarks
   * The organizational unit ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The organizational unit name.
   * 
   * @example
   * test_ou_name
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * Indicates whether this is the primary organizational unit.
   * 
   * @example
   * true
   */
  primary?: boolean;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
      primary: 'Primary',
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

export class GetUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the account, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  accountExpireTime?: number;
  /**
   * @remarks
   * The creation time of the account, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The list of custom fields of the account.
   */
  customFields?: GetUserResponseBodyUserCustomFields[];
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * Test account
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
   * The email address of the account.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address is verified. A value of true indicates that the email address has been verified by the user or set as verified by the administrator. A value of false indicates that the email address is not verified.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The list of groups to which the account belongs.
   */
  groups?: GetUserResponseBodyUserGroups[];
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
   * The lock expiration time, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  lockExpireTime?: number;
  /**
   * @remarks
   * The list of organizational units to which the account belongs.
   */
  organizationalUnits?: GetUserResponseBodyUserOrganizationalUnits[];
  /**
   * @remarks
   * The expiration time of the password, in UNIX timestamp format. Unit: milliseconds.
   * 
   * - A return value of -1 indicates that the password does not expire.
   * 
   * - No return value indicates that the password does not expire.
   * 
   * - A specific timestamp value indicates the exact password expiration time.
   * 
   * @example
   * 1652085686179
   */
  passwordExpireTime?: number;
  /**
   * @remarks
   * Indicates whether the password is set.
   * 
   * @example
   * false
   */
  passwordSet?: boolean;
  /**
   * @remarks
   * The phone number of the account.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Indicates whether the phone number is verified. A value of true indicates that the phone number has been verified by the user or set as verified by the administrator. A value of false indicates that the phone number is not verified.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The country calling code of the phone number. Example: 86 for the Chinese mainland. The code does not include the 00 or + prefix.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The preferred language.
   * 
   * @example
   * en-US
   */
  preferredLanguage?: string;
  /**
   * @remarks
   * The ID of the primary organizational unit to which the account belongs.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  primaryOrganizationalUnitId?: string;
  /**
   * @remarks
   * The registration time of the account, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  registerTime?: number;
  /**
   * @remarks
   * The status of the account. Valid values:
   * - enabled: enabled.
   * 
   * - disabled: disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The most recent update time of the account, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  /**
   * @remarks
   * The external ID of the account. This ID is used to associate external data with the IDaaS account. The default value is the IDaaS account ID.
   * 
   * > Note: The external ID must be unique within the same source type and source ID.
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
   * For the self-built type, the default value is the instance ID. For other types, the value corresponds to the enterprise ID of the respective source. For example, the DingTalk source corresponds to the corpId of the DingTalk enterprise.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  userSourceId?: string;
  /**
   * @remarks
   * The source type of the account. Valid values:
   * 
   * - build_in: self-built.
   * 
   * - ding_talk: imported from DingTalk.
   * - ad: imported from AD.
   * - ldap: imported from LDAP.
   * - we_com: imported from WeCom.
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
      accountExpireTime: 'AccountExpireTime',
      createTime: 'CreateTime',
      customFields: 'CustomFields',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      emailVerified: 'EmailVerified',
      groups: 'Groups',
      instanceId: 'InstanceId',
      lockExpireTime: 'LockExpireTime',
      organizationalUnits: 'OrganizationalUnits',
      passwordExpireTime: 'PasswordExpireTime',
      passwordSet: 'PasswordSet',
      phoneNumber: 'PhoneNumber',
      phoneNumberVerified: 'PhoneNumberVerified',
      phoneRegion: 'PhoneRegion',
      preferredLanguage: 'PreferredLanguage',
      primaryOrganizationalUnitId: 'PrimaryOrganizationalUnitId',
      registerTime: 'RegisterTime',
      status: 'Status',
      updateTime: 'UpdateTime',
      userExternalId: 'UserExternalId',
      userId: 'UserId',
      userSourceId: 'UserSourceId',
      userSourceType: 'UserSourceType',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountExpireTime: 'number',
      createTime: 'number',
      customFields: { 'type': 'array', 'itemType': GetUserResponseBodyUserCustomFields },
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      groups: { 'type': 'array', 'itemType': GetUserResponseBodyUserGroups },
      instanceId: 'string',
      lockExpireTime: 'number',
      organizationalUnits: { 'type': 'array', 'itemType': GetUserResponseBodyUserOrganizationalUnits },
      passwordExpireTime: 'number',
      passwordSet: 'boolean',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      preferredLanguage: 'string',
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

export class GetUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The account object data.
   */
  user?: GetUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: GetUserResponseBodyUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

