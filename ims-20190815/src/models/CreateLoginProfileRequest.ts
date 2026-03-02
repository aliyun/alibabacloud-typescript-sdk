// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoginProfileRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the RAM user must enable multi-factor authentication (MFA). Valid values:
   * 
   * - true: MFA is required. The RAM user must bind an MFA device at the next logon.
   * 
   * - false (default): MFA is not required.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * The logon password for the RAM user.
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
   * - false (default)
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * Specifies whether to enable password-based logon for the console. Valid values:
   * 
   * - Active (default): Enables logon.
   * 
   * - Inactive: Disables logon.
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

