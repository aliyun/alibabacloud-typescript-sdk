// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendEmailVerificationForMessageContactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-5gsZAGt***PGduDF
   */
  contactId?: string;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * The specified email address must be the one you specify when you call [AddMessageContact](~~AddMessageContact~~).
   * 
   * @example
   * someone***@example.com
   */
  emailAddress?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      emailAddress: 'EmailAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      emailAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

