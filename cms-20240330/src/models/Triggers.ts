// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TriggerConditions } from "./TriggerConditions";


export class Triggers extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for CLOUD_MONITORING_CONDITION.
   * 
   * @example
   * SampleValue
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The match expression for SLS_MULTI_CONDITION. Corresponds to the V1 condition field and is preserved as-is without parsing.
   * 
   * @example
   * SampleValue
   */
  condition?: string;
  /**
   * @remarks
   * The list of sub-conditions for UMODEL_METRICSET_MULTI / PROMETHEUS_MULTI with expressionType=COMPOSITE. Each item contains queryName, operator, and threshold.
   */
  conditions?: TriggerConditions[];
  /**
   * @remarks
   * The count match expression for SLS_MULTI_CONDITION. Corresponds to the V1 countCondition field and is preserved as-is without parsing.
   * 
   * @example
   * SampleValue
   */
  countCondition?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path for SLS_MULTI_CONDITION countOperator is disabled. Use countCondition instead.
   * 
   * @example
   * GTE
   * 
   * @deprecated
   */
  countOperator?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path for SLS_MULTI_CONDITION countOperator is disabled. Use countCondition instead.
   * 
   * @example
   * 100
   * 
   * @deprecated
   */
  countThreshold?: number;
  /**
   * @remarks
   * The duration in seconds for which data must continuously meet the condition to fire an alert. If not specified, the value is inherited from conditionConfig.durationSecs. Used by UMODEL_METRICSET_MULTI_CONDITION / PROMETHEUS_MULTI_CONDITION.
   * 
   * @example
   * 1
   */
  durationSecs?: number;
  /**
   * @remarks
   * The expression type. For UMODEL_METRICSET_MULTI_CONDITION / PROMETHEUS_MULTI_CONDITION, valid values are SIMPLE and COMPOSITE.
   * 
   * @example
   * default
   */
  expressionType?: string;
  /**
   * @remarks
   * The logic operator for UMODEL_METRICSET_MULTI / PROMETHEUS_MULTI with expressionType=COMPOSITE. Valid values: AND, OR, and UNLESS.
   * 
   * @example
   * AND
   */
  logicOperator?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path for SLS_MULTI_CONDITION matchField is disabled. Use condition instead.
   * 
   * @example
   * SampleValue
   * 
   * @deprecated
   */
  matchField?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path for SLS_MULTI_CONDITION matchField is disabled. Use condition instead.
   * 
   * @example
   * PRESENT
   * 
   * @deprecated
   */
  matchOperator?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path for SLS_MULTI_CONDITION matchField is disabled. Use condition instead.
   * 
   * @example
   * SampleValue
   * 
   * @deprecated
   */
  matchValue?: string;
  /**
   * @remarks
   * The upper bound of the range for UMODEL_METRICSET_MULTI with expressionType=SIMPLE. Required when operator is IN_RANGE or OUT_OF_RANGE. The value must be greater than or equal to min.
   * 
   * @example
   * 1.0
   */
  max?: number;
  /**
   * @remarks
   * The metric name for CLOUD_MONITORING_CONDITION with expressionType=COMPOSITE. For SIMPLE, the metric name is specified at the conditionConfig level.
   * 
   * @example
   * SampleMetricName
   */
  metricName?: string;
  /**
   * @remarks
   * The lower bound of the range for UMODEL_METRICSET_MULTI with expressionType=SIMPLE. Required when operator is IN_RANGE or OUT_OF_RANGE.
   * 
   * @example
   * 1.0
   */
  min?: number;
  /**
   * @remarks
   * The operator. For UMODEL_METRICSET_MULTI / PROMETHEUS_MULTI with expressionType=SIMPLE, this is a comparison operator. Valid values: GT, GE, LT, LE, EQ, NE, IN_RANGE, OUT_OF_RANGE, PRESENT, NOT_PRESENT, ABOVE_UPPER, BELOW_LOWER, and OUT_OF_BAND. For SLS_MULTI_CONDITION, this aligns with the V1 caseList.type. Valid values: HAS_DATA, HAS_DATA_COUNT, HAS_DATA_MATCH, and HAS_DATA_MATCH_COUNT.
   * 
   * @example
   * GT
   */
  operator?: string;
  /**
   * @remarks
   * The collection period in seconds for CLOUD_MONITORING_CONDITION with expressionType=COMPOSITE. For SIMPLE, the period is specified at the conditionConfig level.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The precondition for CLOUD_MONITORING_CONDITION.
   * 
   * @example
   * SampleValue
   */
  preCondition?: string;
  /**
   * @remarks
   * The referenced query name for UMODEL_METRICSET_MULTI / PROMETHEUS_MULTI with expressionType=SIMPLE. Corresponds to QueryConfigUnified.queries[].name.
   * 
   * @example
   * SampleMetricName
   */
  queryName?: string;
  /**
   * @remarks
   * The severity level. Priority order: CRITICAL > ERROR > WARN / WARNING > INFO. When multiple triggers exist, they are sorted by this priority, and the first match fires. This takes effect for SLS_MULTI_CONDITION and CLOUD_MONITORING_CONDITION with expressionType=SIMPLE.
   * 
   * @example
   * INFO
   */
  severity?: string;
  /**
   * @remarks
   * The statistics method for CLOUD_MONITORING_CONDITION.
   * 
   * @example
   * SampleValue
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold. For CLOUD_MONITORING_CONDITION, this is a string. For UMODEL_METRICSET_MULTI / PROMETHEUS_MULTI, this is a numeric value.
   */
  threshold?: any;
  /**
   * @remarks
   * The number of consecutive triggers for CLOUD_MONITORING_CONDITION with expressionType=SIMPLE. Each entry is configured independently.
   * 
   * @example
   * 1
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

