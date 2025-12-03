// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchUserRequestCustomFields extends $dara.Model {
  /**
   * @remarks
   * The name of the extended field. For more information about the type and valid values of the extended field, see the detailed description of the extended field in the IDaaS console.
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the extended field.
   * 
   * @example
   * test_value
   */
  fieldValue?: string;
  /**
   * @remarks
   * The operation to be performed on the field. Valid values:
   * 
   * *   add
   * *   replace If you leave the value of the extended field empty, the replace operation is converted to an add operation.
   * *   remove
   * 
   * @example
   * replace
   */
  operation?: string;
  /**
   * @remarks
   * The type of the operation. This parameter is deprecated. Replace it with operation.
   * 
   * @example
   * replace
   * 
   * @deprecated
   */
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      fieldValue: 'fieldValue',
      operation: 'operation',
      operator: 'operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
      operation: 'string',
      operator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchUserRequest extends $dara.Model {
  /**
   * @remarks
   * The extended fields of the account.
   */
  customFields?: PatchUserRequestCustomFields[];
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
   * The email address.
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Specifies whether the email address is verified. This field is required if an email address is specified. If you have no special requirement, set this parameter to true.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The mobile number.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Specifies whether the mobile number is verified. This field is required if a mobile number is specified. If you have no special requirement, set this parameter to true.
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
   * The name of the account.
   * 
   * @example
   * name001
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'customFields',
      displayName: 'displayName',
      email: 'email',
      emailVerified: 'emailVerified',
      phoneNumber: 'phoneNumber',
      phoneNumberVerified: 'phoneNumberVerified',
      phoneRegion: 'phoneRegion',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'array', 'itemType': PatchUserRequestCustomFields },
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
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

