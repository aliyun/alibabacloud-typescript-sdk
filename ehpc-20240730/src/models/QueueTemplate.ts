// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeTemplate } from "./NodeTemplate";


export class QueueTemplate extends $dara.Model {
  /**
   * @example
   * PriorityInstanceType
   */
  allocationStrategy?: string;
  computeNodes?: NodeTemplate[];
  /**
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @example
   * compute
   */
  hostnamePrefix?: string;
  hostnameSuffix?: string;
  /**
   * @example
   * 0
   */
  initialCount?: number;
  /**
   * @example
   * erdma
   */
  interConnect?: string;
  keepAliveNodes?: string[];
  /**
   * @example
   * 1000
   */
  maxCount?: number;
  /**
   * @example
   * 99
   */
  maxCountPerCycle?: number;
  /**
   * @example
   * 0
   */
  minCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @example
   * AliyunECSInstanceForEHPCRole
   */
  ramRole?: string;
  /**
   * @example
   * rnp-756vlp7a
   */
  reservedNodePoolId?: string;
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

