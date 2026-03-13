// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledAction } from "./ScheduledAction";
import { TargetTrackingPolicy } from "./TargetTrackingPolicy";


export class ProvisionConfig extends $dara.Model {
  /**
   * @remarks
   * The target number of provisioned instances at the current time. If a metric-based or scheduled auto scaling policy is in effect, the value of this parameter is the number of provisioned instances as calculated by the policy. Otherwise, the value is the default number of provisioned instances when all auto scaling policies become invalid.
   * 
   * >  Comparison between this parameter and defaultTarget\\
   * Assume that after the number of provisioned instances is set to 1, a scheduled auto scaling policy is added, and this auto scaling policy increases the number of provisioned instances during a specified time period to 5.
   * 
   * *   During the time period when the scheduled policy **takes effect**, the value of the target parameter is 5, while the value of the defaultTarget parameter is 1.
   * 
   * *   When the scheduled policy **is ineffective**, both the target value and defaultTarget value are 1.
   * 
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
   * @remarks
   * public
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * public
   * 
   * @example
   * image not found
   */
  currentError?: string;
  /**
   * @remarks
   * public
   * 
   * @example
   * 5
   */
  defaultTarget?: number;
  /**
   * @example
   * acs:fc:cn-shanghai:124:functions/myFunction/prod
   */
  functionArn?: string;
  /**
   * @remarks
   * public
   */
  scheduledActions?: ScheduledAction[];
  /**
   * @example
   * 5
   */
  target?: number;
  targetTrackingPolicies?: TargetTrackingPolicy[];
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'alwaysAllocateCPU',
      alwaysAllocateGPU: 'alwaysAllocateGPU',
      current: 'current',
      currentError: 'currentError',
      defaultTarget: 'defaultTarget',
      functionArn: 'functionArn',
      scheduledActions: 'scheduledActions',
      target: 'target',
      targetTrackingPolicies: 'targetTrackingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      alwaysAllocateGPU: 'boolean',
      current: 'number',
      currentError: 'string',
      defaultTarget: 'number',
      functionArn: 'string',
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

