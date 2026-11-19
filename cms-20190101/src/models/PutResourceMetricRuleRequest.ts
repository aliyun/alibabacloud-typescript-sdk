// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutResourceMetricRuleRequestEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the Critical-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to.
   * - GreaterThanThreshold: greater than.
   * - LessThanOrEqualToThreshold: less than or equal to.
   * - LessThanThreshold: less than.
   * - NotEqualToThreshold: not equal to.
   * - EqualToThreshold: equal to.
   * - GreaterThanYesterday: greater than the value at the same time yesterday.
   * - LessThanYesterday: less than the value at the same time yesterday.
   * - GreaterThanLastWeek: greater than the value at the same time last week.
   * - LessThanLastWeek: less than the value at the same time last week.
   * - GreaterThanLastPeriod: greater than the value in the last period.
   * - LessThanLastPeriod: less than the value in the last period.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The statistical method for the Critical-level alert.
   * 
   * The valid values of this parameter are determined by the Statistics column corresponding to the MetricName of the specified Alibaba Cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values of this parameter, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, the Settings for the Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The Critical-level alert threshold.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The number of retries for the Critical-level alert.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
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

export class PutResourceMetricRuleRequestEscalationsInfo extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the Info-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to.
   * - GreaterThanThreshold: greater than.
   * - LessThanOrEqualToThreshold: less than or equal to.
   * - LessThanThreshold: less than.
   * - NotEqualToThreshold: not equal to.
   * - EqualToThreshold: equal to.
   * - GreaterThanYesterday: greater than the value at the same time yesterday.
   * - LessThanYesterday: less than the value at the same time yesterday.
   * - GreaterThanLastWeek: greater than the value at the same time last week.
   * - LessThanLastWeek: less than the value at the same time last week.
   * - GreaterThanLastPeriod: greater than the value in the last period.
   * - LessThanLastPeriod: less than the value in the last period.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The statistical method for the Info-level alert.
   * 
   * The valid values of this parameter are determined by the Statistics column corresponding to the MetricName of the specified Alibaba Cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values of this parameter, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, the Settings for the Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The Info-level alert threshold.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The number of retries for the Info-level alert.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
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

export class PutResourceMetricRuleRequestEscalationsWarn extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the Warn-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to.
   * - GreaterThanThreshold: greater than.
   * - LessThanOrEqualToThreshold: less than or equal to.
   * - LessThanThreshold: less than.
   * - NotEqualToThreshold: not equal to.
   * - EqualToThreshold: equal to.
   * - GreaterThanYesterday: greater than the value at the same time yesterday.
   * - LessThanYesterday: less than the value at the same time yesterday.
   * - GreaterThanLastWeek: greater than the value at the same time last week.
   * - LessThanLastWeek: less than the value at the same time last week.
   * - GreaterThanLastPeriod: greater than the value in the last period.
   * - LessThanLastPeriod: less than the value in the last period.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The statistical method for the Warn-level alert.
   * 
   * The valid values of this parameter are determined by the Statistics column corresponding to the MetricName of the specified Alibaba Cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values of this parameter, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, the Settings for the Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The Warn-level alert threshold.
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The number of retries for the Warn-level alert.
   * 
   * > You must configure at least one of the following alert levels: Critical, Warn, and Info. For the configured alert level, you must configure the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
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

