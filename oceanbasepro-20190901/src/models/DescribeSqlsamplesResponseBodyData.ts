// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLSamplesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Average updated rows during the execution period.
   * 
   * @example
   * 10000.0
   */
  affectedRows?: number;
  /**
   * @remarks
   * Application event waiting time (in milliseconds).
   * 
   * @example
   * 0.0
   */
  applicationWaitTime?: number;
  /**
   * @remarks
   * BlockCache hit count
   * 
   * @example
   * 99279.0
   */
  blockCacheHit?: number;
  /**
   * @remarks
   * BlockIndexCache hit count
   * 
   * @example
   * 142514.0
   */
  blockIndexCacheHit?: number;
  /**
   * @remarks
   * BloomFilterCache hit count.
   * 
   * @example
   * 0.0
   */
  bloomFilterCacheHit?: number;
  /**
   * @remarks
   * Client IP.
   * 
   * @example
   * i-bp1db****38uemejio
   */
  clientIp?: string;
  /**
   * @remarks
   * Client port.
   * 
   * @example
   * 4****
   */
  clientPort?: number;
  /**
   * @remarks
   * Concurrency event waiting time (in milliseconds).
   * 
   * @example
   * 0.0
   */
  concurrencyWaitTime?: number;
  /**
   * @remarks
   * Consistency level.
   * 
   * @example
   * 3
   */
  consistencyLevel?: string;
  /**
   * @remarks
   * CPU time (in milliseconds).
   * 
   * @example
   * 3377.57
   */
  cpuTime?: number;
  /**
   * @remarks
   * Database name.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * Syntax parsing time (in milliseconds).
   * 
   * @example
   * 0.0
   */
  decodeTime?: number;
  /**
   * @remarks
   * Disk read count.
   * 
   * @example
   * 96972.0
   */
  diskReads?: number;
  /**
   * @remarks
   * Response time (in milliseconds).
   * 
   * @example
   * 2182.66
   */
  elapsedTime?: number;
  /**
   * @remarks
   * Plan execution time (in milliseconds).
   * 
   * @example
   * 8262.01
   */
  executeTime?: number;
  /**
   * @remarks
   * Whether to initiate RPC.
   * 
   * @example
   * 0.0
   */
  executorRpc?: boolean;
  /**
   * @remarks
   * Degree of parallelism.
   * 
   * @example
   * 0
   */
  expectedWorkerCount?: number;
  /**
   * @remarks
   * The full SQL text. 
   * 
   * > This parameter is unavailable.
   * 
   * @example
   * select * from test where c1 > 1 and c2 > 3;
   */
  fullSqlText?: string;
  /**
   * @remarks
   * Plan generation time (in milliseconds).
   * 
   * @example
   * 0.19
   */
  getPlanTime?: number;
  /**
   * @remarks
   * Whether to hit the execution plan.
   * 
   * @example
   * true
   */
  hitPlan?: boolean;
  /**
   * @remarks
   * Whether an internal SQL.
   * 
   * @example
   * false
   */
  inner?: boolean;
  /**
   * @remarks
   * Memstore read row count.
   * 
   * @example
   * 0
   */
  memstoreReadRows?: number;
  /**
   * @remarks
   * Network transmission time (in milliseconds).
   * 
   * @example
   * 0.0
   */
  netTime?: number;
  /**
   * @remarks
   * Network enqueue time (in milliseconds).
   * 
   * @example
   * 0.0
   */
  netWaitTime?: number;
  /**
   * @remarks
   * Database ID.
   * 
   * @example
   * 11006111****4828
   */
  obDbId?: number;
  /**
   * @remarks
   * Server  ID.
   * 
   * @example
   * 2
   */
  obServerId?: number;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 100010
   */
  obUserId?: number;
  /**
   * @remarks
   * The parameter value of the SQL statement.
   * 
   * @example
   * 1****
   */
  paramsValue?: string;
  /**
   * @remarks
   * Average number of partition accessed during the execution period.
   * 
   * @example
   * 1.0
   */
  partitionCount?: number;
  /**
   * @remarks
   * The execution plan ID.
   * 
   * @example
   * 590****
   */
  planId?: number;
  /**
   * @remarks
   * Plan type.
   * 
   * @example
   * LOCAL
   */
  planType?: string;
  /**
   * @remarks
   * Queueing time (in milliseconds).
   * 
   * @example
   * 0.02
   */
  queueTime?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE205C00-30E4-****-****-87E3A8A2AA0C
   */
  requestId?: number;
  /**
   * @remarks
   * SQL request time.
   * 
   * @example
   * 2023-04-12T04:46:38Z
   */
  requestTime?: string;
  /**
   * @remarks
   * Result code.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * Retry count.
   * 
   * @example
   * 0
   */
  retryCount?: number;
  /**
   * @remarks
   * Average returned rows during the execution period.
   * 
   * @example
   * 0.0
   */
  returnRows?: number;
  /**
   * @remarks
   * RowCache hit count.
   * 
   * @example
   * 498.0
   */
  rowCacheHit?: number;
  /**
   * @remarks
   * Number of RPC sent.
   * 
   * @example
   * 8.0
   */
  rpcCount?: number;
  /**
   * @remarks
   * Schedule event waiting time (in milliseconds).
   * 
   * @example
   * 0.0
   */
  scheduleTime?: number;
  /**
   * @remarks
   * The server where the SQL is executed.
   * 
   * @example
   * i-bp1db1****8uemejio
   */
  server?: string;
  /**
   * @remarks
   * The SQL text.
   * 
   * @example
   * select ** from t
   */
  sqlText?: string;
  /**
   * @remarks
   * SQL type.
   * 
   * @example
   * select
   */
  sqlType?: string;
  /**
   * @remarks
   * Ssstore read row count.
   * 
   * @example
   * 986190
   */
  ssstoreReadRows?: number;
  /**
   * @remarks
   * Parameterized SQL text.
   * 
   * @example
   * select a from b
   */
  statement?: string;
  /**
   * @remarks
   * Whether to perform full table scan.
   * 
   * @example
   * false
   */
  tableScan?: boolean;
  /**
   * @remarks
   * Trace ID.
   * 
   * @example
   * YB42C****-0005E303D1****-0-0
   */
  traceId?: string;
  /**
   * @remarks
   * Transaction hash.
   * 
   * @example
   * 1219****927****73791
   */
  transHash?: string;
  /**
   * @remarks
   * Actual number of SQL execution threads.
   * 
   * @example
   * 0
   */
  usedWorkerCount?: number;
  /**
   * @remarks
   * UserIO event waiting time (in milliseconds).
   * 
   * @example
   * 0.0
   */
  userIoWaitTime?: number;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * test_user
   */
  userName?: string;
  /**
   * @remarks
   * Wait count.
   * 
   * @example
   * 0.0
   */
  waitCount?: number;
  /**
   * @remarks
   * Longest wait event during the execution period.
   * 
   * @example
   * none
   */
  waitEvent?: string;
  /**
   * @remarks
   * Wait time (in milliseconds).
   * 
   * @example
   * 0.0
   */
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
      applicationWaitTime: 'ApplicationWaitTime',
      blockCacheHit: 'BlockCacheHit',
      blockIndexCacheHit: 'BlockIndexCacheHit',
      bloomFilterCacheHit: 'BloomFilterCacheHit',
      clientIp: 'ClientIp',
      clientPort: 'ClientPort',
      concurrencyWaitTime: 'ConcurrencyWaitTime',
      consistencyLevel: 'ConsistencyLevel',
      cpuTime: 'CpuTime',
      dbName: 'DbName',
      decodeTime: 'DecodeTime',
      diskReads: 'DiskReads',
      elapsedTime: 'ElapsedTime',
      executeTime: 'ExecuteTime',
      executorRpc: 'ExecutorRpc',
      expectedWorkerCount: 'ExpectedWorkerCount',
      fullSqlText: 'FullSqlText',
      getPlanTime: 'GetPlanTime',
      hitPlan: 'HitPlan',
      inner: 'Inner',
      memstoreReadRows: 'MemstoreReadRows',
      netTime: 'NetTime',
      netWaitTime: 'NetWaitTime',
      obDbId: 'ObDbId',
      obServerId: 'ObServerId',
      obUserId: 'ObUserId',
      paramsValue: 'ParamsValue',
      partitionCount: 'PartitionCount',
      planId: 'PlanId',
      planType: 'PlanType',
      queueTime: 'QueueTime',
      requestId: 'RequestId',
      requestTime: 'RequestTime',
      retCode: 'RetCode',
      retryCount: 'RetryCount',
      returnRows: 'ReturnRows',
      rowCacheHit: 'RowCacheHit',
      rpcCount: 'RpcCount',
      scheduleTime: 'ScheduleTime',
      server: 'Server',
      sqlText: 'SqlText',
      sqlType: 'SqlType',
      ssstoreReadRows: 'SsstoreReadRows',
      statement: 'Statement',
      tableScan: 'TableScan',
      traceId: 'TraceId',
      transHash: 'TransHash',
      usedWorkerCount: 'UsedWorkerCount',
      userIoWaitTime: 'UserIoWaitTime',
      userName: 'UserName',
      waitCount: 'WaitCount',
      waitEvent: 'WaitEvent',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      applicationWaitTime: 'number',
      blockCacheHit: 'number',
      blockIndexCacheHit: 'number',
      bloomFilterCacheHit: 'number',
      clientIp: 'string',
      clientPort: 'number',
      concurrencyWaitTime: 'number',
      consistencyLevel: 'string',
      cpuTime: 'number',
      dbName: 'string',
      decodeTime: 'number',
      diskReads: 'number',
      elapsedTime: 'number',
      executeTime: 'number',
      executorRpc: 'boolean',
      expectedWorkerCount: 'number',
      fullSqlText: 'string',
      getPlanTime: 'number',
      hitPlan: 'boolean',
      inner: 'boolean',
      memstoreReadRows: 'number',
      netTime: 'number',
      netWaitTime: 'number',
      obDbId: 'number',
      obServerId: 'number',
      obUserId: 'number',
      paramsValue: 'string',
      partitionCount: 'number',
      planId: 'number',
      planType: 'string',
      queueTime: 'number',
      requestId: 'number',
      requestTime: 'string',
      retCode: 'number',
      retryCount: 'number',
      returnRows: 'number',
      rowCacheHit: 'number',
      rpcCount: 'number',
      scheduleTime: 'number',
      server: 'string',
      sqlText: 'string',
      sqlType: 'string',
      ssstoreReadRows: 'number',
      statement: 'string',
      tableScan: 'boolean',
      traceId: 'string',
      transHash: 'string',
      usedWorkerCount: 'number',
      userIoWaitTime: 'number',
      userName: 'string',
      waitCount: 'number',
      waitEvent: 'string',
      waitTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

