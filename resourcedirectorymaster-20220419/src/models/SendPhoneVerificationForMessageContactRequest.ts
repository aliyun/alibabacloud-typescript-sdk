// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendPhoneVerificationForMessageContactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The mobile phone number of the contact.
   * 
   * The value must be in the `<Country code>-<Mobile phone number>` format.
   * 
   * The specified mobile phone number must be the one you specify when you call the [AddMessageContact](~~AddMessageContact~~) operation.
   * 
   * @example
   * 86-139****1234
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
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

