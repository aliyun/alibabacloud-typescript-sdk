// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingRuleRequestAlarmDimensions extends $dara.Model {
  /**
   * @remarks
   * The dimension key associated with the metric.
   * 
   * @example
   * rulePool
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The dimension value associated with the metric.
   * 
   * @example
   * sgp-l1cbirz451yxuxxx
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

export class CreateScalingRuleRequestAlarmOptions extends $dara.Model {
  /**
   * @remarks
   * The period for collecting metric data in the target tracking scaling rule. Unit: seconds. Valid values:
   * 
   * - 15
   * - 60
   * - 120
   * - 300
   * - 900
   * 
   * > Default value: 60.
   * 
   * @example
   * 60
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleRequestHybridMetricsDimensions extends $dara.Model {
  /**
   * @remarks
   * The dimension key of the metric.
   * 
   * @example
   * queue
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The dimension value of the metric.
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

export class CreateScalingRuleRequestHybridMetrics extends $dara.Model {
  /**
   * @remarks
   * The dimensions of the metric. Used to specify the resources monitored by the metric.
   */
  dimensions?: CreateScalingRuleRequestHybridMetricsDimensions[];
  /**
   * @remarks
   * The metric operation expression for multiple Hybrid Cloud Monitoring metrics. The calculation result of the expression is used to trigger scaling.
   * 
   * The operation expression must comply with the Reverse Polish Notation (RPN) specification, and only the `+`, `-`, `*`, and `/` operators are supported.
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
   * - Average: the average value of all data points within the specified period.
   * - Minimum: the minimum value of all data points within the specified period.
   * - Maximum: the maximum value of all data points within the specified period.
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

export class CreateScalingRuleRequestStepAdjustments extends $dara.Model {
  /**
   * @remarks
   * The lower boundary of the step adjustment. This parameter is applicable only to step scaling rules. Valid values: -9.999999E18 to 9.999999E18.
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
   * The number of instances to be scaled for the step adjustment. This parameter is applicable only to step scaling rules.
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

export class CreateScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The adjustment method of the scaling rule. This parameter is required for simple scaling rules and step scaling rules. Valid values:
   * 
   * - QuantityChangeInCapacity: adds or removes a specified number of ECS instances.
   * - PercentChangeInCapacity: adds or removes a specified percentage of ECS instances.
   * - TotalCapacity: adjusts the number of ECS instances in the scaling group to a specified number.
   * 
   * @example
   * QuantityChangeInCapacity
   */
  adjustmentType?: string;
  /**
   * @remarks
   * The adjustment value of the scaling rule. This parameter is required for simple scaling rules and step scaling rules. The number of ECS instances adjusted in a single operation cannot exceed 1,000. Valid values vary based on the adjustment method:
   * - QuantityChangeInCapacity: -1000 to 1000.
   * - PercentChangeInCapacity: -100 to 10000.
   * - TotalCapacity: 0 to 2000.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * The dimension information of the metric. This parameter is applicable to target tracking scaling rules and is configured when the metric requires additional dimension information. For example, the LoadBalancerRealServerAverageQps metric requires the dimension key-value information of rulePool.
   */
  alarmDimensions?: CreateScalingRuleRequestAlarmDimensions[];
  /**
   * @remarks
   * The definition of alert attributes.
   */
  alarmOptions?: CreateScalingRuleRequestAlarmOptions;
  /**
   * @remarks
   * The cooldown time of the scaling rule. This parameter is applicable only to simple scaling rules. Valid values: 0 to 86400. Unit: seconds.
   * 
   * Default value: none.
   * 
   * @example
   * 60
   */
  cooldown?: number;
  /**
   * @remarks
   * Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  disableScaleIn?: boolean;
  /**
   * @remarks
   * The warmup time of instances. This parameter is applicable to target tracking scaling rules and step scaling rules. ECS instances in the warmup state are added to the scaling group normally, but they do not report monitoring data to CloudMonitor during the warmup period.
   * 
   * > When dynamically calculating the number of ECS instances to be scaled, instances in the warmup state are not counted in the current number of instances.
   * 
   * Valid values: 0 to 86400. Unit: seconds.
   * 
   * Default value: 300.
   * 
   * @example
   * 300
   */
  estimatedInstanceWarmup?: number;
  /**
   * @remarks
   * The metric settings for Hybrid Cloud Monitoring. For more information about how to configure the settings, see [Customize target tracking scaling rules by using formula operations](https://help.aliyun.com/document_detail/2852162.html).
   */
  hybridMetrics?: CreateScalingRuleRequestHybridMetrics[];
  /**
   * @remarks
   * The ID of the monitoring metrics repository for Hybrid Cloud Monitoring.
   * 
   * For more information about managing monitoring metrics repositories, see [Manage monitoring metrics repositories](https://help.aliyun.com/document_detail/217606.html).
   * 
   * @example
   * aliyun-test
   */
  hybridMonitorNamespace?: string;
  /**
   * @remarks
   * The maximum number of instances in the scaling group. This parameter is used in combination with `PredictiveValueBehavior`.
   * 
   * Default value: the maximum number of instances in the scaling group (the value of MaxSize).
   * 
   * @example
   * 100
   */
  initialMaxSize?: number;
  /**
   * @remarks
   * The predefined metric. This parameter is required for target tracking scaling rules and predictive scaling rules.
   * 
   * Valid values for target tracking scaling rules: 
   * - CpuUtilizationAgent: (Agent) CPU utilization (recommended).
   * - MemoryUtilization: (Agent) memory usage (recommended).
   * - CpuUtilization: (ECS) average CPU utilization.
   * - IntranetTx: (ECS) average outbound traffic over the internal network.
   * - IntranetRx: (ECS) average inbound traffic over the internal network.
   * - VpcInternetTx: (ECS) average outbound traffic over the Internet.
   * - VpcInternetRx: (ECS) average inbound traffic over the Internet.
   * - LoadBalancerRealServerAverageQps: (ALB) average QPS per backend server in a server group.
   * 
   * Valid values for predictive scaling rules: 
   * - CpuUtilization: (ECS) average CPU utilization.
   * - IntranetRx: (ECS) average inbound traffic over the internal network.
   * - IntranetTx: (ECS) average outbound traffic over the internal network.
   * 
   * For more information, see [System monitoring event-triggered tasks](https://help.aliyun.com/document_detail/74854.html).
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
   * The minimum number of instances to be adjusted. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is set to PercentChangeInCapacity.
   * 
   * @example
   * 1
   */
  minAdjustmentMagnitude?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The mode of the predictive scaling rule. Valid values:
   * 
   * - PredictAndScale: generates prediction results and creates predictive tasks.
   * - PredictOnly: generates prediction results but does not create predictive tasks.
   * 
   * Default value: PredictAndScale.
   * 
   * @example
   * PredictAndScale
   */
  predictiveScalingMode?: string;
  /**
   * @remarks
   * The predictive tasks automatically created by predictive scaling rules are executed on the hour by default. You can set the pre-startup time to execute the predictive tasks in advance and prepare resources beforehand. Valid values: 0 to 60. Unit: minutes.
   * 
   * Default value: 0.
   * 
   * @example
   * 30
   */
  predictiveTaskBufferTime?: number;
  /**
   * @remarks
   * The processing method for the maximum value of the predictive scaling rule. Valid values:
   * 
   * - MaxOverridePredictiveValue: The initial maximum value overrides the predicted value. If the predicted value is greater than the initial maximum value, the maximum value of the predictive task uses the initial maximum value.
   * - PredictiveValueOverrideMax: The predicted value overrides the initial maximum value. If the predicted value is greater than the initial maximum value, the maximum value of the predictive task uses the predicted value.
   * - PredictiveValueOverrideMaxWithBuffer: A buffer ratio is added to the predicted value. The predicted value is increased by the ratio specified by PredictiveValueBuffer. If the increased value is greater than the initial maximum value, the increased value is used.
   * 
   * Default value: MaxOverridePredictiveValue.
   * 
   * @example
   * MaxOverridePredictiveValue
   */
  predictiveValueBehavior?: string;
  /**
   * @remarks
   * This parameter takes effect only when `PredictiveValueBehavior` is set to `PredictiveValueOverrideMaxWithBuffer`. The predicted value is increased by this ratio. If the increased value is greater than the initial maximum value, the increased value is used. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * @example
   * 50
   */
  predictiveValueBuffer?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * After a target tracking scaling rule is created, an event-triggered task is automatically created. This parameter specifies the number of consecutive times the threshold condition must be met before the corresponding scale-in event-triggered task triggers an alert.
   * 
   * Default value: 15.
   * 
   * @example
   * 15
   */
  scaleInEvaluationCount?: number;
  /**
   * @remarks
   * After a target tracking scaling rule is created, an event-triggered task is automatically created. This parameter specifies the number of consecutive times the threshold condition must be met before the corresponding scale-out event-triggered task triggers an alert.
   * 
   * Default value: 3.
   * 
   * @example
   * 3
   */
  scaleOutEvaluationCount?: number;
  /**
   * @remarks
   * The ID of the scaling group to which the scaling rule belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1ffogfdauy0jw0****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The name of the scaling rule. The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). It must start with a letter, digit, or Chinese character.
   * 
   * The name of a scaling rule must be unique within a scaling group in a region for an Alibaba Cloud account.
   * 
   * If this parameter is not specified, the value of ScalingRuleId is used by default.
   * 
   * @example
   * scalingrule****
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * The type of the scaling rule. Valid values:
   * 
   * - SimpleScalingRule: simple scaling rule. Adjusts the number of ECS or ECI instances based on the adjustment method (AdjustmentType) and adjustment value (AdjustmentValue).
   * - TargetTrackingScalingRule: target tracking scaling rule. Dynamically calculates the number of ECS or ECI instances for scale-out or scale-in based on a predefined metric (MetricName) to keep the metric value close to the target value (TargetValue).
   * - StepScalingRule: step scaling rule. Provides a step-by-step scaling method based on thresholds and metric values.
   * - PredictiveScalingRule: predictive scaling rule. Analyzes historical monitoring data of the scaling group based on machine learning capabilities to predict future metric values, and supports the automatic creation of scheduled tasks to configure the boundary values of the scaling group.
   * 
   * Default value: SimpleScalingRule.
   * 
   * @example
   * SimpleScalingRule
   */
  scalingRuleType?: string;
  /**
   * @remarks
   * The collection of instance scaling information corresponding to step adjustments.
   */
  stepAdjustments?: CreateScalingRuleRequestStepAdjustments[];
  /**
   * @remarks
   * The target value. This parameter is required for target tracking scaling rules and predictive scaling rules. The value of TargetValue can be rounded to three decimal places and must be greater than 0.
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
      alarmOptions: 'AlarmOptions',
      cooldown: 'Cooldown',
      disableScaleIn: 'DisableScaleIn',
      estimatedInstanceWarmup: 'EstimatedInstanceWarmup',
      hybridMetrics: 'HybridMetrics',
      hybridMonitorNamespace: 'HybridMonitorNamespace',
      initialMaxSize: 'InitialMaxSize',
      metricName: 'MetricName',
      metricType: 'MetricType',
      minAdjustmentMagnitude: 'MinAdjustmentMagnitude',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      predictiveScalingMode: 'PredictiveScalingMode',
      predictiveTaskBufferTime: 'PredictiveTaskBufferTime',
      predictiveValueBehavior: 'PredictiveValueBehavior',
      predictiveValueBuffer: 'PredictiveValueBuffer',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scaleInEvaluationCount: 'ScaleInEvaluationCount',
      scaleOutEvaluationCount: 'ScaleOutEvaluationCount',
      scalingGroupId: 'ScalingGroupId',
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
      alarmDimensions: { 'type': 'array', 'itemType': CreateScalingRuleRequestAlarmDimensions },
      alarmOptions: CreateScalingRuleRequestAlarmOptions,
      cooldown: 'number',
      disableScaleIn: 'boolean',
      estimatedInstanceWarmup: 'number',
      hybridMetrics: { 'type': 'array', 'itemType': CreateScalingRuleRequestHybridMetrics },
      hybridMonitorNamespace: 'string',
      initialMaxSize: 'number',
      metricName: 'string',
      metricType: 'string',
      minAdjustmentMagnitude: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      predictiveScalingMode: 'string',
      predictiveTaskBufferTime: 'number',
      predictiveValueBehavior: 'string',
      predictiveValueBuffer: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scaleInEvaluationCount: 'number',
      scaleOutEvaluationCount: 'number',
      scalingGroupId: 'string',
      scalingRuleName: 'string',
      scalingRuleType: 'string',
      stepAdjustments: { 'type': 'array', 'itemType': CreateScalingRuleRequestStepAdjustments },
      targetValue: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarmDimensions)) {
      $dara.Model.validateArray(this.alarmDimensions);
    }
    if(this.alarmOptions && typeof (this.alarmOptions as any).validate === 'function') {
      (this.alarmOptions as any).validate();
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

