// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoginProfileRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether a multi-factor authentication (MFA) device must be bound to the RAM user upon logon.
   * 
   * @example
   * true
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * The logon password of the RAM user. The password must meet the password strength requirements.
   * 
   * @example
   * mypassword
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether the RAM user has to change the password upon logon.
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
      MFABindRequired: 'MFABindRequired',
      password: 'Password',
      passwordResetRequired: 'PasswordResetRequired',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFABindRequired: 'boolean',
      password: 'string',
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

