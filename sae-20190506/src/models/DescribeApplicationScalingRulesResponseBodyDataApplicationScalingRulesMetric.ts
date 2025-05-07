// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics } from "./DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics";
import { DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus } from "./DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus";
import { DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules } from "./DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules";
import { DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules } from "./DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules";


export class DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetric extends $dara.Model {
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
  metrics?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics[];
  /**
   * @remarks
   * The execution status of the metric-based auto scaling policy.
   */
  metricsStatus?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus;
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
  scaleDownRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules;
  /**
   * @remarks
   * Rules that determine the application scale-out.
   */
  scaleUpRules?: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules;
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
      metrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetrics },
      metricsStatus: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricMetricsStatus,
      minReplicas: 'number',
      scaleDownRules: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleDownRules,
      scaleUpRules: DescribeApplicationScalingRulesResponseBodyDataApplicationScalingRulesMetricScaleUpRules,
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

