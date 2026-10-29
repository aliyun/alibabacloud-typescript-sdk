// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGroupMonitoringAgentProcessRequestAlertConfigTargetList extends $dara.Model {
  /**
   * @remarks
   * The resource ARN.
   * 
   * For information about how to obtain the resource ARN, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
   * 
   * The resource ARN is in the format of `acs:{cloud_service_abbreviation}:{regionId}:{userId}:/{resource_type}/{resource_name}/message`. Example: `acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`. The parameters are described as follows:
   * 
   * - {cloud_service_abbreviation}: Currently, only Simple Message Queue (formerly MNS) is supported.
   * 
   * - {userId}: The Alibaba Cloud account ID.
   * 
   * - {regionId}: The region where Simple Message Queue (formerly MNS) or the topic resides.
   * 
   * - {resource_type}: The type of the resource that accepts alerts. Valid values:
   * 
   *   - **queues**: queue.
   *   - **topics**: topic.
   * 
   * - {resource_name}: The resource name.
   * 
   *   - If the resource type is **queues**, the resource name is the queue name.
   *   - If the resource type is **topics**, the resource name is the topic name.
   * 
   * @example
   * acs:mns:cn-hangzhou:120886317861****:/queues/test/message
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the alert trigger target.
   * 
   * For information about how to obtain the alert trigger target ID, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The JSON-formatted parameters for the alert callback.
   * 
   * @example
   * {"customField1":"value1","customField2":"$.name"}
   */
  jsonParams?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * - INFO: information.
   * - WARN: warning.
   * - CRITICAL: critical.
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
   * The comparison operator for the Critical level threshold. Valid values of N: 1 to 200. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to.
   * - GreaterThanThreshold: greater than.
   * - LessThanOrEqualToThreshold: less than or equal to.
   * - LessThanThreshold: less than.
   * - NotEqualToThreshold: not equal to.
   * - GreaterThanYesterday: greater than the value at the same time yesterday.
   * - LessThanYesterday: less than the value at the same time yesterday.
   * - GreaterThanLastWeek: greater than the value at the same time last week.
   * - LessThanLastWeek: less than the value at the same time last week.
   * - GreaterThanLastPeriod: greater than the value in the last period.
   * - LessThanLastPeriod: less than the value in the last period.
   * 
   * This parameter is required.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The effective period of the alert rule. Valid values of N: 1 to 200.
   * 
   * @example
   * 00:00-22:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The alert level. Valid values of N: 1 to 200. Valid values:
   * - critical (default): critical.
   * - warn: warning.
   * - info: information.
   * 
   * This parameter is required.
   * 
   * @example
   * warn
   */
  escalationsLevel?: string;
  /**
   * @remarks
   * Not required.
   * 
   * @example
   * 00:00-05:30(Deprecated: true)
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The mute period. Valid values of N: 1 to 200.
   * 
   * Unit: seconds. Minimum value: 3600 seconds (1 hour). Default value: 86400 seconds (1 day).
   * >If the monitoring data continuously exceeds the alert rule threshold, only one alert notification is sent within each mute period.
   * 
   * @example
   * 86400
   */
  silenceTime?: string;
  /**
   * @remarks
   * The statistical method for alerts. Valid values of N: 1 to 200.
   * 
   * >Currently, only Average is supported.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * None.
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
   * The number of consecutive occurrences of the alert level. Valid values of N: 1 to 200. Default value: 3.
   * 
   * >An alert is triggered only when the alert level consecutively occurs the specified number of times and the alert threshold is reached.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  times?: string;
  /**
   * @remarks
   * The callback URL to which a POST request is sent when an alert is triggered. Valid values of N: 1 to 200.
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
   * The application group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6780****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the process monitoring task in the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 92E3065F-0980-4E31-9AA0-BA6****
   */
  id?: string;
  /**
   * @remarks
   * Not required.
   * 
   * @example
   * and(Deprecated: true)
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

