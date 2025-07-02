// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorHBaseTablesResponseBodyDataMetricsColdAccessDay } from "./ListDoctorHbaseTablesResponseBodyDataMetricsColdAccessDay";
import { ListDoctorHBaseTablesResponseBodyDataMetricsColdConfigDay } from "./ListDoctorHbaseTablesResponseBodyDataMetricsColdConfigDay";
import { ListDoctorHBaseTablesResponseBodyDataMetricsColdDataSize } from "./ListDoctorHbaseTablesResponseBodyDataMetricsColdDataSize";
import { ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequest } from "./ListDoctorHbaseTablesResponseBodyDataMetricsDailyReadRequest";
import { ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequestDayGrowthRatio } from "./ListDoctorHbaseTablesResponseBodyDataMetricsDailyReadRequestDayGrowthRatio";
import { ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequest } from "./ListDoctorHbaseTablesResponseBodyDataMetricsDailyWriteRequest";
import { ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio } from "./ListDoctorHbaseTablesResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio";
import { ListDoctorHBaseTablesResponseBodyDataMetricsFreezeConfigDay } from "./ListDoctorHbaseTablesResponseBodyDataMetricsFreezeConfigDay";
import { ListDoctorHBaseTablesResponseBodyDataMetricsFreezeDataSize } from "./ListDoctorHbaseTablesResponseBodyDataMetricsFreezeDataSize";
import { ListDoctorHBaseTablesResponseBodyDataMetricsHotDataSize } from "./ListDoctorHbaseTablesResponseBodyDataMetricsHotDataSize";
import { ListDoctorHBaseTablesResponseBodyDataMetricsLocality } from "./ListDoctorHbaseTablesResponseBodyDataMetricsLocality";
import { ListDoctorHBaseTablesResponseBodyDataMetricsReadRequestBalance } from "./ListDoctorHbaseTablesResponseBodyDataMetricsReadRequestBalance";
import { ListDoctorHBaseTablesResponseBodyDataMetricsRegionBalance } from "./ListDoctorHbaseTablesResponseBodyDataMetricsRegionBalance";
import { ListDoctorHBaseTablesResponseBodyDataMetricsRegionCount } from "./ListDoctorHbaseTablesResponseBodyDataMetricsRegionCount";
import { ListDoctorHBaseTablesResponseBodyDataMetricsRegionCountDayGrowthRatio } from "./ListDoctorHbaseTablesResponseBodyDataMetricsRegionCountDayGrowthRatio";
import { ListDoctorHBaseTablesResponseBodyDataMetricsRegionServerCount } from "./ListDoctorHbaseTablesResponseBodyDataMetricsRegionServerCount";
import { ListDoctorHBaseTablesResponseBodyDataMetricsRequestBalance } from "./ListDoctorHbaseTablesResponseBodyDataMetricsRequestBalance";
import { ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCount } from "./ListDoctorHbaseTablesResponseBodyDataMetricsStoreFileCount";
import { ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCountDayGrowthRatio } from "./ListDoctorHbaseTablesResponseBodyDataMetricsStoreFileCountDayGrowthRatio";
import { ListDoctorHBaseTablesResponseBodyDataMetricsTableSize } from "./ListDoctorHbaseTablesResponseBodyDataMetricsTableSize";
import { ListDoctorHBaseTablesResponseBodyDataMetricsTableSizeDayGrowthRatio } from "./ListDoctorHbaseTablesResponseBodyDataMetricsTableSizeDayGrowthRatio";
import { ListDoctorHBaseTablesResponseBodyDataMetricsWarmConfigDay } from "./ListDoctorHbaseTablesResponseBodyDataMetricsWarmConfigDay";
import { ListDoctorHBaseTablesResponseBodyDataMetricsWarmDataSize } from "./ListDoctorHbaseTablesResponseBodyDataMetricsWarmDataSize";
import { ListDoctorHBaseTablesResponseBodyDataMetricsWriteRequestBalance } from "./ListDoctorHbaseTablesResponseBodyDataMetricsWriteRequestBalance";


export class ListDoctorHBaseTablesResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The number of days during which the table was not accessed.
   */
  coldAccessDay?: ListDoctorHBaseTablesResponseBodyDataMetricsColdAccessDay;
  /**
   * @remarks
   * The number of consecutive days without access to data before the data is considered as very cold data.
   */
  coldConfigDay?: ListDoctorHBaseTablesResponseBodyDataMetricsColdConfigDay;
  /**
   * @remarks
   * The size of cold data.
   */
  coldDataSize?: ListDoctorHBaseTablesResponseBodyDataMetricsColdDataSize;
  /**
   * @remarks
   * The total number of read requests for the table in a day.
   */
  dailyReadRequest?: ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequest;
  /**
   * @remarks
   * The daily increment ratio of the number of read requests in a day.
   */
  dailyReadRequestDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequestDayGrowthRatio;
  /**
   * @remarks
   * The total number of write requests for the table in a day.
   */
  dailyWriteRequest?: ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequest;
  /**
   * @remarks
   * The daily increment ratio of the number of write requests in a day.
   */
  dailyWriteRequestDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio;
  /**
   * @remarks
   * The number of consecutive days without access to data before the data was considered as very cold data.
   */
  freezeConfigDay?: ListDoctorHBaseTablesResponseBodyDataMetricsFreezeConfigDay;
  /**
   * @remarks
   * The size of very cold data.
   */
  freezeDataSize?: ListDoctorHBaseTablesResponseBodyDataMetricsFreezeDataSize;
  /**
   * @remarks
   * The size of hot data.
   */
  hotDataSize?: ListDoctorHBaseTablesResponseBodyDataMetricsHotDataSize;
  /**
   * @remarks
   * The localization rate.
   */
  locality?: ListDoctorHBaseTablesResponseBodyDataMetricsLocality;
  /**
   * @remarks
   * The read balancing degree.
   */
  readRequestBalance?: ListDoctorHBaseTablesResponseBodyDataMetricsReadRequestBalance;
  /**
   * @remarks
   * The balancing degree.
   */
  regionBalance?: ListDoctorHBaseTablesResponseBodyDataMetricsRegionBalance;
  /**
   * @remarks
   * The number of regions that host the table.
   */
  regionCount?: ListDoctorHBaseTablesResponseBodyDataMetricsRegionCount;
  /**
   * @remarks
   * The daily increment ratio of the number of regions.
   */
  regionCountDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsRegionCountDayGrowthRatio;
  /**
   * @remarks
   * The number of region servers that host the table.
   */
  regionServerCount?: ListDoctorHBaseTablesResponseBodyDataMetricsRegionServerCount;
  /**
   * @remarks
   * The request balancing degree.
   */
  requestBalance?: ListDoctorHBaseTablesResponseBodyDataMetricsRequestBalance;
  /**
   * @remarks
   * The number of StoreFiles.
   */
  storeFileCount?: ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCount;
  /**
   * @remarks
   * The daily increment ratio of the number of StoreFiles.
   */
  storeFileCountDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCountDayGrowthRatio;
  /**
   * @remarks
   * The size of the table.
   */
  tableSize?: ListDoctorHBaseTablesResponseBodyDataMetricsTableSize;
  /**
   * @remarks
   * The daily increment ratio of the table size.
   */
  tableSizeDayGrowthRatio?: ListDoctorHBaseTablesResponseBodyDataMetricsTableSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of consecutive days without access to data before the data is considered as cold data.
   */
  warmConfigDay?: ListDoctorHBaseTablesResponseBodyDataMetricsWarmConfigDay;
  /**
   * @remarks
   * The size of warm data.
   */
  warmDataSize?: ListDoctorHBaseTablesResponseBodyDataMetricsWarmDataSize;
  /**
   * @remarks
   * The write balancing degree.
   */
  writeRequestBalance?: ListDoctorHBaseTablesResponseBodyDataMetricsWriteRequestBalance;
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
      coldAccessDay: ListDoctorHBaseTablesResponseBodyDataMetricsColdAccessDay,
      coldConfigDay: ListDoctorHBaseTablesResponseBodyDataMetricsColdConfigDay,
      coldDataSize: ListDoctorHBaseTablesResponseBodyDataMetricsColdDataSize,
      dailyReadRequest: ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequest,
      dailyReadRequestDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsDailyReadRequestDayGrowthRatio,
      dailyWriteRequest: ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequest,
      dailyWriteRequestDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio,
      freezeConfigDay: ListDoctorHBaseTablesResponseBodyDataMetricsFreezeConfigDay,
      freezeDataSize: ListDoctorHBaseTablesResponseBodyDataMetricsFreezeDataSize,
      hotDataSize: ListDoctorHBaseTablesResponseBodyDataMetricsHotDataSize,
      locality: ListDoctorHBaseTablesResponseBodyDataMetricsLocality,
      readRequestBalance: ListDoctorHBaseTablesResponseBodyDataMetricsReadRequestBalance,
      regionBalance: ListDoctorHBaseTablesResponseBodyDataMetricsRegionBalance,
      regionCount: ListDoctorHBaseTablesResponseBodyDataMetricsRegionCount,
      regionCountDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsRegionCountDayGrowthRatio,
      regionServerCount: ListDoctorHBaseTablesResponseBodyDataMetricsRegionServerCount,
      requestBalance: ListDoctorHBaseTablesResponseBodyDataMetricsRequestBalance,
      storeFileCount: ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCount,
      storeFileCountDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsStoreFileCountDayGrowthRatio,
      tableSize: ListDoctorHBaseTablesResponseBodyDataMetricsTableSize,
      tableSizeDayGrowthRatio: ListDoctorHBaseTablesResponseBodyDataMetricsTableSizeDayGrowthRatio,
      warmConfigDay: ListDoctorHBaseTablesResponseBodyDataMetricsWarmConfigDay,
      warmDataSize: ListDoctorHBaseTablesResponseBodyDataMetricsWarmDataSize,
      writeRequestBalance: ListDoctorHBaseTablesResponseBodyDataMetricsWriteRequestBalance,
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

