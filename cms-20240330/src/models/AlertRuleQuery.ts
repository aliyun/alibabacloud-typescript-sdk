// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleSlsQueryJoin } from "./AlertRuleSlsQueryJoin";


export class AlertRuleQueryEntityFields extends $dara.Model {
  field?: string;
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
   * 字段
   * 
   * @example
   * instanceId
   */
  field?: string;
  /**
   * @remarks
   * 比较运算符。
   * 
   * @example
   * =
   */
  operator?: string;
  /**
   * @remarks
   * 匹配的值。
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
   * 资源类型域。
   * 
   * @example
   * rum
   */
  domain?: string;
  /**
   * @remarks
   * 过滤条件列表，用于进一步筛选资源。
   */
  filters?: AlertRuleQueryEntityFilterFilters[];
  /**
   * @remarks
   * 资源类型。
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
  name?: string;
  operator?: string;
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
  key?: string;
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
   * Dimension in APM metrics.
   * 
   * @example
   * rpcType
   */
  dim?: string;
  /**
   * @remarks
   * Filter operation types:
   * 
   * - eq: equals.
   * - neq: not equals.
   * - match: regular expression match.
   * - nmatch: regular expression not match.
   * 
   * @example
   * eq
   */
  type?: string;
  /**
   * @remarks
   * The corresponding value for the filter operation.
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

export class AlertRuleQueryQueries extends $dara.Model {
  /**
   * @remarks
   * Applicable query type: APM_MULTI_QUERY.
   * ID of the APM predefined metric.
   * 
   * @example
   * appstat.jvm.ThreadNewCount
   */
  apmAlertMetricId?: string;
  /**
   * @remarks
   * Applicable query type: ARMS_MULTI_QUERY.
   * Dimension filter configuration for APM metrics. Must be used in conjunction with apmAlertMetricId.
   */
  apmFilters?: AlertRuleQueryQueriesApmFilters[];
  /**
   * @remarks
   * Applicable query type: ARMS_MULTI_QUERY.
   * List of aggregation dimensions for the query, i.e., the dimensions by which the metric is aggregated.
   */
  apmGroupBy?: string[];
  /**
   * @remarks
   * Applicable query type: ARMS_MULTI_QUERY.
   * Alert (data) duration.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * Time offset end time (relative).
   * If start and end are specified, do not specify window.
   * 
   * @example
   * 0
   */
  end?: number;
  /**
   * @remarks
   * Applicable query types: APM_MULTI_QUERY, SLS_MULTI_QUERY.
   * Query expression.
   * 
   * - For APM_MULTI_QUERY, this field is optional and contains the PromQL generated for predefined metrics (used for data preview).
   * - For SLS_MULTI_QUERY, this field contains the SQL query statement.
   * 
   * @example
   * sum by (rpc,acs_arms_service_id,pid,rpcType) (sum_over_time_lorc(arms_app_requests_count_ign_destid_endpoint_parent_ppid_prpc{callKind=~\\"http|rpc|custom_entry|server|consumer\\",pid=\\"gaddp9ap8q@cb005ffdf44b8ac\\",source=\\"apm\\"}[1m]))
   */
  expr?: string;
  name?: string;
  promQl?: string;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * SLS query time offset start time (relative).
   * If start and end are specified, do not specify window. For example: start=15, timeUnit=minute, which means 15 minutes ago.
   * 
   * @example
   * 15
   */
  start?: number;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * Time units for the start, end, and window parameters: day/hour/minute/second.
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * Exact-hour time query interval. If window is specified, start and end should not be specified.
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQuery extends $dara.Model {
  /**
   * @remarks
   * Applicable query type: PROMQL_QUERY.
   * Whether to perform alert evaluation only after data completeness is ensured.
   * 
   * @example
   * true
   */
  checkAfterDataComplete?: boolean;
  /**
   * @remarks
   * Applicable query type: CMS_BASIC_QUERY.
   * List of filtering dimensions for the resource.
   */
  dimensions?: { [key: string]: string }[];
  /**
   * @remarks
   * 资源所属的领域。
   * 
   * @example
   * rum
   */
  domain?: string;
  /**
   * @remarks
   * Applicable query type: PROMQL_QUERY.
   * Duration of alert data, in seconds.
   * 
   * @example
   * 60
   */
  duration?: number;
  entityFields?: AlertRuleQueryEntityFields[];
  /**
   * @remarks
   * 资源过滤器，用于筛选目标资源。
   */
  entityFilter?: AlertRuleQueryEntityFilter;
  /**
   * @remarks
   * Applicable query type: PROMQL_QUERY.
   * Query expression (PromQL).
   * 
   * @example
   * sum(sum(max_over_time(kube_pod_status_phase{phase=~\\"Pending\\",job=\\"_kube-state-metrics\\"}[5m])) by (pod)) > 1000
   */
  expr?: string;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * Configuration for the set join operation between the results of subquery 1 (queries[0]) and subquery 2 (queries[1]).
   */
  firstJoin?: AlertRuleSlsQueryJoin;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * List of grouping field names.
   */
  groupFieldList?: string[];
  /**
   * @remarks
   * Applicable query type: CMS_BASIC_QUERY.
   * Associated application group ID, valid only when relationType = GROUP.
   * 
   * @example
   * 23423
   */
  groupId?: string;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * Grouping type, with the following possible values:
   * 
   * - none: No grouping.
   * - label: Automatic label grouping.
   * - custom: Custom label grouping.
   * 
   * @example
   * label
   */
  groupType?: string;
  labelFilters?: AlertRuleQueryLabelFilters[];
  markTags?: AlertRuleQueryMarkTags[];
  /**
   * @remarks
   * 指标名。
   * 
   * @example
   * memory
   */
  metric?: string;
  /**
   * @remarks
   * 监控指标集合。
   * 
   * @example
   * cpu_usage
   */
  metricSet?: string;
  /**
   * @remarks
   * Applicable query type: CMS_BASIC_QUERY.
   * Namespace of the metric.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * Applicable query types: SLS_MULTI_QUERY, APM_MULTI_QUERY.
   * List of subqueries.
   * 
   * For the SLS_MULTI_QUERY type, the list can contain up to three subqueries, and the number and order of subqueries must match the sub-datasource configurations in datasource.dsList.
   */
  queries?: AlertRuleQueryQueries[];
  /**
   * @remarks
   * Applicable query type: CMS_BASIC_QUERY.
   * Resource scope for the rule query, with the following allowed values:
   * - USER: All resources under the user\\"s UID.
   * - GROUP: Application group.
   * - INSTANCE: Specified list of instances.
   * 
   * @example
   * USER
   */
  relationType?: string;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * Configuration for the set join operation between the results of subquery 2 (queries[2]) and subquery 3 (queries[3]).
   */
  secondJoin?: AlertRuleSlsQueryJoin;
  /**
   * @remarks
   * Service ID list.
   */
  serviceIds?: string[];
  /**
   * @remarks
   * Query type.
   * 
   * Valid values:
   * 
   * - PROMQL_QUERY: PromQL query
   * - SLS_MULTI_QUERY: SLS query
   * - APM_MULTI_QUERY: APM query
   * - CMS_BASIC_QUERY: Basic CloudMonitor query
   * 
   * The valid fields within the query object vary depending on the query type. Refer to the "Applicable query type" description in each field\\"s documentation for details.
   * 
   * The query type must match the data source type, with the following correspondences:
   * 
   * - Prometheus data source (PROMETHEUS_DS): PROMQL_QUERY
   * - APM data source (APM_DS): APM_MULTI_QUERY
   * - SLS data source (SLS_MULTI_DS): SLS_MULTI_QUERY
   * - Basic CloudMonitor data source (CMS_BASIC_DS): CMS_BASIC_QUERY.
   * 
   * This parameter is required.
   * 
   * @example
   * PROMQL_QUERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
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
      markTags: 'markTags',
      metric: 'metric',
      metricSet: 'metricSet',
      namespace: 'namespace',
      queries: 'queries',
      relationType: 'relationType',
      secondJoin: 'secondJoin',
      serviceIds: 'serviceIds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      markTags: { 'type': 'array', 'itemType': AlertRuleQueryMarkTags },
      metric: 'string',
      metricSet: 'string',
      namespace: 'string',
      queries: { 'type': 'array', 'itemType': AlertRuleQueryQueries },
      relationType: 'string',
      secondJoin: AlertRuleSlsQueryJoin,
      serviceIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
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

