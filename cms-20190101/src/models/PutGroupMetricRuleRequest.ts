// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutGroupMetricRuleRequestEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * The threshold comparison operator for Critical-level alerts. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold.
   * - GreaterThanThreshold: greater than the threshold.
   * - LessThanOrEqualToThreshold: less than or equal to the threshold.
   * - LessThanThreshold: less than the threshold.
   * - NotEqualToThreshold: not equal to the threshold.
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
   * The statistical method for Critical-level alerts. Separate multiple statistical methods with commas (,).
   * 
   * The valid values of this parameter are determined by the `Statistics` column corresponding to the `MetricName` of the specified Alibaba Cloud service. Examples: Maximum, Minimum, and Average. For information about how to obtain the valid values of this parameter, see [cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * The number of retries for Critical-level alerts.
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

export class PutGroupMetricRuleRequestEscalationsInfo extends $dara.Model {
  /**
   * @remarks
   * The threshold comparison operator for Info-level alerts. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold.
   * - GreaterThanThreshold: greater than the threshold.
   * - LessThanOrEqualToThreshold: less than or equal to the threshold.
   * - LessThanThreshold: less than the threshold.
   * - NotEqualToThreshold: not equal to the threshold.
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
   * The statistical method for Info-level alerts. Separate multiple statistical methods with commas (,).
   * 
   * The valid values of this parameter are determined by the `Statistics` column corresponding to the `MetricName` of the specified Alibaba Cloud service. Examples: Maximum, Minimum, and Average. For information about how to obtain the valid values of this parameter, see [cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * The number of retries for Info-level alerts.
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

export class PutGroupMetricRuleRequestEscalationsWarn extends $dara.Model {
  /**
   * @remarks
   * The threshold comparison operator for Warn-level alerts. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold.
   * - GreaterThanThreshold: greater than the threshold.
   * - LessThanOrEqualToThreshold: less than or equal to the threshold.
   * - LessThanThreshold: less than the threshold.
   * - NotEqualToThreshold: not equal to the threshold.
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
   * The statistical method for Warn-level alerts. Separate multiple statistical methods with commas (,).
   * 
   * The valid values of this parameter are determined by the `Statistics` column corresponding to the `MetricName` of the specified Alibaba Cloud service. Examples: Maximum, Minimum, and Average. For information about how to obtain the valid values of this parameter, see [cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * The number of retries for Warn-level alerts.
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

export class PutGroupMetricRuleRequestEscalations extends $dara.Model {
  critical?: PutGroupMetricRuleRequestEscalationsCritical;
  info?: PutGroupMetricRuleRequestEscalationsInfo;
  warn?: PutGroupMetricRuleRequestEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutGroupMetricRuleRequestEscalationsCritical,
      info: PutGroupMetricRuleRequestEscalationsInfo,
      warn: PutGroupMetricRuleRequestEscalationsWarn,
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

export class PutGroupMetricRuleRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key of the alert rule.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the alert rule.
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

export class PutGroupMetricRuleRequest extends $dara.Model {
  escalations?: PutGroupMetricRuleRequestEscalations;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * For information about how to obtain the abbreviation of an Alibaba Cloud service name, see the `metricCategory` field in the `Labels` response parameter of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
   * 
   * @example
   * ECS
   */
  category?: string;
  /**
   * @remarks
   * The alert contact group.
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * The first-level dimension of the alert rule in the application group.
   * 
   * Format: a collection of `key:value` pairs. Examples: `{"userId":"120886317861****"}` and `{"instanceId":"i-m5e1qg6uo38rztr4****"}`.
   * 
   * @example
   * [{"instanceId":"i-m5e1qg6uo38rztr4****"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: sends a check request. The system does not bind a security group to the instance. The check items include whether required parameters are specified, the request format, and service limits. If the check fails, the system returns an error. If the check succeeds, the system returns the error code `DryRunOperation`.
   * - **false** (default value): sends a normal request. If the check succeeds, the system returns an HTTP 2xx status code and performs the operation.
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
   * 05:31-23:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The subject of the alert email.
   * 
   * @example
   * ECS instance
   */
  emailSubject?: string;
  /**
   * @remarks
   * The second-level or third-level dimension of the alert rule in the application group.
   * 
   * Format: a collection of `key:value` pairs. Examples: `port:80` and `/dev/xvda:d-m5e6yphgzn3aprwu****`.
   * 
   * If the first-level dimension of the alert rule is `{"instanceId":"i-m5e1qg6uo38rztr4****"}`, the second-level dimension is the cloud disk in the instance, such as `{"/dev/xvda":"d-m5e6yphgzn3aprwu****"}`.
   * 
   * @example
   * {"/dev/xvda":"d-m5e6yphgzn3aprwu****"}
   */
  extraDimensionJson?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * For information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 17285****
   */
  groupId?: string;
  /**
   * @remarks
   * The detection period of the alert rule. Unit: seconds.
   * 
   * > Make sure the detection period of the alert rule is the same as the data reporting period. If the detection period is shorter than the data reporting period, alerts may not be triggered due to insufficient data.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The tags of the alert rule.
   * 
   * Alert notifications include tags.
   */
  labels?: PutGroupMetricRuleRequestLabels[];
  /**
   * @remarks
   * The name of the metric.
   * 
   * For information about how to obtain the name of a metric, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the Alibaba Cloud service.
   * 
   * For information about how to obtain the namespace of an Alibaba Cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * - KEEP_LAST_STATE (default value): Takes no action.
   * - INSUFFICIENT_DATA: Sends an alert notification indicating that no data is found.
   * - OK: Sends an alert notification indicating that the status is normal.
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
   * 00:00-05:30
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The advanced settings.
   * 
   * Format: `{"key1":"value1","key2":"value2"}`. Example: `{"NotSendOK":true}`, which specifies whether to send alert recovery notifications. The key is `NotSendOK`, and the value is `true` (do not send) or `false` (send by default).
   * 
   * @example
   * {"NotSendOK":true}
   */
  options?: string;
  /**
   * @remarks
   * The reporting period of monitoring data.
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
   * - To create an alert rule for the application group, enter an alert rule ID.
   * 
   * - To modify a specified alert rule in the application group, you must obtain the alert rule ID. For information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * - To create an alert rule for the application group, enter an alert rule name.
   * 
   * - To modify a specified alert rule in the application group, you must obtain the alert rule name. For information about how to obtain the name of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Rule_01
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute for epoch.
   * 
   * Unit: seconds. Default value: 86400.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The webhook URL that is called when an alert is triggered.
   * 
   * Enter a publicly accessible URL. CloudMonitor pushes alert notifications to this URL by sending POST requests. Only HTTP is supported.
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
      dryRun: 'DryRun',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      extraDimensionJson: 'ExtraDimensionJson',
      groupId: 'GroupId',
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
      escalations: PutGroupMetricRuleRequestEscalations,
      category: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      dryRun: 'boolean',
      effectiveInterval: 'string',
      emailSubject: 'string',
      extraDimensionJson: 'string',
      groupId: 'string',
      interval: 'string',
      labels: { 'type': 'array', 'itemType': PutGroupMetricRuleRequestLabels },
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

