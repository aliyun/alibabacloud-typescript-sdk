// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScalingRulesResponseBodyScalingRulesHybridMetricsDimensions } from "./DescribeScalingRulesResponseBodyScalingRulesHybridMetricsDimensions";


export class DescribeScalingRulesResponseBodyScalingRulesHybridMetrics extends $dara.Model {
  /**
   * @remarks
   * The metric dimensions. This parameter is used to specify the monitored resources.
   */
  dimensions?: DescribeScalingRulesResponseBodyScalingRulesHybridMetricsDimensions[];
  /**
   * @remarks
   * The metric expression that consists of multiple Hybrid Cloud Monitoring metrics. It calculates a result used to trigger scaling events.
   * 
   * The expression is written in Reverse Polish Notation (RPN) format and supports only the following operators: `+, -, *, /`.
   * 
   * @example
   * (a+b)/2
   */
  expression?: string;
  /**
   * @remarks
   * The reference ID of the metric in the metric expression.
   * 
   * @example
   * a
   */
  id?: string;
  /**
   * @remarks
   * The name of the Hybrid Cloud Monitoring metric.
   * 
   * @example
   * AliyunSmq_NumberOfMessagesVisible
   */
  metricName?: string;
  /**
   * @remarks
   * The statistical method of the metric value. Valid values:
   * 
   * *   Average: The average value of all metric values within a specified interval is calculated.
   * *   Minimum: The minimum value of all metric values within a specified interval is calculated.
   * *   Maximum: The maximum value of all metric values within a specified interval is calculated.
   * 
   * @example
   * Average
   */
  statistic?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      expression: 'Expression',
      id: 'Id',
      metricName: 'MetricName',
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesHybridMetricsDimensions },
      expression: 'string',
      id: 'string',
      metricName: 'string',
      statistic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

