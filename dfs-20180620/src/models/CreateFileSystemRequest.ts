// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The redundancy mode of the file system.
   * 
   * Valid values:
   * 
   * - LRS: locally redundant storage. This is the default value.
   * - ZRS: zone-redundant storage. If you select ZRS, ZoneId must be a string that consists of multiple zone IDs for zone-redundant storage, such as <codeph> `zoneId1,zoneId2`.
   * 
   * @example
   * LRS
   */
  dataRedundancyType?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster for Apsara File Storage for HDFS.
   * 
   * @example
   * alidfs-DC-f76f7ca5-*****
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The description of the file system.
   * 
   * The description can be up to 32 characters in length.
   * 
   * @example
   * This is the first Apsara File Storage for HDFS instance for our company
   */
  description?: string;
  /**
   * @remarks
   * The name of the file system. The name must meet the following requirements:
   * 
   * - The name must be 6 to 64 characters in length. 
   * - The name must be globally unique and cannot be an empty string.
   * - The name can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * MyFirstHDFS
   */
  fileSystemName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * The metering mode.
   * 
   * @example
   * UsageBased,CapacityBased
   */
  meteringMode?: string;
  /**
   * @remarks
   * This parameter is reserved and does not require configuration.
   * 
   * @example
   * 0
   */
  partitionNumber?: number;
  /**
   * @remarks
   * The protocol type.
   * 
   * Only Hadoop Distributed File System (HDFS) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * HDFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The provisioned throughput. This parameter is required when ThroughputMode is set to Provisioned.
   * 
   * Unit: MB/s.
   * 
   * Valid values: 1 to 5120.
   * 
   * @example
   * 1024
   */
  provisionedThroughputInMiBps?: number;
  /**
   * @remarks
   * The capacity of the file system.
   * 
   * You cannot write data when the amount of stored data reaches the file system capacity.
   * 
   * Unit: GiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  spaceCapacity?: number;
  /**
   * @remarks
   * This parameter is reserved and does not require configuration.
   * 
   * @example
   * AligroupStorageSet
   */
  storageSetName?: string;
  /**
   * @remarks
   * The storage medium type.
   * 
   * Valid values:
   * 
   * - STANDARD: standard storage. This is the default value.
   * - PERFORMANCE: performance storage.
   * 
   * This parameter is required.
   * 
   * @example
   * STANDARD
   */
  storageType?: string;
  /**
   * @remarks
   * The throughput mode.
   * 
   * Valid values:
   * 
   * - Standard: standard throughput. This is the default value.
   * - Provisioned: provisioned throughput.
   * 
   * @example
   * Standard
   */
  throughputMode?: string;
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
      dataRedundancyType: 'DataRedundancyType',
      dedicatedClusterId: 'DedicatedClusterId',
      description: 'Description',
      fileSystemName: 'FileSystemName',
      inputRegionId: 'InputRegionId',
      meteringMode: 'MeteringMode',
      partitionNumber: 'PartitionNumber',
      protocolType: 'ProtocolType',
      provisionedThroughputInMiBps: 'ProvisionedThroughputInMiBps',
      spaceCapacity: 'SpaceCapacity',
      storageSetName: 'StorageSetName',
      storageType: 'StorageType',
      throughputMode: 'ThroughputMode',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataRedundancyType: 'string',
      dedicatedClusterId: 'string',
      description: 'string',
      fileSystemName: 'string',
      inputRegionId: 'string',
      meteringMode: 'string',
      partitionNumber: 'number',
      protocolType: 'string',
      provisionedThroughputInMiBps: 'number',
      spaceCapacity: 'number',
      storageSetName: 'string',
      storageType: 'string',
      throughputMode: 'string',
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

