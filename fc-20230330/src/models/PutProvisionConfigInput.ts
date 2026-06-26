// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledAction } from "./ScheduledAction";
import { TargetTrackingPolicy } from "./TargetTrackingPolicy";


export class PutProvisionConfigInput extends $dara.Model {
  /**
   * @remarks
   * 是否始终分配CPU，默认为true。
   * 
   * @example
   * true
   */
  alwaysAllocateCPU?: boolean;
  /**
   * @remarks
   * 是否始终分配GPU，默认为true。
   * 
   * @example
   * true
   */
  alwaysAllocateGPU?: boolean;
  /**
   * @remarks
   * The number of target provisioned instances. Valid values: [0,10000].
   * 
   * @example
   * 5
   * 
   * **if can be null:**
   * true
   */
  defaultTarget?: number;
  /**
   * @remarks
   * public
   */
  scheduledActions?: ScheduledAction[];
  /**
   * @remarks
   * >Notice: 建议不再使用该参数，请使用 defaultTarget 参数。 </notice>
   * 预留的目标资源个数。取值范围为[0,10000]。
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   * 
   * **if can be null:**
   * true
   * 
   * @deprecated
   */
  target?: number;
  /**
   * @remarks
   * 指标追踪伸缩策略配置。
   */
  targetTrackingPolicies?: TargetTrackingPolicy[];
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'alwaysAllocateCPU',
      alwaysAllocateGPU: 'alwaysAllocateGPU',
      defaultTarget: 'defaultTarget',
      scheduledActions: 'scheduledActions',
      target: 'target',
      targetTrackingPolicies: 'targetTrackingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      alwaysAllocateGPU: 'boolean',
      defaultTarget: 'number',
      scheduledActions: { 'type': 'array', 'itemType': ScheduledAction },
      target: 'number',
      targetTrackingPolicies: { 'type': 'array', 'itemType': TargetTrackingPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.scheduledActions)) {
      $dara.Model.validateArray(this.scheduledActions);
    }
    if(Array.isArray(this.targetTrackingPolicies)) {
      $dara.Model.validateArray(this.targetTrackingPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

