// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList extends $dara.Model {
  /**
   * @remarks
   * The method used to calculate metric values that trigger alerts. Valid values:
   * 
   * *   Value: the value of the HTTP status code
   * *   Average: the average HTTP response time
   * *   Value: the value of the Telnet status code
   * *   TelnetLatency: the average Telnet response time
   * *   Average: the average Ping packet loss rate
   * 
   * @example
   * Value
   */
  aggregate?: string;
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * *   HttpStatus
   * *   HttpLatency
   * *   TelnetStatus
   * *   TelnetLatency
   * *   PingLostRate
   * 
   * @example
   * HttpStatus
   */
  metricName?: string;
  /**
   * @remarks
   * The comparison operator that is used in the alert rule. Valid values:
   * 
   * *   `>`
   * *   `>=`
   * *   `<`
   * *   `<=`
   * *   `=`
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value is measured before an alert is triggered.
   * 
   * @example
   * 3
   */
  times?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * @example
   * 400
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'Aggregate',
      metricName: 'MetricName',
      operator: 'Operator',
      times: 'Times',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      metricName: 'string',
      operator: 'string',
      times: 'string',
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

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList extends $dara.Model {
  escalationList?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList[];
  static names(): { [key: string]: string } {
    return {
      escalationList: 'escalationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationList: { 'type': 'array', 'itemType': DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList },
    };
  }

  validate() {
    if(Array.isArray(this.escalationList)) {
      $dara.Model.validateArray(this.escalationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetListTarget extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the function.
   * 
   * Format: `arn:acs:${Service}:${Region}:${Account}:${ResourceType}/${ResourceId}`. Fields:
   * 
   * *   Service: the service code
   * *   Region: the region ID
   * *   Account: the ID of the Alibaba Cloud account
   * *   ResourceType: the resource type
   * *   ResourceId: the resource ID.
   * 
   * @example
   * acs:mns:cn-hangzhou:17754132319*****:/queues/test/messages
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the resource that triggers the alert.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The JSON-formatted parameters of the alert callback.
   * 
   * @example
   * {"key1":"value1"}
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
   * INFO
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

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetList extends $dara.Model {
  target?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetListTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetListTarget },
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

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig extends $dara.Model {
  /**
   * @remarks
   * The end of the time period during which the alert rule is effective. Valid values: 0 to 23.
   * 
   * For example, if the `AlertConfig.StartTime` parameter is set to 0 and the `AlertConfig.EndTime` parameter is set to 22, the alert rule is effective from 00:00:00 to 22:00:00.
   * 
   * >  Alert notifications are sent based on the specified threshold only if the alert rule is effective.
   * 
   * @example
   * 22
   */
  endTime?: number;
  /**
   * @remarks
   * The trigger conditions of the alert rule.
   */
  escalationList?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList;
  /**
   * @remarks
   * The alert notification methods. Valid values:
   * 
   * *   2: Alert notifications are sent by using emails and DingTalk chatbots.
   * *   1: Alert notifications are sent by using emails and DingTalk chatbots.
   * *   0: Alert notifications are sent by using emails and DingTalk chatbots.
   * 
   * @example
   * 0
   */
  notifyType?: number;
  /**
   * @remarks
   * The mute period during which new alerts are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The beginning of the time period during which the alert rule is effective. Valid values: 0 to 23.
   * 
   * For example, if the `AlertConfig.StartTime` parameter is set to 0 and the `AlertConfig.EndTime` parameter is set to 22, the alert rule is effective from 00:00:00 to 22:00:00.
   * 
   * >  Alert notifications are sent based on the specified threshold only if the alert rule is effective.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The monitored resources.
   */
  targetList?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetList;
  /**
   * @remarks
   * The callback URL.
   * 
   * CloudMonitor pushes an alert notification to the specified callback URL by sending an HTTP POST request. Only the HTTP protocol is supported.
   * 
   * @example
   * https://www.aliyun.com
   */
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      escalationList: 'EscalationList',
      notifyType: 'NotifyType',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      targetList: 'TargetList',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      escalationList: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList,
      notifyType: 'number',
      silenceTime: 'number',
      startTime: 'number',
      targetList: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetList,
      webHook: 'string',
    };
  }

  validate() {
    if(this.escalationList && typeof (this.escalationList as any).validate === 'function') {
      (this.escalationList as any).validate();
    }
    if(this.targetList && typeof (this.targetList as any).validate === 'function') {
      (this.targetList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances extends $dara.Model {
  instance?: string[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption extends $dara.Model {
  /**
   * @remarks
   * The response to the HTTP request.
   * 
   * @example
   * OK
   */
  httpKeyword?: string;
  /**
   * @remarks
   * The HTTP request method. Valid values:
   * 
   * *   GET
   * *   POST
   * *   HEAD
   * 
   * @example
   * GET
   */
  httpMethod?: string;
  /**
   * @remarks
   * The method to trigger an alert. The alert can be triggered based on whether the specified alert rule is included in the response body. Valid values:
   * 
   * *   true: If the HTTP response body includes the alert rule, an alert is triggered.
   * *   false: If the HTTP response does not include the alert rule, an alert is triggered.
   * 
   * @example
   * true
   */
  httpNegative?: boolean;
  /**
   * @remarks
   * The content of the HTTP POST request.
   * 
   * @example
   * params1=paramsValue1
   */
  httpPostContent?: string;
  /**
   * @remarks
   * The character set that is used in the HTTP response.
   * 
   * @example
   * UTF-8
   */
  httpResponseCharset?: string;
  /**
   * @remarks
   * The URI that you want to monitor. If the TaskType parameter is set to HTTP, this parameter is required.
   * 
   * @example
   * https://www.aliyun.com
   */
  httpURI?: string;
  /**
   * @remarks
   * The interval at which detection requests are sent. Unit: seconds.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The domain name or IP address that you want to monitor.
   * 
   * @example
   * ssh.aliyun.com
   */
  telnetOrPingHost?: string;
  static names(): { [key: string]: string } {
    return {
      httpKeyword: 'HttpKeyword',
      httpMethod: 'HttpMethod',
      httpNegative: 'HttpNegative',
      httpPostContent: 'HttpPostContent',
      httpResponseCharset: 'HttpResponseCharset',
      httpURI: 'HttpURI',
      interval: 'Interval',
      telnetOrPingHost: 'TelnetOrPingHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpKeyword: 'string',
      httpMethod: 'string',
      httpNegative: 'boolean',
      httpPostContent: 'string',
      httpResponseCharset: 'string',
      httpURI: 'string',
      interval: 'number',
      telnetOrPingHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig extends $dara.Model {
  /**
   * @remarks
   * The configurations of the alert rule.
   */
  alertConfig?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig;
  /**
   * @remarks
   * Indicates whether the availability monitoring task is disabled. Valid values:
   * 
   * *   true: The availability monitoring task is disabled.
   * *   false: The availability monitoring task is enabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 12345
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * Group_ECS
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the availability monitoring task.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * The ECS instances that are monitored.
   */
  instances?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances;
  /**
   * @remarks
   * The name of the availability monitoring task.
   * 
   * @example
   * ecs_instance
   */
  taskName?: string;
  /**
   * @remarks
   * The optional parameters of the availability monitoring task.
   */
  taskOption?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption;
  /**
   * @remarks
   * The range of instances that are monitored by the availability monitoring task. Valid values:
   * 
   * *   GROUP: All ECS instances in the application group are monitored.
   * *   GROUP_SPEC_INSTANCE: Specified ECS instances in the application group are monitored.
   * 
   * @example
   * GROUP
   */
  taskScope?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   PING
   * *   TELNET
   * *   HTTP
   * 
   * @example
   * HTTP
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      disabled: 'Disabled',
      groupId: 'GroupId',
      groupName: 'GroupName',
      id: 'Id',
      instances: 'Instances',
      taskName: 'TaskName',
      taskOption: 'TaskOption',
      taskScope: 'TaskScope',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig,
      disabled: 'boolean',
      groupId: 'number',
      groupName: 'string',
      id: 'number',
      instances: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances,
      taskName: 'string',
      taskOption: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption,
      taskScope: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(this.alertConfig && typeof (this.alertConfig as any).validate === 'function') {
      (this.alertConfig as any).validate();
    }
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    if(this.taskOption && typeof (this.taskOption as any).validate === 'function') {
      (this.taskOption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskList extends $dara.Model {
  nodeTaskConfig?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig[];
  static names(): { [key: string]: string } {
    return {
      nodeTaskConfig: 'NodeTaskConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTaskConfig: { 'type': 'array', 'itemType': DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig },
    };
  }

  validate() {
    if(Array.isArray(this.nodeTaskConfig)) {
      $dara.Model.validateArray(this.nodeTaskConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBody extends $dara.Model {
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
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A288E86-45C3-4858-9DB0-6D85B10BD92A
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
  /**
   * @remarks
   * The details of the availability monitoring tasks.
   */
  taskList?: DescribeHostAvailabilityListResponseBodyTaskList;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskList: 'TaskList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskList: DescribeHostAvailabilityListResponseBodyTaskList,
      total: 'number',
    };
  }

  validate() {
    if(this.taskList && typeof (this.taskList as any).validate === 'function') {
      (this.taskList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

