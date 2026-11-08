// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the critical-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold. 
   * - GreaterThanThreshold: greater than the threshold. 
   * - LessThanOrEqualToThreshold: less than or equal to the threshold. 
   * - LessThanThreshold: less than the threshold. 
   * - NotEqualToThreshold: not equal to the threshold. 
   * - GreaterThanYesterday: greater than the metric value at the same time yesterday. 
   * - LessThanYesterday: less than the metric value at the same time yesterday. 
   * - GreaterThanLastWeek: greater than the metric value at the same time last week. 
   * - LessThanLastWeek: less than the metric value at the same time last week. 
   * - GreaterThanLastPeriod: greater than the metric value in the previous period. 
   * - LessThanLastPeriod: less than the metric value in the previous period. 
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: string;
  preCondition?: string;
  /**
   * @remarks
   * The statistical method for critical-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * The valid values of this parameter are determined by the `Statistics` column that corresponds to the `MetricName` parameter of the specified Alibaba Cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values of this parameter, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for triggering critical-level alert notifications.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The number of times that the metric must reach the alert threshold to send a critical-level alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'string',
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

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the info-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold. 
   * - GreaterThanThreshold: greater than the threshold. 
   * - LessThanOrEqualToThreshold: less than or equal to the threshold. 
   * - LessThanThreshold: less than the threshold. 
   * - NotEqualToThreshold: not equal to the threshold. 
   * - GreaterThanYesterday: greater than the metric value at the same time yesterday. 
   * - LessThanYesterday: less than the metric value at the same time yesterday. 
   * - GreaterThanLastWeek: greater than the metric value at the same time last week. 
   * - LessThanLastWeek: less than the metric value at the same time last week. 
   * - GreaterThanLastPeriod: greater than the metric value in the previous period. 
   * - LessThanLastPeriod: less than the metric value in the previous period. 
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: string;
  preCondition?: string;
  /**
   * @remarks
   * The statistical method for info-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * The valid values of this parameter are determined by the `Statistics` column that corresponds to the `MetricName` parameter of the specified Alibaba Cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values of this parameter, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for info-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 10
   */
  threshold?: string;
  /**
   * @remarks
   * The number of times that the metric must reach the alert threshold to send an info-level alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 1
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'string',
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

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the warning-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold. 
   * - GreaterThanThreshold: greater than the threshold. 
   * - LessThanOrEqualToThreshold: less than or equal to the threshold. 
   * - LessThanThreshold: less than the threshold. 
   * - NotEqualToThreshold: not equal to the threshold. 
   * - GreaterThanYesterday: greater than the metric value at the same time yesterday. 
   * - LessThanYesterday: less than the metric value at the same time yesterday. 
   * - GreaterThanLastWeek: greater than the metric value at the same time last week. 
   * - LessThanLastWeek: less than the metric value at the same time last week. 
   * - GreaterThanLastPeriod: greater than the metric value in the previous period. 
   * - LessThanLastPeriod: less than the metric value in the previous period. 
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: string;
  preCondition?: string;
  /**
   * @remarks
   * The statistical method for warning-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * The valid values of this parameter are determined by the `Statistics` column that corresponds to the `MetricName` parameter of the specified Alibaba Cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values of this parameter, see [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for warning-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 20
   */
  threshold?: string;
  /**
   * @remarks
   * The number of times that the metric must reach the alert threshold to send a warning-level alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'string',
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

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalations extends $dara.Model {
  critical?: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical;
  info?: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo;
  warn?: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical,
      info: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo,
      warn: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn,
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

export class CreateGroupMetricRulesRequestGroupMetricRulesLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key of the alert rule. Alert notifications include tags.
   * 
   * Valid values of N: 1 to 200.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the alert rule. Alert notifications include tags.
   * 
   * Valid values of N: 1 to 200.
   * 
   * @example
   * value1
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

export class CreateGroupMetricRulesRequestGroupMetricRules extends $dara.Model {
  escalations?: CreateGroupMetricRulesRequestGroupMetricRulesEscalations;
  /**
   * @remarks
   * The abbreviation of the cloud service name.
   * 
   * Valid values of N: 1 to 200.
   * 
   * For more information about how to obtain the abbreviation of a cloud service name, see the `metricCategory` field in the `Labels` response parameter of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  category?: string;
  /**
   * @remarks
   * The alert contact group.
   * 
   * Valid values of N: 1 to 200.
   * 
   * For more information about how to obtain alert contact groups, see [DescribeContactGroupList](https://help.aliyun.com/document_detail/114922.html).
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * The monitoring dimensions of the specified resource.
   * 
   * Format: a collection of `key:value` pairs. Examples: `{"userId":"120886317861****"}` and `{"instanceId":"i-2ze2d6j5uhg20x47****"}`.
   * 
   * @example
   * [{"instanceId":"i-m5e1qg6uo38rztr4****"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * The effective period of the alert rule. Valid values of N: 1 to 200.
   * 
   * @example
   * 05:31-23:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The subject of the alert email.
   * 
   * Valid values of N: 1 to 200.
   * 
   * @example
   * ECS instance
   */
  emailSubject?: string;
  /**
   * @remarks
   * The detection period of the alert rule.
   * 
   * Valid values of N: 1 to 200.
   * 
   * Unit: seconds. The default value is the minimum frequency of the metric.
   * 
   * > Set the detection period of the alert rule to the same value as the data reporting period. If the detection period is shorter than the data reporting period, alerts may not be triggered due to insufficient data.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The tags of the alert rule.
   */
  labels?: CreateGroupMetricRulesRequestGroupMetricRulesLabels[];
  /**
   * @remarks
   * The name of the metric.
   * 
   * Valid values of N: 1 to 200.
   * 
   * For more information about how to obtain the name of a metric, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The data namespace of the Alibaba Cloud service.
   * 
   * Valid values of N: 1 to 200.
   * 
   * For more information about how to obtain the data namespace of an Alibaba Cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Alibaba Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The handling method when no monitoring data is available. Valid values:
   * 
   * - KEEP_LAST_STATE: No action is taken. This is the default value.
   * - INSUFFICIENT_DATA: The alert content indicates that no data is available.
   * - OK: The status is normal.
   * 
   * Valid values of N: 1 to 200.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The time range during which the alert rule is inactive. Valid values of N: 1 to 200.
   * 
   * @example
   * 00:00-05:30
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The advanced settings.
   * 
   * Format: `{"key1":"value1","key2":"value2"}`. Example: `{"NotSendOK":true}`, which specifies whether to send alert recovery notifications. The key is NotSendOK, and the value is true (do not send) or false (send, which is the default value).
   * 
   * @example
   * {
   *       "NotSendOK": true
   * }
   */
  options?: string;
  /**
   * @remarks
   * The reporting period of monitoring data.
   * 
   * Valid values of N: 1 to 200. 
   * 
   * The value of `Period` must be 60 or an integer multiple of 60. Unit: seconds. Default value: 300.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * Valid values of N: 1 to 200.
   * 
   * This parameter is required.
   * 
   * @example
   * 456789
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * Valid values of N: 1 to 200.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Rule1
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute period for alert notifications. Valid values of N: 1 to 200.
   * 
   * Unit: seconds. Default value: 86400. Minimum value: 3600.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The webhook URL that is called when an alert is triggered. Valid values of N: 1 to 200.
   * 
   * Specify a publicly accessible URL. CloudMonitor pushes alert notifications to this URL by sending POST requests. Only HTTP is supported.
   * 
   * @example
   * https://www.aliyun.com
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      category: 'Category',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      interval: 'Interval',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      options: 'Options',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: CreateGroupMetricRulesRequestGroupMetricRulesEscalations,
      category: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      labels: { 'type': 'array', 'itemType': CreateGroupMetricRulesRequestGroupMetricRulesLabels },
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      options: 'string',
      period: 'string',
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
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * For more information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 3607****
   */
  groupId?: number;
  /**
   * @remarks
   * The list of metric rules for the application group.
   */
  groupMetricRules?: CreateGroupMetricRulesRequestGroupMetricRules[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupMetricRules: 'GroupMetricRules',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupMetricRules: { 'type': 'array', 'itemType': CreateGroupMetricRulesRequestGroupMetricRules },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupMetricRules)) {
      $dara.Model.validateArray(this.groupMetricRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

