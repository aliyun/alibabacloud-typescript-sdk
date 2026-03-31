// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginProfileResponseBodyLoginProfile extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * Indicates whether a multi-factor authentication (MFA) device must be bound to the RAM user.
   * 
   * @example
   * true
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the RAM user must change the password upon logon.
   * 
   * @example
   * true
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      MFABindRequired: 'MFABindRequired',
      passwordResetRequired: 'PasswordResetRequired',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      MFABindRequired: 'boolean',
      passwordResetRequired: 'boolean',
      userName: 'string',
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
   * The logon configurations of the RAM user.
   */
  loginProfile?: GetLoginProfileResponseBodyLoginProfile;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

