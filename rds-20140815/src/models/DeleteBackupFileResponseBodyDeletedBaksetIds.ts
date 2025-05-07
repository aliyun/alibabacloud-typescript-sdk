// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupFileResponseBodyDeletedBaksetIds extends $dara.Model {
  deletedBaksetIds?: number[];
  static names(): { [key: string]: string } {
    return {
      deletedBaksetIds: 'DeletedBaksetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletedBaksetIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.deletedBaksetIds)) {
      $dara.Model.validateArray(this.deletedBaksetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

