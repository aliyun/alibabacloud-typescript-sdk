// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelMessageContactUpdateRequest extends $dara.Model {
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
   * The email address of the contact.
   * 
   * @example
   * someone***@example.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * The mobile phone number of the contact.
   * 
   * Specify the mobile phone number in the `<Country code>-<Mobile phone number>` format.
   * 
   * @example
   * 86-139****1234
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      emailAddress: 'EmailAddress',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      emailAddress: 'string',
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

