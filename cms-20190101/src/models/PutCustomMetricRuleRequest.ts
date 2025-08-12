// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutCustomMetricRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The operator that is used to compare the metric value with the threshold. Valid values:
   * 
   * *   `>=`
   * *   `=`
   * *   `<=`
   * *   `>`
   * *   `<`
   * *   `!=`
   * 
   * This parameter is required.
   * 
   * @example
   * >=
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The alert contact groups. Separate multiple alert contact groups with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * The period of time during which the alert rule is effective. Valid values: 00:00 to 23:59.
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
   * The consecutive number of times for which the metric value meets the alert condition before an alert is triggered.
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
   * >  The value 0 indicates that the reported custom monitoring data does not belong to an application group.
   * 
   * @example
   * 7378****
   */
  groupId?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * *   CRITICAL
   * *   WARN
   * *   INFO
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
   * >  For more information about how to obtain the metric name, see [DescribeCustomMetricList](https://help.aliyun.com/document_detail/115005.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The cycle that is used to aggregate custom monitoring data. Unit: seconds Set the value to an integral multiple of 60. The original reporting cycle of custom monitoring data is used by default.
   * 
   * @example
   * 300
   */
  period?: string;
  /**
   * @remarks
   * The custom monitoring data to which the alert rule applies. The value includes the application group ID to which the custom monitoring data belongs and the dimension to which the metric belongs.
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
   * >  You can specify an existing ID to modify the corresponding alert rule or specify a new ID to create an alert rule.
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
   * The mute period during which new alert notifications are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400, which is equivalent to one day.
   * 
   * >  Only one alert notification is sent during each mute period even if the metric value exceeds the alert threshold several times.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The method used to calculate the metric value based on which alerts are triggered.
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
   * The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
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

