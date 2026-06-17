// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsCritical extends $dara.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo extends $dara.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn extends $dara.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations extends $dara.Model {
  critical?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsCritical;
  info?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo;
  warn?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsCritical,
      info: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo,
      warn: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn,
    };
  }

  validate() {
    if(this.critical && typeof (this.critical as any).validate === 'function') {
      (this.critical as any).validate();
    }
    if(this.info && typeof (this.info as any).validate === 'function') {
      (this.info as any).validate();
    }
    if(this.warn && typeof (this.warn as any).validate === 'function') {
      (this.warn as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlert extends $dara.Model {
  alertState?: string;
  contactGroups?: string;
  dimensions?: string;
  effectiveInterval?: string;
  enableState?: boolean;
  escalations?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations;
  mailSubject?: string;
  metricName?: string;
  namespace?: string;
  noEffectiveInterval?: string;
  period?: string;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      enableState: 'EnableState',
      escalations: 'Escalations',
      mailSubject: 'MailSubject',
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
      alertState: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      enableState: 'boolean',
      escalations: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations,
      mailSubject: 'string',
      metricName: 'string',
      namespace: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'string',
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

export class DescribeActiveMetricRuleListResponseBodyAlertList extends $dara.Model {
  alert?: DescribeActiveMetricRuleListResponseBodyAlertListAlert[];
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: { 'type': 'array', 'itemType': DescribeActiveMetricRuleListResponseBodyAlertListAlert },
    };
  }

  validate() {
    if(Array.isArray(this.alert)) {
      $dara.Model.validateArray(this.alert);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyDatapointsAlarm extends $dara.Model {
  comparisonOperator?: string;
  contactGroups?: string;
  enable?: string;
  endTime?: string;
  evaluationCount?: string;
  metricName?: string;
  namespace?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: string;
  startTime?: string;
  state?: string;
  statistics?: string;
  threshold?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      contactGroups: 'ContactGroups',
      enable: 'Enable',
      endTime: 'EndTime',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      state: 'State',
      statistics: 'Statistics',
      threshold: 'Threshold',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      contactGroups: 'string',
      enable: 'string',
      endTime: 'string',
      evaluationCount: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'string',
      startTime: 'string',
      state: 'string',
      statistics: 'string',
      threshold: 'string',
      webhook: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyDatapoints extends $dara.Model {
  alarm?: DescribeActiveMetricRuleListResponseBodyDatapointsAlarm[];
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: { 'type': 'array', 'itemType': DescribeActiveMetricRuleListResponseBodyDatapointsAlarm },
    };
  }

  validate() {
    if(Array.isArray(this.alarm)) {
      $dara.Model.validateArray(this.alarm);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBody extends $dara.Model {
  alertList?: DescribeActiveMetricRuleListResponseBodyAlertList;
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
  datapoints?: DescribeActiveMetricRuleListResponseBodyDatapoints;
  /**
   * @remarks
   * The returned message.
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
   * F82E6667-7811-4BA0-842F-5B2DC42BBAAD
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
  static names(): { [key: string]: string } {
    return {
      alertList: 'AlertList',
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertList: DescribeActiveMetricRuleListResponseBodyAlertList,
      code: 'string',
      datapoints: DescribeActiveMetricRuleListResponseBodyDatapoints,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.alertList && typeof (this.alertList as any).validate === 'function') {
      (this.alertList as any).validate();
    }
    if(this.datapoints && typeof (this.datapoints as any).validate === 'function') {
      (this.datapoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

