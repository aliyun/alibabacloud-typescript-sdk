// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScalingRuleRequestAlarmDimensions extends $dara.Model {
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

export class ModifyScalingRuleRequestAlarmOptions extends $dara.Model {
  /**
   * @remarks
   * The statistical period of the metric data in the target tracking scaling rule. Unit: seconds. Valid values:
   * 
   * *   15
   * *   60
   * *   120
   * *   300
   * *   900
   * 
   * >  Default value: 60.
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
   * The metric dimensions. You can use this parameter to specify the monitored resources.
   */
  dimensions?: ModifyScalingRuleRequestHybridMetricsDimensions[];
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
   * The lower limit that is specified in a step adjustment. This parameter is available only if you set the ScalingRuleType parameter to StepScalingRule. Valid values: -9.999999E18 to 9.999999E18.
   * 
   * @example
   * 1.0
   */
  metricIntervalLowerBound?: number;
  /**
   * @remarks
   * The upper limit specified in a step adjustment. This parameter is available only if you set the ScalingRuleType parameter to StepScalingRule. Valid values: -9.999999E18 to 9.999999E18.
   * 
   * @example
   * 5.0
   */
  metricIntervalUpperBound?: number;
  /**
   * @remarks
   * The number of ECS instances that you want to scale in a step adjustment. This parameter is available only if you set the ScalingRuleType parameter to StepScalingRule.
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
   * The adjustment method of the scaling rule. This is required when the ScalingRuleType parameter is set to SimpleScalingRule or StepScalingRule. Valid values:
   * 
   * *   QuantityChangeInCapacity: adds the specified number of ECS instances to or removes the specified number of ECS instances from the scaling group.
   * *   PercentChangeInCapacity: adds the specified percentage of ECS instances to or removes the specified percentage of ECS instances from the scaling group.
   * *   TotalCapacity: adjusts the number of ECS instances in the scaling group to the specified number.
   * 
   * @example
   * QuantityChangeInCapacity
   */
  adjustmentType?: string;
  /**
   * @remarks
   * The target value specified in the scaling rule. This parameter is required when the ScalingRuleType parameter is set to SimpleScalingRule or StepScalingRule. The number of ECS instances that are scaled in a single scaling activity cannot exceed 1,000.
   * 
   * *   Valid values if you set the AdjustmentType parameter to QuantityChangeInCapacity: -1000 to 1000.
   * *   Valid values if you set the AdjustmentType parameter to PercentChangeInCapacity: -100 to 10000.
   * *   Valid values if you set the AdjustmentType parameter to TotalCapacity: 0 to 2000.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * The dimensions. This parameter is applicable to target tracking scaling rules. You can specify this parameter if your predefined metric requires extra dimensions. For example, if you predefine the LoadBalancerRealServerAverageQps metric, you must use this parameter to specify the rulePool dimension.
   */
  alarmDimensions?: ModifyScalingRuleRequestAlarmDimensions[];
  /**
   * @remarks
   * The alert attributes.
   */
  alarmOptions?: ModifyScalingRuleRequestAlarmOptions;
  /**
   * @remarks
   * The cooldown time of the scaling rule. This parameter is available only if you set the ScalingRuleType parameter to SimpleScalingRule.
   * 
   * Valid values: 0 to 86400. Unit: seconds.
   * 
   * @example
   * 60
   */
  cooldown?: number;
  /**
   * @remarks
   * Specifies whether to disable scale-in. This parameter is available only if you set the ScalingRuleType parameter to TargetTrackingScalingRule.
   * 
   * @example
   * true
   */
  disableScaleIn?: boolean;
  /**
   * @remarks
   * The warmup period of an instance. This parameter is available only if you set the ScalingRuleType parameter to TargetTrackingScalingRule or PredictiveScalingRule. Auto Scaling adds ECS instances that are in the warmup state to a scaling group but does not report monitoring data to CloudMonitor during the warmup period.
   * 
   * > Auto Scaling calculates the number of ECS instances that need to be scaled. ECS instances in the warmup state are not counted towards the current capacity of the scaling group.
   * 
   * Valid values: 0 to 86400. Unit: seconds.
   * 
   * @example
   * 60
   */
  estimatedInstanceWarmup?: number;
  /**
   * @remarks
   * The Hybrid Cloud Monitoring metrics. For more information, see [Create a custom target tracking scaling rule](https://help.aliyun.com/document_detail/2852162.html).
   */
  hybridMetrics?: ModifyScalingRuleRequestHybridMetrics[];
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
   * The maximum number of ECS instances that can be contained in the scaling group. If you specify InitialMaxSize, you must specify `PredictiveValueBehavior`.
   * 
   * @example
   * 100
   */
  initialMaxSize?: number;
  /**
   * @remarks
   * The predefined metric. This parameter is required only if you create a target tracking scaling rule or predictive scaling rule.
   * 
   * Valid values if you create a target tracking scaling rule:
   * 
   * *   CpuUtilizationAgent (recommended): the CPU utilization.
   * *   MemoryUtilization (recommended): the memory usage.
   * *   CpuUtilization: the average CPU utilization.
   * *   IntranetTx: the average outbound traffic over an internal network.
   * *   IntranetRx: the average inbound traffic over an internal network.
   * *   VpcInternetTx: the average outbound traffic from a virtual private cloud (VPC) to the Internet.
   * *   VpcInternetRx: the average inbound traffic from the Internet to a VPC.
   * *   LoadBalancerRealServerAverageQps: the queries per second (QPS) per Application Load Balancer (ALB) server group.
   * 
   * Valid values if you create a predictive scaling rule:
   * 
   * *   CpuUtilization: the average CPU utilization.
   * *   IntranetRx: the average inbound traffic over an internal network.
   * *   IntranetTx: the average outbound traffic over an internal network.
   * 
   * For more information, see [Event-triggered tasks of the system monitoring type](https://help.aliyun.com/document_detail/74854.html).
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
   * The minimum number of instances to scale. This parameter takes effect only if you create a simple scaling rule or step scaling rule and set `AdjustmentType` to `PercentChangeInCapacity`.
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
   * *   PredictAndScale: produces predictions and creates prediction tasks.
   * *   PredictOnly: produces predictions but does not create prediction tasks.
   * 
   * @example
   * PredictAndScale
   */
  predictiveScalingMode?: string;
  /**
   * @remarks
   * The amount of buffer time before the prediction task is executed. By default, all prediction tasks that are automatically created for a predictive scaling rule are executed on the hour. You can specify an amount of buffer time for resource preparation before the prediction tasks are executed. Valid values: 0 to 60.
   * 
   * @example
   * 30
   */
  predictiveTaskBufferTime?: number;
  /**
   * @remarks
   * Specifies which one of the initial maximum capacity and the predicted value can be used as the maximum value for prediction tasks. Valid values:
   * 
   * *   MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for prediction tasks if the predicted value is greater than the initial maximum capacity.
   * *   PredictiveValueOverrideMax: uses the predicted value as the maximum value for prediction tasks when the predicted value is greater than the initial maximum capacity.
   * *   PredictiveValueOverrideMaxWithBuffer: increases the predicted value by a percentage that is specified by the PredictiveValueBuffer parameter. If the predicted value that is increased by the percentage is greater than the initial maximum capacity, the increased value is used as the maximum value for prediction tasks.
   * 
   * @example
   * MaxOverridePredictiveValue
   */
  predictiveValueBehavior?: string;
  /**
   * @remarks
   * The ratio based on which the predicted value is increased when `PredictiveValueBehavior` is set to `PredictiveValueOverrideMaxWithBuffer`. If the predicted value increased by this ratio is greater than the initial maximum capacity, the increased value is used as the maximum value for prediction tasks. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  predictiveValueBuffer?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The number of consecutive times that the event-triggered task created for scale-in activities must meet the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
   * 
   * @example
   * 15
   */
  scaleInEvaluationCount?: number;
  /**
   * @remarks
   * The number of consecutive times that the event-triggered task created for scale-out activities must meet the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
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
   * The name of the scaling rule. The name must be 2 to 64 letters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). It must start with a letter or digit.
   * 
   * The name of each scaling rule must be unique under the same account within the same region.
   * 
   * @example
   * scalingrule****
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * Details of the step adjustments.
   */
  stepAdjustments?: ModifyScalingRuleRequestStepAdjustments[];
  /**
   * @remarks
   * The target value. This parameter is available only if you set the ScalingRuleType parameter to TargetTrackingScalingRule or PredictiveScalingRule. The value must be greater than 0 and can have up to three decimal places.
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

