// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDownPolicies extends $dara.Model {
  /**
   * @remarks
   * The execution interval. Unit: seconds. Valid values: 0 to 1800.
   * 
   * @example
   * 15
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The type of the policy. Valid values: \\`Pods\\` and \\`Percent\\`.
   * 
   * @example
   * Pods
   */
  type?: string;
  /**
   * @remarks
   * The value for the policy. The value must be an integer greater than 0. If \\`Type\\` is \\`Pods\\`, this parameter specifies the number of pods. If \\`Type\\` is \\`Percent\\`, this parameter specifies a percentage. The value can be greater than 100%.
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

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDown extends $dara.Model {
  /**
   * @remarks
   * The policy configuration.
   */
  policies?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDownPolicies[];
  /**
   * @remarks
   * The policy for the scaling step size for scale-in events. Valid values: \\`Max\\`, \\`Min\\`, and \\`Disable\\`.
   * 
   * @example
   * Max
   */
  selectPolicy?: string;
  /**
   * @remarks
   * The cooldown period for a scale-in event. Unit: seconds. Valid values: 0 to 3600. Default value: 300.
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
      policies: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDownPolicies },
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

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUpPolicies extends $dara.Model {
  /**
   * @remarks
   * The execution interval. Unit: seconds. Valid values: 0 to 1800.
   * 
   * @example
   * 15
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The type of the policy. Valid values: \\`Pods\\` and \\`Percent\\`.
   * 
   * @example
   * Pods
   */
  type?: string;
  /**
   * @remarks
   * The value for the policy. The value must be an integer greater than 0. If \\`Type\\` is \\`Pods\\`, this parameter specifies the number of pods. If \\`Type\\` is \\`Percent\\`, this parameter specifies a percentage. The value can be greater than 100%.
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

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUp extends $dara.Model {
  /**
   * @remarks
   * The policy configuration.
   */
  policies?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUpPolicies[];
  /**
   * @remarks
   * The policy for the scaling step size for scale-out events. Valid values: \\`Max\\`, \\`Min\\`, and \\`Disable\\`.
   * 
   * @example
   * Max
   */
  selectPolicy?: string;
  /**
   * @remarks
   * The cooldown period for a scale-out event. Unit: seconds. Valid values: 0 to 3600. Default value: 0.
   * 
   * @example
   * 15
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
      policies: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUpPolicies },
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

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviour extends $dara.Model {
  /**
   * @remarks
   * The configuration of the scale-in behavior.
   */
  scaleDown?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDown;
  /**
   * @remarks
   * The configuration of the scale-out behavior.
   */
  scaleUp?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUp;
  static names(): { [key: string]: string } {
    return {
      scaleDown: 'ScaleDown',
      scaleUp: 'ScaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleDown: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDown,
      scaleUp: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUp,
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

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultMetricMetrics extends $dara.Model {
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
   * asd
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

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultMetric extends $dara.Model {
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
  metrics?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultMetricMetrics[];
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
      metrics: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultMetricMetrics },
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

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTriggerTriggers extends $dara.Model {
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
   * cron-trigger
   */
  name?: string;
  /**
   * @remarks
   * The type of the trigger. Valid values: \\`cron\\` and \\`app_metric\\`.
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

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTrigger extends $dara.Model {
  /**
   * @remarks
   * The maximum number of replicas. The value cannot exceed 1000.
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
   * A list of trigger configurations.
   */
  triggers?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTriggerTriggers[];
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
      triggers: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTriggerTriggers },
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

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the application to which the scaling rule belongs.
   * 
   * @example
   * 78194c76-3dca-418e-a263-cccd1ab4****
   */
  appId?: string;
  /**
   * @remarks
   * The scaling behavior.
   */
  behaviour?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviour;
  /**
   * @remarks
   * The UNIX timestamp when the scaling rule was created.
   * 
   * @example
   * 23212323123
   */
  createTime?: number;
  /**
   * @remarks
   * The UNIX timestamp when the scaling rule was last disabled.
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
  metric?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultMetric;
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
   * Indicates whether the scaling rule is enabled.
   * 
   * - **true**: The scaling rule is enabled.
   * 
   * - **false**: The scaling rule is disabled.
   * 
   * @example
   * true
   */
  scaleRuleEnabled?: boolean;
  /**
   * @remarks
   * The name of the scaling rule.
   * 
   * @example
   * cpu-trigger
   */
  scaleRuleName?: string;
  /**
   * @remarks
   * The type of the scaling rule. Only \\`trigger\\` is supported.
   * 
   * @example
   * trigger
   */
  scaleRuleType?: string;
  /**
   * @remarks
   * The trigger configuration.
   */
  trigger?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTrigger;
  /**
   * @remarks
   * The UNIX timestamp when the scaling rule was last updated.
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
      behaviour: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviour,
      createTime: 'number',
      lastDisableTime: 'number',
      maxReplicas: 'number',
      metric: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultMetric,
      minReplicas: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      trigger: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTrigger,
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

export class DescribeApplicationScalingRulesResponseBodyAppScalingRules extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of scaling rules returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of the Auto Scaling rules.
   */
  result?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResult[];
  /**
   * @remarks
   * The total number of scaling rules.
   * 
   * @example
   * 20
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': DescribeApplicationScalingRulesResponseBodyAppScalingRulesResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationScalingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Auto Scaling rules for the application.
   */
  appScalingRules?: DescribeApplicationScalingRulesResponseBodyAppScalingRules;
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
      appScalingRules: 'AppScalingRules',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appScalingRules: DescribeApplicationScalingRulesResponseBodyAppScalingRules,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.appScalingRules && typeof (this.appScalingRules as any).validate === 'function') {
      (this.appScalingRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

