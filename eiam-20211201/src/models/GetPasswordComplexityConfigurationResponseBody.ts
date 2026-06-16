// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfigurationPasswordComplexityRules extends $dara.Model {
  /**
   * @remarks
   * The password check type. Valid values:
   * 
   * - inclusion_upper_case: The password must contain uppercase letters.
   * 
   * - inclusion_lower_case: The password must contain lowercase letters.
   * 
   * - inclusion_special_case: The password must contain at least one of the following special characters: \\` @ % + \\ / \\" ! # $ ^ ? : , ( ) { } [ ] \\~ - _ . \\`.
   * 
   * - inclusion_number: The password must contain digits.
   * 
   * - exclusion_username: The password cannot contain the username.
   * 
   * - exclusion_email: The password cannot contain the email address.
   * 
   * - exclusion_phone_number: The password cannot contain the mobile number.
   * 
   * - exclusion_display_name: The password cannot contain the display name.
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
   * Indicates whether logon with a weak password is disabled.
   * 
   * @example
   * false
   */
  disabledWeakPasswordLogin?: boolean;
  /**
   * @remarks
   * The time when the weak password logon restriction takes effect.
   * 
   * @example
   * 1773383634936
   */
  disabledWeakPasswordLoginStartedAt?: number;
  /**
   * @remarks
   * The list of password complexity rules.
   */
  passwordComplexityRules?: GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfigurationPasswordComplexityRules[];
  /**
   * @remarks
   * The minimum password length.
   * 
   * @example
   * 3
   */
  passwordMinLength?: number;
  static names(): { [key: string]: string } {
    return {
      disabledWeakPasswordLogin: 'DisabledWeakPasswordLogin',
      disabledWeakPasswordLoginStartedAt: 'DisabledWeakPasswordLoginStartedAt',
      passwordComplexityRules: 'PasswordComplexityRules',
      passwordMinLength: 'PasswordMinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabledWeakPasswordLogin: 'boolean',
      disabledWeakPasswordLoginStartedAt: 'number',
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
   * The password complexity policy configuration.
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