export class PutResourceMetricRuleRequestEscalations extends $dara.Model {
  critical?: PutResourceMetricRuleRequestEscalationsCritical;
  info?: PutResourceMetricRuleRequestEscalationsInfo;
  warn?: PutResourceMetricRuleRequestEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutResourceMetricRuleRequestEscalationsCritical,
      info: PutResourceMetricRuleRequestEscalationsInfo,
      warn: PutResourceMetricRuleRequestEscalationsWarn,
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

export class PutResourceMetricRuleRequestCompositeExpressionExpressionList extends $dara.Model {
  /**
   * @remarks
   * The threshold comparison operator. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to.
   * - GreaterThanThreshold: greater than.
   * - LessThanOrEqualToThreshold: less than or equal to.
   * - LessThanThreshold: less than.
   * - NotEqualToThreshold: not equal to.
   * - EqualToThreshold: equal to.
   * - GreaterThanYesterday: greater than the value at the same time yesterday.
   * - LessThanYesterday: less than the value at the same time yesterday.
   * - GreaterThanLastWeek: greater than the value at the same time last week.
   * - LessThanLastWeek: less than the value at the same time last week.
   * - GreaterThanLastPeriod: greater than the value in the last period.
   * - LessThanLastPeriod: less than the value in the last period.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The metric name of the Alibaba Cloud service.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The aggregation period of the metric.
   * 
   * Unit: seconds.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The statistical method of the metric. Valid values:
   * - $Maximum: the maximum value.
   * - $Minimum: the minimum value.
   * - $Average: the average value.
   * - $Availability: the active rate. This value is typically used for site monitoring.
   * 
   * > `$` is the unified prefix for metrics. For more information about supported Alibaba Cloud services, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * $Maximum
   */
  statistics?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * @example
   * 90
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
      statistics: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestCompositeExpression extends $dara.Model {
  /**
   * @remarks
   * The list of alert conditions created by using the standard method.
   */
  expressionList?: PutResourceMetricRuleRequestCompositeExpressionExpressionList[];
  /**
   * @remarks
   * The relationship between the alert conditions for multiple metrics. Valid values: 
   * 
   * - `&&`: triggers an alert only when all metrics meet the alert conditions. An alert is triggered only when all expressions in ExpressionList evaluate to `true`.
   * 
   * - `||`: triggers an alert when any metric meets the alert condition.
   * 
   * @example
   * ||
   */
  expressionListJoin?: string;
  /**
   * @remarks
   * The alert conditions created by using expressions. This includes but is not limited to the following scenarios:
   * 
   * - Set an alert blacklist for specific resources. Example: `$instanceId != \\"i-io8kfvcpp7x5****\\" && $Average > 50`. This indicates that no alert is triggered even if the `Average` value of the instance `i-io8kfvcpp7x5****` in the alert rule is greater than 50.
   * - Set a special alert threshold for a specific instance in the rule. Example: `$Average > ($instanceId == \\"i-io8kfvcpp7x5****\\"? 80: 50)`. This indicates that an alert is triggered only when the `Average` value of the instance `i-io8kfvcpp7x5****` in the alert rule is greater than 80. For other instances, an alert is triggered when the `Average` value is greater than 50.
   * - Limit the number of instances that exceed the threshold in the rule. Example: `count($Average > 20) > 3`. This indicates that an alert is triggered only when the number of instances whose `Average` value is greater than 20 in the alert rule is greater than 3.
   * 
   * @example
   * $Average > ($instanceId == \\"i-io8kfvcpp7x5****\\"? 80: 50)
   */
  expressionRaw?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * - CRITICAL: critical.
   * - WARN: warning.
   * - INFO: info.
   * 
   * @example
   * CRITICAL
   */
  level?: string;
  /**
   * @remarks
   * The number of times the alert condition must be met before an alert notification is sent.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      expressionList: 'ExpressionList',
      expressionListJoin: 'ExpressionListJoin',
      expressionRaw: 'ExpressionRaw',
      level: 'Level',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionList: { 'type': 'array', 'itemType': PutResourceMetricRuleRequestCompositeExpressionExpressionList },
      expressionListJoin: 'string',
      expressionRaw: 'string',
      level: 'string',
      times: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.expressionList)) {
      $dara.Model.validateArray(this.expressionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestLabels extends $dara.Model {
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

export class PutResourceMetricRuleRequestPrometheusAnnotations extends $dara.Model {
  /**
   * @remarks
   * The annotation key.
   * 
   * @example
   * summary
   */
  key?: string;
  /**
   * @remarks
   * The annotation value.
   * 
   * @example
   * {{ $labels.instance }} CPU usage above 10% {current value: {{ humanizePercentage $value }} }
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

export class PutResourceMetricRuleRequestPrometheus extends $dara.Model {
  /**
   * @remarks
   * The annotations whose keys and values are rendered during Prometheus alerts to help you understand the metrics or alert rules.
   * 
   * > This feature is equivalent to the Annotation feature in Prometheus.
   */
  annotations?: PutResourceMetricRuleRequestPrometheusAnnotations[];
  /**
   * @remarks
   * The alert level. Valid values:
   * - CRITICAL: critical.
   * - WARN: warning.
   * - INFO: info.
   * 
   * @example
   * CRITICAL
   */
  level?: string;
  /**
   * @remarks
   * The PromQL query statement.
   * 
   * > The data obtained by using the PromQL query statement is used as the alert data. You must include the alert threshold in this statement.
   * 
   * @example
   * cpuUsage{instanceId="xxxx"}[1m]>90
   */
  promQL?: string;
  /**
   * @remarks
   * The number of times the alert condition must be met before an alert notification is sent.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      level: 'Level',
      promQL: 'PromQL',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': PutResourceMetricRuleRequestPrometheusAnnotations },
      level: 'string',
      promQL: 'string',
      times: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequest extends $dara.Model {
  escalations?: PutResourceMetricRuleRequestEscalations;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the token on your client. Make sure that the token is unique across different requests. The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * 6868E9A1-56E6-5FD7-9684-E2963BBAFB5F
   */
  clientToken?: string;
  /**
   * @remarks
   * The alert conditions for multiple metrics.
   * 
   * > Single-metric and multi-metric alert conditions are mutually exclusive and cannot be configured at the same time.
   */
  compositeExpression?: PutResourceMetricRuleRequestCompositeExpression;
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
   * - **true**: sends a check request and does not bind a security group to the instance. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the check, the system returns an error. If the request passes the check, the system returns the error code `DryRunOperation`.
   * - **false**: sends a normal request. If the request passes the check, the system returns an HTTP 2xx status code and performs the operation. This is the default value.
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
   * > For more information about how to query the statistical period of a metric, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The labels that are written to the metric and displayed in the alert notification when the metric meets the alert condition and an alert is triggered.
   * 
   * > This feature is the same as the Label feature in Prometheus alerts.
   */
  labels?: PutResourceMetricRuleRequestLabels[];
  /**
   * @remarks
   * The metric name. For more information about how to query the metric name, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > When you create a Prometheus alert rule for Hybrid CloudMonitor, this parameter specifies the metric repository name. For more information about how to obtain the metric repository name, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The data namespace of the Alibaba Cloud service. For more information about how to query the data namespace of an Alibaba Cloud service, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > When you create a Prometheus alert rule for Hybrid CloudMonitor, you must set this parameter to `acs_prometheus`.
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The action to take when no monitoring data is available. Valid values:
   * 
   * - KEEP_LAST_STATE: takes no action. This is the default value.
   * - INSUFFICIENT_DATA: triggers an alert indicating that no data is available.
   * - OK: triggers an alert indicating that the status is normal.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The period during which the alert rule is inactive.
   * 
   * @example
   * 00:00-06:00
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The statistical period of the metric. Unit: seconds. The default value is the original reporting epoch of the metric.
   * 
   * > For more information about how to query the statistical period of a metric, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
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
  prometheus?: PutResourceMetricRuleRequestPrometheus;
  /**
   * @remarks
   * The resource information. Examples: `[{"instanceId":"i-uf6j91r34rnwawoo****"}]` and `[{"userId":"100931896542****"}]`.
   * 
   * For more information about the dimensions supported by the resource information, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * [{"instanceId":"i-uf6j91r34rnwawoo****"}]
   */
  resources?: string;
  /**
   * @remarks
   * The alert rule ID.
   * 
   * You can enter a new alert rule ID or use an existing alert rule ID in CloudMonitor. For more information about how to query the alert rule ID, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
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
   * The alert rule name.
   * 
   * You can enter a new alert rule name or use an existing alert rule name in CloudMonitor. For more information about how to query the alert rule name, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
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
   * > The mute epoch refers to the interval to send an alert notification again if the alert does not recover to Normal after it is triggered.
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
      clientToken: 'ClientToken',
      compositeExpression: 'CompositeExpression',
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
      prometheus: 'Prometheus',
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
      escalations: PutResourceMetricRuleRequestEscalations,
      clientToken: 'string',
      compositeExpression: PutResourceMetricRuleRequestCompositeExpression,
      contactGroups: 'string',
      dryRun: 'boolean',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      labels: { 'type': 'array', 'itemType': PutResourceMetricRuleRequestLabels },
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      prometheus: PutResourceMetricRuleRequestPrometheus,
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
    if(this.compositeExpression && typeof (this.compositeExpression as any).validate === 'function') {
      (this.compositeExpression as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.prometheus && typeof (this.prometheus as any).validate === 'function') {
      (this.prometheus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

