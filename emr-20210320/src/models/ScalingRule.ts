// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricsTrigger } from "./MetricsTrigger";
import { TimeTrigger } from "./TimeTrigger";


export class ScalingRule extends $dara.Model {
  /**
   * @remarks
   * The type of the scaling activity. This parameter is required. Valid values:
   * 
   * - SCALE_OUT: scale-out.
   * 
   * - SCALE_IN: scale-in.
   * 
   * This parameter is required.
   * 
   * @example
   * SCALE_IN
   */
  activityType?: string;
  /**
   * @remarks
   * The adjustment value. This parameter is required and must be a positive integer. It specifies the number of instances to add for a scale-out activity or remove for a scale-in activity.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * The configurations for load-based scaling.
   */
  metricsTrigger?: MetricsTrigger;
  /**
   * @remarks
   * The minimum number of instances to add during a scale-out activity.
   * 
   * @example
   * 1
   */
  minAdjustmentValue?: number;
  /**
   * @remarks
   * The name of the rule. This parameter is required and cannot be an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * scalingByYarnMemory
   */
  ruleName?: string;
  /**
   * @remarks
   * The configurations for time-based scaling.
   */
  timeTrigger?: TimeTrigger;
  /**
   * @remarks
   * The type of the scaling rule. This parameter is required. Valid values:
   * 
   * - TIME_TRIGGER: time-based scaling.
   * 
   * - METRICS_TRIGGER: load-based scaling.
   * 
   * This parameter is required.
   * 
   * @example
   * TIME_TRIGGER
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      adjustmentValue: 'AdjustmentValue',
      metricsTrigger: 'MetricsTrigger',
      minAdjustmentValue: 'MinAdjustmentValue',
      ruleName: 'RuleName',
      timeTrigger: 'TimeTrigger',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      adjustmentValue: 'number',
      metricsTrigger: MetricsTrigger,
      minAdjustmentValue: 'number',
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

