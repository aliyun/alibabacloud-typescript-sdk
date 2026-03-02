// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoginProfileResponseBodyLoginProfile extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the RAM user is required to enable MFA.
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
   * The status of the initial password. This password is set when a logon configuration is created or when console logon is re-enabled.
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
   * Indicates whether password-based logon for the console is enabled or disabled.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The time when the logon configuration was last updated.
   * 
   * @example
   * 2020-10-14T03:47:51Z
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

export class CreateLoginProfileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The logon information for the console.
   */
  loginProfile?: CreateLoginProfileResponseBodyLoginProfile;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29CB303C-1F05-43A6-A6BC-EBC5A797F8DB
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
      loginProfile: CreateLoginProfileResponseBodyLoginProfile,
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

