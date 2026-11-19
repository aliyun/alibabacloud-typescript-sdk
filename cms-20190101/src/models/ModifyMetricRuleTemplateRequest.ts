// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the critical-level alert threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold. 
   * - GreaterThanThreshold: greater than the threshold. 
   * - LessThanOrEqualToThreshold: less than or equal to the threshold. 
   * - LessThanThreshold: less than the threshold. 
   * - NotEqualToThreshold: not equal to the threshold. 
   * - GreaterThanYesterday: greater than the metric value at the same time yesterday. 
   * - LessThanYesterday: less than the metric value at the same time yesterday. 
   * - GreaterThanLastWeek: greater than the metric value at the same time last week. 
   * - LessThanLastWeek: less than the metric value at the same time last week. 
   * - GreaterThanLastPeriod: greater than the metric value in the previous period. 
   * - LessThanLastPeriod: less than the metric value in the previous period. 
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. The Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time for the specified alert level.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  /**
   * @remarks
   * The statistical method for critical-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * The valid values of this parameter are determined by the `Statistics` column that corresponds to the `MetricName` parameter of the specified Alibaba Cloud service, such as Maximum, Minimum, and Average. For more information about how to obtain the valid values of this parameter, see [cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. The Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time for the specified alert level.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold that triggers a critical-level alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. The Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time for the specified alert level.
   * 
   * @example
   * 30
   */
  threshold?: string;
  /**
   * @remarks
   * The number of times that the monitoring metrics must reach the alert threshold to send a critical-level alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. The Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time for the specified alert level.
   * 
   * @example
   * 2
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the info-level alert threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold. 
   * - GreaterThanThreshold: greater than the threshold. 
   * - LessThanOrEqualToThreshold: less than or equal to the threshold. 
   * - LessThanThreshold: less than the threshold. 
   * - NotEqualToThreshold: not equal to the threshold. 
   * - GreaterThanYesterday: greater than the metric value at the same time yesterday. 
   * - LessThanYesterday: less than the metric value at the same time yesterday. 
   * - GreaterThanLastWeek: greater than the metric value at the same time last week. 
   * - LessThanLastWeek: less than the metric value at the same time last week. 
   * - GreaterThanLastPeriod: greater than the metric value in the previous period. 
   * - LessThanLastPeriod: less than the metric value in the previous period. 
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. The Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time for the specified alert level.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  /**
   * @remarks
   * The statistical method for info-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * The valid values of this parameter are determined by the `Statistics` column that corresponds to the `MetricName` parameter of the specified Alibaba Cloud service, such as Maximum, Minimum, and Average. For more information about how to obtain the valid values of this parameter, see [cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. The Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time for the specified alert level.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for info-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. The Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time for the specified alert level.
   * 
   * @example
   * 20
   */
  threshold?: string;
  /**
   * @remarks
   * The number of times that the monitoring metrics must reach the alert threshold to send an info-level alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. The Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time for the specified alert level.
   * 
   * @example
   * 1
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the warning-level alert threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to the threshold. 
   * - GreaterThanThreshold: greater than the threshold. 
   * - LessThanOrEqualToThreshold: less than or equal to the threshold. 
   * - LessThanThreshold: less than the threshold. 
   * - NotEqualToThreshold: not equal to the threshold. 
   * - GreaterThanYesterday: greater than the metric value at the same time yesterday. 
   * - LessThanYesterday: less than the metric value at the same time yesterday. 
   * - GreaterThanLastWeek: greater than the metric value at the same time last week. 
   * - LessThanLastWeek: less than the metric value at the same time last week. 
   * - GreaterThanLastPeriod: greater than the metric value in the previous period. 
   * - LessThanLastPeriod: less than the metric value in the previous period. 
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. The Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time for the specified alert level.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  /**
   * @remarks
   * The statistical method for warning-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * The valid values of this parameter are determined by the `Statistics` column that corresponds to the `MetricName` parameter of the specified Alibaba Cloud service, such as Maximum, Minimum, and Average. For more information about how to obtain the valid values of this parameter, see [cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. The Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time for the specified alert level.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for warning-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. The Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time for the specified alert level.
   * 
   * @example
   * 30
   */
  threshold?: string;
  /**
   * @remarks
   * The number of times that the monitoring metrics must reach the alert threshold to send a warning-level alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, and Info. The Statistics, ComparisonOperator, Threshold, and Times parameters must be specified at the same time for the specified alert level.
   * 
   * @example
   * 1
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalations extends $dara.Model {
  critical?: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical;
  info?: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo;
  warn?: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical,
      info: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo,
      warn: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn,
    };
  }

  validate() {
    if(this.critical && typeof (this.critical as any).validate === 'function') {
      (this.critical as any).validate();
    }
    if(this.info && typeof (this.info as any).validate === 'function') {
      (this.info as any).validate();
    }
    if(this.warn && typeof (this.warn as any).validate === 'function') {
      (this.warn as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplates extends $dara.Model {
  escalations?: ModifyMetricRuleTemplateRequestAlertTemplatesEscalations;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name. Valid values of N: 1 to 200. Valid values:
   * - ecs: Alibaba Cloud and non-Alibaba Cloud hosts.
   * - rds: ApsaraDB RDS database.
   * - ads: AnalyticDB database.
   * - slb: load balancing.
   * - vpc: Elastic IP Address (EIP).
   * - apigateway: API Gateway.
   * - cdn: Content Delivery Network (CDN).
   * - cs: Container Service for Swarm.
   * - dcdn: Dynamic Route for CDN (DCDN).
   * - ddos: Anti-DDoS.
   * - eip: Elastic IP Address (EIP).
   * - elasticsearch: Elasticsearch.
   * - emr: E-MapReduce (EMR).
   * - ess: elastic scaling.
   * - hbase: ApsaraDB for HBase database.
   * - iot_edge: IoT Edge.
   * - kvstore_sharding: ApsaraDB for Redis Cluster Edition.
   * - kvstore_splitrw: ApsaraDB for Redis Read/Write Splitting Edition.
   * - kvstore_standard: ApsaraDB for Redis Standard Edition.
   * - memcache: ApsaraDB for Memcache database.
   * - mns: Message Service (MNS).
   * - mongodb: MongoDB replica set instance.
   * - mongodb_cluster: MongoDB cluster edition.
   * - mongodb_sharding: MongoDB sharded cluster.
   * - mq_topic: Message Service Topic.
   * - ocs: legacy cloud database Memcache.
   * - opensearch: OpenSearch.
   * - oss: Object Storage Service (OSS).
   * - polardb: PolarDB database.
   * - petadata: HybridDB for MySQL.
   * - scdn: secure acceleration.
   * - sharebandwidthpackages: Internet Shared Bandwidth.
   * - sls: Simple Log Service (SLS).
   * - vpn: VPN Gateway.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The name of the metric. Valid values of N: 1 to 200.
   * 
   * >For more information about the valid values of the metric name, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the Alibaba Cloud service, which is used to distinguish different services. Valid values of N: 1 to 200.
   * 
   * Format: acs_<service name>.
   * 
   * >To obtain the namespace of each Alibaba Cloud service, call the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data. Valid values of N: 1 to 200.
   * 
   * >If you set this parameter to 300, the system collects and aggregates monitoring data every 300 seconds. If monitoring data is reported every minute, the system aggregates the data of 5 minutes, such as the average, maximum, and minimum values. Do not specify this parameter separately because the statistical period may cause unexpected alerts.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The name of the alert rule. Valid values of N: 1 to 200.
   * 
   * @example
   * rule1
   */
  ruleName?: string;
  /**
   * @remarks
   * The options for the extended dimension fields. Valid values of N: 1 to 200.
   * 
   * For example, if the alert template is applied to an application group, this parameter is set to `{"disk":"/"}`, and the MetricName parameter is set to `DiskUtilization`, the root partition (`"/"`) of the disks for all instances in the application group is associated with the corresponding alert rule.
   * 
   * >For more information about the valid values of the extended dimension fields, see [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html).
   * 
   * @example
   * {"disk":"/"}
   */
  selector?: string;
  /**
   * @remarks
   * The webhook URL to which a POST request is sent when an alert is triggered.
   * 
   * @example
   * https://apiwebhook.hipac.cn/api/v1/alarm/aly/eregfeeferrtbnmkdszp
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      category: 'Category',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      ruleName: 'RuleName',
      selector: 'Selector',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: ModifyMetricRuleTemplateRequestAlertTemplatesEscalations,
      category: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'number',
      ruleName: 'string',
      selector: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.escalations && typeof (this.escalations as any).validate === 'function') {
      (this.escalations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The list of alert templates.
   */
  alertTemplates?: ModifyMetricRuleTemplateRequestAlertTemplates[];
  /**
   * @remarks
   * The description of the alert template.
   * 
   * @example
   * ECS_template1
   */
  description?: string;
  /**
   * @remarks
   * The name of the alert template.
   * 
   * @example
   * test123
   */
  name?: string;
  regionId?: string;
  /**
   * @remarks
   * The version of the alert template to be modified.
   * >This parameter is automatically updated based on the number of modifications.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  restVersion?: number;
  /**
   * @remarks
   * The ID of the alert template.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      restVersion: 'RestVersion',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: { 'type': 'array', 'itemType': ModifyMetricRuleTemplateRequestAlertTemplates },
      description: 'string',
      name: 'string',
      regionId: 'string',
      restVersion: 'number',
      templateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertTemplates)) {
      $dara.Model.validateArray(this.alertTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

