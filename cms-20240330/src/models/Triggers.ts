// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TriggerConditions } from "./TriggerConditions";


export class Triggers extends $dara.Model {
  /**
   * @remarks
   * The comparison operator when the condition type is CLOUD_MONITORING_CONDITION.
   * 
   * @example
   * SampleValue
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The match expression when the condition type is SLS_MULTI_CONDITION. This corresponds to the V1 condition and is preserved as-is without parsing.
   * 
   * @example
   * SampleValue
   */
  condition?: string;
  /**
   * @remarks
   * The list of sub-conditions when the condition type is UMODEL_METRICSET_MULTI or PROMETHEUS_MULTI with expressionType=COMPOSITE. Each item contains queryName, operator, and threshold.
   */
  conditions?: TriggerConditions[];
  /**
   * @remarks
   * The count match expression when the condition type is SLS_MULTI_CONDITION. This corresponds to the V1 countCondition and is preserved as-is without parsing.
   * 
   * @example
   * SampleValue
   */
  countCondition?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path for SLS_MULTI_CONDITION has been disabled. Use countCondition instead.
   * 
   * @example
   * GTE
   * 
   * @deprecated
   */
  countOperator?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path for SLS_MULTI_CONDITION has been disabled. Use countCondition instead.
   * 
   * @example
   * 100
   * 
   * @deprecated
   */
  countThreshold?: number;
  /**
   * @remarks
   * The duration in seconds during which data must continuously meet the condition before an alert is triggered. If not specified, the value is inherited from conditionConfig.durationSecs. This parameter is used by UMODEL_METRICSET_MULTI_CONDITION and PROMETHEUS_MULTI_CONDITION.
   * 
   * @example
   * 1
   */
  durationSecs?: number;
  /**
   * @remarks
   * The expression type. Set to SIMPLE or COMPOSITE when the condition type is UMODEL_METRICSET_MULTI_CONDITION or PROMETHEUS_MULTI_CONDITION.
   * 
   * @example
   * default
   */
  expressionType?: string;
  /**
   * @remarks
   * The logical operator when the condition type is UMODEL_METRICSET_MULTI or PROMETHEUS_MULTI with expressionType=COMPOSITE. Valid values: AND, OR, and UNLESS.
   * 
   * @example
   * AND
   */
  logicOperator?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path for SLS_MULTI_CONDITION has been disabled. Use condition instead.
   * 
   * @example
   * SampleValue
   * 
   * @deprecated
   */
  matchField?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path for SLS_MULTI_CONDITION has been disabled. Use condition instead.
   * 
   * @example
   * PRESENT
   * 
   * @deprecated
   */
  matchOperator?: string;
  /**
   * @remarks
   * **[Deprecated]** The write path for SLS_MULTI_CONDITION has been disabled. Use condition instead.
   * 
   * @example
   * SampleValue
   * 
   * @deprecated
   */
  matchValue?: string;
  /**
   * @remarks
   * The upper bound of the range when the condition type is UMODEL_METRICSET_MULTI with expressionType=SIMPLE. This parameter is required when operator is set to IN_RANGE or OUT_OF_RANGE. The value must be greater than or equal to min.
   * 
   * @example
   * 1.0
   */
  max?: number;
  /**
   * @remarks
   * The metric name when the condition type is CLOUD_MONITORING_CONDITION with expressionType=COMPOSITE. For SIMPLE expression type, the metric name is specified at the conditionConfig level by the metricName parameter.
   * 
   * @example
   * SampleMetricName
   */
  metricName?: string;
  /**
   * @remarks
   * The lower bound of the range when the condition type is UMODEL_METRICSET_MULTI with expressionType=SIMPLE. This parameter is required when operator is set to IN_RANGE or OUT_OF_RANGE.
   * 
   * @example
   * 1.0
   */
  min?: number;
  /**
   * @remarks
   * The operator. For UMODEL_METRICSET_MULTI or PROMETHEUS_MULTI with expressionType=SIMPLE, this is a comparison operator (GT/GE/LT/LE/EQ/NE/IN_RANGE/OUT_OF_RANGE/PRESENT/NOT_PRESENT/ABOVE_UPPER/BELOW_LOWER/OUT_OF_BAND). For SLS_MULTI_CONDITION, this is aligned with the V1 caseList.type (HAS_DATA/HAS_DATA_COUNT/HAS_DATA_MATCH/HAS_DATA_MATCH_COUNT).
   * 
   * @example
   * GT
   */
  operator?: string;
  /**
   * @remarks
   * The collection period in seconds when the condition type is CLOUD_MONITORING_CONDITION with expressionType=COMPOSITE. For SIMPLE expression type, the period is specified at the conditionConfig level by the period parameter.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The precondition when the condition type is CLOUD_MONITORING_CONDITION.
   * 
   * @example
   * SampleValue
   */
  preCondition?: string;
  /**
   * @remarks
   * The referenced query name when the condition type is UMODEL_METRICSET_MULTI or PROMETHEUS_MULTI with expressionType=SIMPLE. This corresponds to QueryConfigUnified.queries[].name.
   * 
   * @example
   * SampleMetricName
   */
  queryName?: string;
  /**
   * @remarks
   * The severity level. The priority order is CRITICAL > ERROR > WARN / WARNING > INFO. When multiple triggers exist, they are sorted by this priority, and the first match triggers the alert. This parameter takes effect when the condition type is SLS_MULTI_CONDITION or CLOUD_MONITORING_CONDITION with expressionType=SIMPLE.
   * 
   * @example
   * INFO
   */
  severity?: string;
  /**
   * @remarks
   * The statistical method when the condition type is CLOUD_MONITORING_CONDITION.
   * 
   * @example
   * SampleValue
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold value. For CLOUD_MONITORING_CONDITION, this is a string. For UMODEL_METRICSET_MULTI and PROMETHEUS_MULTI, this is a numeric value.
   * 
   * @example
   * 90
   */
  threshold?: any;
  /**
   * @remarks
   * The number of consecutive times the condition must be met before an alert is triggered when the condition type is CLOUD_MONITORING_CONDITION with expressionType=SIMPLE. Each entry has its own independent setting.
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

