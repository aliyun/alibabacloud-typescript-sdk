// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs extends $dara.Model {
  contactALIIM?: string[];
  static names(): { [key: string]: string } {
    return {
      contactALIIM: 'ContactALIIM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactALIIM: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactALIIM)) {
      $dara.Model.validateArray(this.contactALIIM);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups extends $dara.Model {
  contactGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactGroup)) {
      $dara.Model.validateArray(this.contactGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails extends $dara.Model {
  contactMail?: string[];
  static names(): { [key: string]: string } {
    return {
      contactMail: 'ContactMail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactMail: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactMail)) {
      $dara.Model.validateArray(this.contactMail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses extends $dara.Model {
  contactSms?: string[];
  static names(): { [key: string]: string } {
    return {
      contactSms: 'ContactSms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactSms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactSms)) {
      $dara.Model.validateArray(this.contactSms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts extends $dara.Model {
  contact?: string[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contact)) {
      $dara.Model.validateArray(this.contact);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the alert was triggered. Unit: milliseconds.
   * 
   * @example
   * 1640586600000
   */
  alertTime?: number;
  /**
   * @remarks
   * The TradeManager IDs of the alert contacts.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   */
  contactALIIMs?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs;
  /**
   * @remarks
   * The alert contact groups.
   */
  contactGroups?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups;
  /**
   * @remarks
   * The email addresses of the alert contacts.
   */
  contactMails?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails;
  /**
   * @remarks
   * The mobile numbers of the alert contacts.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   */
  contactSmses?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses;
  /**
   * @remarks
   * The alert contacts that receive alert notifications.
   */
  contacts?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts;
  /**
   * @remarks
   * The resources that are monitored.
   * 
   * @example
   * {\\"instanceId\\":\\"i-bp1cqhiw1za2****\\"}
   */
  dimensions?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before an alert is triggered.
   * 
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @remarks
   * The expression that is used to trigger alerts.
   * 
   * @example
   * $Average>=10
   */
  expression?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 7671****
   */
  groupId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * i-bp1cqhiw1za2****
   */
  instanceName?: string;
  /**
   * @remarks
   * The duration of the alert. Unit: milliseconds.
   * 
   * @example
   * 360133
   */
  lastTime?: number;
  /**
   * @remarks
   * The severity level and notification methods of the alert. Valid values:
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
   * The ID of the alert rule.
   * 
   * @example
   * applyTemplate61dc81b5-d357-4cf6-a9b7-9f83c1d5****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * ECS_Rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The alert status. Valid values:
   * 
   * *   ALARM: Alerts are triggered.
   * *   OK: No alerts are triggered.
   * 
   * @example
   * ALARM
   */
  state?: string;
  /**
   * @remarks
   * Indicates whether alerts are muted. Valid values:
   * 
   * *   2 (default): Alerts are muted and are not triggered within the mute period, even if the condition specified in the alert rule is met.
   * *   0: Alerts are triggered or cleared.
   * *   1: The alert rule is ineffective.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The threshold of the metric value to trigger or clear an alert.
   * 
   * @example
   * 10.58
   */
  value?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * https://www.aliyun.com
   */
  webhooks?: string;
  static names(): { [key: string]: string } {
    return {
      alertTime: 'AlertTime',
      contactALIIMs: 'ContactALIIMs',
      contactGroups: 'ContactGroups',
      contactMails: 'ContactMails',
      contactSmses: 'ContactSmses',
      contacts: 'Contacts',
      dimensions: 'Dimensions',
      evaluationCount: 'EvaluationCount',
      expression: 'Expression',
      groupId: 'GroupId',
      instanceName: 'InstanceName',
      lastTime: 'LastTime',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      state: 'State',
      status: 'Status',
      value: 'Value',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTime: 'number',
      contactALIIMs: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs,
      contactGroups: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups,
      contactMails: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails,
      contactSmses: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses,
      contacts: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts,
      dimensions: 'string',
      evaluationCount: 'number',
      expression: 'string',
      groupId: 'string',
      instanceName: 'string',
      lastTime: 'number',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      ruleId: 'string',
      ruleName: 'string',
      state: 'string',
      status: 'number',
      value: 'string',
      webhooks: 'string',
    };
  }

  validate() {
    if(this.contactALIIMs && typeof (this.contactALIIMs as any).validate === 'function') {
      (this.contactALIIMs as any).validate();
    }
    if(this.contactGroups && typeof (this.contactGroups as any).validate === 'function') {
      (this.contactGroups as any).validate();
    }
    if(this.contactMails && typeof (this.contactMails as any).validate === 'function') {
      (this.contactMails as any).validate();
    }
    if(this.contactSmses && typeof (this.contactSmses as any).validate === 'function') {
      (this.contactSmses as any).validate();
    }
    if(this.contacts && typeof (this.contacts as any).validate === 'function') {
      (this.contacts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryList extends $dara.Model {
  alarmHistory?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory[];
  static names(): { [key: string]: string } {
    return {
      alarmHistory: 'AlarmHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistory: { 'type': 'array', 'itemType': DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory },
    };
  }

  validate() {
    if(Array.isArray(this.alarmHistory)) {
      $dara.Model.validateArray(this.alarmHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of historical alerts.
   */
  alarmHistoryList?: DescribeAlertHistoryListResponseBodyAlarmHistoryList;
  /**
   * @remarks
   * The status code.
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
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3C69FBE-2262-541F-A409-C52F380BAE63
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
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      alarmHistoryList: 'AlarmHistoryList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistoryList: DescribeAlertHistoryListResponseBodyAlarmHistoryList,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.alarmHistoryList && typeof (this.alarmHistoryList as any).validate === 'function') {
      (this.alarmHistoryList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

