// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStorageSetsResponseBodyStorageSetsStorageSetTags } from "./DescribeStorageSetsResponseBodyStorageSetsStorageSetTags";


export class DescribeStorageSetsResponseBodyStorageSetsStorageSet extends $dara.Model {
  /**
   * @remarks
   * The time when the storage set was created.
   * 
   * @example
   * 2019-06-01T00:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the storage set.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the region to which the storage set belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * @example
   * ss-bp1d6tsvznfghy7y****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The name of the storage set.
   * 
   * @example
   * testStorageSetName
   */
  storageSetName?: string;
  /**
   * @remarks
   * The maximum number of partitions supported by the storage set.
   * 
   * @example
   * 3
   */
  storageSetPartitionNumber?: number;
  tags?: DescribeStorageSetsResponseBodyStorageSetsStorageSetTags;
  /**
   * @remarks
   * The ID of the zone to which the storage set belongs.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      storageSetId: 'StorageSetId',
      storageSetName: 'StorageSetName',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      storageSetId: 'string',
      storageSetName: 'string',
      storageSetPartitionNumber: 'number',
      tags: DescribeStorageSetsResponseBodyStorageSetsStorageSetTags,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

