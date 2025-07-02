// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorHBaseRegionServersResponseBodyDataMetricsAvgGc } from "./ListDoctorHbaseRegionServersResponseBodyDataMetricsAvgGc";
import { ListDoctorHBaseRegionServersResponseBodyDataMetricsCacheRatio } from "./ListDoctorHbaseRegionServersResponseBodyDataMetricsCacheRatio";
import { ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequest } from "./ListDoctorHbaseRegionServersResponseBodyDataMetricsDailyReadRequest";
import { ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequestDayGrowthRatio } from "./ListDoctorHbaseRegionServersResponseBodyDataMetricsDailyReadRequestDayGrowthRatio";
import { ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequest } from "./ListDoctorHbaseRegionServersResponseBodyDataMetricsDailyWriteRequest";
import { ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio } from "./ListDoctorHbaseRegionServersResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio";
import { ListDoctorHBaseRegionServersResponseBodyDataMetricsRegionCount } from "./ListDoctorHbaseRegionServersResponseBodyDataMetricsRegionCount";
import { ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalReadRequest } from "./ListDoctorHbaseRegionServersResponseBodyDataMetricsTotalReadRequest";
import { ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalRequest } from "./ListDoctorHbaseRegionServersResponseBodyDataMetricsTotalRequest";
import { ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalWriteRequest } from "./ListDoctorHbaseRegionServersResponseBodyDataMetricsTotalWriteRequest";


export class ListDoctorHBaseRegionServersResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The average garbage collection (GC) duration.
   */
  avgGc?: ListDoctorHBaseRegionServersResponseBodyDataMetricsAvgGc;
  /**
   * @remarks
   * The cache hit ratio.
   */
  cacheRatio?: ListDoctorHBaseRegionServersResponseBodyDataMetricsCacheRatio;
  /**
   * @remarks
   * The number of daily read requests.
   */
  dailyReadRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequest;
  /**
   * @remarks
   * The growth rate of the number of daily read requests.
   */
  dailyReadRequestDayGrowthRatio?: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequestDayGrowthRatio;
  /**
   * @remarks
   * The number of daily write requests.
   */
  dailyWriteRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequest;
  /**
   * @remarks
   * The growth rate of the number of daily write requests.
   */
  dailyWriteRequestDayGrowthRatio?: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio;
  /**
   * @remarks
   * The number of regions.
   */
  regionCount?: ListDoctorHBaseRegionServersResponseBodyDataMetricsRegionCount;
  /**
   * @remarks
   * The cumulative number of read requests.
   */
  totalReadRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalReadRequest;
  /**
   * @remarks
   * The cumulative number of all requests.
   */
  totalRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalRequest;
  /**
   * @remarks
   * The cumulative number of write requests.
   */
  totalWriteRequest?: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalWriteRequest;
  static names(): { [key: string]: string } {
    return {
      avgGc: 'AvgGc',
      cacheRatio: 'CacheRatio',
      dailyReadRequest: 'DailyReadRequest',
      dailyReadRequestDayGrowthRatio: 'DailyReadRequestDayGrowthRatio',
      dailyWriteRequest: 'DailyWriteRequest',
      dailyWriteRequestDayGrowthRatio: 'DailyWriteRequestDayGrowthRatio',
      regionCount: 'RegionCount',
      totalReadRequest: 'TotalReadRequest',
      totalRequest: 'TotalRequest',
      totalWriteRequest: 'TotalWriteRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgGc: ListDoctorHBaseRegionServersResponseBodyDataMetricsAvgGc,
      cacheRatio: ListDoctorHBaseRegionServersResponseBodyDataMetricsCacheRatio,
      dailyReadRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequest,
      dailyReadRequestDayGrowthRatio: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyReadRequestDayGrowthRatio,
      dailyWriteRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequest,
      dailyWriteRequestDayGrowthRatio: ListDoctorHBaseRegionServersResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio,
      regionCount: ListDoctorHBaseRegionServersResponseBodyDataMetricsRegionCount,
      totalReadRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalReadRequest,
      totalRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalRequest,
      totalWriteRequest: ListDoctorHBaseRegionServersResponseBodyDataMetricsTotalWriteRequest,
    };
  }

  validate() {
    if(this.avgGc && typeof (this.avgGc as any).validate === 'function') {
      (this.avgGc as any).validate();
    }
    if(this.cacheRatio && typeof (this.cacheRatio as any).validate === 'function') {
      (this.cacheRatio as any).validate();
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
    if(this.regionCount && typeof (this.regionCount as any).validate === 'function') {
      (this.regionCount as any).validate();
    }
    if(this.totalReadRequest && typeof (this.totalReadRequest as any).validate === 'function') {
      (this.totalReadRequest as any).validate();
    }
    if(this.totalRequest && typeof (this.totalRequest as any).validate === 'function') {
      (this.totalRequest as any).validate();
    }
    if(this.totalWriteRequest && typeof (this.totalWriteRequest as any).validate === 'function') {
      (this.totalWriteRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

