// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageContactsRequest extends $dara.Model {
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
   * The ID of the object to which the contact is bound. Valid values:
   * 
   * *   ID of the resource directory
   * *   ID of the folder
   * *   ID of the member
   * 
   * @example
   * fd-ZDNPiT****
   */
  member?: string;
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
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      member: 'Member',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      member: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

