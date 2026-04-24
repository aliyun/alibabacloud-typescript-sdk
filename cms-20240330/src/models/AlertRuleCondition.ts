// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleConditionCaseList extends $dara.Model {
  /**
   * @remarks
   * Matching expression, example: logLevel: error.
   * 
   * @example
   * logLevel: error
   */
  condition?: string;
  /**
   * @remarks
   * Count matching expression, examples: range combination: count >= 3 && count <= 10; single range: count >= 3.
   * 
   * @example
   * count >= 3
   */
  countCondition?: string;
  /**
   * @remarks
   * Alert severity level after condition is met.
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * Matching type: Has data / Has a specific number of data entries / Has matching data / Has a specific number of matching entries.
   * 
   * Valid values:
   * 
   * - HasData: Has data.
   * - HasDataCount: Has a specific number of data entries.
   * - HasDataMatch: Has matching data.
   * - HasDataMatchCount: Has a specific number of matching entries.
   * 
   * @example
   * HasData
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      countCondition: 'countCondition',
      level: 'level',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      countCondition: 'string',
      level: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionCompareListValueLevelList extends $dara.Model {
  /**
   * @remarks
   * Severity level corresponding to the threshold.
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * Comparison threshold.
   * 
   * @example
   * 120
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionCompareList extends $dara.Model {
  /**
   * @remarks
   * Time series post-aggregation functions:
   * - count
   * -  sum 
   * -  avg
   * -  min
   * -  max
   * -  p90
   * -  p95
   * -  p99
   * 
   * @example
   * count
   */
  aggregate?: string;
  /**
   * @remarks
   * Data unit.
   * 
   * @example
   * %
   */
  baseUnit?: string;
  /**
   * @remarks
   * Display unit.
   * 
   * @example
   * %
   */
  displayUnit?: string;
  /**
   * @remarks
   * Comparison operations to determine whether it is year-over-year (YoY) or month-over-month (MoM):
   * - Greater than (GT),
   * - Greater than or equal to (GTE),
   * - Less than (LT),
   * - Less than or equal to (LTE),
   * - Equal to (EQ),
   * - Not equal to (NE),
   * - Year-over-year increase (YOY_UP),
   * - Year-over-year decrease (YOY_DOWN).
   * 
   * @example
   * GT
   */
  oper?: string;
  /**
   * @remarks
   * Comparison threshold.
   * 
   * @example
   * 50
   */
  value?: number;
  /**
   * @remarks
   * List of alert severity levels for different values.
   */
  valueLevelList?: AlertRuleConditionCompareListValueLevelList[];
  /**
   * @remarks
   * Year-over-year time unit (only applicable when oper=YOY_UP/YOY_DOWN): minute, hour, day, week, month.
   * 
   * @example
   * month
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * Year-over-year time value, used in conjunction with yoyTimeUnit.
   * 
   * @example
   * 1
   */
  yoyTimeValue?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      baseUnit: 'baseUnit',
      displayUnit: 'displayUnit',
      oper: 'oper',
      value: 'value',
      valueLevelList: 'valueLevelList',
      yoyTimeUnit: 'yoyTimeUnit',
      yoyTimeValue: 'yoyTimeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      baseUnit: 'string',
      displayUnit: 'string',
      oper: 'string',
      value: 'number',
      valueLevelList: { 'type': 'array', 'itemType': AlertRuleConditionCompareListValueLevelList },
      yoyTimeUnit: 'string',
      yoyTimeValue: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.valueLevelList)) {
      $dara.Model.validateArray(this.valueLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionCompositeEscalationEscalations extends $dara.Model {
  /**
   * @remarks
   * Threshold comparison operator, valid values:
   * - GreaterThanOrEqualToThreshold: greater than or equal to.
   * - GreaterThanThreshold: greater than.
   * - LessThanOrEqualToThreshold: less than or equal to.
   * - LessThanThreshold: less than.
   * - NotEqualToThreshold: not equal to.
   * - EqualToThreshold: equal to.
   * - GreaterThanYesterday: increased compared to the same time yesterday.
   * - LessThanYesterday: decreased compared to the same time yesterday.
   * - GreaterThanLastWeek: increased compared to the same time last week.
   * - LessThanLastWeek: decreased compared to the same time last week.
   * - GreaterThanLastPeriod: increased compared to the previous period (MoM).
   * - LessThanLastPeriod: decreased compared to the previous period (MoM).
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * Metric name.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * Metric time window.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * Statistical method; the value of this parameter is determined by the Statistics column corresponding to the specified cloud product\\"s MetricName. This represents the statistical method for the monitoring metric. Example values:
   * - $Maximum: maximum value.
   * - $Minimum: minimum value.
   * - $Average: average value.
   * - $Availability: availability (typically used for site monitoring).
   * Note: "$" is a unified prefix symbol for monitoring metrics.
   * 
   * @example
   * $Maximum
   */
  statistics?: string;
  /**
   * @remarks
   * Alert threshold.
   * 
   * @example
   * 50
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'comparisonOperator',
      metricName: 'metricName',
      period: 'period',
      statistics: 'statistics',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
      statistics: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionCompositeEscalation extends $dara.Model {
  /**
   * @remarks
   * List of multi-metric composite conditions.
   */
  escalations?: AlertRuleConditionCompositeEscalationEscalations[];
  /**
   * @remarks
   * Alert severity level triggered when the condition is met (multi-metric composite alerts support only one level).
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * Relationship between multiple metric conditions; valid values are "and" or "or".
   * 
   * @example
   * and
   */
  relation?: string;
  /**
   * @remarks
   * Number of times the condition must be met to trigger an alert.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      escalations: 'escalations',
      level: 'level',
      relation: 'relation',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: { 'type': 'array', 'itemType': AlertRuleConditionCompositeEscalationEscalations },
      level: 'string',
      relation: 'string',
      times: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.escalations)) {
      $dara.Model.validateArray(this.escalations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionExpressEscalation extends $dara.Model {
  /**
   * @remarks
   * Alert severity level triggered when the condition is met (expression-based alerts support only one level): 
   * 
   * - CRITICAL 
   * - WARNING 
   * - INFO
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * Alert condition expression.
   * 
   * @example
   * @cpu_total[60].$Average > 60
   */
  rawExpression?: string;
  /**
   * @remarks
   * Number of times the condition must be met to trigger an alert.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      rawExpression: 'rawExpression',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      rawExpression: 'string',
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

export class AlertRuleConditionSimpleEscalationEscalations extends $dara.Model {
  /**
   * @remarks
   * Threshold comparison operator, valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to.
   * - GreaterThanThreshold: greater than.
   * - LessThanOrEqualToThreshold: less than or equal to.
   * - LessThanThreshold: less than.
   * - NotEqualToThreshold: not equal to.
   * - EqualToThreshold: equal to.
   * - GreaterThanYesterday: increased compared to the same time yesterday.
   * - LessThanYesterday: decreased compared to the same time yesterday.
   * - GreaterThanLastWeek: increased compared to the same time last week.
   * - LessThanLastWeek: decreased compared to the same time last week.
   * - GreaterThanLastPeriod: increased compared to the previous period (MoM).
   * - LessThanLastPeriod: decreased compared to the previous period (MoM).
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * Alert severity level triggered when the condition is met (expression-based alerts support only one level): 
   * - CRITICAL 
   * - WARNING 
   * - INFO
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * Statistical method; the value of this parameter is determined by the Statistics column corresponding to the specified cloud product\\"s MetricName, for example: Maximum, Minimum, and Average.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * Alert threshold.
   * 
   * @example
   * 100
   */
  threshold?: number;
  /**
   * @remarks
   * Number of times the condition must be met to trigger an alert.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'comparisonOperator',
      level: 'level',
      statistics: 'statistics',
      threshold: 'threshold',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      level: 'string',
      statistics: 'string',
      threshold: 'number',
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

export class AlertRuleConditionSimpleEscalation extends $dara.Model {
  /**
   * @remarks
   * List of conditions; for an alert rule with multiple severity levels, each level corresponds to one condition object.
   */
  escalations?: AlertRuleConditionSimpleEscalationEscalations[];
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * Metric associated with the alert condition.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * Metric time window, in seconds.
   * 
   * @example
   * 60
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      escalations: 'escalations',
      metricName: 'metricName',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: { 'type': 'array', 'itemType': AlertRuleConditionSimpleEscalationEscalations },
      metricName: 'string',
      period: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.escalations)) {
      $dara.Model.validateArray(this.escalations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionTriggersExpressionConditions extends $dara.Model {
  expressionType?: string;
  operator?: string;
  queryName?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      expressionType: 'expressionType',
      operator: 'operator',
      queryName: 'queryName',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionType: 'string',
      operator: 'string',
      queryName: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionTriggersExpression extends $dara.Model {
  conditions?: AlertRuleConditionTriggersExpressionConditions[];
  expressionType?: string;
  logicOperator?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      expressionType: 'expressionType',
      logicOperator: 'logicOperator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': AlertRuleConditionTriggersExpressionConditions },
      expressionType: 'string',
      logicOperator: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionTriggers extends $dara.Model {
  durationSecs?: number;
  expression?: AlertRuleConditionTriggersExpression;
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecs: 'durationSecs',
      expression: 'expression',
      severity: 'severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecs: 'number',
      expression: AlertRuleConditionTriggersExpression,
      severity: 'string',
    };
  }

  validate() {
    if(this.expression && typeof (this.expression as any).validate === 'function') {
      (this.expression as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleCondition extends $dara.Model {
  /**
   * @remarks
   * Applicable condition type: SLS_CONDITION.
   * Number of times the condition must be met before triggering an alert, default is 1.
   * 
   * @example
   * 1
   */
  alertCount?: number;
  /**
   * @remarks
   * Applicable condition type: SLS_CONDITION.
   * SLS alert condition list.
   */
  caseList?: AlertRuleConditionCaseList[];
  /**
   * @remarks
   * Applicable condition type: APM_CONDITION.
   * APM alert comparison condition list.
   */
  compareList?: AlertRuleConditionCompareList[];
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * Valid only when escalationType=composite; composite metric alert condition.
   */
  compositeEscalation?: AlertRuleConditionCompositeEscalation;
  enableSeveritySuppression?: boolean;
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * Valid values:
   * - simple: Simple metric condition,
   * - composite: Composite metric condition,
   * - express: Expression condition.
   * 
   * @example
   * simple
   */
  escalationType?: string;
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * Valid only when escalationType=composite; multi-metric composite alert condition.
   */
  expressEscalation?: AlertRuleConditionExpressEscalation;
  /**
   * @remarks
   * Applicable condition type: APM_CONDITION.
   * Alert severity level when no data is available; if not specified, no alert will be triggered for missing data.
   * 
   * @example
   * INFO
   */
  noDataAlertLevel?: string;
  /**
   * @remarks
   * Applicable condition type: APM_CONDITION.
   * Fallback value when no data is available.
   * 
   * @example
   * 1
   */
  noDataAppendValue?: string;
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * Handling method when no monitoring data is available. Valid values:
   * 
   * - KEEP_LAST_STATE (default): No action is taken.
   * - INSUFFICIENT_DATA: Alert with "insufficient data" message.
   * - OK: Treat as normal.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * Comparison operations to determine whether it is year-over-year (YoY) or month-over-month (MoM):
   * 
   * - Greater than (GT),
   * - Greater than or equal to (GTE),
   * - Less than (LT),
   * - Less than or equal to (LTE),
   * - Equal to (EQ),
   * - Not equal to (NE),
   * - Year-over-year increase (YOY_UP),
   * - Year-over-year decrease (YOY_DOWN).
   * 
   * @example
   * LT
   */
  oper?: string;
  /**
   * @remarks
   * Applicable condition type: APM_CONDITION.
   * Logical relationship between multiple conditions. Valid values: and, or.
   * 
   * @example
   * and
   */
  relation?: string;
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * Only valid when escalationType=simple; specifies the alert condition for a single metric.
   */
  simpleEscalation?: AlertRuleConditionSimpleEscalation;
  triggers?: AlertRuleConditionTriggers[];
  /**
   * @remarks
   * Rule condition type, valid values:
   * 
   * SLS_CONDITION (SLS alert condition),
   * APM_CONDITION (APM alert condition),
   * CMS_BASIC_CONDITION (Basic Cloud Monitoring alert condition).
   * 
   * This parameter is required.
   * 
   * @example
   * SLS_CONDITION
   */
  type?: string;
  /**
   * @remarks
   * Alert triggering threshold.
   * 
   * @example
   * 60
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      alertCount: 'alertCount',
      caseList: 'caseList',
      compareList: 'compareList',
      compositeEscalation: 'compositeEscalation',
      enableSeveritySuppression: 'enableSeveritySuppression',
      escalationType: 'escalationType',
      expressEscalation: 'expressEscalation',
      noDataAlertLevel: 'noDataAlertLevel',
      noDataAppendValue: 'noDataAppendValue',
      noDataPolicy: 'noDataPolicy',
      oper: 'oper',
      relation: 'relation',
      simpleEscalation: 'simpleEscalation',
      triggers: 'triggers',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCount: 'number',
      caseList: { 'type': 'array', 'itemType': AlertRuleConditionCaseList },
      compareList: { 'type': 'array', 'itemType': AlertRuleConditionCompareList },
      compositeEscalation: AlertRuleConditionCompositeEscalation,
      enableSeveritySuppression: 'boolean',
      escalationType: 'string',
      expressEscalation: AlertRuleConditionExpressEscalation,
      noDataAlertLevel: 'string',
      noDataAppendValue: 'string',
      noDataPolicy: 'string',
      oper: 'string',
      relation: 'string',
      simpleEscalation: AlertRuleConditionSimpleEscalation,
      triggers: { 'type': 'array', 'itemType': AlertRuleConditionTriggers },
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.caseList)) {
      $dara.Model.validateArray(this.caseList);
    }
    if(Array.isArray(this.compareList)) {
      $dara.Model.validateArray(this.compareList);
    }
    if(this.compositeEscalation && typeof (this.compositeEscalation as any).validate === 'function') {
      (this.compositeEscalation as any).validate();
    }
    if(this.expressEscalation && typeof (this.expressEscalation as any).validate === 'function') {
      (this.expressEscalation as any).validate();
    }
    if(this.simpleEscalation && typeof (this.simpleEscalation as any).validate === 'function') {
      (this.simpleEscalation as any).validate();
    }
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

