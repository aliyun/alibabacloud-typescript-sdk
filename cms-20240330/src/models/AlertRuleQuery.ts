// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleSlsQueryJoin } from "./AlertRuleSlsQueryJoin";


export class AlertRuleQueryEntityFields extends $dara.Model {
  /**
   * @remarks
   * The name of the entity field.
   * 
   * @example
   * instanceId
   */
  field?: string;
  /**
   * @remarks
   * The value of the field.
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
   * The value to match.
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
   * The domain of the resource type.
   * 
   * @example
   * rum
   */
  domain?: string;
  /**
   * @remarks
   * A list of filter conditions to further screen resources.
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
   * The name of the label.
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
   * The value of the label.
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
   * The dimension in the APM metric.
   * 
   * @example
   * rpcType
   */
  dim?: string;
  /**
   * @remarks
   * The filter operation type:
   * 
   * - eq: Equal to
   * 
   * - neq: Not equal to
   * 
   * - match: Regular expression match
   * 
   * - nmatch: Regular expression non-match
   * 
   * @example
   * eq
   */
  type?: string;
  /**
   * @remarks
   * The value that corresponds to the filter operation.
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
   * 
   * The ID of the predefined Application Performance Management (APM) metric.
   * 
   * @example
   * appstat.jvm.ThreadNewCount
   */
  apmAlertMetricId?: string;
  /**
   * @remarks
   * Applicable query type: ARMS_MULTI_QUERY.
   * 
   * The dimension filter configuration for the APM metric. This parameter must be used with apmAlertMetricId.
   */
  apmFilters?: AlertRuleQueryQueriesApmFilters[];
  /**
   * @remarks
   * Applicable query type: ARMS_MULTI_QUERY.
   * 
   * A list of aggregation dimensions for the query. This specifies the metric dimensions to use for aggregation.
   */
  apmGroupBy?: string[];
  /**
   * @remarks
   * Applicable query type: ARMS_MULTI_QUERY.
   * 
   * The duration of the alert data.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * The relative end time of the time offset.
   * 
   * If you specify start and end, do not specify window.
   * 
   * @example
   * 0
   */
  end?: number;
  /**
   * @remarks
   * Applicable query types: APM_MULTI_QUERY and SLS_MULTI_QUERY.
   * 
   * The query expression.
   * 
   * - For APM_MULTI_QUERY, this parameter is optional. It is the PromQL expression generated for a predefined metric, used for data preview.
   * 
   * - For SLS_MULTI_QUERY, this parameter is the SQL search statement.
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
   * 
   * The relative start time of the time offset for an SLS query.
   * 
   * If you specify start and end, do not specify window. For example, if start is 15 and timeUnit is minute, the time offset starts 15 minutes ago.
   * 
   * @example
   * 15
   */
  start?: number;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * The time unit for the start, end, and window parameters. Valid values: day, hour, minute, and second.
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * The query interval for a time frame. If you specify window, do not specify start and end.
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
   * 
   * Specifies whether to run the alert check only after the data is complete.
   * 
   * @example
   * true
   */
  checkAfterDataComplete?: boolean;
  /**
   * @remarks
   * Applicable query type: CMS_BASIC_QUERY.
   * 
   * A list of filter dimensions for the resource.
   */
  dimensions?: { [key: string]: string }[];
  /**
   * @remarks
   * The realm to which the resource belongs.
   * 
   * @example
   * rum
   */
  domain?: string;
  /**
   * @remarks
   * Applicable query type: PROMQL_QUERY.
   * 
   * The duration for which the alert data persists, in seconds.
   * 
   * @example
   * 60
   */
  duration?: number;
  /**
   * @remarks
   * An array of entity field filters.
   */
  entityFields?: AlertRuleQueryEntityFields[];
  /**
   * @remarks
   * A resource filter used to screen target resources.
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
   * The configuration for the join operation on the result sets of subquery 1 (queries[0]) and subquery 2 (queries[1]).
   */
  firstJoin?: AlertRuleSlsQueryJoin;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * A list of grouping field names.
   */
  groupFieldList?: string[];
  /**
   * @remarks
   * Applicable query type: CMS_BASIC_QUERY.
   * 
   * The ID of the associated application group. This parameter is valid only when relationType is set to GROUP.
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
   * 
   * - none: No grouping.
   * 
   * - label: Automatic grouping by tag.
   * 
   * - custom: Custom grouping by tag.
   * 
   * @example
   * label
   */
  groupType?: string;
  /**
   * @remarks
   * An array of label filters.
   */
  labelFilters?: AlertRuleQueryLabelFilters[];
  markTags?: AlertRuleQueryMarkTags[];
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * memory
   */
  metric?: string;
  /**
   * @remarks
   * The collection of metrics.
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
   * Applicable query types: SLS_MULTI_QUERY and APM_MULTI_QUERY.
   * 
   * A list of subqueries.
   * 
   * For the SLS_MULTI_QUERY type, you can include up to three subqueries. The number and order of subqueries must match the sub-datasource configurations in datasource.dsList.
   */
  queries?: AlertRuleQueryQueries[];
  /**
   * @remarks
   * Applicable query type: CMS_BASIC_QUERY.
   * 
   * The resource scope for the rule query. Valid values:
   * 
   * - USER: All resources under the user ID.
   * 
   * - GROUP: An application group.
   * 
   * - INSTANCE: A list of specified instances.
   * 
   * @example
   * USER
   */
  relationType?: string;
  /**
   * @remarks
   * Applicable query type: SLS_MULTI_QUERY.
   * 
   * The configuration for the join operation on the result sets of subquery 2 (queries[2]) and subquery 3 (queries[3]).
   */
  secondJoin?: AlertRuleSlsQueryJoin;
  /**
   * @remarks
   * A list of service IDs.
   */
  serviceIds?: string[];
  /**
   * @remarks
   * The query type.
   * 
   * Valid values:
   * 
   * - PROMQL_QUERY: A PromQL query.
   * 
   * - SLS_MULTI_QUERY: A Simple Log Service (SLS) query.
   * 
   * - APM_MULTI_QUERY: An APM query.
   * 
   * - CMS_BASIC_QUERY: A basic CloudMonitor query.
   * 
   * Different query types have different valid parameters in the query object. For more information, see the "Applicable query type" description for each parameter.
   * 
   * The query type must match the data source type. The mappings are as follows:
   * 
   * - Prometheus data source (PROMETHEUS_DS): PROMQL_QUERY
   * 
   * - APM data source (APM_DS): APM_MULTI_QUERY
   * 
   * - SLS data source (SLS_MULTI_DS): SLS_MULTI_QUERY
   * 
   * - Basic CloudMonitor data source (CMS_BASIC_DS): CMS_BASIC_QUERY
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

