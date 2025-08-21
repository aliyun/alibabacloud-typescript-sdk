// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CapacityPlanResponseBodyResultExtendConfigs extends $dara.Model {
  /**
   * @remarks
   * Configuration type, with a single value: sharedDisk.
   * 
   * > This extendConfigs attribute may appear when the planned instance type is Advanced.
   * 
   * @example
   * sharedDisk
   */
  configType?: string;
  /**
   * @remarks
   * Disk size, in GiB.
   * 
   * @example
   * 2048
   */
  disk?: number;
  /**
   * @remarks
   * Disk type, with a single value: CPFS_PREMIUM.
   * 
   * > This extendConfigs attribute may appear when the planned instance type is Advanced.
   * 
   * @example
   * CPFS_PREMIUM
   */
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'ConfigType',
      disk: 'Disk',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      disk: 'number',
      diskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CapacityPlanResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Extended configuration information.
   */
  extendConfigs?: CapacityPlanResponseBodyResultExtendConfigs[];
  /**
   * @remarks
   * Edition type, with values meaning as follows:
   * 
   * - advanced: Enhanced Edition
   * 
   * - x-pack: Commercial Edition
   * 
   * - community: Community Edition
   * 
   * @example
   * advanced
   */
  instanceCategory?: string;
  /**
   * @remarks
   * Node information.
   */
  nodeConfigurations?: CapacityPlanResponseBodyResultNodeConfigurations[];
  /**
   * @remarks
   * Based on the capacity planning calculation, there is no default value. The meanings of the values are as follows:
   * 
   * - true: Represents an oversized cluster, indicating that the number of data nodes calculated by the capacity planning exceeds the threshold of 50.
   * 
   * - false: The number of data nodes calculated by the capacity planning is within 50.
   * 
   * @example
   * true
   */
  oversizedCluster?: boolean;
  static names(): { [key: string]: string } {
    return {
      extendConfigs: 'ExtendConfigs',
      instanceCategory: 'InstanceCategory',
      nodeConfigurations: 'NodeConfigurations',
      oversizedCluster: 'OversizedCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendConfigs: { 'type': 'array', 'itemType': CapacityPlanResponseBodyResultExtendConfigs },
      instanceCategory: 'string',
      nodeConfigurations: { 'type': 'array', 'itemType': CapacityPlanResponseBodyResultNodeConfigurations },
      oversizedCluster: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.extendConfigs)) {
      $dara.Model.validateArray(this.extendConfigs);
    }
    if(Array.isArray(this.nodeConfigurations)) {
      $dara.Model.validateArray(this.nodeConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CapacityPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the current request.
   * 
   * @example
   * E91B7129-A669-4D9D-A743-F90A0FF1F5EF
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result of the request.
   */
  result?: CapacityPlanResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CapacityPlanResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

