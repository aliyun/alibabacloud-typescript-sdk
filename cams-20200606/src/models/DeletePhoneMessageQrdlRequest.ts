// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePhoneMessageQrdlRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 883873773
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The phone number. Add the country code before the phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * QR code encoding.
   * 
   * This parameter is required.
   * 
   * @example
   * 29338838
   */
  qrdlCode?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      phoneNumber: 'PhoneNumber',
      qrdlCode: 'QrdlCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      phoneNumber: 'string',
      qrdlCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

