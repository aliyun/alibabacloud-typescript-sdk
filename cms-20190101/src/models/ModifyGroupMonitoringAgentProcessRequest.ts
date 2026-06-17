// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGroupMonitoringAgentProcessRequestAlertConfigTargetList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource.
   * 
   * For more information, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
   * 
   * The ARN of a resource is in the following format: `acs:{product-abbreviation}:{regionId}:{userId}:/{resource-type}/{resource-name}/message`. For example: `acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`. The parameters are described as follows:
   * 
   * - {product-abbreviation}: Currently, only Simple Message Queue (formerly MNS) is supported.
   * 
   * - {userId}: The ID of your Alibaba Cloud account.
   * 
   * - {regionId}: The region where the Simple Message Queue (formerly MNS) queue or subject is located.
   * 
   * - {resource-type}: The type of the resource that receives alerts. Valid values:
   * 
   *   - **queues**: a queue.
   * 
   *   - **topics**: a subject.
   * 
   * - {resource-name}: The name of the resource.
   * 
   *   - If the resource type is **queues**, the resource name is the queue name.
   * 
   *   - If the resource type is **topics**, the resource name is the subject name.
   * 
   * @example
   * acs:mns:cn-hangzhou:120886317861****:/queues/test/message
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the alert-triggered target.
   * 
   * For more information, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
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
   * - INFO: information
   * 
   * - WARN: warning
   * 
   * - CRITICAL: critical
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
   * The comparison operator for the threshold of the Critical alert level. The value of N can be 1 to 200. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to
   * 
   * - GreaterThanThreshold: greater than
   * 
   * - LessThanOrEqualToThreshold: less than or equal to
   * 
   * - LessThanThreshold: less than
   * 
   * - NotEqualToThreshold: not equal to
   * 
   * - GreaterThanYesterday: greater than the value at the same time yesterday
   * 
   * - LessThanYesterday: less than the value at the same time yesterday
   * 
   * - GreaterThanLastWeek: greater than the value at the same time last week
   * 
   * - LessThanLastWeek: less than the value at the same time last week
   * 
   * - GreaterThanLastPeriod: greater than the value in the last monitoring cycle
   * 
   * - LessThanLastPeriod: less than the value in the last monitoring cycle
   * 
   * This parameter is required.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The time period when the alert rule is effective. The value of N can be 1 to 200.
   * 
   * @example
   * 00:00-22:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The alert level. The value of N can be 1 to 200. Valid values:
   * 
   * - critical (default): critical
   * 
   * - warn: warning
   * 
   * - info: information
   * 
   * This parameter is required.
   * 
   * @example
   * warn
   */
  escalationsLevel?: string;
  /**
   * @remarks
   * This parameter is deprecated. You can ignore it.
   * 
   * @example
   * 00:00-05:30
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The mute period. The value of N can be 1 to 200.
   * 
   * Unit: seconds. Minimum value: 3600. Default value: 86400.
   * 
   * > If monitoring data continuously exceeds the alert threshold, an alert notification is sent only once during each mute period.
   * 
   * @example
   * 86400
   */
  silenceTime?: string;
  /**
   * @remarks
   * The statistical method for alerts. The value of N can be 1 to 200.
   * 
   * > Only Average is supported.
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
   * The alert threshold. The value of N can be 1 to 200.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  threshold?: string;
  /**
   * @remarks
   * The number of consecutive times that the alert level is reached. The value of N can be 1 to 200. Default value: 3.
   * 
   * > An alert is triggered only when the alert level is reached the specified number of consecutive times and the threshold is met.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  times?: string;
  /**
   * @remarks
   * The callback URL. A POST request is sent to this URL when an alert is triggered. The value of N can be 1 to 200.
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
   * The configurations of the alert rule.
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
   * The ID of the process monitoring job for the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 92E3065F-0980-4E31-9AA0-BA6****
   */
  id?: string;
  /**
   * @remarks
   * This parameter is deprecated. You can ignore it.
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

