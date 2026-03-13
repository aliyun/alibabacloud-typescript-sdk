// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeSnapshotWorkloads extends $dara.Model {
  name?: string;
  workloadId?: string;
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
  ancestorQuotaWorkloadNum?: number;
  descendantQuotaWorkloadNum?: number;
  nodeName?: string;
  requestCPU?: string;
  requestGPU?: string;
  requestMemory?: string;
  selfQuotaWorkloadNum?: number;
  workloadNum?: number;
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

