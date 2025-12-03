// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileSystemRequest extends $dara.Model {
  /**
   * @example
   * LRS
   */
  dataRedundancyType?: string;
  dedicatedClusterId?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyFirstHDFS
   */
  fileSystemName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @example
   * 0
   */
  partitionNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  spaceCapacity?: number;
  /**
   * @example
   * AligroupStorageSet
   */
  storageSetName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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

