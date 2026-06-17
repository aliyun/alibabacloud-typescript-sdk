// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigListAlertInitConfig extends $dara.Model {
  comparisonOperator?: string;
  evaluationCount?: string;
  level?: string;
  metricName?: string;
  namespace?: string;
  period?: string;
  statistics?: string;
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
  alertInitConfigList?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigList;
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
  allProductInitMetricRuleList?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleList;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the services for which the initiative alert feature is enabled. Services are separated with commas (,). Valid values:
   * 
   * - ECS: Elastic Compute Service (ECS)
   * 
   * - rds: ApsaraDB RDS
   * 
   * - slb: Server Load Balancer (SLB)
   * 
   * - redis_standard: Redis Open-Source Edition (standard architecture)
   * 
   * - redis_sharding: Redis Open-Source Edition (cluster architecture)
   * 
   * - redis_splitrw: Redis Open-Source Edition (read/write splitting architecture)
   * 
   * - mongodb: ApsaraDB for MongoDB of the replica set architecture
   * 
   * - mongodb_sharding: ApsaraDB for MongoDB of the sharded cluster architecture
   * 
   * - hbase: ApsaraDB for HBase
   * 
   * - elasticsearch: Elasticsearch
   * 
   * - opensearch: OpenSearch
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
   * - true: The request was successful.
   * 
   * - false: The request failed.
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

