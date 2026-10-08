// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies extends $dara.Model {
  /**
   * @remarks
   * The period in which the policy is checked for execution. Unit: seconds. Valid values: 0 to 1800.
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
   * The value for the scaling behavior policy. This must be an integer greater than 0. If the policy type is Pods, the value specifies the number of pods. If the policy type is Percent, the value specifies a percentage, which can exceed 100%.
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

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown extends $dara.Model {
  /**
   * @remarks
   * The policy configuration.
   */
  policies?: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies[];
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
   * The cooldown period for scale-in events. Unit: seconds. Valid values: 0 to 3600. Default value: 300.
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
      policies: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDownPolicies },
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

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies extends $dara.Model {
  /**
   * @remarks
   * The period in which the policy is checked for execution. Unit: seconds. Valid values: 0 to 1800.
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
   * The value for the scaling behavior policy. This must be an integer greater than 0. If the policy type is Pods, the value specifies the number of pods. If the policy type is Percent, the value specifies a percentage, which can exceed 100%.
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

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUp extends $dara.Model {
  /**
   * @remarks
   * The policy configuration.
   */
  policies?: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies[];
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
   * The cooldown period for scale-out events. Unit: seconds. Valid values: 0 to 3600. Default value: 0.
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
      policies: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUpPolicies },
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

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour extends $dara.Model {
  /**
   * @remarks
   * The configuration of the scale-in behavior.
   */
  scaleDown?: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown;
  /**
   * @remarks
   * The configuration of the scale-out behavior.
   */
  scaleUp?: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUp;
  static names(): { [key: string]: string } {
    return {
      scaleDown: 'ScaleDown',
      scaleUp: 'ScaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleDown: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleDown,
      scaleUp: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviourScaleUp,
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

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics extends $dara.Model {
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

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleMetric extends $dara.Model {
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
  metrics?: CreateApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics[];
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
      metrics: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics },
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

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers extends $dara.Model {
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

export class CreateApplicationScalingRuleResponseBodyAppScalingRuleTrigger extends $dara.Model {
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
   * 2
   */
  minReplicas?: number;
  /**
   * @remarks
   * A list of triggers.
   */
  triggers?: CreateApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers[];
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
      triggers: { 'type': 'array', 'itemType': CreateApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers },
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

export class CreateApplicationScalingRuleResponseBodyAppScalingRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the application for the Auto Scaling rule.
   * 
   * @example
   * 78194c76-3dca-418e-a263-cccd1ab4****
   */
  appId?: string;
  /**
   * @remarks
   * The scaling behavior.
   */
  behaviour?: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour;
  /**
   * @remarks
   * The UNIX timestamp when the Auto Scaling rule was created.
   * 
   * @example
   * 23212323123
   */
  createTime?: number;
  /**
   * @remarks
   * The UNIX timestamp when the Auto Scaling rule was last disabled.
   * 
   * @example
   * 23212323123
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
  metric?: CreateApplicationScalingRuleResponseBodyAppScalingRuleMetric;
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
   * The state of the Auto Scaling rule.
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
   * The name of the Auto Scaling rule.
   * 
   * @example
   * cpu
   */
  scaleRuleName?: string;
  /**
   * @remarks
   * The type of the rule. Only trigger is supported.
   * 
   * @example
   * trigger
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The trigger configuration.
   */
  trigger?: CreateApplicationScalingRuleResponseBodyAppScalingRuleTrigger;
  /**
   * @remarks
   * The UNIX timestamp when the Auto Scaling rule was updated.
   * 
   * @example
   * 23212323123
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
      behaviour: CreateApplicationScalingRuleResponseBodyAppScalingRuleBehaviour,
      createTime: 'number',
      lastDisableTime: 'number',
      maxReplicas: 'number',
      metric: CreateApplicationScalingRuleResponseBodyAppScalingRuleMetric,
      minReplicas: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      trigger: CreateApplicationScalingRuleResponseBodyAppScalingRuleTrigger,
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

export class CreateApplicationScalingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Auto Scaling rule.
   */
  appScalingRule?: CreateApplicationScalingRuleResponseBodyAppScalingRule;
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
      appScalingRule: CreateApplicationScalingRuleResponseBodyAppScalingRule,
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

