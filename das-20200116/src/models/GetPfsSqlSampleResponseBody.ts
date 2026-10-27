// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPfsSqlSampleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of on-disk internal temporary tables created during statement execution.
   * 
   * @example
   * 0
   */
  createTmpDiskTables?: number;
  /**
   * @remarks
   * The number of internal temporary tables created during statement execution.
   * 
   * @example
   * 0
   */
  createTmpTables?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * testDB
   */
  db?: string;
  /**
   * @remarks
   * The end event ID. This parameter is NULL by default when the event starts and is updated to the current event ID of the thread when the event ends.
   * 
   * @example
   * 0
   */
  endEventId?: number;
  /**
   * @remarks
   * The number of errors in the SQL statement.
   * 
   * @example
   * 0
   */
  errors?: number;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 63735293
   */
  eventId?: number;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * statement/sql/select
   */
  eventName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution duration, in milliseconds.
   * 
   * @example
   * 0.199
   */
  latency?: number;
  /**
   * @remarks
   * The lock wait time, in milliseconds.
   * 
   * @example
   * 0.09
   */
  lockLatency?: number;
  /**
   * @remarks
   * The logical database ID.
   * 
   * @example
   * xxxxx
   */
  logicId?: string;
  /**
   * @remarks
   * Indicates whether the server could not find a good index to use for the statement. Valid values:
   * 
   * - **1**: Yes.
   * - **0**: No.
   * 
   * @example
   * 1
   */
  noGoodIndexUsed?: number;
  /**
   * @remarks
   * Indicates whether the statement performed a table scan without using an index. Valid values:
   * 
   * - **1**: Yes.
   * - **0**: No.
   * 
   * @example
   * 1
   */
  noIndexUsed?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * > This parameter is returned only for ApsaraDB RDS for MySQL Cluster Edition instances or PolarDB for MySQL clusters.
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The number of affected rows.
   * 
   * @example
   * 0
   */
  rowsAffected?: number;
  /**
   * @remarks
   * The number of scanned rows.
   * 
   * @example
   * 2048576
   */
  rowsExamined?: number;
  /**
   * @remarks
   * The number of rows returned by the SQL statement.
   * 
   * @example
   * 0
   */
  rowsSent?: number;
  /**
   * @remarks
   * The number of joins that perform table scans without using indexes.
   * >Notice: This parameter counts the joins that do not use indexes during a join query. If the value is not 0, check the table indexes.
   * 
   * @example
   * 0
   */
  selectFullJoin?: number;
  /**
   * @remarks
   * The number of joins that use a range search on a reference table.
   * 
   * @example
   * 0
   */
  selectFullRangeJoin?: number;
  /**
   * @remarks
   * The number of joins that use a range on the first table.
   * 
   * @example
   * 0
   */
  selectRange?: number;
  /**
   * @remarks
   * The number of joins without keys that check for key usage after each row.
   * >Notice: This parameter counts the joins that do not use indexes during a join query. If the value is not 0, check the table indexes.
   * 
   * @example
   * 0
   */
  selectRangeCheck?: number;
  /**
   * @remarks
   * The number of scans.
   * 
   * @example
   * 0
   */
  selectScan?: number;
  /**
   * @remarks
   * The number of merge passes that the sort algorithm must perform.
   * 
   * @example
   * 0
   */
  sortMergePasses?: number;
  /**
   * @remarks
   * The number of sorts that use a range.
   * 
   * @example
   * 0
   */
  sortRange?: number;
  /**
   * @remarks
   * The number of sorted rows.
   * 
   * @example
   * 0
   */
  sortRows?: number;
  /**
   * @remarks
   * The number of sort scans.
   * 
   * @example
   * 1
   */
  sortScan?: number;
  /**
   * @remarks
   * The SQL sample.
   * 
   * @example
   * select * from xxxx where ****
   */
  sql?: string;
  /**
   * @remarks
   * The SQL ID.
   * 
   * @example
   * 651b56fe9418d48edb8fdf0980ec****
   */
  sqlId?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * @example
   * 81751940
   */
  threadId?: number;
  /**
   * @remarks
   * The time when the SQL statement was executed. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1660100753556
   */
  timestamp?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 196278346919****
   */
  userId?: string;
  /**
   * @remarks
   * The number of warnings for the SQL statement.
   * 
   * @example
   * 0
   */
  warnings?: number;
  static names(): { [key: string]: string } {
    return {
      createTmpDiskTables: 'CreateTmpDiskTables',
      createTmpTables: 'CreateTmpTables',
      db: 'Db',
      endEventId: 'EndEventId',
      errors: 'Errors',
      eventId: 'EventId',
      eventName: 'EventName',
      instanceId: 'InstanceId',
      latency: 'Latency',
      lockLatency: 'LockLatency',
      logicId: 'LogicId',
      noGoodIndexUsed: 'NoGoodIndexUsed',
      noIndexUsed: 'NoIndexUsed',
      nodeId: 'NodeId',
      rowsAffected: 'RowsAffected',
      rowsExamined: 'RowsExamined',
      rowsSent: 'RowsSent',
      selectFullJoin: 'SelectFullJoin',
      selectFullRangeJoin: 'SelectFullRangeJoin',
      selectRange: 'SelectRange',
      selectRangeCheck: 'SelectRangeCheck',
      selectScan: 'SelectScan',
      sortMergePasses: 'SortMergePasses',
      sortRange: 'SortRange',
      sortRows: 'SortRows',
      sortScan: 'SortScan',
      sql: 'Sql',
      sqlId: 'SqlId',
      threadId: 'ThreadId',
      timestamp: 'Timestamp',
      userId: 'UserId',
      warnings: 'Warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTmpDiskTables: 'number',
      createTmpTables: 'number',
      db: 'string',
      endEventId: 'number',
      errors: 'number',
      eventId: 'number',
      eventName: 'string',
      instanceId: 'string',
      latency: 'number',
      lockLatency: 'number',
      logicId: 'string',
      noGoodIndexUsed: 'number',
      noIndexUsed: 'number',
      nodeId: 'string',
      rowsAffected: 'number',
      rowsExamined: 'number',
      rowsSent: 'number',
      selectFullJoin: 'number',
      selectFullRangeJoin: 'number',
      selectRange: 'number',
      selectRangeCheck: 'number',
      selectScan: 'number',
      sortMergePasses: 'number',
      sortRange: 'number',
      sortRows: 'number',
      sortScan: 'number',
      sql: 'string',
      sqlId: 'string',
      threadId: 'number',
      timestamp: 'number',
      userId: 'string',
      warnings: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsSqlSampleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned SQL sample data.
   */
  data?: GetPfsSqlSampleResponseBodyData[];
  /**
   * @remarks
   * The message returned for the request.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9CB97BC4-6479-55D0-B9D0-EA925AFE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetPfsSqlSampleResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

