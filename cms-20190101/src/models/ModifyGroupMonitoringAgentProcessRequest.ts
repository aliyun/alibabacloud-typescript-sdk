// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGroupMonitoringAgentProcessRequestAlertConfigTargetList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource.
   * 
   * For information about how to obtain the ARN of a resource, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
   * 
   * Format: `acs:{Service name abbreviation}:{regionId}:{userId}:/{Resource type}/{Resource name}/message`. Example: `acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`. Fields:
   * 
   * - {Service name abbreviation}: the abbreviation of the service name. Valid value: mns.
   * - {userId}: the ID of the Alibaba Cloud account.
   * - {regionId}: the region ID of the message queue or topic.
   * - {Resource type}: the type of the resource for which alerts are triggered. Valid values: 
   *     - **queues** 
   *     - **topics** 
   * - {Resourcename}: the name of the resource. 
   *   - If the resource type is set to **queues**, the resource name is the name of the message queue. 
   *   - If the resource type is set to **topics**, the resource name is the name of the topic.`
   * 
   * @example
   * acs:mns:cn-hangzhou:120886317861****:/queues/test/message
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the resource for which alerts are triggered.
   * 
   * For information about how to obtain the ID of a resource for which alerts are triggered, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The parameters of the alert callback. The parameters are in the JSON format.
   * 
   * @example
   * {"customField1":"value1","customField2":"$.name"}
   */
  jsonParams?: string;
  /**
   * @remarks
   * The level of the alert. Valid values:
   * 
   * *   INFO: information
   * *   WARN: warning
   * *   CRITICAL: critical
   * 
   * @example
   * ["INFO", "WARN", "CRITICAL"]
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupMonitoringAgentProcessRequestAlertConfig extends $dara.Model {
  /**
   * @remarks
   * The comparison operator that is used to compare the metric value with the threshold. Valid values of N: 1 to 200. Valid values:
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * *   GreaterThanThreshold: greater than the threshold
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * *   LessThanThreshold: less than the threshold.
   * *   NotEqualToThreshold: not equal to the threshold
   * *   GreaterThanYesterday: greater than the metric value at the same time yesterday.
   * *   LessThanYesterday: less than the metric value at the same time yesterday
   * *   GreaterThanLastWeek: greater than the metric value at the same time last week
   * *   LessThanLastWeek: less than the metric value at the same time last week
   * *   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
   * *   LessThanLastPeriod: less than the metric value in the last monitoring cycle
   * 
   * This parameter is required.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The time period during which the alert rule is effective. Valid values of N: 1 to 200.
   * 
   * @example
   * 00:00-22:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The level of the alert. Valid values of N: 1 to 200. Valid values:
   * 
   * *   critical (default value): critical
   * *   warn: warning
   * *   info: information
   * 
   * This parameter is required.
   * 
   * @example
   * warn
   */
  escalationsLevel?: string;
  /**
   * @remarks
   * The time period during which the alert rule is ineffective. Valid values of N: 1 to 200.
   * 
   * @example
   * 23:00-23:59
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The mute period during which new alerts are not sent even if the trigger conditions are met. Valid values of N: 1 to 200.
   * 
   * Unit: seconds. Minimum value: 3600, which is equivalent to one hour. Default value: 86400, which is equivalent to one day.
   * 
   * >  Only one alert notification is sent during a mute period even if the metric value exceeds the alert threshold during consecutive checks.
   * 
   * @example
   * 86400
   */
  silenceTime?: string;
  /**
   * @remarks
   * The statistical aggregation method that is used to calculate the metric values. Valid values of N: 1 to 200.
   * 
   * >  Set the value to Average.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The alert trigger.
   */
  targetList?: ModifyGroupMonitoringAgentProcessRequestAlertConfigTargetList[];
  /**
   * @remarks
   * The alert threshold. Valid values of N: 1 to 200.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  threshold?: string;
  /**
   * @remarks
   * The number of times for which the threshold can be consecutively exceeded. Valid values of N: 1 to 200. Default value: 3.
   * 
   * >  A metric triggers an alert only after the metric value reaches the threshold consecutively for the specified times.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  times?: string;
  /**
   * @remarks
   * The callback URL to which a POST request is sent when an alert is triggered based on the alert rule. Valid values of N: 1 to 200.
   * 
   * @example
   * http://www.aliyun.com
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      effectiveInterval: 'EffectiveInterval',
      escalationsLevel: 'EscalationsLevel',
      noEffectiveInterval: 'NoEffectiveInterval',
      silenceTime: 'SilenceTime',
      statistics: 'Statistics',
      targetList: 'TargetList',
      threshold: 'Threshold',
      times: 'Times',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      effectiveInterval: 'string',
      escalationsLevel: 'string',
      noEffectiveInterval: 'string',
      silenceTime: 'string',
      statistics: 'string',
      targetList: { 'type': 'array', 'itemType': ModifyGroupMonitoringAgentProcessRequestAlertConfigTargetList },
      threshold: 'string',
      times: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targetList)) {
      $dara.Model.validateArray(this.targetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupMonitoringAgentProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The alert rule configurations.
   * 
   * This parameter is required.
   */
  alertConfig?: ModifyGroupMonitoringAgentProcessRequestAlertConfig[];
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 6780****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the process monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * 92E3065F-0980-4E31-9AA0-BA6****
   */
  id?: string;
  /**
   * @remarks
   * The logical operator used between conditional expressions that are used to match instances. Valid values:
   * 
   * *   all
   * *   and
   * *   or
   * 
   * @example
   * and
   */
  matchExpressFilterRelation?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      groupId: 'GroupId',
      id: 'Id',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': ModifyGroupMonitoringAgentProcessRequestAlertConfig },
      groupId: 'string',
      id: 'string',
      matchExpressFilterRelation: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertConfig)) {
      $dara.Model.validateArray(this.alertConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

