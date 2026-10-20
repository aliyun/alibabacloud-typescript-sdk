// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertContactGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The list of alert contact group IDs.
   * 
   * This parameter is required.
   */
  contactGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      contactGroupIds: 'contact_group_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.contactGroupIds)) {
      $dara.Model.validateArray(this.contactGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

