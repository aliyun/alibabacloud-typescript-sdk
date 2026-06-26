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
   * @remarks
   * 是否始终分配GPU给函数实例。
   * 
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
   * @remarks
   * 函数的资源描述
   * 
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
   * @remarks
   * 当前目标资源个数，如果存在指标追踪伸缩策略或定时策略，为策略计算的资源个数，否则为默认预留实例数。
   * 
   * 
   * > 与 defaultTarget 有什么区别？\\
   * > 假设配置预留实例数为1后，新增了定时伸缩策略，设置某个时间段内的预留实例数为5。
   * > - 在定时伸缩策略**生效期间**，target 与 defaultTarget 分别为 5 和 1。
   * >-  在定时伸缩策略**失效期间**，target 与 defaultTarget 都为 1。
   * 
   * @example
   * 5
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

