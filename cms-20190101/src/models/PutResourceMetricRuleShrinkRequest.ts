// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutResourceMetricRuleShrinkRequestEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the Critical-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold.
   * - GreaterThanThreshold: greater than the threshold.
   * - LessThanOrEqualToThreshold: less than or equal to the threshold.
   * - LessThanThreshold: less than the threshold.
   * - NotEqualToThreshold: not equal to the threshold.
   * - EqualToThreshold: equal to the threshold.
   * - GreaterThanYesterday: greater than the value at the same time yesterday.
   * - LessThanYesterday: less than the value at the same time yesterday.
   * - GreaterThanLastWeek: greater than the value at the same time last week.
   * - LessThanLastWeek: less than the value at the same time last week.
   * - GreaterThanLastPeriod: greater than the value in the previous period.
   * - LessThanLastPeriod: less than the value in the previous period.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The statistical method for the Critical-level alert.
   * 
   * The valid values of this parameter are determined by the `Statistics` column corresponding to the `MetricName` of the specified Alibaba Cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values for this parameter, see [Alibaba Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for the Critical-level alert.
   * 
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The number of retries for the Critical-level alert.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleShrinkRequestEscalationsInfo extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the Info-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold.
   * - GreaterThanThreshold: greater than the threshold.
   * - LessThanOrEqualToThreshold: less than or equal to the threshold.
   * - LessThanThreshold: less than the threshold.
   * - NotEqualToThreshold: not equal to the threshold.
   * - EqualToThreshold: equal to the threshold.
   * - GreaterThanYesterday: greater than the value at the same time yesterday.
   * - LessThanYesterday: less than the value at the same time yesterday.
   * - GreaterThanLastWeek: greater than the value at the same time last week.
   * - LessThanLastWeek: less than the value at the same time last week.
   * - GreaterThanLastPeriod: greater than the value in the previous period.
   * - LessThanLastPeriod: less than the value in the previous period.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The statistical method for the Info-level alert.
   * 
   * The valid values of this parameter are determined by the `Statistics` column corresponding to the `MetricName` of the specified Alibaba Cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values for this parameter, see [Alibaba Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for the Info-level alert.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The number of retries for the Info-level alert.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleShrinkRequestEscalationsWarn extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the Warn-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold.
   * - GreaterThanThreshold: greater than the threshold.
   * - LessThanOrEqualToThreshold: less than or equal to the threshold.
   * - LessThanThreshold: less than the threshold.
   * - NotEqualToThreshold: not equal to the threshold.
   * - EqualToThreshold: equal to the threshold.
   * - GreaterThanYesterday: greater than the value at the same time yesterday.
   * - LessThanYesterday: less than the value at the same time yesterday.
   * - GreaterThanLastWeek: greater than the value at the same time last week.
   * - LessThanLastWeek: less than the value at the same time last week.
   * - GreaterThanLastPeriod: greater than the value in the previous period.
   * - LessThanLastPeriod: less than the value in the previous period.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The statistical method for the Warn-level alert.
   * 
   * The valid values of this parameter are determined by the `Statistics` column corresponding to the `MetricName` of the specified Alibaba Cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values for this parameter, see [Alibaba Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for the Warn-level alert.
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The number of retries for the Warn-level alert.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleShrinkRequestEscalations extends $dara.Model {
  critical?: PutResourceMetricRuleShrinkRequestEscalationsCritical;
  info?: PutResourceMetricRuleShrinkRequestEscalationsInfo;
  warn?: PutResourceMetricRuleShrinkRequestEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutResourceMetricRuleShrinkRequestEscalationsCritical,
      info: PutResourceMetricRuleShrinkRequestEscalationsInfo,
      warn: PutResourceMetricRuleShrinkRequestEscalationsWarn,
    };
  }

  validate() {
    if(this.critical && typeof (this.critical as any).validate === 'function') {
      (this.critical as any).validate();
    }
    if(this.info && typeof (this.info as any).validate === 'function') {
      (this.info as any).validate();
    }
    if(this.warn && typeof (this.warn as any).validate === 'function') {
      (this.warn as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleShrinkRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The label key.
   * 
   * @example
   * tagKey1
   */
  key?: string;
  /**
   * @remarks
   * The label value.
   * 
   * > The label value supports template parameters. The template parameters are replaced with the actual label values.
   * 
   * @example
   * ECS
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class PutResourceMetricRuleShrinkRequest extends $dara.Model {
  escalations?: PutResourceMetricRuleShrinkRequestEscalations;
  /**
   * @remarks
   * The alert conditions for multiple metrics.
   * 
   * > Single-metric and multi-metric alert conditions are mutually exclusive and cannot be configured at the same time.
   */
  compositeExpressionShrink?: string;
  /**
   * @remarks
   * The alert contact group. Alert notifications are sent to the alert contacts in this alert contact group.
   * 
   * > An alert contact group contains one or more alert contacts. For more information about how to create alert contacts and alert contact groups, see [PutContact](https://help.aliyun.com/document_detail/114923.html) and [PutContactGroup](https://help.aliyun.com/document_detail/114929.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: The request is prechecked but not executed. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): The request is sent and executed. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The effective period of the alert rule.
   * 
   * @example
   * 00:00-23:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The subject of the alert email.
   * 
   * @example
   * ECS instance alert
   */
  emailSubject?: string;
  /**
   * @remarks
   * The trigger epoch of the alert rule. Unit: seconds.
   * 
   * > For more information about how to query the statistical epoch of a metric, see [Alibaba Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The labels that are added to the metric and displayed in the alert notification when the metric meets the alert condition and an alert is triggered.
   * 
   * > This feature is the same as the Label feature in Prometheus alerts.
   */
  labels?: PutResourceMetricRuleShrinkRequestLabels[];
  /**
   * @remarks
   * The name of the metric. For more information about how to query the name of a metric, see [Alibaba Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > When you create a Prometheus alert rule for CloudMonitor, this parameter specifies the name of the metric repository. For more information about how to obtain the name of a metric repository, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The data namespace of the Alibaba Cloud service. For more information about how to query the data namespace of an Alibaba Cloud service, see [Alibaba Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > When you create a Prometheus alert rule for CloudMonitor, you must configure this parameter to `acs_prometheus`.
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The action to take when no monitoring data is found. Valid values:
   * 
   * - KEEP_LAST_STATE (default): No action is taken.
   * - INSUFFICIENT_DATA: The alert content indicates that no data is found.
   * - OK: The status is normal.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The time range during which the alert rule is inactive.
   * 
   * @example
   * 00:00-06:00
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The statistical epoch of the metric. Unit: seconds. The default value is the original reporting epoch of the metric.
   * 
   * > For more information about how to query the statistical epoch of a metric, see [Alibaba Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The Prometheus alert.
   * 
   * > You need to configure this parameter only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
   */
  prometheusShrink?: string;
  /**
   * @remarks
   * The resource information. Examples: `[{"instanceId":"i-uf6j91r34rnwawoo****"}]` and `[{"userId":"100931896542****"}]`.
   * 
   * For more information about the dimensions supported by resource information, see [Alibaba Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * [{"instanceId":"i-uf6j91r34rnwawoo****"}]
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * You can enter a new alert rule ID or use an existing alert rule ID in CloudMonitor. For more information about how to query the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * > Entering a new alert rule ID indicates that a threshold-based alert rule is created.
   * 
   * This parameter is required.
   * 
   * @example
   * a151cd6023eacee2f0978e03863cc1697c89508****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * You can enter a new alert rule name or use an existing alert rule name in CloudMonitor. For more information about how to query the name of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * > Entering a new alert rule name indicates that a threshold-based alert rule is created.
   * 
   * This parameter is required.
   * 
   * @example
   * test123
   */
  ruleName?: string;
  /**
   * @remarks
   * Specifies whether to send a recovery notification.
   * 
   * @example
   * true
   */
  sendOK?: boolean;
  /**
   * @remarks
   * The mute epoch. Unit: seconds. Default value: 86400.
   * 
   * > The mute epoch refers to the interval at which to send an alert notification again if the alert does not recover to Normal after it is triggered.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The webhook URL to which a POST request is sent when an alert is triggered.
   * 
   * @example
   * https://alert.aliyun.com.com:8080/callback
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      compositeExpressionShrink: 'CompositeExpression',
      contactGroups: 'ContactGroups',
      dryRun: 'DryRun',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      interval: 'Interval',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      prometheusShrink: 'Prometheus',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sendOK: 'SendOK',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutResourceMetricRuleShrinkRequestEscalations,
      compositeExpressionShrink: 'string',
      contactGroups: 'string',
      dryRun: 'boolean',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      labels: { 'type': 'array', 'itemType': PutResourceMetricRuleShrinkRequestLabels },
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      prometheusShrink: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sendOK: 'boolean',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  validate() {
    if(this.escalations && typeof (this.escalations as any).validate === 'function') {
      (this.escalations as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

