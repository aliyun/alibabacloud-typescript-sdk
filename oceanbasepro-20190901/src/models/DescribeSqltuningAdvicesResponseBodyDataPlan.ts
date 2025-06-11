// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLTuningAdvicesResponseBodyDataPlan extends $dara.Model {
  /**
   * @example
   * 0
   */
  avgApplicationWaitTime?: number;
  /**
   * @example
   * 0
   */
  avgBufferGets?: number;
  /**
   * @example
   * 0
   */
  avgConcurrencyWaitTime?: number;
  /**
   * @example
   * 100.36
   */
  avgCpuTime?: number;
  /**
   * @example
   * 0
   */
  avgDiskReads?: number;
  /**
   * @example
   * 0
   */
  avgDiskWrites?: number;
  /**
   * @example
   * 713.62
   */
  avgElapsedTime?: number;
  /**
   * @example
   * 1
   */
  avgRowProcessed?: number;
  /**
   * @example
   * 0
   */
  avgUserIoWaitTime?: number;
  /**
   * @example
   * 1672358400000000
   */
  collectTimeUs?: number;
  /**
   * @example
   * 0
   */
  delayedLargeQueryPercentage?: number;
  /**
   * @example
   * 1.45
   */
  execPs?: number;
  /**
   * @example
   * 2062
   */
  executions?: number;
  /**
   * @example
   * 2022-12-30T02:25:30.576Z
   */
  firstLoadTime?: string;
  /**
   * @example
   * 1672367130576163
   */
  firstLoadTimeUs?: number;
  /**
   * @example
   * false
   */
  hitDiagnosis?: boolean;
  /**
   * @example
   * 66.8
   */
  hitPercentage?: number;
  /**
   * @example
   * 0
   */
  largeQueryPercentage?: number;
  /**
   * @example
   * 3
   */
  mergedVersion?: number;
  /**
   * @example
   * 1108307720799259
   */
  obDbId?: number;
  /**
   * @remarks
   * server  ID。
   * 
   * @example
   * 1
   */
  obServerId?: number;
  /**
   * @example
   * xxxxx
   */
  outlineData?: string;
  /**
   * @remarks
   * Outline ID。
   * 
   * @example
   * 1
   */
  outlineId?: number;
  /**
   * @example
   * -86290582****886880
   */
  planHash?: string;
  /**
   * @example
   * 818
   */
  planId?: number;
  /**
   * @example
   * 49216
   */
  planSize?: number;
  /**
   * @example
   * LOCAL
   */
  planType?: string;
  /**
   * @example
   * 1672367130529680
   */
  schemaVersion?: number;
  /**
   * @example
   * i-bp1*****sw64dhb*****
   */
  serverSn?: string;
  /**
   * @example
   * false
   */
  tableScan?: boolean;
  /**
   * @example
   * 0
   */
  timeoutPercentage?: number;
  /**
   * @example
   * AAAAAAAAAAEAAAAAAAADMgAF8QJQwIUj
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
      schemaVersion: 'SchemaVersion',
      serverSn: 'ServerSn',
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
      schemaVersion: 'number',
      serverSn: 'string',
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

