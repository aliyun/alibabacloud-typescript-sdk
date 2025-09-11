// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults extends $dara.Model {
  /**
   * @remarks
   * The IP address of the SQL client that submits the SQL pattern.
   * 
   * @example
   * 11.81.238.102
   */
  accessIp?: string;
  /**
   * @remarks
   * The details about the detection report of the SQL pattern.
   * 
   * @example
   * {}
   */
  detail?: string;
  /**
   * @remarks
   * The number of failed SQL patterns within the time range.
   * 
   * @example
   * 63
   */
  failedCount?: number;
  /**
   * @remarks
   * The SQL pattern ID.
   * 
   * @example
   * 5495577090378760322
   */
  patternId?: string;
  /**
   * @remarks
   * The number of executed SQL patterns within the time range.
   * 
   * @example
   * 72
   */
  queryCount?: number;
  /**
   * @remarks
   * The metrics related to the SQL pattern.
   * 
   * @example
   * Maximum query duration: 1.43s
   * Maximum peak memory: 20.73 MB
   * Maximum read table data: 10.12 MB
   */
  relatedMetrics?: string;
  /**
   * @remarks
   * The SQL statement that represents the SQL pattern.
   * 
   * @example
   * SELECT *nFROM HIVE.`ADB_EXTERNAL_TPCH_10GB`.`External_customer`nLIMIT ?
   */
  SQLPattern?: string;
  /**
   * @remarks
   * The names of tables.
   * 
   * @example
   * ad_marketing_engine.prod_dws_oe_promotion_daily_trend_report
   */
  tables?: string;
  /**
   * @remarks
   * The name of the database account that is used to submit the query.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      detail: 'Detail',
      failedCount: 'FailedCount',
      patternId: 'PatternId',
      queryCount: 'QueryCount',
      relatedMetrics: 'RelatedMetrics',
      SQLPattern: 'SQLPattern',
      tables: 'Tables',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      detail: 'string',
      failedCount: 'number',
      patternId: 'string',
      queryCount: 'number',
      relatedMetrics: 'string',
      SQLPattern: 'string',
      tables: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAbnormalPatternDetectionResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The description of the detection result.
   * 
   * @example
   * Two SQL patterns that have abnormal totalTime metric values are detected. This may result in increased CPU utilization, query slowdown, and degraded system stability. Go to the monitoring page to diagnose the issue and then perform optimization.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * Cost，PeakMemory
   */
  name?: string;
  /**
   * @remarks
   * The detection result.
   */
  results?: DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults[];
  /**
   * @remarks
   * The severity level of the detection result. Valid values:
   * 
   * *   NORMAL
   * *   WARNING
   * *   CRITICAL
   * 
   * @example
   * NORMAL
   * WARNNING
   * CRITICAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      results: 'Results',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      results: { 'type': 'array', 'itemType': DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAbnormalPatternDetectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-xxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeAbnormalPatternDetectionResponseBodyDetectionItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36B66482-A215-5F04-A42E-859983D89D7B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 300
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeAbnormalPatternDetectionResponseBodyDetectionItems },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detectionItems)) {
      $dara.Model.validateArray(this.detectionItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

