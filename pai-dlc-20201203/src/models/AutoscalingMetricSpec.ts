// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutoscalingMetricSpec extends $dara.Model {
  /**
   * @remarks
   * The name of the monitoring metrics used for auto scaling.
   * 
   * @example
   * POD_CPU_UTIL
   */
  metricName?: string;
  /**
   * @remarks
   * The duration of the stabilization window for the auto scaling metric, in seconds.
   * 
   * @example
   * 60
   */
  stabilizationWindowSeconds?: number;
  /**
   * @remarks
   * The target value of the monitoring metrics for auto scaling.
   * 
   * @example
   * 80
   */
  targetValue?: number;
  /**
   * @remarks
   * The allowed bias ratio for the target value of the monitoring metrics.
   * 
   * @example
   * 0.1
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

