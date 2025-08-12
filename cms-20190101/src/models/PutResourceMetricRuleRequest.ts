// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutResourceMetricRuleRequestEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * The operator that is used to compare the metric value with the threshold for Critical-level alerts. Valid value:
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * *   GreaterThanThreshold: greater than the threshold
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * *   LessThanThreshold: less than the threshold
   * *   NotEqualToThreshold: not equal to the threshold
   * *   EqualToThreshold: equal to the threshold
   * *   GreaterThanYesterday: greater than the metric value at the same time yesterday
   * *   LessThanYesterday: less than the metric value at the same time yesterday
   * *   GreaterThanLastWeek: greater than the metric value at the same time last week
   * *   LessThanLastWeek: less than the metric value at the same time last week
   * *   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
   * *   LessThanLastPeriod: less than the metric value in the last monitoring cycle
   * 
   * >  You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The statistical methods for Critical-level alerts.
   * 
   * The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * >  You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for Critical-level alerts.
   * 
   * >  You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before a Critical-level alert is triggered.
   * 
   * >  You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.
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
   * The operator that is used to compare the metric value with the threshold for Info-level alerts. Valid value:
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * *   GreaterThanThreshold: greater than the threshold
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * *   LessThanThreshold: less than the threshold
   * *   NotEqualToThreshold: not equal to the threshold
   * *   EqualToThreshold: equal to the threshold
   * *   GreaterThanYesterday: greater than the metric value at the same time yesterday
   * *   LessThanYesterday: less than the metric value at the same time yesterday
   * *   GreaterThanLastWeek: greater than the metric value at the same time last week
   * *   LessThanLastWeek: less than the metric value at the same time last week
   * *   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
   * *   LessThanLastPeriod: less than the metric value in the last monitoring cycle
   * 
   * >  You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The statistical methods for Info-level alerts.
   * 
   * The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * >  You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for Info-level alerts.
   * 
   * >  You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before an Info-level alert is triggered.
   * 
   * >  You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.
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
   * The operator that is used to compare the metric value with the threshold for Warn-level alerts. Valid value:
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * *   GreaterThanThreshold: greater than the threshold
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * *   LessThanThreshold: less than the threshold
   * *   NotEqualToThreshold: not equal to the threshold
   * *   EqualToThreshold: equal to the threshold
   * *   GreaterThanYesterday: greater than the metric value at the same time yesterday
   * *   LessThanYesterday: less than the metric value at the same time yesterday
   * *   GreaterThanLastWeek: greater than the metric value at the same time last week
   * *   LessThanLastWeek: less than the metric value at the same time last week
   * *   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
   * *   LessThanLastPeriod: less than the metric value in the last monitoring cycle
   * 
   * >  You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The statistical methods for Warn-level alerts.
   * 
   * The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * >  You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for Warn-level alerts.
   * 
   * >  You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before a Warn-level alert is triggered.
   * 
   * >  You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.
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
   * The operator that is used to compare the metric value with the threshold. Valid value:
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * *   GreaterThanThreshold: greater than the threshold
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * *   LessThanThreshold: less than the threshold
   * *   NotEqualToThreshold: not equal to the threshold
   * *   EqualToThreshold: equal to the threshold
   * *   GreaterThanYesterday: greater than the metric value at the same time yesterday
   * *   LessThanYesterday: less than the metric value at the same time yesterday
   * *   GreaterThanLastWeek: greater than the metric value at the same time last week
   * *   LessThanLastWeek: less than the metric value at the same time last week
   * *   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
   * *   LessThanLastPeriod: less than the metric value in the last monitoring cycle
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The metric that is used to monitor the cloud service.
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
   * The statistical method of the metric. Valid value:
   * 
   * *   $Maximum: the maximum value
   * *   $Minimum: the minimum value
   * *   $Average: the average value
   * *   $Availability: the availability rate (usually used for site monitoring)
   * 
   * >  `$` is the prefix of the metric. For information about the Alibaba Cloud services that are supported by CloudMonitor, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * The trigger conditions that are created in standard mode.
   */
  expressionList?: PutResourceMetricRuleRequestCompositeExpressionExpressionList[];
  /**
   * @remarks
   * The relationship between the trigger conditions for multiple metrics. Valid value:
   * 
   * *   `&&`: An alert is triggered only if all metrics meet the trigger conditions. An alert is triggered only if the results of all expressions specified in the ExpressionList parameter are `true`.
   * *   `||`: An alert is triggered if one of the metrics meets the trigger conditions.
   * 
   * @example
   * ||
   */
  expressionListJoin?: string;
  /**
   * @remarks
   * The trigger conditions that are created by using expressions. You can use expressions to create trigger conditions in the following scenarios:
   * 
   * *   Set an alert blacklist for specific resources. For example, if you specify `$instanceId != \\"i-io8kfvcpp7x5****\\" ``&&`` $Average > 50`, no alert is triggered when the `average metric value` of the `i-io8kfvcpp7x5****` instance exceeds 50.
   * *   Set a special alert threshold for a specified instance in the rule. For example, if you specify `$Average > ($instanceId == \\"i-io8kfvcpp7x5****\\"? 80: 50)`, an alert is triggered when the `average metric value` of the `i-io8kfvcpp7x5****` instance exceeds 80 or the `average metric value` of other instances exceeds 50.
   * *   Limit the number of instances whose metric values exceed the threshold. For example, if you specify `count($Average > 20) > 3`, an alert is triggered only when the `average metric value` of more than three instances exceeds 20.
   * 
   * @example
   * $Average > ($instanceId == \\"i-io8kfvcpp7x5****\\"? 80: 50)
   */
  expressionRaw?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * *   Critical
   * *   Warn
   * *   Info
   * 
   * @example
   * Critical
   */
  level?: string;
  /**
   * @remarks
   * The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.
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
   * The tag key.
   * 
   * @example
   * tagKey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * >  You can use a template parameter to specify a tag value. CloudMonitor replaces the value of the template parameter with an actual tag value.
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
   * The key of the annotation.
   * 
   * @example
   * summary
   */
  key?: string;
  /**
   * @remarks
   * The value of the annotation.
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
   * The annotations of the Prometheus alert rule. When a Prometheus alert is triggered, the system renders the annotated keys and values to help you understand the metrics and alert rule.
   * 
   * >  This parameter is equivalent to the annotations parameter of open source Prometheus.
   */
  annotations?: PutResourceMetricRuleRequestPrometheusAnnotations[];
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * *   Critical
   * *   Warn
   * *   Info
   * 
   * @example
   * Critical
   */
  level?: string;
  /**
   * @remarks
   * PromQL statements are supported.
   * 
   * >  The data obtained by using the PromQL query statement is the monitoring data. You must include the alert threshold in this statement.
   * 
   * @example
   * cpuUsage{instanceId="xxxx"}[1m]>90
   */
  promQL?: string;
  /**
   * @remarks
   * The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.
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
   * The trigger conditions for multiple metrics.
   * 
   * >  The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
   */
  compositeExpression?: PutResourceMetricRuleRequestCompositeExpression;
  /**
   * @remarks
   * The alert contact groups. Alert notifications are sent to the alert contacts in the alert contact group.
   * 
   * >  An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see [PutContact](https://help.aliyun.com/document_detail/114923.html) and [PutContactGroup](https://help.aliyun.com/document_detail/114929.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * The period of time during which the alert rule is effective.
   * 
   * @example
   * 00:00-23:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The subject of the alert notification email.
   */
  emailSubject?: string;
  /**
   * @remarks
   * The interval at which alerts are triggered based on the alert rule. Unit: seconds.
   * 
   * >  For more information about how to query the statistical periods of metrics, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * If the metric meets the specified condition in the alert rule and CloudMonitor sends an alert notification, the tag is also written to the metric and displayed in the alert notification.
   * 
   * >  This parameter is equivalent to the Label parameter of Prometheus alerts.
   */
  labels?: PutResourceMetricRuleRequestLabels[];
  /**
   * @remarks
   * The metric name. For more information about how to query metric names, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * >  If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For more information about how to query the names of namespaces, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service. For more information about how to query the namespaces of cloud services, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * >  If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to `acs_prometheus`.
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The method that is used to handle alerts when no monitoring data is found. Valid value:
   * 
   * *   KEEP_LAST_STATE (default): No operation is performed.
   * *   INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
   * *   OK: The status is considered normal.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The period of time during which the alert rule is ineffective.
   * 
   * @example
   * 00:00-06:00
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The statistical period of the metric. Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
   * 
   * >  For more information about how to query the statistical periods of metrics, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * Prometheus alerts.
   * 
   * >  This parameter is required only if you create a Prometheus alert rule for Hybrid Cloud Monitoring.
   */
  prometheus?: PutResourceMetricRuleRequestPrometheus;
  /**
   * @remarks
   * The resource information. Examples: `[{"instanceId":"i-uf6j91r34rnwawoo****"}]` and `[{"userId":"100931896542****"}]`.
   * 
   * For more information about the supported dimensions that are used to query resources, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * [{"instanceId":"i-uf6j91r34rnwawoo****"}]
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * You can specify a new ID or the ID of an existing alert rule. For more information about how to query the IDs of alert rules, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * >  If you specify a new ID, a threshold-triggered alert rule is created.
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
   * You can specify a new name or the name of an existing alert rule. For more information about how to query the names of alert rules, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * >  If you specify a new name, a threshold-triggered alert rule is created.
   * 
   * This parameter is required.
   * 
   * @example
   * test123
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute period during which new alert notifications are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400.
   * 
   * >  If an alert is not cleared after the mute period ends, CloudMonitor resends an alert notification.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
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

