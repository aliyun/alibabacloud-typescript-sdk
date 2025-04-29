// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateScalingRuleRequestAlarmDimensions } from "./CreateScalingRuleRequestAlarmDimensions";
import { CreateScalingRuleRequestAlarmOptions } from "./CreateScalingRuleRequestAlarmOptions";
import { CreateScalingRuleRequestHybridMetrics } from "./CreateScalingRuleRequestHybridMetrics";
import { CreateScalingRuleRequestStepAdjustments } from "./CreateScalingRuleRequestStepAdjustments";


export class CreateScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The scaling method of the scaling rule. This parameter is required only if you set the ScalingRuleType parameter to SimpleScalingRule or StepScalingRule. Valid values:
   * 
   * *   QuantityChangeInCapacity: adds the specified number of ECS instances to or removes the specified number of ECS instances from the scaling group.
   * *   PercentChangeInCapacity: adds the specified percentage of ECS instances to or removes the specified percentage of ECS instances from the scaling group.
   * *   TotalCapacity: adjusts the number of ECS instances in the scaling group to a specified number.
   * 
   * @example
   * QuantityChangeInCapacity
   */
  adjustmentType?: string;
  /**
   * @remarks
   * The number of instances that must be scaled based on the scaling rule. This parameter is required only if you set the ScalingRuleType parameter to SimpleScalingRule or StepScalingRule. The number of ECS instances that are scaled in a single scaling activity cannot exceed 1,000.
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
   * The metric dimensions. This parameter is applicable to target tracking scaling rules. If your predefined metric requires extra dimensions, you must specify this parameter. For example, if you use LoadBalancerRealServerAverageQps as your predefined metric, you must use this parameter to specify the rulePool dimension.
   */
  alarmDimensions?: CreateScalingRuleRequestAlarmDimensions[];
  alarmOptions?: CreateScalingRuleRequestAlarmOptions;
  /**
   * @remarks
   * The cooldown time of the scaling rule. This parameter is available only if you set the ScalingRuleType parameter to SimpleScalingRule. Valid values: 0 to 86400. Unit: seconds.
   * 
   * By default, this parameter is left empty.
   * 
   * @example
   * 60
   */
  cooldown?: number;
  /**
   * @remarks
   * Specifies whether to disable scale-in. This parameter is available only if you set ScalingRuleType to TargetTrackingScalingRule.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  disableScaleIn?: boolean;
  /**
   * @remarks
   * The warmup period of an instance. This parameter is available only if you set the ScalingRuleType parameter to TargetTrackingScalingRule or PredictiveScalingRule. Auto Scaling adds ECS instances that are in the warmup state to a scaling group but does not report monitoring data to CloudMonitor during the warmup period.
   * 
   * > Auto Scaling calculates the number of ECS instances that must be scaled. ECS instances in the warmup state are not counted towards the current capacity of the scaling group.
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
   * The Hybrid Cloud Monitoring metrics. For more information, see [Create a custom target tracking scaling rule](https://help.aliyun.com/document_detail/2852162.html).
   */
  hybridMetrics?: CreateScalingRuleRequestHybridMetrics[];
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
   * The default value of this parameter is the value of MaxSize.
   * 
   * @example
   * 100
   */
  initialMaxSize?: number;
  /**
   * @remarks
   * The predefined metric that you want to monitor. If you set ScalingRuleType to TargetTrackingScalingRule or PredictiveScalingRule, you must specify this parameter.
   * 
   * Valid values if you set ScalingRuleType to TargetTrackingScalingRule:
   * 
   * *   CpuUtilizationAgent (recommended): the CPU utilization.
   * *   MemoryUtilization (recommended): the memory usage.
   * *   CpuUtilization: the average CPU utilization.
   * *   IntranetTx: the outbound traffic over an internal network.
   * *   IntranetRx: the average inbound traffic over an internal network.
   * *   VpcInternetTx: the outbound traffic from a virtual private cloud (VPC) to the Internet.
   * *   VpcInternetRx: the inbound traffic from the Internet to a VPC.
   * *   LoadBalancerRealServerAverageQps:the queries per second (QPS) per Application Load Balancer (ALB) server group.
   * 
   * Valid values if you set ScalingRuleType to PredictiveScalingRule:
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
   * The minimum number of instances that must be scaled when the AdjustmentType parameter is set to PercentChangeInCapacity. This parameter takes effect only if you set the ScalingRuleType parameter to SimpleScalingRule or StepScalingRule.
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
   * Default value: PredictAndScale.
   * 
   * @example
   * PredictAndScale
   */
  predictiveScalingMode?: string;
  /**
   * @remarks
   * The amount of buffer time before the prediction task is executed. By default, all prediction tasks that are automatically created for a predictive scaling rule are executed on the hour. You can specify an amount of buffer time for resource preparation before the prediction tasks are executed. Valid values: 0 to 60. Unit: minutes.
   * 
   * Default value: 0.
   * 
   * @example
   * 30
   */
  predictiveTaskBufferTime?: number;
  /**
   * @remarks
   * The maximum value for predication tasks. Valid values:
   * 
   * *   MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for prediction tasks if the predicted value is greater than the initial maximum capacity.
   * *   PredictiveValueOverrideMax: uses the predicted value as the maximum value for prediction tasks if the predicted value is greater than the initial maximum capacity.
   * *   PredictiveValueOverrideMaxWithBuffer: increases the predicted value by a percentage that is specified by the PredictiveValueBuffer parameter. If the predicted value that is increased by the percentage is greater than the initial maximum capacity, the increased value is used as the maximum value for prediction tasks.
   * 
   * Default value: MaxOverridePredictiveValue.
   * 
   * @example
   * MaxOverridePredictiveValue
   */
  predictiveValueBehavior?: string;
  /**
   * @remarks
   * The ratio based on which the predicted value is increased when you set `PredictiveValueBehavior` to `PredictiveValueOverrideMaxWithBuffer`. If the predicted value increased by this ratio is greater than the initial maximum capacity, the increased value is used as the maximum value for prediction tasks. Valid values: 0 to 100.
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
   * The number of consecutive times that the event-triggered task created for scale-in activities must meet the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
   * 
   * Default value: 15.
   * 
   * @example
   * 15
   */
  scaleInEvaluationCount?: number;
  /**
   * @remarks
   * The number of consecutive times that the event-triggered task created for scale-out activities must meet the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
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
   * The name of the scaling rule. The name must be 2 to 64 characters in length, and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
   * 
   * The name of each scaling rule must be unique under the same account within a region.
   * 
   * If you leave this parameter empty, the scaling rule ID is used.
   * 
   * @example
   * scalingrule****
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * The type of the scaling rule. Valid values:
   * 
   * *   SimpleScalingRule: a simple scaling rule. After you execute a simple scaling rule, Auto Scaling adjusts the number of ECS instances or elastic container instances in the scaling group based on the values of AdjustmentType and AdjustmentValue.
   * *   TargetTrackingScalingRule: a target tracking scaling rule. After you execute a target tracking scaling rule, Auto Scaling dynamically calculates the number of ECS instances or elastic container instances to scale based on the predefined metric (MetricName) and attempts to maintain the metric value close to the expected value (TargetValue).
   * *   StepScalingRule: a step scaling rule. After you execute a step scaling rule, Auto Scaling scales instances step by step based on the predefined thresholds and metric values.
   * *   PredictiveScalingRule: a predictive scaling rule. After you execute a predictive scaling rule, Auto Scaling uses machine learning to analyze historical monitoring data of the scaling group and predicts the future values of metrics. In addition, Auto Scaling automatically creates scheduled tasks to adjust the boundary values for the scaling group.
   * 
   * Default value: SimpleScalingRule.
   * 
   * @example
   * SimpleScalingRule
   */
  scalingRuleType?: string;
  /**
   * @remarks
   * Details of the step adjustments.
   */
  stepAdjustments?: CreateScalingRuleRequestStepAdjustments[];
  /**
   * @remarks
   * The target value. This parameter is required only if you set the ScalingRuleType parameter to TargetTrackingScalingRule or PredictiveScalingRule. The value must be greater than 0 and can have up to three decimal places.
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

