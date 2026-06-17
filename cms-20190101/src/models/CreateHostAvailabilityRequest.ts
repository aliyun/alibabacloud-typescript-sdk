// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHostAvailabilityRequestAlertConfig extends $dara.Model {
  /**
   * @remarks
   * 报警生效的结束时间。取值范围：0~23。
   * 
   * 例如：`AlertConfig.StartTime`为0，`AlertConfig.EndTime`为22，表示报警生效时间为00:00:00至22:00:00。
   * 
   * >如果报警不在生效时间内，则超过阈值也不会发送报警通知。
   * 
   * @example
   * 22
   */
  endTime?: number;
  /**
   * @remarks
   * 报警通知类型。取值：
   * 
   * <props="china">- 2：电话+短信+邮件+钉钉机器人。
   * 
   * <props="china">- 1：短信+邮件+钉钉机器人。
   * 
   * <props="china">- 0：邮件+钉钉机器人。
   * 
   * 
   * <props="intl">0：邮件+钉钉机器人。
   * 
   * <props="partner">0：邮件+钉钉机器人。
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  notifyType?: number;
  /**
   * @remarks
   * 通道沉默时间。单位：秒，默认值：86400（1天）。
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * 报警生效的开始时间。取值范围：0~23。
   * 
   * 例如：`AlertConfig.StartTime`为0，`AlertConfig.EndTime`为22，表示报警生效时间为00:00:00至22:00:00。
   * 
   * >如果报警不在生效时间内，则超过阈值也不会发送报警通知。
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * URL回调地址。
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
   * HTTP请求的Header。格式为`参数名:参数`，多个参数之间用回车符分隔，例如：
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
   * 探测类型的方法。取值：
   * 
   * - GET
   * - POST
   * - HEAD
   * 
   * >如果任务的探测类型为HTTP，则需要设置该参数。
   * 
   * @example
   * GET
   */
  httpMethod?: string;
  /**
   * @remarks
   * 匹配HTTP响应内容的报警规则。取值：
   * - true：如果HTTP响应内容包含设置的报警规则，则报警。
   * - false：如果HTTP响应内容不包含设置的报警规则，则报警。
   * 
   * >如果任务的探测类型为HTTP，则该参数生效。
   * 
   * @example
   * true
   */
  httpNegative?: boolean;
  /**
   * @remarks
   * HTTP探测类型探测请求的Post内容。
   * 
   * @example
   * params1=paramsValue1
   */
  httpPostContent?: string;
  /**
   * @remarks
   * HTTP探测类型的响应字符集。
   * 
   * > 仅支持UTF-8。
   * 
   * @example
   * UTF-8
   */
  httpResponseCharset?: string;
  /**
   * @remarks
   * 匹配响应的内容。
   * 
   * @example
   * ok
   */
  httpResponseMatchContent?: string;
  /**
   * @remarks
   * HTTP、Telnet探测类型的探测URI地址。
   * 
   * @example
   * https://www.aliyun.com
   * telnet://127.0.0.1:80
   */
  httpURI?: string;
  /**
   * @remarks
   * 探测频率。单位：秒。取值：15、30、60、120、300、900、1800和3600。
   * 
   * > 仅3.5.1及以上版本的云监控插件支持该参数。
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * 探测的域名或地址。
   * >如果探测任务类型为PING，则需要设置该参数。
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
   * The statistical method for the alert. Valid values of N: 1 to 21. The valid values vary based on the metric:
   * 
   * - HttpStatus: Value.
   * - HttpLatency: Average.
   * - TelnetStatus: Value.
   * - TelnetLatency: Average.
   * - PingLostRate: Average.
   * 
   * > The statistical method for status code metrics is the raw value (Value). The statistical method for latency or packet loss rate metrics is the average value (Average).
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
   * - TelnetStatus: Telnet status code.
   * - TelnetLatency: Telnet latency.
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
   * - `=`.
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
   * The Alibaba Cloud Resource Name (ARN) of the resource. Format: `acs:{AbbreviatedServiceName}:{regionId}:{userId}:/{ResourceType}/{ResourceName}/message`. Example: `acs:mns:ap-southeast-1:120886317861****:/queues/test123/message`. The following list describes the parameters:
   * 
   * - {AbbreviatedServiceName}: Only Simple Message Queue (formerly MNS) is supported.
   * 
   * - {userId}: The Alibaba Cloud account ID.
   * 
   * - {regionId}: The region where the Simple Message Queue (formerly MNS) queue or topic resides.
   * 
   * - {ResourceType}: The type of the resource that accepts alerts. Valid values:
   * 
   *   - **queues**: queue.
   *   - **topics**: topic.
   * 
   * - {ResourceName}: The name of the resource.
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
   * The alert trigger targets.
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
   * The list of ECS instances that initiate detection. Valid values of N: 1 to 21.
   * 
   * > Set this parameter when `TaskScope` is set to `GROUP_SPEC_INSTANCE`.
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
   * The detection scope of the availability monitoring task. Valid values:
   * 
   * - GROUP: uses all ECS instances in the current application group as detection probes.
   * - GROUP_SPEC_INSTANCE: uses specified ECS instances in the current application group as detection probes. If you set this parameter to GROUP_SPEC_INSTANCE, you must also set InstanceList to specify the ECS instances that initiate detection.
   * 
   * @example
   * GROUP
   */
  taskScope?: string;
  /**
   * @remarks
   * The detection type of the availability monitoring task. Valid values:
   * 
   * - PING
   * - TELNET
   * - HTTP.
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

