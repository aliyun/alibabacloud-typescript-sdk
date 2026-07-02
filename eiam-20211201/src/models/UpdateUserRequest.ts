// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequestCustomFields extends $dara.Model {
  /**
   * @remarks
   * The identifier of the custom field. Create the custom field in advance. For more information, refer to the custom fields module in the console.
   * 
   * @example
   * nick_name
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the custom field. The value must comply with the property constraints of the corresponding custom field.
   * 
   * @example
   * test_value
   */
  fieldValue?: string;
  /**
   * @remarks
   * The operation type for the custom field. Valid values:
   * - add: adds a custom field value to the account.
   * - replace: replaces an existing custom field value of the account. If the custom field value does not exist, the operation is converted to an add operation.
   * - remove: removes the custom field value from the account.
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
   * The list of custom field objects.
   */
  customFields?: UpdateUserRequestCustomFields[];
  /**
   * @remarks
   * The display name of the account. The name can be up to 256 characters in length.
   * 
   * @example
   * test_name
   */
  displayName?: string;
  /**
   * @remarks
   * The email address. The prefix of the email address can contain uppercase letters, lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Specifies whether the email address is verified. This parameter is required if an email address is specified. If no special business requirements exist, set this parameter to true.
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
   * The phone number. The value must be 6 to 15 digits in length.
   * 
   * @example
   * 156xxxxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Specifies whether the phone number is verified as a trusted phone number. This parameter is required if a phone number is specified. If no special business requirements exist, set this parameter to true.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The phone region code. Example: 86 for the Chinese mainland, without the 00 or + prefix. This parameter is required if a phone number is specified.
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
   * The account name. The name can contain letters, digits, underscores (_), periods (.), at signs (@), and hyphens (-). The name can be up to 256 characters in length.
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

