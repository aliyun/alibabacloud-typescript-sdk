// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CapacityPlanResponseBodyResultExtendConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration type. The only valid value is sharedDisk.
   * 
   * > This extendConfigs property may appear when the planned instance type is Advanced Edition (advanced).
   * 
   * @example
   * sharedDisk
   */
  configType?: string;
  /**
   * @remarks
   * The disk size, in GiB.
   * 
   * @example
   * 2048
   */
  disk?: number;
  /**
   * @remarks
   * The disk type. The only valid value is CPFS_PREMIUM.
   * 
   * > This extendConfigs property may appear when the planned instance type is Advanced Edition (advanced).
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
   * The number of nodes.
   * 
   * @example
   * 10
   */
  amount?: number;
  /**
   * @remarks
   * The number of CPUs.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The disk size, in GiB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - cloud_essd: ESSD
   * 
   * - cloud_ssd: standard SSD
   * 
   * - cloud_efficiency: ultra cloud disk
   * 
   * - local_ssd: local SSD
   * 
   * - local_efficiency: local ultra disk.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The memory size of the specifications for the current node role.
   * 
   * @example
   * 2
   */
  memory?: number;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - WORKER: data node
   * 
   * - WORKER_WARM: warm node
   * 
   * - MASTER: dedicated master node
   * 
   * - KIBANA: Kibana node
   * 
   * - COORDINATING: client node
   * 
   * - ELASTIC_WORKER: elastic node.
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
   * The extended configuration information.
   */
  extendConfigs?: CapacityPlanResponseBodyResultExtendConfigs[];
  /**
   * @remarks
   * The edition type. Valid values:
   * 
   * - advanced: Advanced Edition
   * 
   * - x-pack: Commercial Edition
   * 
   * - community: Community Edition.
   * 
   * @example
   * advanced
   */
  instanceCategory?: string;
  /**
   * @remarks
   * The node information.
   */
  nodeConfigurations?: CapacityPlanResponseBodyResultNodeConfigurations[];
  /**
   * @remarks
   * The result calculated based on capacity planning. No default value is available. Valid values:
   * 
   * - true: The cluster is oversized. The number of data nodes calculated by capacity planning exceeds the threshold of 50.
   * 
   * - false: The number of data nodes calculated by capacity planning is within 50.
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
   * The ID of the request.
   * 
   * @example
   * E91B7129-A669-4D9D-A743-F90A0FF1F5EF
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
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

