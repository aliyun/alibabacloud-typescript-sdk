// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TriggerConditions } from "./TriggerConditions";


export class Triggers extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for CLOUD_MONITORING_CONDITION.
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The list of sub-conditions for UMODEL_METRICSET_MULTI or PROMETHEUS_MULTI with expressionType=COMPOSITE. Each item contains queryName, operator, and threshold.
   */
  conditions?: TriggerConditions[];
  /**
   * @remarks
   * The count comparison operator for SLS_MULTI_CONDITION. Valid values: GTE, GT, EQ, LTE, and LT.
   */
  countOperator?: string;
  /**
   * @remarks
   * The count threshold for SLS_MULTI_CONDITION. An alert is triggered when this threshold is met.
   */
  countThreshold?: number;
  /**
   * @remarks
   * The duration in seconds during which data must continuously meet the condition before an alert is triggered. If this parameter is not specified, the value of conditionConfig.durationSecs is inherited. This parameter is used by UMODEL_METRICSET_MULTI_CONDITION and PROMETHEUS_MULTI_CONDITION.
   */
  durationSecs?: number;
  /**
   * @remarks
   * The expression type. Valid values: SIMPLE and COMPOSITE. This parameter takes effect for UMODEL_METRICSET_MULTI_CONDITION and PROMETHEUS_MULTI_CONDITION.
   */
  expressionType?: string;
  /**
   * @remarks
   * The logical operator for UMODEL_METRICSET_MULTI or PROMETHEUS_MULTI with expressionType=COMPOSITE. Valid values: AND, OR, and UNLESS.
   */
  logicOperator?: string;
  /**
   * @remarks
   * The log field name for SLS_MULTI_CONDITION. This parameter is required when matchOperator is set to CONTAINS, EQUALS, or REGEX. When matchOperator is set to PRESENT or NOT_PRESENT, specify the field name.
   */
  matchField?: string;
  /**
   * @remarks
   * The log match operator for SLS_MULTI_CONDITION. Valid values: PRESENT, NOT_PRESENT, CONTAINS, EQUALS, and REGEX. If this parameter is left empty, any data matches.
   */
  matchOperator?: string;
  /**
   * @remarks
   * The log match value for SLS_MULTI_CONDITION. This parameter is required when matchOperator is set to CONTAINS, EQUALS, or REGEX.
   */
  matchValue?: string;
  /**
   * @remarks
   * The upper bound of the range for UMODEL_METRICSET_MULTI with expressionType=SIMPLE. This parameter is required when operator is set to IN_RANGE or OUT_OF_RANGE. The value must be greater than or equal to min.
   */
  max?: number;
  /**
   * @remarks
   * The metric name. This parameter is used for CLOUD_MONITORING_CONDITION with expressionType=COMPOSITE. For SIMPLE, the metric name is specified at the conditionConfig level by the metricName parameter.
   */
  metricName?: string;
  /**
   * @remarks
   * The lower bound of the range for UMODEL_METRICSET_MULTI with expressionType=SIMPLE. This parameter is required when operator is set to IN_RANGE or OUT_OF_RANGE.
   */
  min?: number;
  /**
   * @remarks
   * The comparison operator for UMODEL_METRICSET_MULTI or PROMETHEUS_MULTI with expressionType=SIMPLE.
   */
  operator?: string;
  /**
   * @remarks
   * The aggregation period in seconds. This parameter is used for CLOUD_MONITORING_CONDITION with expressionType=COMPOSITE. For SIMPLE, the period is specified at the conditionConfig level by the period parameter.
   */
  period?: number;
  /**
   * @remarks
   * The precondition for CLOUD_MONITORING_CONDITION.
   */
  preCondition?: string;
  /**
   * @remarks
   * The referenced query name for UMODEL_METRICSET_MULTI or PROMETHEUS_MULTI with expressionType=SIMPLE. This corresponds to QueryConfigUnified.queries[].name.
   */
  queryName?: string;
  /**
   * @remarks
   * The severity level. Priority order: CRITICAL > ERROR > WARN / WARNING > INFO. When multiple triggers exist, they are sorted by this priority, and the first match triggers the alert. This parameter takes effect for SLS_MULTI_CONDITION and CLOUD_MONITORING_CONDITION with expressionType=SIMPLE.
   */
  severity?: string;
  /**
   * @remarks
   * The statistical method for CLOUD_MONITORING_CONDITION.
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold value. For CLOUD_MONITORING_CONDITION, this is a string. For UMODEL_METRICSET_MULTI and PROMETHEUS_MULTI, this is a numeric value.
   */
  threshold?: any;
  /**
   * @remarks
   * The number of consecutive times the condition must be met before an alert is triggered. This parameter is used for CLOUD_MONITORING_CONDITION with expressionType=SIMPLE and is set independently for each entry.
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'comparisonOperator',
      conditions: 'conditions',
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
      conditions: { 'type': 'array', 'itemType': TriggerConditions },
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

