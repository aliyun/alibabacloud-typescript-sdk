// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations } from "./DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations";


export class DescribeMetricRuleListResponseBodyAlarmsAlarm extends $dara.Model {
  alertState?: string;
  contactGroups?: string;
  dimensions?: string;
  effectiveInterval?: string;
  enableState?: boolean;
  escalations?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations;
  groupId?: string;
  groupName?: string;
  mailSubject?: string;
  metricName?: string;
  namespace?: string;
  noEffectiveInterval?: string;
  period?: string;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: string;
  sourceType?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      enableState: 'EnableState',
      escalations: 'Escalations',
      groupId: 'GroupId',
      groupName: 'GroupName',
      mailSubject: 'MailSubject',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      sourceType: 'SourceType',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      enableState: 'boolean',
      escalations: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations,
      groupId: 'string',
      groupName: 'string',
      mailSubject: 'string',
      metricName: 'string',
      namespace: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'string',
      sourceType: 'string',
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

