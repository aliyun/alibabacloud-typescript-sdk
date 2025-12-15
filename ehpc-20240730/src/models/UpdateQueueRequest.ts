// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeTemplate } from "./NodeTemplate";


export class UpdateQueueRequestQueue extends $dara.Model {
  /**
   * @remarks
   * The policy based on which instance types are selected for compute nodes during auto scale-outs. Valid values:
   * 
   * *   PriorityInstanceType
   * 
   * @example
   * PriorityInstanceType
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * The hardware configurations of the compute nodes in the queue. Valid values of N: 1 to 10.
   */
  computeNodes?: NodeTemplate[];
  /**
   * @remarks
   * Specifies whether to enable auto scale-in for the queue. Valid values:
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
   * Specifies whether to enable auto scale-out for the queue. Valid values:
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
   * The hostname prefix of the added compute nodes.
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
   * hpc
   */
  hostnameSuffix?: string;
  /**
   * @remarks
   * The initial number of compute nodes in the queue.
   * 
   * @example
   * 0
   */
  initialCount?: number;
  /**
   * @remarks
   * The type of the network for interconnecting compute nodes in the queue.
   * 
   * @example
   * erdma
   */
  interConnect?: string;
  /**
   * @remarks
   * List of excluded compute nodes in the queue.
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
   * The minimum number of compute nodes that are added to the queue during an automatic scale-out.
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
  reservedNodePoolId?: string;
  /**
   * @remarks
   * The vSwitches available for use by compute nodes in the queue.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
      computeNodes: 'ComputeNodes',
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
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
      computeNodes: { 'type': 'array', 'itemType': NodeTemplate },
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

export class UpdateQueueRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the queue to be updated.
   */
  queue?: UpdateQueueRequestQueue;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queue: UpdateQueueRequestQueue,
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

