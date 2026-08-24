// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveVirusScanAdditionalListsRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of entry IDs to remove. At least one entry ID must be specified.
   * 
   * This parameter is required.
   */
  listIds?: string[];
  static names(): { [key: string]: string } {
    return {
      listIds: 'ListIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.listIds)) {
      $dara.Model.validateArray(this.listIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

