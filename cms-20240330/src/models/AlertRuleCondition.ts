// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleConditionCaseList extends $dara.Model {
  /**
   * @remarks
   * The matching expression. Example: logLevel: error
   * 
   * @example
   * logLevel: error
   */
  condition?: string;
  /**
   * @remarks
   * The expression for matching a quantity. Examples:
   * Combined range: **count** >= 3 && **count** <= 10
   * Single range: **count** >= 3
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
   * The match type. It can be data availability, a specific number of data entries, a data match, or a specific number of data entry matches.
   * 
   * Valid values:
   * 
   * - HasData: Data is available.
   * 
   * - HasDataCount: A specific number of data entries are available.
   * 
   * - HasDataMatch: Data matches the condition.
   * 
   * - HasDataMatchCount: A specific number of data entries match the condition.
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
   * The threshold for comparison.
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
   * The aggregate function for the time series.
   * 
   * - count
   * 
   * - sum
   * 
   * - avg
   * 
   * - min
   * 
   * - max
   * 
   * - p90
   * 
   * - p95
   * 
   * - p99
   * 
   * @example
   * count
   */
  aggregate?: string;
  /**
   * @remarks
   * The unit of the data.
   * 
   * @example
   * %
   */
  baseUnit?: string;
  /**
   * @remarks
   * The unit for display.
   * 
   * @example
   * %
   */
  displayUnit?: string;
  /**
   * @remarks
   * The comparison operation. It determines whether to perform a year-over-year or period-over-period comparison.
   * 
   * - GT: Greater than.
   * 
   * - GTE: Greater than or equal to.
   * 
   * - LT: Less than.
   * 
   * - LTE: Less than or equal to.
   * 
   * - EQ: Equal to.
   * 
   * - NE: Not equal to.
   * 
   * - YOY_UP: Year-over-year increase.
   * 
   * - YOY_DOWN: Year-over-year decrease.
   * 
   * @example
   * GT
   */
  oper?: string;
  /**
   * @remarks
   * The threshold for comparison.
   * 
   * @example
   * 50
   */
  value?: number;
  /**
   * @remarks
   * A list of alert levels for different values.
   */
  valueLevelList?: AlertRuleConditionCompareListValueLevelList[];
  /**
   * @remarks
   * The time unit for year-over-year comparison. This parameter is valid only when oper is set to YOY_UP or YOY_DOWN. Valid values: minute, hour, day, week, and month.
   * 
   * @example
   * month
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * The time value for year-over-year comparison. Used with yoyTimeUnit.
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
   * The comparison operator for the threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: Greater than or equal to.
   * 
   * - GreaterThanThreshold: Greater than.
   * 
   * - LessThanOrEqualToThreshold: Less than or equal to.
   * 
   * - LessThanThreshold: Less than.
   * 
   * - NotEqualToThreshold: Not equal to.
   * 
   * - EqualToThreshold: Equal to.
   * 
   * - GreaterThanYesterday: Higher than the value at the same time yesterday.
   * 
   * - LessThanYesterday: Lower than the value at the same time yesterday.
   * 
   * - GreaterThanLastWeek: Higher than the value at the same time last week.
   * 
   * - LessThanLastWeek: Lower than the value at the same time last week.
   * 
   * - GreaterThanLastPeriod: Higher than the value in the previous period.
   * 
   * - LessThanLastPeriod: Lower than the value in the previous period.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The time window for the metric.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The statistical method. The valid values for this parameter are determined by the Statistics column that corresponds to the MetricName of the specified cloud product. Examples of statistical methods for metrics:
   * 
   * - $Maximum: The maximum value.
   * 
   * - $Minimum: The minimum value.
   * 
   * - $Average: The average value.
   * 
   * - $Availability: The availability rate. This is typically used for site monitoring.
   * 
   * Note: The dollar sign ($) is a standard prefix for metrics.
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
   * A list of composite conditions for multiple metrics.
   */
  escalations?: AlertRuleConditionCompositeEscalationEscalations[];
  /**
   * @remarks
   * The alert level that is triggered when the condition is met. Composite metric alerts support only one level.
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The relationship between multiple metric conditions. Valid values: and or or.
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
   * The alert level that is triggered when the condition is met. Expression-based alerts support only one level.
   * 
   * - CRITICAL
   * 
   * - WARNING
   * 
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
   * The comparison operator for the threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: Greater than or equal to.
   * 
   * - GreaterThanThreshold: Greater than.
   * 
   * - LessThanOrEqualToThreshold: Less than or equal to.
   * 
   * - LessThanThreshold: Less than.
   * 
   * - NotEqualToThreshold: Not equal to.
   * 
   * - EqualToThreshold: Equal to.
   * 
   * - GreaterThanYesterday: Higher than the value at the same time yesterday.
   * 
   * - LessThanYesterday: Lower than the value at the same time yesterday.
   * 
   * - GreaterThanLastWeek: Higher than the value at the same time last week.
   * 
   * - LessThanLastWeek: Lower than the value at the same time last week.
   * 
   * - GreaterThanLastPeriod: Higher than the value in the previous period.
   * 
   * - LessThanLastPeriod: Lower than the value in the previous period.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The alert level that is triggered when the condition is met. Expression-based alerts support only one level.
   * 
   * - CRITICAL
   * 
   * - WARNING
   * 
   * - INFO
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * The statistical method. The valid values for this parameter are determined by the Statistics column that corresponds to the MetricName of the specified cloud product. Examples: Maximum, Minimum, and Average.
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
   * A list of conditions. If an alert rule has multiple levels, each level has a corresponding condition object.
   */
  escalations?: AlertRuleConditionSimpleEscalationEscalations[];
  /**
   * @remarks
   * Applicable to the CMS_BASIC_CONDITION type.
   * 
   * The metric associated with the alert condition.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The time window for the metric, in seconds.
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
   * Applicable to the SLS_CONDITION type.
   * 
   * The number of times the condition must be met to trigger an alert. The default value is 1.
   * 
   * @example
   * 1
   */
  alertCount?: number;
  /**
   * @remarks
   * Applicable to the SLS_CONDITION type.
   * 
   * A list of SLS alert conditions.
   */
  caseList?: AlertRuleConditionCaseList[];
  /**
   * @remarks
   * Applicable to the APM_CONDITION type.
   * 
   * A list of Application Performance Management (APM) alert comparison conditions.
   */
  compareList?: AlertRuleConditionCompareList[];
  /**
   * @remarks
   * Applicable to the CMS_BASIC_CONDITION type.
   * 
   * This parameter is valid only when escalationType is set to composite. It specifies the alert condition for composite metrics.
   */
  compositeEscalation?: AlertRuleConditionCompositeEscalation;
  enableSeveritySuppression?: boolean;
  /**
   * @remarks
   * Applicable to the CMS_BASIC_CONDITION type.
   * 
   * Valid values:
   * 
   * - simple: A simple metric condition.
   * 
   * - composite: A composite metric condition.
   * 
   * - express: An expression-based condition.
   * 
   * @example
   * simple
   */
  escalationType?: string;
  /**
   * @remarks
   * This parameter is applicable only to the CMS_BASIC_CONDITION condition type.
   * 
   * This parameter takes effect when escalationType is set to composite. It defines the conditions for a composite alert based on multiple metrics.
   */
  expressEscalation?: AlertRuleConditionExpressEscalation;
  /**
   * @remarks
   * Applicable to the APM_CONDITION type.
   * 
   * The alert level for when no data is available. If you do not specify this parameter, no alert is triggered when no data is available.
   * 
   * @example
   * INFO
   */
  noDataAlertLevel?: string;
  /**
   * @remarks
   * Applicable to the APM_CONDITION type.
   * 
   * The value to use when no data is available.
   * 
   * @example
   * 1
   */
  noDataAppendValue?: string;
  /**
   * @remarks
   * Applicable to the CMS_BASIC_CONDITION type.
   * 
   * The method for handling alerts when no monitoring data is available. Valid values:
   * 
   * - KEEP_LAST_STATE (default): No action is taken.
   * 
   * - INSUFFICIENT_DATA: The alert content indicates that no data is available.
   * 
   * - OK: The status is normal.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The comparison operation. It determines whether to perform a year-over-year or period-over-period comparison.
   * 
   * - GT: Greater than.
   * 
   * - GTE: Greater than or equal to.
   * 
   * - LT: Less than.
   * 
   * - LTE: Less than or equal to.
   * 
   * - EQ: Equal to.
   * 
   * - NE: Not equal to.
   * 
   * - YOY_UP: Year-over-year increase.
   * 
   * - YOY_DOWN: Year-over-year decrease.
   * 
   * @example
   * LT
   */
  oper?: string;
  /**
   * @remarks
   * Applicable to the APM_CONDITION type.
   * 
   * The logical relationship between multiple conditions. Valid values:
   * 
   * - and
   * 
   * - or
   * 
   * @example
   * and
   */
  relation?: string;
  /**
   * @remarks
   * Applicable to the CMS_BASIC_CONDITION type.
   * 
   * This parameter is valid only when escalationType is set to simple. It specifies the alert condition for a single metric.
   */
  simpleEscalation?: AlertRuleConditionSimpleEscalation;
  triggers?: AlertRuleConditionTriggers[];
  /**
   * @remarks
   * The type of the rule condition. Valid values:
   * 
   * - SLS_CONDITION: An SLS alert condition.
   * 
   * - APM_CONDITION: An APM alert condition.
   * 
   * - CMS_BASIC_CONDITION: A basic Cloud Monitor alert condition.
   * 
   * This parameter is required.
   * 
   * @example
   * SLS_CONDITION
   */
  type?: string;
  /**
   * @remarks
   * The threshold that triggers an alert.
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

