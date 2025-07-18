// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisMonitorPerformanceResponseBodyPerformances extends $dara.Model {
  /**
   * @remarks
   * The execution duration of the query. Unit: milliseconds.
   * 
   * @example
   * 1
   */
  cost?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adbtest
   */
  database?: string;
  /**
   * @remarks
   * The ID of the query. It is a unique identifier of the query.
   * 
   * @example
   * 2022042612465401000000012903151998970
   */
  queryID?: string;
  /**
   * @remarks
   * The start time of the query. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1651877940000
   */
  startTime?: number;
  /**
   * @remarks
   * The execution state of the query. Valid values:
   * 
   * *   **running**: The query is being executed.
   * *   **finished**: The query is complete.
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * adbpguser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'Cost',
      database: 'Database',
      queryID: 'QueryID',
      startTime: 'StartTime',
      status: 'Status',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      database: 'string',
      queryID: 'string',
      startTime: 'number',
      status: 'string',
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

export class DescribeDiagnosisMonitorPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of query execution.
   */
  performances?: DescribeDiagnosisMonitorPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The threshold for the number of queries.
   * 
   * @example
   * 10000
   */
  performancesThreshold?: number;
  /**
   * @remarks
   * Indicates whether the queries are truncated when the number of queries exceeds the threshold. Valid values:
   * 
   * *   **true**: The queries are truncated.
   * *   **false**: The queries are not truncated.
   * 
   * @example
   * false
   */
  performancesTruncated?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      performances: 'Performances',
      performancesThreshold: 'PerformancesThreshold',
      performancesTruncated: 'PerformancesTruncated',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performances: { 'type': 'array', 'itemType': DescribeDiagnosisMonitorPerformanceResponseBodyPerformances },
      performancesThreshold: 'number',
      performancesTruncated: 'boolean',
      requestId: 'string',
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

