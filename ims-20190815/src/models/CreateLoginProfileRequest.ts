// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoginProfileRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcefully enable multi-factor authentication (MFA) for the RAM user. Valid values:
   * 
   * *   true: forcefully enables MFA for the RAM user. The RAM user must bind an MFA device upon the next logon.
   * *   false (default): does not forcefully enable MFA for the RAM user.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * The password that the RAM user uses to log on to the console.
   * 
   * The password must meet the complexity requirements.
   * 
   * @example
   * mypassword
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether the RAM user is required to reset the password upon the next logon. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * Specifies whether to enable password-based logons to the console. Valid values:
   * 
   * *   Active: Password-based logon is enabled. This is the default value.
   * *   Inactive: Password-based logon is disabled.
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

