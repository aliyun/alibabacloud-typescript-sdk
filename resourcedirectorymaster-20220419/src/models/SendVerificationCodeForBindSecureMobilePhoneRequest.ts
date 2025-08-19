// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendVerificationCodeForBindSecureMobilePhoneRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      secureMobilePhone: 'SecureMobilePhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      secureMobilePhone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

