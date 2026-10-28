// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeSnapshotWorkloads extends $dara.Model {
  /**
   * @remarks
   * The corresponding queue unit name.
   * 
   * @example
   * dlc1yhisjtmqh15s-master-0
   */
  name?: string;
  /**
   * @remarks
   * The workload ID.
   * 
   * @example
   * dlcxxxx
   */
  workloadId?: string;
  /**
   * @remarks
   * The workload type.
   * 
   * @example
   * dlc
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      workloadId: 'WorkloadId',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      workloadId: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeSnapshot extends $dara.Model {
  /**
   * @remarks
   * The number of workloads using ancestor quotas.
   * 
   * @example
   * 0
   */
  ancestorQuotaWorkloadNum?: number;
  /**
   * @remarks
   * The number of workloads using descendant quotas.
   * 
   * @example
   * 0
   */
  descendantQuotaWorkloadNum?: number;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * trains930928remn-master-0
   */
  nodeName?: string;
  /**
   * @remarks
   * The CPU usage.
   * 
   * @example
   * 4
   */
  requestCPU?: string;
  /**
   * @remarks
   * The GPU usage.
   * 
   * @example
   * 0
   */
  requestGPU?: string;
  /**
   * @remarks
   * The memory usage.
   * 
   * @example
   * 8
   */
  requestMemory?: string;
  /**
   * @remarks
   * The number of workloads using the current quota.
   * 
   * @example
   * 1
   */
  selfQuotaWorkloadNum?: number;
  /**
   * @remarks
   * The number of node workloads.
   * 
   * @example
   * 2
   */
  workloadNum?: number;
  /**
   * @remarks
   * The node workload snapshot.
   */
  workloads?: NodeSnapshotWorkloads[];
  static names(): { [key: string]: string } {
    return {
      ancestorQuotaWorkloadNum: 'AncestorQuotaWorkloadNum',
      descendantQuotaWorkloadNum: 'DescendantQuotaWorkloadNum',
      nodeName: 'NodeName',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      selfQuotaWorkloadNum: 'SelfQuotaWorkloadNum',
      workloadNum: 'WorkloadNum',
      workloads: 'Workloads',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancestorQuotaWorkloadNum: 'number',
      descendantQuotaWorkloadNum: 'number',
      nodeName: 'string',
      requestCPU: 'string',
      requestGPU: 'string',
      requestMemory: 'string',
      selfQuotaWorkloadNum: 'number',
      workloadNum: 'number',
      workloads: { 'type': 'array', 'itemType': NodeSnapshotWorkloads },
    };
  }

  validate() {
    if(Array.isArray(this.workloads)) {
      $dara.Model.validateArray(this.workloads);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

