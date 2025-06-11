// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPhoneMessageQrdlRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 9383883
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
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      phoneNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

