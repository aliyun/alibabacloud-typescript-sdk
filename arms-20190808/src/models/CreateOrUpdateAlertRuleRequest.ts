// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateAlertRuleRequestMarkTags extends $dara.Model {
  /**
   * @remarks
   * The Tag Key.
   * 
   * @example
   * service
   */
  key?: string;
  /**
   * @remarks
   * The Tag Value.
   * 
   * @example
   * proudct
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

export class CreateOrUpdateAlertRuleRequestTags extends $dara.Model {
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

export class CreateOrUpdateAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The alert check type of the Prometheus alert rule. Valid values:
   * 
   * *   STATIC: a static threshold value. If you set the parameter to STATIC, you must specify the **MetricsKey** parameter. For more information, see the **Correspondence between AlertGroup and MetricsKey for Prometheus Service** table.
   * *   CUSTOM: a custom PromQL statement. If you set the parameter to CUSTOM, you must specify the **PromQL**, **Duration**, and **Message** parameters to create a Prometheus alert rule.
   * 
   * @example
   * STATIC
   */
  alertCheckType?: string;
  /**
   * @remarks
   * The alert contact group ID of the Prometheus alert rule. Valid values:
   * 
   * *   \\-1: custom PromQL
   * *   1: Kubernetes load
   * *   15: Kubernetes node
   * 
   * @example
   * -1
   */
  alertGroup?: number;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * *   If you do not specify this parameter, a new alert rule is created.
   * *   If you specify this parameter, the specified alert rule is modified.
   * 
   * @example
   * 546xxx
   */
  alertId?: number;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * Alert Rule Demo
   */
  alertName?: string;
  /**
   * @remarks
   * The configuration of the alert sending channel. This parameter is used to be compatible with the old version of the rule.
   * 
   * @example
   * -
   */
  alertPiplines?: string;
  /**
   * @remarks
   * The content of the Application Monitoring or Browser Monitoring alert rule. The following code provides an example of the **AlertRuleContent** parameter. For more information about the meaning of each field, see the supplementary description.
   * 
   * ```json
   * { 
   *     "Condition": "OR",
   *      "AlertRuleItems": [
   *              { "Operator": "CURRENT_LTE",
   *                  "MetricKey": "appstat.jvm.threadcount",
   *                  "Value": 1000,
   *                  "Aggregate": "AVG",
   *                   "N": 10,
   *                   "Tolerability": 169
   *             } 
   *        ]  
   *   }
   * ```
   * 
   * >  The filter conditions specified by the **AlertRuleItems.MetricKey** field depends on the value of the **MetricsType** parameter. For more information about the types of metrics supported by Application Monitoring and Browser Monitoring and the alert rule fields corresponding to each metric, see the supplementary description.
   * 
   * @example
   * { "Condition": "OR", "AlertRuleItems": [ { "Operator": "CURRENT_LTE",  "MetricKey": "appstat.jvm.threadcount",  "Value": 1000,  "Aggregate": "AVG",   "N": 1  }  ]  }
   */
  alertRuleContent?: string;
  /**
   * @remarks
   * The status of the alert rule. Valid values:
   * 
   * *   RUNNING (default)
   * *   STOPPED
   * 
   * @example
   * RUNNING
   */
  alertStatus?: string;
  /**
   * @remarks
   * The type of the alert rule. Valid values:
   * 
   * *   APPLICATION_MONITORING_ALERT_RULE: an alert rule for Application Monitoring.
   * *   BROWSER_MONITORING_ALERT_RULE: an alert rule for Browser Monitoring.
   * *   PROMETHEUS_MONITORING_ALERT_RULE: an alert rule for Managed Service for Prometheus.
   * *   XTRACE_MONITORING_ALERT_RULE: an alert rule for Managed Service for OpenTelemetry.
   * *   EBPF_MONITORING_ALERT_RULE: an alert rule for Application Monitoring eBPF Edition.
   * *   RUM_MONITORING_ALERT_RULE: an alert rule for Real User Monitoring.
   * 
   * Valid values:
   * 
   * *   PROMETHEUS_MONITORING_ALERT_RULE
   * *   APPLICATION_MONITORING_ALERT_RULE
   * *   BROWSER_MONITORING_ALERT_RULE
   * *   prometheus monitoring alert
   * *   application monitoring alert
   * *   browser monitoring alert
   * *   XTRACE_MONITORING_ALERT_RULE
   * *   EBPF_MONITORING_ALERT_RULE
   * *   RUM_MONITORING_ALERT_RULE
   * 
   * This parameter is required.
   * 
   * @example
   * APPLICATION_MONITORING_ALERT_RULE
   */
  alertType?: string;
  /**
   * @remarks
   * The annotations of the Prometheus alert rule.
   * 
   * @example
   * [ { "Value": "PolarDB slow queries", "Name": "_aliyun_display_name" }
   */
  annotations?: string;
  /**
   * @remarks
   * Specifies whether to apply the alert rule to new applications that are created in Application Monitoring or Browser Monitoring. Valid values:
   * 
   * *   `true`: enables the health check feature.
   * *   `false`: disables the automatic backup feature.
   * 
   * @example
   * false
   */
  autoAddNewApplication?: boolean;
  /**
   * @remarks
   * The configurations that are automatically appended to monitor the application based on the specified alert rule.
   * 
   * *   autoAddMatchType:
   * 
   *     the matching mode. Valid values: REGULAR and NOT_REGULAR.
   * 
   * *   autoAddMatchExp: the regular expression
   * 
   * @example
   * {\\"autoAddMatchType\\":\\"REGULAR\\",\\"autoAddMatchExp\\":\\".*cbw.*\\"}
   */
  autoAddTargetConfig?: string;
  /**
   * @remarks
   * The interval for checking the alerts in Managed Service for Prometheus.
   * 
   * @example
   * 1
   */
  checkCycle?: number;
  /**
   * @remarks
   * The ID of the monitored cluster.
   * 
   * @example
   * ceba9b9ea5b924dd0b6726d2de6******
   */
  clusterId?: string;
  /**
   * @remarks
   * Data Configuration. The dataRevision field specifies the data repair method when there is no data for the metric.
   * 
   * - Fill with zero: 0
   * - Fill with one: 1
   * - Fill with null: 2 (default, does not trigger an alarm)
   * 
   * @example
   * {
   *     "dataRevision": 2
   * }
   */
  dataConfig?: string;
  /**
   * @remarks
   * The duration of the Prometheus alert rule, in minutes, in the range of [0,1440].
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The filter conditions of the Application Monitoring or Browser Monitoring alert rule. Format:
   * 
   *     "DimFilters": [ 
   *     { 
   *      "FilterOpt": "ALL",
   *     "FilterValues": [],         //The value of the filter condition.
   *     "FilterKey": "rootIp"     //The key of the filter condition.
   *     }
   *     ]
   * 
   * Valid values of **FilterOpt**:
   * 
   * *   STATIC: matches the value of the specified dimension.
   * *   ALL: traverses all dimension values. Dynamic thresholds do not support traversal.
   * *   DISABLE: aggregates the values of all dimensions.
   * 
   * @example
   * {"DimFilters": [             {               "FilterOpt": "ALL",               "FilterValues": [],               "FilterKey": "rootIp"             }           ]         }
   */
  filters?: string;
  /**
   * @remarks
   * The tags of the Prometheus alert rule.
   * 
   * @example
   * [  { "Value": "cms_polardb",             "Name": "_aliyun_cloud_product"           }         ]
   */
  labels?: string;
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
   * Application Tags. Used for application monitoring alert rules, to filter applications associated with alert rules.
   */
  markTags?: CreateOrUpdateAlertRuleRequestMarkTags[];
  /**
   * @remarks
   * The alert message of the Prometheus alert rule.
   * 
   * @example
   * Namespace: {{$labels.namespace}} / Pod: {{$labels.pod_name}} / Container: {{$labels.container}} Memory usage exceeds 80%. Current value: {{ printf \\\\\\\\\\"%.2f\\\\\\\\\\" $value }}%
   */
  message?: string;
  /**
   * @remarks
   * The alert metrics. If you set the **AlertCheckType** parameter to **STATIC** when you create a Prometheus alert rule, you must specify the **MetricsKey** parameter.
   * 
   * > Alert metrics vary depending on the value of the **AlertGroup** parameter. For more information about the correspondence between **AlertGroup** and **MetricsKey**, see the supplementary description.
   * 
   * @example
   * pop.status.error
   */
  metricsKey?: string;
  /**
   * @remarks
   * The metric type of the Application Monitoring or Browser Monitoring alert rule. For more information, see the following table.
   * 
   * @example
   * jvm
   */
  metricsType?: string;
  /**
   * @remarks
   * The effective time and notification time. This parameter is used to be compatible with the old version of the rule.
   * 
   * @example
   * -
   */
  notice?: string;
  /**
   * @remarks
   * The notification mode. You can specify normal mode or simple mode.
   * 
   * *   DIRECTED_MODE
   * *   NORMAL_MODE
   * 
   * @example
   * NORMAL_MODE
   */
  notifyMode?: string;
  /**
   * @remarks
   * The notification policy.
   * 
   * *   If you set this parameter to null, no notification policy is specified. After you create an alert rule, you can create a notification policy and specify match rules and match conditions. For example, you can specify the name of the alert rule as the match condition. When the alert rule is triggered, an alert event is generated and an alert notification is sent to the contacts or contact groups that are specified in the notification policy.
   * *   To specify a notification policy, set this parameter to the ID of the notification policy. Application Real-Time Monitoring Service (ARMS) automatically adds a match rule to the notification policy and specifies the ID of the alert rule as the match condition. The name of the alert rule is also displayed. This way, the alert events that are generated based on the alert rule can be matched by the specified notification policy.
   * 
   * @example
   * 569xxx
   */
  notifyStrategy?: string;
  /**
   * @remarks
   * The process ID (PID) that is associated with the Application Monitoring or Browser Monitoring alert rule.
   * 
   * @example
   * ["b590lhguqs@40d8deedfa9******"]
   */
  pids?: string;
  /**
   * @remarks
   * The product code. If you specify this parameter when you create a Prometheus alert rule, the backend checks whether the product exists.
   * 
   * @example
   * clickhouse
   */
  product?: string;
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
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: CreateOrUpdateAlertRuleRequestTags[];
  aliyunLang?: string;
  static names(): { [key: string]: string } {
    return {
      alertCheckType: 'AlertCheckType',
      alertGroup: 'AlertGroup',
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertPiplines: 'AlertPiplines',
      alertRuleContent: 'AlertRuleContent',
      alertStatus: 'AlertStatus',
      alertType: 'AlertType',
      annotations: 'Annotations',
      autoAddNewApplication: 'AutoAddNewApplication',
      autoAddTargetConfig: 'AutoAddTargetConfig',
      checkCycle: 'CheckCycle',
      clusterId: 'ClusterId',
      dataConfig: 'DataConfig',
      duration: 'Duration',
      filters: 'Filters',
      labels: 'Labels',
      level: 'Level',
      markTags: 'MarkTags',
      message: 'Message',
      metricsKey: 'MetricsKey',
      metricsType: 'MetricsType',
      notice: 'Notice',
      notifyMode: 'NotifyMode',
      notifyStrategy: 'NotifyStrategy',
      pids: 'Pids',
      product: 'Product',
      promQL: 'PromQL',
      regionId: 'RegionId',
      tags: 'Tags',
      aliyunLang: 'aliyunLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCheckType: 'string',
      alertGroup: 'number',
      alertId: 'number',
      alertName: 'string',
      alertPiplines: 'string',
      alertRuleContent: 'string',
      alertStatus: 'string',
      alertType: 'string',
      annotations: 'string',
      autoAddNewApplication: 'boolean',
      autoAddTargetConfig: 'string',
      checkCycle: 'number',
      clusterId: 'string',
      dataConfig: 'string',
      duration: 'number',
      filters: 'string',
      labels: 'string',
      level: 'string',
      markTags: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleRequestMarkTags },
      message: 'string',
      metricsKey: 'string',
      metricsType: 'string',
      notice: 'string',
      notifyMode: 'string',
      notifyStrategy: 'string',
      pids: 'string',
      product: 'string',
      promQL: 'string',
      regionId: 'string',
      tags: { 'type': 'array', 'itemType': CreateOrUpdateAlertRuleRequestTags },
      aliyunLang: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.markTags)) {
      $dara.Model.validateArray(this.markTags);
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

