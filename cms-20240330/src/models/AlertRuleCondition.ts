// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleConditionCaseList extends $dara.Model {
  /**
   * @remarks
   * The match expression. Example: logLevel: error.
   * 
   * @example
   * logLevel: error
   */
  condition?: string;
  /**
   * @remarks
   * The count match expression. Examples:
   * Range combination: __count__ >= 3 && __count__ <= 10
   * Single range: __count__ >= 3
   * 
   * @example
   * count >= 3
   */
  countCondition?: string;
  /**
   * @remarks
   * The alert level when the condition is met.
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The match type: has data, has a specific number of data entries, has data match, or has a specific number of data matches.
   * 
   * Valid values:
   * - HasData: has data
   * - HasDataCount: has a specific number of data entries
   * - HasDataMatch: has data match
   * - HasDataMatchCount: has a specific number of data matches
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
   * The level corresponding to the threshold.
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The comparison threshold.
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
   * The aggregate functions applied after time series aggregation.
   * 
   * - count
   * - sum
   * - avg
   * - min
   * - max
   * - p90
   * - p95
   * - p99
   * 
   * @example
   * count
   */
  aggregate?: string;
  /**
   * @remarks
   * The data unit.
   * 
   * @example
   * %
   */
  baseUnit?: string;
  /**
   * @remarks
   * The display unit.
   * 
   * @example
   * %
   */
  displayUnit?: string;
  /**
   * @remarks
   * The comparison operator. Determines whether year-over-year or period-over-period comparison is used.
   * 
   * - Greater than: GT
   * - Greater than or equal to: GTE
   * - Less than: LT
   * - Less than or equal to: LTE
   * - Equal to: EQ
   * - Not equal to: NE
   * - Year-over-year increase: YOY_UP
   * - Year-over-year decrease: YOY_DOWN
   * 
   * @example
   * GT
   */
  oper?: string;
  /**
   * @remarks
   * The comparison threshold.
   * 
   * @example
   * 50
   */
  value?: number;
  /**
   * @remarks
   * The list of alert levels for different values.
   */
  valueLevelList?: AlertRuleConditionCompareListValueLevelList[];
  /**
   * @remarks
   * The time unit for year-over-year comparison. Valid only when oper is set to YOY_UP or YOY_DOWN.
   * Valid values: minute, hour, day, week, month.
   * 
   * @example
   * month
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * The value of the year-over-year time period. Used together with yoyTimeUnit.
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
   * The threshold comparison operator. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: Greater than or equal to.
   * - GreaterThanThreshold: Greater than.
   * - LessThanOrEqualToThreshold: Less than or equal to.
   * - LessThanThreshold: Less than.
   * - NotEqualToThreshold: Not equal to.
   * - EqualToThreshold: Equal to.
   * - GreaterThanYesterday: Year-over-year increase compared with the same time yesterday.
   * - LessThanYesterday: Year-over-year decrease compared with the same time yesterday.
   * - GreaterThanLastWeek: Year-over-year increase compared with the same time last week.
   * - LessThanLastWeek: Year-over-year decrease compared with the same time last week.
   * - GreaterThanLastPeriod: Period-over-period increase compared with the previous period.
   * - LessThanLastPeriod: Period-over-period decrease compared with the previous period.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
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
   * The time window of the metric.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The statistical method. The value of this parameter is determined by the Statistics column corresponding to the MetricName of the specified cloud service. Example values for the statistical method of a metric:
   * 
   * - $Maximum: Maximum value.
   * - $Minimum: Minimum value.
   * - $Average: Average value.
   * - $Availability: Availability rate (typically used for site monitoring).
   * 
   * Note: $ is the unified prefix symbol for metrics.
   * 
   * @example
   * $Maximum
   */
  statistics?: string;
  /**
   * @remarks
   * The alert threshold.
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
   * The list of composite conditions for multiple metrics.
   */
  escalations?: AlertRuleConditionCompositeEscalationEscalations[];
  /**
   * @remarks
   * The alert level triggered when the condition is met. Composite metric alerts support only one level.
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The relationship between multiple metric conditions. Valid values: and, or.
   * 
   * @example
   * and
   */
  relation?: string;
  /**
   * @remarks
   * The number of times the condition must be met to trigger an alert.
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
   * The alert level triggered when the condition is met. Expression-based alerts support only one level.
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
   * The alert condition expression.
   * 
   * @example
   * @cpu_total[60].$Average > 60
   */
  rawExpression?: string;
  /**
   * @remarks
   * The number of times the condition must be met to trigger an alert.
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
   * The threshold comparison operator. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: Greater than or equal to.
   * - GreaterThanThreshold: Greater than.
   * - LessThanOrEqualToThreshold: Less than or equal to.
   * - LessThanThreshold: Less than.
   * - NotEqualToThreshold: Not equal to.
   * - EqualToThreshold: Equal to.
   * - GreaterThanYesterday: Year-over-year increase compared with the same time yesterday.
   * - LessThanYesterday: Year-over-year decrease compared with the same time yesterday.
   * - GreaterThanLastWeek: Year-over-year increase compared with the same time last week.
   * - LessThanLastWeek: Year-over-year decrease compared with the same time last week.
   * - GreaterThanLastPeriod: Period-over-period increase compared with the previous period.
   * - LessThanLastPeriod: Period-over-period decrease compared with the previous period.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The alert level triggered when the condition is met. Expression-based alerts support only one level.
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
   * The statistical method. The value of this parameter is determined by the Statistics column corresponding to the MetricName of the specified cloud service. Examples: Maximum, Minimum, and Average.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * @example
   * 100
   */
  threshold?: number;
  /**
   * @remarks
   * The number of times the condition must be met to trigger an alert.
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
   * The list of conditions. When an alert rule corresponds to multiple levels, each level has a condition object.
   */
  escalations?: AlertRuleConditionSimpleEscalationEscalations[];
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * 
   * The metric associated with the alert condition.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The time window of the metric. Unit: seconds.
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

