// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOasSQLHistoryListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Average updated rows during the execution period.
   * 
   * @example
   * 9978.75
   */
  avgAffectedRows?: number;
  /**
   * @remarks
   * Average Application event wait time (in milliseconds) during the client waiting period.
   * 
   * @example
   * 0.0
   */
  avgApplicationWaitTime?: number;
  /**
   * @remarks
   * Average BlockCache hit count during the execution period.
   * 
   * @example
   * 0.0
   */
  avgBlockCacheHit?: number;
  /**
   * @remarks
   * Average BlockIndexCache hit count during the execution period.
   * 
   * @example
   * 0.0
   */
  avgBlockIndexCacheHit?: number;
  /**
   * @remarks
   * Average BloomFilterCache hit count during the execution period.
   * 
   * @example
   * 0.0
   */
  avgBloomFilterCacheHit?: number;
  /**
   * @remarks
   * Average Concurrency event wait time (in milliseconds) during the execution period.
   * 
   * @example
   * 0.0
   */
  avgConcurrencyWaitTime?: number;
  /**
   * @remarks
   * Average CPU time (in milliseconds) during the execution period.
   * 
   * @example
   * 1875.34
   */
  avgCpuTime?: number;
  /**
   * @remarks
   * The average DB time, in milliseconds.
   * 
   * @example
   * 100
   */
  avgDbTime?: number;
  /**
   * @remarks
   * Average syntax parsing time (in milliseconds) during the execution period.
   * 
   * @example
   * 0.0
   */
  avgDecodeTime?: number;
  /**
   * @remarks
   * Average physical read count during the execution period.
   * 
   * @example
   * 0.0
   */
  avgDiskReads?: number;
  /**
   * @remarks
   * Average response time (in milliseconds) during the execution period.
   * 
   * @example
   * 1876.78
   */
  avgElapsedTime?: number;
  /**
   * @remarks
   * Average plan execution time (in milliseconds) during the execution period.
   * 
   * @example
   * 1895.7
   */
  avgExecuteTime?: number;
  /**
   * @remarks
   * Average number of RPC requests executed during the execution period.
   * 
   * @example
   * 0
   */
  avgExecutorRpcCount?: number;
  /**
   * @remarks
   * Average degree of parallelism during the execution period.
   * 
   * @example
   * 3
   */
  avgExpectedWorkerCount?: number;
  /**
   * @remarks
   * Average plan generation time (in milliseconds) during the execution period.
   * 
   * @example
   * 0.0
   */
  avgGetPlanTime?: number;
  /**
   * @remarks
   * Average logical reads during the execution period.
   * 
   * @example
   * 0.0
   */
  avgLogicalReads?: number;
  /**
   * @remarks
   * Average Memstore read rows during the execution period.
   * 
   * @example
   * 0.0
   */
  avgMemstoreReadRows?: number;
  /**
   * @remarks
   * Average network transmission time (in milliseconds) during the execution period.
   * 
   * @example
   * 8
   */
  avgNetTime?: number;
  /**
   * @remarks
   * Average network enqueue time (in milliseconds) during the network waiting period.
   * 
   * @example
   * 0.0
   */
  avgNetWaitTime?: number;
  /**
   * @remarks
   * Average number of partition accessed during the execution period.
   * 
   * @example
   * 1
   */
  avgPartitionCount?: number;
  /**
   * @remarks
   * Average queueing time (in milliseconds) during the execution period.
   * 
   * @example
   * 0.01
   */
  avgQueueTime?: number;
  /**
   * @remarks
   * Average number of rows returned during the execution period.
   * 
   * @example
   * 0.0
   */
  avgReturnRows?: number;
  /**
   * @remarks
   * Average RowCache hit count during the execution period.
   * 
   * @example
   * 0.0
   */
  avgRowCacheHit?: number;
  /**
   * @remarks
   * Average number of RPC sent during the execution.
   * 
   * @example
   * 8.0
   */
  avgRpcCount?: number;
  /**
   * @remarks
   * Average Schedule event wait time (in milliseconds) during the scheduling period.
   * 
   * @example
   * 0.0
   */
  avgScheduleTime?: number;
  /**
   * @remarks
   * Average Ssstore read rows during the execution period.
   * 
   * @example
   * 0.0
   */
  avgSsstoreReadRows?: number;
  /**
   * @remarks
   * Average number of threads used of the SQL during the execution period.
   * 
   * @example
   * 3
   */
  avgUsedWorkerCount?: number;
  /**
   * @remarks
   * Average UserIO event wait time (in milliseconds) during the execution period.
   * 
   * @example
   * 0.0
   */
  avgUserIoWaitTime?: number;
  /**
   * @remarks
   * Average number of waits during the execution period.
   * 
   * @example
   * 0
   */
  avgWaitCount?: number;
  /**
   * @remarks
   * Average wait time (in milliseconds) during the execution period.
   * 
   * @example
   * 1442.49
   */
  avgWaitTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * Distributed plan percentage during the execution period.
   * 
   * @example
   * 100
   */
  distPlanPercentage?: number;
  /**
   * @remarks
   * Average execution count per second during the execution period.
   * 
   * @example
   * 0.31
   */
  execPs?: number;
  /**
   * @remarks
   * Total number of executions during the execution period.
   * 
   * @example
   * 1
   */
  executions?: number;
  /**
   * @remarks
   * The total number of errors during the execution period.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * Error percentage during the execution period.
   * 
   * @example
   * 0
   */
  failPercentage?: number;
  /**
   * @remarks
   * Local plan percentage during the execution period.
   * 
   * @example
   * 0
   */
  localPlanPercentage?: number;
  /**
   * @remarks
   * Max updated rows during the execution period.
   * 
   * @example
   * 10000
   */
  maxAffectedRows?: number;
  /**
   * @remarks
   * Max Application event wait time (in milliseconds) during the execution period
   * 
   * @example
   * 0
   */
  maxApplicationWaitTime?: number;
  /**
   * @remarks
   * Max Concurrency event wait time (in milliseconds) during the execution period
   * 
   * @example
   * 0
   */
  maxConcurrencyWaitTime?: number;
  /**
   * @remarks
   * Max CPU time.
   * 
   * @example
   * 13641.9
   */
  maxCpuTime?: number;
  /**
   * @remarks
   * Max physical read count during the execution period.
   * 
   * @example
   * 0
   */
  maxDiskReads?: number;
  /**
   * @remarks
   * Max response time.
   * 
   * @example
   * 13643.3
   */
  maxElapsedTime?: number;
  /**
   * @remarks
   * Max returned rows during the execution period.
   * 
   * @example
   * 0
   */
  maxReturnRows?: number;
  /**
   * @remarks
   * Max UserIO event wait time (in milliseconds) during the execution period
   * 
   * @example
   * 0
   */
  maxUserIoWaitTime?: number;
  /**
   * @remarks
   * Max wait time (in milliseconds) during the execution period.
   * 
   * @example
   * 3.4
   */
  maxWaitTime?: number;
  /**
   * @remarks
   * Plan hit rage during the execution period.
   * 
   * @example
   * 0
   */
  missPlanPercentage?: number;
  /**
   * @remarks
   * Missed plan count.
   * 
   * @example
   * 0
   */
  missPlans?: number;
  /**
   * @remarks
   * Remote plan percentage during the execution period.
   * 
   * @example
   * 0
   */
  remotePlanPercentage?: number;
  /**
   * @remarks
   * Remote plan count.
   * 
   * @example
   * 0
   */
  remotePlans?: number;
  /**
   * @remarks
   * Number of occurrences of code 4012 during the execution period.
   * 
   * @example
   * 0
   */
  retCode4012Count?: number;
  /**
   * @remarks
   * Number of occurrences of code 4013 during the execution period.
   * 
   * @example
   * 0
   */
  retCode4013Count?: number;
  /**
   * @remarks
   * Number of occurrences of code 5001 during the execution period.
   * 
   * @example
   * 0
   */
  retCode5001Count?: number;
  /**
   * @remarks
   * Number of occurrences of code 5024 during the execution period.
   * 
   * @example
   * 0
   */
  retCode5024Count?: number;
  /**
   * @remarks
   * Number of occurrences of code 5167 during the execution period.
   * 
   * @example
   * 0
   */
  retCode5167Count?: number;
  /**
   * @remarks
   * Number of occurrences of code 5217 during the execution period.
   * 
   * @example
   * 0
   */
  retCode5217Count?: number;
  /**
   * @remarks
   * Number of occurrences of code 6002 during the execution period.
   * 
   * @example
   * 0
   */
  retCode6002Count?: number;
  /**
   * @remarks
   * Total number of retries during the execution period.
   * 
   * @example
   * 0
   */
  retryCount?: number;
  /**
   * @remarks
   * SQL ID.
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  SQLId?: string;
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
   * Strong consistent transaction percentage during the execution period.
   * 
   * @example
   * 100
   */
  strongConsistencyPercentage?: number;
  /**
   * @remarks
   * The total DB time, in milliseconds.
   * 
   * @example
   * 100
   */
  sumDbTime?: number;
  /**
   * @remarks
   * Total response time (in milliseconds) during the execution period.
   * 
   * @example
   * 11452126.36
   */
  sumElapsedTime?: number;
  /**
   * @remarks
   * Total logical reads.
   * 
   * @example
   * 0
   */
  sumLogicalReads?: number;
  /**
   * @remarks
   * The total wait time (in milliseconds) during the internal waiting period.
   * 
   * @example
   * 9421.73
   */
  sumWaitTime?: number;
  /**
   * @remarks
   * Table scan percentage during the execution period.
   * 
   * @example
   * 0
   */
  tableScanPercentage?: number;
  /**
   * @remarks
   * Timestamp for the sample.
   * 
   * @example
   * 2023-04-12T04:46:38Z
   */
  timestamp?: string;
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
   * The wait event.
   * 
   * @example
   * none
   */
  waitEvent?: string;
  /**
   * @remarks
   * Eventually consistent transaction percentage during the execution period.
   * 
   * @example
   * 0
   */
  weakConsistencyPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      avgAffectedRows: 'AvgAffectedRows',
      avgApplicationWaitTime: 'AvgApplicationWaitTime',
      avgBlockCacheHit: 'AvgBlockCacheHit',
      avgBlockIndexCacheHit: 'AvgBlockIndexCacheHit',
      avgBloomFilterCacheHit: 'AvgBloomFilterCacheHit',
      avgConcurrencyWaitTime: 'AvgConcurrencyWaitTime',
      avgCpuTime: 'AvgCpuTime',
      avgDbTime: 'AvgDbTime',
      avgDecodeTime: 'AvgDecodeTime',
      avgDiskReads: 'AvgDiskReads',
      avgElapsedTime: 'AvgElapsedTime',
      avgExecuteTime: 'AvgExecuteTime',
      avgExecutorRpcCount: 'AvgExecutorRpcCount',
      avgExpectedWorkerCount: 'AvgExpectedWorkerCount',
      avgGetPlanTime: 'AvgGetPlanTime',
      avgLogicalReads: 'AvgLogicalReads',
      avgMemstoreReadRows: 'AvgMemstoreReadRows',
      avgNetTime: 'AvgNetTime',
      avgNetWaitTime: 'AvgNetWaitTime',
      avgPartitionCount: 'AvgPartitionCount',
      avgQueueTime: 'AvgQueueTime',
      avgReturnRows: 'AvgReturnRows',
      avgRowCacheHit: 'AvgRowCacheHit',
      avgRpcCount: 'AvgRpcCount',
      avgScheduleTime: 'AvgScheduleTime',
      avgSsstoreReadRows: 'AvgSsstoreReadRows',
      avgUsedWorkerCount: 'AvgUsedWorkerCount',
      avgUserIoWaitTime: 'AvgUserIoWaitTime',
      avgWaitCount: 'AvgWaitCount',
      avgWaitTime: 'AvgWaitTime',
      dbName: 'DbName',
      distPlanPercentage: 'DistPlanPercentage',
      execPs: 'ExecPs',
      executions: 'Executions',
      failCount: 'FailCount',
      failPercentage: 'FailPercentage',
      localPlanPercentage: 'LocalPlanPercentage',
      maxAffectedRows: 'MaxAffectedRows',
      maxApplicationWaitTime: 'MaxApplicationWaitTime',
      maxConcurrencyWaitTime: 'MaxConcurrencyWaitTime',
      maxCpuTime: 'MaxCpuTime',
      maxDiskReads: 'MaxDiskReads',
      maxElapsedTime: 'MaxElapsedTime',
      maxReturnRows: 'MaxReturnRows',
      maxUserIoWaitTime: 'MaxUserIoWaitTime',
      maxWaitTime: 'MaxWaitTime',
      missPlanPercentage: 'MissPlanPercentage',
      missPlans: 'MissPlans',
      remotePlanPercentage: 'RemotePlanPercentage',
      remotePlans: 'RemotePlans',
      retCode4012Count: 'RetCode4012Count',
      retCode4013Count: 'RetCode4013Count',
      retCode5001Count: 'RetCode5001Count',
      retCode5024Count: 'RetCode5024Count',
      retCode5167Count: 'RetCode5167Count',
      retCode5217Count: 'RetCode5217Count',
      retCode6002Count: 'RetCode6002Count',
      retryCount: 'RetryCount',
      SQLId: 'SQLId',
      server: 'Server',
      strongConsistencyPercentage: 'StrongConsistencyPercentage',
      sumDbTime: 'SumDbTime',
      sumElapsedTime: 'SumElapsedTime',
      sumLogicalReads: 'SumLogicalReads',
      sumWaitTime: 'SumWaitTime',
      tableScanPercentage: 'TableScanPercentage',
      timestamp: 'Timestamp',
      userName: 'UserName',
      waitEvent: 'WaitEvent',
      weakConsistencyPercentage: 'WeakConsistencyPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgAffectedRows: 'number',
      avgApplicationWaitTime: 'number',
      avgBlockCacheHit: 'number',
      avgBlockIndexCacheHit: 'number',
      avgBloomFilterCacheHit: 'number',
      avgConcurrencyWaitTime: 'number',
      avgCpuTime: 'number',
      avgDbTime: 'number',
      avgDecodeTime: 'number',
      avgDiskReads: 'number',
      avgElapsedTime: 'number',
      avgExecuteTime: 'number',
      avgExecutorRpcCount: 'number',
      avgExpectedWorkerCount: 'number',
      avgGetPlanTime: 'number',
      avgLogicalReads: 'number',
      avgMemstoreReadRows: 'number',
      avgNetTime: 'number',
      avgNetWaitTime: 'number',
      avgPartitionCount: 'number',
      avgQueueTime: 'number',
      avgReturnRows: 'number',
      avgRowCacheHit: 'number',
      avgRpcCount: 'number',
      avgScheduleTime: 'number',
      avgSsstoreReadRows: 'number',
      avgUsedWorkerCount: 'number',
      avgUserIoWaitTime: 'number',
      avgWaitCount: 'number',
      avgWaitTime: 'number',
      dbName: 'string',
      distPlanPercentage: 'number',
      execPs: 'number',
      executions: 'number',
      failCount: 'number',
      failPercentage: 'number',
      localPlanPercentage: 'number',
      maxAffectedRows: 'number',
      maxApplicationWaitTime: 'number',
      maxConcurrencyWaitTime: 'number',
      maxCpuTime: 'number',
      maxDiskReads: 'number',
      maxElapsedTime: 'number',
      maxReturnRows: 'number',
      maxUserIoWaitTime: 'number',
      maxWaitTime: 'number',
      missPlanPercentage: 'number',
      missPlans: 'number',
      remotePlanPercentage: 'number',
      remotePlans: 'number',
      retCode4012Count: 'number',
      retCode4013Count: 'number',
      retCode5001Count: 'number',
      retCode5024Count: 'number',
      retCode5167Count: 'number',
      retCode5217Count: 'number',
      retCode6002Count: 'number',
      retryCount: 'number',
      SQLId: 'string',
      server: 'string',
      strongConsistencyPercentage: 'number',
      sumDbTime: 'number',
      sumElapsedTime: 'number',
      sumLogicalReads: 'number',
      sumWaitTime: 'number',
      tableScanPercentage: 'number',
      timestamp: 'string',
      userName: 'string',
      waitEvent: 'string',
      weakConsistencyPercentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

