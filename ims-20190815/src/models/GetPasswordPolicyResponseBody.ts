// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPasswordPolicyResponseBodyPasswordPolicy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether logon is restricted after the password expires.
   * 
   * @example
   * false
   */
  hardExpire?: boolean;
  /**
   * @remarks
   * The validity period of the initial password.
   * 
   * @example
   * 14
   */
  initialPasswordAge?: number;
  /**
   * @remarks
   * Indicates whether to block threat passwords when a password is set using OpenAPI.
   * 
   * Valid values:
   * 
   * - true: Threat passwords are blocked when you set a password using OpenAPI.
   * 
   * - false: Threat passwords are not blocked when you set a password using OpenAPI.
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  interceptRiskPasswordOnApi?: boolean;
  /**
   * @remarks
   * The maximum number of logon attempts.
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
   * The minimum number of different characters in the password.
   * 
   * @example
   * 0
   */
  minimumPasswordDifferentCharacter?: number;
  /**
   * @remarks
   * The minimum password length.
   * 
   * @example
   * 8
   */
  minimumPasswordLength?: number;
  /**
   * @remarks
   * Indicates whether the password must not contain the username.
   * 
   * @example
   * false
   */
  passwordNotContainUserName?: boolean;
  /**
   * @remarks
   * The password reuse prevention policy.
   * 
   * @example
   * 0
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Indicates whether the password must contain lowercase letters.
   * 
   * @example
   * false
   */
  requireLowercaseCharacters?: boolean;
  /**
   * @remarks
   * Indicates whether the password must contain numbers.
   * 
   * @example
   * false
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Indicates whether the password must contain symbols.
   * 
   * @example
   * false
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Indicates whether the password must contain uppercase letters.
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

export class GetPasswordPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The password strength policy information.
   */
  passwordPolicy?: GetPasswordPolicyResponseBodyPasswordPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDAA8408-E67C-428B-BFF0-1B2AC05C9610
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
      passwordPolicy: GetPasswordPolicyResponseBodyPasswordPolicy,
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

