// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem extends $dara.Model {
  /**
   * @remarks
   * The billable region.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The time when the value used as the estimated value is generated. This parameter is returned only if the metering method is pay by 95th percentile, pay by 95th percentile bandwidth with 50% off from 00:00 to 08:00, or pay by 4th peak bandwidth per month.
   * 
   * @example
   * 2018-10-15T16:00:00Z
   */
  timeStp?: string;
  /**
   * @remarks
   * The estimated value.
   * 
   * @example
   * 10000
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      timeStp: 'TimeStp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      timeStp: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillPredictionResponseBodyBillPredictionData extends $dara.Model {
  billPredictionDataItem?: DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem[];
  static names(): { [key: string]: string } {
    return {
      billPredictionDataItem: 'BillPredictionDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billPredictionDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.billPredictionDataItem)) {
      $dara.Model.validateArray(this.billPredictionDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillPredictionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The estimated bill data.
   */
  billPredictionData?: DescribeCdnUserBillPredictionResponseBodyBillPredictionData;
  /**
   * @remarks
   * The metering method.
   * 
   * > If the metering method ends with _overseas, the billable region is outside the Chinese mainland. For example, BillType": "month_avg_day_bandwidth_overseas specifies a billable region outside the Chinese mainland and that the metering method is pay by daily peak bandwidth per month.
   * 
   * Valid values:
   * 
   * *   hour_flow: pay by hourly data transfer
   * *   day_bandwidth: pay by daily bandwidth
   * *   month_95: pay by monthly 95th percentile bandwidth.
   * *   month_avg_day_bandwidth: pay by average daily peak bandwidth per month
   * *   month_4th_day_bandwidth: pay by monthly 4th peak bandwidth
   * *   month_avg_day_95: pay by average daily 95th percentile bandwidth per month
   * *   month_95_night_half: pay by 95th percentile bandwidth with 50% off from 00:00 to 08:00.
   * *   hour_vas: pay by value-added services per hour
   * *   day_count: pay by daily requests
   * 
   * @example
   * month_95
   */
  billType?: string;
  /**
   * @remarks
   * The end time of the estimation.
   * 
   * @example
   * 2018-10-25T10:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the estimation.
   * 
   * @example
   * 2018-09-30T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      billPredictionData: 'BillPredictionData',
      billType: 'BillType',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billPredictionData: DescribeCdnUserBillPredictionResponseBodyBillPredictionData,
      billType: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.billPredictionData && typeof (this.billPredictionData as any).validate === 'function') {
      (this.billPredictionData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

