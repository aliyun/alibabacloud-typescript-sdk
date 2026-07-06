// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPasswordPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether logon is blocked after a password expires.
   * 
   * - true: After a password expires, the RAM user cannot log on to the console. An Alibaba Cloud account owner or a RAM administrator must reset the password before the RAM user can log on.
   * 
   * - false (default): After a password expires, the RAM user can change the password and then log on.
   * 
   * @example
   * false
   */
  hardExpire?: boolean;
  /**
   * @remarks
   * Validity period for initial passwords. Initial passwords apply to newly created RAM users or users whose console logon settings are re-enabled.
   * 
   * Valid values: 0 to 90. Unit: days.
   * 
   * Default value: 14.
   * 
   * A value of 0 disables this constraint.
   * 
   * @example
   * 14
   */
  initialPasswordAge?: number;
  /**
   * @remarks
   * Specifies whether threat passwords are blocked when set using APIs.
   * 
   * Default value: false
   * 
   * - true
   * 
   * - false (default)
   * 
   * @example
   * false
   */
  interceptRiskPasswordOnApi?: boolean;
  /**
   * @remarks
   * Maximum number of failed password attempts. After the specified number of consecutive incorrect password attempts, the account is locked for one hour.
   * 
   * Valid values: 0 to 32.
   * 
   * Default value: 0, which disables this constraint.
   * 
   * @example
   * 0
   */
  maxLoginAttemps?: number;
  /**
   * @remarks
   * Password validity period.
   * 
   * Valid values: 0 to 1095. Unit: days.
   * 
   * Default value: 0, which means passwords never expire.
   * 
   * @example
   * 0
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * Minimum number of unique characters in a password.
   * 
   * Valid values: 0 to 8.
   * 
   * Default value: 0, which imposes no restriction.
   * 
   * @example
   * 0
   */
  minimumPasswordDifferentCharacter?: number;
  /**
   * @remarks
   * Minimum password length.
   * 
   * Valid values: 8 to 32.
   * 
   * Default value: 8.
   * 
   * @example
   * 8
   */
  minimumPasswordLength?: number;
  /**
   * @remarks
   * Specifies whether passwords must not contain the user name.
   * 
   * - true
   * 
   * - false (default)
   * 
   * @example
   * false
   */
  passwordNotContainUserName?: boolean;
  /**
   * @remarks
   * Prevents reuse of previous passwords.
   * 
   * Valid values: 0 to 24. This value specifies how many previous passwords are blocked from reuse.
   * 
   * Default value: 0, which disables this constraint.
   * 
   * @example
   * 0
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Specifies whether passwords must contain lowercase letters.
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
   * Specifies whether passwords must contain numbers.
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
   * Specifies whether passwords must contain special characters.
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
   * Specifies whether passwords must contain uppercase letters.
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

