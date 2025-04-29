// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnit } from "./DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnit";


export class DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnits extends $dara.Model {
  storageCapacityUnit?: DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnit[];
  static names(): { [key: string]: string } {
    return {
      storageCapacityUnit: 'StorageCapacityUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageCapacityUnit: { 'type': 'array', 'itemType': DescribeStorageCapacityUnitsResponseBodyStorageCapacityUnitsStorageCapacityUnit },
    };
  }

  validate() {
    if(Array.isArray(this.storageCapacityUnit)) {
      $dara.Model.validateArray(this.storageCapacityUnit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

