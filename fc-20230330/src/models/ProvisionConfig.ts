// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledAction } from "./ScheduledAction";
import { TargetTrackingPolicy } from "./TargetTrackingPolicy";


export class ProvisionConfig extends $dara.Model {
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
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * image not found
   */
  currentError?: string;
  /**
   * @example
   * 5
   */
  defaultTarget?: number;
  /**
   * @example
   * acs:fc:cn-shanghai:124:functions/myFunction/prod
   */
  functionArn?: string;
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

