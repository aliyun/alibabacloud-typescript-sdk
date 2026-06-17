// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutGroupMetricRuleRequestEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * Critical级别阈值比较符。取值：
   * 
   * - GreaterThanOrEqualToThreshold：大于等于。
   * - GreaterThanThreshold：大于。
   * - LessThanOrEqualToThreshold：小于等于。
   * - LessThanThreshold：小于。
   * - NotEqualToThreshold：不等于。
   * - GreaterThanYesterday：同比昨天时间上涨。
   * - LessThanYesterday：同比昨天时间下降。
   * - GreaterThanLastWeek：同比上周同一时间上涨。
   * - LessThanLastWeek：同比上周同一时间下降。
   * - GreaterThanLastPeriod：环比上周期上涨。
   * - LessThanLastPeriod：环比上周期下降。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * Critical级别报警统计方法。多个统计方法之间用半角逗号（,）分隔。
   * 
   * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * Critical级别报警阈值。
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * Critical级别报警重试次数。
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
   * Info级别阈值比较符。取值：
   * 
   * - GreaterThanOrEqualToThreshold：大于等于。
   * - GreaterThanThreshold：大于。
   * - LessThanOrEqualToThreshold：小于等于。
   * - LessThanThreshold：小于。
   * - NotEqualToThreshold：不等于。
   * - GreaterThanYesterday：同比昨天时间上涨。
   * - LessThanYesterday：同比昨天时间下降。
   * - GreaterThanLastWeek：同比上周同一时间上涨。
   * - LessThanLastWeek：同比上周同一时间下降。
   * - GreaterThanLastPeriod：环比上周期上涨。
   * - LessThanLastPeriod：环比上周期下降。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * Info级别报警统计方法。多个统计方法之间用半角逗号（,）分隔。
   * 
   * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * Info级别报警阈值。
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * Info级别报警重试次数。
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
   * Warn级别阈值比较符。取值：
   * 
   * - GreaterThanOrEqualToThreshold：大于等于。
   * - GreaterThanThreshold：大于。
   * - LessThanOrEqualToThreshold：小于等于。
   * - LessThanThreshold：小于。
   * - NotEqualToThreshold：不等于。
   * - GreaterThanYesterday：同比昨天时间上涨。
   * - LessThanYesterday：同比昨天时间下降。
   * - GreaterThanLastWeek：同比上周同一时间上涨。
   * - LessThanLastWeek：同比上周同一时间下降。
   * - GreaterThanLastPeriod：环比上周期上涨。
   * - LessThanLastPeriod：环比上周期下降。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * Warn级别报警统计方法。多个统计方法之间用半角逗号（,）分隔。
   * 
   * 该参数的取值由指定云产品的`MetricName`对应的`Statistics`列决定，例如：Maximum、Minimum和Average。关于如何获取该参数的取值，请参见[云产品监控项](https://help.aliyun.com/document_detail/163515.html)。
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * Warn级别报警阈值。
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * Warn级别报警重试次数。
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
   * For information about how to obtain the abbreviation, see the `metricCategory` tag in the `Labels` response parameter of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
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
   * The first-level dimensions of the alert rule in the application group.
   * 
   * Format: a collection of `key:value` pairs, such as `{"userId":"120886317861****"}` and `{"instanceId":"i-m5e1qg6uo38rztr4****"}`.
   * 
   * @example
   * [{"instanceId":"i-m5e1qg6uo38rztr4****"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * The effective period during which the alert rule takes effect.
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
   * The second-level or third-level dimensions of the alert rule in the application group.
   * 
   * Format: a collection of `key:value` pairs, such as `port:80` and `/dev/xvda:d-m5e6yphgzn3aprwu****`.
   * 
   * If the first-level dimension is `{"instanceId":"i-m5e1qg6uo38rztr4****"}`, the second-level dimension is a cloud disk of the instance: `{"/dev/xvda":"d-m5e6yphgzn3aprwu****"}`.
   * 
   * @example
   * {"/dev/xvda":"d-m5e6yphgzn3aprwu****"}
   */
  extraDimensionJson?: string;
  /**
   * @remarks
   * The application group ID.
   * 
   * For information about how to obtain the application group ID, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
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
   * > Keep the detection period consistent with the data reporting period. If the detection period is shorter than the data reporting period, alerts may not be triggered due to insufficient data.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The tags of the alert rule.
   * 
   * Tags are included in alert notifications.
   */
  labels?: PutGroupMetricRuleRequestLabels[];
  /**
   * @remarks
   * The metric name.
   * 
   * For information about how to obtain the metric name, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Cloud service monitoring](https://help.aliyun.com/document_detail/163515.html).
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
   * For information about how to obtain the namespace, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Cloud service monitoring](https://help.aliyun.com/document_detail/163515.html).
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
   * - KEEP_LAST_STATE (default): No action is performed.
   * - INSUFFICIENT_DATA: An alert whose content is "Insufficient Data" is triggered.
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
   * 00:00-05:30
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The advanced settings.
   * 
   * Format: {"key1":"value1","key2":"value2"}. Example: {"NotSendOK":true}. This specifies whether to send a notification when the alert is cleared. The key is NotSendOK, and the value is true (do not send) or false (send, which is the default).
   * 
   * @example
   * {"NotSendOK":true}
   */
  options?: string;
  /**
   * @remarks
   * The reporting period of monitoring data.
   * 
   * The value of `Period` must be 60 or a multiple of 60. Unit: seconds. Default value: 300.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The alert rule ID.
   * 
   * - To create an alert rule for the application group, enter an alert rule ID.
   * 
   * - To modify a specified alert rule in the application group, obtain the alert rule ID. For information about how to obtain the alert rule ID, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  ruleId?: string;
  /**
   * @remarks
   * The alert rule name.
   * 
   * - To create an alert rule for the application group, enter an alert rule name.
   * 
   * - To modify a specified alert rule in the application group, obtain the alert rule name. For information about how to obtain the alert rule name, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Rule_01
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute period.
   * 
   * Unit: seconds. Default value: 86400.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The callback URL to which a request is sent when an alert is triggered.
   * 
   * Enter a publicly accessible URL. CloudMonitor sends a POST request to push alert information to this URL. Only the HTTP protocol is supported.
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

