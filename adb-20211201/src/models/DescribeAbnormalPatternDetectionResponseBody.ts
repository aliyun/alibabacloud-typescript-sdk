// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults extends $dara.Model {
  /**
   * @remarks
   * The IP address of the SQL client that submits the SQL pattern.
   * 
   * @example
   * 172.16.133.168
   */
  accessIp?: string;
  /**
   * @remarks
   * The description of the detection result.
   * 
   * @example
   * Two SQL patterns that have abnormal totalTime metric values are detected. This may result in increased CPU utilization, query slowdown, and degraded system stability. Go to the monitoring page to diagnose the issue and then perform optimization.
   */
  detail?: string;
  /**
   * @remarks
   * The number of failed SQL patterns within the time range.
   * 
   * @example
   * 7
   */
  failedCount?: number;
  /**
   * @remarks
   * The SQL pattern ID.
   * 
   * @example
   * 2803084667741875187
   */
  patternId?: string;
  /**
   * @remarks
   * The number of queries.
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
   * SELECT `tsid`nFROM `prod_ods_marketing_engine_material`nWHERE `tsid` = ?nLIMIT ?
   */
  SQLPattern?: string;
  /**
   * @remarks
   * The names of tables.
   * 
   * @example
   * dw_student_exam.ods_school_queanal
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
   * The name of the detection item.
   * 
   * @example
   * Cost
   */
  name?: string;
  /**
   * @remarks
   * The detection result items.
   */
  results?: DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      results: { 'type': 'array', 'itemType': DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults },
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
   * amv-xxxx
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
   * 19B824E0-690D-5A78-9992-5398C2F43694
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
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

