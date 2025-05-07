// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCrossRegionLogBackupFilesResponseBodyItemsItem } from "./DescribeCrossRegionLogBackupFilesResponseBodyItemsItem";


export class DescribeCrossRegionLogBackupFilesResponseBodyItems extends $dara.Model {
  item?: DescribeCrossRegionLogBackupFilesResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeCrossRegionLogBackupFilesResponseBodyItemsItem },
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

