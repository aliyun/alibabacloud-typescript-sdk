// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledAction } from "./ScheduledAction";
import { TargetTrackingPolicy } from "./TargetTrackingPolicy";


export class PutProvisionConfigInput extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to always allocate CPU. Default value: true.
   * 
   * @example
   * true
   */
  alwaysAllocateCPU?: boolean;
  /**
   * @remarks
   * Specifies whether to always allocate GPU. Default value: true.
   * 
   * @example
   * true
   */
  alwaysAllocateGPU?: boolean;
  /**
   * @remarks
   * The default minimum number of provisioned instances. Valid values: 0 to 10000.
   * > - If no metric-based auto elastic policy or scheduled elastic policy is configured, the current minimum number of instances equals the minimum number of instances you configured.
   * > - If you configured multiple elastic policies for the minimum number of instances, the system calculates the minimum number of instances triggered by each policy and uses the maximum value among the elastic policies that are effective at the current time as the current minimum number of instances.
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
   * The scheduled scaling configuration.
   */
  scheduledActions?: ScheduledAction[];
  /**
   * @remarks
   * >Notice: This parameter is no longer recommended. Use the defaultTarget parameter instead.</notice>
   * The target number of provisioned resources. Valid values: 0 to 10000.
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
   * The metric-based scaling policy configuration.
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

