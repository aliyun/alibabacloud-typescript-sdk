// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMessageContactResponseBodyContact extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      createDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMessageContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the contact.
   */
  contact?: AddMessageContactResponseBodyContact;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2DFCE4C9-04A9-4C83-BB14-FE791275EC53
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
      contact: AddMessageContactResponseBodyContact,
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

