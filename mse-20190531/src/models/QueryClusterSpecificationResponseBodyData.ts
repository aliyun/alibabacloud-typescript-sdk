// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryClusterSpecificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The engine specifications that can be used.
   * 
   * @example
   * MSE_SC_1_2_200_c
   */
  clusterSpecificationName?: string;
  /**
   * @remarks
   * The number of vCPUs in the specifications.
   * 
   * @example
   * 1
   */
  cpuCapacity?: string;
  /**
   * @remarks
   * The memory size in the specifications. Unit: GB.
   * 
   * @example
   * 2
   */
  memoryCapacity?: string;
  static names(): { [key: string]: string } {
    return {
      clusterSpecificationName: 'ClusterSpecificationName',
      cpuCapacity: 'CpuCapacity',
      memoryCapacity: 'MemoryCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSpecificationName: 'string',
      cpuCapacity: 'string',
      memoryCapacity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

