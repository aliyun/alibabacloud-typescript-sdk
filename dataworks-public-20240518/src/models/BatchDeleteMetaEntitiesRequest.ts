// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteMetaEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of entity IDs to delete. A maximum of 10 IDs are supported. All entities in the same batch must be of the same entityType.
   * 
   * This parameter is required.
   */
  ids?: string[];
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

