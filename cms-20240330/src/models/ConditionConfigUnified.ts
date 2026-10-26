// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CompareList } from "./CompareList";
import { CloudMonitoringCompositeEscalation } from "./CloudMonitoringCompositeEscalation";
import { CloudMonitoringExpressEscalation } from "./CloudMonitoringExpressEscalation";
import { CloudMonitoringPrometheusEscalation } from "./CloudMonitoringPrometheusEscalation";
import { CloudMonitoringSimpleEscalation } from "./CloudMonitoringSimpleEscalation";
import { ThresholdList } from "./ThresholdList";
import { Triggers } from "./Triggers";


export class ConditionConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The minimum deviation or absolute deviation dead zone for dynamic baselines. This parameter takes effect only for baseline operators in UMODEL_METRICSET_CONDITION and APM_SIMPLE_CONDITION. If the absolute difference between the current value and the boundary is less than the absDeviation value, no alert is triggered. The unit is the same as the metric unit. The value must be greater than or equal to 0. A value of 0 indicates no limit.
   * 
   * @example
   * 0.0
   */
  absDeviation?: number;
  /**
   * @remarks
   * The aggregation function used for APM_SIMPLE_CONDITION. For UModel conditions, this semantic has been migrated to QueryConfigUnified, and this field no longer takes effect.
   * 
   * @example
   * AVG
   */
  aggregate?: string;
  /**
   * @remarks
   * The consecutive trigger count threshold for SLS_MULTI_CONDITION. An alert is triggered only after the condition is met for the specified number of consecutive times. Default value: 1.
   * 
   * @example
   * 1
   */
  alertCount?: number;
  /**
   * @remarks
   * The baseline period. This parameter takes effect only for baseline operators. Valid values: AUTO (automatic identification), DAILY (daily), WEEKLY (weekly), and NONE (no period). For weekly baselines, the backend automatically extends the historical training window to 14 days or more. Automatic identification cannot echo specific identification conclusions.
   * 
   * @example
   * AUTO
   */
  baselinePeriod?: string;
  /**
   * @remarks
   * The list of multiple comparisons for APM_COMPOSITE_CONDITION.
   */
  compareList?: CompareList[];
  /**
   * @remarks
   * The multi-metric composite trigger configuration for CLOUD_MONITORING_CONDITION when escalationType is set to COMPOSITE. The relation, severity, times, and escalations parameters are required.
   */
  compositeEscalation?: CloudMonitoringCompositeEscalation;
  /**
   * @remarks
   * The count comparison operator for UMODEL_LOGSET_CONDITION.
   * 
   * @example
   * GTE
   */
  countOperator?: string;
  /**
   * @remarks
   * The count threshold for UMODEL_LOGSET_CONDITION.
   * 
   * @example
   * 100
   */
  countThreshold?: number;
  /**
   * @remarks
   * The duration in seconds. This parameter is directly used for PROMETHEUS_SIMPLE, UMODEL_METRICSET_CONDITION, and UMODEL_LOGSET_CONDITION. For UMODEL_METRICSET_MULTI_CONDITION, it serves as the global default value, and each trigger can override it with its own durationSecs value.
   * 
   * @example
   * 60
   */
  durationSecs?: number;
  /**
   * @remarks
   * Specifies whether to enable severity suppression for UMODEL_METRICSET_MULTI_CONDITION and PROMETHEUS_MULTI_CONDITION. Default value: true. When enabled, only the highest severity trigger is reported for the same entity.
   * 
   * @example
   * true
   */
  enableSeveritySuppression?: boolean;
  /**
   * @remarks
   * The expression type for CLOUD_MONITORING_CONDITION. Valid values: SIMPLE, COMPOSITE, EXPRESS, and PROMETHEUS. The write path only supports SIMPLE and COMPOSITE. Specify the corresponding escalation sub-object based on the type.
   * 
   * @example
   * SIMPLE
   */
  escalationType?: string;
  /**
   * @remarks
   * The expression trigger configuration for CLOUD_MONITORING_CONDITION when escalationType is set to EXPRESS. This parameter is output only in the read path.
   */
  expressEscalation?: CloudMonitoringExpressEscalation;
  /**
   * @remarks
   * The original V1 condition JSON string returned as a fallback when parsing fails in the read path and the type is UNKNOWN_CONDITION. The frontend displays this field as read-only when it is not empty.
   * 
   * @example
   * 示例值
   */
  legacyRaw?: string;
  /**
   * @remarks
   * The legacy type returned when the type is UNKNOWN_CONDITION. This indicates that the rule cannot be edited by using the new API. Submit a ticket to contact the CloudMonitor product team.
   * 
   * @example
   * default
   */
  legacyType?: string;
  /**
   * @remarks
   * The log field name used for UMODEL_LOGSET_CONDITION when matchOperator is set to CONTAINS, EQUALS, or REGEX.
   * 
   * @example
   * 示例值
   */
  matchField?: string;
  /**
   * @remarks
   * The log match operator for UMODEL_LOGSET_CONDITION.
   * 
   * @example
   * PRESENT
   */
  matchOperator?: string;
  /**
   * @remarks
   * The log match value used for UMODEL_LOGSET_CONDITION when matchOperator is set to CONTAINS, EQUALS, or REGEX.
   * 
   * @example
   * 示例值
   */
  matchValue?: string;
  /**
   * @remarks
   * The upper bound of the range used for UMODEL_METRICSET_CONDITION when operator is set to IN_RANGE or OUT_OF_RANGE.
   * 
   * @example
   * 1.0
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the range used for UMODEL_METRICSET_CONDITION when operator is set to IN_RANGE or OUT_OF_RANGE.
   * 
   * @example
   * 1.0
   */
  min?: number;
  /**
   * @remarks
   * The no-data alert level for SLS_MULTI_CONDITION. For APM and Prometheus conditions, this parameter has been migrated to noDataPolicy and noDataAlertSeverity.
   * 
   * @example
   * INFO
   */
  noDataAlertLevel?: string;
  /**
   * @remarks
   * The no-data alert severity. This parameter takes effect for PROMETHEUS_SIMPLE_CONDITION, PROMETHEUS_MULTI_CONDITION, UMODEL_METRICSET_CONDITION, and UMODEL_METRICSET_MULTI_CONDITION when noDataPolicy is set to NO_DATA_TO_ALERT. For UMODEL_METRICSET conditions, this field is required when noDataPolicy is set to NO_DATA_TO_ALERT, and must not be specified for other policies. SLS_MULTI_CONDITION still uses noDataAlertLevel.
   * 
   * @example
   * INFO
   */
  noDataAlertSeverity?: string;
  /**
   * @remarks
   * The compensated value when no data is available for APM_SIMPLE_CONDITION and APM_COMPOSITE_CONDITION. This parameter is nullable.
   * 
   * @example
   * 1.0
   */
  noDataAppendValue?: number;
  /**
   * @remarks
   * The tolerance duration in seconds before no data is determined. This parameter takes effect for UMODEL_METRICSET_CONDITION and UMODEL_METRICSET_MULTI_CONDITION when noDataPolicy is not empty. The noDataPolicy is applied only after no data is continuously reported for longer than this duration. This prevents empty query results in a single cycle caused by UModel data write jitter. The value must be a positive integer. If not specified, the backend uses the fallback value of max(collection interval × 2, 300).
   * 
   * @example
   * 600
   */
  noDataDurationSecs?: number;
  /**
   * @remarks
   * The no-data processing policy for CLOUD_MONITORING_CONDITION, PROMETHEUS_MULTI_CONDITION, PROMETHEUS_SIMPLE_CONDITION, APM_SIMPLE_CONDITION, APM_COMPOSITE_CONDITION, UMODEL_METRICSET_CONDITION, and UMODEL_METRICSET_MULTI_CONDITION. Valid values: NO_DATA_TO_OK (treats no data as normal and recovers existing alerts), NO_DATA_TO_ALERT (triggers an alert for no data), KEEP_LAST_STATE (maintains the last state before no data), and APPEND_VALUE (APM only). If not specified, no-data determination is disabled, and the behavior remains the same as before this feature was released. UMODEL_METRICSET_CONDITION and UMODEL_METRICSET_MULTI_CONDITION do not support APPEND_VALUE because their data sources do not support backfilling.
   * 
   * @example
   * 示例值
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The comparison operator. For UMODEL_METRICSET_CONDITION, valid values are GT (greater than), GE (greater than or equal to), LT (less than), LE (less than or equal to), EQ (equal to), NE (not equal to), IN_RANGE (within the range, requires min and max), OUT_OF_RANGE (outside the range, requires min and max), PRESENT (field exists), NOT_PRESENT (field does not exist), ABOVE_UPPER (dynamic baseline spike), BELOW_LOWER (dynamic baseline drop), and OUT_OF_BAND (bidirectional dynamic baseline, requires sensitivity, do not specify threshold, min, or max). This field is not used for UMODEL_LOGSET_CONDITION. For APM_SIMPLE_CONDITION, valid values are GT, GTE, LT, LTE, EQ, NE, YOY_UP, YOY_DOWN (YOY operators require yoyTimeUnit and yoyTimeValue), ABOVE_UPPER, BELOW_LOWER, and OUT_OF_BAND (dynamic baseline, requires sensitivity).
   * 
   * @example
   * GT
   */
  operator?: string;
  /**
   * @remarks
   * The PromQL trigger configuration for CLOUD_MONITORING_CONDITION when escalationType is set to PROMETHEUS. This parameter is output only in the read path.
   */
  prometheus?: CloudMonitoringPrometheusEscalation;
  /**
   * @remarks
   * The logical relation between conditions for APM_COMPOSITE_CONDITION.
   * 
   * @example
   * AND
   */
  relation?: string;
  /**
   * @remarks
   * The dynamic baseline sensitivity for UMODEL_METRICSET_CONDITION and APM_SIMPLE_CONDITION. This parameter takes effect only when operator is set to ABOVE_UPPER, BELOW_LOWER, or OUT_OF_BAND. Valid values: HIGH (narrowest band and most sensitive), MEDIUM, and LOW (widest band and least sensitive).
   * 
   * @example
   * MEDIUM
   */
  sensitivity?: string;
  /**
   * @remarks
   * The severity level for UMODEL_METRICSET_CONDITION, UMODEL_LOGSET_CONDITION, PROMETHEUS_SIMPLE, and APM_COMPOSITE.
   * 
   * @example
   * INFO
   */
  severity?: string;
  /**
   * @remarks
   * The single-metric multi-level trigger configuration for CLOUD_MONITORING_CONDITION when escalationType is set to SIMPLE. The metricName, period, and escalations parameters are required.
   */
  simpleEscalation?: CloudMonitoringSimpleEscalation;
  /**
   * @remarks
   * The threshold used for UMODEL_METRICSET_CONDITION when a non-range operator is specified.
   * 
   * @example
   * 30
   */
  threshold?: number;
  /**
   * @remarks
   * The list of multiple thresholds for APM_SIMPLE_CONDITION.
   */
  thresholdList?: ThresholdList[];
  /**
   * @remarks
   * The list of triggers. This field is polymorphic based on the type. CLOUD_MONITORING_CONDITION does not use this field; use simpleEscalation.escalations or compositeEscalation.escalations instead. For SLS_MULTI_CONDITION, each case includes matchField, matchOperator, matchValue, countOperator, countThreshold, and severity, and at least one case is required. For UMODEL_METRICSET_MULTI_CONDITION, each trigger includes severity, durationSecs, and an expression (SIMPLE or COMPOSITE). For PROMETHEUS_MULTI_CONDITION, each trigger includes severity, durationSecs, and an expression (SIMPLE or COMPOSITE). Triggers are sorted by severity priority, and the first matched trigger is executed.
   */
  triggers?: Triggers[];
  /**
   * @remarks
   * The detection condition type. Valid values and required fields: PROMETHEUS_SIMPLE_CONDITION (requires operator, threshold, durationSecs, and severity), UMODEL_METRICSET_CONDITION (requires operator, durationSecs, and severity; requires threshold for non-range operators; requires min and max when operator is IN_RANGE or OUT_OF_RANGE; noDataPolicy and noDataDurationSecs are optional, but noDataAlertSeverity is required when noDataPolicy is NO_DATA_TO_ALERT), UMODEL_LOGSET_CONDITION (requires matchOperator, durationSecs, and severity; requires matchField and matchValue when matchOperator is CONTAINS, EQUALS, or REGEX; countOperator and countThreshold are optional), UMODEL_METRICSET_MULTI_CONDITION (requires triggers; durationSecs as global default and enableSeveritySuppression are optional; noDataPolicy and noDataDurationSecs are optional, but noDataAlertSeverity is required when noDataPolicy is NO_DATA_TO_ALERT), APM_SIMPLE_CONDITION (requires operator and aggregate; requires thresholdList or threshold; requires yoyTimeUnit and yoyTimeValue when operator is YOY_UP or YOY_DOWN; noDataPolicy and noDataAppendValue are optional), APM_COMPOSITE_CONDITION (requires compareList, relation, and severity; noDataPolicy and noDataAppendValue are optional), CLOUD_MONITORING_CONDITION (requires escalationType; requires simpleEscalation when escalationType is SIMPLE; requires compositeEscalation when escalationType is COMPOSITE; noDataPolicy is optional), and UNKNOWN_CONDITION (read-only fallback, do not use in the write path). Non-enum values such as SLS_CONDITION or CMS_BASIC_CONDITION are prohibited. The backend returns an Invalidtype 400 error for invalid values.
   * 
   * This parameter is required.
   * 
   * @example
   * PROMETHEUS_SIMPLE_CONDITION
   */
  type?: string;
  /**
   * @remarks
   * The year-over-year time unit for APM_SIMPLE_CONDITION. This parameter takes effect only when operator is set to YOY_UP or YOY_DOWN.
   * 
   * @example
   * minute
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * The year-over-year time value for APM_SIMPLE_CONDITION. This parameter takes effect only when operator is set to YOY_UP or YOY_DOWN.
   * 
   * @example
   * 1
   */
  yoyTimeValue?: number;
  static names(): { [key: string]: string } {
    return {
      absDeviation: 'absDeviation',
      aggregate: 'aggregate',
      alertCount: 'alertCount',
      baselinePeriod: 'baselinePeriod',
      compareList: 'compareList',
      compositeEscalation: 'compositeEscalation',
      countOperator: 'countOperator',
      countThreshold: 'countThreshold',
      durationSecs: 'durationSecs',
      enableSeveritySuppression: 'enableSeveritySuppression',
      escalationType: 'escalationType',
      expressEscalation: 'expressEscalation',
      legacyRaw: 'legacyRaw',
      legacyType: 'legacyType',
      matchField: 'matchField',
      matchOperator: 'matchOperator',
      matchValue: 'matchValue',
      max: 'max',
      min: 'min',
      noDataAlertLevel: 'noDataAlertLevel',
      noDataAlertSeverity: 'noDataAlertSeverity',
      noDataAppendValue: 'noDataAppendValue',
      noDataDurationSecs: 'noDataDurationSecs',
      noDataPolicy: 'noDataPolicy',
      operator: 'operator',
      prometheus: 'prometheus',
      relation: 'relation',
      sensitivity: 'sensitivity',
      severity: 'severity',
      simpleEscalation: 'simpleEscalation',
      threshold: 'threshold',
      thresholdList: 'thresholdList',
      triggers: 'triggers',
      type: 'type',
      yoyTimeUnit: 'yoyTimeUnit',
      yoyTimeValue: 'yoyTimeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absDeviation: 'number',
      aggregate: 'string',
      alertCount: 'number',
      baselinePeriod: 'string',
      compareList: { 'type': 'array', 'itemType': CompareList },
      compositeEscalation: CloudMonitoringCompositeEscalation,
      countOperator: 'string',
      countThreshold: 'number',
      durationSecs: 'number',
      enableSeveritySuppression: 'boolean',
      escalationType: 'string',
      expressEscalation: CloudMonitoringExpressEscalation,
      legacyRaw: 'string',
      legacyType: 'string',
      matchField: 'string',
      matchOperator: 'string',
      matchValue: 'string',
      max: 'number',
      min: 'number',
      noDataAlertLevel: 'string',
      noDataAlertSeverity: 'string',
      noDataAppendValue: 'number',
      noDataDurationSecs: 'number',
      noDataPolicy: 'string',
      operator: 'string',
      prometheus: CloudMonitoringPrometheusEscalation,
      relation: 'string',
      sensitivity: 'string',
      severity: 'string',
      simpleEscalation: CloudMonitoringSimpleEscalation,
      threshold: 'number',
      thresholdList: { 'type': 'array', 'itemType': ThresholdList },
      triggers: { 'type': 'array', 'itemType': Triggers },
      type: 'string',
      yoyTimeUnit: 'string',
      yoyTimeValue: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.compareList)) {
      $dara.Model.validateArray(this.compareList);
    }
    if(this.compositeEscalation && typeof (this.compositeEscalation as any).validate === 'function') {
      (this.compositeEscalation as any).validate();
    }
    if(this.expressEscalation && typeof (this.expressEscalation as any).validate === 'function') {
      (this.expressEscalation as any).validate();
    }
    if(this.prometheus && typeof (this.prometheus as any).validate === 'function') {
      (this.prometheus as any).validate();
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

