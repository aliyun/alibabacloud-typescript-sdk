// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetVerificationInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The email address.
   * 
   * > This parameter is required when `VerifyType` is set to `email`.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * > This parameter is required when `VerifyType` is set to `sms`.
   * 
   * @example
   * 86-13900001234
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  /**
   * @remarks
   * The multi-factor authentication method. Valid values:
   * 
   * - sms: secure phone
   * - email: security email address
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

