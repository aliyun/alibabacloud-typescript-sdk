// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricsTrigger } from "./MetricsTrigger";
import { TimeTrigger } from "./TimeTrigger";


export class GetAutoScalingPolicyResponseBodyScalingPolicyConstraints extends $dara.Model {
  /**
   * @remarks
   * The maximum number of nodes in the node group. Default value: 2000.
   * 
   * @example
   * 2000
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The minimum number of nodes in the node group. Default value: 0.
   * 
   * @example
   * 0
   */
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacity: 'MaxCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacity: 'number',
      minCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingPolicyResponseBodyScalingPolicyScalingRules extends $dara.Model {
  /**
   * @remarks
   * The scaling type. Valid values:
   * 
   * *   SCALE_OUT
   * *   SCALE_IN
   * 
   * @example
   * SCALE_OUT
   */
  activityType?: string;
  /**
   * @remarks
   * The adjustment type.
   * 
   * @example
   * CHANGE_IN_CAPACITY
   */
  adjustmentType?: string;
  /**
   * @remarks
   * The adjustment value. The parameter value must be a positive integer, which indicates the number of instances that you want to add or remove.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * The description of load-based scaling.
   */
  metricsTrigger?: MetricsTrigger;
  /**
   * @remarks
   * The name of the auto scaling rule.
   * 
   * @example
   * scaling-out-memory
   */
  ruleName?: string;
  /**
   * @remarks
   * The description of time-based scaling.
   */
  timeTrigger?: TimeTrigger;
  /**
   * @remarks
   * The type of the auto scaling rule. Valid values:
   * 
   * *   TIME_TRIGGER: time-based scaling
   * *   METRICS_TRIGGER: load-based scaling
   * 
   * @example
   * TIME_TRIGGER
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      metricsTrigger: 'MetricsTrigger',
      ruleName: 'RuleName',
      timeTrigger: 'TimeTrigger',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      adjustmentType: 'string',
      adjustmentValue: 'number',
      metricsTrigger: MetricsTrigger,
      ruleName: 'string',
      timeTrigger: TimeTrigger,
      triggerType: 'string',
    };
  }

  validate() {
    if(this.metricsTrigger && typeof (this.metricsTrigger as any).validate === 'function') {
      (this.metricsTrigger as any).validate();
    }
    if(this.timeTrigger && typeof (this.timeTrigger as any).validate === 'function') {
      (this.timeTrigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingPolicyResponseBodyScalingPolicy extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The maximum and minimum number of nodes in the node group.
   */
  constraints?: GetAutoScalingPolicyResponseBodyScalingPolicyConstraints;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The ID of the scaling policy.
   * 
   * @example
   * asp-asduwe23znl***
   */
  scalingPolicyId?: string;
  /**
   * @remarks
   * The auto scaling rules.
   */
  scalingRules?: GetAutoScalingPolicyResponseBodyScalingPolicyScalingRules[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      constraints: 'Constraints',
      nodeGroupId: 'NodeGroupId',
      scalingPolicyId: 'ScalingPolicyId',
      scalingRules: 'ScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      constraints: GetAutoScalingPolicyResponseBodyScalingPolicyConstraints,
      nodeGroupId: 'string',
      scalingPolicyId: 'string',
      scalingRules: { 'type': 'array', 'itemType': GetAutoScalingPolicyResponseBodyScalingPolicyScalingRules },
    };
  }

  validate() {
    if(this.constraints && typeof (this.constraints as any).validate === 'function') {
      (this.constraints as any).validate();
    }
    if(Array.isArray(this.scalingRules)) {
      $dara.Model.validateArray(this.scalingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The auto scaling policy.
   */
  scalingPolicy?: GetAutoScalingPolicyResponseBodyScalingPolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingPolicy: 'ScalingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingPolicy: GetAutoScalingPolicyResponseBodyScalingPolicy,
    };
  }

  validate() {
    if(this.scalingPolicy && typeof (this.scalingPolicy as any).validate === 'function') {
      (this.scalingPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

