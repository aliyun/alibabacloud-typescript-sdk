// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityFields } from "./EntityFields";
import { EntityFilters } from "./EntityFilters";
import { FilterList } from "./FilterList";
import { PrometheusMetricFilterValue } from "./PrometheusMetricFilterValue";
import { Joinings } from "./Joinings";
import { LabelFilters } from "./LabelFilters";
import { MeasureList } from "./MeasureList";
import { PrometheusMetricParamValue } from "./PrometheusMetricParamValue";
import { Queries } from "./Queries";


export class QueryConfigUnified extends $dara.Model {
  /**
   * @remarks
   * The aggregate functions. Used when type=UMODEL_METRICSET_QUERY / UMODEL_LOGSET_QUERY.
   * 
   * @example
   * AVG
   */
  aggregate?: string;
  /**
   * @remarks
   * **[Deprecated]** Specifies whether to perform alert detection only after data is complete (originally used when type=PROMETHEUS_MULTI_QUERY). This field overlaps with enableDataCompleteCheck. Using this field on write path returns 400.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  checkAfterDataComplete?: boolean;
  /**
   * @remarks
   * The list of dimensions. This parameter is used when type is set to CLOUD_MONITORING_QUERY. Each dimension is a key/value string mapping.
   */
  dimensions?: { [key: string]: string }[];
  /**
   * @remarks
   * The duration in seconds. Used when type=PROMETHEUS_MULTI_QUERY.
   * 
   * @example
   * 100
   */
  durationSecs?: number;
  /**
   * @remarks
   * Indicates whether data integrity check is enabled.
   * 
   * @example
   * true
   */
  enableDataCompleteCheck?: boolean;
  /**
   * @remarks
   * The entity domain.
   * 
   * @example
   * k8s
   */
  entityDomain?: string;
  /**
   * @remarks
   * The entity fields to include in the response.
   */
  entityFields?: EntityFields[];
  /**
   * @remarks
   * The entity filter list.
   */
  entityFilters?: EntityFilters[];
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * k8s.pod
   */
  entityType?: string;
  /**
   * @remarks
   * The query expression or SPL statement. Recommended when type=PROMETHEUS_SINGLE_QUERY. Optional when type=UMODEL_METRICSET_QUERY for custom SPL. Required when type=UMODEL_LOGSET_QUERY, where an SPL query statement must be provided (the business layer enforces this requirement).
   * 
   * @example
   * Sample value
   */
  expr?: string;
  /**
   * @remarks
   * The APM filter condition list.
   */
  filterList?: FilterList[];
  /**
   * @remarks
   * The predefined metric filter value list (type=PROMETHEUS_PREDEFINED_METRIC_QUERY / PROMETHEUS_METRIC_GROUP_QUERY [deprecated]).
   */
  filterValues?: PrometheusMetricFilterValue[];
  /**
   * @remarks
   * The list of group fields. This parameter is used when type is set to SLS_MULTI_QUERY and groupType is set to custom.
   */
  groupFieldList?: string[];
  /**
   * @remarks
   * The group ID (type=CLOUD_MONITORING_QUERY). Dual semantics: og- prefix = observation group (GROUP_V2. The prefix itself conveys the semantics. relationType is not required. The backend resolves members through the entity store). Numeric only = application group (GROUP_V1 legacy resource group. Requires relationType=GROUP).
   * 
   * @example
   * og-845e0a26455f437c
   */
  groupId?: string;
  /**
   * @remarks
   * The grouping policy (used when type=SLS_MULTI_QUERY): none / label / custom.
   * 
   * @example
   * default
   */
  groupType?: string;
  /**
   * @remarks
   * The join list (used when type=SLS_MULTI_QUERY. Maximum of 2: joinings[0] corresponds to the set operation between query 0 and query 1. joinings[1] corresponds to the set operation between query 1 and query 2).
   */
  joinings?: Joinings[];
  /**
   * @remarks
   * The label filter conditions.
   */
  labelFilters?: LabelFilters[];
  /**
   * @remarks
   * The original V1 query JSON string returned as a fallback when type=UNKNOWN_QUERY and read path parsing fails. Contains the field values that triggered the failure, such as filter.operator=ABC. When the frontend detects that this field is not empty, display it as read-only.
   * 
   * @example
   * Sample value
   */
  legacyRaw?: string;
  /**
   * @remarks
   * Returned when type=UNKNOWN_QUERY. Indicates that this rule cannot be edited through the new API. Submit a ticket to contact the CloudMonitor product team.
   * 
   * @example
   * default
   */
  legacyType?: string;
  /**
   * @remarks
   * The log set name (type=UMODEL_LOGSET_QUERY).
   * 
   * @example
   * Sample name
   */
  logSet?: string;
  /**
   * @remarks
   * The measure group key. This parameter is optional when type is set to APM_MULTI_QUERY. It corresponds to alertMetricInput.groupKey in V1.
   * 
   * @example
   * Sample value
   */
  measureGroupKey?: string;
  /**
   * @remarks
   * The APM measure configuration list.
   */
  measureList?: MeasureList[];
  /**
   * @remarks
   * The metric name (type=UMODEL_METRICSET_QUERY).
   * 
   * @example
   * node_cpu_seconds_total
   */
  metric?: string;
  /**
   * @remarks
   * The metric group ID (type=PROMETHEUS_PREDEFINED_METRIC_QUERY / PROMETHEUS_METRIC_GROUP_QUERY [deprecated]).
   * 
   * @example
   * example-id-001
   */
  metricGroupId?: string;
  /**
   * @remarks
   * The predefined metric ID (type=PROMETHEUS_PREDEFINED_METRIC_QUERY).
   * 
   * @example
   * example-id-001
   */
  metricId?: string;
  /**
   * @remarks
   * **[Deprecated]** The predefined metric ID list (originally used with type=PROMETHEUS_METRIC_GROUP_QUERY). This query type is deprecated. Write path returns 400.
   * 
   * @deprecated
   */
  metricIds?: string[];
  /**
   * @remarks
   * The metric set name (type=UMODEL_METRICSET_QUERY).
   * 
   * @example
   * cms.acs_ecs_dashboard.CPUUtilization
   */
  metricSet?: string;
  /**
   * @remarks
   * The CloudMonitor namespace (Alibaba Cloud service name, type=CLOUD_MONITORING_QUERY).
   * 
   * @example
   * Sample name
   */
  namespace?: string;
  /**
   * @remarks
   * The query time offset in seconds. Used when type=UMODEL_METRICSET_QUERY / UMODEL_LOGSET_QUERY. Works with windowSecs to implement an offset query over the range [T - windowSecs - offsetSecs, T - offsetSecs]. Valid range: [0, 86400].
   * 
   * @example
   * 100
   */
  offsetSecs?: number;
  /**
   * @remarks
   * The predefined metric parameter value list (type=PROMETHEUS_PREDEFINED_METRIC_QUERY / PROMETHEUS_METRIC_GROUP_QUERY [deprecated]).
   */
  paramValues?: PrometheusMetricParamValue[];
  /**
   * @remarks
   * The Prometheus query statement (type=PROMETHEUS_SINGLE_QUERY).
   * 
   * @example
   * avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100
   * 
   * @deprecated
   */
  promQl?: string;
  /**
   * @remarks
   * The subquery list (polymorphic by type): When type=SLS_MULTI_QUERY, each entry is a SlsNamedQueryEntry (timeUnit/start/end/window/expr). When type=PROMETHEUS_MULTI_QUERY, each entry is a PrometheusNamedQueryEntry (name/expr). When type=UMODEL_METRICSET_MULTI_QUERY, each entry is a MetricSetNamedQueryEntry.
   */
  queries?: Queries[];
  /**
   * @remarks
   * The resource association type (type=CLOUD_MONITORING_QUERY).
   * 
   * @example
   * INSTANCE
   */
  relationType?: string;
  /**
   * @remarks
   * The service ID list (type=APM_MULTI_QUERY).
   */
  serviceIdList?: string[];
  /**
   * @remarks
   * The query type.
   * 
   * This parameter is required.
   * 
   * @example
   * PROMETHEUS_SINGLE_QUERY
   */
  type?: string;
  /**
   * @remarks
   * The aggregation time window in seconds. Used when type=UMODEL_METRICSET_QUERY / UMODEL_LOGSET_QUERY. Valid range: [60, 86400].
   * 
   * @example
   * 100
   */
  windowSecs?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      checkAfterDataComplete: 'checkAfterDataComplete',
      dimensions: 'dimensions',
      durationSecs: 'durationSecs',
      enableDataCompleteCheck: 'enableDataCompleteCheck',
      entityDomain: 'entityDomain',
      entityFields: 'entityFields',
      entityFilters: 'entityFilters',
      entityType: 'entityType',
      expr: 'expr',
      filterList: 'filterList',
      filterValues: 'filterValues',
      groupFieldList: 'groupFieldList',
      groupId: 'groupId',
      groupType: 'groupType',
      joinings: 'joinings',
      labelFilters: 'labelFilters',
      legacyRaw: 'legacyRaw',
      legacyType: 'legacyType',
      logSet: 'logSet',
      measureGroupKey: 'measureGroupKey',
      measureList: 'measureList',
      metric: 'metric',
      metricGroupId: 'metricGroupId',
      metricId: 'metricId',
      metricIds: 'metricIds',
      metricSet: 'metricSet',
      namespace: 'namespace',
      offsetSecs: 'offsetSecs',
      paramValues: 'paramValues',
      promQl: 'promQl',
      queries: 'queries',
      relationType: 'relationType',
      serviceIdList: 'serviceIdList',
      type: 'type',
      windowSecs: 'windowSecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      checkAfterDataComplete: 'boolean',
      dimensions: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      durationSecs: 'number',
      enableDataCompleteCheck: 'boolean',
      entityDomain: 'string',
      entityFields: { 'type': 'array', 'itemType': EntityFields },
      entityFilters: { 'type': 'array', 'itemType': EntityFilters },
      entityType: 'string',
      expr: 'string',
      filterList: { 'type': 'array', 'itemType': FilterList },
      filterValues: { 'type': 'array', 'itemType': PrometheusMetricFilterValue },
      groupFieldList: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      groupType: 'string',
      joinings: { 'type': 'array', 'itemType': Joinings },
      labelFilters: { 'type': 'array', 'itemType': LabelFilters },
      legacyRaw: 'string',
      legacyType: 'string',
      logSet: 'string',
      measureGroupKey: 'string',
      measureList: { 'type': 'array', 'itemType': MeasureList },
      metric: 'string',
      metricGroupId: 'string',
      metricId: 'string',
      metricIds: { 'type': 'array', 'itemType': 'string' },
      metricSet: 'string',
      namespace: 'string',
      offsetSecs: 'number',
      paramValues: { 'type': 'array', 'itemType': PrometheusMetricParamValue },
      promQl: 'string',
      queries: { 'type': 'array', 'itemType': Queries },
      relationType: 'string',
      serviceIdList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      windowSecs: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(Array.isArray(this.entityFields)) {
      $dara.Model.validateArray(this.entityFields);
    }
    if(Array.isArray(this.entityFilters)) {
      $dara.Model.validateArray(this.entityFilters);
    }
    if(Array.isArray(this.filterList)) {
      $dara.Model.validateArray(this.filterList);
    }
    if(Array.isArray(this.filterValues)) {
      $dara.Model.validateArray(this.filterValues);
    }
    if(Array.isArray(this.groupFieldList)) {
      $dara.Model.validateArray(this.groupFieldList);
    }
    if(Array.isArray(this.joinings)) {
      $dara.Model.validateArray(this.joinings);
    }
    if(Array.isArray(this.labelFilters)) {
      $dara.Model.validateArray(this.labelFilters);
    }
    if(Array.isArray(this.measureList)) {
      $dara.Model.validateArray(this.measureList);
    }
    if(Array.isArray(this.metricIds)) {
      $dara.Model.validateArray(this.metricIds);
    }
    if(Array.isArray(this.paramValues)) {
      $dara.Model.validateArray(this.paramValues);
    }
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    if(Array.isArray(this.serviceIdList)) {
      $dara.Model.validateArray(this.serviceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

