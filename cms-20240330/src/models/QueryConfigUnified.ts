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
   * The aggregation function used when the type is UMODEL_METRICSET_QUERY or UMODEL_LOGSET_QUERY.
   * 
   * @example
   * AVG
   */
  aggregate?: string;
  /**
   * @remarks
   * **[Deprecated]** Specifies whether to perform alert detection after data completion. This parameter was originally used when the type was PROMETHEUS_MULTI_QUERY. It duplicates enableDataCompleteCheck and returns a 400 error in the write path.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  checkAfterDataComplete?: boolean;
  /**
   * @remarks
   * The list of dimensions used when the type is CLOUD_MONITORING_QUERY. Each dimension is a key-value string map.
   */
  dimensions?: { [key: string]: string }[];
  /**
   * @remarks
   * The duration in seconds used when the type is PROMETHEUS_MULTI_QUERY.
   * 
   * @example
   * 100
   */
  durationSecs?: number;
  /**
   * @remarks
   * Specifies whether the data integrity check is enabled.
   * 
   * @example
   * true
   */
  enableDataCompleteCheck?: boolean;
  /**
   * @remarks
   * The domain to which the entity belongs.
   * 
   * @example
   * k8s
   */
  entityDomain?: string;
  /**
   * @remarks
   * The entity fields to be returned in the response.
   */
  entityFields?: EntityFields[];
  /**
   * @remarks
   * The list of entity filters.
   */
  entityFilters?: EntityFilters[];
  /**
   * @remarks
   * The type of the entity.
   * 
   * @example
   * k8s.pod
   */
  entityType?: string;
  /**
   * @remarks
   * The query expression or Search Processing Language (SPL) statement. Recommended when the type is PROMETHEUS_SINGLE_QUERY. Optional when the type is UMODEL_METRICSET_QUERY for custom SPL. Required when the type is UMODEL_LOGSET_QUERY, where an SPL query statement must be provided and validated by the business layer.
   * 
   * @example
   * 示例值
   */
  expr?: string;
  /**
   * @remarks
   * The list of Application Performance Monitoring (APM) filter conditions.
   */
  filterList?: FilterList[];
  /**
   * @remarks
   * The list of filter values for predefined metrics when the type is PROMETHEUS_PREDEFINED_METRIC_QUERY or PROMETHEUS_METRIC_GROUP_QUERY [Deprecated].
   */
  filterValues?: PrometheusMetricFilterValue[];
  /**
   * @remarks
   * The list of grouping fields used when the type is SLS_MULTI_QUERY and the groupType is custom.
   */
  groupFieldList?: string[];
  /**
   * @remarks
   * The group ID used when the type is CLOUD_MONITORING_QUERY. This parameter has dual semantics: an og- prefix indicates an observation group (GROUP_V2, where the prefix defines the semantics and relationType is not required, and the backend resolves members through the entity library); a pure number indicates an application group (GROUP_V1 legacy resource group, which requires relationType=GROUP).
   * 
   * @example
   * og-845e0a26455f437c
   */
  groupId?: string;
  /**
   * @remarks
   * The grouping strategy used when the type is SLS_MULTI_QUERY. Valid values: none, label, and custom.
   * 
   * @example
   * default
   */
  groupType?: string;
  /**
   * @remarks
   * The list of joins used when the type is SLS_MULTI_QUERY. A maximum of two joins are supported. joinings[0] corresponds to the set operation between query 0 and query 1, and joinings[1] corresponds to the set operation between query 1 and query 2.
   */
  joinings?: Joinings[];
  /**
   * @remarks
   * The label filter conditions.
   */
  labelFilters?: LabelFilters[];
  /**
   * @remarks
   * The raw V1 query JSON string returned as a fallback when the type is UNKNOWN_QUERY and parsing fails in the read path. This string includes the field values that triggered the failure, such as filter.operator=ABC. The frontend displays this field in read-only mode when it is not empty.
   * 
   * @example
   * 示例值
   */
  legacyRaw?: string;
  /**
   * @remarks
   * The legacy type returned when the type is UNKNOWN_QUERY. This parameter indicates that the rule cannot be edited by using the new API. Submit a ticket to contact the CloudMonitor product team.
   * 
   * @example
   * default
   */
  legacyType?: string;
  /**
   * @remarks
   * The name of the logset when the type is UMODEL_LOGSET_QUERY.
   * 
   * @example
   * 示例名称
   */
  logSet?: string;
  /**
   * @remarks
   * The measure group key. This parameter is optional when the type is APM_MULTI_QUERY and corresponds to alertMetricInput.groupKey in V1.
   * 
   * @example
   * 示例值
   */
  measureGroupKey?: string;
  /**
   * @remarks
   * The list of APM measure configurations.
   */
  measureList?: MeasureList[];
  /**
   * @remarks
   * The name of the metric when the type is UMODEL_METRICSET_QUERY.
   * 
   * @example
   * node_cpu_seconds_total
   */
  metric?: string;
  /**
   * @remarks
   * The metric group ID when the type is PROMETHEUS_PREDEFINED_METRIC_QUERY or PROMETHEUS_METRIC_GROUP_QUERY [Deprecated].
   * 
   * @example
   * example-id-001
   */
  metricGroupId?: string;
  /**
   * @remarks
   * The predefined metric ID when the type is PROMETHEUS_PREDEFINED_METRIC_QUERY.
   * 
   * @example
   * example-id-001
   */
  metricId?: string;
  /**
   * @remarks
   * **[Deprecated]** The list of predefined metric IDs originally used when the type was PROMETHEUS_METRIC_GROUP_QUERY. This query type is deprecated, and the write path returns a 400 error.
   * 
   * @deprecated
   */
  metricIds?: string[];
  /**
   * @remarks
   * The name of the metricset when the type is UMODEL_METRICSET_QUERY.
   * 
   * @example
   * cms.acs_ecs_dashboard.CPUUtilization
   */
  metricSet?: string;
  /**
   * @remarks
   * The CloudMonitor namespace, which is the cloud service name, when the type is CLOUD_MONITORING_QUERY.
   * 
   * @example
   * 示例名称
   */
  namespace?: string;
  /**
   * @remarks
   * The query time offset in seconds used when the type is UMODEL_METRICSET_QUERY or UMODEL_LOGSET_QUERY. This parameter is used together with windowSecs to implement offset queries in the range of [T - windowSecs - offsetSecs, T - offsetSecs]. Valid values: 0 to 86400.
   * 
   * @example
   * 100
   */
  offsetSecs?: number;
  /**
   * @remarks
   * The list of parameter values for predefined metrics when the type is PROMETHEUS_PREDEFINED_METRIC_QUERY or PROMETHEUS_METRIC_GROUP_QUERY [Deprecated].
   */
  paramValues?: PrometheusMetricParamValue[];
  /**
   * @remarks
   * The Prometheus query statement when the type is PROMETHEUS_SINGLE_QUERY.
   * 
   * @example
   * avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100
   * 
   * @deprecated
   */
  promQl?: string;
  /**
   * @remarks
   * The list of subqueries, which is polymorphic based on the type. When the type is SLS_MULTI_QUERY, each entry is an SlsNamedQueryEntry object containing timeUnit, start, end, window, and expr. When the type is PROMETHEUS_MULTI_QUERY, each entry is a PrometheusNamedQueryEntry object containing name and expr. When the type is UMODEL_METRICSET_MULTI_QUERY, each entry is a MetricSetNamedQueryEntry object.
   */
  queries?: Queries[];
  /**
   * @remarks
   * The resource association type when the type is CLOUD_MONITORING_QUERY.
   * 
   * @example
   * INSTANCE
   */
  relationType?: string;
  /**
   * @remarks
   * The list of service IDs (type=APM_MULTI_QUERY).
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
   * The aggregation time window in seconds. Used when type=UMODEL_METRICSET_QUERY or UMODEL_LOGSET_QUERY. Valid range: [60, 86400].
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

