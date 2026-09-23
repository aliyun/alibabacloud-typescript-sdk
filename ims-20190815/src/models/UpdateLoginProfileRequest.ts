// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoginProfileRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the Resource Access Management (RAM) user is required to enable multi-factor authentication (MFA). Valid values:
   * 
   * - true: MFA is required. The RAM user must attach an MFA device at the next logon.
   * - false: MFA is not required.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * The new console logon password of the Resource Access Management (RAM) user.
   * 
   * The password must meet the password strength requirements.
   * 
   * @example
   * mypassword
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether the Resource Access Management (RAM) user is required to reset the password at the next logon. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * Enables or disables console password logon. Valid values:
   * 
   * - Active: enables console password logon.
   * - Inactive: disables console password logon.
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

