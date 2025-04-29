// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStorageSetDetailsResponseBodyDisksDisk extends $dara.Model {
  /**
   * @remarks
   * The category of the disk or Shared Block Storage device.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The time when the disk or Shared Block Storage device was created.
   * 
   * @example
   * 2019-06-01T00:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the disk or Shared Block Storage device.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk or Shared Block Storage device.
   * 
   * @example
   * testDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The region to which the disk or Shared Block Storage device belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The number of partitions in the storage set.
   * 
   * @example
   * 3
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The zone to which the disk or Shared Block Storage device belongs.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      creationTime: 'CreationTime',
      diskId: 'DiskId',
      diskName: 'DiskName',
      regionId: 'RegionId',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      creationTime: 'string',
      diskId: 'string',
      diskName: 'string',
      regionId: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

