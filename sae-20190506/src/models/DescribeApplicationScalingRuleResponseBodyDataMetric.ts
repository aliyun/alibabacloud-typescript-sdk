// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApplicationScalingRuleResponseBodyDataMetricMetrics } from "./DescribeApplicationScalingRuleResponseBodyDataMetricMetrics";
import { DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus } from "./DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus";
import { DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules } from "./DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules";
import { DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules } from "./DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules";


export class DescribeApplicationScalingRuleResponseBodyDataMetric extends $dara.Model {
  /**
   * @remarks
   * The maximum number of instances.
   * 
   * @example
   * 3
   */
  maxReplicas?: number;
  /**
   * @remarks
   * The list of metrics that are used to trigger the auto scaling policy.
   */
  metrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetrics[];
  /**
   * @remarks
   * The execution status of the metric-based auto scaling policy.
   */
  metricsStatus?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus;
  /**
   * @remarks
   * The minimum number of instances.
   * 
   * @example
   * 1
   */
  minReplicas?: number;
  /**
   * @remarks
   * Rules that determine the application scale-in.
   */
  scaleDownRules?: DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules;
  /**
   * @remarks
   * Rules that determine the application scale-out.
   */
  scaleUpRules?: DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      metricsStatus: 'MetricsStatus',
      minReplicas: 'MinReplicas',
      scaleDownRules: 'ScaleDownRules',
      scaleUpRules: 'ScaleUpRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataMetricMetrics },
      metricsStatus: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus,
      minReplicas: 'number',
      scaleDownRules: DescribeApplicationScalingRuleResponseBodyDataMetricScaleDownRules,
      scaleUpRules: DescribeApplicationScalingRuleResponseBodyDataMetricScaleUpRules,
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    if(this.metricsStatus && typeof (this.metricsStatus as any).validate === 'function') {
      (this.metricsStatus as any).validate();
    }
    if(this.scaleDownRules && typeof (this.scaleDownRules as any).validate === 'function') {
      (this.scaleDownRules as any).validate();
    }
    if(this.scaleUpRules && typeof (this.scaleUpRules as any).validate === 'function') {
      (this.scaleUpRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

