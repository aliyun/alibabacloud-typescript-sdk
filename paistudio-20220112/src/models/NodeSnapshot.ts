// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeSnapshotWorkloads } from "./NodeSnapshotWorkloads";


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

