// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricsTrigger } from "./MetricsTrigger";
import { TimeTrigger } from "./TimeTrigger";


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

