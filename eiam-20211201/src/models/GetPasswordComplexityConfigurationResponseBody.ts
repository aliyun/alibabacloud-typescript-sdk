// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfigurationPasswordComplexityRules extends $dara.Model {
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

export class GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfiguration extends $dara.Model {
  /**
   * @remarks
   * The password complexity rules.
   */
  passwordComplexityRules?: GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfigurationPasswordComplexityRules[];
  /**
   * @remarks
   * The minimum number of characters in a password.
   * 
   * @example
   * 3
   */
  passwordMinLength?: number;
  static names(): { [key: string]: string } {
    return {
      passwordComplexityRules: 'PasswordComplexityRules',
      passwordMinLength: 'PasswordMinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordComplexityRules: { 'type': 'array', 'itemType': GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfigurationPasswordComplexityRules },
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

export class GetPasswordComplexityConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The password complexity configurations.
   */
  passwordComplexityConfiguration?: GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfiguration;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passwordComplexityConfiguration: 'PasswordComplexityConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordComplexityConfiguration: GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.passwordComplexityConfiguration && typeof (this.passwordComplexityConfiguration as any).validate === 'function') {
      (this.passwordComplexityConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

