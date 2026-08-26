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
   * The aggregate functions (used by APM_SIMPLE_CONDITION. For UMODEL conditions, the aggregation semantics have been migrated to QueryConfigUnified and this field no longer takes effect).
   */
  aggregate?: string;
  /**
   * @remarks
   * The consecutive trigger count threshold (type=SLS_MULTI_CONDITION). An alert is fired only after the condition is met N times. Default value: 1.
   */
  alertCount?: number;
  /**
   * @remarks
   * The list of comparison conditions (APM_COMPOSITE_CONDITION).
   */
  compareList?: CompareList[];
  /**
   * @remarks
   * The multi-metric composite trigger configuration for CLOUD_MONITORING_CONDITION when escalationType=COMPOSITE (requires relation, severity, times, escalations).
   */
  compositeEscalation?: CloudMonitoringCompositeEscalation;
  /**
   * @remarks
   * The count comparison operator (type=UMODEL_LOGSET_CONDITION).
   */
  countOperator?: string;
  /**
   * @remarks
   * The count threshold (type=UMODEL_LOGSET_CONDITION).
   */
  countThreshold?: number;
  /**
   * @remarks
   * The duration in seconds. Used directly by PROMETHEUS_SIMPLE / UMODEL_METRICSET_CONDITION / UMODEL_LOGSET_CONDITION. For UMODEL_METRICSET_MULTI_CONDITION, this serves as the global default and can be overridden by the durationSecs field in each trigger.
   */
  durationSecs?: number;
  /**
   * @remarks
   * Specifies whether to enable severity suppression by highest level (type=UMODEL_METRICSET_MULTI_CONDITION / PROMETHEUS_MULTI_CONDITION). Default value: true. When enabled, only the highest severity trigger is reported for the same entity.
   */
  enableSeveritySuppression?: boolean;
  /**
   * @remarks
   * The expression type for CLOUD_MONITORING_CONDITION: SIMPLE / COMPOSITE / EXPRESS / PROMETHEUS (write paths support only SIMPLE / COMPOSITE). Specify the corresponding escalation sub-object based on the type.
   */
  escalationType?: string;
  /**
   * @remarks
   * The expression-based trigger configuration for CLOUD_MONITORING_CONDITION when escalationType=EXPRESS (read path output only).
   */
  expressEscalation?: CloudMonitoringExpressEscalation;
  /**
   * @remarks
   * The raw V1 condition JSON string returned when type=UNKNOWN_CONDITION and the read path fails to parse the condition. If this field is not empty, display it as read-only on the frontend.
   */
  legacyRaw?: string;
  /**
   * @remarks
   * Returned when type=UNKNOWN_CONDITION. Indicates that this rule cannot be edited through the new API. Submit a ticket to contact the CloudMonitor team.
   */
  legacyType?: string;
  /**
   * @remarks
   * The log field name (used when type=UMODEL_LOGSET_CONDITION and matchOperator=CONTAINS/EQUALS/REGEX).
   */
  matchField?: string;
  /**
   * @remarks
   * The log match operator (type=UMODEL_LOGSET_CONDITION).
   */
  matchOperator?: string;
  /**
   * @remarks
   * The log match value (used when type=UMODEL_LOGSET_CONDITION and matchOperator=CONTAINS/EQUALS/REGEX).
   */
  matchValue?: string;
  /**
   * @remarks
   * The upper bound of the range (used when UMODEL_METRICSET_CONDITION and operator=IN_RANGE/OUT_OF_RANGE).
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the range (used when UMODEL_METRICSET_CONDITION and operator=IN_RANGE/OUT_OF_RANGE).
   */
  min?: number;
  /**
   * @remarks
   * The no-data alert level (SLS_MULTI_CONDITION). APM and Prometheus conditions have migrated to noDataPolicy + noDataAlertSeverity.
   */
  noDataAlertLevel?: string;
  /**
   * @remarks
   * The no-data alert severity level (PROMETHEUS_SIMPLE_CONDITION / PROMETHEUS_MULTI_CONDITION, takes effect when noDataPolicy=NO_DATA_TO_ALERT). SLS_MULTI_CONDITION still uses noDataAlertLevel.
   */
  noDataAlertSeverity?: string;
  /**
   * @remarks
   * The value to append when no data is available (APM_SIMPLE_CONDITION / APM_COMPOSITE_CONDITION). Nullable.
   */
  noDataAppendValue?: number;
  /**
   * @remarks
   * The no-data handling policy (CLOUD_MONITORING_CONDITION / PROMETHEUS_MULTI_CONDITION / PROMETHEUS_SIMPLE_CONDITION / APM_SIMPLE_CONDITION / APM_COMPOSITE_CONDITION): NO_DATA_TO_OK / NO_DATA_TO_ALERT / KEEP_LAST_STATE / APPEND_VALUE (APM only).
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The comparison operator. For UMODEL_METRICSET_CONDITION: GT (greater than) / GE (greater than or equal to) / LT (less than) / LE (less than or equal to) / EQ (equal to) / NE (not equal to) / IN_RANGE (within range, requires min/max) / OUT_OF_RANGE (outside range, requires min/max) / PRESENT (field exists) / NOT_PRESENT (field does not exist). Not used by UMODEL_LOGSET_CONDITION. For APM_SIMPLE_CONDITION: GT/GTE/LT/LTE/EQ/NE/YOY_UP/YOY_DOWN (YOY_* requires yoyTimeUnit/yoyTimeValue).
   */
  operator?: string;
  /**
   * @remarks
   * The PromQL-based trigger configuration for CLOUD_MONITORING_CONDITION when escalationType=PROMETHEUS (read path output only).
   */
  prometheus?: CloudMonitoringPrometheusEscalation;
  /**
   * @remarks
   * The logical relationship between conditions (APM_COMPOSITE_CONDITION).
   */
  relation?: string;
  /**
   * @remarks
   * The severity level (UMODEL_METRICSET_CONDITION / UMODEL_LOGSET_CONDITION / PROMETHEUS_SIMPLE / APM_COMPOSITE).
   */
  severity?: string;
  /**
   * @remarks
   * The single-metric multi-level trigger configuration for CLOUD_MONITORING_CONDITION when escalationType=SIMPLE (requires metricName, period, escalations).
   */
  simpleEscalation?: CloudMonitoringSimpleEscalation;
  /**
   * @remarks
   * The threshold (used by UMODEL_METRICSET_CONDITION with non-range operators).
   */
  threshold?: number;
  /**
   * @remarks
   * The multi-threshold list (APM_SIMPLE_CONDITION).
   */
  thresholdList?: ThresholdList[];
  /**
   * @remarks
   * The list of triggers (polymorphic by type. CLOUD_MONITORING_CONDITION does not use this field. Use simpleEscalation.escalations / compositeEscalation.escalations instead). For SLS_MULTI_CONDITION, each case contains matchField / matchOperator / matchValue / countOperator / countThreshold / severity, with at least one required. For UMODEL_METRICSET_MULTI_CONDITION, each trigger contains severity, durationSecs, and an expression (SIMPLE/COMPOSITE). For PROMETHEUS_MULTI_CONDITION, each trigger contains severity, durationSecs, and an expression (SIMPLE/COMPOSITE). Triggers are sorted by severity priority, and the first match fires.
   */
  triggers?: Triggers[];
  /**
   * @remarks
   * The detection condition type. Valid values and their required fields: PROMETHEUS_SIMPLE_CONDITION (requires operator, threshold, durationSecs, severity). UMODEL_METRICSET_CONDITION (requires operator, durationSecs, severity. Non-range operators require threshold. operator=IN_RANGE/OUT_OF_RANGE requires min and max). UMODEL_LOGSET_CONDITION (requires matchOperator, durationSecs, severity. matchOperator=CONTAINS/EQUALS/REGEX requires matchField and matchValue. countOperator/countThreshold are optional). UMODEL_METRICSET_MULTI_CONDITION (requires triggers[*]. Optional durationSecs as global default, enableSeveritySuppression). APM_SIMPLE_CONDITION (requires operator, aggregate. Use thresholdList or threshold. operator=YOY_UP/YOY_DOWN requires yoyTimeUnit and yoyTimeValue. Optional noDataPolicy, noDataAppendValue). APM_COMPOSITE_CONDITION (requires compareList, relation, severity. Optional noDataPolicy, noDataAppendValue). CLOUD_MONITORING_CONDITION (requires escalationType. escalationType=SIMPLE requires simpleEscalation. escalationType=COMPOSITE requires compositeEscalation. Optional noDataPolicy). UNKNOWN_CONDITION (read-only fallback. Do not use in write paths). Do not use non-enumerated values such as SLS_CONDITION or CMS_BASIC_CONDITION. The backend returns an Invalidtype 400 error.
   * 
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * The year-over-year time unit (APM_SIMPLE_CONDITION, takes effect only when operator=YOY_UP/YOY_DOWN).
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * The year-over-year time value (APM_SIMPLE_CONDITION, takes effect only when operator=YOY_UP/YOY_DOWN).
   */
  yoyTimeValue?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      alertCount: 'alertCount',
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
      aggregate: 'string',
      alertCount: 'number',
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

