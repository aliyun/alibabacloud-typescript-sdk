// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledAction } from "./ScheduledAction";
import { TargetTrackingPolicy } from "./TargetTrackingPolicy";


export class PutProvisionConfigInput extends $dara.Model {
  /**
   * @example
   * true
   */
  alwaysAllocateCPU?: boolean;
  /**
   * @example
   * true
   */
  alwaysAllocateGPU?: boolean;
  /**
   * **if can be null:**
   * true
   */
  defaultTarget?: number;
  scheduledActions?: ScheduledAction[];
  /**
   * @remarks
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

