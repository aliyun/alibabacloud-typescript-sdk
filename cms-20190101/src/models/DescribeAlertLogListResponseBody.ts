// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertLogListResponseBodyAlertLogListDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension.
   * 
   * @example
   * instanceId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * @example
   * i-m5e1qg6uo38rztr4****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeAlertLogListResponseBodyAlertLogListEscalation extends $dara.Model {
  /**
   * @remarks
   * The description of the alert rule.
   * 
   * >  The content of the alert rule. This parameter indicates the conditions that trigger an alert.
   * 
   * @example
   * $Average<90
   */
  expression?: string;
  /**
   * @remarks
   * The alert level and the methods that are used to send alert notifications. Valid values:
   * 
   * *   P4: Alert notifications are sent by using emails and DingTalk chatbots.
   * *   OK: No alert is generated.
   * 
   * @example
   * P4
   */
  level?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before an alert is triggered.
   * 
   * @example
   * 1
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      level: 'Level',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      level: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListExtendedInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the extended field.
   * 
   * @example
   * userId
   */
  name?: string;
  /**
   * @remarks
   * The value of the extended field.
   * 
   * @example
   * 120886317861****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultListResultList extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   If the value of the `Channel` parameter is `WEBHOOK`, the status code is 200 or 500.
   * *   If the value of the `Channel` parameter is `MAIL`, `SMS`, `SLS`, `ONCALL`, `FC`, or `MNS`, this parameter is empty or not returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the returned results.
   * 
   * @example
   * { }
   */
  detail?: string;
  /**
   * @remarks
   * The request ID returned when CloudMonitor calls another cloud service.
   * 
   * @example
   * 0BDAF8A8-04DC-5F0C-90E4-724D42C4****
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
  notifyTargetList?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      requestId: 'RequestId',
      success: 'Success',
      notifyTargetList: 'notifyTargetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: 'string',
      requestId: 'string',
      success: 'boolean',
      notifyTargetList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.notifyTargetList)) {
      $dara.Model.validateArray(this.notifyTargetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultList extends $dara.Model {
  /**
   * @remarks
   * The method that is used to send alert notifications. Valid values:
   * 
   * *   MAIL: email
   * *   SMS: text message
   * *   WEBHOOK: alert callback
   * *   SLS: Simple Log Service
   * *   ONCALL: phone call
   * *   FC: Function Compute
   * *   MNS: Message Service queue
   * 
   * @example
   * MAIL
   */
  channel?: string;
  /**
   * @remarks
   * The sending results of alert notifications.
   */
  resultList?: DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultListResultList[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      resultList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultListResultList },
    };
  }

  validate() {
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListSendDetail extends $dara.Model {
  /**
   * @remarks
   * The list of sending results that are categorized by notification method.
   */
  channelResultList?: DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultList[];
  /**
   * @remarks
   * Indicates whether the alert notifications are sent.
   * 
   * *   If the alert notifications are sent, the value "success" is returned.
   * *   If the configuration is invalid, no alert notification is sent and an error code is returned.
   * 
   * @example
   * success
   */
  resultCode?: string;
  static names(): { [key: string]: string } {
    return {
      channelResultList: 'ChannelResultList',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelResultList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultList },
      resultCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelResultList)) {
      $dara.Model.validateArray(this.channelResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListSendResultList extends $dara.Model {
  /**
   * @remarks
   * The category of the alert notification method. Valid values:
   * 
   * *   MAIL: email
   * *   ALIIM: TradeManager
   * *   SMS: text message
   * *   CALL: phone call
   * *   DING: DingTalk chatbot
   * *   Merged: alert merging
   * 
   * @example
   * Mail
   */
  key?: string;
  /**
   * @remarks
   * The notification object corresponding to the alert notification method.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListWebhookList extends $dara.Model {
  /**
   * @remarks
   * The status code of the alert callback.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message returned for the alert callback.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * https://www.aliyun.com/webhook.html
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogList extends $dara.Model {
  /**
   * @remarks
   * The timestamp that was generated when the alert was triggered.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1610043776621
   */
  alertTime?: string;
  /**
   * @remarks
   * The details of the blacklist policy.
   * 
   * @example
   * BlackListDetail
   */
  blackListDetail?: string;
  /**
   * @remarks
   * The name of the blacklist policy.
   * 
   * @example
   * {"id":123,"metricProject":"acs_ecs_dashboard","userId":1736511134389110,"uuid":"8410dbbd-7d30-41c5-94cb-***","name":"alert-***","productCategory":"ecs","instances":[{"instanceId":"host-***"}],"metrics":null,"scopeType":"USER","scopeValue":"","startTime":"0001-01-01T00:00:00Z","endTime":"9999-12-31T23:59:59.999999999+08:00","effectiveTime":null,"isEnable":true,"status":1,"gmtCreate":"2021-11-02T16:35:59+08:00","gmtModified":"2021-11-02T16:35:59+08:00","loadTime":"2021-11-02T16:36:15.213072177+08:00"}
   */
  blackListName?: string;
  /**
   * @remarks
   * The ID of the blacklist policy.
   * 
   * @example
   * 8410dbbd-7d30-41c5-94cb-*****
   */
  blackListUUID?: string;
  contactALIIWWList?: string[];
  contactDingList?: string[];
  contactGroups?: string[];
  contactMailList?: string[];
  contactOnCallList?: string[];
  contactSMSList?: string[];
  /**
   * @remarks
   * The dimensions of the resource that triggered alerts.
   */
  dimensions?: DescribeAlertLogListResponseBodyAlertLogListDimensions[];
  dingdingWebhookList?: string[];
  /**
   * @remarks
   * The alert rule based on which the alert is triggered.
   */
  escalation?: DescribeAlertLogListResponseBodyAlertLogListEscalation;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * IOHang
   */
  eventName?: string;
  /**
   * @remarks
   * The extended fields.
   */
  extendedInfo?: DescribeAlertLogListResponseBodyAlertLogListExtendedInfo[];
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 7301****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * ECS_Instances
   */
  groupName?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-m5e1qg6uo38rztr4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * portalHost
   */
  instanceName?: string;
  /**
   * @remarks
   * The alert level and the methods that are used to send alert notifications. Valid values:
   * 
   * *   P4: Alert notifications are sent by using emails and DingTalk chatbots.
   * *   OK: No alert is generated.
   * 
   * @example
   * P4
   */
  level?: string;
  /**
   * @remarks
   * Indicates whether the alert level was changed. Valid values:
   * 
   * *   `P4->OK`: The alert level was changed from P4 to OK.
   * *   `P4->P4`: The alert level was still P4.
   * 
   * @example
   * P4->OK
   */
  levelChange?: string;
  /**
   * @remarks
   * The log ID.
   * 
   * @example
   * 7818361[1523]@1671593992[1]
   */
  logId?: string;
  /**
   * @remarks
   * The alert information in a JSON string.
   * 
   * @example
   * {"alertName":"e47aa0ac-4076-44db-a47d-d1083968****_Availability"}
   */
  message?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The identifier of the cloud service. Valid values:
   * 
   * *   If the cloud service is provided by Alibaba Cloud, the abbreviation of the service name is returned. Example: ECS.
   * *   If the cloud service is not provided by Alibaba Cloud, a value in the `acs_Service keyword` format is returned. Example: acs_networkmonitor.
   * 
   * @example
   * ECS
   */
  product?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * d582b9e9-b1c1-4f17-9279-0fe7333a****_ResponseTime
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   */
  ruleName?: string;
  /**
   * @remarks
   * The details about the sending results of alert notifications.
   */
  sendDetail?: DescribeAlertLogListResponseBodyAlertLogListSendDetail;
  /**
   * @remarks
   * The sending results of alert notifications.
   */
  sendResultList?: DescribeAlertLogListResponseBodyAlertLogListSendResultList[];
  /**
   * @remarks
   * The status of the alert. Valid values:
   * 
   * *   0: The alert is triggered or cleared.
   * *   1: The alert is ineffective.
   * *   2: The alert is muted.
   * *   3: The host is restarting.
   * *   4: No alert notification is sent.
   * 
   * If the value of the SendStatus parameter is 0, the value P4 of the Level parameter indicates a triggered alert and the value OK indicates a cleared alert.
   * 
   * @example
   * 0
   */
  sendStatus?: string;
  /**
   * @remarks
   * The callback URLs.
   */
  webhookList?: DescribeAlertLogListResponseBodyAlertLogListWebhookList[];
  static names(): { [key: string]: string } {
    return {
      alertTime: 'AlertTime',
      blackListDetail: 'BlackListDetail',
      blackListName: 'BlackListName',
      blackListUUID: 'BlackListUUID',
      contactALIIWWList: 'ContactALIIWWList',
      contactDingList: 'ContactDingList',
      contactGroups: 'ContactGroups',
      contactMailList: 'ContactMailList',
      contactOnCallList: 'ContactOnCallList',
      contactSMSList: 'ContactSMSList',
      dimensions: 'Dimensions',
      dingdingWebhookList: 'DingdingWebhookList',
      escalation: 'Escalation',
      eventName: 'EventName',
      extendedInfo: 'ExtendedInfo',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      level: 'Level',
      levelChange: 'LevelChange',
      logId: 'LogId',
      message: 'Message',
      metricName: 'MetricName',
      namespace: 'Namespace',
      product: 'Product',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sendDetail: 'SendDetail',
      sendResultList: 'SendResultList',
      sendStatus: 'SendStatus',
      webhookList: 'WebhookList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTime: 'string',
      blackListDetail: 'string',
      blackListName: 'string',
      blackListUUID: 'string',
      contactALIIWWList: { 'type': 'array', 'itemType': 'string' },
      contactDingList: { 'type': 'array', 'itemType': 'string' },
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      contactMailList: { 'type': 'array', 'itemType': 'string' },
      contactOnCallList: { 'type': 'array', 'itemType': 'string' },
      contactSMSList: { 'type': 'array', 'itemType': 'string' },
      dimensions: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListDimensions },
      dingdingWebhookList: { 'type': 'array', 'itemType': 'string' },
      escalation: DescribeAlertLogListResponseBodyAlertLogListEscalation,
      eventName: 'string',
      extendedInfo: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListExtendedInfo },
      groupId: 'string',
      groupName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      level: 'string',
      levelChange: 'string',
      logId: 'string',
      message: 'string',
      metricName: 'string',
      namespace: 'string',
      product: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sendDetail: DescribeAlertLogListResponseBodyAlertLogListSendDetail,
      sendResultList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListSendResultList },
      sendStatus: 'string',
      webhookList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListWebhookList },
    };
  }

  validate() {
    if(Array.isArray(this.contactALIIWWList)) {
      $dara.Model.validateArray(this.contactALIIWWList);
    }
    if(Array.isArray(this.contactDingList)) {
      $dara.Model.validateArray(this.contactDingList);
    }
    if(Array.isArray(this.contactGroups)) {
      $dara.Model.validateArray(this.contactGroups);
    }
    if(Array.isArray(this.contactMailList)) {
      $dara.Model.validateArray(this.contactMailList);
    }
    if(Array.isArray(this.contactOnCallList)) {
      $dara.Model.validateArray(this.contactOnCallList);
    }
    if(Array.isArray(this.contactSMSList)) {
      $dara.Model.validateArray(this.contactSMSList);
    }
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(Array.isArray(this.dingdingWebhookList)) {
      $dara.Model.validateArray(this.dingdingWebhookList);
    }
    if(this.escalation && typeof (this.escalation as any).validate === 'function') {
      (this.escalation as any).validate();
    }
    if(Array.isArray(this.extendedInfo)) {
      $dara.Model.validateArray(this.extendedInfo);
    }
    if(this.sendDetail && typeof (this.sendDetail as any).validate === 'function') {
      (this.sendDetail as any).validate();
    }
    if(Array.isArray(this.sendResultList)) {
      $dara.Model.validateArray(this.sendResultList);
    }
    if(Array.isArray(this.webhookList)) {
      $dara.Model.validateArray(this.webhookList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried alert logs.
   */
  alertLogList?: DescribeAlertLogListResponseBodyAlertLogList[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > The status code 200 indicates that the request was successful.
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1C4A3709-BF52-42EE-87B5-7435F0929585
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
  static names(): { [key: string]: string } {
    return {
      alertLogList: 'AlertLogList',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLogList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogList },
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.alertLogList)) {
      $dara.Model.validateArray(this.alertLogList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

