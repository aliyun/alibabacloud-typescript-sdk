// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPasswordComplexityConfigurationRequestPasswordComplexityRules extends $dara.Model {
  /**
   * @remarks
   * The type of the password check. Valid values:
   * 
   * *   inclusion_upper_case: The password must contain uppercase letters.
   * *   inclusion_lower_case: The password must contain lowercase letters.
   * *   inclusion_special_case: The password must contain one or more of the following special characters: @ % + \\ / \\" ! # $ ^ ? : , ( ) { } [ ] ~ - _ .
   * *   inclusion_number: The password must contain digits.
   * *   exclusion_username: The password cannot contain a username.
   * *   exclusion_email: The password cannot contain an email prefix.
   * *   exclusion_phone_number: The password cannot contain a mobile number.
   * *   exclusion_display_name: The password cannot contain a display name.
   * 
   * @example
   * inclusion_upper_case
   */
  passwordCheckType?: string;
  static names(): { [key: string]: string } {
    return {
      passwordCheckType: 'PasswordCheckType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordCheckType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordComplexityConfigurationRequest extends $dara.Model {
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
   * The password complexity rules.
   */
  passwordComplexityRules?: SetPasswordComplexityConfigurationRequestPasswordComplexityRules[];
  /**
   * @remarks
   * The minimum number of characters in a password.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  passwordMinLength?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      passwordComplexityRules: 'PasswordComplexityRules',
      passwordMinLength: 'PasswordMinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      passwordComplexityRules: { 'type': 'array', 'itemType': SetPasswordComplexityConfigurationRequestPasswordComplexityRules },
      passwordMinLength: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.passwordComplexityRules)) {
      $dara.Model.validateArray(this.passwordComplexityRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

