// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequestCustomFields extends $dara.Model {
  /**
   * @remarks
   * The identifier of the custom field. You must create this field in the console before you can use it in a request. For more information, see the Custom Fields module in the console.
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the custom field. This value must comply with the constraints defined for the corresponding custom field.
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
   * The status of forced password update. This setting is disabled by default. Valid values:
   * 
   * - `enabled`: Enables forced password updates.
   * 
   * - `disabled`: Disables forced password updates.
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The priority of the password initialization policy. This setting is disabled by default. Valid values:
   * 
   * - `global`: The service uses the instance-level password initialization policy and ignores the policy specified in this request. For more information, see the password initialization policy settings.
   * 
   * - `custom`: The service uses the password initialization policy defined in this request. This includes the forced password update setting, the password initialization method, and the notification channels.
   * 
   * @example
   * global
   */
  passwordInitializationPolicyPriority?: string;
  /**
   * @remarks
   * The password initialization type. Valid values:
   * 
   * - `random`: The system generates a random password.
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
   * sms
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
   * A client-provided token to ensure the idempotence of the request. This value must be unique for each request. The token can contain only ASCII characters and must be no more than 64 characters long. For more information, see [How to ensure idempotence](~~~/doc-en/6a938a5b-2402-4c9d-b235-3733a1f813c9.dita).
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
   * description
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
   * The display name. The maximum length is 128 characters.
   * 
   * @example
   * name_001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address. The local part of the address can contain uppercase letters, lowercase letters, digits, periods (.), underscores (_), or hyphens (-). The maximum length is 128 characters.
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address is verified. A verified address is considered trusted. This parameter is required if you specify the `Email` parameter. For typical use, set this to `true`.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * A list of subordinate organizational unit IDs. A user can belong to multiple organizational units.
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The password. The format must comply with the password policy.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The settings for the password initialization policy.
   */
  passwordInitializationConfig?: CreateUserRequestPasswordInitializationConfig;
  /**
   * @remarks
   * The phone number. It must be 6 to 15 digits long.
   * 
   * @example
   * 12345678901
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Indicates whether the phone number is verified. A verified number is considered trusted. This parameter is required if you specify the `PhoneNumber` parameter. For typical use, set this to `true`.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The country code. It must contain 1 to 6 digits and must not include the plus sign (+).
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
   * The external ID for associating the user with an external system. The maximum length is 128 characters. If this parameter is not specified, its value defaults to the system-generated user ID.
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

