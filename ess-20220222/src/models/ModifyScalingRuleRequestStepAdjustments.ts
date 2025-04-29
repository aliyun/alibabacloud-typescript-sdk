// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScalingRuleRequestStepAdjustments extends $dara.Model {
  /**
   * @remarks
   * The lower limit that is specified in a step adjustment. This parameter is available only if you set the ScalingRuleType parameter to StepScalingRule. Valid values: -9.999999E18 to 9.999999E18.
   * 
   * @example
   * 1.0
   */
  metricIntervalLowerBound?: number;
  /**
   * @remarks
   * The upper limit specified in a step adjustment. This parameter is available only if you set the ScalingRuleType parameter to StepScalingRule. Valid values: -9.999999E18 to 9.999999E18.
   * 
   * @example
   * 5.0
   */
  metricIntervalUpperBound?: number;
  /**
   * @remarks
   * The number of ECS instances that you want to scale in a step adjustment. This parameter is available only if you set the ScalingRuleType parameter to StepScalingRule.
   * 
   * @example
   * 1
   */
  scalingAdjustment?: number;
  static names(): { [key: string]: string } {
    return {
      metricIntervalLowerBound: 'MetricIntervalLowerBound',
      metricIntervalUpperBound: 'MetricIntervalUpperBound',
      scalingAdjustment: 'ScalingAdjustment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricIntervalLowerBound: 'number',
      metricIntervalUpperBound: 'number',
      scalingAdjustment: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

