// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateAlertRuleResponseBodyAlertRuleAlertRuleContentAlertRuleItems extends $dara.Model {
  /**
   * @remarks
   * The aggregation method for the alert condition.
   * 
   * - `AVG`: average
   * 
   * - `SUM`: sum
   * 
   * - `MAX`: maximum
   * 
   * - `MIN`: minimum
   * 
   * @example
   * AVG
   */
  aggregate?: string;
  /**
   * @remarks
   * The metric that is evaluated by the alert condition.
   * 
   * @example
   * JVM非堆总使用内存量
   */
  metricKey?: string;
  /**
   * @remarks
   * The duration of the time window, in minutes, for evaluating the alert condition.
   * 
   * @example
   * 1
   */
  n?: number;
  /**
   * @remarks
   * The operator used to compare the aggregated metric value with the threshold.
   * 
   * - `CURRENT_GTE`: greater than or equal to
   * 
   * - `CURRENT_LTE`: less than or equal to
   * 
   * - `PREVIOUS_UP`: period-over-period increase percentage
   * 
   * - `PREVIOUS_DOWN`: period-over-period decrease percentage
   * 
   * - `HOH_UP`: hour-over-hour increase percentage
   * 
   * - `HOH_DOWN`: hour-over-hour decrease percentage
   * 
   * - `DOD_UP`: day-over-day increase percentage
   * 
   * - `DOD_DOWN`: day-over-day decrease percentage
   * 
   * @example
   * CURRENT_GTE
   */
  operator?: string;
  /**
   * @remarks
   * The threshold for the alert condition.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'Aggregate',
      metricKey: 'MetricKey',
      n: 'N',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      metricKey: 'string',
      n: 'number',
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

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleAlertRuleContent extends $dara.Model {
  /**
   * @remarks
   * The alert conditions. This applies to application monitoring and browser monitoring alert rules.
   */
  alertRuleItems?: CreateOrUpdateAlertRuleResponseBodyAlertRuleAlertRuleContentAlertRuleItems[];
  /**
   * @remarks
   * The logical operator for combining multiple alert conditions. This applies to application monitoring and browser monitoring.
   * 
   * - `OR`: The alert is triggered if any condition is met.
   * 
   * - `AND`: The alert is triggered only if all conditions are met.
   * 
   * @example
   * OR
   */
  condition?: string;
  static names(): { [key: string]: string } {
    return {
      alertRuleItems: 'AlertRuleItems',
      condition: 'Condition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRuleItems: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseBodyAlertRuleAlertRuleContentAlertRuleItems },
      condition: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertRuleItems)) {
      $dara.Model.validateArray(this.alertRuleItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleAnnotations extends $dara.Model {
  /**
   * @remarks
   * The annotation key.
   * 
   * @example
   * 123
   */
  name?: string;
  /**
   * @remarks
   * The annotation value.
   * 
   * @example
   * abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleFiltersCustomSLSFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition.
   * 
   * @example
   * username
   */
  key?: string;
  /**
   * @remarks
   * The operator for the filter condition.
   * 
   * - `=`: equals
   * 
   * - `not`: not equal to
   * 
   * @example
   * =
   */
  opt?: string;
  /**
   * @remarks
   * Indicates whether the filter condition is displayed on the console.
   * 
   * @example
   * false
   */
  show?: boolean;
  /**
   * @remarks
   * Used exclusively to distinguish between log types in browser monitoring. This parameter does not apply to other filter conditions.
   * 
   * @example
   * null
   */
  t?: string;
  /**
   * @remarks
   * The value for the filter condition.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      opt: 'Opt',
      show: 'Show',
      t: 'T',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      opt: 'string',
      show: 'boolean',
      t: 'string',
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

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleFiltersDimFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition.
   * 
   * @example
   * rootIp
   */
  filterKey?: string;
  /**
   * @remarks
   * The operator for the filter condition.
   * 
   * @example
   * ALL
   */
  filterOpt?: string;
  /**
   * @remarks
   * The values for the filter condition.
   */
  filterValues?: string[];
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterOpt: 'FilterOpt',
      filterValues: 'FilterValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterOpt: 'string',
      filterValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.filterValues)) {
      $dara.Model.validateArray(this.filterValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleFilters extends $dara.Model {
  /**
   * @remarks
   * The custom filter conditions for the browser monitoring alert rule.
   */
  customSLSFilters?: CreateOrUpdateAlertRuleResponseBodyAlertRuleFiltersCustomSLSFilters[];
  /**
   * @remarks
   * The aggregation dimensions.
   */
  customSLSGroupByDimensions?: string[];
  /**
   * @remarks
   * The configured filter conditions.
   */
  customSLSWheres?: string[];
  /**
   * @remarks
   * The filter conditions of the alert rule. This applies to application monitoring or browser monitoring.
   */
  dimFilters?: CreateOrUpdateAlertRuleResponseBodyAlertRuleFiltersDimFilters[];
  static names(): { [key: string]: string } {
    return {
      customSLSFilters: 'CustomSLSFilters',
      customSLSGroupByDimensions: 'CustomSLSGroupByDimensions',
      customSLSWheres: 'CustomSLSWheres',
      dimFilters: 'DimFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSLSFilters: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseBodyAlertRuleFiltersCustomSLSFilters },
      customSLSGroupByDimensions: { 'type': 'array', 'itemType': 'string' },
      customSLSWheres: { 'type': 'array', 'itemType': 'string' },
      dimFilters: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseBodyAlertRuleFiltersDimFilters },
    };
  }

  validate() {
    if(Array.isArray(this.customSLSFilters)) {
      $dara.Model.validateArray(this.customSLSFilters);
    }
    if(Array.isArray(this.customSLSGroupByDimensions)) {
      $dara.Model.validateArray(this.customSLSGroupByDimensions);
    }
    if(Array.isArray(this.customSLSWheres)) {
      $dara.Model.validateArray(this.customSLSWheres);
    }
    if(Array.isArray(this.dimFilters)) {
      $dara.Model.validateArray(this.dimFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleLabels extends $dara.Model {
  /**
   * @remarks
   * The label key.
   * 
   * @example
   * 123
   */
  name?: string;
  /**
   * @remarks
   * The label value.
   * 
   * @example
   * abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class CreateOrUpdateAlertRuleResponseBodyAlertRuleTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * owner
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * John
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class CreateOrUpdateAlertRuleResponseBodyAlertRule extends $dara.Model {
  /**
   * @remarks
   * The check type of the Prometheus alert rule.
   * 
   * - `STATIC`: The alert is triggered based on a static threshold.
   * 
   * - `CUSTOM`: The alert is triggered based on a custom PromQL expression.
   * 
   * @example
   * STATIC
   */
  alertCheckType?: string;
  /**
   * @remarks
   * The alert group for the Prometheus alert rule.
   * 
   * - `-1`: Custom PromQL
   * 
   * - `1`: Kubernetes Workloads
   * 
   * - `15`: Kubernetes Nodes
   * 
   * @example
   * -1
   */
  alertGroup?: number;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 5510445
   */
  alertId?: number;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * arms-test
   */
  alertName?: string;
  /**
   * @remarks
   * The content of the alert rule. This applies to application monitoring and browser monitoring.
   */
  alertRuleContent?: CreateOrUpdateAlertRuleResponseBodyAlertRuleAlertRuleContent;
  /**
   * @remarks
   * The status of the alert rule.
   * 
   * - `RUNNING`: The alert rule is running.
   * 
   * - `STOPPED`: The alert rule is stopped.
   * 
   * - `PAUSED`: The alert rule is paused.
   * 
   * > The `PAUSED` status indicates that the system has automatically suspended the alert rule due to an abnormality. This can happen if the alert rule generates too many distinct time series or its associated cluster is deleted.
   * 
   * @example
   * RUNNING
   */
  alertStatus?: string;
  /**
   * @remarks
   * The type of the alert rule. Valid values:
   * 
   * - `APPLICATION_MONITORING_ALERT_RULE`: an alert rule for application monitoring.
   * 
   * - `BROWSER_MONITORING_ALERT_RULE`: an alert rule for browser monitoring.
   * 
   * - `PROMETHEUS_MONITORING_ALERT_RULE`: an alert rule for Prometheus monitoring.
   * 
   * @example
   * APPLICATION_MONITORING_ALERT_RULE
   */
  alertType?: string;
  /**
   * @remarks
   * The annotations of the Prometheus alert rule.
   */
  annotations?: CreateOrUpdateAlertRuleResponseBodyAlertRuleAnnotations[];
  /**
   * @remarks
   * Indicates whether newly created applications are automatically added to the alert rule. This applies to application monitoring and browser monitoring rules.
   * 
   * - `true`: Enabled
   * 
   * - `false`: Disabled
   * 
   * @example
   * false
   */
  autoAddNewApplication?: boolean;
  /**
   * @remarks
   * The ID of the cluster that is associated with the Prometheus alert rule.
   * 
   * @example
   * ceba9b9ea5b924dd0b6726d2de6******
   */
  clusterId?: string;
  /**
   * @remarks
   * The UNIX timestamp, in milliseconds, when the alert rule was created.
   * 
   * @example
   * 1641438611000
   */
  createdTime?: number;
  /**
   * @remarks
   * The duration, in minutes, for which a condition must be true before an alert is triggered. This applies only to Prometheus alert rules.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The extended fields, returned as a JSON string.
   * 
   * @example
   * {\\"alarmContext\\":\\"{\\\\\\"content\\\\\\":\\\\\\"报警名称:$报警名称\\\\\\\\n筛选条件: $筛选\\\\\\\\n报警时间: $报警时间\\\\\\\\n报警内容: $报警内容\\\\\\\\n注意！：该报警未收到恢复邮件之前，正在持续报警中，24小时后会再次提醒您！\\\\\\",\\\\\\"subTitle\\\\\\":\\\\\\"\\\\\\"}\\",\\"alertWays\\":\\"[0,1]\\",\\"contactGroupIds\\":\\"381,5075\\",\\"notice\\":\\"{\\\\\\"endTime\\\\\\":1480607940000,\\\\\\"noticeEndTime\\\\\\":1480607940000,\\\\\\"noticeStartTime\\\\\\":1480521600000,\\\\\\"startTime\\\\\\":1480521600000}\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The filters of the alert rule. This applies to application monitoring or browser monitoring.
   */
  filters?: CreateOrUpdateAlertRuleResponseBodyAlertRuleFilters;
  /**
   * @remarks
   * The labels of the Prometheus alert rule.
   */
  labels?: CreateOrUpdateAlertRuleResponseBodyAlertRuleLabels[];
  /**
   * @remarks
   * The severity level of the Prometheus alert rule.
   * 
   * - `P1`: Critical. Indicates major issues that affect core business availability and can have severe consequences.
   * 
   * - `P2`: Warning. Indicates issues that impact system availability but have a limited scope.
   * 
   * - `P3`: Info. Indicates potential issues or alerts from less critical services.
   * 
   * - `P4`: Low priority. Indicates informational alerts that do not affect services.
   * 
   * - `Default`: The default level used when no specific severity is required.
   * 
   * @example
   * P2
   */
  level?: string;
  /**
   * @remarks
   * The message of the Prometheus alert rule.
   * 
   * @example
   * 命名空间: {{$labels.namespace}} / Pod: {{$labels.pod_name}} / 容器: {{$labels.container}} 内存使用率超过80%, 当前值{{ printf \\\\\\"%.2f\\\\\\" $value }}%
   */
  message?: string;
  /**
   * @remarks
   * The metric type of the alert rule. This applies to application monitoring and browser monitoring.
   * 
   * @example
   * JVM
   */
  metricsType?: string;
  /**
   * @remarks
   * The notification mode.
   * 
   * @example
   * NORMAL_MODE
   */
  notifyMode?: string;
  /**
   * @remarks
   * The notification policy.
   * 
   * @example
   * ALERT_MANAGER
   */
  notifyStrategy?: string;
  /**
   * @remarks
   * The PIDs of the applications associated with the alert rule. This applies to application monitoring and browser monitoring rules.
   */
  pids?: string[];
  /**
   * @remarks
   * The PromQL expression for the Prometheus alert rule.
   * 
   * @example
   * node_memory_MemAvailable_bytes{} / node_memory_MemTotal_bytes{} * 100
   */
  promQL?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags that are added to the alert rule.
   */
  tags?: CreateOrUpdateAlertRuleResponseBodyAlertRuleTags[];
  /**
   * @remarks
   * The UNIX timestamp, in milliseconds, when the alert rule was last updated.
   * 
   * @example
   * 1641438611000
   */
  updatedTime?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1131971649******
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alertCheckType: 'AlertCheckType',
      alertGroup: 'AlertGroup',
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertRuleContent: 'AlertRuleContent',
      alertStatus: 'AlertStatus',
      alertType: 'AlertType',
      annotations: 'Annotations',
      autoAddNewApplication: 'AutoAddNewApplication',
      clusterId: 'ClusterId',
      createdTime: 'CreatedTime',
      duration: 'Duration',
      extend: 'Extend',
      filters: 'Filters',
      labels: 'Labels',
      level: 'Level',
      message: 'Message',
      metricsType: 'MetricsType',
      notifyMode: 'NotifyMode',
      notifyStrategy: 'NotifyStrategy',
      pids: 'Pids',
      promQL: 'PromQL',
      regionId: 'RegionId',
      tags: 'Tags',
      updatedTime: 'UpdatedTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCheckType: 'string',
      alertGroup: 'number',
      alertId: 'number',
      alertName: 'string',
      alertRuleContent: CreateOrUpdateAlertRuleResponseBodyAlertRuleAlertRuleContent,
      alertStatus: 'string',
      alertType: 'string',
      annotations: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseBodyAlertRuleAnnotations },
      autoAddNewApplication: 'boolean',
      clusterId: 'string',
      createdTime: 'number',
      duration: 'string',
      extend: 'string',
      filters: CreateOrUpdateAlertRuleResponseBodyAlertRuleFilters,
      labels: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseBodyAlertRuleLabels },
      level: 'string',
      message: 'string',
      metricsType: 'string',
      notifyMode: 'string',
      notifyStrategy: 'string',
      pids: { 'type': 'array', 'itemType': 'string' },
      promQL: 'string',
      regionId: 'string',
      tags: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleResponseBodyAlertRuleTags },
      updatedTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(this.alertRuleContent && typeof (this.alertRuleContent as any).validate === 'function') {
      (this.alertRuleContent as any).validate();
    }
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    if(this.filters && typeof (this.filters as any).validate === 'function') {
      (this.filters as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.pids)) {
      $dara.Model.validateArray(this.pids);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAlertRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert rule object.
   */
  alertRule?: CreateOrUpdateAlertRuleResponseBodyAlertRule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 337B8F7E-0A64-5768-9225-E9B3CF******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertRule: 'AlertRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRule: CreateOrUpdateAlertRuleResponseBodyAlertRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.alertRule && typeof (this.alertRule as any).validate === 'function') {
      (this.alertRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

