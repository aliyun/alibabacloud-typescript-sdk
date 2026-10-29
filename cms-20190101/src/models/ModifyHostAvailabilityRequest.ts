// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostAvailabilityRequestAlertConfig extends $dara.Model {
  /**
   * @remarks
   * The end time when the alert takes effect.
   * 
   * Unit: hours (h). Valid values: 0 to 23. For example, a value of 22 indicates 22:00:00.
   * 
   * > If the alert is not within the effective period, alert notifications are not sent even if the threshold is exceeded.
   * 
   * @example
   * 22
   */
  endTime?: number;
  /**
   * @remarks
   * The alert notification type. Valid values:
   * 
   * <props="china">- 2: phone call + text message + email + DingTalk chatbot.
   * 
   * <props="china">- 1: text message + email + DingTalk chatbot.
   * 
   * <props="china">- 0: email + DingTalk chatbot.
   * 
   * 
   * <props="intl">0: email + DingTalk chatbot.
   * 
   * <props="partner">0: email + DingTalk chatbot.
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
   * The start time when the alert takes effect.
   * 
   * Unit: hours (h). Valid values: 0 to 23. For example, a value of 0 indicates 00:00:00.
   * 
   * > If the alert is not within the effective period, alert notifications are not sent even if the threshold is exceeded.
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

export class ModifyHostAvailabilityRequestTaskOption extends $dara.Model {
  /**
   * @remarks
   * The header of the HTTP request. Format: `Parameter:Value`. Separate multiple parameters with carriage returns. Example:
   * ```
   * params1:value1
   * params2:value2
   * ```
   * 
   * @example
   * params1:value1
   */
  httpHeader?: string;
  /**
   * @remarks
   * The method of the detection type. Valid values:
   * 
   * - GET
   * - POST
   * - HEAD
   * 
   * > If the detection task type is HTTP, you must set this parameter. For information about how to set the detection task type, see [CreateHostAvailability](https://help.aliyun.com/document_detail/115317.html).
   * 
   * @example
   * GET
   */
  httpMethod?: string;
  /**
   * @remarks
   * The alert rule for matching HTTP response content. Valid values:
   * - true: An alert is triggered if the HTTP response content contains the specified alert rule.
   * - false: An alert is triggered if the HTTP response content does not contain the specified alert rule.
   * 
   * > If the detection task type is HTTP, you must set this parameter. For information about how to set the detection task type, see [CreateHostAvailability](https://help.aliyun.com/document_detail/115317.html).
   * 
   * @example
   * true
   */
  httpNegative?: boolean;
  /**
   * @remarks
   * The POST content of the HTTP detection request.
   * 
   * @example
   * params1=value1
   */
  httpPostContent?: string;
  /**
   * @remarks
   * The response character set for the HTTP detection type.
   * 
   * > Only UTF-8 is supported.
   * 
   * @example
   * UTF-8
   */
  httpResponseCharset?: string;
  /**
   * @remarks
   * The POST content of the HTTP detection response.
   * 
   * @example
   * ok
   */
  httpResponseMatchContent?: string;
  /**
   * @remarks
   * The URI for HTTP or Telnet detection types.
   * 
   * @example
   * https://www.aliyun.com
   * telnet://127.0.0.1:80
   */
  httpURI?: string;
  /**
   * @remarks
   * The detection frequency. Unit: seconds. Valid values: 15, 30, 60, 120, 300, 900, 1800, and 3600.
   * 
   * > Only CloudMonitor agent 3.5.1 or later supports this parameter.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The domain name or address to detect.
   * 
   * > If the detection task type is PING, you must set this parameter. For information about how to set the detection task type, see [CreateHostAvailability](https://help.aliyun.com/document_detail/115317.html).
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

export class ModifyHostAvailabilityRequestAlertConfigEscalationList extends $dara.Model {
  /**
   * @remarks
   * The statistical method for the alert. Valid values of N: 1 to 21. The statistical method varies by metric:
   * 
   * - HttpStatus: Value.
   * - HttpLatency: Average.
   * - TelnetStatus: Value.
   * - TelnetLatency: Average.
   * - PingLostRate: Average.
   * 
   * > The statistical method for status codes is the original value (Value). The statistical method for latency or packet loss rate is the average value (Average).
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
   * - HttpLatency: HTTP latency.
   * - TelnetStatus: TELNET status code.
   * - TelnetLatency: TELNET latency.
   * - PingLostRate: PING packet loss rate.
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
   * 3
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

export class ModifyHostAvailabilityRequestAlertConfigTargetList extends $dara.Model {
  /**
   * @remarks
   * The resource ARN.
   * 
   * Format: `acs:{AbbreviatedCloudServiceName}:{regionId}:{userId}:/{ResourceType}/{ResourceName}/message`. Example: `acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`. The parameters are described as follows:
   * 
   * - {AbbreviatedCloudServiceName}: Only Simple Message Queue (formerly MNS) is supported.
   * 
   * - {userId}: The Alibaba Cloud account ID.
   * 
   * - {regionId}: The region where Simple Message Queue (formerly MNS) or the topic resides.
   * 
   * - {ResourceType}: The type of the resource that accepts alerts. Valid values:
   * 
   *   - **queues**: queue.
   *   - **topics**: topic.
   * 
   * - {ResourceName}: The resource name.
   * 
   *   - If the resource type is **queues**, the resource name is the queue name.
   *   - If the resource type is **topics**, the resource name is the topic name.
   * 
   * @example
   * acs:mns:cn-hangzhou:111:/queues/test/message
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the alert trigger target.
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

export class ModifyHostAvailabilityRequest extends $dara.Model {
  alertConfig?: ModifyHostAvailabilityRequestAlertConfig;
  taskOption?: ModifyHostAvailabilityRequestTaskOption;
  /**
   * @remarks
   * The alert configuration list.
   * 
   * This parameter is required.
   */
  alertConfigEscalationList?: ModifyHostAvailabilityRequestAlertConfigEscalationList[];
  /**
   * @remarks
   * The alert trigger targets.
   */
  alertConfigTargetList?: ModifyHostAvailabilityRequestAlertConfigTargetList[];
  /**
   * @remarks
   * The application group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  /**
   * @remarks
   * The availability monitoring task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * The list of ECS instances that initiate detection. Valid values of N: 1 to 21.
   * 
   * > If `TaskScope` is set to `GROUP_SPEC_INSTANCE`, you must set this parameter.
   * 
   * @example
   * i-absdfkwl321****
   */
  instanceList?: string[];
  regionId?: string;
  /**
   * @remarks
   * The name of the availability monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * task2
   */
  taskName?: string;
  /**
   * @remarks
   * The detection scope of the availability monitoring task. Valid values:
   * 
   * - GROUP: uses all ECS instances in the current application group as detection probes.
   * - GROUP_SPEC_INSTANCE: uses specified ECS instances in the current application group as detection probes. If you set this parameter to GROUP_SPEC_INSTANCE, you must also set InstanceList to specify the ECS instances that initiate detection.
   * 
   * @example
   * GROUP
   */
  taskScope?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      taskOption: 'TaskOption',
      alertConfigEscalationList: 'AlertConfigEscalationList',
      alertConfigTargetList: 'AlertConfigTargetList',
      groupId: 'GroupId',
      id: 'Id',
      instanceList: 'InstanceList',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskScope: 'TaskScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: ModifyHostAvailabilityRequestAlertConfig,
      taskOption: ModifyHostAvailabilityRequestTaskOption,
      alertConfigEscalationList: { 'type': 'array', 'itemType': ModifyHostAvailabilityRequestAlertConfigEscalationList },
      alertConfigTargetList: { 'type': 'array', 'itemType': ModifyHostAvailabilityRequestAlertConfigTargetList },
      groupId: 'number',
      id: 'number',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      taskName: 'string',
      taskScope: 'string',
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

