// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPasswordPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable logon after the password expires. Valid values:
   * 
   * *   true: After the password expires, you cannot use the password to log on to the console. You can log on to the console only after you reset the password by using your Alibaba Cloud account or as a RAM user that has administrative rights.
   * *   false: After the password expires, you can change the password to log on to the console. This is the default value.
   * 
   * @example
   * false
   */
  hardExpire?: boolean;
  initialPasswordAge?: number;
  /**
   * @remarks
   * The maximum number of password retries. If you enter the wrong passwords for the specified consecutive times, the account is locked for one hour.
   * 
   * Valid values: 0 to 32.
   * 
   * The default value is 0, which indicates that the password retries are not limited.
   * 
   * @example
   * 0
   */
  maxLoginAttemps?: number;
  /**
   * @remarks
   * The validity period of the password.
   * 
   * Valid values: 0 to 1095. Unit: days.
   * 
   * The default value is 0, which indicates that the password never expires.
   * 
   * @example
   * 0
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * The minimum number of unique characters in the password.
   * 
   * Valid values: 0 to 8.
   * 
   * The default value is 0, which indicates that no limits are imposed on the number of unique characters in a password.
   * 
   * @example
   * 0
   */
  minimumPasswordDifferentCharacter?: number;
  /**
   * @remarks
   * The minimum number of characters in the password.
   * 
   * Valid values: 8 to 32. Default value: 8.
   * 
   * @example
   * 8
   */
  minimumPasswordLength?: number;
  /**
   * @remarks
   * Specifies whether to exclude the username from the password. Valid values:
   * 
   * *   true: A password cannot contain the username.
   * *   false: A password can contain the username. This is the default value.
   * 
   * @example
   * false
   */
  passwordNotContainUserName?: boolean;
  /**
   * @remarks
   * The policy for password history check.
   * 
   * The previous N passwords cannot be reused. Valid values of N: 0 to 24.
   * 
   * The default value is 0, which indicates that RAM users can reuse previous passwords.
   * 
   * @example
   * 0
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Specifies whether the password must contain lowercase letters. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  requireLowercaseCharacters?: boolean;
  /**
   * @remarks
   * Specifies whether the password must contain digits. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Specifies whether the password must contain special characters. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Specifies whether the password must contain uppercase letters. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  requireUppercaseCharacters?: boolean;
  static names(): { [key: string]: string } {
    return {
      hardExpire: 'HardExpire',
      initialPasswordAge: 'InitialPasswordAge',
      maxLoginAttemps: 'MaxLoginAttemps',
      maxPasswordAge: 'MaxPasswordAge',
      minimumPasswordDifferentCharacter: 'MinimumPasswordDifferentCharacter',
      minimumPasswordLength: 'MinimumPasswordLength',
      passwordNotContainUserName: 'PasswordNotContainUserName',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardExpire: 'boolean',
      initialPasswordAge: 'number',
      maxLoginAttemps: 'number',
      maxPasswordAge: 'number',
      minimumPasswordDifferentCharacter: 'number',
      minimumPasswordLength: 'number',
      passwordNotContainUserName: 'boolean',
      passwordReusePrevention: 'number',
      requireLowercaseCharacters: 'boolean',
      requireNumbers: 'boolean',
      requireSymbols: 'boolean',
      requireUppercaseCharacters: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

