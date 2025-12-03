// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFileSystemRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileSystemId?: string;
  /**
   * @example
   * MyFirstModDFS
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
   * 1024
   */
  provisionedThroughputInMiBps?: number;
  /**
   * @example
   * 1024
   */
  spaceCapacity?: number;
  /**
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

