// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageContactResponseBodyContact extends $dara.Model {
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
   * The time when the contact was created.
   * 
   * @example
   * 2023-03-27 17:19:21
   */
  createDate?: string;
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
   * The IDs of objects to which the contact is bound.
   */
  members?: string[];
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
   * @example
   * 86-139****1234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The status of the contact. Valid values:
   * 
   * *   Verifying
   * *   Active
   * *   Deleting
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The job title of the contact.
   * 
   * @example
   * TechnicalDirector
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      createDate: 'CreateDate',
      emailAddress: 'EmailAddress',
      members: 'Members',
      messageTypes: 'MessageTypes',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      createDate: 'string',
      emailAddress: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
      messageTypes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      phoneNumber: 'string',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    if(Array.isArray(this.messageTypes)) {
      $dara.Model.validateArray(this.messageTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the contact.
   */
  contact?: GetMessageContactResponseBodyContact;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: GetMessageContactResponseBodyContact,
      requestId: 'string',
    };
  }

  validate() {
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

