// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageTypeAvailableDefaultStorageType extends $dara.Model {
  storageName?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      storageName: 'StorageName',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageName: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

