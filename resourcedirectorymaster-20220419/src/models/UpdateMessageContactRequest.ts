// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMessageContactRequest extends $dara.Model {
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
   * After you specify an email address, you need to call [SendEmailVerificationForMessageContact](~~SendEmailVerificationForMessageContact~~) to send verification information to the email address. After the verification is passed, the email address takes effect.
   * 
   * @example
   * someone***@example.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * The types of messages received by the contact.
   */
  messageTypes?: string[];
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * tom
   */
  name?: string;
  /**
   * @remarks
   * The mobile phone number of the contact.
   * 
   * Specify the mobile phone number in the `<Country code>-<Mobile phone number>` format.
   * 
   * After you specify a mobile phone number, you need to call [SendPhoneVerificationForMessageContact](~~SendPhoneVerificationForMessageContact~~) to send verification information to the mobile phone number. After the verification is passed, the mobile phone number takes effect.
   * 
   * @example
   * 86-139****1234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The job title of the contact.
   * 
   * Valid values:
   * 
   * *   FinanceDirector
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   TechnicalDirector
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   MaintenanceDirector
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CEO
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   ProjectDirector
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Other
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * TechnicalDirector
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      emailAddress: 'EmailAddress',
      messageTypes: 'MessageTypes',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      emailAddress: 'string',
      messageTypes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      phoneNumber: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messageTypes)) {
      $dara.Model.validateArray(this.messageTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

