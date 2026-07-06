// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPasswordPolicyResponseBodyPasswordPolicy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether logon is blocked after a password expires.
   * 
   * @example
   * false
   */
  hardExpire?: boolean;
  /**
   * @remarks
   * The validity period for initial passwords.
   * 
   * @example
   * 14
   */
  initialPasswordAge?: number;
  /**
   * @remarks
   * Indicates whether threat passwords are blocked when set using APIs.
   * 
   * @example
   * false
   */
  interceptRiskPasswordOnApi?: boolean;
  /**
   * @remarks
   * Maximum number of failed password attempts.
   * 
   * @example
   * 0
   */
  maxLoginAttemps?: number;
  /**
   * @remarks
   * The password validity period.
   * 
   * @example
   * 0
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * Minimum number of unique characters in a password.
   * 
   * @example
   * 0
   */
  minimumPasswordDifferentCharacter?: number;
  /**
   * @remarks
   * Minimum password length.
   * 
   * @example
   * 8
   */
  minimumPasswordLength?: number;
  /**
   * @remarks
   * Indicates whether passwords must not contain the user name.
   * 
   * @example
   * false
   */
  passwordNotContainUserName?: boolean;
  /**
   * @remarks
   * Prevents reuse of previous passwords.
   * 
   * @example
   * 0
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Indicates whether passwords must contain lowercase letters.
   * 
   * @example
   * false
   */
  requireLowercaseCharacters?: boolean;
  /**
   * @remarks
   * Indicates whether passwords must contain numbers.
   * 
   * @example
   * false
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Indicates whether passwords must contain special characters.
   * 
   * @example
   * false
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Indicates whether passwords must contain uppercase letters.
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

export class SetPasswordPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the password policy.
   */
  passwordPolicy?: SetPasswordPolicyResponseBodyPasswordPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FB5551F-B2ED-40D4-8392-1E4AC2384EFD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passwordPolicy: 'PasswordPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordPolicy: SetPasswordPolicyResponseBodyPasswordPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.passwordPolicy && typeof (this.passwordPolicy as any).validate === 'function') {
      (this.passwordPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

