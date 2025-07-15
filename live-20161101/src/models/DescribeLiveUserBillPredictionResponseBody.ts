// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem extends $dara.Model {
  /**
   * @remarks
   * The billable region. Valid values:
   * 
   * *   CN: Chinese mainland
   * *   OverSeas: countries and regions outside the Chinese mainland
   * *   AP1: Asia Pacific 1, including Hong Kong (China), Macao (China), Taiwan (China), Japan, and other Southeast Asia countries and regions except Vietnam and Indonesia
   * *   AP2: Asia Pacific 2, including Indonesia, South Korea, and Vietnam
   * *   AP3: Asia Pacific 3, including Australia and New Zealand
   * *   NA: North America, including US and Canada
   * *   SA: South America, specifically meaning Brazil
   * *   EU: Europe, including Ukraine, UK, France, Netherlands, Spain, Italy, Sweden, and Germany
   * *   MEAA: Middle East and Africa, including South Africa, Oman, UAE, and Kuwait
   * 
   * By default, data of all regions is aggregated and returned.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The time at which the estimated value occurs. This parameter is returned only if the metering method is pay by 95th percentile bandwidth, pay by 95th percentile bandwidth with 50% off from 00:00 to 08:00, or pay by 4th peak bandwidth per month.
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
  /**
   * @remarks
   * The estimated bill data.
   */
  billPredictionData?: DescribeLiveUserBillPredictionResponseBodyBillPredictionData;
  /**
   * @remarks
   * The metering method. Valid values:
   * 
   * *   hour_flow: pay by hourly data transfer
   * *   day_bandwidth: pay by daily bandwidth
   * *   month_95: pay by monthly 95th percentile bandwidth
   * *   month_avg_day_bandwidth: pay by average daily peak bandwidth per month
   * *   month_4th_day_bandwidth: pay by 4th peak bandwidth per month
   * *   month_avg_day_95: pay by average daily 95th percentile bandwidth per month
   * *   month_95_night_half: pay by 95th percentile bandwidth with 50% off from 00:00 to 08:00
   * *   hour_vas: pay by value-added services per hour
   * *   day_count: pay by daily requests
   * 
   * @example
   * day_bandwidth
   */
  billType?: string;
  /**
   * @remarks
   * The end time. If you do not specify the request parameter EndTime, the end time is the current time by default. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
   * The start time. If you do not specify the request parameter StartTime, the start time is 00:00 on the first day of the month by default. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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

