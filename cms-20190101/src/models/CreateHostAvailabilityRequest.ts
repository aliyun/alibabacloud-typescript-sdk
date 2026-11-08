// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHostAvailabilityRequestAlertConfig extends $dara.Model {
  /**
   * @remarks
   * The end time of the effective period for alerting.
   * 
   * The value is an integer ranging from 0 to 23. Unit: hours. The value indicates the hour when the effective period ends. The actual end time is 00:00:00 of the specified hour. For example, if you set this parameter to 22, the effective period ends at 22:00:00. The time zone is UTC+8.
   * 
   * > Note: If the current time is not within the effective time window, the system does not send alert notifications even if the threshold is exceeded.
   * 
   * @example
   * 22
   */
  endTime?: number;
  /**
   * @remarks
   * The alert notification method. Valid values:
   * 
   * <props="china">- 2: phone call, text message, email, and DingTalk chatbot.
   * 
   * <props="china">- 1: text message, email, and DingTalk chatbot.
   * 
   * <props="china">- 0: email and DingTalk chatbot.
   * 
   * 
   * <props="intl">0: email and DingTalk chatbot.
   * 
   * <props="partner">0: email and DingTalk chatbot.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  notifyType?: number;
  /**
   * @remarks
   * The mute period. Unit: seconds. Default value: 86400 (1 day).
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The start time of the effective period for alerting.
   * 
   * The value is an integer ranging from 0 to 23. Unit: hours. The value indicates the hour when the effective period starts. The actual start time is 00:00:00 of the specified hour. For example, if you set this parameter to 0, the effective period starts at 00:00:00. The time zone is UTC+8.
   * 
   * > Note: If the current time is not within the effective time window, the system does not send alert notifications even if the threshold is exceeded.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The webhook address.
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
   * The headers of the HTTP request. The format is `Parameter name:Parameter value`. Separate multiple headers with carriage returns. Example:
   * ```
   * params1:value1
   * params2:value2
   * ```
   * 
   * @example
   * token:testTokenValue
   */
  httpHeader?: string;
  /**
   * @remarks
   * The HTTP method for the probe. Valid values:
   * 
   * - GET
   * - POST
   * - HEAD
   * 
   * > If the probe type is HTTP, you must set this parameter.
   * 
   * @example
   * GET
   */
  httpMethod?: string;
  /**
   * @remarks
   * The alert rule for matching the HTTP response content. Valid values:
   * - true: An alert is triggered if the HTTP response content contains the specified string.
   * - false: An alert is triggered if the HTTP response content does not contain the specified string.
   * 
   * > This parameter takes effect only when the probe type is HTTP.
   * 
   * @example
   * true
   */
  httpNegative?: boolean;
  /**
   * @remarks
   * The POST content of the HTTP probe request.
   * 
   * @example
   * params1=paramsValue1
   */
  httpPostContent?: string;
  /**
   * @remarks
   * The response character set for HTTP probes.
   * 
   * > Only UTF-8 is supported.
   * 
   * @example
   * UTF-8
   */
  httpResponseCharset?: string;
  /**
   * @remarks
   * The content to be matched in the response.
   * 
   * @example
   * ok
   */
  httpResponseMatchContent?: string;
  /**
   * @remarks
   * The URI for HTTP or Telnet probes.
   * 
   * @example
   * https://www.aliyun.com
   * telnet://127.0.0.1:80
   */
  httpURI?: string;
  /**
   * @remarks
   * The probe interval. Unit: seconds. Valid values: 15, 30, 60, 120, 300, 900, 1800, and 3600.
   * 
   * > This parameter is supported only by CloudMonitor agent V3.5.1 or later.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The domain name or IP address to be probed.
   * > If the probe type is PING, you must set this parameter.
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
   * The statistical method for the alert. Valid values of N: 1 to 21. Valid values vary based on the metric:
   * 
   * - HttpStatus: Value.
   * - HttpLatency: Average.
   * - TelnetStatus: Value.
   * - TelnetLatency: Average.
   * - PingLostRate: Average.
   * 
   * > The statistical method for status codes is the original value (Value), and the statistical method for response time or packet loss rate is the average value (Average).
   * 
   * @example
   * Value
   */
  aggregate?: string;
  /**
   * @remarks
   * The metric for the alert. Valid values of N: 1 to 21. Valid values:
   * 
   * - HttpStatus: HTTP status code.
   * - HttpLatency: HTTP response time.
   * - TelnetStatus: Telnet status code.
   * - TelnetLatency: Telnet response time.
   * - PingLostRate: Ping packet loss rate.
   * 
   * This parameter is required.
   * 
   * @example
   * HttpStatus
   */
  metricName?: string;
  /**
   * @remarks
   * The comparison operator for the alert rule. Valid values of N: 1 to 21. Valid values:
   * 
   * - `>`
   * - `>=`
   * - `<`
   * - `<=`
   * - `=`
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * The number of alert retries. Valid values of N: 1 to 21.
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
   * The Alibaba Cloud Resource Name (ARN) of the resource. Format: `acs:{service abbreviation}:{regionId}:{userId}:/{resource type}/{resource name}/message`. Example: `acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`. Parameter description:
   * 
   * - {service abbreviation}: The abbreviation of the cloud service. Only Simple Message Queue (formerly MNS) is supported.
   * 
   * - {userId}: The Alibaba Cloud account ID.
   * 
   * - {regionId}: The region where the Simple Message Queue (formerly MNS) queue or topic resides.
   * 
   * - {resource type}: The type of the resource that receives alerts. Valid values:
   * 
   *   - **queues**: queue.
   *   - **topics**: topic.
   * 
   * - {resource name}: The name of the resource.
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
   * The ID of the alert target.
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

export class CreateHostAvailabilityRequest extends $dara.Model {
  alertConfig?: CreateHostAvailabilityRequestAlertConfig;
  taskOption?: CreateHostAvailabilityRequestTaskOption;
  /**
   * @remarks
   * None.
   * 
   * This parameter is required.
   */
  alertConfigEscalationList?: CreateHostAvailabilityRequestAlertConfigEscalationList[];
  /**
   * @remarks
   * The alert targets.
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
   * The list of ECS instances that initiate the probes. Valid values of N: 1 to 21.
   * 
   * > You must set this parameter when `TaskScope` is set to `GROUP_SPEC_INSTANCE`.
   * 
   * @example
   * i-absdfkwl321****
   */
  instanceList?: string[];
  regionId?: string;
  /**
   * @remarks
   * The name of the availability monitoring task. The name must be 4 to 100 characters in length and can contain letters, digits, underscores (_), and Chinese characters.
   * 
   * This parameter is required.
   * 
   * @example
   * task1
   */
  taskName?: string;
  /**
   * @remarks
   * The probe scope of the availability monitoring task. Valid values:
   * 
   * - GROUP: All ECS instances in the current application group are used as probes for the task.
   * - GROUP_SPEC_INSTANCE: Specified ECS instances in the current application group are used as probes for the task. If you set this parameter to GROUP_SPEC_INSTANCE, you must also set the InstanceList parameter, which specifies the list of ECS instances that initiate the probes.
   * 
   * @example
   * GROUP
   */
  taskScope?: string;
  /**
   * @remarks
   * The probe type of the availability monitoring task. Valid values:
   * 
   * - PING
   * - TELNET
   * - HTTP
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

