// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigListAlertInitConfig extends $dara.Model {
  /**
   * @remarks
   * The operator that is used to compare the metric value with the threshold for Warn-level alerts.
   * 
   * Valid values:
   * 
   * *   LessThanThreshold: less than the threshold
   * 
   * *   GreaterThanLastWeek: greater than the metric value at the same time last week
   * 
   * *   LessThanOrEqualToThreshold: less than or equal to the threshold
   * 
   * *   NotEqualToThreshold: does not equal to the threshold
   * 
   * *   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
   * 
   * *   GreaterThanYesterday: greater than the metric value at the same time yesterday
   * 
   * *   LessThanYesterday: less than the metric value at the same time yesterday
   * 
   * *   LessThanLastWeek: less than the metric value at the same time last week
   * 
   * *   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
   * 
   * *   GreaterThanThreshold: greater than the threshold
   * 
   * *   LessThanLastPeriod: less than the metric value in the last monitoring cycle
   * 
   * @example
   * GreaterThanOrEqualToThreshold
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before an alert is triggered.
   * 
   * @example
   * 3
   */
  evaluationCount?: string;
  /**
   * @remarks
   * The alert level.
   * 
   * Valid values:
   * 
   * *   INFO
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   WARN
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CRITICAL
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * CRITICAL
   */
  level?: string;
  /**
   * @remarks
   * The metric name. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the service. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_rds_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The aggregation period of monitoring data. Unit: minutes. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * 1m
   */
  period?: string;
  /**
   * @remarks
   * The method used to calculate metric values that trigger alerts. For more information, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * @example
   * 90
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      evaluationCount: 'EvaluationCount',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      evaluationCount: 'string',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigList extends $dara.Model {
  alertInitConfig?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigListAlertInitConfig[];
  static names(): { [key: string]: string } {
    return {
      alertInitConfig: 'AlertInitConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInitConfig: { 'type': 'array', 'itemType': DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigListAlertInitConfig },
    };
  }

  validate() {
    if(Array.isArray(this.alertInitConfig)) {
      $dara.Model.validateArray(this.alertInitConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRule extends $dara.Model {
  /**
   * @remarks
   * The initial alert rules that are generated after one-click alert is enabled for a service.
   */
  alertInitConfigList?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigList;
  /**
   * @remarks
   * The abbreviation of the service name.
   * 
   * @example
   * ecs
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      alertInitConfigList: 'AlertInitConfigList',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInitConfigList: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigList,
      product: 'string',
    };
  }

  validate() {
    if(this.alertInitConfigList && typeof (this.alertInitConfigList as any).validate === 'function') {
      (this.alertInitConfigList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleList extends $dara.Model {
  allProductInitMetricRule?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRule[];
  static names(): { [key: string]: string } {
    return {
      allProductInitMetricRule: 'AllProductInitMetricRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allProductInitMetricRule: { 'type': 'array', 'itemType': DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRule },
    };
  }

  validate() {
    if(Array.isArray(this.allProductInitMetricRule)) {
      $dara.Model.validateArray(this.allProductInitMetricRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the services for which one-click alert is enabled.
   */
  allProductInitMetricRuleList?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleList;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the services for which the initiative alert feature is enabled. Services are separated with commas (,). Valid values:
   * 
   * *   ECS: Elastic Compute Service (ECS)
   * *   rds: ApsaraDB RDS
   * *   slb: Server Load Balancer (SLB)
   * *   redis_standard: Redis Open-Source Edition (standard architecture)
   * *   redis_sharding: Redis Open-Source Edition (cluster architecture)
   * *   redis_splitrw: Redis Open-Source Edition (read/write splitting architecture)
   * *   mongodb: ApsaraDB for MongoDB of the replica set architecture
   * *   mongodb_sharding: ApsaraDB for MongoDB of the sharded cluster architecture
   * *   hbase: ApsaraDB for HBase
   * *   elasticsearch: Elasticsearch
   * *   opensearch: OpenSearch
   * 
   * @example
   * ecs,rds
   */
  datapoints?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F82E6667-7811-4BA0-842F-5B2DC42BBAAD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allProductInitMetricRuleList: 'AllProductInitMetricRuleList',
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allProductInitMetricRuleList: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleList,
      code: 'number',
      datapoints: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.allProductInitMetricRuleList && typeof (this.allProductInitMetricRuleList as any).validate === 'function') {
      (this.allProductInitMetricRuleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

