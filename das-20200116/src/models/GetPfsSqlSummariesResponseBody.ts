// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPfsSqlSummariesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The average execution latency. Unit: millisecond.
   * 
   * @example
   * 0.1717
   */
  avgLatency?: number;
  /**
   * @remarks
   * The total number of executions.
   * 
   * @example
   * 100000
   */
  count?: number;
  /**
   * @remarks
   * The percentage of the number of executions.
   * 
   * @example
   * 0.0586
   */
  countRate?: number;
  /**
   * @remarks
   * The ratio of the CPU execution duration to the total execution duration of the SQL statement.
   * 
   * @example
   * 0
   */
  cpuRate?: number;
  /**
   * @remarks
   * The CPU execution duration. Unit: millisecond.
   * 
   * @example
   * 0
   */
  cpuTime?: number;
  /**
   * @remarks
   * The data read duration. Unit: millisecond.
   * 
   * @example
   * 0
   */
  dataReadTime?: number;
  /**
   * @remarks
   * The number of nodes from which data can be read.
   * 
   * @example
   * 0
   */
  dataReads?: number;
  /**
   * @remarks
   * The data write duration. Unit: millisecond.
   * 
   * @example
   * 0
   */
  dataWriteTime?: number;
  /**
   * @remarks
   * The number of nodes to which data can be written.
   * 
   * @example
   * 0
   */
  dataWrites?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testDB
   */
  db?: string;
  /**
   * @remarks
   * The execution duration. Unit: millisecond.
   * 
   * @example
   * 0
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The number of errors.
   * 
   * @example
   * 0
   */
  errCount?: number;
  /**
   * @remarks
   * The time when the SQL statement was executed for the first time. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1659308149000
   */
  firstTime?: number;
  /**
   * @remarks
   * Indicates whether full table scan was enabled. Valid values:
   * 
   * * **true**
   * * **false**
   * 
   * @example
   * true
   */
  fullScan?: boolean;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 26186357
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the SQL statement was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1661306520000
   */
  lastTime?: number;
  /**
   * @remarks
   * The average lock wait latency. Unit: millisecond.
   * 
   * @example
   * 0
   */
  lockLatencyAvg?: number;
  /**
   * @remarks
   * The logical database ID.
   * 
   * @example
   * 58275984
   */
  logicId?: number;
  /**
   * @remarks
   * The number of logical nodes.
   * 
   * @example
   * 0
   */
  logicReads?: number;
  /**
   * @remarks
   * The maximum execution latency. Unit: millisecond.
   * 
   * @example
   * 36.233
   */
  maxLatency?: number;
  /**
   * @remarks
   * The number of mutex spins.
   * 
   * @example
   * 1
   */
  mutexSpins?: number;
  /**
   * @remarks
   * The number of mutex waits.
   * 
   * @example
   * 1
   */
  mutexWaits?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * >  This parameter is returned only if the database instance is an ApsaraDB RDS for MySQL Cluster Edition instance or a PolarDB for MySQL cluster.
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The number of physical asynchronous nodes.
   * 
   * @example
   * 0
   */
  physicalAsyncReads?: number;
  /**
   * @remarks
   * The number of physical nodes.
   * 
   * @example
   * 0
   */
  physicalReads?: number;
  /**
   * @remarks
   * The SQL template.
   * 
   * @example
   * select ?
   */
  psql?: string;
  /**
   * @remarks
   * The number of redo nodes.
   * 
   * @example
   * 0
   */
  redoWrites?: number;
  /**
   * @remarks
   * The number of rows that are affected by the SQL statement.
   * 
   * @example
   * 0
   */
  rowsAffected?: number;
  /**
   * @remarks
   * The average number of rows affected by the SQL statement.
   * 
   * @example
   * 0
   */
  rowsAffectedAvg?: number;
  /**
   * @remarks
   * The total number of scanned rows.
   * 
   * @example
   * 100
   */
  rowsExamined?: number;
  /**
   * @remarks
   * The average number of scanned rows.
   * 
   * @example
   * 0
   */
  rowsExaminedAvg?: number;
  /**
   * @remarks
   * The average number of returned rows.
   * 
   * @example
   * 0
   */
  rowsSendAvg?: number;
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
   * The average number of rows returned for the SQL statement.
   * 
   * @example
   * 0.52
   */
  rowsSentAvg?: number;
  /**
   * @remarks
   * The number of sorted rows.
   * 
   * @example
   * 0
   */
  rowsSorted?: number;
  /**
   * @remarks
   * The execution duration percentage.
   * 
   * @example
   * 0.1384
   */
  rtRate?: number;
  /**
   * @remarks
   * Indicates whether read/write splitting was enabled. Valid values:
   * 
   * * **0:** Read/write splitting was disabled.
   * * **1:** Read/write splitting was enabled.
   * 
   * @example
   * 0
   */
  rwlockOsWaits?: number;
  /**
   * @remarks
   * The read/write splitting parameters.
   * 
   * @example
   * 0
   */
  rwlockSpinRounds?: number;
  /**
   * @remarks
   * Indices whether multi-index scanning was enabled. Valid values:
   * 
   * * **0:** Multi-index scanning was disabled.
   * * **1:** Multi-index scanning was enabled.
   * 
   * @example
   * 0
   */
  rwlockSpinWaits?: number;
  /**
   * @remarks
   * The average number of joins that performed table scans without using indexes.
   * 
   * > If the value of this parameter is not 0, check the table indexes.
   * 
   * @example
   * 0
   */
  selectFullJoinAvg?: number;
  /**
   * @remarks
   * The average number of joins that selected a range.
   * 
   * @example
   * 0
   */
  selectFullRangeJoinAvg?: number;
  /**
   * @remarks
   * The average selected range.
   * 
   * @example
   * 0
   */
  selectRangeAvg?: number;
  /**
   * @remarks
   * The average number of scanned rows.
   * 
   * @example
   * 0
   */
  selectScanAvg?: number;
  /**
   * @remarks
   * The semi-synchronous replication latency. Unit: millisecond.
   * 
   * @example
   * 0.12
   */
  semisyncDelayTime?: number;
  /**
   * @remarks
   * The amount of time consumed for locking the server. Unit: millisecond.
   * 
   * @example
   * 0
   */
  serverLockTime?: number;
  /**
   * @remarks
   * The number of merges that the sorting algorithm must perform.
   * 
   * @example
   * 0
   */
  sortMergePasses?: number;
  /**
   * @remarks
   * The average number of sorts that were performed by using a range.
   * 
   * @example
   * 0
   */
  sortRangeAvg?: number;
  /**
   * @remarks
   * The average number of sorted rows.
   * 
   * @example
   * 0
   */
  sortRowsAvg?: number;
  /**
   * @remarks
   * The average number of sorts that were performed during table scans.
   * 
   * @example
   * 0
   */
  sortScanAvg?: number;
  /**
   * @remarks
   * The SQL template ID.
   * 
   * @example
   * 2e8147b5ca2dfc640dfd5e43d96a****
   */
  sqlId?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * 
   * * **SELECT**
   * * **UPDATE**
   * * **DELETE**
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The names of tables in the database.
   */
  tables?: string[];
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  timerWaitAvg?: number;
  /**
   * @remarks
   * The data timestamp. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1643040000000
   */
  timestamp?: number;
  /**
   * @remarks
   * The number of on-disk temporary tables.
   * 
   * @example
   * 0
   */
  tmpDiskTables?: number;
  /**
   * @remarks
   * The average number of on-disk temporary tables.
   * 
   * @example
   * 0
   */
  tmpDiskTablesAvg?: number;
  /**
   * @remarks
   * The number of temporary tables.
   * 
   * @example
   * 0
   */
  tmpTables?: number;
  /**
   * @remarks
   * The average number of temporary tables.
   * 
   * @example
   * 0
   */
  tmpTablesAvg?: number;
  /**
   * @remarks
   * The execution latency. Unit: millisecond.
   * 
   * @example
   * 60913.256
   */
  totalLatency?: number;
  /**
   * @remarks
   * The amount of time consumed for locking the storage transaction. Unit: millisecond.
   * 
   * @example
   * 0
   */
  transactionLockTime?: number;
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
   * The number of warnings.
   * 
   * @example
   * 0
   */
  warnCount?: number;
  static names(): { [key: string]: string } {
    return {
      avgLatency: 'AvgLatency',
      count: 'Count',
      countRate: 'CountRate',
      cpuRate: 'CpuRate',
      cpuTime: 'CpuTime',
      dataReadTime: 'DataReadTime',
      dataReads: 'DataReads',
      dataWriteTime: 'DataWriteTime',
      dataWrites: 'DataWrites',
      db: 'Db',
      elapsedTime: 'ElapsedTime',
      errCount: 'ErrCount',
      firstTime: 'FirstTime',
      fullScan: 'FullScan',
      id: 'Id',
      instanceId: 'InstanceId',
      lastTime: 'LastTime',
      lockLatencyAvg: 'LockLatencyAvg',
      logicId: 'LogicId',
      logicReads: 'LogicReads',
      maxLatency: 'MaxLatency',
      mutexSpins: 'MutexSpins',
      mutexWaits: 'MutexWaits',
      nodeId: 'NodeId',
      physicalAsyncReads: 'PhysicalAsyncReads',
      physicalReads: 'PhysicalReads',
      psql: 'Psql',
      redoWrites: 'RedoWrites',
      rowsAffected: 'RowsAffected',
      rowsAffectedAvg: 'RowsAffectedAvg',
      rowsExamined: 'RowsExamined',
      rowsExaminedAvg: 'RowsExaminedAvg',
      rowsSendAvg: 'RowsSendAvg',
      rowsSent: 'RowsSent',
      rowsSentAvg: 'RowsSentAvg',
      rowsSorted: 'RowsSorted',
      rtRate: 'RtRate',
      rwlockOsWaits: 'RwlockOsWaits',
      rwlockSpinRounds: 'RwlockSpinRounds',
      rwlockSpinWaits: 'RwlockSpinWaits',
      selectFullJoinAvg: 'SelectFullJoinAvg',
      selectFullRangeJoinAvg: 'SelectFullRangeJoinAvg',
      selectRangeAvg: 'SelectRangeAvg',
      selectScanAvg: 'SelectScanAvg',
      semisyncDelayTime: 'SemisyncDelayTime',
      serverLockTime: 'ServerLockTime',
      sortMergePasses: 'SortMergePasses',
      sortRangeAvg: 'SortRangeAvg',
      sortRowsAvg: 'SortRowsAvg',
      sortScanAvg: 'SortScanAvg',
      sqlId: 'SqlId',
      sqlType: 'SqlType',
      tables: 'Tables',
      timerWaitAvg: 'TimerWaitAvg',
      timestamp: 'Timestamp',
      tmpDiskTables: 'TmpDiskTables',
      tmpDiskTablesAvg: 'TmpDiskTablesAvg',
      tmpTables: 'TmpTables',
      tmpTablesAvg: 'TmpTablesAvg',
      totalLatency: 'TotalLatency',
      transactionLockTime: 'TransactionLockTime',
      userId: 'UserId',
      warnCount: 'WarnCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgLatency: 'number',
      count: 'number',
      countRate: 'number',
      cpuRate: 'number',
      cpuTime: 'number',
      dataReadTime: 'number',
      dataReads: 'number',
      dataWriteTime: 'number',
      dataWrites: 'number',
      db: 'string',
      elapsedTime: 'number',
      errCount: 'number',
      firstTime: 'number',
      fullScan: 'boolean',
      id: 'number',
      instanceId: 'string',
      lastTime: 'number',
      lockLatencyAvg: 'number',
      logicId: 'number',
      logicReads: 'number',
      maxLatency: 'number',
      mutexSpins: 'number',
      mutexWaits: 'number',
      nodeId: 'string',
      physicalAsyncReads: 'number',
      physicalReads: 'number',
      psql: 'string',
      redoWrites: 'number',
      rowsAffected: 'number',
      rowsAffectedAvg: 'number',
      rowsExamined: 'number',
      rowsExaminedAvg: 'number',
      rowsSendAvg: 'number',
      rowsSent: 'number',
      rowsSentAvg: 'number',
      rowsSorted: 'number',
      rtRate: 'number',
      rwlockOsWaits: 'number',
      rwlockSpinRounds: 'number',
      rwlockSpinWaits: 'number',
      selectFullJoinAvg: 'number',
      selectFullRangeJoinAvg: 'number',
      selectRangeAvg: 'number',
      selectScanAvg: 'number',
      semisyncDelayTime: 'number',
      serverLockTime: 'number',
      sortMergePasses: 'number',
      sortRangeAvg: 'number',
      sortRowsAvg: 'number',
      sortScanAvg: 'number',
      sqlId: 'string',
      sqlType: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
      timerWaitAvg: 'number',
      timestamp: 'number',
      tmpDiskTables: 'number',
      tmpDiskTablesAvg: 'number',
      tmpTables: 'number',
      tmpTablesAvg: 'number',
      totalLatency: 'number',
      transactionLockTime: 'number',
      userId: 'string',
      warnCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsSqlSummariesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  extra?: any;
  /**
   * @remarks
   * The details of the data returned.
   */
  list?: GetPfsSqlSummariesResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 264
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'any',
      list: { 'type': 'array', 'itemType': GetPfsSqlSummariesResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPfsSqlSummariesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPfsSqlSummariesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
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
   * 54F3DBAE-9420-511A-9C29-265E8C04****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      data: GetPfsSqlSummariesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

