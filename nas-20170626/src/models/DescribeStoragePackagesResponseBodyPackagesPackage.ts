// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStoragePackagesResponseBodyPackagesPackage extends $dara.Model {
  /**
   * @remarks
   * The end time of the validity period for the storage plan.
   * 
   * @example
   * 2020-01-05T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the file system that is bound to the storage plan.
   * 
   * @example
   * 109c****66
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the storage plan.
   * 
   * @example
   * naspackage-@string(\\"*****\\", *)-@string(\\"*****\\", *)
   */
  packageId?: string;
  /**
   * @remarks
   * The capacity of the storage plan.
   * 
   * Unit: bytes.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The start time of the validity period for the storage plan.
   * 
   * @example
   * 2019-12-05T01:40:56Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the storage plan.
   * 
   * Valid values:
   * 
   * *   free: The storage plan is not bound to a file system. You can bind the storage plan to a file system of the same storage type.
   * *   bound: The storage plan is bound to a file system.
   * 
   * @example
   * free
   */
  status?: string;
  /**
   * @remarks
   * The type of the storage plan.
   * 
   * Valid values:
   * 
   * *   Performance
   * *   Capacity
   * 
   * @example
   * Capacity
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      fileSystemId: 'FileSystemId',
      packageId: 'PackageId',
      size: 'Size',
      startTime: 'StartTime',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      fileSystemId: 'string',
      packageId: 'string',
      size: 'number',
      startTime: 'string',
      status: 'string',
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

