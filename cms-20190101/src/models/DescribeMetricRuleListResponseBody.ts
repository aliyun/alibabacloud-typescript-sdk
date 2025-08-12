// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionListExpressionList extends $dara.Model {
  /**
   * @remarks
   * The operator that is used to compare the metric value with the threshold. Valid values:
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * *   GreaterThanThreshold: greater than the threshold
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * *   LessThanThreshold: less than the threshold
   * *   NotEqualToThreshold: not equal to the threshold
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
   * The statistical method of the metric. Valid values:
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionList extends $dara.Model {
  expressionList?: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionListExpressionList[];
  static names(): { [key: string]: string } {
    return {
      expressionList: 'ExpressionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionList: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionListExpressionList },
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpression extends $dara.Model {
  /**
   * @remarks
   * The trigger conditions that are created in standard mode.
   */
  expressionList?: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionList;
  /**
   * @remarks
   * The relationship between the trigger conditions for multiple metrics. Valid values:
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
   * *   Limit the number of instances whose metric values exceed the threshold. For example, if you specify `count($Average > 20) > 3`, an alert is triggered only when the number of instances whose `average metric value` exceeds 20 exceeds three.
   * 
   * @example
   * $Average > ($instanceId == \\"i-io8kfvcpp7x5****\\"? 80: 50)
   */
  expressionRaw?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * *   CRITICAL
   * *   WARN
   * *   INFO
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
      expressionList: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionList,
      expressionListJoin: 'string',
      expressionRaw: 'string',
      level: 'string',
      times: 'number',
    };
  }

  validate() {
    if(this.expressionList && typeof (this.expressionList as any).validate === 'function') {
      (this.expressionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * The comparison operator that is used to compare the metric value with the threshold. Valid values:
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * *   GreaterThanThreshold: greater than the threshold
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * *   LessThanThreshold: less than the threshold
   * *   NotEqualToThreshold: not equal to the threshold
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
   * The additional conditions for triggering Critical-level alerts. The additional conditions take effect when the value of the ComparisonOperator parameter is GreaterThanYesterday, LessThanYesterday, GreaterThanLastWeek, LessThanLastWeek, GreaterThanLastPeriod, or LessThanLastPeriod.
   * 
   * For example, the values of the PreCondition, ComparisonOperator, and Threshold parameters are set to $Average>80, GreaterThanYesterday, and 10, respectively. An alert is triggered only when the average metric value is greater than 80 and 10% greater than the average metric value at the same time yesterday.
   * 
   * >  $Average is a placeholder that consists of `a dollar sign ($) and the statistical method`. CloudMonitor replaces the placeholder with the aggregated value or original value before value comparison.
   * 
   * @example
   * $Average>80
   */
  preCondition?: string;
  /**
   * @remarks
   * The statistical methods for Critical-level alerts.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for Critical-level alerts.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before a Critical-level alert is triggered.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo extends $dara.Model {
  /**
   * @remarks
   * The comparison operator that is used to compare the metric value with the threshold. Valid values:
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * *   GreaterThanThreshold: greater than the threshold
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * *   LessThanThreshold: less than the threshold
   * *   NotEqualToThreshold: not equal to the threshold
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
   * The additional conditions for triggering Info-level alerts. The additional conditions take effect when the value of the ComparisonOperator parameter is GreaterThanYesterday, LessThanYesterday, GreaterThanLastWeek, LessThanLastWeek, GreaterThanLastPeriod, or LessThanLastPeriod.
   * 
   * For example, the values of the PreCondition, ComparisonOperator, and Threshold parameters are set to $Average>80, GreaterThanYesterday, and 10, respectively. An alert is triggered only when the average metric value is greater than 80 and 10% greater than the average metric value at the same time yesterday.
   * 
   * >  $Average is a placeholder that consists of `a dollar sign ($) and the statistical method`. CloudMonitor replaces the placeholder with the aggregated value or original value before value comparison.
   * 
   * @example
   * $Average>80
   */
  preCondition?: string;
  /**
   * @remarks
   * The statistical methods for Info-level alerts.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for Info-level alerts.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before an Info-level alert is triggered.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn extends $dara.Model {
  /**
   * @remarks
   * The comparison operator that is used to compare the metric value with the threshold. Valid values:
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * *   GreaterThanThreshold: greater than the threshold
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * *   LessThanThreshold: less than the threshold
   * *   NotEqualToThreshold: not equal to the threshold
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
   * The additional conditions for triggering Warn-level alerts. The additional conditions take effect when the value of the ComparisonOperator parameter is GreaterThanYesterday, LessThanYesterday, GreaterThanLastWeek, LessThanLastWeek, GreaterThanLastPeriod, or LessThanLastPeriod.
   * 
   * For example, the values of the PreCondition, ComparisonOperator, and Threshold parameters are set to $Average>80, GreaterThanYesterday, and 10, respectively. An alert is triggered only when the average metric value is greater than 80 and 10% greater than the average metric value at the same time yesterday.
   * 
   * >  $Average is a placeholder that consists of `a dollar sign ($) and the statistical method`. CloudMonitor replaces the placeholder with the aggregated value or original value before value comparison.
   * 
   * @example
   * $Average>80
   */
  preCondition?: string;
  /**
   * @remarks
   * The statistical methods for Warn-level alerts.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for Warn-level alerts.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before a Warn-level alert is triggered.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations extends $dara.Model {
  /**
   * @remarks
   * The conditions for triggering Critical-level alerts.
   */
  critical?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical;
  /**
   * @remarks
   * The conditions for triggering Info-level alerts.
   */
  info?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo;
  /**
   * @remarks
   * The conditions for triggering Warn-level alerts.
   */
  warn?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical,
      info: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo,
      warn: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn,
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmLabelsLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key of the alert rule.
   * 
   * @example
   * cmsRuleKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the alert rule.
   * 
   * @example
   * cmsRuleValue
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmLabels extends $dara.Model {
  labels?: DescribeMetricRuleListResponseBodyAlarmsAlarmLabelsLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarmLabelsLabels },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotationsAnnotations extends $dara.Model {
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotations extends $dara.Model {
  annotations?: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotationsAnnotations[];
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotationsAnnotations },
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheus extends $dara.Model {
  /**
   * @remarks
   * The annotations of the Prometheus alert rule. When a Prometheus alert is triggered, the system renders the annotated keys and values to help you understand the metrics and alert rule.
   * 
   * >  This parameter is equivalent to the annotations parameter of open source Prometheus.
   */
  annotations?: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotations;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * *   CRITICAL
   * *   WARN
   * *   INFO
   * 
   * @example
   * Critical
   */
  level?: string;
  /**
   * @remarks
   * The PromQL query statement.
   * 
   * >  The data obtained by using the PromQL query statement is the monitoring data. You must include the alert threshold in this statement.
   * 
   * @example
   * CpuUsage{instanceId="xxxx"}[1m]>90
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
      annotations: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotations,
      level: 'string',
      promQL: 'string',
      times: 'number',
    };
  }

  validate() {
    if(this.annotations && typeof (this.annotations as any).validate === 'function') {
      (this.annotations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarm extends $dara.Model {
  /**
   * @remarks
   * The status of the alert rule. Valid values:
   * 
   * *   OK: The alert rule has no active alerts.
   * *   ALARM: The alert rule has active alerts.
   * *   INSUFFICIENT_DATA: No data is available.
   * 
   * @example
   * OK
   */
  alertState?: string;
  /**
   * @remarks
   * The trigger conditions for multiple metrics.
   * 
   * >  The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
   */
  compositeExpression?: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpression;
  /**
   * @remarks
   * The alert contact group.
   * 
   * @example
   * ECS_Alarm
   */
  contactGroups?: string;
  /**
   * @remarks
   * The dimensions of the alert rule.
   * 
   * @example
   * [{"instanceId":"i-2ze2d6j5uhg20x47****"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * The time period during which the alert rule is effective.
   * 
   * @example
   * 05:31-23:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * Indicates whether the alert rule is enabled. Valid values:
   * 
   * *   true: The alert rule is enabled.
   * *   false: The alert rule is disabled.
   * 
   * @example
   * true
   */
  enableState?: boolean;
  /**
   * @remarks
   * The conditions for triggering different levels of alerts.
   */
  escalations?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations;
  gmtCreate?: number;
  gmtUpdate?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 7301****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * >  If the alert rule is associated with an application group, the name of the application group is returned in this parameter.
   * 
   * @example
   * ECS_Group
   */
  groupName?: string;
  /**
   * @remarks
   * The tags of the alert rule.
   */
  labels?: DescribeMetricRuleListResponseBodyAlarmsAlarmLabels;
  /**
   * @remarks
   * The subject of the alert notification email.
   * 
   * @example
   * "${serviceType}-${metricName}-${levelDescription}Notification(${dimensions})"
   */
  mailSubject?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The method that is used to handle alerts when no monitoring data is found. Valid values:
   * 
   * *   KEEP_LAST_STATE (default value): No operation is performed.
   * *   INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
   * *   OK: The status is considered normal.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The time period during which the alert rule is ineffective.
   * 
   * @example
   * 00:00-05:30
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The statistical period.
   * 
   * @example
   * 60
   */
  period?: string;
  productCategory?: string;
  /**
   * @remarks
   * The Prometheus alerts.
   * 
   * >  This parameter is required only if you create a Prometheus alert rule for Hybrid Cloud Monitoring.
   */
  prometheus?: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheus;
  /**
   * @remarks
   * The resources that are associated with the alert rule.
   * 
   * @example
   * [{\\"instanceId\\":\\"i-2ze2d6j5uhg20x47****\\"}]
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * applyTemplate344cfd42-0f32-4fd6-805a-88d7908a****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * Rule_01
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute period during which new alert notifications are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400. Minimum value: 3600.
   * 
   * Only one alert is reported during each mute period even if the metric value consecutively exceeds the alert rule threshold several times.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The type of the alert rule. Valid value: METRIC. This value indicates an alert rule for time series metrics.
   * 
   * @example
   * METRIC
   */
  sourceType?: string;
  /**
   * @remarks
   * The callback URL. CloudMonitor pushes an alert notification to the specified callback URL by sending an HTTP POST request. Only the HTTP protocol is supported.
   * 
   * @example
   * https://www.aliyun.com
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      compositeExpression: 'CompositeExpression',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      enableState: 'EnableState',
      escalations: 'Escalations',
      gmtCreate: 'GmtCreate',
      gmtUpdate: 'GmtUpdate',
      groupId: 'GroupId',
      groupName: 'GroupName',
      labels: 'Labels',
      mailSubject: 'MailSubject',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      productCategory: 'ProductCategory',
      prometheus: 'Prometheus',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      sourceType: 'SourceType',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      compositeExpression: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpression,
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      enableState: 'boolean',
      escalations: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations,
      gmtCreate: 'number',
      gmtUpdate: 'string',
      groupId: 'string',
      groupName: 'string',
      labels: DescribeMetricRuleListResponseBodyAlarmsAlarmLabels,
      mailSubject: 'string',
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      productCategory: 'string',
      prometheus: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheus,
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      sourceType: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.compositeExpression && typeof (this.compositeExpression as any).validate === 'function') {
      (this.compositeExpression as any).validate();
    }
    if(this.escalations && typeof (this.escalations as any).validate === 'function') {
      (this.escalations as any).validate();
    }
    if(this.labels && typeof (this.labels as any).validate === 'function') {
      (this.labels as any).validate();
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

export class DescribeMetricRuleListResponseBodyAlarms extends $dara.Model {
  alarm?: DescribeMetricRuleListResponseBodyAlarmsAlarm[];
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarm },
    };
  }

  validate() {
    if(Array.isArray(this.alarm)) {
      $dara.Model.validateArray(this.alarm);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried alert rules.
   */
  alarms?: DescribeMetricRuleListResponseBodyAlarms;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 386C6712-335F-5054-930A-CC92B851ECBA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: DescribeMetricRuleListResponseBodyAlarms,
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.alarms && typeof (this.alarms as any).validate === 'function') {
      (this.alarms as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

