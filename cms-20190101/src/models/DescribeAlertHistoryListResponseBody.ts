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
  alertTime?: number;
  contactALIIMs?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs;
  contactGroups?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups;
  contactMails?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails;
  contactSmses?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses;
  contacts?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts;
  dimensions?: string;
  evaluationCount?: number;
  expression?: string;
  groupId?: string;
  instanceName?: string;
  lastTime?: number;
  level?: string;
  metricName?: string;
  namespace?: string;
  ruleId?: string;
  ruleName?: string;
  state?: string;
  status?: number;
  value?: string;
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
   * - true
   * 
   * - false
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

