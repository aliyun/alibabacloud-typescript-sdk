// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPasswordPolicyResponseBodyPasswordPolicy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a password expires. Valid values: `true` and `false`. Default value: `false`. If the parameter is unspecified, the default value false is returned.
   * 
   * *   If this parameter is set to `true`, the Alibaba Cloud account to which the RAM users belong must reset the password before the RAM users can log on to the Alibaba Cloud Management Console.
   * *   If this parameter is set to `false`, the RAM users can change the passwords after the passwords expire and then log on to the Alibaba Cloud Management Console.
   * 
   * @example
   * false
   */
  hardExpiry?: boolean;
  /**
   * @remarks
   * The maximum number of permitted logon attempts within one hour. The number of logon attempts is reset to zero if a RAM user changes the password.
   * 
   * @example
   * 5
   */
  maxLoginAttemps?: number;
  /**
   * @remarks
   * The number of days for which a password is valid. If you reset a password, the password validity period restarts. Default value: 0. The default value indicates that the password never expires.
   * 
   * @example
   * 0
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * The minimum number of characters in a password.
   * 
   * @example
   * 12
   */
  minimumPasswordLength?: number;
  /**
   * @remarks
   * The number of previous passwords that a RAM user is prevented from reusing. Default value: 0. The default value indicates that the RAM user can reuse previous passwords.
   * 
   * @example
   * 0
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Indicates whether a password must contain one or more lowercase letters.
   * 
   * @example
   * true
   */
  requireLowercaseCharacters?: boolean;
  /**
   * @remarks
   * Indicates whether a password must contain one or more digits.
   * 
   * @example
   * true
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Indicates whether a password must contain one or more special characters.
   * 
   * @example
   * true
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Indicates whether a password must contain one or more uppercase letters.
   * 
   * @example
   * true
   */
  requireUppercaseCharacters?: boolean;
  static names(): { [key: string]: string } {
    return {
      hardExpiry: 'HardExpiry',
      maxLoginAttemps: 'MaxLoginAttemps',
      maxPasswordAge: 'MaxPasswordAge',
      minimumPasswordLength: 'MinimumPasswordLength',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardExpiry: 'boolean',
      maxLoginAttemps: 'number',
      maxPasswordAge: 'number',
      minimumPasswordLength: 'number',
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

