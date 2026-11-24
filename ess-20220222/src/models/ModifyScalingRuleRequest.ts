// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScalingRuleRequestAlarmDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension associated with the monitoring metric.
   * 
   * @example
   * rulePool
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the dimension associated with the monitoring metric.
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

export class ModifyScalingRuleRequestAlarmOptions extends $dara.Model {
  /**
   * @remarks
   * The period for collecting monitoring metric data in the target tracking scaling rule. Unit: seconds. Valid values:
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

export class ModifyScalingRuleRequestHybridMetricsDimensions extends $dara.Model {
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

export class ModifyScalingRuleRequestHybridMetrics extends $dara.Model {
  /**
   * @remarks
   * The dimensions of the metric. This parameter is used to specify the resources monitored by the metric.
   */
  dimensions?: ModifyScalingRuleRequestHybridMetricsDimensions[];
  /**
   * @remarks
   * The metric operation expression for multiple Hybrid Cloud Monitoring metrics. The calculation result of the expression is used to trigger scaling activities.
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
   * The name of the metric in the Hybrid Cloud Monitoring monitoring metrics repository.
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
      dimensions: { 'type': 'array', 'itemType': ModifyScalingRuleRequestHybridMetricsDimensions },
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

export class ModifyScalingRuleRequestStepAdjustments extends $dara.Model {
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
   * The upper boundary of the step adjustment. This parameter is applicable only to step scaling rules. Valid values: -9.999999E18 to 9.999999E18.
   * 
   * @example
   * 5.0
   */
  metricIntervalUpperBound?: number;
  /**
   * @remarks
   * The number of instances to adjust for the step adjustment. This parameter is applicable only to step scaling rules.
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

export class ModifyScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The adjustment method of the scaling rule. This parameter is required and applicable only to simple scaling rules and step scaling rules. Valid values: 
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
   * The adjustment value of the scaling rule. This parameter is required and applicable only to simple scaling rules and step scaling rules. The number of ECS instances adjusted in a single operation cannot exceed 1,000. Valid values vary based on the adjustment method:
   * 
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
   * The dimension values of the monitoring metric. This parameter is applicable to target tracking scaling rules and is configured when the monitoring metric requires additional dimension information. For example, the LoadBalancerRealServerAverageQps metric requires the rulePool dimension.
   */
  alarmDimensions?: ModifyScalingRuleRequestAlarmDimensions[];
  /**
   * @remarks
   * The alert attributes.
   */
  alarmOptions?: ModifyScalingRuleRequestAlarmOptions;
  /**
   * @remarks
   * The cooldown time of the scaling rule. This parameter is applicable only to simple scaling rules.
   * 
   * Valid values: 0 to 86400. Unit: seconds.
   * 
   * @example
   * 60
   */
  cooldown?: number;
  /**
   * @remarks
   * Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
   * 
   * @example
   * true
   */
  disableScaleIn?: boolean;
  /**
   * @remarks
   * The warmup period of instances. This parameter is applicable to target tracking scaling rules and step scaling rules. ECS instances in the warmup state are added to the scaling group as usual, but they do not report monitoring data to CloudMonitor during the warmup period.
   * 
   * > When the system dynamically calculates the number of ECS instances to scale out or scale in, instances in the warmup state are not counted as existing instances.
   * 
   * Valid values: 0 to 86400. Unit: seconds.
   * 
   * @example
   * 60
   */
  estimatedInstanceWarmup?: number;
  /**
   * @remarks
   * The Hybrid Cloud Monitoring monitoring metrics settings. For more information about how to configure the settings, see [Use formula operations to customize target tracking scaling rules](https://help.aliyun.com/document_detail/2852162.html).
   */
  hybridMetrics?: ModifyScalingRuleRequestHybridMetrics[];
  /**
   * @remarks
   * The ID of the Hybrid Cloud Monitoring monitoring metrics repository.
   * 
   * For more information about how to manage monitoring metrics repositories, see [Manage monitoring metrics repositories](https://help.aliyun.com/document_detail/217606.html).
   * 
   * @example
   * aliyun-test
   */
  hybridMonitorNamespace?: string;
  /**
   * @remarks
   * The maximum number of instances in the scaling group. This parameter is used together with `PredictiveValueBehavior`.
   * 
   * @example
   * 100
   */
  initialMaxSize?: number;
  /**
   * @remarks
   * The predefined monitoring metric. This parameter is required and applicable to target tracking scaling rules and predictive scaling rules.
   * 
   * Valid values for target tracking scaling rules:
   * 
   * - CpuUtilizationAgent: the CPU utilization collected by the CloudMonitor agent (recommended).
   * - MemoryUtilization: the memory usage collected by the CloudMonitor agent (recommended).
   * - CpuUtilization: the average CPU utilization of ECS instances.
   * - IntranetTx: the average outbound internal traffic of ECS instances.
   * - IntranetRx: the average inbound internal traffic of ECS instances.
   * - VpcInternetTx: the average outbound Internet traffic of ECS instances.
   * - VpcInternetRx: the average inbound Internet traffic of ECS instances.
   * - LoadBalancerRealServerAverageQps: the average queries per second (QPS) per backend server in an Application Load Balancer (ALB) server group.
   * 
   * Valid values for predictive scaling rules:
   * 
   * - CpuUtilization: the average CPU utilization of ECS instances.
   * - IntranetRx: the average inbound internal traffic of ECS instances.
   * - IntranetTx: the average outbound internal traffic of ECS instances.
   * 
   * For more information, see [System monitoring event-triggered tasks](https://help.aliyun.com/document_detail/74854.html).
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The type of the monitoring metric. Valid values:
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
   * The minimum number of instances to adjust. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and `AdjustmentType` is set to `PercentChangeInCapacity`.
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
   * @example
   * PredictAndScale
   */
  predictiveScalingMode?: string;
  /**
   * @remarks
   * By default, predictive tasks automatically created by predictive scaling rules are executed on the hour. You can set a pre-start time to execute the predictive tasks in advance and prepare resources. Valid values: 0 to 60. Unit: minutes.
   * 
   * @example
   * 30
   */
  predictiveTaskBufferTime?: number;
  /**
   * @remarks
   * The method to handle the maximum value for the predictive scaling rule. Valid values:
   * 
   * - MaxOverridePredictiveValue: the initial maximum value overrides the predicted value. If the predicted value is greater than the initial maximum value, the initial maximum value is used as the maximum value for the predictive task.
   * - PredictiveValueOverrideMax: the predicted value overrides the initial maximum value. If the predicted value is greater than the initial maximum value, the predicted value is used as the maximum value for the predictive task.
   * - PredictiveValueOverrideMaxWithBuffer: a buffer ratio is added to the predicted value. The predicted value is increased by the ratio specified by PredictiveValueBuffer. If the increased value is greater than the initial maximum value, the increased value is used.
   * 
   * @example
   * MaxOverridePredictiveValue
   */
  predictiveValueBehavior?: string;
  /**
   * @remarks
   * The buffer ratio added to the predicted value. This parameter takes effect only when `PredictiveValueBehavior` is set to `PredictiveValueOverrideMaxWithBuffer`. The predicted value is increased by this ratio. If the increased value is greater than the initial maximum value, the increased value is used. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  predictiveValueBuffer?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * After a target tracking scaling rule is created, an event-triggered task is automatically created. This parameter specifies the number of consecutive times that the threshold condition must be met before the scale-in event-triggered task triggers an alert.
   * 
   * @example
   * 15
   */
  scaleInEvaluationCount?: number;
  /**
   * @remarks
   * After a target tracking scaling rule is created, an event-triggered task is automatically created. This parameter specifies the number of consecutive times that the threshold condition must be met before the scale-out event-triggered task triggers an alert.
   * 
   * @example
   * 3
   */
  scaleOutEvaluationCount?: number;
  /**
   * @remarks
   * The ID of the scaling rule that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * asr-bp1dvirgwkoowxk7****
   */
  scalingRuleId?: string;
  /**
   * @remarks
   * The name of the scaling rule. The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). It must start with a letter or digit. The scaling rule name must be unique within a scaling group in a region for an Alibaba Cloud account.
   * 
   * @example
   * scalingrule****
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * The set of instance scaling configurations for step adjustments.
   */
  stepAdjustments?: ModifyScalingRuleRequestStepAdjustments[];
  /**
   * @remarks
   * The target value. This parameter is applicable to target tracking scaling rules and predictive scaling rules. The value can have up to three decimal places and must be greater than 0.
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
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scaleInEvaluationCount: 'ScaleInEvaluationCount',
      scaleOutEvaluationCount: 'ScaleOutEvaluationCount',
      scalingRuleId: 'ScalingRuleId',
      scalingRuleName: 'ScalingRuleName',
      stepAdjustments: 'StepAdjustments',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustmentType: 'string',
      adjustmentValue: 'number',
      alarmDimensions: { 'type': 'array', 'itemType': ModifyScalingRuleRequestAlarmDimensions },
      alarmOptions: ModifyScalingRuleRequestAlarmOptions,
      cooldown: 'number',
      disableScaleIn: 'boolean',
      estimatedInstanceWarmup: 'number',
      hybridMetrics: { 'type': 'array', 'itemType': ModifyScalingRuleRequestHybridMetrics },
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
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scaleInEvaluationCount: 'number',
      scaleOutEvaluationCount: 'number',
      scalingRuleId: 'string',
      scalingRuleName: 'string',
      stepAdjustments: { 'type': 'array', 'itemType': ModifyScalingRuleRequestStepAdjustments },
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

