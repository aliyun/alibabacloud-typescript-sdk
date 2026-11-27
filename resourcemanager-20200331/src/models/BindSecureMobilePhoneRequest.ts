// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindSecureMobilePhoneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 138660628348****
   */
  accountId?: string;
  /**
   * @remarks
   * The secure secure phone number.
   * 
   * The secure phone number must be the same as the one specified when you call the [SendVerificationCodeForBindSecureMobilePhone](https://help.aliyun.com/document_detail/372556.html) operation to obtain the verification code.
   * 
   * Format: `<Country code>-<Secure phone number>`.
   * 
   * <props="china">
   * > Only secure phone numbers in the Chinese mainland in the `86-<Secure phone number>` format are supported.
   * 
   * 
   * <props="intl">
   * > Secure phone numbers in the Chinese mainland in the `86-<Secure phone number>` format are not supported.
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
   * You can call the [SendVerificationCodeForBindSecureMobilePhone](https://help.aliyun.com/document_detail/372556.html) operation to obtain the verification code.
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

