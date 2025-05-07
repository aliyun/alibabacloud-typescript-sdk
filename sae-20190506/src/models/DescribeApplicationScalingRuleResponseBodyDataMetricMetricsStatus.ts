// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics } from "./DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics";
import { DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics } from "./DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics";


export class DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatus extends $dara.Model {
  /**
   * @remarks
   * The metrics that is used to trigger the current auto scaling policy.
   */
  currentMetrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics[];
  /**
   * @remarks
   * The current number of instances.
   * 
   * @example
   * 2
   */
  currentReplicas?: number;
  /**
   * @remarks
   * The expected number of instances.
   * 
   * @example
   * 2
   */
  desiredReplicas?: number;
  /**
   * @remarks
   * The time when the auto scaling policy was last triggered.
   * 
   * @example
   * 2022-01-11T08:14:32Z
   */
  lastScaleTime?: string;
  /**
   * @remarks
   * The metrics that are used to trigger the auto scaling policy next time.
   */
  nextScaleMetrics?: DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics[];
  /**
   * @remarks
   * The duration for which the metric-based auto scaling policy takes effect next time.
   * 
   * @example
   * 3
   */
  nextScaleTimePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      currentMetrics: 'CurrentMetrics',
      currentReplicas: 'CurrentReplicas',
      desiredReplicas: 'DesiredReplicas',
      lastScaleTime: 'LastScaleTime',
      nextScaleMetrics: 'NextScaleMetrics',
      nextScaleTimePeriod: 'NextScaleTimePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusCurrentMetrics },
      currentReplicas: 'number',
      desiredReplicas: 'number',
      lastScaleTime: 'string',
      nextScaleMetrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRuleResponseBodyDataMetricMetricsStatusNextScaleMetrics },
      nextScaleTimePeriod: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.currentMetrics)) {
      $dara.Model.validateArray(this.currentMetrics);
    }
    if(Array.isArray(this.nextScaleMetrics)) {
      $dara.Model.validateArray(this.nextScaleMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

