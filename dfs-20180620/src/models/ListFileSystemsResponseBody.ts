// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileSystemsResponseBodyFileSystems extends $dara.Model {
  /**
   * @remarks
   * The creation time of the file system. The time is displayed in UTC and follows the ISO 8601 standard. Example: 2022-04-18T06:03:15.836222Z.
   * 
   * @example
   * 2022-04-18T06:03:15.836222Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the file system.
   * 
   * @example
   * This is the first Apsara File Storage for HDFS instance of my company
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 37af8f42-2abc-4e74-889d-664f5163****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The name of the file system.
   * 
   * @example
   * MyFirstHDFS
   */
  fileSystemName?: string;
  /**
   * @remarks
   * The billing method of the file system.
   * 
   * @example
   * UsageBased,CapacityBased
   */
  meteringMode?: string;
  /**
   * @remarks
   * The billable capacity of the file system. Unit: bytes.
   * Billable capacity = MAX [(Number of files + Number of directories) × 5 MiB, Used capacity].
   * This is statistical data and is for reference only, and is not used for billing. Apsara File Storage for HDFS is billed based on the peak billable capacity of the previous hour. For more detailed metering data, see [View billing details](https://help.aliyun.com/document_detail/419001.html).
   * 
   * @example
   * 107374182400
   */
  meteringSpaceSize?: number;
  /**
   * @remarks
   * The number of mount points.
   * 
   * @example
   * 2
   */
  mountPointCount?: number;
  /**
   * @remarks
   * The number of directories.
   * 
   * @example
   * 100
   */
  numberOfDirectories?: number;
  /**
   * @remarks
   * The number of files.
   * 
   * @example
   * 1000
   */
  numberOfFiles?: number;
  /**
   * @remarks
   * The protocol type. Only Hadoop Distributed File System (HDFS) is supported.
   * 
   * @example
   * HDFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The provisioned throughput. Unit: MB/s.
   * 
   * @example
   * 1024
   */
  provisionedThroughputInMiBps?: number;
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
   * The capacity of the file system. Unit: GB.
   * 
   * @example
   * 1024
   */
  spaceCapacity?: number;
  /**
   * @remarks
   * The ID of the storage plan.
   * 
   * @example
   * 1
   */
  storagePackageId?: string;
  /**
   * @remarks
   * The storage medium type. Valid values:
   * - STANDARD: standard
   * - PERFORMANCE: performance
   * 
   * @example
   * STANDARD
   */
  storageType?: string;
  /**
   * @remarks
   * The throughput mode. Valid values:
   * - Standard: standard throughput
   * - Provisioned: provisioned throughput
   * 
   * @example
   * Standard
   */
  throughputMode?: string;
  /**
   * @remarks
   * The used space of the file system. Unit: GB.
   * 
   * @example
   * 100
   */
  usedSpaceSize?: number;
  /**
   * @remarks
   * The version of Apsara File Storage for HDFS. This is not the Hadoop version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
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
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      meteringMode: 'MeteringMode',
      meteringSpaceSize: 'MeteringSpaceSize',
      mountPointCount: 'MountPointCount',
      numberOfDirectories: 'NumberOfDirectories',
      numberOfFiles: 'NumberOfFiles',
      protocolType: 'ProtocolType',
      provisionedThroughputInMiBps: 'ProvisionedThroughputInMiBps',
      regionId: 'RegionId',
      spaceCapacity: 'SpaceCapacity',
      storagePackageId: 'StoragePackageId',
      storageType: 'StorageType',
      throughputMode: 'ThroughputMode',
      usedSpaceSize: 'UsedSpaceSize',
      version: 'Version',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      fileSystemId: 'string',
      fileSystemName: 'string',
      meteringMode: 'string',
      meteringSpaceSize: 'number',
      mountPointCount: 'number',
      numberOfDirectories: 'number',
      numberOfFiles: 'number',
      protocolType: 'string',
      provisionedThroughputInMiBps: 'number',
      regionId: 'string',
      spaceCapacity: 'number',
      storagePackageId: 'string',
      storageType: 'string',
      throughputMode: 'string',
      usedSpaceSize: 'number',
      version: 'string',
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

export class ListFileSystemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of file system information.
   */
  fileSystems?: ListFileSystemsResponseBodyFileSystems[];
  /**
   * @remarks
   * tCSKxtX5z_fW0-Q0ug8Df1oSXGiamAjmrtaDFAj6sZW-YhN1lRC7TEIkcFfMuj-6uR9wSW4b_PS2ze70k269qy8bMVHDfRW0Tvhmyh-k47g
   * 
   * @example
   * tCSKxtX5z_fW0-Q0ug8Df1oSXGiamAjmrtaDFAj6sZW-YhN1lRC7TEIkcFfMuj-6uR9wSW4b_PS2ze70k269qy8bMVHDfRW0Tvhmyh-****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned results.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': ListFileSystemsResponseBodyFileSystems },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileSystems)) {
      $dara.Model.validateArray(this.fileSystems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

