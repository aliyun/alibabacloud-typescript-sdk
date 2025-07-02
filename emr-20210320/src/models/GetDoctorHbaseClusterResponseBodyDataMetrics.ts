// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHBaseClusterResponseBodyDataMetricsAvgLoad } from "./GetDoctorHbaseClusterResponseBodyDataMetricsAvgLoad";
import { GetDoctorHBaseClusterResponseBodyDataMetricsDailyReadRequest } from "./GetDoctorHbaseClusterResponseBodyDataMetricsDailyReadRequest";
import { GetDoctorHBaseClusterResponseBodyDataMetricsDailyWriteRequest } from "./GetDoctorHbaseClusterResponseBodyDataMetricsDailyWriteRequest";
import { GetDoctorHBaseClusterResponseBodyDataMetricsMemHeap } from "./GetDoctorHbaseClusterResponseBodyDataMetricsMemHeap";
import { GetDoctorHBaseClusterResponseBodyDataMetricsNormalAvgLoad } from "./GetDoctorHbaseClusterResponseBodyDataMetricsNormalAvgLoad";
import { GetDoctorHBaseClusterResponseBodyDataMetricsRegionBalance } from "./GetDoctorHbaseClusterResponseBodyDataMetricsRegionBalance";
import { GetDoctorHBaseClusterResponseBodyDataMetricsRegionCount } from "./GetDoctorHbaseClusterResponseBodyDataMetricsRegionCount";
import { GetDoctorHBaseClusterResponseBodyDataMetricsRegionServerCount } from "./GetDoctorHbaseClusterResponseBodyDataMetricsRegionServerCount";
import { GetDoctorHBaseClusterResponseBodyDataMetricsStoreFileCount } from "./GetDoctorHbaseClusterResponseBodyDataMetricsStoreFileCount";
import { GetDoctorHBaseClusterResponseBodyDataMetricsTableCount } from "./GetDoctorHbaseClusterResponseBodyDataMetricsTableCount";
import { GetDoctorHBaseClusterResponseBodyDataMetricsTotalDataSize } from "./GetDoctorHbaseClusterResponseBodyDataMetricsTotalDataSize";
import { GetDoctorHBaseClusterResponseBodyDataMetricsTotalReadRequest } from "./GetDoctorHbaseClusterResponseBodyDataMetricsTotalReadRequest";
import { GetDoctorHBaseClusterResponseBodyDataMetricsTotalRequest } from "./GetDoctorHbaseClusterResponseBodyDataMetricsTotalRequest";
import { GetDoctorHBaseClusterResponseBodyDataMetricsTotalWriteRequest } from "./GetDoctorHbaseClusterResponseBodyDataMetricsTotalWriteRequest";


export class GetDoctorHBaseClusterResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The average load.
   */
  avgLoad?: GetDoctorHBaseClusterResponseBodyDataMetricsAvgLoad;
  /**
   * @remarks
   * The number of read requests in a day.
   */
  dailyReadRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsDailyReadRequest;
  /**
   * @remarks
   * The number of write requests in a day.
   */
  dailyWriteRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsDailyWriteRequest;
  /**
   * @remarks
   * The memory size.
   */
  memHeap?: GetDoctorHBaseClusterResponseBodyDataMetricsMemHeap;
  /**
   * @remarks
   * The normal average load.
   */
  normalAvgLoad?: GetDoctorHBaseClusterResponseBodyDataMetricsNormalAvgLoad;
  /**
   * @remarks
   * The region balance degree.
   */
  regionBalance?: GetDoctorHBaseClusterResponseBodyDataMetricsRegionBalance;
  /**
   * @remarks
   * The number of regions.
   */
  regionCount?: GetDoctorHBaseClusterResponseBodyDataMetricsRegionCount;
  /**
   * @remarks
   * The number of region servers.
   */
  regionServerCount?: GetDoctorHBaseClusterResponseBodyDataMetricsRegionServerCount;
  /**
   * @remarks
   * The number of StoreFiles.
   */
  storeFileCount?: GetDoctorHBaseClusterResponseBodyDataMetricsStoreFileCount;
  /**
   * @remarks
   * The number of tables.
   */
  tableCount?: GetDoctorHBaseClusterResponseBodyDataMetricsTableCount;
  /**
   * @remarks
   * The size of the cluster.
   */
  totalDataSize?: GetDoctorHBaseClusterResponseBodyDataMetricsTotalDataSize;
  /**
   * @remarks
   * The total number of read requests.
   */
  totalReadRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsTotalReadRequest;
  /**
   * @remarks
   * The total number of requests in the cluster.
   */
  totalRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsTotalRequest;
  /**
   * @remarks
   * The total number of write requests.
   */
  totalWriteRequest?: GetDoctorHBaseClusterResponseBodyDataMetricsTotalWriteRequest;
  static names(): { [key: string]: string } {
    return {
      avgLoad: 'AvgLoad',
      dailyReadRequest: 'DailyReadRequest',
      dailyWriteRequest: 'DailyWriteRequest',
      memHeap: 'MemHeap',
      normalAvgLoad: 'NormalAvgLoad',
      regionBalance: 'RegionBalance',
      regionCount: 'RegionCount',
      regionServerCount: 'RegionServerCount',
      storeFileCount: 'StoreFileCount',
      tableCount: 'TableCount',
      totalDataSize: 'TotalDataSize',
      totalReadRequest: 'TotalReadRequest',
      totalRequest: 'TotalRequest',
      totalWriteRequest: 'TotalWriteRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgLoad: GetDoctorHBaseClusterResponseBodyDataMetricsAvgLoad,
      dailyReadRequest: GetDoctorHBaseClusterResponseBodyDataMetricsDailyReadRequest,
      dailyWriteRequest: GetDoctorHBaseClusterResponseBodyDataMetricsDailyWriteRequest,
      memHeap: GetDoctorHBaseClusterResponseBodyDataMetricsMemHeap,
      normalAvgLoad: GetDoctorHBaseClusterResponseBodyDataMetricsNormalAvgLoad,
      regionBalance: GetDoctorHBaseClusterResponseBodyDataMetricsRegionBalance,
      regionCount: GetDoctorHBaseClusterResponseBodyDataMetricsRegionCount,
      regionServerCount: GetDoctorHBaseClusterResponseBodyDataMetricsRegionServerCount,
      storeFileCount: GetDoctorHBaseClusterResponseBodyDataMetricsStoreFileCount,
      tableCount: GetDoctorHBaseClusterResponseBodyDataMetricsTableCount,
      totalDataSize: GetDoctorHBaseClusterResponseBodyDataMetricsTotalDataSize,
      totalReadRequest: GetDoctorHBaseClusterResponseBodyDataMetricsTotalReadRequest,
      totalRequest: GetDoctorHBaseClusterResponseBodyDataMetricsTotalRequest,
      totalWriteRequest: GetDoctorHBaseClusterResponseBodyDataMetricsTotalWriteRequest,
    };
  }

  validate() {
    if(this.avgLoad && typeof (this.avgLoad as any).validate === 'function') {
      (this.avgLoad as any).validate();
    }
    if(this.dailyReadRequest && typeof (this.dailyReadRequest as any).validate === 'function') {
      (this.dailyReadRequest as any).validate();
    }
    if(this.dailyWriteRequest && typeof (this.dailyWriteRequest as any).validate === 'function') {
      (this.dailyWriteRequest as any).validate();
    }
    if(this.memHeap && typeof (this.memHeap as any).validate === 'function') {
      (this.memHeap as any).validate();
    }
    if(this.normalAvgLoad && typeof (this.normalAvgLoad as any).validate === 'function') {
      (this.normalAvgLoad as any).validate();
    }
    if(this.regionBalance && typeof (this.regionBalance as any).validate === 'function') {
      (this.regionBalance as any).validate();
    }
    if(this.regionCount && typeof (this.regionCount as any).validate === 'function') {
      (this.regionCount as any).validate();
    }
    if(this.regionServerCount && typeof (this.regionServerCount as any).validate === 'function') {
      (this.regionServerCount as any).validate();
    }
    if(this.storeFileCount && typeof (this.storeFileCount as any).validate === 'function') {
      (this.storeFileCount as any).validate();
    }
    if(this.tableCount && typeof (this.tableCount as any).validate === 'function') {
      (this.tableCount as any).validate();
    }
    if(this.totalDataSize && typeof (this.totalDataSize as any).validate === 'function') {
      (this.totalDataSize as any).validate();
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

