// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRulesResponseBodyPageBeanAlertRulesAlertRuleContentAlertRuleItems extends $dara.Model {
  /**
   * @remarks
   * The aggregation method of the alert condition. Valid values:
   * 
   * *   AVG: calculates the average value
   * *   SUM: calculates the total value
   * *   MAX: selects the maximum value
   * *   MIN: selects the minimum value
   * 
   * @example
   * AVG
   */
  aggregate?: string;
  /**
   * @remarks
   * The metric of the alert condition.
   * 
   * @example
   * appstat.jvm.non_heap_used
   */
  metricKey?: string;
  /**
   * @remarks
   * The last N minutes.
   * 
   * @example
   * 1
   */
  n?: number;
  /**
   * @remarks
   * The operator that is used to compare the metric value with the threshold. Valid values:
   * 
   * *   CURRENT_GTE: greater than or equal to
   * *   CURRENT_LTE: less than or equal to
   * *   PREVIOUS_UP: increase in percentage compared with the previous period
   * *   PREVIOUS_DOWN: decrease in percentage compared with the previous period
   * *   HOH_UP: increase in percentage compared with the same period in the previous hour
   * *   HOH_DOWN: decrease in percentage compared with the same period in the previous hour
   * *   DOD_UP: increase in percentage compared with the same period in the previous day
   * *   DOD_DOWN: decrease in percentage compared with the same period in the previous day
   * 
   * @example
   * CURRENT_GTE
   */
  operator?: string;
  /**
   * @remarks
   * The threshold of the alert condition.
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

export class GetAlertRulesResponseBodyPageBeanAlertRulesAlertRuleContent extends $dara.Model {
  /**
   * @remarks
   * The trigger conditions of the Application Monitoring or Browser Monitoring alert rule.
   */
  alertRuleItems?: GetAlertRulesResponseBodyPageBeanAlertRulesAlertRuleContentAlertRuleItems[];
  /**
   * @remarks
   * The relationship between multiple alert conditions specified for the Application Monitoring or Browser Monitoring alert rule. Valid values:
   * 
   * *   OR: The alert rule is triggered if one of the conditions is met.
   * *   AND: The alert rule is triggered if all the conditions are met.
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
      alertRuleItems: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRulesAlertRuleContentAlertRuleItems },
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

export class GetAlertRulesResponseBodyPageBeanAlertRulesAnnotations extends $dara.Model {
  /**
   * @remarks
   * The key of the annotation.
   * 
   * @example
   * 123
   */
  name?: string;
  /**
   * @remarks
   * The value of the annotation.
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

export class GetAlertRulesResponseBodyPageBeanAlertRulesFiltersCustomSLSFilters extends $dara.Model {
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
   * The logical operator of the filter condition. Valid values:
   * 
   * *   \\=: equal to
   * *   not: not equal to
   * 
   * @example
   * =
   */
  opt?: string;
  /**
   * @remarks
   * Indicates whether this filter condition is displayed on the frontend.
   * 
   * @example
   * false
   */
  show?: boolean;
  /**
   * @remarks
   * The log type of Browser Monitoring. This field is not included in other filter conditions.
   * 
   * @example
   * null
   */
  t?: string;
  /**
   * @remarks
   * The value of the filter condition.
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

export class GetAlertRulesResponseBodyPageBeanAlertRulesFiltersDimFilters extends $dara.Model {
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
   * The logical operator of the filter condition.
   * 
   * @example
   * ALL
   */
  filterOpt?: string;
  /**
   * @remarks
   * The details of the filter condition.
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

export class GetAlertRulesResponseBodyPageBeanAlertRulesFilters extends $dara.Model {
  /**
   * @remarks
   * The custom filter condition of the Browser Monitoring alert rule.
   */
  customSLSFilters?: GetAlertRulesResponseBodyPageBeanAlertRulesFiltersCustomSLSFilters[];
  /**
   * @remarks
   * The information about the aggregation dimension.
   */
  customSLSGroupByDimensions?: string[];
  /**
   * @remarks
   * The details of the custom filter condition.
   */
  customSLSWheres?: string[];
  /**
   * @remarks
   * The information about each filter condition of the Application Monitoring or Browser Monitoring alert rule.
   */
  dimFilters?: GetAlertRulesResponseBodyPageBeanAlertRulesFiltersDimFilters[];
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
      customSLSFilters: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRulesFiltersCustomSLSFilters },
      customSLSGroupByDimensions: { 'type': 'array', 'itemType': 'string' },
      customSLSWheres: { 'type': 'array', 'itemType': 'string' },
      dimFilters: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRulesFiltersDimFilters },
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

