// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the contacts.
   */
  contactIds?: string[];
  static names(): { [key: string]: string } {
    return {
      contactIds: 'contactIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactIds)) {
      $dara.Model.validateArray(this.contactIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

