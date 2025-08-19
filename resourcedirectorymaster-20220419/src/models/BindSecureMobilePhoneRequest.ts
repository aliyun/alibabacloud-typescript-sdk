// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindSecureMobilePhoneRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 138660628348****
   */
  accountId?: string;
  /**
   * @remarks
   * The mobile phone number that you want to bind to the member for security purposes.
   * 
   * The mobile phone number you specify must be the same as the mobile phone number that you specify when you call the [SendVerificationCodeForBindSecureMobilePhone](~~SendVerificationCodeForBindSecureMobilePhone~~) operation to obtain a verification code.
   * 
   * Specify the mobile phone number in the \\<Country code>-\\<Mobile phone number> format.
   * 
   * > Mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are not supported.
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
   * You can call the [SendVerificationCodeForBindSecureMobilePhone](~~SendVerificationCodeForBindSecureMobilePhone~~) operation to obtain the verification code.
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

