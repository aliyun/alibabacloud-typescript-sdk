// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertContactRequest extends $dara.Model {
  /**
   * @remarks
   * The alert contact IDs to delete.
   * 
   * This parameter is required.
   */
  contactIds?: number[];
  static names(): { [key: string]: string } {
    return {
      contactIds: 'contact_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: { 'type': 'array', 'itemType': 'number' },
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

