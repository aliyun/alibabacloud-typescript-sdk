// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuotaIdName } from "./QuotaIdName";
import { UserInfo } from "./UserInfo";


export class Node extends $dara.Model {
  /**
   * @remarks
   * The accelerator type of the resource node specifications (CPU/GPU).
   * 
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The number of CPU cores that can be allocated to users.
   * 
   * @example
   * 4
   */
  allocatableCPU?: string;
  /**
   * @remarks
   * The memory size that can be allocated to users.
   * 
   * @example
   * 5
   */
  allocatableMemory?: string;
  ancestorQuotaWorkloadNum?: number;
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * C
   */
  availabilityZone?: string;
  /**
   * @remarks
   * The list of bound quotas.
   */
  boundQuotas?: QuotaIdName[];
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 4
   */
  CPU?: string;
  /**
   * @remarks
   * The creator of the resource node.
   * 
   * @example
   * 281044699048527748
   */
  creatorId?: string;
  descendantQuotaWorkloadNum?: number;
  diskCapacity?: number;
  diskPL?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 0
   */
  GPU?: string;
  /**
   * @remarks
   * The GPU memory.
   * 
   * @example
   * 32
   */
  GPUMemory?: string;
  /**
   * @remarks
   * The GPU model.
   * 
   * @example
   * ""
   */
  GPUType?: string;
  /**
   * @remarks
   * The creation time of the resource node.
   * 
   * @example
   * 2024-07-10T11:49:47Z
   * 
   * @deprecated
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The creation time of the resource node.
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The expiration time of the resource node.
   * 
   * @example
   * 2025-06-22T00:00:00Z
   */
  gmtExpiredTime?: string;
  /**
   * @remarks
   * The update time of the resource node.
   * 
   * @example
   * 2024-07-10T11:49:47Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The high-speed interconnect zone.
   * 
   * @example
   * C3
   */
  hyperZone?: string;
  /**
   * @remarks
   * Indicates whether the resource node is bound to a quota.
   * 
   * @example
   * false
   */
  isBound?: boolean;
  /**
   * @remarks
   * The maximum number of CPU cores.
   * 
   * @example
   * 4
   */
  limitCPU?: string;
  /**
   * @remarks
   * The maximum number of GPUs.
   * 
   * @example
   * 0
   */
  limitGPU?: string;
  /**
   * @remarks
   * The maximum memory size.
   * 
   * @example
   * 8
   */
  limitMemory?: string;
  /**
   * @remarks
   * The ID of the machine group to which the resource node belongs.
   * 
   * @example
   * mg1234456
   */
  machineGroupId?: string;
  /**
   * @remarks
   * The memory size.
   * 
   * @example
   * 8
   */
  memory?: string;
  /**
   * @remarks
   * The GPU memory of the node.
   * 
   * @example
   * 640G
   */
  nodeGPUMemory?: string;
  /**
   * @remarks
   * The GPU memory of the node in bytes.
   * 
   * @example
   * 687194767360
   */
  nodeGPUMemoryBytes?: number;
  /**
   * @remarks
   * The name of the resource node.
   * 
   * @example
   * lingjxxxx
   */
  nodeName?: string;
  /**
   * @remarks
   * The status of the resource node.
   * 
   * @example
   * Ready
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The node specifications type of the resource node.
   * 
   * @example
   * ecs.c8i.xlarge
   */
  nodeType?: string;
  /**
   * @remarks
   * The order status of the resource node.
   * 
   * @example
   * Ready
   */
  orderStatus?: string;
  /**
   * @remarks
   * The number of pods on the node.
   * 
   * @example
   * 2
   */
  podNum?: number;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ""
   */
  reasonCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ""
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The number of requested CPU cores.
   * 
   * @example
   * 4
   */
  requestCPU?: string;
  /**
   * @remarks
   * The number of requested GPUs.
   * 
   * @example
   * 0
   */
  requestGPU?: string;
  /**
   * @remarks
   * The requested memory size.
   * 
   * @example
   * 8
   */
  requestMemory?: string;
  /**
   * @remarks
   * The ID of the resource group to which the resource node belongs.
   * 
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the resource group to which the resource node belongs.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  selfQuotaWorkloadNum?: number;
  /**
   * @remarks
   * The names of the child nodes.
   */
  subNodes?: string[];
  /**
   * @remarks
   * The number of system-reserved CPU cores.
   * 
   * @example
   * 0
   */
  systemReservedCPU?: string;
  /**
   * @remarks
   * The system-reserved memory size.
   * 
   * @example
   * 3
   */
  systemReservedMemory?: string;
  /**
   * @remarks
   * The user information.
   */
  users?: UserInfo[];
  /**
   * @remarks
   * The number of workloads on the node.
   * 
   * @example
   * 2
   */
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
      gmtCreatedTime: 'GmtCreatedTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      hyperZone: 'HyperZone',
      isBound: 'IsBound',
      limitCPU: 'LimitCPU',
      limitGPU: 'LimitGPU',
      limitMemory: 'LimitMemory',
      machineGroupId: 'MachineGroupId',
      memory: 'Memory',
      nodeGPUMemory: 'NodeGPUMemory',
      nodeGPUMemoryBytes: 'NodeGPUMemoryBytes',
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
      subNodes: 'SubNodes',
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
      gmtCreatedTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      hyperZone: 'string',
      isBound: 'boolean',
      limitCPU: 'string',
      limitGPU: 'string',
      limitMemory: 'string',
      machineGroupId: 'string',
      memory: 'string',
      nodeGPUMemory: 'string',
      nodeGPUMemoryBytes: 'number',
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
      subNodes: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.subNodes)) {
      $dara.Model.validateArray(this.subNodes);
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

