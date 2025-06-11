// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPasswordPolicyResponseBodyPasswordPolicy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to disable logon after a password expires. Valid values:
   * 
   * *   true: disables logon after a password expires.
   * *   false: does not disable logon after a password expires.
   * 
   * @example
   * true
   */
  hardExpire?: boolean;
  /**
   * @remarks
   * The number of password retries.
   * 
   * If wrong passwords are entered for the specified consecutive times, the account is locked for 1 hour.
   * 
   * Valid values: 0 to 32. The value 0 indicates that the number of password retries is not limited.
   * 
   * @example
   * 5
   */
  maxLoginAttempts?: number;
  /**
   * @remarks
   * The validity period of a password.
   * 
   * Valid values: 1 to 120. Unit: days.
   * 
   * @example
   * 90
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * The maximum password length.
   * 
   * @example
   * 32
   */
  maxPasswordLength?: number;
  /**
   * @remarks
   * The minimum number of different characters in a password.
   * 
   * The minimum value is 0, which indicates that the minimum number of different characters in a password is not limited. The maximum value is the value of the `MinPasswordLength` parameter.
   * 
   * @example
   * 8
   */
  minPasswordDifferentChars?: number;
  /**
   * @remarks
   * The minimum password length.
   * 
   * Valid values: 8 to 32 characters.
   * 
   * @example
   * 8
   */
  minPasswordLength?: number;
  /**
   * @remarks
   * Indicates whether to exclude the username from the password. Valid values:
   * 
   * *   true: A password cannot contain the username.
   * *   false: A password can contain the username.
   * 
   * @example
   * true
   */
  passwordNotContainUsername?: boolean;
  /**
   * @remarks
   * The policy for password history check.
   * 
   * The previous N passwords cannot be reused. Valid values of N: 0 to 24. The value 0 indicates that all historical passwords can be reused.
   * 
   * >  Passwords that are generated before January 5, 2024 are not counted as historical passwords.
   * 
   * @example
   * 1
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Indicates whether lowercase letters are required in a password. Valid values:
   * 
   * *   true: Lowercase letters are required in a password.
   * *   false: Lowercase letters are not required in a password.
   * 
   * @example
   * true
   */
  requireLowerCaseChars?: boolean;
  /**
   * @remarks
   * Indicates whether digits are required in a password. Valid values:
   * 
   * *   true: Digits are required in a password.
   * *   false: Digits are not required in a password.
   * 
   * @example
   * true
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Indicates whether special characters are required in a password. Valid values:
   * 
   * *   true: Special characters are required in a password.
   * *   false: Special characters are not required in a password.
   * 
   * @example
   * true
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Indicates whether uppercase letters are required in a password. Valid values:
   * 
   * *   true: Uppercase letters are required in a password.
   * *   false: Uppercase letters are not required in a password.
   * 
   * @example
   * true
   */
  requireUpperCaseChars?: boolean;
  static names(): { [key: string]: string } {
    return {
      hardExpire: 'HardExpire',
      maxLoginAttempts: 'MaxLoginAttempts',
      maxPasswordAge: 'MaxPasswordAge',
      maxPasswordLength: 'MaxPasswordLength',
      minPasswordDifferentChars: 'MinPasswordDifferentChars',
      minPasswordLength: 'MinPasswordLength',
      passwordNotContainUsername: 'PasswordNotContainUsername',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireLowerCaseChars: 'RequireLowerCaseChars',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      requireUpperCaseChars: 'RequireUpperCaseChars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardExpire: 'boolean',
      maxLoginAttempts: 'number',
      maxPasswordAge: 'number',
      maxPasswordLength: 'number',
      minPasswordDifferentChars: 'number',
      minPasswordLength: 'number',
      passwordNotContainUsername: 'boolean',
      passwordReusePrevention: 'number',
      requireLowerCaseChars: 'boolean',
      requireNumbers: 'boolean',
      requireSymbols: 'boolean',
      requireUpperCaseChars: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

