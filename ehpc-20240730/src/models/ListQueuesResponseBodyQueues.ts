// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeTemplate } from "./NodeTemplate";
import { ListQueuesResponseBodyQueuesNodes } from "./ListQueuesResponseBodyQueuesNodes";


export class ListQueuesResponseBodyQueues extends $dara.Model {
  /**
   * @remarks
   * The hardware configurations of the compute nodes that are added in auto scale-outs. Up to five nodes are displayed.
   */
  computeNodes?: NodeTemplate[];
  /**
   * @remarks
   * The time when the queue was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2023-11-10T02:04:00Z
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
   * The maximum number of compute nodes that the queue can contain.
   * 
   * @example
   * 100
   */
  maxCount?: number;
  /**
   * @remarks
   * The minimum number of compute nodes that are added to the queue in each auto scale-out.
   * 
   * @example
   * 1
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
   * The statistics about the compute nodes in the queue.
   */
  nodes?: ListQueuesResponseBodyQueuesNodes;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @remarks
   * The total number of vCPUs that are used by all compute nodes in the queue.
   * 
   * @example
   * 24
   */
  totalCores?: number;
  /**
   * @remarks
   * The time when the queue was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-04-25T02:02:32
   */
  updateTime?: string;
  /**
   * @remarks
   * The vSwitches that can be used for added nodes during auto scale-outs. Up to three vSwitches are displayed.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      computeNodes: 'ComputeNodes',
      createTime: 'CreateTime',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      maxCount: 'MaxCount',
      maxCountPerCycle: 'MaxCountPerCycle',
      minCount: 'MinCount',
      nodes: 'Nodes',
      queueName: 'QueueName',
      totalCores: 'TotalCores',
      updateTime: 'UpdateTime',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeNodes: { 'type': 'array', 'itemType': NodeTemplate },
      createTime: 'string',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      maxCount: 'number',
      maxCountPerCycle: 'number',
      minCount: 'number',
      nodes: ListQueuesResponseBodyQueuesNodes,
      queueName: 'string',
      totalCores: 'number',
      updateTime: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.computeNodes)) {
      $dara.Model.validateArray(this.computeNodes);
    }
    if(this.nodes && typeof (this.nodes as any).validate === 'function') {
      (this.nodes as any).validate();
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

