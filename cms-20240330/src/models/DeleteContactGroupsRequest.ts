// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroupIds: 'contactGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIds: { 'type': 'array', 'itemType': 'string' },
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

