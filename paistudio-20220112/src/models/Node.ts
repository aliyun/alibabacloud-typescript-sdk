// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuotaIdName } from "./QuotaIdName";
import { UserInfo } from "./UserInfo";


export class Node extends $dara.Model {
  acceleratorType?: string;
  allocatableCPU?: string;
  allocatableMemory?: string;
  ancestorQuotaWorkloadNum?: number;
  availabilityZone?: string;
  boundQuotas?: QuotaIdName[];
  CPU?: string;
  creatorId?: string;
  descendantQuotaWorkloadNum?: number;
  diskCapacity?: number;
  diskPL?: string;
  GPU?: string;
  GPUMemory?: string;
  GPUType?: string;
  gmtCreateTime?: string;
  gmtExpiredTime?: string;
  gmtModifiedTime?: string;
  hyperZone?: string;
  isBound?: boolean;
  limitCPU?: string;
  limitGPU?: string;
  limitMemory?: string;
  machineGroupId?: string;
  memory?: string;
  nodeName?: string;
  nodeStatus?: string;
  nodeType?: string;
  orderStatus?: string;
  podNum?: number;
  reasonCode?: string;
  reasonMessage?: string;
  requestCPU?: string;
  requestGPU?: string;
  requestMemory?: string;
  resourceGroupId?: string;
  resourceGroupName?: string;
  selfQuotaWorkloadNum?: number;
  systemReservedCPU?: string;
  systemReservedMemory?: string;
  users?: UserInfo[];
  workloadNum?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      allocatableCPU: 'AllocatableCPU',
      allocatableMemory: 'AllocatableMemory',
      ancestorQuotaWorkloadNum: 'AncestorQuotaWorkloadNum',
      availabilityZone: 'AvailabilityZone',
      boundQuotas: 'BoundQuotas',
      CPU: 'CPU',
      creatorId: 'CreatorId',
      descendantQuotaWorkloadNum: 'DescendantQuotaWorkloadNum',
      diskCapacity: 'DiskCapacity',
      diskPL: 'DiskPL',
      GPU: 'GPU',
      GPUMemory: 'GPUMemory',
      GPUType: 'GPUType',
      gmtCreateTime: 'GmtCreateTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      hyperZone: 'HyperZone',
      isBound: 'IsBound',
      limitCPU: 'LimitCPU',
      limitGPU: 'LimitGPU',
      limitMemory: 'LimitMemory',
      machineGroupId: 'MachineGroupId',
      memory: 'Memory',
      nodeName: 'NodeName',
      nodeStatus: 'NodeStatus',
      nodeType: 'NodeType',
      orderStatus: 'OrderStatus',
      podNum: 'PodNum',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      selfQuotaWorkloadNum: 'SelfQuotaWorkloadNum',
      systemReservedCPU: 'SystemReservedCPU',
      systemReservedMemory: 'SystemReservedMemory',
      users: 'Users',
      workloadNum: 'WorkloadNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      allocatableCPU: 'string',
      allocatableMemory: 'string',
      ancestorQuotaWorkloadNum: 'number',
      availabilityZone: 'string',
      boundQuotas: { 'type': 'array', 'itemType': QuotaIdName },
      CPU: 'string',
      creatorId: 'string',
      descendantQuotaWorkloadNum: 'number',
      diskCapacity: 'number',
      diskPL: 'string',
      GPU: 'string',
      GPUMemory: 'string',
      GPUType: 'string',
      gmtCreateTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      hyperZone: 'string',
      isBound: 'boolean',
      limitCPU: 'string',
      limitGPU: 'string',
      limitMemory: 'string',
      machineGroupId: 'string',
      memory: 'string',
      nodeName: 'string',
      nodeStatus: 'string',
      nodeType: 'string',
      orderStatus: 'string',
      podNum: 'number',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestCPU: 'string',
      requestGPU: 'string',
      requestMemory: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      selfQuotaWorkloadNum: 'number',
      systemReservedCPU: 'string',
      systemReservedMemory: 'string',
      users: { 'type': 'array', 'itemType': UserInfo },
      workloadNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.boundQuotas)) {
      $dara.Model.validateArray(this.boundQuotas);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

