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
   * The minimum dynamic baseline deviation or absolute deviation dead zone (UMODEL_METRICSET_CONDITION / APM_SIMPLE_CONDITION, effective only for baseline operators). No alert is triggered if |current value - boundary| < absDeviation. The unit is the same as the metric. Valid values: >=0. A value of 0 indicates no limit.
   * 
   * @example
   * 0.0
   */
  absDeviation?: number;
  /**
   * @remarks
   * The aggregation function (APM_SIMPLE_CONDITION).
   * 
   * @example
   * AVG
   */
  aggregate?: string;
  /**
   * @remarks
   * The consecutive trigger count threshold (type=SLS_MULTI_CONDITION). An alert is triggered only after the condition is met N times. Default value: 1.
   * 
   * @example
   * 1
   */
  alertCount?: number;
  /**
   * @remarks
   * The baseline period (effective only for baseline operators). Valid values: AUTO (automatic identification), DAILY (daily), WEEKLY (weekly), and NONE (no period). For weekly periods, the backend automatically expands the historical training window to 14 days or more. Automatic identification cannot return specific identification results.
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
   * The multi-metric composite trigger configuration for CLOUD_MONITORING_CONDITION with escalationType=COMPOSITE. The relation, severity, times, and escalations parameters are required.
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
   * The duration in seconds. This parameter is used by PROMETHEUS_SIMPLE and UMODEL_METRICSET.
   * 
   * @example
   * 60
   */
  durationSecs?: number;
  /**
   * @remarks
   * Specifies whether to enable severity-based highest-level suppression (type=UMODEL_METRICSET_MULTI_CONDITION / PROMETHEUS_MULTI_CONDITION). Default value: true. When enabled, only the highest-level trigger for the same entity is reported.
   * 
   * @example
   * true
   */
  enableSeveritySuppression?: boolean;
  /**
   * @remarks
   * The expression type for CLOUD_MONITORING_CONDITION. Valid values: SIMPLE, COMPOSITE, EXPRESS, and PROMETHEUS. Only SIMPLE and COMPOSITE are supported for write paths. You must fill in the corresponding escalation sub-object based on the type.
   * 
   * @example
   * SIMPLE
   */
  escalationType?: string;
  /**
   * @remarks
   * The expression trigger configuration for CLOUD_MONITORING_CONDITION with escalationType=EXPRESS. This parameter is output only for read paths.
   */
  expressEscalation?: CloudMonitoringExpressEscalation;
  /**
   * @remarks
   * The original V1 condition JSON string returned when type=UNKNOWN_CONDITION and read path parsing fails as a fallback. The frontend displays this field as read-only when it is not empty.
   * 
   * @example
   * 示例值
   */
  legacyRaw?: string;
  /**
   * @remarks
   * The legacy type returned when type=UNKNOWN_CONDITION. This parameter indicates that this rule cannot be edited on the new API. Submit a ticket to contact the CloudMonitor product team.
   * 
   * @example
   * default
   */
  legacyType?: string;
  /**
   * @remarks
   * The log field name. This parameter is used when type=UMODEL_LOGSET_CONDITION and matchOperator=CONTAINS, EQUALS, or REGEX.
   * 
   * @example
   * 示例值
   */
  matchField?: string;
  /**
   * @remarks
   * The log matching operator (type=UMODEL_LOGSET_CONDITION).
   * 
   * @example
   * PRESENT
   */
  matchOperator?: string;
  /**
   * @remarks
   * The log matching value. This parameter is used when type=UMODEL_LOGSET_CONDITION and matchOperator=CONTAINS, EQUALS, or REGEX.
   * 
   * @example
   * 示例值
   */
  matchValue?: string;
  /**
   * @remarks
   * The upper bound of the range. This parameter is used when UMODEL_METRICSET_CONDITION and operator=IN_RANGE or OUT_OF_RANGE.
   * 
   * @example
   * 1.0
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the range. This parameter is used when UMODEL_METRICSET_CONDITION and operator=IN_RANGE or OUT_OF_RANGE.
   * 
   * @example
   * 1.0
   */
  min?: number;
  /**
   * @remarks
   * The no-data alert level (SLS_MULTI_CONDITION). APM and Prometheus conditions have been migrated to noDataPolicy and noDataAlertSeverity.
   * 
   * @example
   * INFO
   */
  noDataAlertLevel?: string;
  /**
   * @remarks
   * The no-data alert severity (PROMETHEUS_SIMPLE_CONDITION / PROMETHEUS_MULTI_CONDITION). This parameter takes effect when noDataPolicy=NO_DATA_TO_ALERT. SLS_MULTI_CONDITION still uses noDataAlertLevel.
   * 
   * @example
   * INFO
   */
  noDataAlertSeverity?: string;
  /**
   * @remarks
   * The compensated value when no data is available (APM_SIMPLE_CONDITION / APM_COMPOSITE_CONDITION). This parameter is nullable.
   * 
   * @example
   * 1.0
   */
  noDataAppendValue?: number;
  /**
   * @remarks
   * The tolerance duration in seconds before determining no data (UMODEL_METRICSET_CONDITION / UMODEL_METRICSET_MULTI_CONDITION). This parameter takes effect when noDataPolicy is not empty. No-data processing is applied only after continuous no data exceeds this duration. This offsets single-cycle empty queries caused by UModel data write jitter. Valid values: positive integers. If left empty, the backend defaults to max(collection interval × 2, 300).
   * 
   * @example
   * 600
   */
  noDataDurationSecs?: number;
  /**
   * @remarks
   * The no-data processing policy (CLOUD_MONITORING_CONDITION / PROMETHEUS_MULTI_CONDITION / PROMETHEUS_SIMPLE_CONDITION / APM_SIMPLE_CONDITION / APM_COMPOSITE_CONDITION). Valid values: NO_DATA_TO_OK, NO_DATA_TO_ALERT, KEEP_LAST_STATE, and APPEND_VALUE (APM only).
   * 
   * @example
   * 示例值
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
   * The PromQL trigger configuration for CLOUD_MONITORING_CONDITION with escalationType=PROMETHEUS. This parameter is output only for read paths.
   */
  prometheus?: CloudMonitoringPrometheusEscalation;
  /**
   * @remarks
   * The logical relation between conditions (APM_COMPOSITE_CONDITION).
   * 
   * @example
   * AND
   */
  relation?: string;
  /**
   * @remarks
   * The dynamic baseline sensitivity (UMODEL_METRICSET_CONDITION / APM_SIMPLE_CONDITION). This parameter takes effect only when operator=ABOVE_UPPER, BELOW_LOWER, or OUT_OF_BAND. Valid values: HIGH (narrowest and most sensitive band), MEDIUM, and LOW (widest and least sensitive band).
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
   * The single-metric multi-level trigger configuration for CLOUD_MONITORING_CONDITION with escalationType=SIMPLE. The metricName, period, and escalations parameters are required.
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
   * The trigger list. This parameter is polymorphic by type. CLOUD_MONITORING_CONDITION does not use this field and uses simpleEscalation.escalations or compositeEscalation.escalations instead. For SLS_MULTI_CONDITION, each case contains matchField, matchOperator, matchValue, countOperator, countThreshold, and severity, and at least one case is required. For UMODEL_METRICSET_MULTI_CONDITION, each trigger contains severity, durationSecs, and an expression (SIMPLE or COMPOSITE). For PROMETHEUS_MULTI_CONDITION, each trigger contains severity, durationSecs, and an expression (SIMPLE or COMPOSITE). The triggers are sorted by severity priority, and the first match triggers the alert.
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
   * The year-over-year time unit (APM_SIMPLE_CONDITION). This parameter takes effect only when operator=YOY_UP or YOY_DOWN.
   * 
   * @example
   * minute
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * The year-over-year time value (APM_SIMPLE_CONDITION). This parameter takes effect only when operator=YOY_UP or YOY_DOWN.
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

