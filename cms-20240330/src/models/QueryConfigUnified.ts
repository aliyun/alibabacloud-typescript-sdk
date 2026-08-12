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
   * The aggregation function (used when type=UMODEL_METRICSET_QUERY / UMODEL_LOGSET_QUERY).
   */
  aggregate?: string;
  /**
   * @remarks
   * **[Deprecated]** Specifies whether to perform alert detection only after data is complete (originally used when type=PROMETHEUS_MULTI_QUERY). This field overlaps with enableDataCompleteCheck. Using this field in write path returns 400.
   * 
   * @deprecated
   */
  checkAfterDataComplete?: boolean;
  /**
   * @remarks
   * The dimension list (used when type=CLOUD_MONITORING_QUERY. Each dimension is a key/value string mapping).
   */
  dimensions?: { [key: string]: string }[];
  /**
   * @remarks
   * The duration in seconds (used when type=PROMETHEUS_MULTI_QUERY).
   */
  durationSecs?: number;
  /**
   * @remarks
   * Indicates whether the data integrity check is enabled (used when type=PROMETHEUS_SINGLE_QUERY / PROMETHEUS_MULTI_QUERY / PROMETHEUS_PREDEFINED_METRIC_QUERY / PROMETHEUS_METRIC_GROUP_QUERY [deprecated]).
   */
  enableDataCompleteCheck?: boolean;
  /**
   * @remarks
   * The entity domain (used when type=UMODEL_METRICSET_QUERY / UMODEL_METRICSET_MULTI_QUERY / UMODEL_LOGSET_QUERY. Works with entityType/entityFilters to locate UModel entities).
   */
  entityDomain?: string;
  /**
   * @remarks
   * The entity fields to include in the response (used when type=UMODEL_METRICSET_QUERY / UMODEL_METRICSET_MULTI_QUERY / UMODEL_LOGSET_QUERY).
   */
  entityFields?: EntityFields[];
  /**
   * @remarks
   * The entity filter list (used when type=UMODEL_METRICSET_QUERY / UMODEL_METRICSET_MULTI_QUERY / UMODEL_LOGSET_QUERY).
   */
  entityFilters?: EntityFilters[];
  /**
   * @remarks
   * The entity type (used when type=UMODEL_METRICSET_QUERY / UMODEL_METRICSET_MULTI_QUERY / UMODEL_LOGSET_QUERY).
   */
  entityType?: string;
  /**
   * @remarks
   * The query expression or SPL statement. Recommended when type=PROMETHEUS_SINGLE_QUERY. Optional when type=UMODEL_METRICSET_QUERY for custom SPL. Required when type=UMODEL_LOGSET_QUERY, where an SPL query statement must be provided (the service layer enforces this requirement).
   */
  expr?: string;
  /**
   * @remarks
   * The APM filter condition list.
   */
  filterList?: FilterList[];
  /**
   * @remarks
   * The list of predefined metric filter values (used when type=PROMETHEUS_PREDEFINED_METRIC_QUERY / PROMETHEUS_METRIC_GROUP_QUERY [deprecated]).
   */
  filterValues?: PrometheusMetricFilterValue[];
  /**
   * @remarks
   * The group field list (used when type=SLS_MULTI_QUERY and groupType=custom).
   */
  groupFieldList?: string[];
  /**
   * @remarks
   * The resource group ID (used when type=CLOUD_MONITORING_QUERY and relationType=GROUP).
   */
  groupId?: string;
  /**
   * @remarks
   * The grouping policy (used when type=SLS_MULTI_QUERY): none / label / custom.
   */
  groupType?: string;
  /**
   * @remarks
   * The join list (used when type=SLS_MULTI_QUERY. Maximum of 2: joinings[0] corresponds to the set operation between query 0 and query 1. joinings[1] corresponds to the set operation between query 1 and query 2).
   */
  joinings?: Joinings[];
  /**
   * @remarks
   * The label filter conditions (used when type=UMODEL_METRICSET_QUERY. For UMODEL_METRICSET_MULTI_QUERY, place labelFilters in each queries[*] entry).
   */
  labelFilters?: LabelFilters[];
  /**
   * @remarks
   * The original V1 query JSON string returned as a fallback when type=UNKNOWN_QUERY and read path parsing fails (contains the field values that triggered the failure, such as filter.operator=ABC). The frontend displays this field as read-only when it is not empty.
   */
  legacyRaw?: string;
  /**
   * @remarks
   * Returned when type=UNKNOWN_QUERY, indicating that this rule cannot be edited through the new API. Submit a ticket to contact the CloudMonitor team.
   */
  legacyType?: string;
  /**
   * @remarks
   * The log set name (used when type=UMODEL_LOGSET_QUERY).
   */
  logSet?: string;
  /**
   * @remarks
   * The measure group key (optional when type=APM_MULTI_QUERY, corresponds to V1 alertMetricInput.groupKey).
   */
  measureGroupKey?: string;
  /**
   * @remarks
   * The APM measure configuration list.
   */
  measureList?: MeasureList[];
  /**
   * @remarks
   * The metric name (required when type=UMODEL_METRICSET_QUERY. Required when type=CLOUD_MONITORING_QUERY, used together with namespace to uniquely identify CloudMonitor monitoring metrics).
   */
  metric?: string;
  /**
   * @remarks
   * The metric group ID (used when type=PROMETHEUS_PREDEFINED_METRIC_QUERY / PROMETHEUS_METRIC_GROUP_QUERY [deprecated]).
   */
  metricGroupId?: string;
  /**
   * @remarks
   * The predefined metric ID (used when type=PROMETHEUS_PREDEFINED_METRIC_QUERY).
   */
  metricId?: string;
  /**
   * @remarks
   * **[Deprecated]** The list of predefined metric IDs (originally used when type=PROMETHEUS_METRIC_GROUP_QUERY). This query type is deprecated. Write path returns 400.
   * 
   * @deprecated
   */
  metricIds?: string[];
  /**
   * @remarks
   * The metric set name (used when type=UMODEL_METRICSET_QUERY).
   */
  metricSet?: string;
  /**
   * @remarks
   * The CloudMonitor namespace (Alibaba Cloud service name, used when type=CLOUD_MONITORING_QUERY).
   */
  namespace?: string;
  /**
   * @remarks
   * The query time offset in seconds (used when type=UMODEL_METRICSET_QUERY / UMODEL_LOGSET_QUERY). Works with windowSecs to implement an offset query over the range [T - windowSecs - offsetSecs, T - offsetSecs]. Valid range: [0, 86400].
   */
  offsetSecs?: number;
  /**
   * @remarks
   * The list of predefined metric parameter values (used when type=PROMETHEUS_PREDEFINED_METRIC_QUERY / PROMETHEUS_METRIC_GROUP_QUERY [deprecated]).
   */
  paramValues?: PrometheusMetricParamValue[];
  /**
   * @remarks
   * **[Deprecated]** The legacy Prometheus query statement field. Use expr instead. This field is retained for backward compatibility. The backend automatically normalizes it to expr.
   * 
   * @deprecated
   */
  promQl?: string;
  /**
   * @remarks
   * The subquery list (polymorphic by type): when type=SLS_MULTI_QUERY, each entry is a SlsNamedQueryEntry (timeUnit/start/end/window/expr). When type=PROMETHEUS_MULTI_QUERY, each entry is a PrometheusNamedQueryEntry (name/expr). When type=UMODEL_METRICSET_MULTI_QUERY, each entry is a MetricSetNamedQueryEntry.
   */
  queries?: Queries[];
  /**
   * @remarks
   * The resource relation type (used when type=CLOUD_MONITORING_QUERY).
   */
  relationType?: string;
  /**
   * @remarks
   * The list of service IDs (used when type=APM_MULTI_QUERY).
   */
  serviceIdList?: string[];
  /**
   * @remarks
   * The query type. Valid values and associated fields: PROMETHEUS_SINGLE_QUERY (required: expr. Optional: enableDataCompleteCheck). PROMETHEUS_PREDEFINED_METRIC_QUERY (required: metricGroupId, metricId. Optional: paramValues, filterValues, enableDataCompleteCheck). PROMETHEUS_METRIC_GROUP_QUERY ([deprecated] required: metricGroupId, metricIds. Optional: paramValues, filterValues, enableDataCompleteCheck. Write path returns 400). UMODEL_METRICSET_QUERY (required: metricSet, metric, windowSecs, aggregate. Optional: expr, entityDomain/entityType/entityFilters, labelFilters, entityFields, offsetSecs). UMODEL_METRICSET_MULTI_QUERY (required: queries[*]. Optional: entityDomain/entityType/entityFilters, windowSecs, offsetSecs, aggregate). UMODEL_LOGSET_QUERY (required: logSet, expr, windowSecs, aggregate. Optional: entityDomain/entityType/entityFilters, labelFilters, offsetSecs). APM_MULTI_QUERY (required: serviceIdList, measureList. Optional: filterList, measureGroupKey). CLOUD_MONITORING_QUERY (required: namespace, metric, relationType. When relationType=INSTANCE, dimensions is required. When relationType=GROUP, groupId is required. When relationType=USER, leave both empty). UNKNOWN_QUERY (read-only fallback. Do not use in write path). Do not use non-enumerated values (such as CMS_BASIC_QUERY/SLS_QUERY). The backend returns Invalidtype 400.
   * 
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * The aggregation time window in seconds (used when type=UMODEL_METRICSET_QUERY / UMODEL_LOGSET_QUERY). Valid range: [60, 86400].
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

