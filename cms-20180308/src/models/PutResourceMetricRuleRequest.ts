// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutResourceMetricRuleRequestEscalations } from "./PutResourceMetricRuleRequestEscalations";


export class PutResourceMetricRuleRequest extends $dara.Model {
  escalations?: PutResourceMetricRuleRequestEscalations;
  contactGroups?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  interval?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  namespace?: string;
  noEffectiveInterval?: string;
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resources?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      interval: 'Interval',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutResourceMetricRuleRequestEscalations,
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      metricName: 'string',
      namespace: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
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

