// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageContactsResponseBodyContacts extends $dara.Model {
  /**
   * @remarks
   * The time when the contact was bound to the objects.
   * 
   * @example
   * 2023-03-27 17:19:21
   */
  associatedDate?: string;
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
   * The time when the contact was added.
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
   * - Verifying
   * - Active
   * - Deleting
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
      associatedDate: 'AssociatedDate',
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
      associatedDate: 'string',
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

export class ListMessageContactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the contact was bound to the objects.
   */
  contacts?: ListMessageContactsResponseBodyContacts[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95060F1D-6990-4645-8920-A81D1BBFE992
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': ListMessageContactsResponseBodyContacts },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

