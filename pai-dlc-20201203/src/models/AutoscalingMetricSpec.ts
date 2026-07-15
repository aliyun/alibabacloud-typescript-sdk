// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutoscalingMetricSpec extends $dara.Model {
  /**
   * @remarks
   * The name of the metric for autoscaling. This can be a predefined or a custom metric.
   */
  metricName?: string;
  /**
   * @remarks
   * The cooldown period, in seconds, after a scaling activity. This prevents the service from initiating another scaling action before the effects of the previous one are observable, stabilizing resource fluctuations.
   */
  stabilizationWindowSeconds?: number;
  /**
   * @remarks
   * The target value for the specified metric. The autoscaling service tries to maintain the metric at or near this value.
   */
  targetValue?: number;
  /**
   * @remarks
   * The acceptable deviation from the `TargetValue`, specified as a percentage string. A scaling action is triggered only if the metric value moves outside the range defined by the `TargetValue` and this tolerance. This prevents scaling actions based on minor fluctuations.
   */
  tolerance?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
      targetValue: 'TargetValue',
      tolerance: 'Tolerance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      stabilizationWindowSeconds: 'number',
      targetValue: 'number',
      tolerance: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

