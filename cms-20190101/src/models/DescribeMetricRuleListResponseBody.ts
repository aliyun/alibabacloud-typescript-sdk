// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionListExpressionList extends $dara.Model {
  comparisonOperator?: string;
  metricName?: string;
  period?: number;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
      statistics: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionList extends $dara.Model {
  expressionList?: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionListExpressionList[];
  static names(): { [key: string]: string } {
    return {
      expressionList: 'ExpressionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionList: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionListExpressionList },
    };
  }

  validate() {
    if(Array.isArray(this.expressionList)) {
      $dara.Model.validateArray(this.expressionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpression extends $dara.Model {
  expressionList?: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionList;
  expressionListJoin?: string;
  expressionRaw?: string;
  level?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      expressionList: 'ExpressionList',
      expressionListJoin: 'ExpressionListJoin',
      expressionRaw: 'ExpressionRaw',
      level: 'Level',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionList: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionList,
      expressionListJoin: 'string',
      expressionRaw: 'string',
      level: 'string',
      times: 'number',
    };
  }

  validate() {
    if(this.expressionList && typeof (this.expressionList as any).validate === 'function') {
      (this.expressionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical extends $dara.Model {
  comparisonOperator?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo extends $dara.Model {
  comparisonOperator?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn extends $dara.Model {
  comparisonOperator?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations extends $dara.Model {
  critical?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical;
  info?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo;
  warn?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical,
      info: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo,
      warn: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn,
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmLabelsLabels extends $dara.Model {
  key?: string;
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmLabels extends $dara.Model {
  labels?: DescribeMetricRuleListResponseBodyAlarmsAlarmLabelsLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarmLabelsLabels },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotationsAnnotations extends $dara.Model {
  key?: string;
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

export class DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotations extends $dara.Model {
  annotations?: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotationsAnnotations[];
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotationsAnnotations },
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheus extends $dara.Model {
  annotations?: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotations;
  level?: string;
  promQL?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      level: 'Level',
      promQL: 'PromQL',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotations,
      level: 'string',
      promQL: 'string',
      times: 'number',
    };
  }

  validate() {
    if(this.annotations && typeof (this.annotations as any).validate === 'function') {
      (this.annotations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarm extends $dara.Model {
  alertState?: string;
  compositeExpression?: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpression;
  contactGroups?: string;
  dimensions?: string;
  effectiveInterval?: string;
  enableState?: boolean;
  escalations?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations;
  gmtCreate?: number;
  gmtUpdate?: string;
  groupId?: string;
  groupName?: string;
  labels?: DescribeMetricRuleListResponseBodyAlarmsAlarmLabels;
  mailSubject?: string;
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  noEffectiveInterval?: string;
  period?: string;
  productCategory?: string;
  prometheus?: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheus;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  /**
   * @remarks
   * 是否关闭恢复告警。取值：true（是）、false（否）。
   * 
   * @example
   * true
   */
  sendOK?: boolean;
  silenceTime?: number;
  sourceType?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      compositeExpression: 'CompositeExpression',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      enableState: 'EnableState',
      escalations: 'Escalations',
      gmtCreate: 'GmtCreate',
      gmtUpdate: 'GmtUpdate',
      groupId: 'GroupId',
      groupName: 'GroupName',
      labels: 'Labels',
      mailSubject: 'MailSubject',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      productCategory: 'ProductCategory',
      prometheus: 'Prometheus',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sendOK: 'SendOK',
      silenceTime: 'SilenceTime',
      sourceType: 'SourceType',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      compositeExpression: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpression,
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      enableState: 'boolean',
      escalations: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations,
      gmtCreate: 'number',
      gmtUpdate: 'string',
      groupId: 'string',
      groupName: 'string',
      labels: DescribeMetricRuleListResponseBodyAlarmsAlarmLabels,
      mailSubject: 'string',
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      productCategory: 'string',
      prometheus: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheus,
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sendOK: 'boolean',
      silenceTime: 'number',
      sourceType: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.compositeExpression && typeof (this.compositeExpression as any).validate === 'function') {
      (this.compositeExpression as any).validate();
    }
    if(this.escalations && typeof (this.escalations as any).validate === 'function') {
      (this.escalations as any).validate();
    }
    if(this.labels && typeof (this.labels as any).validate === 'function') {
      (this.labels as any).validate();
    }
    if(this.prometheus && typeof (this.prometheus as any).validate === 'function') {
      (this.prometheus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarms extends $dara.Model {
  alarm?: DescribeMetricRuleListResponseBodyAlarmsAlarm[];
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarm },
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

export class DescribeMetricRuleListResponseBody extends $dara.Model {
  alarms?: DescribeMetricRuleListResponseBodyAlarms;
  /**
   * @remarks
   * The status code.
   * 
   * >A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
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
   * The request ID.
   * 
   * @example
   * 386C6712-335F-5054-930A-CC92B851ECBA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: DescribeMetricRuleListResponseBodyAlarms,
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.alarms && typeof (this.alarms as any).validate === 'function') {
      (this.alarms as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

