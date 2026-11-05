// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the file system.
   * 
   * The description can be up to 32 characters in length.
   * 
   * @example
   * This is the first Apsara File Storage for HDFS instance for my company
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 37af8f42-2abc-4e74-889d-664f5163****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The name of the file system. The name must meet the following requirements:
   * 
   * - The name must be 6 to 64 characters in length.
   * - The name must be globally unique and cannot be an empty string.
   * - The name can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * MyFirstModDFS
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
   * The capacity budget of the file system.
   * 
   * When the actual data storage reaches the file system capacity, no more data can be written. The file system capacity cannot be reduced.
   * 
   * Unit: GB.
   * 
   * @example
   * 1024
   */
  spaceCapacity?: number;
  /**
   * @remarks
   * The throughput mode. Valid values:
   * 
   * - Standard: standard throughput
   * - Provisioned: provisioned throughput
   * 
   * @example
   * Standard
   */
  throughputMode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      inputRegionId: 'InputRegionId',
      meteringMode: 'MeteringMode',
      provisionedThroughputInMiBps: 'ProvisionedThroughputInMiBps',
      spaceCapacity: 'SpaceCapacity',
      throughputMode: 'ThroughputMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      fileSystemName: 'string',
      inputRegionId: 'string',
      meteringMode: 'string',
      provisionedThroughputInMiBps: 'number',
      spaceCapacity: 'number',
      throughputMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

