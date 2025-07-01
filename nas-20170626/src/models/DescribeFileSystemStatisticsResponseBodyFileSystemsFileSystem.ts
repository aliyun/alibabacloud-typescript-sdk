// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages } from "./DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages";


export class DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystem extends $dara.Model {
  /**
   * @remarks
   * The capacity of the file system.
   * 
   * Unit: GiB.
   * 
   * @example
   * 1
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   Subscription: The subscription billing method is used.
   * *   PayAsYouGo: The pay-as-you-go billing method is used.
   * *   Package: A storage plan is attached to the file system.
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the NAS file system was created.
   * 
   * @example
   * 2017-05-27T15:43:06CST
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the file system.
   * 
   * @example
   * 31a8e48eda
   */
  description?: string;
  /**
   * @remarks
   * The time when the file system expires.
   * 
   * @example
   * 2017-08-27T15:43:06CST
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 109c04****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard: General-purpose NAS file system
   * *   extreme: Extreme NAS file system
   * *   cpfs: CPFS file system
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The storage usage of the Infrequent Access (IA) storage medium.
   * 
   * Unit: bytes.
   * 
   * @example
   * 362832
   */
  meteredIASize?: number;
  /**
   * @remarks
   * The storage usage of the file system.
   * 
   * The value of this parameter is the maximum storage usage of the file system over the last hour. Unit: bytes.
   * 
   * @example
   * 1611661312
   */
  meteredSize?: number;
  /**
   * @remarks
   * The information about storage plans.
   */
  packages?: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages;
  /**
   * @remarks
   * The protocol type of the file system.
   * 
   * Valid values:
   * 
   * *   NFS: Network File System (NFS)
   * *   SMB: Server Message Block (SMB)
   * *   cpfs: the protocol type supported by the CPFS file system
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the file system.
   * 
   * This parameter is returned for Extreme NAS file systems and Cloud Parallel File Storage (CPFS) file systems. Valid values:
   * 
   * *   Pending: The file system is being created or modified.
   * *   Running: The file system is available. Before you create a mount target for the file system, make sure that the file system is in the Running state.
   * *   Stopped: The file system is unavailable.
   * *   Extending: The file system is being scaled out.
   * *   Stopping: The file system is being disabled.
   * *   Deleting: The file system is being deleted.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * Valid values:
   * 
   * *   Valid values for General-purpose NAS file systems: Capacity and Performance.
   * *   Valid values for Extreme NAS file systems: standard and advance.
   * *   Valid values for CPFS file systems: advance_100 (100 MB/s/TiB baseline) and advance_200 (200 MB/s/TiB baseline).
   * 
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      meteredIASize: 'MeteredIASize',
      meteredSize: 'MeteredSize',
      packages: 'Packages',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      status: 'Status',
      storageType: 'StorageType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      expiredTime: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
      meteredIASize: 'number',
      meteredSize: 'number',
      packages: DescribeFileSystemStatisticsResponseBodyFileSystemsFileSystemPackages,
      protocolType: 'string',
      regionId: 'string',
      status: 'string',
      storageType: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.packages && typeof (this.packages as any).validate === 'function') {
      (this.packages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

