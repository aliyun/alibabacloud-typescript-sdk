// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPasswordPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to prevent a RAM user from logging on after the password expires. Valid values:
   * 
   * - true: After the password expires, the RAM user cannot log on to the console. The password must be reset by the Alibaba Cloud account or a RAM user with administrative permissions before the RAM user can log on.
   * 
   * - false (default): After the password expires, the RAM user can change the password and then log on.
   * 
   * @example
   * false
   */
  hardExpire?: boolean;
  /**
   * @remarks
   * The validity period of an initial password. An initial password is the password that is set when you create a RAM user or re-enable console logon.
   * 
   * Valid values: 0 to 90. Unit: days.
   * 
   * Default value: 14.
   * 
   * A value of 0 disables this feature.
   * 
   * @example
   * 14
   */
  initialPasswordAge?: number;
  interceptRiskPasswordOnApi?: boolean;
  /**
   * @remarks
   * The maximum number of consecutive logon failures that are allowed. If the number of failures is reached, the account is locked for one hour.
   * 
   * Valid values: 0 to 32.
   * 
   * Default value: 0. A value of 0 disables this feature.
   * 
   * @example
   * 0
   */
  maxLoginAttemps?: number;
  /**
   * @remarks
   * The validity period of a password.
   * 
   * Valid values: 0 to 1095. Unit: days.
   * 
   * Default value: 0. A value of 0 indicates that the password never expires.
   * 
   * @example
   * 0
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * The minimum number of unique characters in a password.
   * 
   * Valid values: 0 to 8.
   * 
   * Default value: 0. A value of 0 indicates that no limit is imposed on the number of unique characters.
   * 
   * @example
   * 0
   */
  minimumPasswordDifferentCharacter?: number;
  /**
   * @remarks
   * The minimum length of the password.
   * 
   * Valid values: 8 to 32. Default value: 8.
   * 
   * @example
   * 8
   */
  minimumPasswordLength?: number;
  /**
   * @remarks
   * Specifies whether the password can contain the username. Valid values:
   * 
   * - true: The password cannot contain the username.
   * 
   * - false (default): The password can contain the username.
   * 
   * @example
   * false
   */
  passwordNotContainUserName?: boolean;
  /**
   * @remarks
   * The number of previous passwords that cannot be reused.
   * 
   * Valid values: 0 to 24.
   * 
   * Default value: 0. A value of 0 disables this feature.
   * 
   * @example
   * 0
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Specifies whether the password must contain lowercase letters. Valid values:
   * 
   * - true
   * 
   * - false (default)
   * 
   * @example
   * false
   */
  requireLowercaseCharacters?: boolean;
  /**
   * @remarks
   * Specifies whether the password must contain digits. Valid values:
   * 
   * - true
   * 
   * - false (default)
   * 
   * @example
   * false
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Specifies whether the password must contain symbols. Valid values:
   * 
   * - true
   * 
   * - false (default)
   * 
   * @example
   * false
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Specifies whether the password must contain uppercase letters. Valid values:
   * 
   * - true
   * 
   * - false (default)
   * 
   * @example
   * false
   */
  requireUppercaseCharacters?: boolean;
  static names(): { [key: string]: string } {
    return {
      hardExpire: 'HardExpire',
      initialPasswordAge: 'InitialPasswordAge',
      interceptRiskPasswordOnApi: 'InterceptRiskPasswordOnApi',
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
      interceptRiskPasswordOnApi: 'boolean',
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

