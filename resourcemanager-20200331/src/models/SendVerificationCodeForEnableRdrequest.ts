// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendVerificationCodeForEnableRDRequest extends $dara.Model {
  /**
   * @remarks
   * The secure phone number of the newly created management account. If you leave this parameter empty, the secure phone number of the current logon account is used.
   * 
   * Format: `<country code>-<phone number>`.
   * 
   * <props="intl">
   * > You cannot enter a phone number in the Chinese mainland in the `86-<phone number>` format.
   * 
   * <props="china">
   * > You can only enter a phone number in the Chinese mainland in the `86-<phone number>` format.
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

