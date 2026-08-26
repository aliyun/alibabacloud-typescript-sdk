// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TriggerConditions } from "./TriggerConditions";


export class Triggers extends $dara.Model {
  /**
   * @remarks
   * The comparison operator. This parameter applies to CLOUD_MONITORING_CONDITION.
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The match expression for SLS_MULTI_CONDITION. This corresponds to the V1 condition parameter and is preserved as-is without parsing.
   */
  condition?: string;
  /**
   * @remarks
   * The list of sub-conditions. This parameter applies to UMODEL_METRICSET_MULTI and PROMETHEUS_MULTI with expressionType=COMPOSITE. Each item contains queryName, operator, and threshold.
   */
  conditions?: TriggerConditions[];
  /**
   * @remarks
   * The count match expression for SLS_MULTI_CONDITION. This corresponds to the V1 countCondition parameter and is preserved as-is without parsing.
   */
  countCondition?: string;
  /**
   * @remarks
   * **[Deprecated]** The SLS_MULTI_CONDITION write path is disabled. Use the countCondition parameter instead.
   * 
   * @deprecated
   */
  countOperator?: string;
  /**
   * @remarks
   * **[Deprecated]** The SLS_MULTI_CONDITION write path is disabled. Use the countCondition parameter instead.
   * 
   * @deprecated
   */
  countThreshold?: number;
  /**
   * @remarks
   * The duration in seconds for which data must continuously meet the condition to trigger an alert. If not specified, the value is inherited from conditionConfig.durationSecs. This parameter is used by UMODEL_METRICSET_MULTI_CONDITION and PROMETHEUS_MULTI_CONDITION.
   */
  durationSecs?: number;
  /**
   * @remarks
   * The expression type. Valid values: SIMPLE and COMPOSITE. This parameter applies to UMODEL_METRICSET_MULTI_CONDITION and PROMETHEUS_MULTI_CONDITION.
   */
  expressionType?: string;
  /**
   * @remarks
   * The logical operator. This parameter applies to UMODEL_METRICSET_MULTI and PROMETHEUS_MULTI with expressionType=COMPOSITE. Valid values: AND, OR, and UNLESS.
   */
  logicOperator?: string;
  /**
   * @remarks
   * **[Deprecated]** The SLS_MULTI_CONDITION write path is disabled. Use the condition parameter instead.
   * 
   * @deprecated
   */
  matchField?: string;
  /**
   * @remarks
   * **[Deprecated]** The SLS_MULTI_CONDITION write path is disabled. Use the condition parameter instead.
   * 
   * @deprecated
   */
  matchOperator?: string;
  /**
   * @remarks
   * **[Deprecated]** The SLS_MULTI_CONDITION write path is disabled. Use the condition parameter instead.
   * 
   * @deprecated
   */
  matchValue?: string;
  /**
   * @remarks
   * The upper bound of the range. This parameter applies to UMODEL_METRICSET_MULTI with expressionType=SIMPLE. This parameter is required when operator is set to IN_RANGE or OUT_OF_RANGE. The value must be greater than or equal to min.
   */
  max?: number;
  /**
   * @remarks
   * The metric name. This parameter applies to CLOUD_MONITORING_CONDITION with expressionType=COMPOSITE. For SIMPLE, the metric name is specified at the conditionConfig level by the metricName parameter.
   */
  metricName?: string;
  /**
   * @remarks
   * The lower bound of the range. This parameter applies to UMODEL_METRICSET_MULTI with expressionType=SIMPLE. This parameter is required when operator is set to IN_RANGE or OUT_OF_RANGE.
   */
  min?: number;
  /**
   * @remarks
   * The operator. For UMODEL_METRICSET_MULTI and PROMETHEUS_MULTI with expressionType=SIMPLE, this is a comparison operator. Valid values: GT, GE, LT, LE, EQ, NE, IN_RANGE, OUT_OF_RANGE, PRESENT, and NOT_PRESENT. For SLS_MULTI_CONDITION, this is aligned with V1 caseList.type. Valid values: HAS_DATA, HAS_DATA_COUNT, HAS_DATA_MATCH, and HAS_DATA_MATCH_COUNT.
   */
  operator?: string;
  /**
   * @remarks
   * The aggregation period in seconds. This parameter applies to CLOUD_MONITORING_CONDITION with expressionType=COMPOSITE. For SIMPLE, the period is specified at the conditionConfig level by the period parameter.
   */
  period?: number;
  /**
   * @remarks
   * The precondition. This parameter applies to CLOUD_MONITORING_CONDITION.
   */
  preCondition?: string;
  /**
   * @remarks
   * The referenced query name. This parameter applies to UMODEL_METRICSET_MULTI and PROMETHEUS_MULTI with expressionType=SIMPLE. The value corresponds to QueryConfigUnified.queries[].name.
   */
  queryName?: string;
  /**
   * @remarks
   * The severity level. Priority order: CRITICAL > ERROR > WARN / WARNING > INFO. Multiple triggers are sorted by this priority, and the first match triggers the alert. This parameter takes effect when the type is SLS_MULTI_CONDITION or CLOUD_MONITORING_CONDITION with expressionType=SIMPLE.
   */
  severity?: string;
  /**
   * @remarks
   * The statistical method. This parameter applies to CLOUD_MONITORING_CONDITION.
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold value. For CLOUD_MONITORING_CONDITION, this is a string. For UMODEL_METRICSET_MULTI and PROMETHEUS_MULTI, this is a numeric value.
   */
  threshold?: any;
  /**
   * @remarks
   * The number of consecutive times the condition must be met to trigger the alert. Each entry has its own setting. This parameter applies to CLOUD_MONITORING_CONDITION with expressionType=SIMPLE.
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'comparisonOperator',
      condition: 'condition',
      conditions: 'conditions',
      countCondition: 'countCondition',
      countOperator: 'countOperator',
      countThreshold: 'countThreshold',
      durationSecs: 'durationSecs',
      expressionType: 'expressionType',
      logicOperator: 'logicOperator',
      matchField: 'matchField',
      matchOperator: 'matchOperator',
      matchValue: 'matchValue',
      max: 'max',
      metricName: 'metricName',
      min: 'min',
      operator: 'operator',
      period: 'period',
      preCondition: 'preCondition',
      queryName: 'queryName',
      severity: 'severity',
      statistics: 'statistics',
      threshold: 'threshold',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      condition: 'string',
      conditions: { 'type': 'array', 'itemType': TriggerConditions },
      countCondition: 'string',
      countOperator: 'string',
      countThreshold: 'number',
      durationSecs: 'number',
      expressionType: 'string',
      logicOperator: 'string',
      matchField: 'string',
      matchOperator: 'string',
      matchValue: 'string',
      max: 'number',
      metricName: 'string',
      min: 'number',
      operator: 'string',
      period: 'number',
      preCondition: 'string',
      queryName: 'string',
      severity: 'string',
      statistics: 'string',
      threshold: 'any',
      times: 'number',
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

