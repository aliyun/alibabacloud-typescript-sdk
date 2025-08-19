// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendVerificationCodeForEnableRDRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number that is bound to the newly created account. If you leave this parameter empty, the mobile phone number that is bound to the current account is used.
   * 
   * Specify the mobile phone number in the `<Country code>-<Mobile phone number>` format.
   * 
   * > Mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are not supported.
   * 
   * @example
   * xx-13900001234
   */
  secureMobilePhone?: string;
  static names(): { [key: string]: string } {
    return {
      secureMobilePhone: 'SecureMobilePhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

