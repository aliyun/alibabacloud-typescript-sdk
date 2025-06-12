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

