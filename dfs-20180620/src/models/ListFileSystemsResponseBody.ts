// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileSystemsResponseBodyFileSystems extends $dara.Model {
  createTime?: string;
  description?: string;
  fileSystemId?: string;
  /**
   * @example
   * MyFirstHDFS
   */
  fileSystemName?: string;
  /**
   * @example
   * 107374182400
   */
  meteringSpaceSize?: number;
  /**
   * @example
   * 2
   */
  mountPointCount?: number;
  /**
   * @example
   * 100
   */
  numberOfDirectories?: number;
  /**
   * @example
   * 1000
   */
  numberOfFiles?: number;
  /**
   * @example
   * HDFS
   */
  protocolType?: string;
  /**
   * @example
   * 1024
   */
  provisionedThroughputInMiBps?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1024
   */
  spaceCapacity?: number;
  /**
   * @example
   * 1
   */
  storagePackageId?: string;
  /**
   * @example
   * STANDARD
   */
  storageType?: string;
  /**
   * @example
   * Standard
   */
  throughputMode?: string;
  /**
   * @example
   * 100
   */
  usedSpaceSize?: number;
  /**
   * @example
   * 1.0.0
   */
  version?: string;
  /**
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
  fileSystems?: ListFileSystemsResponseBodyFileSystems[];
  nextToken?: string;
  /**
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  /**
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

