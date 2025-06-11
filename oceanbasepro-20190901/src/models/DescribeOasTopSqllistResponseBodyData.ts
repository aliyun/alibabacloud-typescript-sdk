// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOasTopSQLListResponseBodyDataCustomColumns } from "./DescribeOasTopSqllistResponseBodyDataCustomColumns";
import { DescribeOasTopSQLListResponseBodyDataSqlList } from "./DescribeOasTopSqllistResponseBodyDataSqlList";


export class DescribeOasTopSQLListResponseBodyData extends $dara.Model {
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
   * Average Application event wait time (in milliseconds) during the execution period.
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
   * 903.29
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
   * 0.0
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
   * Average logical reads of the SQL during the execution period.
   * 
   * @example
   * 0.0
   */
  avgLogicalReads?: number;
  /**
   * @remarks
   * Strong consistent transaction percentage during the execution period.
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
   * 0.0
   */
  avgNetTime?: number;
  /**
   * @remarks
   * Average network enqueue time (in milliseconds) during the execution period.
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
   * 1.0
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
   * Average returned rows during the execution period.
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
   * Average count of RPC sent during the execution period.
   * 
   * @example
   * 8.0
   */
  avgRpcCount?: number;
  /**
   * @remarks
   * Average Schedule event wait time (in milliseconds) during the execution period.
   * 
   * @example
   * 0.0
   */
  avgScheduleTime?: number;
  /**
   * @remarks
   * Eventually consistent transaction percentage during the execution period.
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
   * Average wait count during the execution period.
   * 
   * @example
   * 0.0
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
   * Client IP.
   * 
   * @example
   * i-bp1db****38uemejio
   */
  clientIp?: string;
  /**
   * @remarks
   * CPU percentage.
   * 
   * @example
   * 100.0
   */
  cpuPercentage?: number;
  customColumns?: DescribeOasTopSQLListResponseBodyDataCustomColumns;
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
   * 100.0
   */
  distPlanPercentage?: number;
  dynamicSql?: boolean;
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
   * Average number of partition accessed during the execution period.
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
   * 0.0
   */
  failPercentage?: number;
  /**
   * @remarks
   * Whether a internal SQL.
   * 
   * @example
   * false
   */
  inner?: boolean;
  lastFailCode?: number;
  /**
   * @remarks
   * Local plan percentage during the execution period.
   * 
   * @example
   * 0.0
   */
  localPlanPercentage?: number;
  /**
   * @remarks
   * Max affected rows during the execution period.
   * 
   * @example
   * 10000.0
   */
  maxAffectedRows?: number;
  /**
   * @remarks
   * Max Application event wait time (in milliseconds) during the execution period.
   * 
   * @example
   * 0.0
   */
  maxApplicationWaitTime?: number;
  /**
   * @remarks
   * Max Concurrency event wait time (in milliseconds) during the execution period.
   * 
   * @example
   * 0.0
   */
  maxConcurrencyWaitTime?: number;
  /**
   * @remarks
   * Max CPU time (in milliseconds).
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
   * 0.0
   */
  maxDiskReads?: number;
  /**
   * @remarks
   * Max response time during the execution period.
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
   * 0.0
   */
  maxReturnRows?: number;
  /**
   * @remarks
   * Max UserIO event wait time (in milliseconds) during the execution period.
   * 
   * @example
   * 0.0
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
   * 0.0
   */
  missPlanPercentage?: number;
  /**
   * @remarks
   * Missed hit count of the execution plan during the execution period.
   * 
   * @example
   * 0
   */
  missPlans?: number;
  obDbId?: string;
  /**
   * @remarks
   * Remote plan percentage during the execution period.
   * 
   * @example
   * 0.0
   */
  remotePlanPercentage?: number;
  /**
   * @remarks
   * Remote execution count during the execution period.
   * 
   * @example
   * 0
   */
  remotePlans?: number;
  /**
   * @remarks
   * Number of occurrences of the code 4012 during the execution period.
   * 
   * @example
   * 0
   */
  retCode4012Count?: number;
  /**
   * @remarks
   * Number of occurrences of the code 4013 during the execution period.
   * 
   * @example
   * 0
   */
  retCode4013Count?: number;
  /**
   * @remarks
   * Number of occurrences of the code 5001 during the execution period.
   * 
   * @example
   * 0
   */
  retCode5001Count?: number;
  /**
   * @remarks
   * Number of occurrences of the code 5024 during the execution period.
   * 
   * @example
   * 0
   */
  retCode5024Count?: number;
  /**
   * @remarks
   * Number of occurrences of the code 5167 during the execution period.
   * 
   * @example
   * 0
   */
  retCode5167Count?: number;
  /**
   * @remarks
   * Number of occurrences of the code 5217 during the execution period.
   * 
   * @example
   * 0
   */
  retCode5217Count?: number;
  /**
   * @remarks
   * Number of occurrences of the code 6002 during the execution period.
   * 
   * @example
   * 0
   */
  retCode6002Count?: number;
  /**
   * @remarks
   * Total retry count during the execution period.
   * 
   * @example
   * 0
   */
  retryCount?: number;
  /**
   * @remarks
   * RPC count during the execution period.
   * 
   * @example
   * 0.0
   */
  rpcCount?: number;
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
   * The server IP where the SQL is executed.
   * 
   * @example
   * i-bp1db1****8uemejio
   */
  serverIp?: string;
  /**
   * @remarks
   * The server port where the SQL is executed.
   * 
   * @example
   * 389
   */
  serverPort?: number;
  /**
   * @remarks
   * SQL ID.
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  sqlId?: string;
  sqlList?: DescribeOasTopSQLListResponseBodyDataSqlList[];
  /**
   * @remarks
   * SQL text (the first 100 characters).
   */
  sqlTextShort?: string;
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
   * Strong consistent transaction percentage during the execution period.
   * 
   * @example
   * 100.0
   */
  strongConsistencyPercentage?: number;
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
   * 0.0
   */
  sumLogicalReads?: number;
  /**
   * @remarks
   * Total wait time (in milliseconds) during the execution period.
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
   * 0.0
   */
  tableScanPercentage?: number;
  /**
   * @remarks
   * Total wait time (in milliseconds) during the execution period.
   * 
   * @example
   * 10.966
   */
  totalWaitTime?: number;
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
   * Longest wait event during the execution period.
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
   * 0.0
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
      clientIp: 'ClientIp',
      cpuPercentage: 'CpuPercentage',
      customColumns: 'CustomColumns',
      dbName: 'DbName',
      distPlanPercentage: 'DistPlanPercentage',
      dynamicSql: 'DynamicSql',
      execPs: 'ExecPs',
      executions: 'Executions',
      failCount: 'FailCount',
      failPercentage: 'FailPercentage',
      inner: 'Inner',
      lastFailCode: 'LastFailCode',
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
      obDbId: 'ObDbId',
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
      rpcCount: 'RpcCount',
      server: 'Server',
      serverIp: 'ServerIp',
      serverPort: 'ServerPort',
      sqlId: 'SqlId',
      sqlList: 'SqlList',
      sqlTextShort: 'SqlTextShort',
      sqlType: 'SqlType',
      strongConsistencyPercentage: 'StrongConsistencyPercentage',
      sumDbTime: 'SumDbTime',
      sumElapsedTime: 'SumElapsedTime',
      sumLogicalReads: 'SumLogicalReads',
      sumWaitTime: 'SumWaitTime',
      tableScanPercentage: 'TableScanPercentage',
      totalWaitTime: 'TotalWaitTime',
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
      clientIp: 'string',
      cpuPercentage: 'number',
      customColumns: DescribeOasTopSQLListResponseBodyDataCustomColumns,
      dbName: 'string',
      distPlanPercentage: 'number',
      dynamicSql: 'boolean',
      execPs: 'number',
      executions: 'number',
      failCount: 'number',
      failPercentage: 'number',
      inner: 'boolean',
      lastFailCode: 'number',
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
      obDbId: 'string',
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
      rpcCount: 'number',
      server: 'string',
      serverIp: 'string',
      serverPort: 'number',
      sqlId: 'string',
      sqlList: { 'type': 'array', 'itemType': DescribeOasTopSQLListResponseBodyDataSqlList },
      sqlTextShort: 'string',
      sqlType: 'string',
      strongConsistencyPercentage: 'number',
      sumDbTime: 'number',
      sumElapsedTime: 'number',
      sumLogicalReads: 'number',
      sumWaitTime: 'number',
      tableScanPercentage: 'number',
      totalWaitTime: 'number',
      userName: 'string',
      waitEvent: 'string',
      weakConsistencyPercentage: 'number',
    };
  }

  validate() {
    if(this.customColumns && typeof (this.customColumns as any).validate === 'function') {
      (this.customColumns as any).validate();
    }
    if(Array.isArray(this.sqlList)) {
      $dara.Model.validateArray(this.sqlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

