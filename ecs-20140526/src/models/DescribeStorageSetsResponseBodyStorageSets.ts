// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStorageSetsResponseBodyStorageSetsStorageSet } from "./DescribeStorageSetsResponseBodyStorageSetsStorageSet";


export class DescribeStorageSetsResponseBodyStorageSets extends $dara.Model {
  storageSet?: DescribeStorageSetsResponseBodyStorageSetsStorageSet[];
  static names(): { [key: string]: string } {
    return {
      storageSet: 'StorageSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageSet: { 'type': 'array', 'itemType': DescribeStorageSetsResponseBodyStorageSetsStorageSet },
    };
  }

  validate() {
    if(Array.isArray(this.storageSet)) {
      $dara.Model.validateArray(this.storageSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

