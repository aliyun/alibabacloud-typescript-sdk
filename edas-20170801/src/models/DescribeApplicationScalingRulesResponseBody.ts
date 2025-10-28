// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDownPolicies extends $dara.Model {
  periodSeconds?: number;
  type?: string;
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
  policies?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDownPolicies[];
  selectPolicy?: string;
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
  periodSeconds?: number;
  type?: string;
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
  policies?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleUpPolicies[];
  selectPolicy?: string;
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
  scaleDown?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviourScaleDown;
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

export class DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTrigger extends $dara.Model {
  /**
   * @remarks
   * The maximum number of replicas. The upper limit is 1000.
   * 
   * @example
   * 122
   */
  maxReplicas?: number;
  /**
   * @remarks
   * The minimum number of replicas. The lower limit is 0.
   * 
   * @example
   * 1
   */
  minReplicas?: number;
  /**
   * @remarks
   * The configurations of the trigger.
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
   * The ID of the application to which the auto scaling policy belongs.
   * 
   * @example
   * 78194c76-3dca-418e-a263-cccd1ab4****
   */
  appId?: string;
  behaviour?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultBehaviour;
  /**
   * @remarks
   * The time when the auto scaling policy was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 23212323123
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the auto scaling policy was last disabled. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
  trigger?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResultTrigger;
  /**
   * @remarks
   * The time when the auto scaling policy was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of auto scaling policies returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The information about auto scaling policies.
   */
  result?: DescribeApplicationScalingRulesResponseBodyAppScalingRulesResult[];
  /**
   * @remarks
   * The total number of auto scaling policies.
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
   * The auto scaling policies of the application.
   */
  appScalingRules?: DescribeApplicationScalingRulesResponseBodyAppScalingRules;
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

