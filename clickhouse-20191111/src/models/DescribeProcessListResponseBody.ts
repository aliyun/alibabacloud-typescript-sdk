// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListResponseBodyProcessListDataResultSet extends $dara.Model {
  initialAddress?: string;
  initialQueryId?: string;
  initialUser?: string;
  query?: string;
  queryDurationMs?: string;
  queryStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      initialAddress: 'InitialAddress',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      query: 'Query',
      queryDurationMs: 'QueryDurationMs',
      queryStartTime: 'QueryStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initialAddress: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      query: 'string',
      queryDurationMs: 'string',
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

export class DescribeProcessListResponseBodyProcessListData extends $dara.Model {
  resultSet?: DescribeProcessListResponseBodyProcessListDataResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeProcessListResponseBodyProcessListDataResultSet },
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

export class DescribeProcessListResponseBodyProcessListStatistics extends $dara.Model {
  /**
   * @remarks
   * The size of the data that was scanned. Unit: bytes.
   * 
   * @example
   * 9141300000
   */
  bytesRead?: number;
  /**
   * @remarks
   * The average response time.
   * 
   * @example
   * 4156
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The number of scanned rows.
   * 
   * @example
   * 1000000
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

export class DescribeProcessListResponseBodyProcessListTableSchemaResultSet extends $dara.Model {
  name?: string;
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

export class DescribeProcessListResponseBodyProcessListTableSchema extends $dara.Model {
  resultSet?: DescribeProcessListResponseBodyProcessListTableSchemaResultSet[];
  static names(): { [key: string]: string } {
    return {
      resultSet: 'ResultSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultSet: { 'type': 'array', 'itemType': DescribeProcessListResponseBodyProcessListTableSchemaResultSet },
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

export class DescribeProcessListResponseBodyProcessList extends $dara.Model {
  data?: DescribeProcessListResponseBodyProcessListData;
  /**
   * @remarks
   * The number of rows returned for the query.
   * 
   * @example
   * 1145700
   */
  rows?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  rowsBeforeLimitAtLeast?: string;
  /**
   * @remarks
   * The statistics of the results.
   */
  statistics?: DescribeProcessListResponseBodyProcessListStatistics;
  tableSchema?: DescribeProcessListResponseBodyProcessListTableSchema;
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
      data: DescribeProcessListResponseBodyProcessListData,
      rows: 'string',
      rowsBeforeLimitAtLeast: 'string',
      statistics: DescribeProcessListResponseBodyProcessListStatistics,
      tableSchema: DescribeProcessListResponseBodyProcessListTableSchema,
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

export class DescribeProcessListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queries.
   */
  processList?: DescribeProcessListResponseBodyProcessList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FD61BB0D-788A-5185-A8E3-1B90BA8F6F04
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      processList: 'ProcessList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processList: DescribeProcessListResponseBodyProcessList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.processList && typeof (this.processList as any).validate === 'function') {
      (this.processList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

