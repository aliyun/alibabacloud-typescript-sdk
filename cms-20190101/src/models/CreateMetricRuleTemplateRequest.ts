// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the critical-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to 
   * - GreaterThanThreshold: greater than 
   * - LessThanOrEqualToThreshold: less than or equal to 
   * - LessThanThreshold: less than 
   * - NotEqualToThreshold: not equal to 
   * - GreaterThanYesterday: greater than the value at the same time yesterday 
   * - LessThanYesterday: less than the value at the same time yesterday 
   * - GreaterThanLastWeek: greater than the value at the same time last week 
   * - LessThanLastWeek: less than the value at the same time last week 
   * - GreaterThanLastPeriod: greater than the value in the last period 
   * - LessThanLastPeriod: less than the value in the last period 
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
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
   * The valid values of this parameter are determined by the `Statistics` column that corresponds to the `MetricName` of the specified cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
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
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 30
   */
  threshold?: string;
  /**
   * @remarks
   * The number of consecutive times the monitoring metrics must reach the alert threshold to send a critical-level alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 3
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

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the info-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to 
   * - GreaterThanThreshold: greater than 
   * - LessThanOrEqualToThreshold: less than or equal to 
   * - LessThanThreshold: less than 
   * - NotEqualToThreshold: not equal to 
   * - GreaterThanYesterday: greater than the value at the same time yesterday 
   * - LessThanYesterday: less than the value at the same time yesterday 
   * - GreaterThanLastWeek: greater than the value at the same time last week 
   * - LessThanLastWeek: less than the value at the same time last week 
   * - GreaterThanLastPeriod: greater than the value in the last period 
   * - LessThanLastPeriod: less than the value in the last period 
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
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
   * The valid values of this parameter are determined by the `Statistics` column that corresponds to the `MetricName` of the specified cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
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
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 20
   */
  threshold?: string;
  /**
   * @remarks
   * The number of consecutive times the monitoring metrics must reach the alert threshold to send an info-level alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
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

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn extends $dara.Model {
  /**
   * @remarks
   * The comparison operator for the warn-level threshold. Valid values:
   * 
   * - GreaterThanOrEqualToThreshold: greater than or equal to 
   * - GreaterThanThreshold: greater than 
   * - LessThanOrEqualToThreshold: less than or equal to 
   * - LessThanThreshold: less than 
   * - NotEqualToThreshold: not equal to 
   * - GreaterThanYesterday: greater than the value at the same time yesterday 
   * - LessThanYesterday: less than the value at the same time yesterday 
   * - GreaterThanLastWeek: greater than the value at the same time last week 
   * - LessThanLastWeek: less than the value at the same time last week 
   * - GreaterThanLastPeriod: greater than the value in the last period 
   * - LessThanLastPeriod: less than the value in the last period 
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  n?: number;
  /**
   * @remarks
   * The statistical method for warning alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * The valid values of this parameter are determined by the `Statistics` column that corresponds to the `MetricName` of the specified cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the valid values, see [Cloud service monitoring metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold for warn-level alerts.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
   * 
   * @example
   * 30
   */
  threshold?: string;
  /**
   * @remarks
   * The number of consecutive times the monitoring metrics must reach the alert threshold to send a warning alert notification.
   * 
   * Valid values of N: 1 to 200.
   * 
   * > You must specify at least one of the following alert levels: Critical, Warn, or Info. For the specified alert level, you must specify the Statistics, ComparisonOperator, Threshold, and Times parameters at the same time.
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

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalations extends $dara.Model {
  critical?: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical;
  info?: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo;
  warn?: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical,
      info: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo,
      warn: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn,
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

export class CreateMetricRuleTemplateRequestAlertTemplates extends $dara.Model {
  escalations?: CreateMetricRuleTemplateRequestAlertTemplatesEscalations;
  /**
   * @remarks
   * The Alibaba Cloud service name or product specification abbreviation. Valid values of N: 1 to 200. Valid values:
   * - ecs: ECS instances and non-Alibaba Cloud hosts
   * - rds: ApsaraDB RDS database
   * - ads: AnalyticDB database
   * - slb: load balancing
   * - vpc: Elastic IP
   * - apigateway: API Gateway
   * - cdn: Content Delivery Network
   * - cs: Container Service for Swarm
   * - dcdn: Dynamic Route for CDN
   * - ddos: Anti-DDoS
   * - eip: Elastic IP Address
   * - elasticsearch: Elasticsearch
   * - emr: E-MapReduce
   * - ess: elastic scaling
   * - hbase: ApsaraDB for HBase database
   * - iot_edge: IoT Edge
   * - k8s_pod: Kubernetes pod
   * - kvstore_sharding: ApsaraDB for Redis Cluster Edition
   * - kvstore_splitrw: ApsaraDB for Redis Read/Write Splitting Edition
   * - kvstore_standard: ApsaraDB for Redis Standard Edition
   * - memcache: ApsaraDB for Memcache database
   * - mns: Message Service
   * - mongodb: MongoDB replica set
   * - mongodb_cluster: MongoDB cluster edition
   * - mongodb_sharding: MongoDB sharded cluster
   * - mq_topic: Message Service topic
   * - ocs: legacy ApsaraDB for Memcache database
   * - opensearch: OpenSearch
   * - oss: Object Storage Service
   * - polardb: PolarDB database
   * - petadata: HybridDB for MySQL
   * - scdn: secure acceleration
   * - sharebandwidthpackages: Internet Shared Bandwidth
   * - sls: Simple Log Service
   * - vpn: VPN Gateway
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The name of the metric. Valid values of N: 1 to 200.
   * 
   * > For more information, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Cloud service metrics](https://help.aliyun.com/document_detail/28619.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the Alibaba Cloud service. Valid values of N: 1 to 200.
   * 
   * > For more information, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Cloud service metrics](https://help.aliyun.com/document_detail/28619.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The aggregation period of the monitoring data. Unit: seconds.
   * 
   * Default value: the minimum aggregation period of the metric. You do not need to specify this parameter in most cases.
   * 
   * Valid values of N: 1 to 200.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The name of the alert rule. Valid values of N: 1 to 200.
   * 
   * This parameter is required.
   * 
   * @example
   * My CPU monitoring
   */
  ruleName?: string;
  /**
   * @remarks
   * The options for extended fields. Valid values of N: 1 to 200.
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
   * http://ww.aliyun.com
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
      escalations: CreateMetricRuleTemplateRequestAlertTemplatesEscalations,
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

export class CreateMetricRuleTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The alert templates.
   */
  alertTemplates?: CreateMetricRuleTemplateRequestAlertTemplates[];
  /**
   * @remarks
   * The description of the alert template.
   * 
   * @example
   * ECS_Template1
   */
  description?: string;
  /**
   * @remarks
   * The name of the alert template.
   * 
   * This parameter is required.
   * 
   * @example
   * Template1
   */
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: { 'type': 'array', 'itemType': CreateMetricRuleTemplateRequestAlertTemplates },
      description: 'string',
      name: 'string',
      regionId: 'string',
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

