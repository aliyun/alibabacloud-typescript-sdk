// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies extends $dara.Model {
  /**
   * @remarks
   * The check period. Valid values: 0 to 1,800. Unit: seconds.
   * 
   * @example
   * 15
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The policy type. Valid values: Pods and Percent.
   * 
   * @example
   * Pods
   */
  type?: string;
  /**
   * @remarks
   * The value of the policy for the scaling behavior. The value must be an integer greater than 0. If the policy type is Pods, the value indicates the number of pods. If the policy type is Percent, the value indicates a percentage, which can exceed 100%.
   * 
   * @example
   * 10
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      periodSeconds: 'PeriodSeconds',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodSeconds: 'number',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown extends $dara.Model {
  /**
   * @remarks
   * The policy configurations.
   */
  policies?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies[];
  /**
   * @remarks
   * The policy for the scale-in step size. Valid values: Max, Min, and Disable.
   * 
   * @example
   * Max
   */
  selectPolicy?: string;
  /**
   * @remarks
   * The cooldown time for scale-ins. Valid values: 0 to 3,600. Unit: seconds. Default value: 300.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      selectPolicy: 'SelectPolicy',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies },
      selectPolicy: 'string',
      stabilizationWindowSeconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies extends $dara.Model {
  /**
   * @remarks
   * The check period. Valid values: 0 to 1,800. Unit: seconds.
   * 
   * @example
   * 15
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The policy type. Valid values: Pods and Percent.
   * 
   * @example
   * Pods
   */
  type?: string;
  /**
   * @remarks
   * The value of the policy for the scaling behavior. The value must be an integer greater than 0. If the policy type is Pods, the value indicates the number of pods. If the policy type is Percent, the value indicates a percentage, which can exceed 100%.
   * 
   * @example
   * 10
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      periodSeconds: 'PeriodSeconds',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodSeconds: 'number',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUp extends $dara.Model {
  /**
   * @remarks
   * The policy configurations.
   */
  policies?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies[];
  /**
   * @remarks
   * The policy for the scale-out step size. Valid values: Max, Min, and Disable.
   * 
   * @example
   * Max
   */
  selectPolicy?: string;
  /**
   * @remarks
   * The cooldown time for scale-outs. Valid values: 0 to 3,600. Unit: seconds. Default value: 0.
   * 
   * @example
   * 0
   */
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      selectPolicy: 'SelectPolicy',
      stabilizationWindowSeconds: 'StabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies },
      selectPolicy: 'string',
      stabilizationWindowSeconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour extends $dara.Model {
  /**
   * @remarks
   * The scale-in behavior configuration.
   */
  scaleDown?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown;
  /**
   * @remarks
   * The scale-out behavior configuration.
   */
  scaleUp?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUp;
  static names(): { [key: string]: string } {
    return {
      scaleDown: 'ScaleDown',
      scaleUp: 'ScaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleDown: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown,
      scaleUp: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUp,
    };
  }

  validate() {
    if(this.scaleDown && typeof (this.scaleDown as any).validate === 'function') {
      (this.scaleDown as any).validate();
    }
    if(this.scaleUp && typeof (this.scaleUp as any).validate === 'function') {
      (this.scaleUp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  metricTargetAverageUtilization?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * cpu
   */
  metricType?: string;
  static names(): { [key: string]: string } {
    return {
      metricTargetAverageUtilization: 'MetricTargetAverageUtilization',
      metricType: 'MetricType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricTargetAverageUtilization: 'number',
      metricType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleMetric extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  maxReplicas?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   */
  metrics?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics[];
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  minReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      metrics: 'Metrics',
      minReplicas: 'MinReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      metrics: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics },
      minReplicas: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers extends $dara.Model {
  /**
   * @remarks
   * The metadata of the trigger.
   * 
   * @example
   * {"dryRun":true}
   */
  metaData?: string;
  /**
   * @remarks
   * The name of the trigger.
   * 
   * @example
   * cpu
   */
  name?: string;
  /**
   * @remarks
   * The trigger type. Only cron and app_metric are supported.
   * 
   * @example
   * cron
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metaData: 'MetaData',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleTrigger extends $dara.Model {
  /**
   * @remarks
   * The maximum number of replicas. The value cannot exceed 1,000.
   * 
   * @example
   * 122
   */
  maxReplicas?: number;
  /**
   * @remarks
   * The minimum number of replicas. The value cannot be less than 0.
   * 
   * @example
   * 1
   */
  minReplicas?: number;
  /**
   * @remarks
   * The list of trigger configurations.
   */
  triggers?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers[];
  static names(): { [key: string]: string } {
    return {
      maxReplicas: 'MaxReplicas',
      minReplicas: 'MinReplicas',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicas: 'number',
      minReplicas: 'number',
      triggers: { 'type': 'array', 'itemType': UpdateApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers },
    };
  }

  validate() {
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBodyAppScalingRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the application to which the Auto Scaling policy belongs.
   * 
   * @example
   * 78194c76-3dca-418e-a263-cccd1ab4****
   */
  appId?: string;
  /**
   * @remarks
   * The scaling behavior configuration.
   */
  behaviour?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour;
  /**
   * @remarks
   * The UNIX timestamp when the Auto Scaling policy was created. Unit: milliseconds.
   * 
   * @example
   * 1574251601785
   */
  createTime?: number;
  /**
   * @remarks
   * The UNIX timestamp when the Auto Scaling policy was last disabled. Unit: milliseconds.
   * 
   * @example
   * 1574251601785
   */
  lastDisableTime?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  maxReplicas?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   */
  metric?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleMetric;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  minReplicas?: number;
  /**
   * @remarks
   * The status of the Auto Scaling policy.
   * 
   * - **true**: enabled
   * 
   * - **false**: disabled
   * 
   * @example
   * true
   */
  scaleRuleEnabled?: boolean;
  /**
   * @remarks
   * The name of the Auto Scaling policy.
   * 
   * @example
   * cpu-trigger
   */
  scaleRuleName?: string;
  /**
   * @remarks
   * The type of the Auto Scaling policy. Only the trigger type is supported.
   * 
   * @example
   * trigger
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The trigger configuration.
   */
  trigger?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleTrigger;
  /**
   * @remarks
   * The UNIX timestamp when the Auto Scaling policy was updated. Unit: milliseconds.
   * 
   * @example
   * 1574251601785
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      behaviour: 'Behaviour',
      createTime: 'CreateTime',
      lastDisableTime: 'LastDisableTime',
      maxReplicas: 'MaxReplicas',
      metric: 'Metric',
      minReplicas: 'MinReplicas',
      scaleRuleEnabled: 'ScaleRuleEnabled',
      scaleRuleName: 'ScaleRuleName',
      scaleRuleType: 'ScaleRuleType',
      trigger: 'Trigger',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      behaviour: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour,
      createTime: 'number',
      lastDisableTime: 'number',
      maxReplicas: 'number',
      metric: UpdateApplicationScalingRuleResponseBodyAppScalingRuleMetric,
      minReplicas: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      trigger: UpdateApplicationScalingRuleResponseBodyAppScalingRuleTrigger,
      updateTime: 'number',
    };
  }

  validate() {
    if(this.behaviour && typeof (this.behaviour as any).validate === 'function') {
      (this.behaviour as any).validate();
    }
    if(this.metric && typeof (this.metric as any).validate === 'function') {
      (this.metric as any).validate();
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationScalingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Auto Scaling policy.
   */
  appScalingRule?: UpdateApplicationScalingRuleResponseBodyAppScalingRule;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * a5281053-08e4-47a5-b2ab-5c0323de7b5a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appScalingRule: 'AppScalingRule',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appScalingRule: UpdateApplicationScalingRuleResponseBodyAppScalingRule,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.appScalingRule && typeof (this.appScalingRule as any).validate === 'function') {
      (this.appScalingRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

