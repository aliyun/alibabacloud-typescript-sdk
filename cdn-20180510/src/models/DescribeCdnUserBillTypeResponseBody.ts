// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem extends $dara.Model {
  /**
   * @remarks
   * The metering method.
   * 
   * > If the metering method is suffixed with \\*\\*_overseas\\*\\*, the billable region is outside the Chinese mainland. For example, "BillType": "month_avg_day_bandwidth_overseas" indicates that the metering method is pay by average daily peak bandwidth per month in a billable region outside the Chinese mainland.
   * 
   * Valid values:
   * 
   * *   hour_flow: pay by hourly data transfer
   * *   day_bandwidth: pay by daily bandwidth
   * *   month_95: pay by monthly 95th percentile bandwidth
   * *   month_avg_day_bandwidth: pay by average daily peak bandwidth per month
   * *   month_4th_day_bandwidth: pay by monthly 4th peak bandwidth
   * *   month_avg_day_95: pay by average daily 95th percentile bandwidth per month
   * *   month_95_night_half: pay by 95th percentile bandwidth with 50% off from 00:00 to 08:00
   * *   hour_vas: pay by value-added services per hour
   * *   quic_hour_count: pay by hourly QUIC requests
   * *   day_count: pay by daily requests
   * *   hour_count: pay by hourly requests
   * *   day_95: pay by daily 95th percentile bandwidth
   * 
   * @example
   * month_avg_day_bandwidth_overseas
   */
  billType?: string;
  /**
   * @remarks
   * The billing cycle.
   * 
   * @example
   * month
   */
  billingCycle?: string;
  /**
   * @remarks
   * The dimension. Valid values:
   * 
   * *   flow: traffic and bandwidth
   * *   vas: value-added services (HTTPS and requests for dynamic content)
   * *   quic: the number of QUIC requests
   * *   websocket: the WebSocket communications protocol
   * *   rtlog2sls: log entries delivered to Log Service in real time
   * *   stationflow: traffic over the internal network
   * 
   * @example
   * flow
   */
  dimension?: string;
  /**
   * @remarks
   * The time when the metering method ended.
   * 
   * @example
   * 2018-10-31T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the product.
   * 
   * @example
   * cdn
   */
  product?: string;
  /**
   * @remarks
   * The time when the metering method started.
   * 
   * @example
   * 2018-10-30T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      billType: 'BillType',
      billingCycle: 'BillingCycle',
      dimension: 'Dimension',
      endTime: 'EndTime',
      product: 'Product',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billType: 'string',
      billingCycle: 'string',
      dimension: 'string',
      endTime: 'string',
      product: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillTypeResponseBodyBillTypeData extends $dara.Model {
  billTypeDataItem?: DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem[];
  static names(): { [key: string]: string } {
    return {
      billTypeDataItem: 'BillTypeDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTypeDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.billTypeDataItem)) {
      $dara.Model.validateArray(this.billTypeDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the metering methods returned.
   */
  billTypeData?: DescribeCdnUserBillTypeResponseBodyBillTypeData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C370DAF1-C838-4288-A1A0-9A87633D248E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      billTypeData: 'BillTypeData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTypeData: DescribeCdnUserBillTypeResponseBodyBillTypeData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.billTypeData && typeof (this.billTypeData as any).validate === 'function') {
      (this.billTypeData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

