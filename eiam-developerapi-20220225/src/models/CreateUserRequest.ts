// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateUserRequestCustomFields extends $dara.Model {
  /**
   * @remarks
   * The name of the custom field. You can view the field\\"s data type and value range in the IDaaS console.
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
   * fieldValue_001
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

export class CreateUserRequestPasswordInitializationConfig extends $dara.Model {
  /**
   * @remarks
   * The password forced update status. By default, this feature is disabled. Valid values:
   * 
   * - `enabled`: Enables the feature.
   * 
   * - `disabled`: Disables the feature.
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The priority of the password initialization policy. Valid values:
   * 
   * - `global`: Uses the instance-level password initialization policy and ignores the custom settings in this request. For more information, see the password initialization policy configuration in the IDaaS console.
   * 
   * - `custom`: Uses the custom password initialization policy defined in this request. This includes settings for forced password updates, the initialization type, and notification channels.
   * 
   * @example
   * global
   */
  passwordInitializationPolicyPriority?: string;
  /**
   * @remarks
   * The password initialization type. Valid values:
   * 
   * - `random`: A randomly generated password.
   * 
   * @example
   * random
   */
  passwordInitializationType?: string;
  /**
   * @remarks
   * The user notification channels. Valid values:
   * 
   * - `email`: Email
   * 
   * - `sms`: SMS
   * 
   * @example
   * sms
   */
  userNotificationChannels?: string[];
  static names(): { [key: string]: string } {
    return {
      passwordForcedUpdateStatus: 'passwordForcedUpdateStatus',
      passwordInitializationPolicyPriority: 'passwordInitializationPolicyPriority',
      passwordInitializationType: 'passwordInitializationType',
      userNotificationChannels: 'userNotificationChannels',
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
   * A list of custom fields for the account.
   */
  customFields?: CreateUserRequestCustomFields[];
  /**
   * @remarks
   * The account description. The maximum length is 256 characters.
   * 
   * @example
   * 测试账户
   */
  description?: string;
  /**
   * @remarks
   * The display name. The maximum length is 128 characters.
   * 
   * @example
   * display_name001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address. The local-part of the address can contain uppercase and lowercase letters, digits, periods (`.`), underscores (`_`), and hyphens (`-`). The maximum length is 128 characters.
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Specifies whether the email is verified. This parameter is required if `email` is set. Typically, set this to `true`.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The account password. For password complexity rules, see the password policy in the IDaaS console.
   * 
   * @example
   * xxxxx
   */
  password?: string;
  /**
   * @remarks
   * The password initialization configuration.
   */
  passwordInitializationConfig?: CreateUserRequestPasswordInitializationConfig;
  /**
   * @remarks
   * The account phone number. It must be 6 to 15 digits long.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Specifies whether the phone number is verified. This parameter is required if `phoneNumber` is set. Typically, set this to `true`.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The phone region code. For example, the code for the Chinese mainland is `86`. Do not include a `00` prefix or a plus sign (`+`). This parameter is required if `phoneNumber` is set.
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
   * The external user ID, used to associate the account with an external system. The maximum length is 128 characters. If unspecified, it defaults to the account ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The username. It can contain letters, digits, and the following special characters: underscore (`_`), period (`.`), at sign (`@`), and hyphen (`-`). The maximum length is 256 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * name001
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'customFields',
      description: 'description',
      displayName: 'displayName',
      email: 'email',
      emailVerified: 'emailVerified',
      password: 'password',
      passwordInitializationConfig: 'passwordInitializationConfig',
      phoneNumber: 'phoneNumber',
      phoneNumberVerified: 'phoneNumberVerified',
      phoneRegion: 'phoneRegion',
      primaryOrganizationalUnitId: 'primaryOrganizationalUnitId',
      userExternalId: 'userExternalId',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'array', 'itemType': CreateUserRequestCustomFields },
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
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
    if(this.passwordInitializationConfig && typeof (this.passwordInitializationConfig as any).validate === 'function') {
      (this.passwordInitializationConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

