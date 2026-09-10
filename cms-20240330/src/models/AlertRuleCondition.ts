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
   * The match type: has data, has specific count of data, has data match, or has specific count of data match.
   * 
   * Valid values:
   * - HasData: has data
   * - HasDataCount: has specific count of data
   * - HasDataMatch: has data match
   * - HasDataMatchCount: has specific count of data match
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
   * The aggregation function applied after time series.
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
   * The year-over-year time unit. Valid only when oper is set to YOY_UP or YOY_DOWN.
   * Valid values: minute, hour, day, week, month.
   * 
   * @example
   * month
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * The year-over-year time value. Used together with yoyTimeUnit.
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
   * - $Maximum: maximum value.
   * - $Minimum: minimum value.
   * - $Average: average value.
   * - $Availability: availability rate (typically used for site monitoring).
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
   * The alert conditional expression.
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
   * The statistical method. The valid values of this parameter are determined by the Statistics column corresponding to the MetricName of the specified cloud service. Examples: Maximum, Minimum, and Average.
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
   * The list of conditions. If an alert rule corresponds to multiple levels, each level has a condition object.
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
   * The time window of the metric, in seconds.
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
  /**
   * @remarks
   * The upper bound of the range (required when operator=IN_RANGE/OUT_OF_RANGE).
   * 
   * @example
   * 100
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the range (required when operator=IN_RANGE/OUT_OF_RANGE).
   * 
   * @example
   * 0
   */
  min?: number;
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * CRITICAL
   */
  severity?: string;
  /**
   * @remarks
   * The threshold (required when the operator is not a range operator).
   * 
   * @example
   * 80
   */
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
  /**
   * @remarks
   * The conditional expression type of the sub-condition, typically SIMPLE.
   * 
   * @example
   * SIMPLE
   */
  expressionType?: string;
  /**
   * @remarks
   * The comparison operator of the sub-condition, used to compare the query result with the threshold.
   * 
   * @example
   * GT
   */
  operator?: string;
  /**
   * @remarks
   * The query name referenced by the sub-condition, corresponding to the name in queries.
   * 
   * @example
   * cpuUsageQuery
   */
  queryName?: string;
  /**
   * @remarks
   * The threshold value of the sub-condition.
   * 
   * @example
   * 80
   */
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
  /**
   * @remarks
   * The list of sub-conditions for the trigger condition. Multiple sub-conditions are evaluated based on the logicOperator of the parent expression.
   */
  conditions?: AlertRuleConditionTriggersExpressionConditions[];
  /**
   * @remarks
   * The expression type. SIMPLE indicates a single-metric condition. COMPOSITE indicates a multi-metric composite condition.
   * 
   * @example
   * SIMPLE
   */
  expressionType?: string;
  /**
   * @remarks
   * The multi-metric composite operator. Valid only when expressionType=COMPOSITE.
   * 
   * @example
   * AND
   */
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
  /**
   * @remarks
   * The duration in seconds that the condition must be continuously met before an alert is triggered.
   * 
   * @example
   * 60
   */
  durationSecs?: number;
  /**
   * @remarks
   * The expression of the trigger condition. Supports two forms: SIMPLE (single-metric) and COMPOSITE (multi-metric AND/OR/UNLESS combination).
   */
  expression?: AlertRuleConditionTriggersExpression;
  /**
   * @remarks
   * The alert severity level that corresponds to this trigger condition when it is met.
   * 
   * @example
   * CRITICAL
   */
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
   * The list of Simple Log Service (SLS) alert conditions.
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
   * Valid when escalationType is set to composite. The composite metric alert condition.
   */
  compositeEscalation?: AlertRuleConditionCompositeEscalation;
  /**
   * @remarks
   * The count comparison operator, specified when type=LOG_SET_CONDITION. Valid values: GTE / GT / EQ / LTE / LT.
   * 
   * @example
   * GTE
   */
  countOperator?: string;
  /**
   * @remarks
   * The count threshold, specified when type=LOG_SET_CONDITION.
   * 
   * @example
   * 3
   */
  countThreshold?: number;
  /**
   * @remarks
   * Used when type=UMODEL_METRICSET_MULTI_CONDITION. Specifies whether to enable severity suppression to the highest level. Default value: true. Only the highest severity level is reported for the same entity.
   */
  enableSeveritySuppression?: boolean;
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * 
   * Valid values:
   * 
   * - simple: simple metric condition
   * - composite: composite metric condition
   * - express: expression condition
   * 
   * @example
   * simple
   */
  escalationType?: string;
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * 
   * Valid when escalationType=composite. Specifies the multi-metric composite alert conditions.
   */
  expressEscalation?: AlertRuleConditionExpressEscalation;
  /**
   * @remarks
   * The log field name, specified when type=LOG_SET_CONDITION and matchOperator=CONTAINS/EQUALS/REGEX.
   * 
   * @example
   * logLevel
   */
  matchField?: string;
  /**
   * @remarks
   * The match operator, specified when type=LOG_SET_CONDITION. Valid values: PRESENT / NOT_PRESENT / CONTAINS / EQUALS / REGEX.
   * 
   * @example
   * CONTAINS
   */
  matchOperator?: string;
  /**
   * @remarks
   * The match value, specified when type=LOG_SET_CONDITION and matchOperator=CONTAINS/EQUALS/REGEX.
   * 
   * @example
   * error
   */
  matchValue?: string;
  /**
   * @remarks
   * The upper bound of the range specified when type=BASIC_CONDITION and oper=IN_RANGE/OUT_OF_RANGE.
   * 
   * @example
   * 100
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the range specified when type=BASIC_CONDITION and oper=IN_RANGE/OUT_OF_RANGE.
   * 
   * @example
   * 0
   */
  min?: number;
  /**
   * @remarks
   * Applicable condition type: APM_CONDITION.
   * 
   * The alert level when no data is available. If not specified, no alert is triggered for no-data scenarios.
   * 
   * @example
   * INFO
   */
  noDataAlertLevel?: string;
  /**
   * @remarks
   * Applicable condition type: APM_CONDITION.
   * 
   * The value to use as compensation when no data is available.
   * 
   * @example
   * 1
   */
  noDataAppendValue?: string;
  /**
   * @remarks
   * Applicable condition type: CMS_BASIC_CONDITION.
   * 
   * 
   * Specifies how to handle alerts when no monitoring data is available. Valid values:
   * 
   * - KEEP_LAST_STATE (default): No action is taken.
   * - INSUFFICIENT_DATA: The alert content indicates no data.
   * - OK: Normal.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
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
   * Valid only when escalationType is set to simple. The alert condition for a single metric.
   */
  simpleEscalation?: AlertRuleConditionSimpleEscalation;
  /**
   * @remarks
   * The list of multi-level thresholds and severity levels, used to map different thresholds to corresponding alert levels.
   */
  thresholdList?: AlertRuleConditionThresholdList[];
  /**
   * @remarks
   * Specified when type=UMODEL_METRICSET_MULTI_CONDITION. The list of trigger conditions. Each item contains severity, durationSecs, and an expression (SIMPLE for single-metric or COMPOSITE for multi-metric AND/OR/UNLESS).
   */
  triggers?: AlertRuleConditionTriggers[];
  /**
   * @remarks
   * The rule condition type. Valid values:
   * - SLS_CONDITION: SLS alert condition.
   * - APM_CONDITION: APM alert condition.
   * - CMS_BASIC_CONDITION: CloudMonitor Basic CloudMonitor alerts condition.
   * 
   * This parameter is required.
   * 
   * @example
   * SLS_CONDITION
   */
  type?: string;
  /**
   * @remarks
   * The threshold for triggering an alert.
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

