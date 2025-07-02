// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHBaseRegionResponseBodyDataMetricsDailyReadRequest } from "./GetDoctorHbaseRegionResponseBodyDataMetricsDailyReadRequest";
import { GetDoctorHBaseRegionResponseBodyDataMetricsDailyWriteRequest } from "./GetDoctorHbaseRegionResponseBodyDataMetricsDailyWriteRequest";
import { GetDoctorHBaseRegionResponseBodyDataMetricsStoreFileCount } from "./GetDoctorHbaseRegionResponseBodyDataMetricsStoreFileCount";
import { GetDoctorHBaseRegionResponseBodyDataMetricsTotalReadRequest } from "./GetDoctorHbaseRegionResponseBodyDataMetricsTotalReadRequest";
import { GetDoctorHBaseRegionResponseBodyDataMetricsTotalWriteRequest } from "./GetDoctorHbaseRegionResponseBodyDataMetricsTotalWriteRequest";


export class GetDoctorHBaseRegionResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * Number of read requests in a single day.
   */
  dailyReadRequest?: GetDoctorHBaseRegionResponseBodyDataMetricsDailyReadRequest;
  /**
   * @remarks
   * Number of write requests in a single day.
   */
  dailyWriteRequest?: GetDoctorHBaseRegionResponseBodyDataMetricsDailyWriteRequest;
  /**
   * @remarks
   * Store file count.
   */
  storeFileCount?: GetDoctorHBaseRegionResponseBodyDataMetricsStoreFileCount;
  /**
   * @remarks
   * Total read request count
   */
  totalReadRequest?: GetDoctorHBaseRegionResponseBodyDataMetricsTotalReadRequest;
  /**
   * @remarks
   * Total write request count
   */
  totalWriteRequest?: GetDoctorHBaseRegionResponseBodyDataMetricsTotalWriteRequest;
  static names(): { [key: string]: string } {
    return {
      dailyReadRequest: 'DailyReadRequest',
      dailyWriteRequest: 'DailyWriteRequest',
      storeFileCount: 'StoreFileCount',
      totalReadRequest: 'TotalReadRequest',
      totalWriteRequest: 'TotalWriteRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyReadRequest: GetDoctorHBaseRegionResponseBodyDataMetricsDailyReadRequest,
      dailyWriteRequest: GetDoctorHBaseRegionResponseBodyDataMetricsDailyWriteRequest,
      storeFileCount: GetDoctorHBaseRegionResponseBodyDataMetricsStoreFileCount,
      totalReadRequest: GetDoctorHBaseRegionResponseBodyDataMetricsTotalReadRequest,
      totalWriteRequest: GetDoctorHBaseRegionResponseBodyDataMetricsTotalWriteRequest,
    };
  }

  validate() {
    if(this.dailyReadRequest && typeof (this.dailyReadRequest as any).validate === 'function') {
      (this.dailyReadRequest as any).validate();
    }
    if(this.dailyWriteRequest && typeof (this.dailyWriteRequest as any).validate === 'function') {
      (this.dailyWriteRequest as any).validate();
    }
    if(this.storeFileCount && typeof (this.storeFileCount as any).validate === 'function') {
      (this.storeFileCount as any).validate();
    }
    if(this.totalReadRequest && typeof (this.totalReadRequest as any).validate === 'function') {
      (this.totalReadRequest as any).validate();
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

