// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequestCustomFields extends $dara.Model {
  /**
   * @remarks
   * The identifier of the custom field. You must create the custom field in advance. For more information, see the Custom Fields module in the console.
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the custom field. The value must comply with the attribute limits of the corresponding custom field.
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

export class CreateUserRequestPasswordInitializationConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to force the user to update the password. By default, this feature is disabled. Valid values:
   * - enabled: enables the feature.
   * - disabled: disables the feature.
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The password initialization policy priority. By default, this parameter does not take effect. Valid values:
   * - global: global priority. The instance-level password initialization policy is used, and the password initialization Settings in this request are all invalid. For more information, see the password initialization Settings in the password policies.
   * - custom: custom priority. The currently defined password initialization Settings prevail, including whether to force password updates, the password initialization method, and the notification channels.
   * 
   * @example
   * global
   */
  passwordInitializationPolicyPriority?: string;
  /**
   * @remarks
   * The password initialization method. Valid values:
   * - random: generates a random password.
   * 
   * @example
   * random
   */
  passwordInitializationType?: string;
  /**
   * @remarks
   * The list of password notification channels.
   * 
   * @example
   * ["sms"]
   */
  userNotificationChannels?: string[];
  static names(): { [key: string]: string } {
    return {
      passwordForcedUpdateStatus: 'PasswordForcedUpdateStatus',
      passwordInitializationPolicyPriority: 'PasswordInitializationPolicyPriority',
      passwordInitializationType: 'PasswordInitializationType',
      userNotificationChannels: 'UserNotificationChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordForcedUpdateStatus: 'string',
      passwordInitializationPolicyPriority: 'string',
      passwordInitializationType: 'string',
      userNotificationChannels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userNotificationChannels)) {
      $dara.Model.validateArray(this.userNotificationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate a parameter value from your client to ensure that the parameter value is unique among different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see References: How to ensure idempotence.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of custom fields.
   * 
   * @example
   * [{"FieldName":"age","FieldValue":"10"}]
   */
  customFields?: CreateUserRequestCustomFields[];
  /**
   * @remarks
   * The description. The maximum length is 256 characters.
   * 
   * @example
   * description text
   */
  description?: string;
  /**
   * @remarks
   * The display name of the account. The maximum length is 128 characters.
   * 
   * @example
   * name_001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address. The prefix can contain uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). The maximum length is 128 characters.
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Specifies whether the email address is verified and trusted. If the email address is specified, this parameter is required. If no special business requirements exist, set this parameter to true.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the organizational units to which the account belongs. An account can belong to multiple organizational units.
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The password. For specific format requirements, see the password policy.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The password initialization configuration.
   */
  passwordInitializationConfig?: CreateUserRequestPasswordInitializationConfig;
  /**
   * @remarks
   * The mobile phone number. It must be 6 to 15 digits in length.
   * 
   * @example
   * 12345678901
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Specifies whether the mobile phone number is verified and trusted. If the mobile phone number is specified, this parameter is required. If no special business requirements exist, set this parameter to true.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The region code of the mobile phone number. It must be 1 to 6 digits in length and cannot contain a plus sign (+). For example, the region code for the Chinese mainland is 86, without 00 or +. This parameter is required if the mobile phone number is specified.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The ID of the primary organizational unit.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  primaryOrganizationalUnitId?: string;
  /**
   * @remarks
   * The external ID of the account, which is used to associate the account with an external system. The maximum length is 128 characters. If this parameter is not specified, the account ID is used by default.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The username. It can contain letters, digits, and the following special characters: underscores (_), periods (.), at signs (@), and hyphens (-). The maximum length is 256 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * user_001
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      customFields: 'CustomFields',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      emailVerified: 'EmailVerified',
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
      password: 'Password',
      passwordInitializationConfig: 'PasswordInitializationConfig',
      phoneNumber: 'PhoneNumber',
      phoneNumberVerified: 'PhoneNumberVerified',
      phoneRegion: 'PhoneRegion',
      primaryOrganizationalUnitId: 'PrimaryOrganizationalUnitId',
      userExternalId: 'UserExternalId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      customFields: { 'type': 'array', 'itemType': CreateUserRequestCustomFields },
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      password: 'string',
      passwordInitializationConfig: CreateUserRequestPasswordInitializationConfig,
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      primaryOrganizationalUnitId: 'string',
      userExternalId: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    if(this.passwordInitializationConfig && typeof (this.passwordInitializationConfig as any).validate === 'function') {
      (this.passwordInitializationConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

