// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogTrendResponseBodyDataResultSet extends $dara.Model {
  /**
   * @remarks
   * The average execution duration of slow SQL statements. Unit: ms. The minimum value is **1000**.
   * 
   * @example
   * 2000
   */
  avgQueryDurationMs?: number;
  /**
   * @remarks
   * The total number of SQL statements within the current time period.
   * 
   * @example
   * 1
   */
  cnt?: number;
  /**
   * @remarks
   * The maximum execution duration of slow SQL statements. Unit: ms. The minimum value is **1000**.
   * 
   * @example
   * 3000
   */
  maxQueryDurationMs?: number;
  /**
   * @remarks
   * The minimum execution duration of slow SQL statements. Unit: ms. The minimum value is **1000**.
   * 
   * @example
   * 1000
   */
  minQueryDurationMs?: number;
  /**
   * @remarks
   * The time when the query starts. Format: yyyy-MM-dd hh:mm:ss (UTC).
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
   * Cluster test
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The result set.
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

