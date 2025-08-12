// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetListTarget extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource. Format: acs:{Service name abbreviation}:{regionId}:{userId}:/{Resource type}/{Resource name}/message. Example: acs:mns:cn-hangzhou:120886317861\\*\\*\\*\\*:/queues/test123/message. Fields:
   * 
   * *   {Service name abbreviation}: the abbreviation of the service name. Set the value to Simple Message Queue (formerly MNS) (SMQ).
   * 
   * *   {userId}: the ID of the Alibaba Cloud account.
   * 
   * *   {regionId}: the region ID of the SMQ queue or topic.
   * 
   * *   {Resource type}: the type of the resource for which alerts are triggered. Valid values:
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
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The parameters of the alert callback. The parameters are in the JSON format.
   * 
   * @example
   * {"customField1":"value1","customField2":"$.name"}
   */
  jsonParmas?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * *   INFO
   * *   WARN
   * *   CRITICAL
   * 
   * @example
   * CRITICAL
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParmas: 'JsonParmas',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParmas: 'string',
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

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetList extends $dara.Model {
  target?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetListTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetListTarget },
    };
  }

  validate() {
    if(Array.isArray(this.target)) {
      $dara.Model.validateArray(this.target);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig extends $dara.Model {
  /**
   * @remarks
   * The comparison operator that is used to compare the metric value with the threshold. Valid values:
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * *   GreaterThanThreshold: greater than the threshold
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * *   LessThanThreshold: less than the threshold
   * *   NotEqualToThreshold: not equal to the threshold
   * *   GreaterThanYesterday: greater than the metric value at the same time yesterday.
   * *   LessThanYesterday: less than the metric value at the same time yesterday
   * *   GreaterThanLastWeek: greater than the metric value at the same time last week
   * *   LessThanLastWeek: less than the metric value at the same time last week
   * *   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
   * *   LessThanLastPeriod: less than the metric value in the last monitoring cycle
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
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
   * The level of the alert. Valid values:
   * 
   * *   critical
   * *   warn
   * *   Info
   * 
   * @example
   * warn
   */
  escalationsLevel?: string;
  /**
   * @remarks
   * The time period during which the alert rule is ineffective.
   * 
   * @example
   * 00:00-23:59
   */
  noEffectiveInterval?: string;
  /**
   * @remarks
   * The mute period during which new alert notifications are not sent even if the trigger conditions are met. Unit: seconds. Minimum value: 3600, which is equivalent to one hour. Default value: 86400, which is equivalent to one day.
   * 
   * >  Only one alert notification is sent during each mute period even if the metric value exceeds the alert threshold several times.
   * 
   * @example
   * 86400
   */
  silenceTime?: string;
  /**
   * @remarks
   * The method used to calculate metric values that trigger alerts.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The resources for which alerts are triggered.
   */
  targetList?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetList;
  /**
   * @remarks
   * The alert threshold.
   * 
   * @example
   * 5
   */
  threshold?: string;
  /**
   * @remarks
   * The number of times for which the threshold can be consecutively exceeded.
   * 
   * >  A metric triggers an alert only after the metric value reaches the threshold consecutively for the specified times.
   * 
   * @example
   * 3
   */
  times?: string;
  /**
   * @remarks
   * The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
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
      targetList: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetList,
      threshold: 'string',
      times: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.targetList && typeof (this.targetList as any).validate === 'function') {
      (this.targetList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig extends $dara.Model {
  alertConfig?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig },
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

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress extends $dara.Model {
  /**
   * @remarks
   * The matching condition. Valid values:
   * 
   * *   all (default): matches all
   * *   startWith: starts with a prefix
   * *   endWith: ends with a suffix
   * *   contains: contains
   * *   notContains: excludes
   * *   equals: equals
   * 
   * >  The matched instances are monitored by the process monitoring task.
   * 
   * @example
   * all
   */
  function?: string;
  /**
   * @remarks
   * The criteria based on which the instances are matched.
   * 
   * >  Set the value to `name`. The value name indicates that the instances are matched based on the instance name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The keyword used to match the instance name.
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

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress extends $dara.Model {
  matchExpress?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress[];
  static names(): { [key: string]: string } {
    return {
      matchExpress: 'MatchExpress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchExpress: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress },
    };
  }

  validate() {
    if(Array.isArray(this.matchExpress)) {
      $dara.Model.validateArray(this.matchExpress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess extends $dara.Model {
  /**
   * @remarks
   * The alert rule configurations.
   */
  alertConfig?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 12345
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the process monitoring task.
   * 
   * @example
   * 3F6150F9-45C7-43F9-9578-A58B2E72****
   */
  id?: string;
  /**
   * @remarks
   * The matching conditions.
   * 
   * >  Only the instances that meet the conditional expressions are monitored by the process monitoring task.
   */
  matchExpress?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress;
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
   * @example
   * sshd
   */
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      groupId: 'GroupId',
      id: 'Id',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      processName: 'ProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig,
      groupId: 'string',
      id: 'string',
      matchExpress: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress,
      matchExpressFilterRelation: 'string',
      processName: 'string',
    };
  }

  validate() {
    if(this.alertConfig && typeof (this.alertConfig as any).validate === 'function') {
      (this.alertConfig as any).validate();
    }
    if(this.matchExpress && typeof (this.matchExpress as any).validate === 'function') {
      (this.matchExpress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcesses extends $dara.Model {
  process?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess[];
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess },
    };
  }

  validate() {
    if(Array.isArray(this.process)) {
      $dara.Model.validateArray(this.process);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status codes.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The page number. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The process monitoring tasks.
   */
  processes?: DescribeGroupMonitoringAgentProcessResponseBodyProcesses;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7985D471-3FA8-4EE9-8F4B-45C19DF3D36F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 28
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processes: 'Processes',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      processes: DescribeGroupMonitoringAgentProcessResponseBodyProcesses,
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.processes && typeof (this.processes as any).validate === 'function') {
      (this.processes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

