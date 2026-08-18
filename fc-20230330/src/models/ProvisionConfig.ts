// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledAction } from "./ScheduledAction";
import { TargetTrackingPolicy } from "./TargetTrackingPolicy";


export class ProvisionConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to always allocate CPU to function instances.
   * 
   * @example
   * true
   */
  alwaysAllocateCPU?: boolean;
  /**
   * @remarks
   * Specifies whether to always allocate GPU to function instances.
   * 
   * @example
   * true
   */
  alwaysAllocateGPU?: boolean;
  /**
   * @remarks
   * The actual number of resources.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The error message when provisioned instance creation fails.
   * 
   * @example
   * image not found
   */
  currentError?: string;
  /**
   * @remarks
   * The default number of resources when all metric-based scaling policies and scheduled scaling policies are inactive.
   * 
   * @example
   * 5
   */
  defaultTarget?: number;
  /**
   * @remarks
   * The resource descriptor of the function.
   * 
   * @example
   * acs:fc:cn-shanghai:124:functions/myFunction/prod
   */
  functionArn?: string;
  /**
   * @remarks
   * The scheduled scaling policy configurations.
   */
  scheduledActions?: ScheduledAction[];
  /**
   * @remarks
   * The current target number of resources. If a metric-based scaling policy or scheduled scaling policy exists, this value is the number of resources calculated by the policy. Otherwise, it is the default number of provisioned instances.
   * 
   * 
   * > What is the difference between target and defaultTarget?\\
   * > Assume that the number of provisioned instances is configured as 1, and then a scheduled scaling policy is added to set the number of provisioned instances to 5 during a specific time period.
   * > - During the **active period** of the scheduled scaling policy, target and defaultTarget are 5 and 1, respectively.
   * >-  During the **inactive period** of the scheduled scaling policy, both target and defaultTarget are 1.
   * 
   * @example
   * 5
   */
  target?: number;
  /**
   * @remarks
   * The metric-based scaling policy configurations.
   */
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

