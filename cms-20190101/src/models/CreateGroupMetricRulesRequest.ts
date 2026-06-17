// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * 紧急级别阈值比较符。取值：
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
   * N的取值范围：1~200。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: string;
  preCondition?: string;
  /**
   * @remarks
   * 紧急级别报警统计方法。
   * 
   * N的取值范围：1~200。
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
   * 触发紧急级别报警通知的阈值。
   * 
   * N的取值范围：1~200。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * 发送紧急报警通知需要监控指标达到报警阈值的次数。
   * 
   * N的取值范围：1~200。
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
   * 普通级别阈值比较符。取值：
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
   * N的取值范围：1~200。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: string;
  preCondition?: string;
  /**
   * @remarks
   * 普通级别报警统计方法。
   * 
   * N的取值范围：1~200。
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
   * 普通级别报警阈值。
   * 
   * N的取值范围：1~200。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * 10
   */
  threshold?: string;
  /**
   * @remarks
   * 发送普通报警通知需要监控指标达到报警阈值的次数。
   * 
   * N的取值范围：1~200。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
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
   * 警告级别阈值比较符。取值：
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
   * N的取值范围：1~200。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: string;
  preCondition?: string;
  /**
   * @remarks
   * 警告级别报警统计方法。
   * 
   * N的取值范围：1~200。
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
   * 警告级别报警阈值。
   * 
   * N的取值范围：1~200。
   * 
   * > 报警级别Critical（严重）、Warn（警告）或Info（信息）至少设置一个，且该报警级别中的参数Statistics、ComparisonOperator、Threshold和Times必须同时设置。
   * 
   * @example
   * 20
   */
  threshold?: string;
  /**
   * @remarks
   * 发送警告报警通知需要监控指标达到报警阈值的次数。
   * 
   * N的取值范围：1~200。
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
   * The tag key of the alert rule. The tag is included in alert notifications.
   * 
   * Valid values of N: 1 to 200.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the alert rule. The tag is included in alert notifications.
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
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * Valid values of N: 1 to 200.
   * 
   * For information about how to obtain the abbreviation, see the `metricCategory` tag in the `Labels` response parameter of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
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
   * For information about how to obtain the alert contact group, see [DescribeContactGroupList](https://help.aliyun.com/document_detail/114922.html).
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * The monitoring dimensions of the specified resource.
   * 
   * The value is a collection of `key:value` pairs, such as `{"userId":"120886317861****"}` and `{"instanceId":"i-2ze2d6j5uhg20x47****"}`.
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
   * The subject of the alert notification email.
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
   * Unit: seconds. The default value is the minimum reporting period of the metric.
   * 
   * > Keep the detection period of the alert rule consistent with the data reporting period. If the detection period is shorter than the data reporting period, alerts may not be triggered due to insufficient data.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The tag keys of the alert rule.
   */
  labels?: CreateGroupMetricRulesRequestGroupMetricRulesLabels[];
  /**
   * @remarks
   * The name of the metric.
   * 
   * Valid values of N: 1 to 200.
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
   * Valid values of N: 1 to 200.
   * 
   * For information about how to obtain the namespace of an Alibaba Cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Cloud service monitoring](https://help.aliyun.com/document_detail/163515.html).
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
   * Valid values of N: 1 to 200.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The time period during which the alert rule is ineffective. Valid values of N: 1 to 200.
   * 
   * @example
   * 00:00-05:30
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The advanced settings.
   * 
   * Format: {"key1":"value1","key2":"value2"}. For example, {"NotSendOK":true} specifies whether to send an alert recovery notification. The key is NotSendOK, and the value is true (do not send) or false (send, which is the default).
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
   * The value of `Period` must be 60 or a multiple of 60. Unit: seconds. Default value: 300.
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
   * The mute period of the alert notification. Valid values of N: 1 to 200.
   * 
   * Unit: seconds. Default value: 86400. Minimum value: 3600.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The callback URL to which an alert notification is sent. Valid values of N: 1 to 200.
   * 
   * Enter a publicly accessible URL. CloudMonitor sends alert information to this URL by using POST requests. Only the HTTP protocol is supported.
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
   * For information about how to obtain the application group ID, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 3607****
   */
  groupId?: number;
  /**
   * @remarks
   * The list of metric-based alert rules for the application group.
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

