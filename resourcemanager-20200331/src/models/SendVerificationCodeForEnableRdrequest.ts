// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendVerificationCodeForEnableRDRequest extends $dara.Model {
  /**
   * @remarks
   * The secure phone number of the new management account. If you leave this parameter empty, the secure phone number of the current logon account is used.
   * 
   * Format: `<Country code>-<Phone number>`.
   * 
   * <props="intl">
   * > Phone numbers in the `86-<Phone number>` format from the Chinese mainland are not supported.
   * 
   * <props="china">
   * > Only phone numbers in the `86-<Phone number>` format from the Chinese mainland are supported.
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

