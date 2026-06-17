// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertLogListResponseBodyAlertLogListDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the alerting resource.
   * 
   * @example
   * instanceId
   */
  key?: string;
  /**
   * @remarks
   * The value of the alerting resource.
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
   * The description of the rule that triggers the alert.
   * 
   * > The body of the alert rule. An alert rule is triggered when the monitoring data meets the alert conditions.
   * 
   * @example
   * $Average<90
   */
  expression?: string;
  /**
   * @remarks
   * The alert level and notification methods. Valid values:
   * 
   * <props="china">- P2: phone calls, text messages, emails, and DingTalk chatbots.
   * 
   * <props="china">- P3: text messages, emails, and DingTalk chatbots.
   * 
   * <props="china">- P4: emails and DingTalk chatbots.
   * 
   * <props="china">- OK: no alerts.
   * 
   * <props="intl">- P4: emails and DingTalk chatbots.
   * 
   * <props="intl">- OK: no alerts.
   * 
   * <props="partner">- P4: emails and DingTalk chatbots.
   * 
   * <props="partner">- OK: no alerts.
   * 
   * @example
   * P4
   */
  level?: string;
  /**
   * @remarks
   * The number of times that the alert is retried.
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
   * The name of the extension field.
   * 
   * @example
   * userId
   */
  name?: string;
  /**
   * @remarks
   * The value of the extension field.
   * 
   * @example
   * 100931896542****
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
   * The status code.
   * 
   * - If `Channel` is set to `WEBHOOK`, the status code is 200 or 500.
   * 
   * - If `Channel` is set to `MAIL`, `SMS`, `SLS`, `ONCALL`, `FC`, or `MNS`, this parameter is unavailable or empty.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the returned result.
   * 
   * @example
   * { }
   */
  detail?: string;
  /**
   * @remarks
   * The request ID returned by calling another cloud service.
   * 
   * @example
   * 0BDAF8A8-04DC-5F0C-90E4-724D42C4****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of calling the target.
   * 
   * - true: The call was successful.
   * 
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list of channel notifications.
   */
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
   * The alert pushing channel. Valid values:
   * 
   * - MAIL: email.
   * 
   * - SMS: text message.
   * 
   * - WEBHOOK: alert callback.
   * 
   * - SLS: Log Service.
   * 
   * - ONCALL: phone call.
   * 
   * - FC: Function Compute.
   * 
   * - MNS: Message Service (MNS).
   * 
   * @example
   * MAIL
   */
  channel?: string;
  /**
   * @remarks
   * The list of alert information results that CloudMonitor sends to the alert channel.
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
   * The list of alert pushing results by alert channel.
   */
  channelResultList?: DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultList[];
  /**
   * @remarks
   * The pushing status of the alert information.
   * 
   * - success: The alert was pushed.
   * 
   * - error code: If a configuration error occurs and the pushing list is empty, an error code is displayed.
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
   * The channel that sends the alert. Valid values:
   * - MAIL: email.
   * - ALIIM: Wangwang.
   * - SMS: text message.
   * - CALL: phone call.
   * - DING: DingTalk chatbot.
   * - Merged: alert combination.
   * 
   * @example
   * MAIL
   */
  key?: string;
  /**
   * @remarks
   * The notification target that corresponds to the alert channel.
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
   * The status code returned for the alert callback.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information returned for the alert callback.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The URL that is called back when the alert is triggered.
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
   * The timestamp when the alert was triggered.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1610043776621
   */
  alertTime?: string;
  /**
   * @remarks
   * The details of the matched alert blacklist.
   * 
   * @example
   * {"id":12****,"metricProject":"acs_ecs_dashboard","userId":173651113438****,"uuid":"8410dbbd-7d30-41c5-94cb-****","name":"alert-****","productCategory":"ecs","instances":[{"instanceId":"i-m5e1qg6uo38rztr4****"}],"metrics":null,"scopeType":"USER","scopeValue":"","startTime":"0001-01-01T00:00:00Z","endTime":"9999-12-31T23:59:59.999999999+08:00","effectiveTime":null,"isEnable":true,"status":1,"gmtCreate":"2021-11-02T16:35:59+08:00","gmtModified":"2021-11-02T16:35:59+08:00","loadTime":"2021-11-02T16:36:15.213072177+08:00"}
   */
  blackListDetail?: string;
  /**
   * @remarks
   * The name of the matched alert blacklist.
   * 
   * @example
   * Black_Test
   */
  blackListName?: string;
  /**
   * @remarks
   * The UUID of the matched alert blacklist.
   * 
   * @example
   * 8410dbbd-7d30-41c5-94cb-****
   */
  blackListUUID?: string;
  /**
   * @remarks
   * The list of Wangwang IDs of the alert contact.
   */
  contactALIIWWList?: string[];
  /**
   * @remarks
   * The list of DingTalk accounts of the alert contact.
   */
  contactDingList?: string[];
  /**
   * @remarks
   * The list of alert contact groups.
   */
  contactGroups?: string[];
  /**
   * @remarks
   * The list of email addresses of the alert contact.
   */
  contactMailList?: string[];
  /**
   * @remarks
   * The list of phone numbers of the alert contact.
   */
  contactOnCallList?: string[];
  /**
   * @remarks
   * The list of phone numbers that receive text messages of the alert contact.
   */
  contactSMSList?: string[];
  /**
   * @remarks
   * The dimensions of the resource for which the alert is triggered.
   */
  dimensions?: DescribeAlertLogListResponseBodyAlertLogListDimensions[];
  /**
   * @remarks
   * The list of webhook URLs of DingTalk chatbots for the alert contact.
   */
  dingdingWebhookList?: string[];
  /**
   * @remarks
   * The rule that triggers the alert.
   */
  escalation?: DescribeAlertLogListResponseBodyAlertLogListEscalation;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * IOHang
   */
  eventName?: string;
  /**
   * @remarks
   * The extended information of the alert.
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
   * The ID of the resource.
   * 
   * @example
   * i-m5e1qg6uo38rztr4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * portalHost
   */
  instanceName?: string;
  /**
   * @remarks
   * The alert level and notification methods. Valid values:
   * 
   * <props="china">- P2: phone calls, text messages, emails, and DingTalk chatbots.
   * 
   * <props="china">- P3: text messages, emails, and DingTalk chatbots.
   * 
   * <props="china">- P4: emails and DingTalk chatbots.
   * 
   * <props="china">- OK: no alerts.
   * 
   * <props="intl">- P4: emails and DingTalk chatbots.
   * 
   * <props="intl">- OK: no alerts.
   * 
   * <props="partner">- P4: emails and DingTalk chatbots.
   * 
   * <props="partner">- OK: no alerts.
   * 
   * @example
   * P4
   */
  level?: string;
  /**
   * @remarks
   * The change of the alert level. Valid values:
   * - `P4->OK`: The alert level changes from P4 to OK, which indicates that the alert is cleared.
   * - `P4->P4`: indicates a P4-level alert.
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
   * 7510****::e8a472a0-46ae-4ac0-84b1-e46be368****
   */
  logId?: string;
  /**
   * @remarks
   * The alert-related information, which is a JSON string.
   * 
   * @example
   * {"alertName":"e47aa0ac-4076-44db-a47d-d1083968****_Availability"}
   */
  message?: string;
  /**
   * @remarks
   * The name of the metric.
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
   * The cloud service identifier. Valid values:
   * 
   * - For an Alibaba Cloud service, the value is the abbreviation of the cloud service name. Example: ECS.
   * 
   * - For a non-Alibaba Cloud service, the value is in the format of `acs_Product keyword`. Example: acs_networkmonitor.
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
   * 
   * @example
   * CPU utilization
   */
  ruleName?: string;
  /**
   * @remarks
   * The details of the alert pushing result.
   */
  sendDetail?: DescribeAlertLogListResponseBodyAlertLogListSendDetail;
  /**
   * @remarks
   * The list of alert sending results.
   */
  sendResultList?: DescribeAlertLogListResponseBodyAlertLogListSendResultList[];
  /**
   * @remarks
   * The alert status. Valid values:
   * - 0: An alert is triggered or cleared.
   * - 1: The current time is not within the effective period of the alert.
   * - 2: The current time is within the channel silence period.
   * - 3: The host is being restarted.
   * - 4: No alerts are sent.
   * 
   * <props="china">When the alert status is 0, an alert is triggered if Level is set to P2, P3, or P4; the alert is cleared if Level is set to OK.
   * <props="intl">When the alert status is 0, an alert is triggered if Level is set to P4; the alert is cleared if Level is set to OK.
   * <props="partner">When the alert status is 0, an alert is triggered if Level is set to P4; the alert is cleared if Level is set to OK.
   * 
   * @example
   * 0
   */
  sendStatus?: string;
  /**
   * @remarks
   * The list of URLs that are called back when the alert is triggered.
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
   * The list of alert history entries.
   */
  alertLogList?: DescribeAlertLogListResponseBodyAlertLogList[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > The status code 200 indicates that the call was successful.
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
   * Indicates whether the call was successful. Valid values:
   * 
   * - true: The call was successful.
   * 
   * - false: The call failed.
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

