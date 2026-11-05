// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoginProfileRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the Resource Access Management (RAM) user is required to enable multi-factor authentication (MFA). Valid values:
   * 
   * - true: Required. The Resource Access Management (RAM) user must attach an MFA device upon the next logon.
   * - false (default): Not required.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * The console logon password of the Resource Access Management (RAM) user. The password must meet the password strength requirements.
   * 
   * @example
   * mypassword
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether the Resource Access Management (RAM) user is required to reset the password upon the next logon. Valid values:
   * 
   * - true
   * - false (default)
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The status of console password logon. Valid values:
   * 
   * - Active (default): Enabled.
   * - Inactive: Disabled.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user.
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

