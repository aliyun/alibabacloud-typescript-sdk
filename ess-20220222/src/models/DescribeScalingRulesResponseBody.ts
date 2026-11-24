// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingRulesResponseBodyScalingRulesAlarmDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension associated with the metric.
   * 
   * @example
   * rulePool
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the dimension associated with the metric.
   * 
   * @example
   * sgp-l1cbirz451yxu2****
   */
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesAlarmsDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension associated with the metric. Valid values:
   * 
   * - scaling_group: the ID of the scaling group.
   * - userId: the ID of the user account.
   * 
   * @example
   * scaling_group
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the dimension associated with the metric.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesAlarms extends $dara.Model {
  /**
   * @remarks
   * The ID of the event-triggered task associated with the scaling rule.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****_1f9458d1-70e1-4bee-8c7f-7a47695b****
   */
  alarmTaskId?: string;
  /**
   * @remarks
   * The name of the event-triggered task associated with the scaling rule.
   * 
   * @example
   * alarmtask****
   */
  alarmTaskName?: string;
  /**
   * @remarks
   * The comparison operator used to compare the statistical value of the metric with the threshold for the event-triggered task associated with the scaling rule. This operator specifies the relationship between the statistical value and the threshold that meets the condition. Valid values:
   * 
   * - >=: the statistical value of the metric is greater than or equal to the threshold.
   * - <=: the statistical value of the metric is less than or equal to the threshold.
   * - >: the statistical value of the metric is greater than the threshold.
   * - <: the statistical value of the metric is less than the threshold.
   * 
   * @example
   * >=
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The dimension information of the event-triggered task associated with the scaling rule.
   */
  dimensions?: DescribeScalingRulesResponseBodyScalingRulesAlarmsDimensions[];
  /**
   * @remarks
   * The number of consecutive times the threshold expression must be met for the event-triggered task associated with the scaling rule to reach the alert state.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The name of the metric for the event-triggered task associated with the scaling rule.
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The type of the event-triggered task associated with the scaling rule. Valid values:
   * 
   * - system: system monitoring event-triggered task.
   * - custom: custom monitoring event-triggered task.
   * 
   * @example
   * system
   */
  metricType?: string;
  /**
   * @remarks
   * The period for collecting metric data in the target tracking scaling rule.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The statistical method of the event-triggered task associated with the scaling rule. Valid values:
   * 
   * - Average: the average value.
   * - Maximum: the maximum value.
   * - Minimum: the minimum value.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The alert threshold of the event-triggered task associated with the scaling rule.
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

export class DescribeScalingRulesResponseBodyScalingRulesHybridMetricsDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the metric dimension.
   * 
   * @example
   * queue
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the metric dimension.
   * 
   * @example
   * testQueue
   */
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBodyScalingRulesHybridMetrics extends $dara.Model {
  /**
   * @remarks
   * The dimensions of the metric. Used to specify the resources monitored by the metric.
   */
  dimensions?: DescribeScalingRulesResponseBodyScalingRulesHybridMetricsDimensions[];
  /**
   * @remarks
   * The metric operation expression for multiple Hybrid Cloud Monitoring metrics. The calculation result of the expression is used to trigger scaling.
   * 
   * The operation expression must meet the Reverse Polish Notation (RPN) specification, and only the `+ - * /` operators are supported.
   * 
   * @example
   * (a+b)/2
   */
  expression?: string;
  /**
   * @remarks
   * The reference ID of the metric in the metric operation expression.
   * 
   * @example
   * a
   */
  id?: string;
  /**
   * @remarks
   * The name of the monitoring metrics in the monitoring metrics repository for Hybrid Cloud Monitoring.
   * 
   * @example
   * AliyunSmq_NumberOfMessagesVisible
   */
  metricName?: string;
  /**
   * @remarks
   * The statistical method of the metric. Valid values:
   * 
   * - Average: the average value of all data points in the specified period.
   * - Minimum: the minimum value of all data points in the specified period.
   * - Maximum: the maximum value of all data points in the specified period.
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

export class DescribeScalingRulesResponseBodyScalingRulesStepAdjustments extends $dara.Model {
  /**
   * @remarks
   * The lower boundary of the step adjustment. Valid values: -9.999999E18 to 9.999999E18.
   * 
   * @example
   * 1.0
   */
  metricIntervalLowerBound?: number;
  /**
   * @remarks
   * The upper boundary of the step adjustment. Valid values: -9.999999E18 to 9.999999E18.
   * 
   * @example
   * 5.0
   */
  metricIntervalUpperBound?: number;
  /**
   * @remarks
   * The number of instances to be scaled for the step adjustment.
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

export class DescribeScalingRulesResponseBodyScalingRules extends $dara.Model {
  /**
   * @remarks
   * The adjustment type of the scaling rule. Valid values:
   * 
   * - QuantityChangeInCapacity: increases or decreases a specified number of ECS instances.
   * - PercentChangeInCapacity: increases or decreases a specified percentage of ECS instances.
   * - TotalCapacity: adjusts the number of ECS instances in the scaling group to a specified number.
   * 
   * @example
   * QuantityChangeInCapacity
   */
  adjustmentType?: string;
  /**
   * @remarks
   * The adjustment value of the scaling rule.
   * 
   * @example
   * 1
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * The dimension value of the metric. This parameter applies to target tracking scaling rules and is configured when the metric requires additional dimension information. For example, the LoadBalancerRealServerAverageQps metric requires the rulePool dimension information.
   */
  alarmDimensions?: DescribeScalingRulesResponseBodyScalingRulesAlarmDimensions[];
  /**
   * @remarks
   * The CloudMonitor event-triggered tasks associated with the scaling rule. The associated CloudMonitor event-triggered tasks are returned only when the ShowAlarmRules parameter is set to true. Otherwise, an empty list is returned.
   */
  alarms?: DescribeScalingRulesResponseBodyScalingRulesAlarms[];
  /**
   * @remarks
   * The cooldown time of the scaling rule. This parameter applies only to simple scaling rules. Valid values: 0 to 86400. Unit: seconds.
   * 
   * @example
   * 20
   */
  cooldown?: number;
  /**
   * @remarks
   * Specifies whether to disable scale-in. This parameter applies only to target tracking scaling rules. Valid values:
   * 
   * - true: disables scale-in.
   * - false: allows scale-in.
   * 
   * @example
   * true
   */
  disableScaleIn?: boolean;
  /**
   * @remarks
   * The warmup time required for newly created instances to complete a series of preparations. During the warmup period, the started instances do not affect the monitoring metrics of the scaling group.
   * 
   * @example
   * 300
   */
  estimatedInstanceWarmup?: number;
  /**
   * @remarks
   * The monitoring metrics settings for Hybrid Cloud Monitoring. For more information about how to configure the settings, see [Use formula operations to customize target tracking scaling rules](https://help.aliyun.com/document_detail/2852162.html).
   */
  hybridMetrics?: DescribeScalingRulesResponseBodyScalingRulesHybridMetrics[];
  /**
   * @remarks
   * The ID of the monitoring metrics repository for Hybrid Cloud Monitoring.
   * 
   * To manage monitoring metrics repositories, see [Manage monitoring metrics repositories](https://help.aliyun.com/document_detail/217606.html).
   * 
   * @example
   * aliyun-test
   */
  hybridMonitorNamespace?: string;
  /**
   * @remarks
   * The maximum number of instances in the scaling group. This parameter is used in combination with PredictiveValueBehavior.
   * 
   * @example
   * 100
   */
  initialMaxSize?: number;
  /**
   * @remarks
   * The maximum number of instances in the scaling group.
   * 
   * @example
   * 2
   */
  maxSize?: number;
  /**
   * @remarks
   * The name of the metric for the event-triggered task associated with the scaling rule.
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The type of the metric. Valid values:
   * 
   * - system: uses system metrics of CloudMonitor.
   * - custom: uses custom metrics reported to CloudMonitor.
   * - hybrid: uses metrics of Hybrid Cloud Monitoring.
   * 
   * @example
   * system
   */
  metricType?: string;
  /**
   * @remarks
   * The minimum number of instances to be adjusted by the scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and the AdjustmentType is PercentChangeInCapacity.
   * 
   * @example
   * 1
   */
  minAdjustmentMagnitude?: number;
  /**
   * @remarks
   * The minimum number of instances in the scaling group.
   * 
   * @example
   * 1
   */
  minSize?: number;
  /**
   * @remarks
   * The mode of the predictive scaling rule. Valid values:
   * 
   * - PredictAndScale: generates prediction results and creates predictive tasks.
   * - PredictOnly: generates prediction results but does not create predictive tasks.
   * 
   * @example
   * PredictAndScale
   */
  predictiveScalingMode?: string;
  /**
   * @remarks
   * The predictive tasks automatically created by the predictive scaling rule are executed on the hour by default. You can set the pre-start time to execute the predictive tasks in advance and prepare resources. Valid values: 0 to 60. Unit: minutes.
   * 
   * @example
   * 30
   */
  predictiveTaskBufferTime?: number;
  /**
   * @remarks
   * The processing method for the maximum value of the predictive scaling rule. Valid values:
   * 
   * - MaxOverridePredictiveValue: the initial maximum value overrides the predicted value. If the predicted value is greater than the initial maximum value, the maximum value of the predictive task uses the initial maximum value.
   * - PredictiveValueOverrideMax: the predicted value overrides the initial maximum value. If the predicted value is greater than the initial maximum value, the maximum value of the predictive task uses the predicted value.
   * - PredictiveValueOverrideMaxWithBuffer: a certain percentage is added to the predicted value. The predicted value is increased by the percentage specified by PredictiveValueBuffer. If the increased value is greater than the initial maximum value, the increased value is used.
   * 
   * @example
   * MaxOverridePredictiveValue
   */
  predictiveValueBehavior?: string;
  /**
   * @remarks
   * This parameter takes effect when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. The predicted value is increased by this percentage. If the increased value is greater than the initial maximum value, the increased value is used. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  predictiveValueBuffer?: number;
  /**
   * @remarks
   * After a target tracking scaling rule is created, an event-triggered task is automatically created. This parameter specifies the number of consecutive times the threshold condition must be met to trigger the scale-in event-triggered task.
   * 
   * @example
   * 15
   */
  scaleInEvaluationCount?: number;
  /**
   * @remarks
   * After a target tracking scaling rule is created, an event-triggered task is automatically created. This parameter specifies the number of consecutive times the threshold condition must be met to trigger the scale-out event-triggered task.
   * 
   * @example
   * 3
   */
  scaleOutEvaluationCount?: number;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-bp1ffogfdauy0jw0****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The unique identifier of the scaling rule.
   * 
   * @example
   * ari:acs:ess:cn-hangzhou:140692647406****:scalingrule/asr-bp1dvirgwkoowxk7****
   */
  scalingRuleAri?: string;
  /**
   * @remarks
   * The ID of the scaling rule.
   * 
   * @example
   * asr-bp1dvirgwkoowxk7****
   */
  scalingRuleId?: string;
  /**
   * @remarks
   * The name of the scaling rule.
   * 
   * @example
   * scalingrule****
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * The type of the scaling rule. Valid values:
   * 
   * - SimpleScalingRule: simple scaling rule. Adjusts the number of ECS instances based on the adjustment type (AdjustmentType) and adjustment value (AdjustmentValue).
   * - TargetTrackingScalingRule: target tracking scaling rule. Dynamically calculates the number of ECS instances to scale out or scale-in based on a predefined metric (MetricName) and attempts to maintain the metric value near the target value (TargetValue).
   * - StepScalingRule: step scaling rule. Provides a step-by-step extension method based on thresholds and metric values.
   * - PredictiveScalingRule: predictive scaling rule. Analyzes the historical monitoring data of the scaling group based on machine learning capabilities to predict future monitoring metrics, and supports the automatic creation of scheduled tasks to set the boundaries of the scaling group.
   * 
   * @example
   * SimpleScalingRule
   */
  scalingRuleType?: string;
  /**
   * @remarks
   * The step adjustments of the step scaling rule.
   */
  stepAdjustments?: DescribeScalingRulesResponseBodyScalingRulesStepAdjustments[];
  /**
   * @remarks
   * The target value. When the scaling rule is a target tracking scaling rule or a predictive scaling rule, the scaling rule maintains the metric near the target value by adding or removing instances.
   * 
   * @example
   * 0.125
   */
  targetValue?: number;
  static names(): { [key: string]: string } {
    return {
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      alarmDimensions: 'AlarmDimensions',
      alarms: 'Alarms',
      cooldown: 'Cooldown',
      disableScaleIn: 'DisableScaleIn',
      estimatedInstanceWarmup: 'EstimatedInstanceWarmup',
      hybridMetrics: 'HybridMetrics',
      hybridMonitorNamespace: 'HybridMonitorNamespace',
      initialMaxSize: 'InitialMaxSize',
      maxSize: 'MaxSize',
      metricName: 'MetricName',
      metricType: 'MetricType',
      minAdjustmentMagnitude: 'MinAdjustmentMagnitude',
      minSize: 'MinSize',
      predictiveScalingMode: 'PredictiveScalingMode',
      predictiveTaskBufferTime: 'PredictiveTaskBufferTime',
      predictiveValueBehavior: 'PredictiveValueBehavior',
      predictiveValueBuffer: 'PredictiveValueBuffer',
      scaleInEvaluationCount: 'ScaleInEvaluationCount',
      scaleOutEvaluationCount: 'ScaleOutEvaluationCount',
      scalingGroupId: 'ScalingGroupId',
      scalingRuleAri: 'ScalingRuleAri',
      scalingRuleId: 'ScalingRuleId',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleType: 'ScalingRuleType',
      stepAdjustments: 'StepAdjustments',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      alarmDimensions: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesAlarmDimensions },
      alarms: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesAlarms },
      cooldown: 'number',
      disableScaleIn: 'boolean',
      estimatedInstanceWarmup: 'number',
      hybridMetrics: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesHybridMetrics },
      hybridMonitorNamespace: 'string',
      initialMaxSize: 'number',
      maxSize: 'number',
      metricName: 'string',
      metricType: 'string',
      minAdjustmentMagnitude: 'number',
      minSize: 'number',
      predictiveScalingMode: 'string',
      predictiveTaskBufferTime: 'number',
      predictiveValueBehavior: 'string',
      predictiveValueBuffer: 'number',
      scaleInEvaluationCount: 'number',
      scaleOutEvaluationCount: 'number',
      scalingGroupId: 'string',
      scalingRuleAri: 'string',
      scalingRuleId: 'string',
      scalingRuleName: 'string',
      scalingRuleType: 'string',
      stepAdjustments: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRulesStepAdjustments },
      targetValue: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarmDimensions)) {
      $dara.Model.validateArray(this.alarmDimensions);
    }
    if(Array.isArray(this.alarms)) {
      $dara.Model.validateArray(this.alarms);
    }
    if(Array.isArray(this.hybridMetrics)) {
      $dara.Model.validateArray(this.hybridMetrics);
    }
    if(Array.isArray(this.stepAdjustments)) {
      $dara.Model.validateArray(this.stepAdjustments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the scaling rules.
   */
  scalingRules?: DescribeScalingRulesResponseBodyScalingRules[];
  /**
   * @remarks
   * The total number of scaling rules.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scalingRules: 'ScalingRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scalingRules: { 'type': 'array', 'itemType': DescribeScalingRulesResponseBodyScalingRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scalingRules)) {
      $dara.Model.validateArray(this.scalingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

