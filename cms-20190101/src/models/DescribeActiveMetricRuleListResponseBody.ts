// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsCritical extends $dara.Model {
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
   * GreaterThanThreshold
   */
  comparisonOperator?: string;
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
   * 99
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before a Critical-level alert is triggered.
   * 
   * @example
   * 3
   */
  times?: string;
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
      times: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo extends $dara.Model {
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
   * GreaterThanThreshold
   */
  comparisonOperator?: string;
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
   * 95
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times
   * 
   * for which the metric value meets the alert condition before an Info-level alert is triggered.
   * 
   * @example
   * 3
   */
  times?: string;
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
      times: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn extends $dara.Model {
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
   * GreaterThanThreshold
   */
  comparisonOperator?: string;
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
   * 80
   */
  threshold?: string;
  /**
   * @remarks
   * The consecutive number of times
   * 
   * for which the metric value meets the alert condition before a Warn-level alert is triggered.
   * 
   * @example
   * 3
   */
  times?: string;
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
      times: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations extends $dara.Model {
  /**
   * @remarks
   * The trigger condition for Critical-level alerts.
   */
  critical?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsCritical;
  /**
   * @remarks
   * The conditions for triggering Info-level alerts.
   */
  info?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo;
  /**
   * @remarks
   * The conditions for triggering Warn-level alerts.
   */
  warn?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsCritical,
      info: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo,
      warn: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn,
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

export class DescribeActiveMetricRuleListResponseBodyAlertListAlert extends $dara.Model {
  /**
   * @remarks
   * The status of the alert rule. Valid values:
   * 
   * *   OK: The alert rule has no active alerts.
   * *   ALARM: The alert rule has active alerts.
   * *   INSUFFICIENT_DATA: No data is found.
   * 
   * @example
   * OK
   */
  alertState?: string;
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
   * The monitoring data of the specified resource.
   * 
   * @example
   * ""
   */
  dimensions?: string;
  /**
   * @remarks
   * The time period during which the alert rule is effective.
   * 
   * @example
   * 00:00-23:59
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
  escalations?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations;
  /**
   * @remarks
   * The subject of the alert notification email.
   * 
   * @example
   * ECS_Bucket
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
   * The namespace of the Alibaba Cloud service.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The time period during which the alert rule is ineffective.
   * 
   * @example
   * 00:00-06:00
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The aggregation period of monitoring data.
   * 
   * Unit: seconds.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The resources that are associated with the alert rule.
   * 
   * @example
   * [{"resource":"_ALL"}]
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * ruleIdxxxx
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * myAlert
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute period during which new alerts are not sent even if the trigger conditions are met.
   * 
   * Unit: seconds.
   * 
   * @example
   * 86400
   */
  silenceTime?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://www.aliyun.com
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      enableState: 'EnableState',
      escalations: 'Escalations',
      mailSubject: 'MailSubject',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      enableState: 'boolean',
      escalations: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations,
      mailSubject: 'string',
      metricName: 'string',
      namespace: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.escalations && typeof (this.escalations as any).validate === 'function') {
      (this.escalations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertList extends $dara.Model {
  alert?: DescribeActiveMetricRuleListResponseBodyAlertListAlert[];
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: { 'type': 'array', 'itemType': DescribeActiveMetricRuleListResponseBodyAlertListAlert },
    };
  }

  validate() {
    if(Array.isArray(this.alert)) {
      $dara.Model.validateArray(this.alert);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyDatapointsAlarm extends $dara.Model {
  /**
   * @remarks
   * The comparison operator that is used in the alert rule. Valid values:
   * 
   * *   `>`
   * *   `<`
   * *   `>=`
   * *   `<=`
   * *   `=`
   * *   `=`
   * 
   * @example
   * >
   */
  comparisonOperator?: string;
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
   * Indicates whether the alert rule is enabled. Valid values:
   * 
   * *   true: The alert rule is enabled.
   * *   false: The alert rule is disabled.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The end of the time period during which the alert rule is effective.
   * 
   * Unit: hours. For example, the value 23 indicates `23:59:59`.
   * 
   * @example
   * 24
   */
  endTime?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before an alert is triggered.
   * 
   * @example
   * 3
   */
  evaluationCount?: string;
  /**
   * @remarks
   * The metric name.
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
   * The aggregation period of monitoring data.
   * 
   * Unit: seconds.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * a151cd6023eacee2f0978e03863cc1697c89508****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * SystemDefault_acs_rds_dashboard_CpuUsage
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute period during which new alerts are not sent even if the trigger conditions are met.
   * 
   * Unit: seconds.
   * 
   * @example
   * 86400
   */
  silenceTime?: string;
  /**
   * @remarks
   * The beginning of the time period during which the alert rule is effective.
   * 
   * Unit: hours. For example, the value 00 indicates `00:00:00`.
   * 
   * @example
   * 00
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates whether the alert rule is enabled.
   * 
   * @example
   * Enable
   */
  state?: string;
  /**
   * @remarks
   * The statistical method.
   * 
   * @example
   * Average
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
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://www.aliyun.com
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      contactGroups: 'ContactGroups',
      enable: 'Enable',
      endTime: 'EndTime',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      state: 'State',
      statistics: 'Statistics',
      threshold: 'Threshold',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      contactGroups: 'string',
      enable: 'string',
      endTime: 'string',
      evaluationCount: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'string',
      startTime: 'string',
      state: 'string',
      statistics: 'string',
      threshold: 'string',
      webhook: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyDatapoints extends $dara.Model {
  alarm?: DescribeActiveMetricRuleListResponseBodyDatapointsAlarm[];
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: { 'type': 'array', 'itemType': DescribeActiveMetricRuleListResponseBodyDatapointsAlarm },
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

export class DescribeActiveMetricRuleListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the alert rules. The result is in the same structure as that returned by the DescribeMetricRuleList operation.
   */
  alertList?: DescribeActiveMetricRuleListResponseBodyAlertList;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the alert rules.
   */
  datapoints?: DescribeActiveMetricRuleListResponseBodyDatapoints;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F82E6667-7811-4BA0-842F-5B2DC42BBAAD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertList: 'AlertList',
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertList: DescribeActiveMetricRuleListResponseBodyAlertList,
      code: 'string',
      datapoints: DescribeActiveMetricRuleListResponseBodyDatapoints,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.alertList && typeof (this.alertList as any).validate === 'function') {
      (this.alertList as any).validate();
    }
    if(this.datapoints && typeof (this.datapoints as any).validate === 'function') {
      (this.datapoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

