// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTopSQLListResponseBodyTopSQLList extends $dara.Model {
  /**
   * @remarks
   * The internal wait time, in ms.
   * 
   * @example
   * 0
   */
  affectedRows?: number;
  /**
   * @remarks
   * The wait time in concurrent execution, in ms.
   * 
   * @example
   * 0.0
   */
  appWaitTime?: number;
  /**
   * @remarks
   * The average CPU time, in ms.
   * 
   * @example
   * 14
   */
  blockCacheHit?: number;
  /**
   * @remarks
   * $.parameters[16].schema.example
   * 
   * @example
   * 4
   */
  blockIndexCacheHit?: number;
  /**
   * @remarks
   * $.parameters[14].schema.enumValueTitles
   * 
   * @example
   * 0
   */
  bloomFilterCacheHit?: number;
  /**
   * @remarks
   * $.parameters[14].schema.description
   * 
   * @example
   * 1*2.***.1*3.***
   */
  clientIp?: string;
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 0.0
   */
  concurrencyWaitTime?: number;
  /**
   * @remarks
   * The maximum CPU time, in ms.
   * 
   * @example
   * 50.13
   */
  cpuTime?: number;
  /**
   * @remarks
   * The number of remote plans.
   * 
   * @example
   * testdb
   */
  dbName?: string;
  /**
   * @remarks
   * The number of rows to return on each page.   
   * - Maximum value: 100   
   * - Default value: 10
   * 
   * @example
   * 0.0
   */
  decodeTime?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 0
   */
  diskRead?: number;
  /**
   * @remarks
   * The sorting rule.
   * 
   * @example
   * 76.382
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The number of rows read from the disk.
   * 
   * @example
   * mysql response wait client
   */
  event?: string;
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **DescribeTopSQLList**.
   * 
   * @example
   * 163.0
   */
  execPerSecond?: number;
  /**
   * @remarks
   * The number of rows read from the memory.
   * 
   * @example
   * 61.044
   */
  executeTime?: number;
  /**
   * @remarks
   * The number of executions per second.
   * 
   * @example
   * 89403
   */
  executions?: number;
  /**
   * @remarks
   * $.parameters[12].schema.description
   * 
   * @example
   * 0
   */
  failTimes?: number;
  /**
   * @remarks
   * The queuing time, in ms.
   * 
   * @example
   * 0.052
   */
  getPlanTime?: number;
  /**
   * @remarks
   * $.parameters[15].schema.example
   * 
   * @example
   * 0.0
   */
  IOWaitTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * 1
   */
  key?: number;
  /**
   * @remarks
   * You can call this operation to query SQL execution performance data collected by the diagnostic system.
   * 
   * @example
   * 19
   */
  logicalRead?: number;
  /**
   * @remarks
   * SQLID.
   * 
   * @example
   * 257.967
   */
  maxCpuTime?: number;
  /**
   * @remarks
   * The sequence number of the returned SQL statement.
   * 
   * @example
   * 260.044
   */
  maxElapsedTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * 527
   */
  memstoreReadRowCount?: number;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 0
   */
  missPlans?: number;
  /**
   * @remarks
   * The end time of the time range for querying TOP SQL statements.   
   * The value must be UTC time in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 0.0
   */
  netWaitTime?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * i-bp18qljorblo8es*****
   */
  nodeIp?: string;
  /**
   * @remarks
   * $.parameters[12].schema.enumValueTitles
   * 
   * @example
   * 15.275
   */
  queueTime?: number;
  /**
   * @remarks
   * The start time of the time range for querying TOP SQL statements.   
   * The value must be UTC time in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 0
   */
  RPCCount?: number;
  /**
   * @remarks
   * The return result of the request.
   * 
   * @example
   * 0
   */
  remotePlans?: number;
  /**
   * @remarks
   * $.parameters[13].schema.description
   * 
   * @example
   * 0
   */
  retryCount?: number;
  /**
   * @remarks
   * The wait event.
   * 
   * @example
   * 1
   */
  returnRows?: number;
  /**
   * @remarks
   * ```
   * http(s)://[Endpoint]/?Action=DescribeTopSQLList
   * &TenantId=t2mr3oae0****
   * &StartTime=2021-06-13 15:40:43
   * &EndTime=2021-09-13 15:40:43
   * &DbName=testdb
   * &SearchKeyWord=update
   * &SearchParameter=cputime
   * &SearchRule=>
   * &SearchValue=0.01
   * &SQLId=8D6E84****0B8FB1823D199E2CA1****
   * &NodeIp=i-bp19y05uq6xpacyqnlrc
   * &PageNumber=1
   * &PageSize=10
   * &SortColumn=cputime
   * &SortOrder=desc
   * &Common request parameters
   * ```
   * 
   * @example
   * 0
   */
  rowCacheHit?: number;
  /**
   * @remarks
   * $.parameters[13].schema.example
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  SQLId?: string;
  /**
   * @remarks
   * The list of top SQL statements.
   * 
   * @example
   * SELECT  ****   FROM ****   WHERE **** = ? AND **** = ?   ORDER BY **** ASC
   */
  SQLText?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1
   */
  SQLType?: number;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * 0.0
   */
  scheduleTime?: number;
  /**
   * @example
   * 43086
   */
  ssstoreReadRowCount?: number;
  /**
   * @remarks
   * -
   * 
   * @example
   * 10.966
   */
  totalWaitTime?: number;
  /**
   * @remarks
   * The number of Bloom filter cache hits.
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

