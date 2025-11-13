// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCheckItemRequest extends $dara.Model {
  /**
   * @remarks
   * List of check item IDs.
   * 
   * This parameter is required.
   */
  checkIds?: number[];
  static names(): { [key: string]: string } {
    return {
      checkIds: 'CheckIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

