// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOasSQLPlansResponseBodyDataPlans extends $dara.Model {
  /**
   * @remarks
   * Average Application event waiting time (in milliseconds) during the execution period.
   * 
   * @example
   * 0.0
   */
  avgApplicationWaitTime?: number;
  /**
   * @remarks
   * Average cache read count during the execution period.
   * 
   * @example
   * 30137.03
   */
  avgBufferGets?: number;
  /**
   * @remarks
   * Average Concurrency event waiting time (in milliseconds) during the execution period.
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
   * The average physical read count during the execution period.
   * 
   * @example
   * 0.0
   */
  avgDiskReads?: number;
  /**
   * @remarks
   * The average physical write count during the execution period.
   * 
   * @example
   * 0.0
   */
  avgDiskWrites?: number;
  /**
   * @remarks
   * Average interval waiting time (in milliseconds) during the execution period.
   * 
   * @example
   * 1876.78
   */
  avgElapsedTime?: number;
  /**
   * @remarks
   * Average row processing waiting time (in milliseconds) during the execution period.
   * 
   * @example
   * 1.0
   */
  avgRowProcessed?: number;
  /**
   * @remarks
   * Average UserIo event waiting time (in milliseconds) during the execution period.
   * 
   * @example
   * 0.0
   */
  avgUserIoWaitTime?: number;
  /**
   * @remarks
   * Collection time.
   * 
   * @example
   * 1684368****00000
   */
  collectTimeUs?: number;
  /**
   * @remarks
   * Percentage of delayed long-running queries.
   * 
   * @example
   * 0.0
   */
  delayedLargeQueryPercentage?: number;
  /**
   * @remarks
   * The average execution count per second during the execution period.
   * 
   * @example
   * 0.31
   */
  execPs?: number;
  /**
   * @remarks
   * The total number of executions during the execution period.
   * 
   * @example
   * 1
   */
  executions?: number;
  /**
   * @remarks
   * First time to load the plan.
   * 
   * @example
   * 2023-04-12T04:46:38Z
   */
  firstLoadTime?: string;
  /**
   * @remarks
   * First loading time.
   * 
   * @example
   * 1684****03289441
   */
  firstLoadTimeUs?: number;
  /**
   * @remarks
   * Whether to hit the diagnosis.
   * 
   * @example
   * false
   */
  hitDiagnosis?: boolean;
  /**
   * @remarks
   * Hit rate.
   * 
   * @example
   * 100.0
   */
  hitPercentage?: number;
  /**
   * @remarks
   * Percentage of completed long-running queries.
   * 
   * @example
   * 0.0
   */
  largeQueryPercentage?: number;
  /**
   * @remarks
   * Merge version.
   * 
   * @example
   * 513
   */
  mergedVersion?: number;
  /**
   * @remarks
   * Database ID.
   * 
   * @example
   * 11006****828
   */
  obDbId?: number;
  /**
   * @remarks
   * Server ID.
   * 
   * @example
   * 2
   */
  obServerId?: number;
  /**
   * @remarks
   * The outline_data parameter of the SQL execution plan.
   * 
   * @example
   * /*+ BEGIN_OUTLINE_DATA INDEX(@\\"SEL$1\\
   */
  outlineData?: string;
  /**
   * @remarks
   * Outline ID.
   * 
   * @example
   * -1
   */
  outlineId?: number;
  /**
   * @remarks
   * The internal identifier of the SQL execution plan in the diagnostic system.
   * 
   * @example
   * -86290582****886880
   */
  planHash?: string;
  /**
   * @remarks
   * The ID of the plan.
   * 
   * @example
   * 590****
   */
  planId?: number;
  /**
   * @remarks
   * Plan size.
   * 
   * @example
   * 10****
   */
  planSize?: number;
  /**
   * @remarks
   * Plan type, including LOCAL, REMOTE, DIST.
   * 
   * @example
   * LOCAL
   */
  planType?: string;
  /**
   * @remarks
   * The internal unique identifier of the SQL execution plan in the diagnostic system.
   * 
   * @example
   * "52c7c53****53e61b3f7586b17****ad"
   */
  planUnionHash?: string;
  /**
   * @remarks
   * Schema version.
   * 
   * @example
   * 16838****3550464
   */
  schemaVersion?: number;
  /**
   * @remarks
   * The server where the SQL is executed.
   * 
   * @example
   * i-bp1db1a9us038****jio
   */
  server?: string;
  /**
   * @remarks
   * The ID of the backend server instance.
   * 
   * @example
   * 2
   */
  serverId?: number;
  /**
   * @remarks
   * SQL ID.
   * 
   * @example
   * 46939C87ECA****95ED0FF64F44B****
   */
  sqlId?: string;
  sqlText?: string;
  /**
   * @remarks
   * Whether a full table scan is performed.
   * 
   * @example
   * false
   */
  tableScan?: boolean;
  /**
   * @remarks
   * Percentage of timeouts.
   * 
   * @example
   * 0.0
   */
  timeoutPercentage?: number;
  /**
   * @remarks
   * The unique identifier of the plan.
   * 
   * @example
   * AAAAAAAAAAI****AAFoT2QAF--7W****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      avgApplicationWaitTime: 'AvgApplicationWaitTime',
      avgBufferGets: 'AvgBufferGets',
      avgConcurrencyWaitTime: 'AvgConcurrencyWaitTime',
      avgCpuTime: 'AvgCpuTime',
      avgDiskReads: 'AvgDiskReads',
      avgDiskWrites: 'AvgDiskWrites',
      avgElapsedTime: 'AvgElapsedTime',
      avgRowProcessed: 'AvgRowProcessed',
      avgUserIoWaitTime: 'AvgUserIoWaitTime',
      collectTimeUs: 'CollectTimeUs',
      delayedLargeQueryPercentage: 'DelayedLargeQueryPercentage',
      execPs: 'ExecPs',
      executions: 'Executions',
      firstLoadTime: 'FirstLoadTime',
      firstLoadTimeUs: 'FirstLoadTimeUs',
      hitDiagnosis: 'HitDiagnosis',
      hitPercentage: 'HitPercentage',
      largeQueryPercentage: 'LargeQueryPercentage',
      mergedVersion: 'MergedVersion',
      obDbId: 'ObDbId',
      obServerId: 'ObServerId',
      outlineData: 'OutlineData',
      outlineId: 'OutlineId',
      planHash: 'PlanHash',
      planId: 'PlanId',
      planSize: 'PlanSize',
      planType: 'PlanType',
      planUnionHash: 'PlanUnionHash',
      schemaVersion: 'SchemaVersion',
      server: 'Server',
      serverId: 'ServerId',
      sqlId: 'SqlId',
      sqlText: 'SqlText',
      tableScan: 'TableScan',
      timeoutPercentage: 'TimeoutPercentage',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgApplicationWaitTime: 'number',
      avgBufferGets: 'number',
      avgConcurrencyWaitTime: 'number',
      avgCpuTime: 'number',
      avgDiskReads: 'number',
      avgDiskWrites: 'number',
      avgElapsedTime: 'number',
      avgRowProcessed: 'number',
      avgUserIoWaitTime: 'number',
      collectTimeUs: 'number',
      delayedLargeQueryPercentage: 'number',
      execPs: 'number',
      executions: 'number',
      firstLoadTime: 'string',
      firstLoadTimeUs: 'number',
      hitDiagnosis: 'boolean',
      hitPercentage: 'number',
      largeQueryPercentage: 'number',
      mergedVersion: 'number',
      obDbId: 'number',
      obServerId: 'number',
      outlineData: 'string',
      outlineId: 'number',
      planHash: 'string',
      planId: 'number',
      planSize: 'number',
      planType: 'string',
      planUnionHash: 'string',
      schemaVersion: 'number',
      server: 'string',
      serverId: 'number',
      sqlId: 'string',
      sqlText: 'string',
      tableScan: 'boolean',
      timeoutPercentage: 'number',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

