// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem } from "./DescribeCrossRegionBackupDbinstanceResponseBodyItemsItem";


export class DescribeCrossRegionBackupDBInstanceResponseBodyItems extends $dara.Model {
  item?: DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

