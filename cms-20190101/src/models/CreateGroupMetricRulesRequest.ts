// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical extends $dara.Model {
  comparisonOperator?: string;
  n?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'string',
      preCondition: 'string',
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

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo extends $dara.Model {
  comparisonOperator?: string;
  n?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'string',
      preCondition: 'string',
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

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn extends $dara.Model {
  comparisonOperator?: string;
  n?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'string',
      preCondition: 'string',
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

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalations extends $dara.Model {
  critical?: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical;
  info?: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo;
  warn?: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical,
      info: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo,
      warn: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn,
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

export class CreateGroupMetricRulesRequestGroupMetricRulesLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key of the alert rule. The specified tag is contained in alert notifications.
   * 
   * Valid values of N: 1 to 200.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the alert rule. The specified tag is contained in alert notifications.
   * 
   * Valid values of N: 1 to 200.
   * 
   * @example
   * value1
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

export class CreateGroupMetricRulesRequestGroupMetricRules extends $dara.Model {
  escalations?: CreateGroupMetricRulesRequestGroupMetricRulesEscalations;
  /**
   * @remarks
   * The name of the cloud service. Valid values of N: 1 to 200. Valid value:
   * 
   * *   PolarDB: PolarDB
   * *   NewBGPDDoS: Anti-DDoS Pro
   * *   IoTDevice: IoT Platform
   * *   DRDS: Distributed Relational Database Service (DRDS)
   * *   VS: Video Surveillance System
   * *   AMQP: Alibaba Cloud Message Queue for AMQP
   * *   ADS: AnalyticDB
   * *   APIGateway: API Gateway
   * *   InternetSharedBandwidth: EIP Bandwidth Plan
   * *   CDN: Alibaba Cloud Content Delivery Network (CDN)
   * *   CEN: Cloud Enterprise Network (CEN)
   * *   DCDN: Dynamic Route for CDN (DCDN)
   * *   DDoS: Anti-DDoS
   * *   ECS: Elastic Compute Service (ECS)
   * *   DirectMail: Direct Mail
   * *   Elasticsearch: Elasticsearch
   * *   EMR: E-MapReduce (EMR)
   * *   ESS: Auto Scaling
   * *   FunctionCompute: Function Compute
   * *   RealtimeCompute: Realtime Compute for Apache Flink
   * *   GlobalAcceleration: Global Accelerator (GA)
   * *   Hbase: ApsaraDB for HBase
   * *   TSDB: Time Series Database (TSDB)
   * *   IPv6trans: IPv6 Translation Service
   * *   Kafka: Message Queue for Apache Kafka
   * *   Kubernetes: Container Service for Kubernetes (ACK)
   * *   KVstore: ApsaraDB for Redis
   * *   MNS: Message Service (MNS)
   * *   MongoDB: ApsaraDB for MongoDB
   * *   MQ: Message Queue
   * *   NAT: NAT Gateway
   * *   OpenAd: Open Ad
   * *   OpenSearch: Open Search
   * *   OSS: Object Storage Service (OSS)
   * *   PCDN: P2P CDN
   * *   petadata: HybridDB for MySQL
   * *   RDS: ApsaraDB RDS
   * *   SCDN: Secure CDN
   * *   SLB: Server Load Balancer (SLB)
   * *   SLS: Log Service
   * *   VideoLive: ApsaraVideo Live
   * *   VOD: ApsaraVideo VOD
   * *   EIP: Elastic IP Address (EIP)
   * *   VPN: VPN Gateway
   * *   AIRec: Artificial Intelligence Recommendation
   * *   GPDB: AnalyticDB for PostgreSQL
   * *   DBS: Database Backup (DBS)
   * *   SAG: Smart Access Gateway (SAG)
   * *   Memcache: ApsaraDB for Memcache
   * *   IOT_EDGE: Link IoT Edge
   * *   OCS: ApsaraDB for Memcache (previous version)
   * *   VPC: Express Connect
   * *   EHPC: Elastic High Performance Computing (E-HPC)
   * *   MPS: ApsaraVideo Media Processing
   * *   ENS: Edge Node Service (ENS)
   * *   MaxCompute_Prepay: MaxCompute
   * *   IoT_Kubernetes: Edge Application Hosting
   * *   CMS: CloudMonitor
   * *   batchcomputenew: Batch Compute
   * *   HBaseUE: ApsaraDB for HBase Performance-enhanced Edition
   * *   UIS: Ultimate Internet Service (UIS)
   * *   nls: Intelligent Speech Interaction
   * *   ots: Tablestore
   * *   NAS: File Storage NAS
   * *   ECI: Elastic Container Instance (ECI)
   * *   OpenAPI: OpenAPI Explorer
   * *   pvtzpost: Alibaba Cloud DNS PrivateZone
   * *   blinkonk8s: Flink on Kubernetes
   * *   FunctionFlow: Serverless Workflow (SWF)
   * *   SMC: Server Migration Center (SMC)
   * *   ddosbgp: Anti-DDoS Origin
   * *   baas: Blockchain as a Service
   * *   privatelink: PrivateLink
   * *   cds: ApsaraDB for Cassandra
   * *   DDH: Dedicated Host
   * *   RocketMQ: Message Queue for Apache RocketMQ
   * *   ECC: Express Cloud Connect
   * *   hbaseserverless: ApsaraDB for HBase Serverless Edition
   * *   mns_tmp: Message Service
   * *   hdr: Hybrid Disaster Recovery (HDR)
   * *   hbr: Hybrid Backup Recovery (HBR)
   * *   ADB: AnalyticDB for MySQL V3.0
   * *   tag: Tag Service
   * *   GDB: Graph Database
   * *   WAF: Web Application Firewall (WAF)
   * *   hcs_sgw: Cloud Storage Gateway (CSG)
   * *   ipv6gateway: IPv6 Gateway
   * *   RDS_SAR: ApsaraDB Exclusive Host Group
   * *   learn: Machine Learning Platform for AI
   * *   ROS: Resource Orchestration Service (ROS)
   * *   OOS: Operation Orchestration Service (OOS)
   * *   bds: Data Synchronization for HBase
   * *   cfw: Cloud Firewall
   * *   ddosDip: Anti-DDoS Premium
   * *   datahub: DataHub
   * *   hologres: Hologres
   * *   ExpressConnect: Express Connect
   * *   dbfs: Database File System (DBFS)
   * *   clickhouse: ApsaraDB for ClickHouse
   * *   k8s: Container Service for Kubernetes (ACK)
   * *   DTS: Data Transmission Service (DTS)
   * *   AnycastEIP: Anycast Elastic IP Address
   * *   Lindorm: ApsaraDB for Lindorm
   * *   config: Cloud Config
   * *   spark: Databricks DataInsight (DDI)
   * *   serverless: Serverless App Engine (SAE)
   * *   alb: Application Load Balancer (ALB)
   * *   oceanbase: ApsaraDB for OceanBase
   * *   KMS: Key Management Service (KMS)
   * *   lvwang: Content Moderation
   * *   LinkVisual: LinkVisual
   * *   tair: ApsaraDB for Redis Enhanced Edition (Tair)
   * *   dlf: Data Lake Formation (DLF)
   * *   networkmonitor: Site Monitoring
   * *   pnc: Physical Network Change
   * *   AIS: Alibaba Cloud Infrastructure
   * *   cloudgame: Cloud Gaming Platform
   * *   RTC: Real-Time Communication
   * *   cloudbox: CloudBox
   * *   actiontrail: ActionTrail
   * *   cc: Cloud Connector
   * *   disk: Elastic Block Storage (EBS)
   * *   easygene: Genomics Computing Platform
   * *   cloudphone: Elastic Cloud Phone
   * *   BMS: Bare Metal Management Service
   * *   swas: Simple Application Server
   * *   AvailabilityMonitoring: Availability Monitoring of CloudMonitor
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  category?: string;
  /**
   * @remarks
   * The alert contact groups. Valid values of N: 1 to 200.
   * 
   * For information about how to obtain alert contact groups, see [DescribeContactGroupList](https://help.aliyun.com/document_detail/114922.html).
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * The dimension of the alert rule. Valid values of N: 1 to 200.
   * 
   * Set the value to a set of key-value pairs, for example, `userId:120886317861****` or `instanceId:i-m5e1qg6uo38rztr4****`.
   * 
   * @example
   * [{"instanceId":"i-m5e1qg6uo38rztr4****"}]
   */
  dimensions?: string;
  /**
   * @remarks
   * The time period during which the alert rule is effective. Valid values of N: 1 to 200.
   * 
   * @example
   * 05:31-23:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The subject of the alert notification email. Valid values of N: 1 to 200.
   */
  emailSubject?: string;
  /**
   * @remarks
   * The interval at which CloudMonitor checks whether the alert rule is triggered. Valid values of N: 1 to 200.
   * 
   * Unit: seconds. The default value is the lowest frequency at which the metric is polled.
   * 
   * >  We recommend that you set the interval to the data aggregation period. If the interval is shorter than the data aggregation period, alerts cannot be triggered due to insufficient data.
   * 
   * @example
   * 60
   */
  interval?: string;
  labels?: CreateGroupMetricRulesRequestGroupMetricRulesLabels[];
  /**
   * @remarks
   * The name of the metric. Valid values of N: 1 to 200.
   * 
   * For information about how to obtain the name of a metric, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service. Valid values of N: 1 to 200.
   * 
   * For information about how to obtain the namespace of a cloud service, see [DescribeMetricMetaList](https://help.aliyun.com/document_detail/98846.html) or [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The method that is used to handle alerts when no monitoring data is found. Valid values of N: 1 to 200. Valid value:
   * 
   * *   KEEP_LAST_STATE (default value): No operation is performed.
   * *   INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
   * *   OK: The alert rule has no active alerts.
   * 
   * @example
   * KEEP_LAST_STATE
   */
  noDataPolicy?: string;
  /**
   * @remarks
   * The time period during which the alert rule is ineffective. Valid values of N: 1 to 200.
   * 
   * @example
   * 00:00-05:30
   */
  noEffectiveInterval?: string;
  /**
   * @example
   * {
   *       "NotSendOK": true
   * }
   */
  options?: string;
  /**
   * @remarks
   * The aggregation period of the metric data. Valid values of N: 1 to 200.
   * 
   * Set the `Period` parameter to an integral multiple of 60. Unit: seconds. Default value: 300.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The ID of the alert rule. Valid values of N: 1 to 200.
   * 
   * This parameter is required.
   * 
   * @example
   * 456789
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule. Valid values of N: 1 to 200.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Rule1
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute period during which new alerts are not sent even if the trigger conditions are met. Valid values of N: 1 to 200.
   * 
   * Unit: seconds. Default value: 86400. Minimum value: 3600.
   * 
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @remarks
   * The callback URL. Valid values of N: 1 to 200.
   * 
   * The callback URL must be accessible over the Internet. CloudMonitor pushes an alert notification to the specified callback URL by sending an HTTP POST request. Only the HTTP protocol is supported.
   * 
   * @example
   * https://www.aliyun.com
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      category: 'Category',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      interval: 'Interval',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      options: 'Options',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: CreateGroupMetricRulesRequestGroupMetricRulesEscalations,
      category: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      labels: { 'type': 'array', 'itemType': CreateGroupMetricRulesRequestGroupMetricRulesLabels },
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      options: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  validate() {
    if(this.escalations && typeof (this.escalations as any).validate === 'function') {
      (this.escalations as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * For information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  groupMetricRules?: CreateGroupMetricRulesRequestGroupMetricRules[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupMetricRules: 'GroupMetricRules',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupMetricRules: { 'type': 'array', 'itemType': CreateGroupMetricRulesRequestGroupMetricRules },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupMetricRules)) {
      $dara.Model.validateArray(this.groupMetricRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

