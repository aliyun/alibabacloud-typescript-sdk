// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupMonitoringAgentProcessRequestAlertConfigTargetList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource.
   * 
   * For information about how to obtain the ARN of a resource, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
   * 
   * The ARN is in the following format: `acs:{service abbreviation}:{regionId}:{userId}:/{resource type}/{resource name}/message`. Example: `acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`. The parameters are described as follows:
   * 
   * - {service abbreviation}: the abbreviation of the cloud service. Only Simple Message Queue (formerly MNS) is supported.
   * 
   * - {userId}: the Alibaba Cloud account ID.
   * 
   * - {regionId}: the region where the Simple Message Queue (formerly MNS) queue or topic resides.
   * 
   * - {resource type}: the type of the resource that receives alert notifications. Valid values:
   *   
   *     - **queues**: queue.
   *     - **topics**: topic.
   * 
   * - {resource name}: the name of the resource.
   * 
   *     - If the resource type is **queues**, the resource name is the queue name.
   *     - If the resource type is **topics**, the resource name is the topic name.
   * 
   * @example
   * acs:mns:cn-hangzhou:120886317861****:/queues/test/message
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the alert target.
   * 
   * For information about how to obtain the ID of an alert target, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
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
   * - INFO: informational.
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

export class CreateGroupMonitoringAgentProcessRequestAlertConfig extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the threshold. Valid values:
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
   * - GreaterThanLastPeriod: greater than the value in the previous period.
   * - LessThanLastPeriod: less than the value in the previous period.
   * 
   * Valid values of N: 1 to 3.
   * 
   * This parameter is required.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The effective period of the alert rule.
   * 
   * Valid values of N: 1 to 3.
   * 
   * @example
   * 07:00-22:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * - critical: critical. This is the default value.
   * - warn: warning.
   * - info: informational.
   * 
   * Valid values of N: 1 to 3.
   * 
   * This parameter is required.
   * 
   * @example
   * warn
   */
  escalationsLevel?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and no longer requires attention.
   * 
   * @example
   * 00:00-05:30
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The mute period. Unit: seconds. Minimum value: 3600, which indicates 1 hour. Default value: 86400, which indicates 1 day.
   * 
   * Valid values of N: 1 to 3.
   * 
   * > If the monitoring data continuously exceeds the alert rule threshold, the system sends only one alert notification within each mute period.
   * 
   * @example
   * 86400
   */
  silenceTime?: string;
  /**
   * @remarks
   * The statistical method for alerts.
   * 
   * Valid values of N: 1 to 3.
   * 
   * > Only Average is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The list of alert targets.
   */
  targetList?: CreateGroupMonitoringAgentProcessRequestAlertConfigTargetList[];
  /**
   * @remarks
   * The alert threshold.
   * 
   * Valid values of N: 1 to 3.
   * 
   * Unit: count.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  threshold?: string;
  /**
   * @remarks
   * The number of consecutive times the alert level is triggered. Default value: 3.
   * 
   * Valid values of N: 1 to 3.
   * 
   * > An alert is triggered only when the alert level is reached for the specified number of consecutive times and the alert threshold is met.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  times?: string;
  /**
   * @remarks
   * The webhook URL for alert callbacks.
   * 
   * Valid values of N: 1 to 3.
   * 
   * @example
   * https://www.aliyun.com
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
      targetList: { 'type': 'array', 'itemType': CreateGroupMonitoringAgentProcessRequestAlertConfigTargetList },
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

export class CreateGroupMonitoringAgentProcessRequestMatchExpress extends $dara.Model {
  /**
   * @remarks
   * The match condition. Valid values:
   * 
   * - all: matches all. This is the default value.
   * - startWith: matches the prefix.
   * - endWith: matches the suffix.
   * - contains: contains the specified string.
   * - notContains: does not contain the specified string.
   * - equals: exactly matches.
   * 
   * Valid values of N: 1 to 3.
   * 
   * @example
   * startWith
   */
  function?: string;
  /**
   * @remarks
   * The type of the match condition.
   * 
   * Valid values of N: 1 to 3.
   * 
   * > Only Name, which indicates the instance name, is supported.
   * 
   * @example
   * name1
   */
  name?: string;
  /**
   * @remarks
   * The name of the matched instance.
   * 
   * Valid values of N: 1 to 3.
   * 
   * @example
   * portalHost
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
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

export class CreateGroupMonitoringAgentProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The list of alert rule configurations.
   * 
   * Valid values of N: 1 to 3.
   * 
   * This parameter is required.
   */
  alertConfig?: CreateGroupMonitoringAgentProcessRequestAlertConfig[];
  /**
   * @remarks
   * The application group ID.
   * 
   * For information about how to obtain the application group ID, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 3607****
   */
  groupId?: string;
  /**
   * @remarks
   * The list of match conditional expressions.
   * 
   * Valid values of N: 1 to 3.
   */
  matchExpress?: CreateGroupMonitoringAgentProcessRequestMatchExpress[];
  /**
   * @remarks
   * The logical relation for matching instances. Valid values:
   * 
   * - all: all.
   * - and: AND.
   * - or: OR.
   * 
   * @example
   * and
   */
  matchExpressFilterRelation?: string;
  /**
   * @remarks
   * The process name.
   * 
   * This parameter is required.
   * 
   * @example
   * Process_Java
   */
  processName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      groupId: 'GroupId',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      processName: 'ProcessName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': CreateGroupMonitoringAgentProcessRequestAlertConfig },
      groupId: 'string',
      matchExpress: { 'type': 'array', 'itemType': CreateGroupMonitoringAgentProcessRequestMatchExpress },
      matchExpressFilterRelation: 'string',
      processName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertConfig)) {
      $dara.Model.validateArray(this.alertConfig);
    }
    if(Array.isArray(this.matchExpress)) {
      $dara.Model.validateArray(this.matchExpress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

