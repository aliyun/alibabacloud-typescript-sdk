// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutGroupMetricRuleRequestEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * The operator that is used to compare the metric value with the threshold for Critical-level alerts. Valid values:
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
   * The statistical methods for Critical-level alerts. Separate multiple statistical methods with commas (,).
   * 
   * The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * The operator that is used to compare the metric value with the threshold for Info-level alerts. Valid values:
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
   * The statistical methods for Info-level alerts. Separate multiple statistical methods with commas (,).
   * 
   * The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * The operator that is used to compare the metric value with the threshold for Warn-level alerts. Valid values:
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
   * The statistical methods for Warn-level alerts. Separate multiple statistical methods with commas (,).
   * 
   * The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
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
   * The abbreviation of the cloud service name.
   * 
   * For more information about how to obtain the abbreviation of a cloud service name, see `metricCategory` in the response parameter `Labels` of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
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
   * Set the value to a set of key-value pairs, for example, `userId:120886317861****` or `instanceId:i-m5e1qg6uo38rztr4****`.
   * 
   * @example
   * [{"instanceId":"i-m5e1qg6uo38rztr4****"}]
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
   * The subject of the alert notification email.
   */
  emailSubject?: string;
  /**
   * @remarks
   * The second-level or third-level dimension of the alert rule in the application group.
   * 
   * Set the value to a set of key-value pairs, for example, `port:80` or `/dev/xvda:d-m5e6yphgzn3aprwu****`.
   * 
   * If the first-level dimension of the alert rule is `instanceId:i-m5e1qg6uo38rztr4****`, its second-level dimension is the `/dev/xvda:d-m5e6yphgzn3aprwu****` disk in the instance.
   * 
   * @example
   * {"/dev/xvda":"d-m5e6yphgzn3aprwu****"}
   */
  extraDimensionJson?: string;
  /**
   * @remarks
   * The application group ID.
   * 
   * For more information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 17285****
   */
  groupId?: string;
  /**
   * @remarks
   * The interval at which CloudMonitor checks whether the alert rule is triggered. Unit: seconds.
   * 
   * >  We recommend that you set the interval to the data aggregation period. If the interval is shorter than the data aggregation period, alerts cannot be triggered due to insufficient data.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The tags of the alert rule.
   * 
   * The specified tag is contained in alert notifications.
   */
  labels?: PutGroupMetricRuleRequestLabels[];
  /**
   * @remarks
   * The metric name.
   * 
   * For more information about how to obtain the name of a metric, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * For more information about how to obtain the namespace of a cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The method that is used to handle alerts when no monitoring data is found. Valid values:
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
   * The time period during which the alert rule is ineffective.
   * 
   * @example
   * 00:00-05:30
   */
  noEffectiveInterval?: string;
  options?: string;
  /**
   * @remarks
   * The aggregation period of the metric data.
   * 
   * Set the `Period` parameter to an integral multiple of 60. Unit: seconds. Default value: 300.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * *   When you create an alert rule for the application group, enter the ID of the alert rule.
   * *   When you modify a specified alert rule in the application group, you must obtain the ID of the alert rule. For information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
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
   * *   When you create an alert rule for the application group, enter the name of the alert rule.
   * *   When you modify a specified alert rule in the application group, you must obtain the name of the alert rule. For more information about how to obtain the name of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Rule_01
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute period during which new alerts are not sent even if the trigger conditions are met.
   * 
   * Unit: seconds. Default value: 86400.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The callback URL.
   * 
   * The callback URL must be accessible over the Internet. CloudMonitor sends a POST request to push an alert notification to the callback URL that you specify. Only HTTP requests are supported.
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

