// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * testId
   */
  contactId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'contactId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

