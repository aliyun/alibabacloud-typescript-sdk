// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleSlsQueryJoin } from "./AlertRuleSlsQueryJoin";


export class AlertRuleQueryEntityFields extends $dara.Model {
  /**
   * @remarks
   * The entity field name.
   * 
   * @example
   * instanceId
   */
  field?: string;
  /**
   * @remarks
   * The field value.
   * 
   * @example
   * i-abc123
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQueryEntityFilterFilters extends $dara.Model {
  /**
   * @remarks
   * The field.
   * 
   * @example
   * instanceId
   */
  field?: string;
  /**
   * @remarks
   * The comparison operator.
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * The matching value.
   * 
   * @example
   * wait_throw
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQueryEntityFilter extends $dara.Model {
  /**
   * @remarks
   * The resource type domain.
   * 
   * @example
   * rum
   */
  domain?: string;
  /**
   * @remarks
   * The list of filter conditions used to further filter resources.
   */
  filters?: AlertRuleQueryEntityFilterFilters[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * apm
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      filters: 'filters',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      filters: { 'type': 'array', 'itemType': AlertRuleQueryEntityFilterFilters },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQueryLabelFilters extends $dara.Model {
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * app
   */
  name?: string;
  /**
   * @remarks
   * The comparison operator that determines how to match the label value.
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * The label value.
   * 
   * @example
   * web
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQueryMarkTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * region
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQueryQueriesApmFilters extends $dara.Model {
  /**
   * @remarks
   * The dimension in the APM metric.
   * 
   * @example
   * rpcType
   */
  dim?: string;
  /**
   * @remarks
   * The filter operation type. Valid values:
   * * eq: Equal to.
   * * neq: Not equal to.
   * * match: Regex match.
   * * nmatch: Regex not match.
   * 
   * @example
   * eq
   */
  type?: string;
  /**
   * @remarks
   * The value corresponding to the filter operation.
   * 
   * @example
   * h3ji7a0y9i@2ac80e27fdfd0a2
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dim: 'dim',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dim: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQueryQueriesLabelFilters extends $dara.Model {
  /**
   * @remarks
   * The key (label name) for the label filter.
   * 
   * @example
   * host
   */
  name?: string;
  /**
   * @remarks
   * The label filter operator, such as =, !=, =~, or !~.
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * The value for the label filter.
   * 
   * @example
   * web-01
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQueryQueries extends $dara.Model {
  /**
   * @remarks
   * Applicable query type: APM_MULTI_QUERY.
   * 
   * The ID of the APM predefined metric.
   * 
   * @example
   * appstat.jvm.ThreadNewCount
   */
  apmAlertMetricId?: string;
  /**
   * @remarks
   * Applicable query type: ARMS_MULTI_QUERY.
   * 
   * The dimension filter configuration for APM metrics. Must be used together with apmAlertMetricId.
   */
  apmFilters?: AlertRuleQueryQueriesApmFilters[];
  /**
   * @remarks
   * Applicable query type: ARMS_MULTI_QUERY.
   * 
   * The list of aggregation dimensions for the query, specifying which dimensions of the metric to aggregate by.
   */
  apmGroupBy?: string[];
  /**
   * @remarks
   * Applicable query type: ARMS_MULTI_QUERY.
   * 
   * The alert data duration.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * The relative time offset end time.
   * 
   * If start and end are specified, do not specify window.
   * 
   * @example
   * 0
   */
  end?: number;
  /**
   * @remarks
   * Applicable query types: APM_MULTI_QUERY, SLS_MULTI_QUERY.
   * 
   * The query expression.
   * 
   * - For APM_MULTI_QUERY, this field is optional and contains the PromQL generated for predefined metrics (used for data preview).
   * - For SLS_MULTI_QUERY, this field contains the SQL query statement.
   * 
   * @example
   * sum by (rpc,acs_arms_service_id,pid,rpcType) (sum_over_time_lorc(arms_app_requests_count_ign_destid_endpoint_parent_ppid_prpc{callKind=~\\"http|rpc|custom_entry|server|consumer\\",pid=\\"gaddp9ap8q@cb005ffdf44b8ac\\",source=\\"apm\\"}[1m]))
   */
  expr?: string;
  /**
   * @remarks
   * Valid only for METRIC_SET_MULTI_QUERY. The label filter conditions (optional, independent for each query).
   */
  labelFilters?: AlertRuleQueryQueriesLabelFilters[];
  /**
   * @remarks
   * Valid only for METRIC_SET_MULTI_QUERY. The metric name.
   * 
   * @example
   * cpuUsage
   */
  metric?: string;
  /**
   * @remarks
   * Valid only for METRIC_SET_MULTI_QUERY. The metric set name.
   * 
   * @example
   * ecs_metrics
   */
  metricSet?: string;
  /**
   * @remarks
   * The subquery name. Uniquely identifies the query within the same alert rule and can be referenced by the expression conditions in triggers.
   * 
   * @example
   * cpuUsageQuery
   */
  name?: string;
  /**
   * @remarks
   * The PromQL query statement. Used when type=APM_MULTI_QUERY.
   * 
   * @example
   * avg(rate(http_requests_total[5m]))
   */
  promQl?: string;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * The relative time offset start time for SLS queries.
   * 
   * If start and end are specified, do not specify window. Example: start=15, timeUnit=minute indicates 15 minutes ago.
   * 
   * @example
   * 15
   */
  start?: number;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * The time unit for the start, end, and window parameters: day/hour/minute/second.
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * The time frame query interval. If window is specified, do not specify start or end.
   * 
   * @example
   * 1
   */
  window?: number;
  static names(): { [key: string]: string } {
    return {
      apmAlertMetricId: 'apmAlertMetricId',
      apmFilters: 'apmFilters',
      apmGroupBy: 'apmGroupBy',
      duration: 'duration',
      end: 'end',
      expr: 'expr',
      labelFilters: 'labelFilters',
      metric: 'metric',
      metricSet: 'metricSet',
      name: 'name',
      promQl: 'promQl',
      start: 'start',
      timeUnit: 'timeUnit',
      window: 'window',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apmAlertMetricId: 'string',
      apmFilters: { 'type': 'array', 'itemType': AlertRuleQueryQueriesApmFilters },
      apmGroupBy: { 'type': 'array', 'itemType': 'string' },
      duration: 'number',
      end: 'number',
      expr: 'string',
      labelFilters: { 'type': 'array', 'itemType': AlertRuleQueryQueriesLabelFilters },
      metric: 'string',
      metricSet: 'string',
      name: 'string',
      promQl: 'string',
      start: 'number',
      timeUnit: 'string',
      window: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apmFilters)) {
      $dara.Model.validateArray(this.apmFilters);
    }
    if(Array.isArray(this.apmGroupBy)) {
      $dara.Model.validateArray(this.apmGroupBy);
    }
    if(Array.isArray(this.labelFilters)) {
      $dara.Model.validateArray(this.labelFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQuery extends $dara.Model {
  /**
   * @remarks
   * Specified when type=METRIC_SET_QUERY or LOG_SET_QUERY. The aggregation function: AVG, MAX, MIN, SUM, or LAST.
   * 
   * @example
   * AVG
   */
  aggregate?: string;
  /**
   * @remarks
   * Applicable query type: PROMQL_QUERY.
   * 
   * Specifies whether to perform alert detection after data is complete.
   * 
   * @example
   * true
   */
  checkAfterDataComplete?: boolean;
  /**
   * @remarks
   * Applicable query type: CMS_BASIC_QUERY.  
   * 
   * The list of resource filter dimensions.
   */
  dimensions?: { [key: string]: string }[];
  /**
   * @remarks
   * The domain to which the resource belongs.
   * 
   * @example
   * rum
   */
  domain?: string;
  /**
   * @remarks
   * Applicable query type: PROMQL_QUERY.
   * 
   * The alert data duration, in seconds.
   * 
   * @example
   * 60
   */
  duration?: number;
  /**
   * @remarks
   * The array of entity field filters.
   */
  entityFields?: AlertRuleQueryEntityFields[];
  /**
   * @remarks
   * The resource filter used to filter target resources.
   */
  entityFilter?: AlertRuleQueryEntityFilter;
  /**
   * @remarks
   * Applicable query type: PROMQL_QUERY.
   * 
   * The query expression (PromQL).
   * 
   * @example
   * sum(sum(max_over_time(kube_pod_status_phase{phase=~\\"Pending\\",job=\\"_kube-state-metrics\\"}[5m])) by (pod)) > 1000
   */
  expr?: string;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * The set join operation configuration for the results of subquery 1 (queries[0]) and subquery 2 (queries[1]).
   */
  firstJoin?: AlertRuleSlsQueryJoin;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * The list of group field names.
   */
  groupFieldList?: string[];
  /**
   * @remarks
   * Applicable query type: CMS_BASIC_QUERY.
   * 
   * The associated application group ID. Valid only when relationType=GROUP.
   * 
   * @example
   * 23423
   */
  groupId?: string;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * The grouping type. Valid values:
   * - none: no grouping
   * - label: automatic label-based grouping
   * - custom: custom label-based grouping
   * 
   * @example
   * label
   */
  groupType?: string;
  /**
   * @remarks
   * The array of label filters.
   */
  labelFilters?: AlertRuleQueryLabelFilters[];
  /**
   * @remarks
   * Specified when type=LOG_SET_QUERY. The log set name.
   * 
   * @example
   * china-log-set
   */
  logSet?: string;
  /**
   * @remarks
   * The list of mark tags for the alert rule, used for categorization and retrieval.
   */
  markTags?: AlertRuleQueryMarkTags[];
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * memory
   */
  metric?: string;
  /**
   * @remarks
   * The monitoring metrics set.
   * 
   * @example
   * cpu_usage
   */
  metricSet?: string;
  /**
   * @remarks
   * Applicable query type: CMS_BASIC_QUERY.
   * 
   * The namespace of the metric.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * Specified when type=METRIC_SET_QUERY or LOG_SET_QUERY. The query time offset in seconds. Used together with windowSecs to implement an offset query of [T - windowSecs - offsetSecs, T - offsetSecs]. Valid range: 0 to 86400.
   * 
   * @example
   * 0
   */
  offsetSecs?: number;
  /**
   * @remarks
   * Applicable query types: SLS_MULTI_QUERY, APM_MULTI_QUERY.
   * 
   * The list of subqueries.
   * 
   * For the SLS_MULTI_QUERY query type, a maximum of three subqueries are supported. The number and order of subqueries must match the sub-datasource configurations in datasource.dsList.
   */
  queries?: AlertRuleQueryQueries[];
  /**
   * @remarks
   * Applicable query type: CMS_BASIC_QUERY.
   * 
   * The resource scope for the rule query. Valid values:
   * - USER: All resources under the user UID.
   * - GROUP: Application group.
   * - INSTANCE: Specified instance list.
   * 
   * @example
   * USER
   */
  relationType?: string;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * The set join operation configuration for the results of subquery 2 (queries[2]) and subquery 3 (queries[3]).
   */
  secondJoin?: AlertRuleSlsQueryJoin;
  /**
   * @remarks
   * The list of service IDs.
   */
  serviceIds?: string[];
  /**
   * @remarks
   * The query type.
   * 
   * Valid values:
   * - PROMQL_QUERY: PromQL query.
   * - SLS_MULTI_QUERY: SLS query.
   * - APM_MULTI_QUERY: APM query.
   * - CMS_BASIC_QUERY: CloudMonitor Basic monitoring query.
   * 
   * Different query types have different valid fields in the query object. Refer to the "Applicable query type" description in each field for details.
   * 
   * The query type must match the datasource type. The mapping is as follows:
   * - Prometheus datasource (PROMETHEUS_DS): PROMQL_QUERY
   * - APM datasource (APM_DS): APM_MULTI_QUERY
   * - SLS datasource (SLS_MULTI_DS): SLS_MULTI_QUERY
   * - CloudMonitor Basic monitoring data datasource (CMS_BASIC_DS): CMS_BASIC_QUERY
   * 
   * This parameter is required.
   * 
   * @example
   * PROMQL_QUERY
   */
  type?: string;
  /**
   * @remarks
   * Specified when type=METRIC_SET_QUERY or LOG_SET_QUERY. The aggregation time window in seconds. Valid range: 60 to 86400.
   * 
   * @example
   * 300
   */
  windowSecs?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      checkAfterDataComplete: 'checkAfterDataComplete',
      dimensions: 'dimensions',
      domain: 'domain',
      duration: 'duration',
      entityFields: 'entityFields',
      entityFilter: 'entityFilter',
      expr: 'expr',
      firstJoin: 'firstJoin',
      groupFieldList: 'groupFieldList',
      groupId: 'groupId',
      groupType: 'groupType',
      labelFilters: 'labelFilters',
      logSet: 'logSet',
      markTags: 'markTags',
      metric: 'metric',
      metricSet: 'metricSet',
      namespace: 'namespace',
      offsetSecs: 'offsetSecs',
      queries: 'queries',
      relationType: 'relationType',
      secondJoin: 'secondJoin',
      serviceIds: 'serviceIds',
      type: 'type',
      windowSecs: 'windowSecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      checkAfterDataComplete: 'boolean',
      dimensions: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      domain: 'string',
      duration: 'number',
      entityFields: { 'type': 'array', 'itemType': AlertRuleQueryEntityFields },
      entityFilter: AlertRuleQueryEntityFilter,
      expr: 'string',
      firstJoin: AlertRuleSlsQueryJoin,
      groupFieldList: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      groupType: 'string',
      labelFilters: { 'type': 'array', 'itemType': AlertRuleQueryLabelFilters },
      logSet: 'string',
      markTags: { 'type': 'array', 'itemType': AlertRuleQueryMarkTags },
      metric: 'string',
      metricSet: 'string',
      namespace: 'string',
      offsetSecs: 'number',
      queries: { 'type': 'array', 'itemType': AlertRuleQueryQueries },
      relationType: 'string',
      secondJoin: AlertRuleSlsQueryJoin,
      serviceIds: { 'type': 'array', 'itemType': 'string' },
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
    if(this.entityFilter && typeof (this.entityFilter as any).validate === 'function') {
      (this.entityFilter as any).validate();
    }
    if(this.firstJoin && typeof (this.firstJoin as any).validate === 'function') {
      (this.firstJoin as any).validate();
    }
    if(Array.isArray(this.groupFieldList)) {
      $dara.Model.validateArray(this.groupFieldList);
    }
    if(Array.isArray(this.labelFilters)) {
      $dara.Model.validateArray(this.labelFilters);
    }
    if(Array.isArray(this.markTags)) {
      $dara.Model.validateArray(this.markTags);
    }
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    if(this.secondJoin && typeof (this.secondJoin as any).validate === 'function') {
      (this.secondJoin as any).validate();
    }
    if(Array.isArray(this.serviceIds)) {
      $dara.Model.validateArray(this.serviceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

