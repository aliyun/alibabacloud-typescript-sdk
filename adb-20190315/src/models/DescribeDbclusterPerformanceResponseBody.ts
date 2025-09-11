// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceResponseBodyPerformancesSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metric value. For more information about the performance metrics, see [Metric overview](https://help.aliyun.com/document_detail/2863211.html).
   * 
   * @example
   * worker_avg_cpu_used
   */
  name?: string;
  /**
   * @remarks
   * The tags that are added to the cluster.
   * 
   * @example
   * instance_name: "amv-8vbf80pjcz*****"
   */
  tags?: string;
  /**
   * @remarks
   * The key that is used to obtain the name of the performance metric value.
   * 
   * @example
   * elastic_executor_avg_cpu_use
   */
  translateKey?: string;
  /**
   * @remarks
   * The values of the queried performance metric.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tags: 'Tags',
      translateKey: 'TranslateKey',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tags: 'string',
      translateKey: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformances extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metric.
   * 
   * @example
   * AnalyticDB_CPU
   */
  key?: string;
  /**
   * @remarks
   * The queried performance metric data.
   */
  series?: DescribeDBClusterPerformanceResponseBodyPerformancesSeries[];
  /**
   * @remarks
   * The unit of the performance metric.
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformancesSeries },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the request denial. This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * {
   *   "AuthAction": "xxx",
   *   "AuthPrincipalDisplayName": "sampleName",
   *   "AuthPrincipalOwnerId": "111111111111111111",
   *   "AuthPrincipalType": "SubUser",
   *   "AuthResource": "xxx",
   *   "NoPermissionType": "xxx",
   *   "PolicyType": "xxx"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-03T15:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The queried performance metrics.
   */
  performances?: DescribeDBClusterPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25B56BC7-4978-40B3-9E48-4B7067******
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-03T15:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performances: 'Performances',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      performances: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformances },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performances)) {
      $dara.Model.validateArray(this.performances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

