// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScalingRulesResponseBodyScalingRulesAlarmsDimensions } from "./DescribeScalingRulesResponseBodyScalingRulesAlarmsDimensions";


export class DescribeScalingRulesResponseBodyScalingRulesAlarms extends $dara.Model {
  /**
   * @remarks
   * The ID of the event-triggered task that is associated with the scaling rule.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****_1f9458d1-70e1-4bee-8c7f-7a47695b****
   */
  alarmTaskId?: string;
  /**
   * @remarks
   * The name of the event-triggered task that is associated with the scaling rule.
   * 
   * @example
   * alarmtask****
   */
  alarmTaskName?: string;
  /**
   * @remarks
   * The comparison operator between the statistical value and the threshold of the metric of the event-triggered task that is associated with the scaling rule. The comparison operator indicates the relationship in which the metric value and the metric threshold can meet the alert condition.
   * 
   * *   Valid value if the metric value is greater than or equal to the threshold: >=
   * *   Valid value if the metric value is less than or equal to the threshold: <=
   * *   Valid value if the metric value is greater than the threshold: >
   * *   Valid value if the metric value is less than the threshold: <
   * 
   * @example
   * >=
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The dimensions of the event-triggered task that is associated with the scaling rule.
   */
  dimensions?: DescribeScalingRulesResponseBodyScalingRulesAlarmsDimensions[];
  /**
   * @remarks
   * The number of consecutive times when the event-triggered task that is associated with the scaling rule must meet the alert condition before an alert is triggered.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The name of the metric of the event-triggered task that is associated with the scaling rule.
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The type of the metric of the event-triggered task that is associated with the scaling rule. Valid values:
   * 
   * *   system: system metrics
   * *   custom: custom metrics
   * 
   * @example
   * system
   */
  metricType?: string;
  period?: number;
  /**
   * @remarks
   * The statistical method of the event-triggered task that is associated with the scaling rule. Valid values:
   * 
   * *   Average
   * *   Maximum
   * *   Minimum
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The alert threshold of the event-triggered task that is associated with the scaling rule.
   * 
   * @example
   * 50
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      alarmTaskName: 'AlarmTaskName',
      comparisonOperator: 'ComparisonOperator',
      dimensions: 'Dimensions',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      metricType: 'MetricType',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
      alarmTaskName: 'string',
      comparisonOperator: 'string',
      dimensions: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesAlarmsDimensions },
      evaluationCount: 'number',
      metricName: 'string',
      metricType: 'string',
      period: 'number',
      statistics: 'string',
      threshold: 'number',
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

