// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateScalingRuleRequestHybridMetricsDimensions } from "./CreateScalingRuleRequestHybridMetricsDimensions";


export class CreateScalingRuleRequestHybridMetrics extends $dara.Model {
  /**
   * @remarks
   * The metric dimensions. You can use this parameter to specify the monitored resources.
   */
  dimensions?: CreateScalingRuleRequestHybridMetricsDimensions[];
  /**
   * @remarks
   * The metric expression that consists of multiple Hybrid Cloud Monitoring metrics. It calculates a result used to trigger scaling events.
   * 
   * The expression must be written in Reverse Polish Notation (RPN) format and supports only the following operators: `+, -, *, /`.
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
   * *   Average: calculates the average value of all metric values within a specified interval.
   * *   Minimum: calculates the minimum value of all metric values within a specified interval.
   * *   Maximum: calculates the maximum value of all metric values within a specified interval.
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
      dimensions: { 'type': 'array', 'itemType': CreateScalingRuleRequestHybridMetricsDimensions },
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

