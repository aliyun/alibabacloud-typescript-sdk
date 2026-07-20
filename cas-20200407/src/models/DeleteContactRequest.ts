// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactRequest extends $dara.Model {
  /**
   * @remarks
   * The contact ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1352570
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

