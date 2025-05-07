// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossRegionBackupsResponseBodyItemsItemRestoreRegions extends $dara.Model {
  restoreRegion?: string[];
  static names(): { [key: string]: string } {
    return {
      restoreRegion: 'RestoreRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreRegion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.restoreRegion)) {
      $dara.Model.validateArray(this.restoreRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

