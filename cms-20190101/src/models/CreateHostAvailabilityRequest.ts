// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHostAvailabilityRequestAlertConfig extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which the alert rule is effective. Valid values: 0 to 23.
   * 
   * For example, if the `AlertConfig.StartTime` parameter is set to 0 and the `AlertConfig.EndTime` parameter is set to 22, the alert rule is effective from 00:00:00 to 22:00:00.
   * 
   * > Alert notifications are sent based on the specified threshold only if the alert rule is effective.
   * 
   * @example
   * 22
   */
  endTime?: number;
  /**
   * @remarks
   * The alert notification methods. Valid values:
   * 
   * 0: Alert notifications are sent by using emails and DingTalk chatbots.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  notifyType?: number;
  /**
   * @remarks
   * The mute period during which new alerts are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400. The default value indicates one day.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The beginning of the time range during which the alert rule is effective. Valid values: 0 to 23.
   * 
   * For example, if the `AlertConfig.StartTime` parameter is set to 0 and the `AlertConfig.EndTime` parameter is set to 22, the alert rule is effective from 00:00:00 to 22:00:00.
   * 
   * > Alert notifications are sent based on the specified threshold only if the alert rule is effective.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * https://www.aliyun.com/webhook.json
   */
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      notifyType: 'NotifyType',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      notifyType: 'number',
      silenceTime: 'number',
      startTime: 'number',
      webHook: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequestTaskOption extends $dara.Model {
  /**
   * @remarks
   * The header of the HTTP request. Format: `Parameter name:Parameter value`. Separate multiple parameters with carriage return characters. Example:
   * 
   *     params1:value1
   *     params2:value2
   * 
   * @example
   * token:testTokenValue
   */
  httpHeader?: string;
  /**
   * @remarks
   * The HTTP request method. Valid values:
   * 
   * *   GET
   * *   POST
   * *   HEAD
   * 
   * > This parameter must be specified when TaskType is set to HTTP.
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
   * > This parameter must be specified when TaskType is set to HTTP.
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
   * > Only UTF-8 is supported.
   * 
   * @example
   * UTF-8
   */
  httpResponseCharset?: string;
  /**
   * @remarks
   * The response to the HTTP request.
   * 
   * @example
   * ok
   */
  httpResponseMatchContent?: string;
  /**
   * @remarks
   * The URI that you want to monitor. This parameter is required if the TaskType parameter is set to HTTP or Telnet.
   * 
   * @example
   * https://www.aliyun.com
   */
  httpURI?: string;
  /**
   * @remarks
   * The interval at which detection requests are sent. Unit: seconds. Valid values: 15, 30, 60, 120, 300, 900, 1800, and 3600.
   * 
   * > This parameter is available only for the CloudMonitor agent V3.5.1 or later.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The domain name or IP address that you want to monitor.
   * 
   * >  This parameter is required if the TaskType parameter is set to PING.
   * 
   * @example
   * www.aliyun.com
   */
  telnetOrPingHost?: string;
  static names(): { [key: string]: string } {
    return {
      httpHeader: 'HttpHeader',
      httpMethod: 'HttpMethod',
      httpNegative: 'HttpNegative',
      httpPostContent: 'HttpPostContent',
      httpResponseCharset: 'HttpResponseCharset',
      httpResponseMatchContent: 'HttpResponseMatchContent',
      httpURI: 'HttpURI',
      interval: 'Interval',
      telnetOrPingHost: 'TelnetOrPingHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpHeader: 'string',
      httpMethod: 'string',
      httpNegative: 'boolean',
      httpPostContent: 'string',
      httpResponseCharset: 'string',
      httpResponseMatchContent: 'string',
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

export class CreateHostAvailabilityRequestAlertConfigEscalationList extends $dara.Model {
  /**
   * @remarks
   * The method used to calculate the metric values that trigger alerts. Valid values of N: 1 to 21. Valid values:
   * 
   * *   HttpStatus: Value
   * *   HttpLatency: Average
   * *   TelnetStatus: Value
   * *   TelnetLatency: Average
   * *   PingLostRate: Average
   * 
   * > The value Value indicates the original value and is used for metrics such as status codes. The value Average indicates the average value and is used for metrics such as the latency and packet loss rate.
   * 
   * @example
   * Value
   */
  aggregate?: string;
  /**
   * @remarks
   * The metric for which the alert feature is enabled. Valid values of N: 1 to 21. Valid values:
   * 
   * *   HttpStatus: HTTP status code
   * *   HttpLatency: HTTP response time
   * *   TelnetStatus: Telnet status code
   * *   TelnetLatency: Telnet response time
   * *   PingLostRate: Ping packet loss rate
   * 
   * This parameter is required.
   * 
   * @example
   * HttpStatus
   */
  metricName?: string;
  /**
   * @remarks
   * The comparison operator that is used in the alert rule. Valid values of N: 1 to 21. Valid values:
   * 
   * *   `>`
   * *   `>=`
   * *   `<`
   * *   `<=`
   * *   `=`
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before an alert is triggered. Valid values of N: 1 to 21.
   * 
   * @example
   * 3
   */
  times?: number;
  /**
   * @remarks
   * The alert threshold. Valid values of N: 1 to 21.
   * 
   * @example
   * 90
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
      times: 'number',
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

export class CreateHostAvailabilityRequestAlertConfigTargetList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource. Format: `acs:{Service name abbreviation}:{regionId}:{userId}:/{Resource type}/{Resource name}/message`. Example: `acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`. Fields:
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

export class CreateHostAvailabilityRequest extends $dara.Model {
  alertConfig?: CreateHostAvailabilityRequestAlertConfig;
  taskOption?: CreateHostAvailabilityRequestTaskOption;
  /**
   * @remarks
   * None
   * 
   * This parameter is required.
   */
  alertConfigEscalationList?: CreateHostAvailabilityRequestAlertConfigEscalationList[];
  /**
   * @remarks
   * The resources for which alerts are triggered.
   */
  alertConfigTargetList?: CreateHostAvailabilityRequestAlertConfigTargetList[];
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  /**
   * @remarks
   * The ECS instances that are monitored. Valid values of N: 1 to 21.
   * 
   * > This parameter must be specified when `TaskScope` is set to `GROUP_SPEC_INSTANCE`.
   * 
   * @example
   * i-absdfkwl321****
   */
  instanceList?: string[];
  regionId?: string;
  /**
   * @remarks
   * The name of the availability monitoring task. The name must be 4 to 100 characters in length, and can contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * task1
   */
  taskName?: string;
  /**
   * @remarks
   * The range of instances that are monitored by the availability monitoring task. Valid values:
   * 
   * *   GROUP: All ECS instances in the application group are monitored.
   * *   GROUP_SPEC_INSTANCE: Specified ECS instances in the application group are monitored. The TaskScope parameter must be used in combination with the InstanceList parameter. The InstanceList parameter specifies the ECS instances to be monitored.
   * 
   * @example
   * GROUP
   */
  taskScope?: string;
  /**
   * @remarks
   * The monitoring type of the availability monitoring task. Valid values:
   * 
   * *   PING
   * *   TELNET
   * *   HTTP
   * 
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      taskOption: 'TaskOption',
      alertConfigEscalationList: 'AlertConfigEscalationList',
      alertConfigTargetList: 'AlertConfigTargetList',
      groupId: 'GroupId',
      instanceList: 'InstanceList',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskScope: 'TaskScope',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: CreateHostAvailabilityRequestAlertConfig,
      taskOption: CreateHostAvailabilityRequestTaskOption,
      alertConfigEscalationList: { 'type': 'array', 'itemType': CreateHostAvailabilityRequestAlertConfigEscalationList },
      alertConfigTargetList: { 'type': 'array', 'itemType': CreateHostAvailabilityRequestAlertConfigTargetList },
      groupId: 'number',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      taskName: 'string',
      taskScope: 'string',
      taskType: 'string',
    };
  }

  validate() {
    if(this.alertConfig && typeof (this.alertConfig as any).validate === 'function') {
      (this.alertConfig as any).validate();
    }
    if(this.taskOption && typeof (this.taskOption as any).validate === 'function') {
      (this.taskOption as any).validate();
    }
    if(Array.isArray(this.alertConfigEscalationList)) {
      $dara.Model.validateArray(this.alertConfigEscalationList);
    }
    if(Array.isArray(this.alertConfigTargetList)) {
      $dara.Model.validateArray(this.alertConfigTargetList);
    }
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

