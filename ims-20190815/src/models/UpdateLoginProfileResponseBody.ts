// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoginProfileResponseBodyLoginProfile extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to automatically disable console logon for an inactive account. This feature is enabled by default and cannot be disabled.
   * 
   * @example
   * true
   */
  autoDisableLoginStatus?: string;
  /**
   * @remarks
   * Indicates whether MFA is enforced for the user.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the RAM user must reset the password at the next logon.
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The status of the initial password. An initial password is the one set when a logon profile is created or console logon is re-enabled.
   * 
   * Valid values:
   * 
   * - "NotInitial": Not an initial password.
   * 
   * - "InitialValid": The initial password is valid.
   * 
   * - "InitialExpired": The initial password has expired.
   * 
   * @example
   * NotInitial
   */
  passwordStatus?: string;
  /**
   * @remarks
   * Specifies whether password logon to the console is enabled or disabled.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The time when the logon profile was updated.
   * 
   * @example
   * 2020-10-14T07:48:41Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
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

