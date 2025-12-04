// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogTrendResponseBodySlowLogTrendDataResultSet extends $dara.Model {
  /**
   * @example
   * 2000
   */
  avgQueryDurationMs?: string;
  /**
   * @example
   * 4000
   */
  count?: string;
  /**
   * @example
   * 3000
   */
  maxQueryDurationMs?: string;
  /**
   * @example
   * 1000
   */
  minQueryDurationMs?: string;
  /**
   * @example
   * 2022-05-22 20:00:01
   */
  queryStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgQueryDurationMs: 'AvgQueryDurationMs',
      count: 'Count',
      maxQueryDurationMs: 'MaxQueryDurationMs',
      minQueryDurationMs: 'MinQueryDurationMs',
      queryStartTime: 'QueryStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgQueryDurationMs: 'string',
      count: 'string',
      maxQueryDurationMs: 'string',
      minQueryDurationMs: 'string',
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

export class DescribeSlowLogTrendResponseBodySlowLogTrendData extends $dara.Model {
  resultSet?: DescribeSlowLogTrendResponseBodySlowLogTrendDataResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogTrendResponseBodySlowLogTrendDataResultSet },
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

export class DescribeSlowLogTrendResponseBodySlowLogTrendStatistics extends $dara.Model {
  /**
   * @example
   * 697899
   */
  bytesRead?: number;
  /**
   * @example
   * 0.001703578
   */
  elapsedTime?: number;
  /**
   * @example
   * 14721
   */
  rowsRead?: number;
  static names(): { [key: string]: string } {
    return {
      bytesRead: 'BytesRead',
      elapsedTime: 'ElapsedTime',
      rowsRead: 'RowsRead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesRead: 'number',
      elapsedTime: 'number',
      rowsRead: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodySlowLogTrendTableSchemaResultSet extends $dara.Model {
  /**
   * @example
   * query_start_time
   */
  name?: string;
  /**
   * @example
   * UInt64
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBodySlowLogTrendTableSchema extends $dara.Model {
  resultSet?: DescribeSlowLogTrendResponseBodySlowLogTrendTableSchemaResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeSlowLogTrendResponseBodySlowLogTrendTableSchemaResultSet },
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

export class DescribeSlowLogTrendResponseBodySlowLogTrend extends $dara.Model {
  data?: DescribeSlowLogTrendResponseBodySlowLogTrendData;
  /**
   * @example
   * 1
   */
  rows?: string;
  /**
   * @example
   * 1
   */
  rowsBeforeLimitAtLeast?: string;
  statistics?: DescribeSlowLogTrendResponseBodySlowLogTrendStatistics;
  tableSchema?: DescribeSlowLogTrendResponseBodySlowLogTrendTableSchema;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      rows: 'Rows',
      rowsBeforeLimitAtLeast: 'RowsBeforeLimitAtLeast',
      statistics: 'Statistics',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSlowLogTrendResponseBodySlowLogTrendData,
      rows: 'string',
      rowsBeforeLimitAtLeast: 'string',
      statistics: DescribeSlowLogTrendResponseBodySlowLogTrendStatistics,
      tableSchema: DescribeSlowLogTrendResponseBodySlowLogTrendTableSchema,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.statistics && typeof (this.statistics as any).validate === 'function') {
      (this.statistics as any).validate();
    }
    if(this.tableSchema && typeof (this.tableSchema as any).validate === 'function') {
      (this.tableSchema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogTrendResponseBody extends $dara.Model {
  /**
   * @example
   * 7D3ECB0E-98CA-5E08-A9CA-F70C5A1E9BDF
   */
  requestId?: string;
  slowLogTrend?: DescribeSlowLogTrendResponseBodySlowLogTrend;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slowLogTrend: 'SlowLogTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slowLogTrend: DescribeSlowLogTrendResponseBodySlowLogTrend,
    };
  }

  validate() {
    if(this.slowLogTrend && typeof (this.slowLogTrend as any).validate === 'function') {
      (this.slowLogTrend as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

