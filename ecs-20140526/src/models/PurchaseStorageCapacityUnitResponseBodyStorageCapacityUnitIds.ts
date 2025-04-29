// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseStorageCapacityUnitResponseBodyStorageCapacityUnitIds extends $dara.Model {
  storageCapacityUnitId?: string[];
  static names(): { [key: string]: string } {
    return {
      storageCapacityUnitId: 'StorageCapacityUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageCapacityUnitId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.storageCapacityUnitId)) {
      $dara.Model.validateArray(this.storageCapacityUnitId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

