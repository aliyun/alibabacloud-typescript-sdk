// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginProfileResponseBodyLoginProfile extends $dara.Model {
  /**
   * @remarks
   * Indicates whether console logon is automatically disabled if the user is inactive. This feature is enabled by default and cannot be disabled.
   * 
   * @example
   * true
   */
  autoDisableLoginStatus?: string;
  /**
   * @remarks
   * The time when the RAM user last logged on to the console. The time is in UTC.
   * 
   * @example
   * 2020-10-14T07:25:25Z
   */
  lastLoginTime?: string;
  /**
   * @remarks
   * Indicates whether multi-factor authentication (MFA) is required for the user. Valid values:
   * 
   * - false: MFA is not required.
   * 
   * - true: MFA is required.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the RAM user must reset the password at the next logon. Valid values:
   * 
   * - false: The RAM user is not required to reset the password.
   * 
   * - true: The RAM user is required to reset the password.
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The status of the initial password. An initial password is the password that is configured when you create a logon profile or re-enable console logon.
   * 
   * Valid values
   * 
   * - "NotInitial": The password is not an initial password.
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
   * The status of console logon. Valid values:
   * 
   * - Active: Console logon is enabled.
   * 
   * - Inactive: Console logon is disabled.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The time when the logon profile was last updated. The time is in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2020-10-14T06:56:45Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      autoDisableLoginStatus: 'AutoDisableLoginStatus',
      lastLoginTime: 'LastLoginTime',
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
      lastLoginTime: 'string',
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

export class GetLoginProfileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The logon information for the console.
   */
  loginProfile?: GetLoginProfileResponseBodyLoginProfile;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E517F18B-632C-48FC-93F1-CDCBCC6F8444
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
      loginProfile: GetLoginProfileResponseBodyLoginProfile,
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

