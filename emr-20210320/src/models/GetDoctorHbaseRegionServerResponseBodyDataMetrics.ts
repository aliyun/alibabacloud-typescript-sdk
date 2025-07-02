// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHBaseRegionServerResponseBodyDataMetricsAvgGc } from "./GetDoctorHbaseRegionServerResponseBodyDataMetricsAvgGc";
import { GetDoctorHBaseRegionServerResponseBodyDataMetricsCacheRatio } from "./GetDoctorHbaseRegionServerResponseBodyDataMetricsCacheRatio";
import { GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequest } from "./GetDoctorHbaseRegionServerResponseBodyDataMetricsDailyReadRequest";
import { GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequestDayGrowthRatio } from "./GetDoctorHbaseRegionServerResponseBodyDataMetricsDailyReadRequestDayGrowthRatio";
import { GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequest } from "./GetDoctorHbaseRegionServerResponseBodyDataMetricsDailyWriteRequest";
import { GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio } from "./GetDoctorHbaseRegionServerResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio";
import { GetDoctorHBaseRegionServerResponseBodyDataMetricsRegionCount } from "./GetDoctorHbaseRegionServerResponseBodyDataMetricsRegionCount";
import { GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalReadRequest } from "./GetDoctorHbaseRegionServerResponseBodyDataMetricsTotalReadRequest";
import { GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalRequest } from "./GetDoctorHbaseRegionServerResponseBodyDataMetricsTotalRequest";
import { GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalWriteRequest } from "./GetDoctorHbaseRegionServerResponseBodyDataMetricsTotalWriteRequest";


export class GetDoctorHBaseRegionServerResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The average garbage collection (GC) duration.
   */
  avgGc?: GetDoctorHBaseRegionServerResponseBodyDataMetricsAvgGc;
  /**
   * @remarks
   * The cache hit ratio.
   */
  cacheRatio?: GetDoctorHBaseRegionServerResponseBodyDataMetricsCacheRatio;
  /**
   * @remarks
   * The number of daily read requests.
   */
  dailyReadRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequest;
  /**
   * @remarks
   * The day-to-day increment rate of the number of daily read requests.
   */
  dailyReadRequestDayGrowthRatio?: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequestDayGrowthRatio;
  /**
   * @remarks
   * The number of daily write requests.
   */
  dailyWriteRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequest;
  /**
   * @remarks
   * The day-to-day increment rate of the number of daily write requests.
   */
  dailyWriteRequestDayGrowthRatio?: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio;
  /**
   * @remarks
   * The number of regions.
   */
  regionCount?: GetDoctorHBaseRegionServerResponseBodyDataMetricsRegionCount;
  /**
   * @remarks
   * The cumulative number of read requests.
   */
  totalReadRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalReadRequest;
  /**
   * @remarks
   * The cumulative number of total requests.
   */
  totalRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalRequest;
  /**
   * @remarks
   * The cumulative number of write requests.
   */
  totalWriteRequest?: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalWriteRequest;
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
      avgGc: GetDoctorHBaseRegionServerResponseBodyDataMetricsAvgGc,
      cacheRatio: GetDoctorHBaseRegionServerResponseBodyDataMetricsCacheRatio,
      dailyReadRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequest,
      dailyReadRequestDayGrowthRatio: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyReadRequestDayGrowthRatio,
      dailyWriteRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequest,
      dailyWriteRequestDayGrowthRatio: GetDoctorHBaseRegionServerResponseBodyDataMetricsDailyWriteRequestDayGrowthRatio,
      regionCount: GetDoctorHBaseRegionServerResponseBodyDataMetricsRegionCount,
      totalReadRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalReadRequest,
      totalRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalRequest,
      totalWriteRequest: GetDoctorHBaseRegionServerResponseBodyDataMetricsTotalWriteRequest,
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

