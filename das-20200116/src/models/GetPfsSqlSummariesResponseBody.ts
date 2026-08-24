// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPfsSqlSummariesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Average SQL execution duration, in milliseconds.
   * 
   * @example
   * 0.1717
   */
  avgLatency?: number;
  /**
   * @remarks
   * Total number of executions.
   * 
   * @example
   * 100000
   */
  count?: number;
  /**
   * @remarks
   * Percentage of total executions.
   * 
   * @example
   * 0.0586
   */
  countRate?: number;
  /**
   * @remarks
   * Ratio of CPU execution time to total SQL execution time.
   * 
   * @example
   * 0
   */
  cpuRate?: number;
  /**
   * @remarks
   * CPU runtime, in milliseconds.
   * 
   * @example
   * 0
   */
  cpuTime?: number;
  /**
   * @remarks
   * Data read time, in milliseconds.
   * 
   * @example
   * 0
   */
  dataReadTime?: number;
  /**
   * @remarks
   * Number of readable data nodes.
   * 
   * @example
   * 0
   */
  dataReads?: number;
  /**
   * @remarks
   * Data write time, in milliseconds.
   * 
   * @example
   * 0
   */
  dataWriteTime?: number;
  /**
   * @remarks
   * Number of writable data nodes.
   * 
   * @example
   * 0
   */
  dataWrites?: number;
  /**
   * @remarks
   * Database name.
   * 
   * @example
   * testDB
   */
  db?: string;
  /**
   * @remarks
   * Actual runtime, in milliseconds.
   * 
   * @example
   * 0
   */
  elapsedTime?: number;
  /**
   * @remarks
   * Number of errors.
   * 
   * @example
   * 0
   */
  errCount?: number;
  /**
   * @remarks
   * First execution time, in Unix time format, in milliseconds.
   * 
   * @example
   * 1659308149000
   */
  firstTime?: number;
  /**
   * @remarks
   * Indicates whether a full table scan occurred. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  fullScan?: boolean;
  /**
   * @remarks
   * Primary key ID.
   * 
   * @example
   * 26186357
   */
  id?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * Last update time, in Unix time format, in milliseconds.
   * 
   * @example
   * 1661306520000
   */
  lastTime?: number;
  /**
   * @remarks
   * Average lock wait time, in milliseconds.
   * 
   * @example
   * 0
   */
  lockLatencyAvg?: number;
  /**
   * @remarks
   * Logical database ID.
   * 
   * @example
   * 58275984
   */
  logicId?: number;
  /**
   * @remarks
   * Number of logical nodes.
   * 
   * @example
   * 0
   */
  logicReads?: number;
  /**
   * @remarks
   * Maximum execution duration, in milliseconds.
   * 
   * @example
   * 36.233
   */
  maxLatency?: number;
  /**
   * @remarks
   * Number of mutex spins.
   * 
   * @example
   * 1
   */
  mutexSpins?: number;
  /**
   * @remarks
   * Number of mutex waits.
   * 
   * @example
   * 1
   */
  mutexWaits?: number;
  /**
   * @remarks
   * Node ID.
   * 
   * > This parameter is returned for ApsaraDB RDS for MySQL Cluster Edition or PolarDB for MySQL database instances.
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * Number of physical asynchronous nodes.
   * 
   * @example
   * 0
   */
  physicalAsyncReads?: number;
  /**
   * @remarks
   * Number of physical nodes.
   * 
   * @example
   * 0
   */
  physicalReads?: number;
  /**
   * @remarks
   * SQL template.
   * 
   * @example
   * select ?
   */
  psql?: string;
  /**
   * @remarks
   * Number of redo nodes.
   * 
   * @example
   * 0
   */
  redoWrites?: number;
  /**
   * @remarks
   * Number of rows affected.
   * 
   * @example
   * 0
   */
  rowsAffected?: number;
  /**
   * @remarks
   * Average number of rows affected.
   * 
   * @example
   * 0
   */
  rowsAffectedAvg?: number;
  /**
   * @remarks
   * Total number of rows scanned.
   * 
   * @example
   * 100
   */
  rowsExamined?: number;
  /**
   * @remarks
   * Average number of rows scanned.
   * 
   * @example
   * 0
   */
  rowsExaminedAvg?: number;
  /**
   * @remarks
   * Average number of rows sent.
   * 
   * @example
   * 0
   */
  rowsSendAvg?: number;
  /**
   * @remarks
   * Number of rows returned.
   * 
   * @example
   * 0
   */
  rowsSent?: number;
  /**
   * @remarks
   * Average number of rows returned per SQL statement.
   * 
   * @example
   * 0.52
   */
  rowsSentAvg?: number;
  /**
   * @remarks
   * Number of rows sorted.
   * 
   * @example
   * 0
   */
  rowsSorted?: number;
  /**
   * @remarks
   * Percentage of total execution duration.
   * 
   * @example
   * 0.1384
   */
  rtRate?: number;
  /**
   * @remarks
   * Indicates whether read/write splitting is enabled. Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  rwlockOsWaits?: number;
  /**
   * @remarks
   * Read/write splitting parameter.
   * 
   * @example
   * 0
   */
  rwlockSpinRounds?: number;
  /**
   * @remarks
   * Indicates whether multiple index scans are enabled. Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  rwlockSpinWaits?: number;
  /**
   * @remarks
   * The average number of connections that perform table scans without using an index.
   * >Notice: If this parameter value is not 0, carefully check the indexes of the table.
   * 
   * @example
   * 0
   */
  selectFullJoinAvg?: number;
  /**
   * @remarks
   * Average number of range joins.
   * 
   * @example
   * 0
   */
  selectFullRangeJoinAvg?: number;
  /**
   * @remarks
   * Average range selection.
   * 
   * @example
   * 0
   */
  selectRangeAvg?: number;
  /**
   * @remarks
   * Average number of scans.
   * 
   * @example
   * 0
   */
  selectScanAvg?: number;
  /**
   * @remarks
   * Semi-synchronous replication delay, in milliseconds.
   * 
   * @example
   * 0.12
   */
  semisyncDelayTime?: number;
  /**
   * @remarks
   * Server lock time, in milliseconds.
   * 
   * @example
   * 0
   */
  serverLockTime?: number;
  /**
   * @remarks
   * Number of merge passes required by the sort algorithm.
   * 
   * @example
   * 0
   */
  sortMergePasses?: number;
  /**
   * @remarks
   * Average number of range-based sorts.
   * 
   * @example
   * 0
   */
  sortRangeAvg?: number;
  /**
   * @remarks
   * Average number of sorted rows.
   * 
   * @example
   * 0
   */
  sortRowsAvg?: number;
  /**
   * @remarks
   * Average number of sorted scans.
   * 
   * @example
   * 0
   */
  sortScanAvg?: number;
  /**
   * @remarks
   * SQL template ID.
   * 
   * @example
   * 2e8147b5ca2dfc640dfd5e43d96a****
   */
  sqlId?: string;
  /**
   * @remarks
   * SQL type. Valid values:
   * 
   * - **SELECT**
   * 
   * - **UPDATE**
   * 
   * - **DELETE**
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * Database table names.
   */
  tables?: string[];
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * None
   */
  timerWaitAvg?: number;
  /**
   * @remarks
   * Data timestamp in Unix time format, in milliseconds.
   * 
   * @example
   * 1643040000000
   */
  timestamp?: number;
  /**
   * @remarks
   * Number of temporary disk tables.
   * 
   * @example
   * 0
   */
  tmpDiskTables?: number;
  /**
   * @remarks
   * Average number of temporary disk tables.
   * 
   * @example
   * 0
   */
  tmpDiskTablesAvg?: number;
  /**
   * @remarks
   * Number of temporary tables.
   * 
   * @example
   * 0
   */
  tmpTables?: number;
  /**
   * @remarks
   * Average number of temporary tables.
   * 
   * @example
   * 0
   */
  tmpTablesAvg?: number;
  /**
   * @remarks
   * Total execution duration, in milliseconds.
   * 
   * @example
   * 60913.256
   */
  totalLatency?: number;
  /**
   * @remarks
   * Transaction lock time, in milliseconds.
   * 
   * @example
   * 0
   */
  transactionLockTime?: number;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 196278346919****
   */
  userId?: string;
  /**
   * @remarks
   * Number of warnings.
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
   * Reserved parameter.
   * 
   * @example
   * None
   */
  extra?: any;
  /**
   * @remarks
   * Detailed information list.
   */
  list?: GetPfsSqlSummariesResponseBodyDataList[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Maximum number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records.
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
   * Response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response data.
   */
  data?: GetPfsSqlSummariesResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * > If the request succeeds, this parameter returns **Successful**. If it fails, it returns error details such as an error code.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 54F3DBAE-9420-511A-9C29-265E8C04****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded:
   * 
   * - **true**: Succeeded.
   * 
   * - **false**: Failed.
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

