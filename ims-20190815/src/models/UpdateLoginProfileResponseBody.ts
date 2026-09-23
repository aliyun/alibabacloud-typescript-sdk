// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoginProfileResponseBodyLoginProfile extends $dara.Model {
  /**
   * @remarks
   * Indicates whether console logon is automatically disabled when the idle disable conditions are met. This feature is enabled by default and cannot be disabled.
   * 
   * @example
   * true
   */
  autoDisableLoginStatus?: string;
  /**
   * @remarks
   * Indicates whether the user is required to enable multi-factor authentication (MFA).
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the Resource Access Management (RAM) user is required to reset the password at the next logon.
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The status of the initial password. The initial password refers to the password that is set when console logon is newly created or re-enabled.
   * 
   * Valid values:
   * - NotInitial: The password is not an initial password.
   * - InitialValid: The initial password is valid.
   * - InitialExpired: The initial password has expired.
   * 
   * @example
   * NotInitial
   */
  passwordStatus?: string;
  /**
   * @remarks
   * Indicates whether console password logon is enabled or disabled.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * Format: RFC 3339 (UTC). Example: 2020-10-14T07:48:41Z.
   * 
   * @example
   * 2020-10-14T07:48:41Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user.
   * 
   * @example
   * test@example11.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      autoDisableLoginStatus: 'AutoDisableLoginStatus',
      MFABindRequired: 'MFABindRequired',
      passwordResetRequired: 'PasswordResetRequired',
      passwordStatus: 'PasswordStatus',
      status: 'Status',
      updateDate: 'UpdateDate',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDisableLoginStatus: 'string',
      MFABindRequired: 'boolean',
      passwordResetRequired: 'boolean',
      passwordStatus: 'string',
      status: 'string',
      updateDate: 'string',
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

export class UpdateLoginProfileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The console logon information.
   */
  loginProfile?: UpdateLoginProfileResponseBodyLoginProfile;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCDB6A7F-2199-41D9-B577-4FA536A5ADE1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginProfile: 'LoginProfile',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginProfile: UpdateLoginProfileResponseBodyLoginProfile,
      requestId: 'string',
    };
  }

  validate() {
    if(this.loginProfile && typeof (this.loginProfile as any).validate === 'function') {
      (this.loginProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

