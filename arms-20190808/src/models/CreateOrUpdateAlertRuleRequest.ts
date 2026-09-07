// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateAlertRuleRequestMarkTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * service
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The check type for a Prometheus monitoring alert rule.
   * 
   * - `STATIC`: A static threshold. The **MetricsKey** parameter is required. For more information, see the description of the **MetricsKey** parameter below.
   * 
   * - `CUSTOM`: A custom PromQL query. The **PromQL**, **Duration**, and **Message** parameters are required.
   * 
   * @example
   * STATIC
   */
  alertCheckType?: string;
  /**
   * @remarks
   * The alert group ID for the Prometheus alert rule. Valid values:
   * 
   * - `-1`: Custom PromQL
   * 
   * - `1`: Kubernetes workloads
   * 
   * - `15`: Kubernetes nodes
   * 
   * @example
   * -1
   */
  alertGroup?: number;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * - Omit this parameter to create a new alert rule.
   * 
   * - Specify an ID to modify an existing alert rule.
   * 
   * @example
   * 546xxx
   */
  alertId?: number;
  /**
   * @remarks
   * The alert rule name.
   * 
   * This parameter is required.
   * 
   * @example
   * Alert Rule Demo
   */
  alertName?: string;
  /**
   * @remarks
   * The alert pipeline configuration. Used for compatibility with legacy alert rules.
   * 
   * @example
   * -
   */
  alertPiplines?: string;
  /**
   * @remarks
   * The content of the alert rule for application monitoring or browser monitoring. The following is a template for the **AlertRuleContent** parameter. For a description of the fields in the template, see the supplementary information below this table.
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
   * > The available fields for **AlertRuleItems.MetricKey** depend on the **MetricsType** value. For information about the metric types supported by application monitoring and browser monitoring and their corresponding alert rule fields, see the supplementary information below this table.
   * 
   * @example
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
   */
  alertRuleContent?: string;
  /**
   * @remarks
   * The status of the alert rule. Valid values:
   * 
   * - `RUNNING`: The alert rule is running. (Default)
   * 
   * - `STOPPED`: The alert rule is stopped.
   * 
   * @example
   * RUNNING
   */
  alertStatus?: string;
  /**
   * @remarks
   * The type of the alert rule. Valid values:
   * 
   * - `APPLICATION_MONITORING_ALERT_RULE`: For application monitoring.
   * 
   * - `BROWSER_MONITORING_ALERT_RULE`: For browser monitoring.
   * 
   * - `PROMETHEUS_MONITORING_ALERT_RULE`: For Prometheus monitoring.
   * 
   * - `XTRACE_MONITORING_ALERT_RULE`: For Tracing Analysis (OpenTelemetry edition).
   * 
   * - `EBPF_MONITORING_ALERT_RULE`: For eBPF monitoring.
   * 
   * - `RUM_MONITORING_ALERT_RULE`: For real user monitoring (RUM).
   * 
   * This parameter is required.
   * 
   * @example
   * APPLICATION_MONITORING_ALERT_RULE
   */
  alertType?: string;
  /**
   * @remarks
   * Annotations to add to the Prometheus alert rule. Specify as a JSON string representing an array of objects, each with Name and Value keys.
   * 
   * @example
   * [ { "Value": "PolarDB 慢查询数量",             "Name": "_aliyun_display_name"           }
   */
  annotations?: string;
  /**
   * @remarks
   * Determines whether to automatically apply this alert rule to new applications. This applies only to application monitoring and browser monitoring rules.
   * 
   * - `true`: enables the feature.
   * 
   * - `false`: disables the feature.
   * 
   * @example
   * false
   */
  autoAddNewApplication?: boolean;
  /**
   * @remarks
   * The configuration for automatically adding applications to an application monitoring alert rule. Specify this parameter as a JSON string with the following fields:
   * 
   * - `autoAddMatchType`: The matching method. Can be `REGULAR` (matches the regular expression) or `NOT_REGULAR` (does not match the regular expression).
   * 
   *   Match type: Regular expression match (REGULAR) / Not a regular expression match (NOT_REGULAR)
   * 
   * - `autoAddMatchExp`: The regular expression.
   * 
   * @example
   * {\\"autoAddMatchType\\":\\"REGULAR\\",\\"autoAddMatchExp\\":\\".*cbw.*\\"}
   */
  autoAddTargetConfig?: string;
  /**
   * @remarks
   * The check interval for the Prometheus alert rule.
   * 
   * @example
   * 1
   */
  checkCycle?: number;
  /**
   * @remarks
   * The cluster ID for the Prometheus monitoring alert rule.
   * 
   * @example
   * ceba9b9ea5b924dd0b6726d2de6******
   */
  clusterId?: string;
  /**
   * @remarks
   * The data configuration. The dataRevision field specifies how to handle missing metric data.
   * 
   * - `0`: Fills the data with 0.
   * 
   * - `1`: Fills the data with 1.
   * 
   * - `2`: Fills the data with null. This is the default and does not trigger an alert.
   * 
   * @example
   * {
   *     "dataRevision": 2
   * }
   */
  dataConfig?: string;
  /**
   * @remarks
   * The period, in minutes, that a condition must be true before a Prometheus alert is triggered. Valid values: 0 to 1440.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The filters for an application monitoring or browser monitoring alert rule.
   * Specify this parameter as a JSON string in the following format:
   * 
   * ```
   * "DimFilters": [ 
   * { 
   *  "FilterOpt": "ALL",
   *  "FilterValues": [],         // The filter value.
   *  "FilterKey": "rootIp"     // The filter key.
   * }
   * ]
   * ```
   * 
   * Valid values for **FilterOpt**:
   * 
   * - `STATIC`: Matches a fixed dimension value.
   * 
   * - `ALL`: Iterates over all dimension values. Note: This option is not supported for range detection.
   * 
   * - `DISABLE`: Aggregates all dimension values by summing them.
   * 
   * @example
   * {"DimFilters": [             {               "FilterOpt": "ALL",               "FilterValues": [],               "FilterKey": "rootIp"             }           ]         }
   */
  filters?: string;
  /**
   * @remarks
   * Labels to add to the Prometheus alert rule. Specify as a JSON string representing an array of objects, each with Name and Value keys.
   * 
   * @example
   * [  { "Value": "cms_polardb",             "Name": "_aliyun_cloud_product"           }         ]
   */
  labels?: string;
  /**
   * @remarks
   * The severity level for the Prometheus alert rule.
   * 
   * - `P1`: Critical. For major issues that affect core business availability with a wide impact and severe consequences.
   * 
   * - `P2`: Warning. For issues that cause partial service failures or affect system availability with a limited scope.
   * 
   * - `P3`: Info. For potential issues or alerts from non-critical services.
   * 
   * - `P4`: Low priority. Used for informational alerts that require attention but do not affect services.
   * 
   * - `Default`: The default level, used when no specific severity is required.
   * 
   * @example
   * P2
   */
  level?: string;
  /**
   * @remarks
   * Application tags used to filter applications in application monitoring alert rules.
   */
  markTags?: CreateOrUpdateAlertRuleRequestMarkTags[];
  /**
   * @remarks
   * The alert message for the Prometheus alert rule.
   * 
   * @example
   * 命名空间: {{$labels.namespace}} / Pod: {{$labels.pod_name}} / 容器: {{$labels.container}} 内存使用率超过80%, 当前值{{ printf \\\\\\"%.2f\\\\\\" $value }}%
   */
  message?: string;
  /**
   * @remarks
   * The alert metric. This parameter is required for Prometheus alert rules when **AlertCheckType** is **STATIC**.
   * 
   * > The available alert metrics vary based on the value of **AlertGroup**. For information about the mapping between **AlertGroup** and **MetricsKey**, see the supplementary information below this table.
   * 
   * @example
   * pop.status.error
   */
  metricsKey?: string;
  /**
   * @remarks
   * The alert metric type for application monitoring or browser monitoring alert rules. For more information, see the table below.
   * 
   * @example
   * jvm
   */
  metricsType?: string;
  /**
   * @remarks
   * The effective time and notification time. Used for compatibility with legacy alert rules.
   * 
   * @example
   * -
   */
  notice?: string;
  /**
   * @remarks
   * The notification mode. Valid values:
   * 
   * - `DIRECTED_MODE`: Directed mode.
   * 
   * - `NORMAL_MODE`: Normal mode.
   * 
   * @example
   * NORMAL_MODE
   */
  notifyMode?: string;
  /**
   * @remarks
   * The notification policy.
   * 
   * - `null`: Does not associate the alert rule with a notification policy. You can associate them later by creating a notification policy with a matching rule, for example, based on the alert rule\\"s name. When the alert rule is triggered, alert events are sent to the contacts or contact groups specified in the matching notification policy.
   * 
   * - A notification policy ID: Associates the alert rule with a specific notification policy. ARMS automatically adds a matching rule to the policy that uses the alert rule\\"s ID. This ensures that alert events from this rule are always processed by the specified policy.
   * 
   * @example
   * 569xxx
   */
  notifyStrategy?: string;
  /**
   * @remarks
   * The PIDs of applications for an application monitoring or browser monitoring alert rule. Specify as a JSON array of strings.
   * 
   * @example
   * ["b590lhguqs@40d8deedfa9******"]
   */
  pids?: string;
  /**
   * @remarks
   * Required for Prometheus alert rules. Used to filter by cloud service. The specified product name must be valid.
   * 
   * @example
   * clickhouse
   */
  product?: string;
  /**
   * @remarks
   * The PromQL expression to evaluate.
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
   * The tags to add to the alert rule. These are standard Alibaba Cloud resource tags.
   */
  tags?: CreateOrUpdateAlertRuleRequestTags[];
  /**
   * @remarks
   * The language of the response.
   */
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

