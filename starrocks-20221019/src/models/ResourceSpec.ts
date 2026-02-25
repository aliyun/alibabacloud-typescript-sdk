// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CUs. A compute unit (CU) is the basic metering unit of a service. 1 CU = 1 CPU core + 4 GiB of memory.
   * 
   * @example
   * 3
   */
  cu?: number;
  /**
   * @remarks
   * The number of disk blocks.
   * 
   * @example
   * 1
   */
  diskNumber?: number;
  /**
   * @remarks
   * Local SSD Instance Specification for the node group. This parameter is applicable only when the node group is based on ECS instances and the SpecType is set to \\"Local SSD / Large-capacity Storage\\"
   * 
   * @example
   * local_ssd_4_4xlarge
   */
  localStorageInstanceType?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  nodeNumber?: number;
  /**
   * @remarks
   * The type of the node group. The following types are included:
   * 
   * *   standard, Standard Edition, ECS + cloud disk.
   * *   localSSD , local SSD.
   * *   bigData, which stores large specifications.
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * The performance level of the disks. Valid values:
   * 
   * *   PL0: A single disk can achieve up to 10,000 random read/write IOPS.
   * *   PL1: A single disk can achieve up to 50,000 random read/write IOPS.
   * *   PL2: A single disk can achieve up to 100,000 random read/write IOPS.
   * *   PL3: A single disk can achieve up to 1 million random read/write IOPS.
   * 
   * @example
   * pl1
   */
  storagePerformanceLevel?: string;
  /**
   * @remarks
   * The storage size.
   * 
   * @example
   * 100
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      diskNumber: 'diskNumber',
      localStorageInstanceType: 'localStorageInstanceType',
      nodeNumber: 'nodeNumber',
      specType: 'specType',
      storagePerformanceLevel: 'storagePerformanceLevel',
      storageSize: 'storageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      diskNumber: 'number',
      localStorageInstanceType: 'string',
      nodeNumber: 'number',
      specType: 'string',
      storagePerformanceLevel: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

