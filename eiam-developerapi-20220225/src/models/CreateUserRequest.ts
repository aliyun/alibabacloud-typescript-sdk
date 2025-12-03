// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateUserRequestCustomFields extends $dara.Model {
  /**
   * @remarks
   * Field name
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * Filed value
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
   * Password  forced update
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * Password policy
   * 
   * @example
   * global
   */
  passwordInitializationPolicyPriority?: string;
  /**
   * @remarks
   * Password Initialization Type
   * 
   * @example
   * random
   */
  passwordInitializationType?: string;
  /**
   * @remarks
   * User Notification Channels
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
   * Custom fields
   */
  customFields?: CreateUserRequestCustomFields[];
  /**
   * @remarks
   * The description of the account. The description can be up to 256 characters in length.
   * 
   * @example
   * test user
   */
  description?: string;
  /**
   * @remarks
   * The display name of the account. The display name can be up to 64 characters in length.
   * 
   * @example
   * display_name001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user who owns the account.
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address is verified. This field is required if an email address is specified. If you have no special requirement, set this parameter to true.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The password of the account. For information about the password rules, go to the Create User panel in the Identity as a Service (IDaaS) console.
   * 
   * @example
   * xxxxx
   */
  password?: string;
  /**
   * @remarks
   * Configure the initial password
   */
  passwordInitializationConfig?: CreateUserRequestPasswordInitializationConfig;
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
   * Indicates whether the mobile number is verified. This field is required if a mobile number is specified. If you have no special requirement, set this parameter to true.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The country code of the mobile number. For example, the country code of China is 86 without 00 or +. This parameter is required if a mobile number is specified.
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
   * The external ID of the account. The external ID can be used to map external data to the data of the account in EIAM of Identity as a Service (IDaaS). By default, the external ID is the account ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The username of the account.
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

