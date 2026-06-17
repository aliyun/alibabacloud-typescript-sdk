// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutResourceMetricRuleRequestEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * Critical级别阈值比较符。取值：
   * 
   * - GreaterThanOrEqualToThreshold：大于等于。
   * - GreaterThanThreshold：大于。
   * - LessThanOrEqualToThreshold：小于等于。
   * - LessThanThreshold：小于。
   * - NotEqualToThreshold：不等于。
   * - EqualToThreshold：等于。
   * - GreaterThanYesterday：同比昨天时间上涨。
   * - LessThanYesterday：同比昨天时间下降。
   * - GreaterThanLastWeek：同比上周同一时间上涨。
   * - LessThanLastWeek：同比上周同一时间下降。
   * - GreaterThanLastPeriod：环比上周期上涨。
   * - LessThanLastPeriod：环比上周期下降。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * Critical级别报警统计方法。
   * 
   * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * Critical级别报警阈值。
   * 
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * Critical级别报警重试次数。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
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
   * Info级别阈值比较符。取值：
   * 
   * - GreaterThanOrEqualToThreshold：大于等于。
   * - GreaterThanThreshold：大于。
   * - LessThanOrEqualToThreshold：小于等于。
   * - LessThanThreshold：小于。
   * - NotEqualToThreshold：不等于。
   * - EqualToThreshold：等于。
   * - GreaterThanYesterday：同比昨天时间上涨。
   * - LessThanYesterday：同比昨天时间下降。
   * - GreaterThanLastWeek：同比上周同一时间上涨。
   * - LessThanLastWeek：同比上周同一时间下降。
   * - GreaterThanLastPeriod：环比上周期上涨。
   * - LessThanLastPeriod：环比上周期下降。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * Info级别报警统计方法。
   * 
   * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * Info级别报警阈值。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * Info级别报警重试次数。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
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
   * Warn级别阈值比较符。取值：
   * 
   * - GreaterThanOrEqualToThreshold：大于等于。
   * - GreaterThanThreshold：大于。
   * - LessThanOrEqualToThreshold：小于等于。
   * - LessThanThreshold：小于。
   * - NotEqualToThreshold：不等于。
   * - EqualToThreshold：等于。
   * - GreaterThanYesterday：同比昨天时间上涨。
   * - LessThanYesterday：同比昨天时间下降。
   * - GreaterThanLastWeek：同比上周同一时间上涨。
   * - LessThanLastWeek：同比上周同一时间下降。
   * - GreaterThanLastPeriod：环比上周期上涨。
   * - LessThanLastPeriod：环比上周期下降。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * Warn级别报警统计方法。
   * 
   * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * Warn级别报警阈值。
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * Warn级别报警重试次数。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
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
   * The comparison operator for the threshold. Valid values:
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
   * - $Maximum: maximum value.
   * - $Minimum: minimum value.
   * - $Average: average value.
   * - $Availability: active rate (typically used for site monitoring).
   * 
   * > `$` is the unified prefix for metrics. For information about supported Alibaba Cloud services, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * The list of alert conditions created in standard mode.
   */
  expressionList?: PutResourceMetricRuleRequestCompositeExpressionExpressionList[];
  /**
   * @remarks
   * The relationship between multi-metric alert conditions. Valid values: 
   * 
   * - `&&`: An alert is triggered only when all metrics meet the alert conditions. An alert is triggered only when all expressions in ExpressionList evaluate to `true`.
   * 
   * - `||`: An alert is triggered when any metric meets the alert conditions.
   * 
   * @example
   * ||
   */
  expressionListJoin?: string;
  /**
   * @remarks
   * The alert condition created by using an expression. The following scenarios are supported:
   * 
   * - Set an alert blacklist for specific resources. For example, `$instanceId != \\"i-io8kfvcpp7x5****\\" ``&&`` $Average > 50` specifies that no alert is triggered for instance `i-io8kfvcpp7x5****` even if its `Average` exceeds 50.
   * - Set a special alert threshold for a specific instance in the rule. For example, `$Average > ($instanceId == \\"i-io8kfvcpp7x5****\\"? 80: 50)` specifies that an alert is triggered for instance `i-io8kfvcpp7x5****` only when its `Average` exceeds 80, while an alert is triggered for other instances when their `Average` exceeds 50.
   * - Limit the number of instances that exceed the threshold. For example, `count($Average > 20) > 3` specifies that an alert is triggered only when more than three instances have an `Average` greater than 20.
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
   * - INFO: information.
   * 
   * @example
   * CRITICAL
   */
  level?: string;
  /**
   * @remarks
   * The number of times that the alert condition must be met before an alert notification is sent.
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
   * > The label value supports template parameters. Template parameters are replaced with actual label values.
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
   * The annotations for Prometheus alerting. The annotation keys and values are rendered to help you understand the metric or alert rule.
   * 
   * > This feature is equivalent to the Annotation feature in Prometheus.
   */
  annotations?: PutResourceMetricRuleRequestPrometheusAnnotations[];
  /**
   * @remarks
   * The alert level. Valid values:
   * - CRITICAL: critical.
   * - WARN: warning.
   * - INFO: information.
   * 
   * @example
   * CRITICAL
   */
  level?: string;
  /**
   * @remarks
   * The PromQL query statement.
   * 
   * > The data obtained by the PromQL query statement is the alert data. Include the alert threshold in this statement.
   * 
   * @example
   * cpuUsage{instanceId="xxxx"}[1m]>90
   */
  promQL?: string;
  /**
   * @remarks
   * The number of times that the alert condition must be met before an alert notification is sent.
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
   * The alert conditions for multiple metrics.
   * 
   * > Single-metric and multi-metric alert conditions are mutually exclusive and cannot be set at the same time.
   */
  compositeExpression?: PutResourceMetricRuleRequestCompositeExpression;
  /**
   * @remarks
   * The alert contact group. Alert notifications are sent to the alert contacts in this alert contact group.
   * 
   * > An alert contact group contains one or more alert contacts. For information about how to create alert contacts and alert contact groups, see [PutContact](https://help.aliyun.com/document_detail/114923.html) and [PutContactGroup](https://help.aliyun.com/document_detail/114929.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
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
   * The trigger period of the alert rule. Unit: seconds.
   * 
   * > For information about how to query the statistical period of a metric, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The labels that are written to the metric and displayed in alert notifications when the metric meets the alert condition.
   * 
   * > This feature is the same as the Label feature in Prometheus alerting.
   */
  labels?: PutResourceMetricRuleRequestLabels[];
  /**
   * @remarks
   * The name of the metric. For information about how to query metric names, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > If you create a Prometheus alert rule for Hybrid Cloud Monitoring, this parameter specifies the name of the metric repository. For information about how to obtain the metric repository name, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the Alibaba Cloud service. For information about how to query the namespace of an Alibaba Cloud service, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > If you create a Prometheus alert rule for Hybrid Cloud Monitoring, set this parameter to `acs_prometheus`.
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The processing method when no monitoring data is found. Valid values:
   * 
   * - KEEP_LAST_STATE (default): No action is taken.
   * - INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
   * - OK: The status is considered normal.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The time range during which the alert rule is ineffective.
   * 
   * @example
   * 00:00-06:00
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The statistical period of the metric. Unit: seconds. The default value is the original reporting period of the metric.
   * 
   * > For information about how to query the statistical period of a metric, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The Prometheus alert configuration.
   * 
   * > Set this parameter only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
   */
  prometheus?: PutResourceMetricRuleRequestPrometheus;
  /**
   * @remarks
   * The resource information, such as `[{"instanceId":"i-uf6j91r34rnwawoo****"}]` or `[{"userId":"100931896542****"}]`.
   * 
   * For information about the supported monitoring dimensions, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * [{"instanceId":"i-uf6j91r34rnwawoo****"}]
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * You can enter a new alert rule ID or use the ID of an existing alert rule in CloudMonitor. For information about how to query alert rule IDs, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * > If you enter a new alert rule ID, a threshold alert rule is created.
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
   * You can enter a new alert rule name or use the name of an existing alert rule in CloudMonitor. For information about how to query alert rule names, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * > If you enter a new alert rule name, a threshold alert rule is created.
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
   * The mute period. Unit: seconds. Default value: 86400.
   * 
   * > The mute period specifies the interval at which an alert notification is re-sent if the alert does not recover to Normal.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The callback URL to which a POST request is sent when an alert is triggered.
   * 
   * @example
   * https://alert.aliyun.com.com:8080/callback
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      compositeExpression: 'CompositeExpression',
      contactGroups: 'ContactGroups',
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
      compositeExpression: PutResourceMetricRuleRequestCompositeExpression,
      contactGroups: 'string',
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

