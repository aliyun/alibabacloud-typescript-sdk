// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogTrendResponseBodyDataResultSet extends $dara.Model {
  /**
   * @remarks
   * The average execution duration of slow SQL queries. Minimum value: **1000**. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  avgQueryDurationMs?: number;
  /**
   * @remarks
   * The total number of SQL queries within the specified time range.
   * 
   * @example
   * 1
   */
  cnt?: number;
  /**
   * @remarks
   * The maximum execution duration of slow SQL queries. Minimum value: **1000**. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  maxQueryDurationMs?: number;
  /**
   * @remarks
   * The minimum execution duration of slow SQL queries. Minimum value: **1000**. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  minQueryDurationMs?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-04-13 17:48:00
   */
  queryStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgQueryDurationMs: 'AvgQueryDurationMs',
      cnt: 'Cnt',
      maxQueryDurationMs: 'MaxQueryDurationMs',
      minQueryDurationMs: 'MinQueryDurationMs',
      queryStartTime: 'QueryStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgQueryDurationMs: 'number',
      cnt: 'number',
      maxQueryDurationMs: 'number',
      minQueryDurationMs: 'number',
      queryStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * clusterTest
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The result sets.
   */
  resultSet?: DescribeSlowLogTrendResponseBodyDataResultSet[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogTrendResponseBodyDataResultSet },
    };
  }

  validate() {
    if(Array.isArray(this.resultSet)) {
      $dara.Model.validateArray(this.resultSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: DescribeSlowLogTrendResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7D3ECB0E-98CA-5E08-A9CA-F70C5A1E9BDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSlowLogTrendResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

