// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem extends $dara.Model {
  area?: string;
  timeStp?: string;
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

export class DescribeLiveUserBillPredictionResponseBodyBillPredictionData extends $dara.Model {
  billPredictionDataItem?: DescribeLiveUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem[];
  static names(): { [key: string]: string } {
    return {
      billPredictionDataItem: 'BillPredictionDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billPredictionDataItem: { 'type': 'array', 'itemType': DescribeLiveUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem },
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

export class DescribeLiveUserBillPredictionResponseBody extends $dara.Model {
  billPredictionData?: DescribeLiveUserBillPredictionResponseBodyBillPredictionData;
  /**
   * @remarks
   * The billing method. The following billing methods are supported:
   * 
   * - hour_flow: Pay-by-traffic on an hourly basis.
   * 
   * - day_bandwidth: Pay-by-bandwidth on a daily basis.
   * 
   * - month_95: Pay-by-monthly 95th percentile peak bandwidth.
   * 
   * - month_avg_day_bandwidth: Pay-by-monthly average of daily peak bandwidth.
   * 
   * - month_4th_day_bandwidth: Pay-by-monthly 4th peak bandwidth.
   * 
   * - month_avg_day_95: Pay-by-monthly average of daily 95th percentile peak bandwidth.
   * 
   * - month_95_night_half: Pay-by-nightly 95th percentile peak bandwidth with a 50% discount.
   * 
   * - hour_vas: Pay-for-value-added services on an hourly basis.
   * 
   * - day_count: Pay-by-daily request count.
   * 
   * @example
   * day_bandwidth
   */
  billType?: string;
  /**
   * @remarks
   * The end time of the query. The time is in UTC and follows the ISO 8601 standard.
   * Format: YYYY-MM-DDThh:mm:ssZ. The default value is the current time.
   * 
   * @example
   * 2018-10-25T10:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B95BE680-5A6A-1CAD-8AB1-09DFF5D6****
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. The time is in UTC and follows the ISO 8601 standard.
   * Format: YYYY-MM-DDThh:mm:ssZ. The default value is 00:00 on the first day of the month.
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
      billPredictionData: DescribeLiveUserBillPredictionResponseBodyBillPredictionData,
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

