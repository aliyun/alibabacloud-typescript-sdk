// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupMonitoringAgentProcessRequestAlertConfigTargetList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource.
   * 
   * For more information about how to query the ARN of a resource, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
   * 
   * Format: `acs:{Service name abbreviation}:{regionId}:{userId}:/{Resource type}/{Resource name}/message`. Example: `acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`. Fields:
   * 
   * *   {Service name abbreviation}: the abbreviation of the service name. Set the value to Simple Message Queue (formerly MNS) (SMQ).
   * 
   * *   {userId}: the ID of the Alibaba Cloud account.
   * 
   * *   {regionId}: the region ID of the SMQ queue or topic.
   * 
   * *   {Resource type}: the type of the resource that triggers the alert. Valid values:
   * 
   *     *   **queues**
   *     *   **topics**
   * 
   * *   {Resource name}: the resource name.
   * 
   *     *   If the resource type is **queues**, the resource name is the queue name.
   *     *   If the resource type is **topics**, the resource name is the topic name.
   * 
   * @example
   * acs:mns:cn-hangzhou:120886317861****:/queues/test/message
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the resource for which alerts are triggered.
   * 
   * For more information about how to obtain the ID of a resource for which alerts are triggered, see [DescribeMetricRuleTargets](https://help.aliyun.com/document_detail/121592.html).
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
   * The alert level. Valid values:
   * 
   * *   INFO
   * *   WARN
   * *   CRITICAL
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
   * The operator that is used to compare the metric value with the threshold. Valid values:
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
   * *   LessThanLastPeriod: less than the metric value in the previous monitoring cycle
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
   * The period of time during which the alert rule is effective.
   * 
   * Valid values of N: 1 to 3.
   * 
   * @example
   * 00:00-23:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * *   critical (default)
   * *   warn
   * *   info
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
   * This parameter is deprecated.
   * 
   * @example
   * 00:00-23:59
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The mute period during which new alert notifications are not sent even if the trigger conditions are met. Unit: seconds. Minimum value: 3600, which is equivalent to one hour. Default value: 86400, which is equivalent to one day.
   * 
   * Valid values of N: 1 to 3.
   * 
   * >  Only one alert notification is sent during a mute period even if the metric value exceeds the alert threshold during consecutive checks.
   * 
   * @example
   * 86400
   */
  silenceTime?: string;
  /**
   * @remarks
   * The statistical aggregation method that is used to calculate the metric values.
   * 
   * Valid values of N: 1 to 3.
   * 
   * >  Set the value to Average.
   * 
   * This parameter is required.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The alert triggers.
   */
  targetList?: CreateGroupMonitoringAgentProcessRequestAlertConfigTargetList[];
  /**
   * @remarks
   * The alert threshold.
   * 
   * Valid values of N: 1 to 3.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  threshold?: string;
  /**
   * @remarks
   * The number of times for which the threshold can be consecutively exceeded. Default value: 3.
   * 
   * Valid values of N: 1 to 3.
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
   * The callback URL.
   * 
   * Valid values of N: 1 to 3.
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
   * The matching condition. Valid values:
   * 
   * *   all (default value): matches all
   * *   startWith: starts with a prefix
   * *   endWith: ends with a suffix
   * *   contains: contains
   * *   notContains: does not contain
   * *   equals: equals
   * 
   * Valid values of N: 1 to 3.
   * 
   * @example
   * startWith
   */
  function?: string;
  /**
   * @remarks
   * The criteria based on which the instances are matched.
   * 
   * Valid values of N: 1 to 3.
   * 
   * > Set the value to name. The value name indicates that the instances are matched based on the instance name.
   * 
   * @example
   * name1
   */
  name?: string;
  /**
   * @remarks
   * The keyword used to match the instance name.
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
   * The alert rule configurations.
   * 
   * Valid values of N: 1 to 3.
   * 
   * This parameter is required.
   */
  alertConfig?: CreateGroupMonitoringAgentProcessRequestAlertConfig[];
  /**
   * @remarks
   * The ID of the application group.
   * 
   * For more information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  groupId?: string;
  /**
   * @remarks
   * The expressions used to match instances.
   * 
   * Valid values of N: 1 to 3.
   */
  matchExpress?: CreateGroupMonitoringAgentProcessRequestMatchExpress[];
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
  /**
   * @remarks
   * The process name.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
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

