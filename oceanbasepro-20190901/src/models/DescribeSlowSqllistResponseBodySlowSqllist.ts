// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowSQLListResponseBodySlowSQLList extends $dara.Model {
  /**
   * @remarks
   * The number of rows affected.
   * 
   * @example
   * 0
   */
  affectedRows?: number;
  /**
   * @remarks
   * The wait time of the client.
   * 
   * @example
   * 0.0
   */
  appWaitTime?: number;
  /**
   * @remarks
   * The number of block cache hits.
   * 
   * @example
   * 14
   */
  blockCacheHit?: number;
  /**
   * @remarks
   * The number of block index cache hits.
   * 
   * @example
   * 4
   */
  blockIndexCacheHit?: number;
  /**
   * @remarks
   * The number of Bloom filter cache hits.
   * 
   * @example
   * 0
   */
  bloomFilterCacheHit?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 1*2.***.1*3.***
   */
  clientIp?: string;
  /**
   * @remarks
   * The wait time in concurrent execution.
   * 
   * @example
   * 0.0
   */
  concurrencyWaitTime?: number;
  /**
   * @remarks
   * The average CPU time.
   * 
   * @example
   * 50.13
   */
  cpuTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb
   */
  dbName?: string;
  /**
   * @remarks
   * The time to wait for decoding.
   * 
   * @example
   * 0.0
   */
  decodeTime?: number;
  /**
   * @remarks
   * The number of physical reads.
   * 
   * @example
   * 0
   */
  diskRead?: number;
  /**
   * @remarks
   * The average response time.
   * 
   * @example
   * 76.382
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The wait event.
   * 
   * @example
   * mysql response wait client
   */
  event?: string;
  /**
   * @remarks
   * The number of executions per second.
   * 
   * @example
   * 163.0
   */
  execPerSecond?: number;
  /**
   * @remarks
   * The internal execution time.
   * 
   * @example
   * 61.044
   */
  executeTime?: number;
  /**
   * @remarks
   * The number of executions.
   * 
   * @example
   * 89403
   */
  executions?: number;
  /**
   * @remarks
   * The number of failures.
   * 
   * @example
   * 0
   */
  failTimes?: number;
  /**
   * @remarks
   * The time spent in hard parsing.
   * 
   * @example
   * 0.052
   */
  getPlanTime?: number;
  /**
   * @remarks
   * The I/O wait time.
   * 
   * @example
   * 0.0
   */
  IOWaitTime?: number;
  /**
   * @remarks
   * The sequence number of the returned SQL statement.
   * 
   * @example
   * 1
   */
  key?: number;
  /**
   * @remarks
   * The number of logical reads.
   * 
   * @example
   * 19
   */
  logicalRead?: number;
  /**
   * @remarks
   * The maximum CPU time.
   * 
   * @example
   * 257.967
   */
  maxCpuTime?: number;
  /**
   * @remarks
   * The maximum response time.
   * 
   * @example
   * 260.044
   */
  maxElapsedTime?: number;
  /**
   * @remarks
   * The number of rows read from the memory.
   * 
   * @example
   * 527
   */
  memstoreReadRowCount?: number;
  /**
   * @remarks
   * The number of plan misses.
   * 
   * @example
   * 0
   */
  missPlans?: number;
  /**
   * @remarks
   * The network latency.
   * 
   * @example
   * 0.0
   */
  netWaitTime?: number;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * i-bp18qljorblo8es*****
   */
  nodeIp?: string;
  /**
   * @remarks
   * The queuing time.
   * 
   * @example
   * 15.275
   */
  queueTime?: number;
  /**
   * @remarks
   * The number of RPCs.
   * 
   * @example
   * 0
   */
  RPCCount?: number;
  /**
   * @remarks
   * The number of remote plans.
   * 
   * @example
   * 0
   */
  remotePlans?: number;
  /**
   * @remarks
   * The number of retries.
   * 
   * @example
   * 0
   */
  retryCount?: number;
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 1
   */
  returnRows?: number;
  /**
   * @remarks
   * The number of row cache hits.
   * 
   * @example
   * 0
   */
  rowCacheHit?: number;
  /**
   * @remarks
   * SQLID.
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  SQLId?: string;
  /**
   * @remarks
   * The SQL text.
   * 
   * @example
   * SELECT  ****   FROM ****   WHERE **** = ? AND **** = ?   ORDER BY **** ASC
   */
  SQLText?: string;
  /**
   * @remarks
   * The SQL type.
   * 
   * @example
   * 1
   */
  SQLType?: number;
  /**
   * @remarks
   * The scheduling duration.
   * 
   * @example
   * 0.0
   */
  scheduleTime?: number;
  /**
   * @remarks
   * The number of rows read from the disk.
   * 
   * @example
   * 43086
   */
  ssstoreReadRowCount?: number;
  /**
   * @remarks
   * The internal wait time.
   * 
   * @example
   * 10.966
   */
  totalWaitTime?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * tester
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
      appWaitTime: 'AppWaitTime',
      blockCacheHit: 'BlockCacheHit',
      blockIndexCacheHit: 'BlockIndexCacheHit',
      bloomFilterCacheHit: 'BloomFilterCacheHit',
      clientIp: 'ClientIp',
      concurrencyWaitTime: 'ConcurrencyWaitTime',
      cpuTime: 'CpuTime',
      dbName: 'DbName',
      decodeTime: 'DecodeTime',
      diskRead: 'DiskRead',
      elapsedTime: 'ElapsedTime',
      event: 'Event',
      execPerSecond: 'ExecPerSecond',
      executeTime: 'ExecuteTime',
      executions: 'Executions',
      failTimes: 'FailTimes',
      getPlanTime: 'GetPlanTime',
      IOWaitTime: 'IOWaitTime',
      key: 'Key',
      logicalRead: 'LogicalRead',
      maxCpuTime: 'MaxCpuTime',
      maxElapsedTime: 'MaxElapsedTime',
      memstoreReadRowCount: 'MemstoreReadRowCount',
      missPlans: 'MissPlans',
      netWaitTime: 'NetWaitTime',
      nodeIp: 'NodeIp',
      queueTime: 'QueueTime',
      RPCCount: 'RPCCount',
      remotePlans: 'RemotePlans',
      retryCount: 'RetryCount',
      returnRows: 'ReturnRows',
      rowCacheHit: 'RowCacheHit',
      SQLId: 'SQLId',
      SQLText: 'SQLText',
      SQLType: 'SQLType',
      scheduleTime: 'ScheduleTime',
      ssstoreReadRowCount: 'SsstoreReadRowCount',
      totalWaitTime: 'TotalWaitTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      appWaitTime: 'number',
      blockCacheHit: 'number',
      blockIndexCacheHit: 'number',
      bloomFilterCacheHit: 'number',
      clientIp: 'string',
      concurrencyWaitTime: 'number',
      cpuTime: 'number',
      dbName: 'string',
      decodeTime: 'number',
      diskRead: 'number',
      elapsedTime: 'number',
      event: 'string',
      execPerSecond: 'number',
      executeTime: 'number',
      executions: 'number',
      failTimes: 'number',
      getPlanTime: 'number',
      IOWaitTime: 'number',
      key: 'number',
      logicalRead: 'number',
      maxCpuTime: 'number',
      maxElapsedTime: 'number',
      memstoreReadRowCount: 'number',
      missPlans: 'number',
      netWaitTime: 'number',
      nodeIp: 'string',
      queueTime: 'number',
      RPCCount: 'number',
      remotePlans: 'number',
      retryCount: 'number',
      returnRows: 'number',
      rowCacheHit: 'number',
      SQLId: 'string',
      SQLText: 'string',
      SQLType: 'number',
      scheduleTime: 'number',
      ssstoreReadRowCount: 'number',
      totalWaitTime: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

