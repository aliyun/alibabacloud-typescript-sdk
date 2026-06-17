// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutResourceMetricRuleShrinkRequestEscalationsCritical extends $dara.Model {
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

export class PutResourceMetricRuleShrinkRequestEscalationsInfo extends $dara.Model {
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

export class PutResourceMetricRuleShrinkRequestEscalationsWarn extends $dara.Model {
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

export class PutResourceMetricRuleShrinkRequest extends $dara.Model {
  escalations?: PutResourceMetricRuleShrinkRequestEscalations;
  /**
   * @remarks
   * The alert conditions for multiple metrics.
   * 
   * > Single-metric and multi-metric alert conditions are mutually exclusive and cannot be set at the same time.
   */
  compositeExpressionShrink?: string;
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
  labels?: PutResourceMetricRuleShrinkRequestLabels[];
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
  prometheusShrink?: string;
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
      compositeExpressionShrink: 'CompositeExpression',
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

