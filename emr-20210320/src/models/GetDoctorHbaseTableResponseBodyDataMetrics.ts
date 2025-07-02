// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHBaseTableResponseBodyDataMetricsColdAccessDay } from "./GetDoctorHbaseTableResponseBodyDataMetricsColdAccessDay";
import { GetDoctorHBaseTableResponseBodyDataMetricsColdConfigDay } from "./GetDoctorHbaseTableResponseBodyDataMetricsColdConfigDay";
import { GetDoctorHBaseTableResponseBodyDataMetricsColdDataSize } from "./GetDoctorHbaseTableResponseBodyDataMetricsColdDataSize";
import { GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequest } from "./GetDoctorHbaseTableResponseBodyDataMetricsDailyReadRequest";
import { GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequestDayGrowthRatio } from "./GetDoctorHbaseTableResponseBodyDataMetricsDailyReadRequestDayGrowthRatio";
import { GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequest } from "./GetDoctorHbaseTableResponseBodyDataMetricsDailyWriteRequest";
import { GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio } from "./GetDoctorHbaseTableResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio";
import { GetDoctorHBaseTableResponseBodyDataMetricsFreezeConfigDay } from "./GetDoctorHbaseTableResponseBodyDataMetricsFreezeConfigDay";
import { GetDoctorHBaseTableResponseBodyDataMetricsFreezeDataSize } from "./GetDoctorHbaseTableResponseBodyDataMetricsFreezeDataSize";
import { GetDoctorHBaseTableResponseBodyDataMetricsHotDataSize } from "./GetDoctorHbaseTableResponseBodyDataMetricsHotDataSize";
import { GetDoctorHBaseTableResponseBodyDataMetricsLocality } from "./GetDoctorHbaseTableResponseBodyDataMetricsLocality";
import { GetDoctorHBaseTableResponseBodyDataMetricsReadRequestBalance } from "./GetDoctorHbaseTableResponseBodyDataMetricsReadRequestBalance";
import { GetDoctorHBaseTableResponseBodyDataMetricsRegionBalance } from "./GetDoctorHbaseTableResponseBodyDataMetricsRegionBalance";
import { GetDoctorHBaseTableResponseBodyDataMetricsRegionCount } from "./GetDoctorHbaseTableResponseBodyDataMetricsRegionCount";
import { GetDoctorHBaseTableResponseBodyDataMetricsRegionCountDayGrowthRatio } from "./GetDoctorHbaseTableResponseBodyDataMetricsRegionCountDayGrowthRatio";
import { GetDoctorHBaseTableResponseBodyDataMetricsRegionServerCount } from "./GetDoctorHbaseTableResponseBodyDataMetricsRegionServerCount";
import { GetDoctorHBaseTableResponseBodyDataMetricsRequestBalance } from "./GetDoctorHbaseTableResponseBodyDataMetricsRequestBalance";
import { GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCount } from "./GetDoctorHbaseTableResponseBodyDataMetricsStoreFileCount";
import { GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCountDayGrowthRatio } from "./GetDoctorHbaseTableResponseBodyDataMetricsStoreFileCountDayGrowthRatio";
import { GetDoctorHBaseTableResponseBodyDataMetricsTableSize } from "./GetDoctorHbaseTableResponseBodyDataMetricsTableSize";
import { GetDoctorHBaseTableResponseBodyDataMetricsTableSizeDayGrowthRatio } from "./GetDoctorHbaseTableResponseBodyDataMetricsTableSizeDayGrowthRatio";
import { GetDoctorHBaseTableResponseBodyDataMetricsWarmConfigDay } from "./GetDoctorHbaseTableResponseBodyDataMetricsWarmConfigDay";
import { GetDoctorHBaseTableResponseBodyDataMetricsWarmDataSize } from "./GetDoctorHbaseTableResponseBodyDataMetricsWarmDataSize";
import { GetDoctorHBaseTableResponseBodyDataMetricsWriteRequestBalance } from "./GetDoctorHbaseTableResponseBodyDataMetricsWriteRequestBalance";


export class GetDoctorHBaseTableResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * Number of days the table has not been accessed.
   */
  coldAccessDay?: GetDoctorHBaseTableResponseBodyDataMetricsColdAccessDay;
  /**
   * @remarks
   * Cold data access days configuration.
   */
  coldConfigDay?: GetDoctorHBaseTableResponseBodyDataMetricsColdConfigDay;
  /**
   * @remarks
   * Cold data size.
   */
  coldDataSize?: GetDoctorHBaseTableResponseBodyDataMetricsColdDataSize;
  /**
   * @remarks
   * Number of read requests per day.
   */
  dailyReadRequest?: GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequest;
  /**
   * @remarks
   * Daily growth ratio of daily read requests.
   */
  dailyReadRequestDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequestDayGrowthRatio;
  /**
   * @remarks
   * Number of write requests per day.
   */
  dailyWriteRequest?: GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequest;
  /**
   * @remarks
   * Daily write request growth ratio.
   */
  dailyWriteRequestDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio;
  /**
   * @remarks
   * Configuration for the number of days cold data is accessed.
   */
  freezeConfigDay?: GetDoctorHBaseTableResponseBodyDataMetricsFreezeConfigDay;
  /**
   * @remarks
   * Frozen data size.
   */
  freezeDataSize?: GetDoctorHBaseTableResponseBodyDataMetricsFreezeDataSize;
  /**
   * @remarks
   * Hot data size.
   */
  hotDataSize?: GetDoctorHBaseTableResponseBodyDataMetricsHotDataSize;
  /**
   * @remarks
   * Locality rate.
   */
  locality?: GetDoctorHBaseTableResponseBodyDataMetricsLocality;
  /**
   * @remarks
   * Read request balance.
   */
  readRequestBalance?: GetDoctorHBaseTableResponseBodyDataMetricsReadRequestBalance;
  /**
   * @remarks
   * Region balance.
   */
  regionBalance?: GetDoctorHBaseTableResponseBodyDataMetricsRegionBalance;
  /**
   * @remarks
   * Number of regions.
   */
  regionCount?: GetDoctorHBaseTableResponseBodyDataMetricsRegionCount;
  /**
   * @remarks
   * Daily incremental ratio of regions
   */
  regionCountDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsRegionCountDayGrowthRatio;
  /**
   * @remarks
   * Number of RegionServers.
   */
  regionServerCount?: GetDoctorHBaseTableResponseBodyDataMetricsRegionServerCount;
  /**
   * @remarks
   * Request balance.
   */
  requestBalance?: GetDoctorHBaseTableResponseBodyDataMetricsRequestBalance;
  /**
   * @remarks
   * Number of store files.
   */
  storeFileCount?: GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCount;
  /**
   * @remarks
   * Daily growth ratio of store file count.
   */
  storeFileCountDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCountDayGrowthRatio;
  /**
   * @remarks
   * Table size.
   */
  tableSize?: GetDoctorHBaseTableResponseBodyDataMetricsTableSize;
  /**
   * @remarks
   * Daily growth ratio of table size.
   */
  tableSizeDayGrowthRatio?: GetDoctorHBaseTableResponseBodyDataMetricsTableSizeDayGrowthRatio;
  /**
   * @remarks
   * Warm data access days configuration.
   */
  warmConfigDay?: GetDoctorHBaseTableResponseBodyDataMetricsWarmConfigDay;
  /**
   * @remarks
   * Warm data size.
   */
  warmDataSize?: GetDoctorHBaseTableResponseBodyDataMetricsWarmDataSize;
  /**
   * @remarks
   * Write request balance.
   */
  writeRequestBalance?: GetDoctorHBaseTableResponseBodyDataMetricsWriteRequestBalance;
  static names(): { [key: string]: string } {
    return {
      coldAccessDay: 'ColdAccessDay',
      coldConfigDay: 'ColdConfigDay',
      coldDataSize: 'ColdDataSize',
      dailyReadRequest: 'DailyReadRequest',
      dailyReadRequestDayGrowthRatio: 'DailyReadRequestDayGrowthRatio',
      dailyWriteRequest: 'DailyWriteRequest',
      dailyWriteRequestDayGrowthRatio: 'DailyWriteRequestDayGrowthRatio',
      freezeConfigDay: 'FreezeConfigDay',
      freezeDataSize: 'FreezeDataSize',
      hotDataSize: 'HotDataSize',
      locality: 'Locality',
      readRequestBalance: 'ReadRequestBalance',
      regionBalance: 'RegionBalance',
      regionCount: 'RegionCount',
      regionCountDayGrowthRatio: 'RegionCountDayGrowthRatio',
      regionServerCount: 'RegionServerCount',
      requestBalance: 'RequestBalance',
      storeFileCount: 'StoreFileCount',
      storeFileCountDayGrowthRatio: 'StoreFileCountDayGrowthRatio',
      tableSize: 'TableSize',
      tableSizeDayGrowthRatio: 'TableSizeDayGrowthRatio',
      warmConfigDay: 'WarmConfigDay',
      warmDataSize: 'WarmDataSize',
      writeRequestBalance: 'WriteRequestBalance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldAccessDay: GetDoctorHBaseTableResponseBodyDataMetricsColdAccessDay,
      coldConfigDay: GetDoctorHBaseTableResponseBodyDataMetricsColdConfigDay,
      coldDataSize: GetDoctorHBaseTableResponseBodyDataMetricsColdDataSize,
      dailyReadRequest: GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequest,
      dailyReadRequestDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsDailyReadRequestDayGrowthRatio,
      dailyWriteRequest: GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequest,
      dailyWriteRequestDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio,
      freezeConfigDay: GetDoctorHBaseTableResponseBodyDataMetricsFreezeConfigDay,
      freezeDataSize: GetDoctorHBaseTableResponseBodyDataMetricsFreezeDataSize,
      hotDataSize: GetDoctorHBaseTableResponseBodyDataMetricsHotDataSize,
      locality: GetDoctorHBaseTableResponseBodyDataMetricsLocality,
      readRequestBalance: GetDoctorHBaseTableResponseBodyDataMetricsReadRequestBalance,
      regionBalance: GetDoctorHBaseTableResponseBodyDataMetricsRegionBalance,
      regionCount: GetDoctorHBaseTableResponseBodyDataMetricsRegionCount,
      regionCountDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsRegionCountDayGrowthRatio,
      regionServerCount: GetDoctorHBaseTableResponseBodyDataMetricsRegionServerCount,
      requestBalance: GetDoctorHBaseTableResponseBodyDataMetricsRequestBalance,
      storeFileCount: GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCount,
      storeFileCountDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsStoreFileCountDayGrowthRatio,
      tableSize: GetDoctorHBaseTableResponseBodyDataMetricsTableSize,
      tableSizeDayGrowthRatio: GetDoctorHBaseTableResponseBodyDataMetricsTableSizeDayGrowthRatio,
      warmConfigDay: GetDoctorHBaseTableResponseBodyDataMetricsWarmConfigDay,
      warmDataSize: GetDoctorHBaseTableResponseBodyDataMetricsWarmDataSize,
      writeRequestBalance: GetDoctorHBaseTableResponseBodyDataMetricsWriteRequestBalance,
    };
  }

  validate() {
    if(this.coldAccessDay && typeof (this.coldAccessDay as any).validate === 'function') {
      (this.coldAccessDay as any).validate();
    }
    if(this.coldConfigDay && typeof (this.coldConfigDay as any).validate === 'function') {
      (this.coldConfigDay as any).validate();
    }
    if(this.coldDataSize && typeof (this.coldDataSize as any).validate === 'function') {
      (this.coldDataSize as any).validate();
    }
    if(this.dailyReadRequest && typeof (this.dailyReadRequest as any).validate === 'function') {
      (this.dailyReadRequest as any).validate();
    }
    if(this.dailyReadRequestDayGrowthRatio && typeof (this.dailyReadRequestDayGrowthRatio as any).validate === 'function') {
      (this.dailyReadRequestDayGrowthRatio as any).validate();
    }
    if(this.dailyWriteRequest && typeof (this.dailyWriteRequest as any).validate === 'function') {
      (this.dailyWriteRequest as any).validate();
    }
    if(this.dailyWriteRequestDayGrowthRatio && typeof (this.dailyWriteRequestDayGrowthRatio as any).validate === 'function') {
      (this.dailyWriteRequestDayGrowthRatio as any).validate();
    }
    if(this.freezeConfigDay && typeof (this.freezeConfigDay as any).validate === 'function') {
      (this.freezeConfigDay as any).validate();
    }
    if(this.freezeDataSize && typeof (this.freezeDataSize as any).validate === 'function') {
      (this.freezeDataSize as any).validate();
    }
    if(this.hotDataSize && typeof (this.hotDataSize as any).validate === 'function') {
      (this.hotDataSize as any).validate();
    }
    if(this.locality && typeof (this.locality as any).validate === 'function') {
      (this.locality as any).validate();
    }
    if(this.readRequestBalance && typeof (this.readRequestBalance as any).validate === 'function') {
      (this.readRequestBalance as any).validate();
    }
    if(this.regionBalance && typeof (this.regionBalance as any).validate === 'function') {
      (this.regionBalance as any).validate();
    }
    if(this.regionCount && typeof (this.regionCount as any).validate === 'function') {
      (this.regionCount as any).validate();
    }
    if(this.regionCountDayGrowthRatio && typeof (this.regionCountDayGrowthRatio as any).validate === 'function') {
      (this.regionCountDayGrowthRatio as any).validate();
    }
    if(this.regionServerCount && typeof (this.regionServerCount as any).validate === 'function') {
      (this.regionServerCount as any).validate();
    }
    if(this.requestBalance && typeof (this.requestBalance as any).validate === 'function') {
      (this.requestBalance as any).validate();
    }
    if(this.storeFileCount && typeof (this.storeFileCount as any).validate === 'function') {
      (this.storeFileCount as any).validate();
    }
    if(this.storeFileCountDayGrowthRatio && typeof (this.storeFileCountDayGrowthRatio as any).validate === 'function') {
      (this.storeFileCountDayGrowthRatio as any).validate();
    }
    if(this.tableSize && typeof (this.tableSize as any).validate === 'function') {
      (this.tableSize as any).validate();
    }
    if(this.tableSizeDayGrowthRatio && typeof (this.tableSizeDayGrowthRatio as any).validate === 'function') {
      (this.tableSizeDayGrowthRatio as any).validate();
    }
    if(this.warmConfigDay && typeof (this.warmConfigDay as any).validate === 'function') {
      (this.warmConfigDay as any).validate();
    }
    if(this.warmDataSize && typeof (this.warmDataSize as any).validate === 'function') {
      (this.warmDataSize as any).validate();
    }
    if(this.writeRequestBalance && typeof (this.writeRequestBalance as any).validate === 'function') {
      (this.writeRequestBalance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

