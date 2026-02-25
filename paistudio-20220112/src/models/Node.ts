// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuotaIdName } from "./QuotaIdName";
import { UserInfo } from "./UserInfo";


export class Node extends $dara.Model {
  /**
   * @example
   * CPU
   */
  acceleratorType?: string;
  allocatableCPU?: string;
  allocatableMemory?: string;
  ancestorQuotaWorkloadNum?: number;
  availabilityZone?: string;
  boundQuotas?: QuotaIdName[];
  /**
   * @example
   * 4
   */
  CPU?: string;
  /**
   * @example
   * 281044699048527748
   */
  creatorId?: string;
  descendantQuotaWorkloadNum?: number;
  diskCapacity?: number;
  diskPL?: string;
  /**
   * @example
   * 0
   */
  GPU?: string;
  GPUMemory?: string;
  /**
   * @example
   * ""
   */
  GPUType?: string;
  /**
   * @example
   * 2024-07-10T11:49:47Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2025-06-22T00:00:00Z
   */
  gmtExpiredTime?: string;
  /**
   * @example
   * 2024-07-10T11:49:47Z
   */
  gmtModifiedTime?: string;
  hyperZone?: string;
  /**
   * @example
   * false
   */
  isBound?: boolean;
  /**
   * @example
   * 4
   */
  limitCPU?: string;
  /**
   * @example
   * 0
   */
  limitGPU?: string;
  /**
   * @example
   * 8
   */
  limitMemory?: string;
  /**
   * @example
   * mg1234456
   */
  machineGroupId?: string;
  /**
   * @example
   * 8
   */
  memory?: string;
  /**
   * @example
   * lingjxxxx
   */
  nodeName?: string;
  /**
   * @example
   * Ready
   */
  nodeStatus?: string;
  /**
   * @example
   * ecs.c8i.xlarge
   */
  nodeType?: string;
  /**
   * @example
   * Ready
   */
  orderStatus?: string;
  /**
   * @example
   * 2
   */
  podNum?: number;
  /**
   * @example
   * ""
   */
  reasonCode?: string;
  /**
   * @example
   * ""
   */
  reasonMessage?: string;
  /**
   * @example
   * 4
   */
  requestCPU?: string;
  /**
   * @example
   * 0
   */
  requestGPU?: string;
  /**
   * @example
   * 8
   */
  requestMemory?: string;
  /**
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupId?: string;
  /**
   * @example
   * test
   */
  resourceGroupName?: string;
  selfQuotaWorkloadNum?: number;
  subNodes?: string[];
  systemReservedCPU?: string;
  systemReservedMemory?: string;
  users?: UserInfo[];
  /**
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

