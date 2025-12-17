// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeTemplate } from "./NodeTemplate";


export class GetQueueResponseBodyQueue extends $dara.Model {
  /**
   * @remarks
   * The auto scale-out policy of the queue.
   * 
   * @example
   * PriorityInstanceType
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * The hardware configurations of the compute nodes in the queue.
   */
  computeNodes?: NodeTemplate[];
  /**
   * @example
   * 2025-01-01T12:05:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether auto scale-in is enabled for the queue. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @remarks
   * Indicates whether auto scale-out is enabled for the queue. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @remarks
   * The hostname prefix of the compute nodes in the queue.
   * 
   * @example
   * compute
   */
  hostnamePrefix?: string;
  /**
   * @remarks
   * The hostname suffix of the compute nodes in the queue.
   * 
   * @example
   * demo
   */
  hostnameSuffix?: string;
  /**
   * @remarks
   * The initial number of nodes in the queue.
   * 
   * @example
   * 0
   */
  initialCount?: number;
  /**
   * @remarks
   * The type of the network between compute nodes in the queue. Valid values:
   * 
   * *   vpc
   * *   eRDMA
   * 
   * @example
   * erdma
   */
  interConnect?: string;
  /**
   * @remarks
   * The nodes for which deletion protection is enabled in the queue.
   */
  keepAliveNodes?: string[];
  /**
   * @remarks
   * The maximum number of compute nodes that the queue can contain.
   * 
   * @example
   * 1000
   */
  maxCount?: number;
  /**
   * @remarks
   * The minimum number of nodes that are delivered to the queue in each scale-out cycle.
   * 
   * @example
   * 99
   */
  maxCountPerCycle?: number;
  /**
   * @remarks
   * The minimum number of compute nodes that the queue must contain.
   * 
   * @example
   * 0
   */
  minCount?: number;
  /**
   * @remarks
   * The queue name.
   * 
   * This parameter is required.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) role that is assumed by compute nodes in the queue.
   * 
   * @example
   * AliyunECSInstanceForEHPCRole
   */
  ramRole?: string;
  /**
   * @remarks
   * Preset node pool ID.
   * 
   * @example
   * rnp-756vlp7a
   */
  reservedNodePoolId?: string;
  /**
   * @example
   * 2025-01-01T12:05:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The available vSwitches for compute nodes in the queue. Valid values of N: 1 to 5.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
      computeNodes: 'ComputeNodes',
      createTime: 'CreateTime',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      initialCount: 'InitialCount',
      interConnect: 'InterConnect',
      keepAliveNodes: 'KeepAliveNodes',
      maxCount: 'MaxCount',
      maxCountPerCycle: 'MaxCountPerCycle',
      minCount: 'MinCount',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      reservedNodePoolId: 'ReservedNodePoolId',
      updateTime: 'UpdateTime',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
      computeNodes: { 'type': 'array', 'itemType': NodeTemplate },
      createTime: 'string',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      initialCount: 'number',
      interConnect: 'string',
      keepAliveNodes: { 'type': 'array', 'itemType': 'string' },
      maxCount: 'number',
      maxCountPerCycle: 'number',
      minCount: 'number',
      queueName: 'string',
      ramRole: 'string',
      reservedNodePoolId: 'string',
      updateTime: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.computeNodes)) {
      $dara.Model.validateArray(this.computeNodes);
    }
    if(Array.isArray(this.keepAliveNodes)) {
      $dara.Model.validateArray(this.keepAliveNodes);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queue configurations.
   */
  queue?: GetQueueResponseBodyQueue;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: GetQueueResponseBodyQueue,
      requestId: 'string',
    };
  }

  validate() {
    if(this.queue && typeof (this.queue as any).validate === 'function') {
      (this.queue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

