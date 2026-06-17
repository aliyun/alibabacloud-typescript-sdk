// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutCustomMetricRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the threshold. Valid values:
   * 
   * - `>=`
   * 
   * - `=`
   * 
   * - `<=`
   * 
   * - `>`
   * 
   * - `<`
   * 
   * - `!=`.
   * 
   * This parameter is required.
   * 
   * @example
   * >=
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The alert contact group. Separate multiple alert contact groups with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * The effective time range of the alert rule. Valid values: 00:00-23:59.
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
   * ECS instance
   */
  emailSubject?: string;
  /**
   * @remarks
   * The number of alert retries.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The ID of the application group to which the custom monitoring data belongs.
   * 
   * > A value of 0 indicates that the reported custom monitoring data does not belong to any application group.
   * 
   * @example
   * 7378****
   */
  groupId?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * - CRITICAL: critical.
   * - WARN: warning.
   * - INFO: information.
   * 
   * This parameter is required.
   * 
   * @example
   * CRITICAL
   */
  level?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * > For more information about how to obtain the metric name, see [DescribeCustomMetricList](https://help.aliyun.com/document_detail/115005.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The aggregation period of the custom monitoring data. Unit: seconds. Set the value to 60 or a multiple of 60. Default value: the original reporting period of the custom monitoring data.
   * 
   * @example
   * 300
   */
  period?: string;
  /**
   * @remarks
   * The custom monitoring data to which the alert rule applies. The value consists of the application group ID to which the custom monitoring data belongs and the dimensions of the metric.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"groupId":7378****,"dimension":"instanceId=i-hp3543t5e4sudb3s****"}]
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * > If the alert rule ID already exists, the alert rule is modified. If the alert rule ID does not exist, an alert rule is created.
   * 
   * This parameter is required.
   * 
   * @example
   * MyRuleId1
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * CpuUsage
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute for period. Unit: seconds. Default value: 86400 (1 day).
   * 
   * > If the monitoring data continuously exceeds the alert threshold, only one alert notification is sent within each mute for period.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The statistical method for alerts.
   * 
   * This parameter is required.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @remarks
   * The alert callback URL. An HTTP POST request is sent to the specified URL when an alert is triggered.
   * 
   * @example
   * https://www.aliyun.com
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      evaluationCount: 'EvaluationCount',
      groupId: 'GroupId',
      level: 'Level',
      metricName: 'MetricName',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      statistics: 'Statistics',
      threshold: 'Threshold',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      evaluationCount: 'number',
      groupId: 'string',
      level: 'string',
      metricName: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
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

