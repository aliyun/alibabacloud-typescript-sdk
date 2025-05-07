// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCrossBackupMetaListResponseBodyItemsMeta } from "./DescribeCrossBackupMetaListResponseBodyItemsMeta";


export class DescribeCrossBackupMetaListResponseBodyItems extends $dara.Model {
  meta?: DescribeCrossBackupMetaListResponseBodyItemsMeta[];
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'array', 'itemType': DescribeCrossBackupMetaListResponseBodyItemsMeta },
    };
  }

  validate() {
    if(Array.isArray(this.meta)) {
      $dara.Model.validateArray(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

