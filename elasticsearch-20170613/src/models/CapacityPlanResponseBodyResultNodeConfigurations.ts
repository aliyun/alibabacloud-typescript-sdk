// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CapacityPlanResponseBodyResultNodeConfigurations extends $dara.Model {
  /**
   * @remarks
   * Number of nodes.
   * 
   * @example
   * 10
   */
  amount?: number;
  /**
   * @remarks
   * Number of CPUs.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * Disk size, in GiB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * Disk type, with meanings as follows:
   * 
   * - cloud_essd: ESSD Cloud Disk
   * 
   * - cloud_ssd: SSD Cloud Disk
   * 
   * - cloud_efficiency: Efficient Cloud Disk
   * 
   * - local_ssd: Local SSD Disk
   * 
   * - local_efficiency: Local Efficient Disk
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * Specified memory size for the current node role.
   * 
   * @example
   * 2
   */
  memory?: number;
  /**
   * @remarks
   * Node type, with supported types as follows:
   * 
   * - WORKER: Data Node
   * 
   * - WORKER_WARM: Cold Data Node
   * 
   * - MASTER: Dedicated Master Node
   * 
   * - KIBANA: Kibana Node
   * 
   * - COORDINATING: Coordinator Node
   * 
   * - ELASTIC_WORKER: Elastic Node
   * 
   * @example
   * WORKER
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      cpu: 'Cpu',
      disk: 'Disk',
      diskType: 'DiskType',
      memory: 'Memory',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      cpu: 'number',
      disk: 'number',
      diskType: 'string',
      memory: 'number',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