export class GetAlertRulesResponseBodyPageBeanAlertRulesLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * 123
   */
  name?: string;
  /**
   * @remarks
   * The tag value.
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

export class GetAlertRulesResponseBodyPageBeanAlertRulesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * type
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * prod
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

export class GetAlertRulesResponseBodyPageBeanAlertRules extends $dara.Model {
  /**
   * @remarks
   * The alert check type of the Prometheus alert rule.
   * 
   * *   STATIC: static threshold
   * *   CUSTOM: custom PromQL
   * 
   * @example
   * STATIC
   */
  alertCheckType?: string;
  /**
   * @remarks
   * The alert contact group ID of the Prometheus alert rule.
   * 
   * *   \\-1: custom PromQL
   * *   1: Kubernetes load
   * *   15: Kubernetes node
   * 
   * @example
   * 1
   */
  alertGroup?: number;
  /**
   * @remarks
   * The alert rule ID.
   * 
   * @example
   * 5730***
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
   * The content of the Application Monitoring or Browser Monitoring alert rule.
   */
  alertRuleContent?: GetAlertRulesResponseBodyPageBeanAlertRulesAlertRuleContent;
  /**
   * @remarks
   * The status of the alert rule. Valid values:
   * 
   * *   RUNNING
   * *   STOPPED
   * *   PAUSED
   * 
   * >  The PAUSED state indicates that the alert rule is abnormal and has been suspended. This may be because the specified threshold value is excessively large, or the associated cluster has been deleted.
   * 
   * @example
   * RUNNING
   */
  alertStatus?: string;
  /**
   * @remarks
   * The type of the alert rule. Valid values:
   * 
   * *   APPLICATION_MONITORING_ALERT_RULE: alert rule for Application Monitoring
   * *   BROWSER_MONITORING_ALERT_RULE: alert rule for Browser Monitoring
   * *   PROMETHEUS_MONITORING_ALERT_RULE: Prometheus alert rule
   * 
   * @example
   * APPLICATION_MONITORING_ALERT_RULE
   */
  alertType?: string;
  /**
   * @remarks
   * The annotations of the Prometheus alert rule.
   */
  annotations?: GetAlertRulesResponseBodyPageBeanAlertRulesAnnotations[];
  /**
   * @remarks
   * Indicates whether the alert rule is applied to new applications that are created in Application Monitoring or Browser Monitoring. Valid values:
   * 
   * *   `true`: yes
   * *   `false`: no
   * 
   * @example
   * false
   */
  autoAddNewApplication?: boolean;
  /**
   * @remarks
   * The cluster ID of the Prometheus alert rule.
   * 
   * @example
   * ceba9b9ea5b924dd0b6726d2de6******
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the alert rule was created. The value is a timestamp. Unit: milliseconds.
   * 
   * @example
   * 1640333981000
   */
  createdTime?: number;
  /**
   * @remarks
   * The duration of the Prometheus alert rule.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The extended fields.
   * 
   * >  For existing Application Monitoring alert rules, the fields contain information such as contacts, alert template, and notification content.
   * 
   * @example
   * {\\\\"alarmContext\\\\":\\\\"{\\\\\\\\\\"content\\\\\\\\\\":\\\\\\\\Alert name: $Alert name\\\\\\\\\\\\nFilter condition: $Filter condition\\\\\\\\\\\\nAlert time: $Alert time\\\\\\\\\\\\nAlert content: $Alert content\\\\\\\\\\\\nNote: The alert persists before you receive an email that reminds you to clear the alert. You will be reminded of the alert again 24 hours later. \\\\\\\\\\",\\\\\\\\\\"subTitle\\\\\\\\\\":\\\\\\\\\\"\\\\\\\\\\"}\\\\",\\\\"alertWays\\\\":\\\\"[0,1]\\\\",\\\\"contactGroupIds\\\\":\\\\"381,5075\\\\",\\\\"notice\\\\":\\\\"{\\\\\\\\\\"endTime\\\\\\\\\\":1480607940000,\\\\\\\\\\"noticeEndTime\\\\\\\\\\":1480607940000,\\\\\\\\\\"noticeStartTime\\\\\\\\\\":1480521600000,\\\\\\\\\\"startTime\\\\\\\\\\":1480521600000}\\\\"}
   */
  extend?: string;
  /**
   * @remarks
   * The filter conditions of the Application Monitoring or Browser Monitoring alert rule.
   */
  filters?: GetAlertRulesResponseBodyPageBeanAlertRulesFilters;
  /**
   * @remarks
   * The tags of the Prometheus alert rule.
   */
  labels?: GetAlertRulesResponseBodyPageBeanAlertRulesLabels[];
  /**
   * @remarks
   * The severity level of the Prometheus alert rule.
   * 
   * *   P1: Alert notifications are sent for major issues that affect the availability of core business, have a huge impact, and may lead to serious consequences.
   * *   P2: Alert notifications are sent for service errors that affect the system availability with relatively limited impact.
   * *   P3: Alert notifications are sent for issues that may cause service errors or negative effects, or alert notifications for services that are relatively less important.
   * *   P4: Alert notifications are sent for low-priority issues that do not affect your business.
   * *   Default: Alert notifications are sent regardless of alert levels.
   * 
   * @example
   * P2
   */
  level?: string;
  /**
   * @remarks
   * The alert message of the Prometheus alert rule.
   * 
   * @example
   * Namespace: {{$labels.namespace}} / Pod: {{$labels.pod_name}} / Container: {{$labels.container}} CPU usage: {{$labels.metrics_params_opt_label_value}} {{$labels.metrics_params_value}}%. Current value: {{ printf "%.2f" $value }}%
   */
  message?: string;
  /**
   * @remarks
   * The metric type of the Application Monitoring or Browser Monitoring alert rule.
   * 
   * @example
   * JVM
   */
  metricsType?: string;
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * @example
   * ALERT_MANAGER
   */
  notifyStrategy?: string;
  /**
   * @remarks
   * The process ID (PID) of the application to which the Application Monitoring or Browser Monitoring alert rule is applied.
   */
  pids?: string[];
  /**
   * @remarks
   * The PromQL statement of the Prometheus alert rule.
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
   * The tags of the alert rule.
   */
  tags?: GetAlertRulesResponseBodyPageBeanAlertRulesTags[];
  /**
   * @remarks
   * The time when the alert rule was updated. The value is a timestamp. Unit: milliseconds.
   * 
   * @example
   * 1640333981000
   */
  updatedTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
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
      alertRuleContent: GetAlertRulesResponseBodyPageBeanAlertRulesAlertRuleContent,
      alertStatus: 'string',
      alertType: 'string',
      annotations: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRulesAnnotations },
      autoAddNewApplication: 'boolean',
      clusterId: 'string',
      createdTime: 'number',
      duration: 'string',
      extend: 'string',
      filters: GetAlertRulesResponseBodyPageBeanAlertRulesFilters,
      labels: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRulesLabels },
      level: 'string',
      message: 'string',
      metricsType: 'string',
      notifyStrategy: 'string',
      pids: { 'type': 'array', 'itemType': 'string' },
      promQL: 'string',
      regionId: 'string',
      tags: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRulesTags },
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

export class GetAlertRulesResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The alert rules.
   */
  alertRules?: GetAlertRulesResponseBodyPageBeanAlertRules[];
  /**
   * @remarks
   * The number of pages returned.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of alert rules returned per page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of queried alert rules.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertRules: 'AlertRules',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRules: { 'type': 'array', 'itemType': GetAlertRulesResponseBodyPageBeanAlertRules },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertRules)) {
      $dara.Model.validateArray(this.alertRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned pages.
   */
  pageBean?: GetAlertRulesResponseBodyPageBean;
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
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: GetAlertRulesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

