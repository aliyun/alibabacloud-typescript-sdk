// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies extends $dara.Model {
  /**
   * @remarks
   * The cycle of the policy check. Valid values: 0 to 1800. Unit: seconds.
   * 
   * @example
   * 15
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The type of the policy. Valid values: Pods and Percent.
   * 
   * @example
   * Pods
   */
  type?: string;
  /**
   * @remarks
   * The policy value of auto scaling. Set the value to an integer greater than zero. If the policy type is Pods, the value of this parameter indicates the number of pods. If the policy type is Percent, the value of this parameter indicates a percentage, which can exceed 100%.
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
   * The configuration of the policy.
   */
  policies?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies[];
  /**
   * @remarks
   * The step size policy for the scale-in. Valid values: Max, Min, and Disable.
   * 
   * @example
   * Max
   */
  selectPolicy?: string;
  /**
   * @remarks
   * The cooldown time of the scale-in. Valid values: 0 to 3600. Unit: seconds. Default value: 300.
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
   * The cycle of the policy check. Valid values: 0 to 1800. Unit: seconds.
   * 
   * @example
   * 15
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The type of the policy. Valid values: Pods and Percent.
   * 
   * @example
   * Pods
   */
  type?: string;
  /**
   * @remarks
   * The policy value of auto scaling. Set the value to an integer greater than zero. If the policy type is Pods, the value of this parameter indicates the number of pods. If the policy type is Percent, the value of this parameter indicates a percentage, which can exceed 100%.
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
   * The configuration of the policy.
   */
  policies?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies[];
  /**
   * @remarks
   * The step size policy for the scale-out. Valid values: Max, Min, and Disable.
   * 
   * @example
   * Max
   */
  selectPolicy?: string;
  /**
   * @remarks
   * The cooldown time of the scale-out. Valid values: 0 to 3600. Unit: seconds. Default value: 0.
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
  scaleDown?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown;
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
   * The type of the trigger. Valid values: cron and app_metric.
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
   * The maximum number of replicas. The maximum value is 1000.
   * 
   * @example
   * 122
   */
  maxReplicas?: number;
  /**
   * @remarks
   * The minimum number of replicas. The minimum value is 0.
   * 
   * @example
   * 1
   */
  minReplicas?: number;
  /**
   * @remarks
   * The configurations of the trigger.
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
   * The ID of the application to which the auto scaling policy belongs.
   * 
   * @example
   * 78194c76-3dca-418e-a263-cccd1ab4****
   */
  appId?: string;
  behaviour?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour;
  /**
   * @remarks
   * The time when the auto scaling policy was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1574251601785
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the auto scaling policy was last disabled. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * Indicates whether the auto scaling policy is enabled. Valid values:
   * 
   * *   **true**: The auto scaling policy is enabled.
   * *   **false**: The auto scaling policy is disabled.
   * 
   * @example
   * true
   */
  scaleRuleEnabled?: boolean;
  /**
   * @remarks
   * The name of the auto scaling policy.
   * 
   * @example
   * cpu-trigger
   */
  scaleRuleName?: string;
  /**
   * @remarks
   * The type of the auto scaling policy. The value is fixed to trigger.
   * 
   * @example
   * trigger
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The configurations of the trigger.
   */
  trigger?: UpdateApplicationScalingRuleResponseBodyAppScalingRuleTrigger;
  /**
   * @remarks
   * The time when the auto scaling policy was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * The information about the auto scaling policy.
   */
  appScalingRule?: UpdateApplicationScalingRuleResponseBodyAppScalingRule;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
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

