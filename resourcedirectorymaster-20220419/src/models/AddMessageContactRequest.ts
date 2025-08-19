// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMessageContactRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the contact.
   * 
   * After you specify an email address, you need to call [SendEmailVerificationForMessageContact](~~SendEmailVerificationForMessageContact~~) to send verification information to the email address. After the verification is passed, the email address takes effect.
   * 
   * This parameter is required.
   * 
   * @example
   * someone***@example.com
   */
  emailAddress?: string;
  /**
   * @remarks
   * The types of messages received by the contact.
   * 
   * This parameter is required.
   */
  messageTypes?: string[];
  /**
   * @remarks
   * The name of the contact.
   * 
   * The name must be unique in your resource directory.
   * 
   * The name must be 2 to 12 characters in length and can contain only letters.
   * 
   * This parameter is required.
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
   * > Only mobile phone numbers in the `86-<Mobile phone number>` format in the Chinese mainland are supported.
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
   * This parameter is required.
   * 
   * @example
   * TechnicalDirector
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      emailAddress: 'EmailAddress',
      messageTypes: 'MessageTypes',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

