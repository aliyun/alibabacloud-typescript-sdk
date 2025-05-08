// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableStorageTypeAvailableSpecialStorageType extends $dara.Model {
  storageType?: string;
  storageName?: string;
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      storageType: 'StorageType',
      storageName: 'StorageName',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageType: 'string',
      storageName: 'string',
      ensRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

