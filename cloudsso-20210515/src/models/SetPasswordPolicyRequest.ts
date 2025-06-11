// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPasswordPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The number of password retries.
   * 
   * If you enter wrong passwords for the specified consecutive times, the account is locked for 1 hour.
   * 
   * Valid values: 0 to 32. The value 0 specifies that the number of password retries is not limited.
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
   * The minimum number of unique characters in a password.
   * 
   * The minimum value is 0, which specifies that the minimum number of unique characters in a password is not limited. The maximum value is the value of the `MinPasswordLength` parameter.
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
   * Specifies whether a password can contain the username. Valid value:
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
   * The previous N passwords cannot be reused. Valid values of N: 0 to 24. The value 0 specifies that all historical passwords can be reused.
   * 
   * >  Passwords that are generated before January 5, 2024 are not counted as historical passwords.
   * 
   * @example
   * 1
   */
  passwordReusePrevention?: number;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      maxLoginAttempts: 'MaxLoginAttempts',
      maxPasswordAge: 'MaxPasswordAge',
      minPasswordDifferentChars: 'MinPasswordDifferentChars',
      minPasswordLength: 'MinPasswordLength',
      passwordNotContainUsername: 'PasswordNotContainUsername',
      passwordReusePrevention: 'PasswordReusePrevention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      maxLoginAttempts: 'number',
      maxPasswordAge: 'number',
      minPasswordDifferentChars: 'number',
      minPasswordLength: 'number',
      passwordNotContainUsername: 'boolean',
      passwordReusePrevention: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

