// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeTemplate } from "./NodeTemplate";


export class QueueTemplate extends $dara.Model {
  /**
   * @remarks
   * The auto scale-out policy for the queue.
   * 
   * @example
   * PriorityInstanceType
   */
  allocationStrategy?: string;
  /**
   * @remarks
   * The list of hardware configurations for the compute nodes in the queue. You can specify 0 to 10 configurations.
   */
  computeNodes?: NodeTemplate[];
  /**
   * @remarks
   * Indicates whether to enable auto scale-in for the queue. Valid values:
   * 
   * - true: enabled
   * 
   * - false: disabled
   * 
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @remarks
   * Indicates whether to enable auto scale-out for the queue. Valid values:
   * 
   * - true: enabled
   * 
   * - false: disabled
   * 
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @remarks
   * The hostname prefix of the compute nodes in the queue.
   * 
   * >Notice: 
   * 
   * The prefix can be up to 8 characters in length for Windows operating systems and up to 32 characters in length for Linux operating systems. The prefix can contain only lowercase letters, digits, and hyphens (-).
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
   * The initial number of compute nodes in the queue.
   * 
   * @example
   * 0
   */
  initialCount?: number;
  /**
   * @remarks
   * The network type of the compute nodes in the queue. Valid values:
   * 
   * - vpc
   * 
   * - eRDMA
   * 
   * @example
   * erdma
   */
  interConnect?: string;
  /**
   * @remarks
   * The list of nodes in the queue that have deletion protection enabled.
   */
  keepAliveNodes?: string[];
  /**
   * @remarks
   * The maximum number of compute nodes in the queue.
   * 
   * @example
   * 1000
   */
  maxCount?: number;
  /**
   * @remarks
   * The maximum number of compute nodes that can be scaled out in each cycle.
   * 
   * @example
   * 99
   */
  maxCountPerCycle?: number;
  /**
   * @remarks
   * The minimum number of compute nodes in the queue.
   * 
   * @example
   * 0
   */
  minCount?: number;
  /**
   * @remarks
   * The queue name. The name must be 1 to 15 characters long. It can contain letters from the Unicode letter category, such as English letters and digits, and periods (.).
   * 
   * This parameter is required.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @remarks
   * The name of the instance role attached to the compute nodes in the queue.
   * 
   * @example
   * AliyunECSInstanceForEHPCRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the reserved node pool that the queue uses.
   * 
   * > If this parameter is specified, allocatable nodes from the reserved node pool are used to create compute nodes. The `VSwitchIds`, `HostnamePrefix`, and `HostnameSuffix` parameters are ignored.
   * 
   * @example
   * rnp-756vlp7a
   */
  reservedNodePoolId?: string;
  /**
   * @remarks
   * A list of virtual switches available to the compute nodes in the queue. You can specify 1 to 5 virtual switches.
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

