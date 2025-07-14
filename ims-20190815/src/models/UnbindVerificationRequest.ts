// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * The email address.
   * 
   * >  If you set `VerifyType` to `email`, you must specify this parameter.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * >  If you set `VerifyType` to `sms`, you must specify this parameter.
   * 
   * @example
   * 86-13900001234
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  /**
   * @remarks
   * The multi-factor authentication (MFA) method. Valid values:
   * 
   * *   sms: mobile phone.
   * *   email: email.
   * 
   * @example
   * sms
   */
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      mobilePhone: 'MobilePhone',
      userPrincipalName: 'UserPrincipalName',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      mobilePhone: 'string',
      userPrincipalName: 'string',
      verifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

