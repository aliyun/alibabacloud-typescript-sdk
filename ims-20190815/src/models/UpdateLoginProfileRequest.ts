// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoginProfileRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enforce multi-factor authentication (MFA) for the RAM user. Valid values:
   * 
   * - true: Enforce MFA. The RAM user must attach an MFA device at the next logon.
   * 
   * - false: Do not enforce MFA.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * The new console logon password for the RAM user.
   * 
   * The password must meet the password strength requirements.
   * 
   * @example
   * mypassword
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether the RAM user must reset the password at the next logon. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * Specifies whether to enable or disable password-based logon to the console. Valid values:
   * 
   * - Active: Enabled.
   * 
   * - Inactive: Disabled.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      MFABindRequired: 'MFABindRequired',
      password: 'Password',
      passwordResetRequired: 'PasswordResetRequired',
      status: 'Status',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFABindRequired: 'boolean',
      password: 'string',
      passwordResetRequired: 'boolean',
      status: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

