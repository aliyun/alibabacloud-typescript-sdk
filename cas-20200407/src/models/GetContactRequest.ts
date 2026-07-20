// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactRequest extends $dara.Model {
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * 1397591
   */
  contactId?: number;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

