// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingRulesResponseBodyScalingRulesAlarmDimensions extends $dara.Model {
  /**
   * @remarks
   * The dimension key of the metric.
   * 
   * @example
   * rulePool
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The dimension value of the metric.
   * 
   * @example
   * sgp-l1cbirz451yxu2dxxx
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
   * The key of the dimension that is associated with the metric. Valid values:
   * 
   * *   ScalingGroupId: the ID of the scaling group.
   * *   userId: the ID of the user account.
   * 
   * @example
   * scaling_group
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the dimension that is associated with the metric.
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
  /**
   * @remarks
   * The statistical period of the metric data in the target tracking scaling rule.
   * 
   * @example
   * 60
   */
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
   * The key of the metric dimension.
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

export class DescribeScalingRulesResponseBodyScalingRulesStepAdjustments extends $dara.Model {
  /**
   * @remarks
   * The lower limit of a step adjustment. Valid values: -9.999999E18 to 9.999999E18.
   * 
   * @example
   * 1.0
   */
  metricIntervalLowerBound?: number;
  /**
   * @remarks
   * The upper limit of a step adjustment. Valid values: -9.999999E18 to 9.999999E18.
   * 
   * @example
   * 5.0
   */
  metricIntervalUpperBound?: number;
  /**
   * @remarks
   * The number of ECS instances that are scaled in a step adjustment.
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
   * The adjustment method of the scaling rule. Valid values:
   * 
   * *   QuantityChangeInCapacity: adds or removes the specified number of Elastic Compute Service (ECS) instances to or from the scaling group.
   * *   PercentChangeInCapacity: adds or removes the specified percentage of ECS instances to or from the scaling group.
   * *   TotalCapacity: adjusts the number of ECS instances in the scaling group to the specified number.
   * 
   * @example
   * QuantityChangeInCapacity
   */
  adjustmentType?: string;
  /**
   * @remarks
   * The number of instances that must be scaled based on the scaling rule.
   * 
   * @example
   * 1
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * The dimensions. This parameter is applicable to target tracking scaling rules. You can specify this parameter if your predefined metric requires extra dimensions. For example, if you predefine the LoadBalancerRealServerAverageQps metric, you must use this parameter to specify the rulePool dimension.
   */
  alarmDimensions?: DescribeScalingRulesResponseBodyScalingRulesAlarmDimensions[];
  /**
   * @remarks
   * The event-triggered tasks that are associated with the scaling rule. The value of this parameter is returned only if you set ShowAlarmRules to true. Otherwise, null is returned.
   */
  alarms?: DescribeScalingRulesResponseBodyScalingRulesAlarms[];
  /**
   * @remarks
   * The cooldown period of the scaling rule. This parameter is available only if you set ScalingRuleType to SimpleScalingRule. Valid values: 0 to 86400. Unit: seconds.
   * 
   * @example
   * 20
   */
  cooldown?: number;
  /**
   * @remarks
   * Indicates whether scale-in is disabled. This parameter takes effect only if you set ScalingRuleType to TargetTrackingScalingRule. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  disableScaleIn?: boolean;
  /**
   * @remarks
   * The warm-up period of instances. During the warm-up period, a series of preparation measures are taken for the new instances. Performance metrics of instances being warmed up are not counted towards the monitoring range.
   * 
   * @example
   * 300
   */
  estimatedInstanceWarmup?: number;
  /**
   * @remarks
   * The Hybrid Cloud Monitoring metrics. For more information, see [Create a custom target tracking scaling rule](https://help.aliyun.com/document_detail/2852162.html).
   */
  hybridMetrics?: DescribeScalingRulesResponseBodyScalingRulesHybridMetrics[];
  /**
   * @remarks
   * The ID of the Hybrid Cloud Monitoring namespace.
   * 
   * For information about how to manage Hybrid Cloud Monitoring namespaces, see [Manage namespaces](https://help.aliyun.com/document_detail/217606.html).
   * 
   * @example
   * aliyun-test
   */
  hybridMonitorNamespace?: string;
  /**
   * @remarks
   * The maximum number of ECS instances that can be contained in the scaling group. If you specify this parameter, you must also specify PredictiveValueBehavior.
   * 
   * @example
   * 100
   */
  initialMaxSize?: number;
  /**
   * @remarks
   * The maximum number of ECS instances that can be contained in the scaling group.
   * 
   * @example
   * 2
   */
  maxSize?: number;
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
   * The metric type. Valid values:
   * 
   * *   system: system metrics of CloudMonitor.
   * *   custom: custom metrics that are reported to CloudMonitor.
   * *   hybrid: metrics of Hybrid Cloud Monitoring.
   * 
   * @example
   * system
   */
  metricType?: string;
  /**
   * @remarks
   * The minimum number of instances that must be scaled. This parameter takes effect only if you set ScalingRuleType to SimpleScalingRule or StepScalingRule and set AdjustmentType to PercentChangeInCapacity.
   * 
   * @example
   * 1
   */
  minAdjustmentMagnitude?: number;
  /**
   * @remarks
   * The minimum number of ECS instances that must be contained in the scaling group.
   * 
   * @example
   * 1
   */
  minSize?: number;
  /**
   * @remarks
   * The mode of the predictive scaling rule. Valid values:
   * 
   * *   PredictAndScale: provides predictions and creates prediction tasks.
   * *   PredictOnly: provides predictions but does not create prediction tasks.
   * 
   * @example
   * PredictAndScale
   */
  predictiveScalingMode?: string;
  /**
   * @remarks
   * The amount of buffer time before prediction tasks are executed. By default, all prediction tasks that are automatically created based on a predictive scaling rule are executed on the hour. You can specify a buffer time for resource preparation before prediction tasks are executed. Valid values: 0 to 60. Unit: minutes.
   * 
   * @example
   * 30
   */
  predictiveTaskBufferTime?: number;
  /**
   * @remarks
   * The action on the predicted maximum value. Valid values:
   * 
   * *   MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for prediction tasks if the predicted value is greater than the initial maximum capacity.
   * *   PredictiveValueOverrideMax: uses the predicted value as the maximum value for prediction tasks when the predicted value is greater than the initial maximum capacity.
   * *   PredictiveValueOverrideMaxWithBuffer: increases the predicted value by a ratio that is specified by PredictiveValueBuffer, and uses the increased value as the maximum value for prediction tasks if the predicted value increased by this ratio is greater than the initial maximum capacity.
   * 
   * @example
   * MaxOverridePredictiveValue
   */
  predictiveValueBehavior?: string;
  /**
   * @remarks
   * The ratio based on which the predicted value is increased when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. If the predicted value increased by this ratio is greater than the initial maximum capacity, the increased value is used as the maximum value for prediction tasks. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  predictiveValueBuffer?: number;
  /**
   * @remarks
   * The number of consecutive times that the event-triggered task for scale-in purposes must meet the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and associated with the target tracking scaling rule.
   * 
   * @example
   * 15
   */
  scaleInEvaluationCount?: number;
  /**
   * @remarks
   * The number of consecutive times that the event-triggered task created for scale-out purposes must meet the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and associated with the target tracking scaling rule.
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
   * *   SimpleScalingRule: a simple scaling rule. Once a simple scaling rule is executed, Auto Scaling adjusts the number of ECS instances in the scaling group based on the values of AdjustmentType and AdjustmentValue.
   * *   TargetTrackingScalingRule: a target tracking scaling rule. Once a target tracking scaling rule is executed, Auto Scaling dynamically calculates the number of ECS instances or elastic container instances to scale based on the predefined metric (MetricName) and attempts to maintain the metric value close to the specified target value (TargetValue).
   * *   StepScalingRule: a step scaling rule. Once a step scaling rule is executed, Auto Scaling scales instances step by step based on the predefined thresholds and metric values.
   * *   PredictiveScalingRule: a predictive scaling rule. Once a predictive scaling rule is executed, Auto Scaling analyzes the historical monitoring data based on the machine learning technology and predicts the trends of metric data. Auto Scaling also creates scheduled tasks to enable dynamic adjustment of the boundary values for the scaling group.
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
   * The target value of the metric. If you set ScalingRuleType to TargetTrackingScalingRule or PredictiveScalingRule, Auto Scaling keeps the metric value close to the target value by adding instances to or removing instances from the scaling group.
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The scaling rules.
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

