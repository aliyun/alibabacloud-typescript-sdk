// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs } from "./DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactAliims";
import { DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups } from "./DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups";
import { DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails } from "./DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails";
import { DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses } from "./DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses";
import { DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts } from "./DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts";


export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory extends $dara.Model {
  alertName?: string;
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
  id?: string;
  instanceName?: string;
  lastTime?: number;
  level?: string;
  metricName?: string;
  namespace?: string;
  preLevel?: string;
  ruleName?: string;
  state?: string;
  status?: number;
  userId?: string;
  value?: string;
  webhooks?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
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
      id: 'Id',
      instanceName: 'InstanceName',
      lastTime: 'LastTime',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      preLevel: 'PreLevel',
      ruleName: 'RuleName',
      state: 'State',
      status: 'Status',
      userId: 'UserId',
      value: 'Value',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
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
      id: 'string',
      instanceName: 'string',
      lastTime: 'number',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      preLevel: 'string',
      ruleName: 'string',
      state: 'string',
      status: 'number',
      userId: 'string',
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

