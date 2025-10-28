// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics extends $dara.Model {
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
   * 1
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

export class DisableApplicationScalingRuleResponseBodyAppScalingRuleMetric extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 12
   */
  maxReplicas?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   */
  metrics?: DisableApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics[];
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
      metrics: { 'type': 'array', 'itemType': DisableApplicationScalingRuleResponseBodyAppScalingRuleMetricMetrics },
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

export class DisableApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers extends $dara.Model {
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

export class DisableApplicationScalingRuleResponseBodyAppScalingRuleTrigger extends $dara.Model {
  /**
   * @remarks
   * The maximum number of replicas. The upper limit is 1000.
   * 
   * @example
   * 12
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
   * The information about the trigger.
   */
  triggers?: DisableApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers[];
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
      triggers: { 'type': 'array', 'itemType': DisableApplicationScalingRuleResponseBodyAppScalingRuleTriggerTriggers },
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

export class DisableApplicationScalingRuleResponseBodyAppScalingRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the application to which the auto scaling policy belongs.
   * 
   * @example
   * 78194c76-3dca-418e-a263-cccd1ab4****
   */
  appId?: string;
  /**
   * @remarks
   * The time when the auto scaling policy was created.
   * 
   * @example
   * 23212323123
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the auto scaling policy was last disabled.
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
  metric?: DisableApplicationScalingRuleResponseBodyAppScalingRuleMetric;
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
   * cron-trigger
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
  trigger?: DisableApplicationScalingRuleResponseBodyAppScalingRuleTrigger;
  /**
   * @remarks
   * The time when the auto scaling policy was last modified.
   * 
   * @example
   * 23212323123
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
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
      createTime: 'number',
      lastDisableTime: 'number',
      maxReplicas: 'number',
      metric: DisableApplicationScalingRuleResponseBodyAppScalingRuleMetric,
      minReplicas: 'number',
      scaleRuleEnabled: 'boolean',
      scaleRuleName: 'string',
      scaleRuleType: 'string',
      trigger: DisableApplicationScalingRuleResponseBodyAppScalingRuleTrigger,
      updateTime: 'number',
    };
  }

  validate() {
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

export class DisableApplicationScalingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the auto scaling policy.
   */
  appScalingRule?: DisableApplicationScalingRuleResponseBodyAppScalingRule;
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
   * 5d6fa0bc-cc3**********
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
      appScalingRule: DisableApplicationScalingRuleResponseBodyAppScalingRule,
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

