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
   * The dynamic baseline minimum deviation or absolute deviation dead zone (UMODEL_METRICSET_CONDITION / APM_SIMPLE_CONDITION). Takes effect only for baseline operators. If |current value − boundary| < absDeviation, no alert is fired. The unit is the same as the metric. The value must be >= 0. A value of 0 means no restriction.
   * 
   * @example
   * 0.0
   */
  absDeviation?: number;
  /**
   * @remarks
   * The aggregate functions (APM_SIMPLE_CONDITION).
   * 
   * @example
   * AVG
   */
  aggregate?: string;
  /**
   * @remarks
   * The consecutive trigger count threshold (type=SLS_MULTI_CONDITION). An alert is fired only after the condition is met N times. Default value: 1.
   * 
   * @example
   * 1
   */
  alertCount?: number;
  /**
   * @remarks
   * The baseline period. Takes effect only for baseline operators. Valid values: AUTO (automatic detection), DAILY (daily), WEEKLY (weekly), and NONE (no period). When set to WEEKLY, the backend automatically expands the historical training window to at least 14 days. Automatic detection does not return the specific detection result.
   * 
   * @example
   * AUTO
   */
  baselinePeriod?: string;
  /**
   * @remarks
   * The multiple comparisons (APM_COMPOSITE_CONDITION).
   */
  compareList?: CompareList[];
  /**
   * @remarks
   * The multi-metric composite trigger configuration for CLOUD_MONITORING_CONDITION when escalationType is set to COMPOSITE. Required fields: relation, severity, times, and escalations.
   */
  compositeEscalation?: CloudMonitoringCompositeEscalation;
  /**
   * @remarks
   * The count comparison operator (type=UMODEL_LOGSET_CONDITION).
   * 
   * @example
   * GTE
   */
  countOperator?: string;
  /**
   * @remarks
   * The count threshold (type=UMODEL_LOGSET_CONDITION).
   * 
   * @example
   * 100
   */
  countThreshold?: number;
  /**
   * @remarks
   * The duration in seconds. Used by PROMETHEUS_SIMPLE and UMODEL_METRICSET.
   * 
   * @example
   * 60
   */
  durationSecs?: number;
  /**
   * @remarks
   * Specifies whether to enable severity suppression to the highest level (type=UMODEL_METRICSET_MULTI_CONDITION / PROMETHEUS_MULTI_CONDITION). Default value: true. When enabled, only the highest severity trigger is reported for the same entity.
   * 
   * @example
   * true
   */
  enableSeveritySuppression?: boolean;
  /**
   * @remarks
   * The expression type for CLOUD_MONITORING_CONDITION. Valid values: SIMPLE, COMPOSITE, EXPRESS, and PROMETHEUS. Only SIMPLE and COMPOSITE are supported in write paths. Specify the corresponding escalation sub-object based on the type.
   * 
   * @example
   * SIMPLE
   */
  escalationType?: string;
  /**
   * @remarks
   * The expression-based trigger configuration for CLOUD_MONITORING_CONDITION when escalationType is set to EXPRESS. This field is output only in read paths.
   */
  expressEscalation?: CloudMonitoringExpressEscalation;
  /**
   * @remarks
   * The raw V1 condition JSON string returned when type is set to UNKNOWN_CONDITION and the read path fails to parse the condition. When the frontend detects that this field is not empty, display it as read-only.
   * 
   * @example
   * Sample value
   */
  legacyRaw?: string;
  /**
   * @remarks
   * Returned when type is set to UNKNOWN_CONDITION. Indicates that this rule cannot be edited through the new API. Submit a ticket to contact the CloudMonitor team.
   * 
   * @example
   * default
   */
  legacyType?: string;
  /**
   * @remarks
   * The log field name (used when type is set to UMODEL_LOGSET_CONDITION and matchOperator is set to CONTAINS, EQUALS, or REGEX).
   * 
   * @example
   * Sample value
   */
  matchField?: string;
  /**
   * @remarks
   * The log match operator (type=UMODEL_LOGSET_CONDITION).
   * 
   * @example
   * PRESENT
   */
  matchOperator?: string;
  /**
   * @remarks
   * The log match value (used when type is set to UMODEL_LOGSET_CONDITION and matchOperator is set to CONTAINS, EQUALS, or REGEX).
   * 
   * @example
   * Sample value
   */
  matchValue?: string;
  /**
   * @remarks
   * The upper bound of the range (used when UMODEL_METRICSET_CONDITION operator is set to IN_RANGE or OUT_OF_RANGE).
   * 
   * @example
   * 1.0
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the range (used when UMODEL_METRICSET_CONDITION operator is set to IN_RANGE or OUT_OF_RANGE).
   * 
   * @example
   * 1.0
   */
  min?: number;
  /**
   * @remarks
   * The no-data alert level (SLS_MULTI_CONDITION). APM and Prometheus conditions have migrated to noDataPolicy and noDataAlertSeverity.
   * 
   * @example
   * INFO
   */
  noDataAlertLevel?: string;
  /**
   * @remarks
   * The no-data alert severity level (PROMETHEUS_SIMPLE_CONDITION / PROMETHEUS_MULTI_CONDITION). Takes effect only when noDataPolicy is set to NO_DATA_TO_ALERT. SLS_MULTI_CONDITION still uses noDataAlertLevel.
   * 
   * @example
   * INFO
   */
  noDataAlertSeverity?: string;
  /**
   * @remarks
   * The value to substitute when no data is available (APM_SIMPLE_CONDITION / APM_COMPOSITE_CONDITION). Nullable.
   * 
   * @example
   * 1.0
   */
  noDataAppendValue?: number;
  /**
   * @remarks
   * The no-data handling policy (CLOUD_MONITORING_CONDITION / PROMETHEUS_MULTI_CONDITION / PROMETHEUS_SIMPLE_CONDITION / APM_SIMPLE_CONDITION / APM_COMPOSITE_CONDITION). Valid values: NO_DATA_TO_OK, NO_DATA_TO_ALERT, KEEP_LAST_STATE, and APPEND_VALUE (APM only).
   * 
   * @example
   * Sample value
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The comparison operator (UMODEL_METRICSET_CONDITION or APM_SIMPLE_CONDITION).
   * 
   * @example
   * GT
   */
  operator?: string;
  /**
   * @remarks
   * The PromQL-based trigger configuration for CLOUD_MONITORING_CONDITION when escalationType is set to PROMETHEUS. This field is output only in read paths.
   */
  prometheus?: CloudMonitoringPrometheusEscalation;
  /**
   * @remarks
   * The logical relationship between conditions (APM_COMPOSITE_CONDITION).
   * 
   * @example
   * AND
   */
  relation?: string;
  /**
   * @remarks
   * The dynamic baseline sensitivity (UMODEL_METRICSET_CONDITION / APM_SIMPLE_CONDITION). Takes effect only when operator is set to ABOVE_UPPER, BELOW_LOWER, or OUT_OF_BAND. Valid values: HIGH (narrowest band, most sensitive), MEDIUM, and LOW (widest band, least sensitive).
   * 
   * @example
   * MEDIUM
   */
  sensitivity?: string;
  /**
   * @remarks
   * The severity level (UMODEL / PROMETHEUS_SIMPLE / APM_COMPOSITE).
   * 
   * @example
   * INFO
   */
  severity?: string;
  /**
   * @remarks
   * The single-metric multi-level trigger configuration for CLOUD_MONITORING_CONDITION when escalationType is set to SIMPLE. Required fields: metricName, period, and escalations.
   */
  simpleEscalation?: CloudMonitoringSimpleEscalation;
  /**
   * @remarks
   * The threshold (UMODEL_METRICSET_CONDITION).
   * 
   * @example
   * 30
   */
  threshold?: number;
  /**
   * @remarks
   * The multi-threshold list (APM_SIMPLE_CONDITION).
   */
  thresholdList?: ThresholdList[];
  /**
   * @remarks
   * The trigger list. This field is polymorphic based on type. CLOUD_MONITORING_CONDITION does not use this field. Use simpleEscalation.escalations or compositeEscalation.escalations instead. For SLS_MULTI_CONDITION, each case contains matchField, matchOperator, matchValue, countOperator, countThreshold, and severity. At least one case is required. For UMODEL_METRICSET_MULTI_CONDITION, each trigger contains severity, durationSecs, and an expression (SIMPLE or COMPOSITE). For PROMETHEUS_MULTI_CONDITION, each trigger contains severity, durationSecs, and an expression (SIMPLE or COMPOSITE). Triggers are sorted by severity priority, and the first match fires.
   */
  triggers?: Triggers[];
  /**
   * @remarks
   * The detection condition type.
   * 
   * This parameter is required.
   * 
   * @example
   * PROMETHEUS_SIMPLE_CONDITION
   */
  type?: string;
  /**
   * @remarks
   * The year-over-year time unit (APM_SIMPLE_CONDITION). Takes effect only when operator is set to YOY_UP or YOY_DOWN.
   * 
   * @example
   * minute
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * The year-over-year time value (APM_SIMPLE_CONDITION). Takes effect only when operator is set to YOY_UP or YOY_DOWN.
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