export class AlertRuleConditionThresholdList extends $dara.Model {
  max?: number;
  min?: number;
  severity?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'max',
      min: 'min',
      severity: 'severity',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      severity: 'string',
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
   * 
   * The number of times the condition must be met before an alert is triggered. Default value: 1.
   * 
   * @example
   * 1
   */
  alertCount?: number;
  /**
   * @remarks
   * Applicable condition type: SLS_CONDITION.
   * 
   * The list of Simple Log Service alert conditions.
   */
  caseList?: AlertRuleConditionCaseList[];
  /**
   * @remarks
   * Applicable condition type: APM_CONDITION.
   * 
   * The list of Application Performance Monitoring (APM) alert comparison conditions.
   */
  compareList?: AlertRuleConditionCompareList[];
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * 
   * This parameter takes effect only when escalationType is set to composite. The composite metric alert condition.
   */
  compositeEscalation?: AlertRuleConditionCompositeEscalation;
  countOperator?: string;
  countThreshold?: number;
  enableSeveritySuppression?: boolean;
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * 
   * Valid values:
   * 
   * - simple: simple metric condition.
   * - composite: composite metric condition.
   * - express: expression condition.
   * 
   * @example
   * simple
   */
  escalationType?: string;
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * 
   * This parameter takes effect only when escalationType is set to composite. The multi-metric composite alert condition.
   */
  expressEscalation?: AlertRuleConditionExpressEscalation;
  matchField?: string;
  matchOperator?: string;
  matchValue?: string;
  max?: number;
  min?: number;
  /**
   * @remarks
   * Applicable condition type: APM_CONDITION.
   * 
   * The alert level when no data is available. If this parameter is not specified, no alert is triggered when no data is available.
   * 
   * @example
   * INFO
   */
  noDataAlertLevel?: string;
  /**
   * @remarks
   * Applicable condition type: APM_CONDITION.
   * 
   * The compensation value when no data is available.
   * 
   * @example
   * 1
   */
  noDataAppendValue?: string;
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * 
   * The method used to handle alerts when no monitoring data is available. Valid values:
   * 
   * - KEEP_LAST_STATE (default): No action is taken.
   * - INSUFFICIENT_DATA: The alert content indicates that no data is available.
   * - OK: Normal.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The comparison operator. Specifies whether to use year-over-year or period-over-period comparison. Valid values:
   * 
   * - GT: greater than.
   * - GTE: greater than or equal to.
   * - LT: less than.
   * - LTE: less than or equal to.
   * - EQ: equal to.
   * - NE: not equal to.
   * - YOY_UP: year-over-year increase.
   * - YOY_DOWN: year-over-year decrease.
   * 
   * @example
   * LT
   */
  oper?: string;
  /**
   * @remarks
   * Applicable condition type: APM_CONDITION.
   * 
   * The logical relationship between multiple conditions. Valid values:
   * - and
   * - or
   * 
   * @example
   * and
   */
  relation?: string;
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * 
   * This parameter takes effect only when escalationType is set to simple. The alert condition configured for a single metric.
   */
  simpleEscalation?: AlertRuleConditionSimpleEscalation;
  thresholdList?: AlertRuleConditionThresholdList[];
  triggers?: AlertRuleConditionTriggers[];
  /**
   * @remarks
   * The rule condition type. Valid values:
   * - SLS_CONDITION: Simple Log Service alert condition.
   * - APM_CONDITION: APM alert condition.
   * - CMS_BASIC_CONDITION: CloudMonitor Basic monitoring alert condition.
   * 
   * This parameter is required.
   * 
   * @example
   * SLS_CONDITION
   */
  type?: string;
  /**
   * @remarks
   * The threshold that triggers the alert.
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
      countOperator: 'countOperator',
      countThreshold: 'countThreshold',
      enableSeveritySuppression: 'enableSeveritySuppression',
      escalationType: 'escalationType',
      expressEscalation: 'expressEscalation',
      matchField: 'matchField',
      matchOperator: 'matchOperator',
      matchValue: 'matchValue',
      max: 'max',
      min: 'min',
      noDataAlertLevel: 'noDataAlertLevel',
      noDataAppendValue: 'noDataAppendValue',
      noDataPolicy: 'noDataPolicy',
      oper: 'oper',
      relation: 'relation',
      simpleEscalation: 'simpleEscalation',
      thresholdList: 'thresholdList',
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
      countOperator: 'string',
      countThreshold: 'number',
      enableSeveritySuppression: 'boolean',
      escalationType: 'string',
      expressEscalation: AlertRuleConditionExpressEscalation,
      matchField: 'string',
      matchOperator: 'string',
      matchValue: 'string',
      max: 'number',
      min: 'number',
      noDataAlertLevel: 'string',
      noDataAppendValue: 'string',
      noDataPolicy: 'string',
      oper: 'string',
      relation: 'string',
      simpleEscalation: AlertRuleConditionSimpleEscalation,
      thresholdList: { 'type': 'array', 'itemType': AlertRuleConditionThresholdList },
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
    if(Array.isArray(this.thresholdList)) {
      $dara.Model.validateArray(this.thresholdList);
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

