// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalations } from "./DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalations";


export class DescribeAlarmsForResourcesResponseBodyDatapointsAlarm extends $dara.Model {
  comparisonOperator?: string;
  contactGroups?: string;
  displayName?: string;
  effectiveInterval?: string;
  enable?: boolean;
  escalations?: DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalations;
  evaluationCount?: string;
  groupId?: string;
  groupName?: string;
  level?: string;
  metricName?: string;
  name?: string;
  namespace?: string;
  noEffectiveInterval?: string;
  period?: string;
  resources?: string;
  silenceTime?: string;
  state?: string;
  statistics?: string;
  subject?: string;
  threshold?: string;
  uuid?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      contactGroups: 'ContactGroups',
      displayName: 'DisplayName',
      effectiveInterval: 'EffectiveInterval',
      enable: 'Enable',
      escalations: 'Escalations',
      evaluationCount: 'EvaluationCount',
      groupId: 'GroupId',
      groupName: 'GroupName',
      level: 'Level',
      metricName: 'MetricName',
      name: 'Name',
      namespace: 'Namespace',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      resources: 'Resources',
      silenceTime: 'SilenceTime',
      state: 'State',
      statistics: 'Statistics',
      subject: 'Subject',
      threshold: 'Threshold',
      uuid: 'Uuid',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      contactGroups: 'string',
      displayName: 'string',
      effectiveInterval: 'string',
      enable: 'boolean',
      escalations: DescribeAlarmsForResourcesResponseBodyDatapointsAlarmEscalations,
      evaluationCount: 'string',
      groupId: 'string',
      groupName: 'string',
      level: 'string',
      metricName: 'string',
      name: 'string',
      namespace: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      silenceTime: 'string',
      state: 'string',
      statistics: 'string',
      subject: 'string',
      threshold: 'string',
      uuid: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.escalations && typeof (this.escalations as any).validate === 'function') {
      (this.escalations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

