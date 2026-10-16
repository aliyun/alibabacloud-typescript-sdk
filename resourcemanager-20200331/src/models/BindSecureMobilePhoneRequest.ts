// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindSecureMobilePhoneRequest extends $dara.Model {
  /**
   * @remarks
   * The member ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 138660628348****
   */
  accountId?: string;
  /**
   * @remarks
   * The secure phone number.
   * 
   * The phone number must be the same as the one that you specified when you called [SendVerificationCodeForBindSecureMobilePhone](https://help.aliyun.com/document_detail/372556.html) to authenticate and obtain the verification code.
   * 
   * Format: <Country code>-<Phone number>.
   * 
   * <props="china">
   * > Only the Chinese mainland phone numbers in the `86-<Phone number>` format are supported.
   * 
   * 
   * <props="intl">
   * > The Chinese mainland phone numbers in the `86-<Phone number>` format are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * xx-13900001234
   */
  secureMobilePhone?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * You can call [SendVerificationCodeForBindSecureMobilePhone](https://help.aliyun.com/document_detail/372556.html) to obtain the verification code.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  verificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      secureMobilePhone: 'SecureMobilePhone',
      verificationCode: 'VerificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      secureMobilePhone: 'string',
      verificationCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

