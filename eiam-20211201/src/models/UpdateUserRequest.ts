// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequestCustomFields extends $dara.Model {
  /**
   * @remarks
   * The custom field name. You must create the custom field in the console before using it. For more information, see the custom fields module in the console.
   * 
   * @example
   * nick_name
   */
  fieldName?: string;
  /**
   * @remarks
   * The custom field value. The value must comply with the constraints of the custom field.
   * 
   * @example
   * test_value
   */
  fieldValue?: string;
  /**
   * @remarks
   * The operation type for the custom field. Valid values:
   * 
   * - `add`: Adds a value to the custom field.
   * 
   * - `replace`: Replaces the existing value of the custom field. If the field has no existing value, this operation adds the value instead.
   * 
   * - `remove`: Removes a value from the custom field.
   * 
   * @example
   * add
   */
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
      operation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * A list of custom field objects.
   */
  customFields?: UpdateUserRequestCustomFields[];
  /**
   * @remarks
   * The display name. It can be a maximum of 256 characters.
   * 
   * @example
   * test_name
   */
  displayName?: string;
  /**
   * @remarks
   * The email address. The local-part can contain uppercase letters, lowercase letters, digits, dots (.), underscores (_), and hyphens (-).
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address is verified. This parameter is required when specifying an email address. In most cases, set this to `true`.
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
   * The mobile phone number. It must be between 6 and 15 digits long.
   * 
   * @example
   * 156xxxxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Indicates whether the mobile phone number is verified. This parameter is required when specifying a mobile phone number. In most cases, set this to `true`.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The country code for the mobile phone number. Example: 86 for Chinese mainland. Do not include `00` or `+`. This parameter is required if you specify a mobile phone number.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The username. It must be no more than 256 characters and can contain letters, digits, and the special characters: _, ., @, and -.
   * 
   * @example
   * username_test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'CustomFields',
      displayName: 'DisplayName',
      email: 'Email',
      emailVerified: 'EmailVerified',
      instanceId: 'InstanceId',
      phoneNumber: 'PhoneNumber',
      phoneNumberVerified: 'PhoneNumberVerified',
      phoneRegion: 'PhoneRegion',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'array', 'itemType': UpdateUserRequestCustomFields },
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      instanceId: 'string',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

