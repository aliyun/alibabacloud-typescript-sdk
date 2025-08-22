// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem extends $dara.Model {
  /**
   * @remarks
   * The metering method. Valid values:
   * 
   * *   **hour_flow**: pay by hourly traffic
   * *   **day_bandwidth**: pay by daily bandwidth
   * *   **month_95**: pay by monthly 95th percentile
   * *   **month_avg_day_bandwidth**: pay by average daily peak bandwidth per month
   * *   **month_4th_day_bandwidth**: pay by 4th peak bandwidth per month
   * *   **month_avg_day_95**: pay by average daily 95th percentile per month
   * *   **month_95_night_half**: pay by 95th percentile (50% off during nighttime)
   * *   **hour_vas**: pay by value-added service per month
   * *   **quic_hour_count**: pay by QUIC request per hour
   * *   **hour_count**: pay by request per hour
   * *   **rtlog_count_day**: pay by the number of real-time logs per day
   * 
   * @example
   * month_avg_day_bandwidth_overseas
   */
  billType?: string;
  /**
   * @remarks
   * The metering cycle.
   * 
   * @example
   * month
   */
  billingCycle?: string;
  /**
   * @remarks
   * The dimension. Valid values:
   * 
   * *   **flow**: network traffic and bandwidth
   * *   **vas**: value-added services (HTTPS and requests for dynamic content)
   * *   **websocket**: WebSocket
   * *   **quic**: QUIC requests
   * *   **rtlog2sls**: log entries delivered to Log Service in real time
   * 
   * @example
   * flow
   */
  dimension?: string;
  /**
   * @remarks
   * The time when the metering method ends.
   * 
   * @example
   * 2018-10-31T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * dcdn
   */
  product?: string;
  /**
   * @remarks
   * The time when the metering method takes effect.
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

export class DescribeDcdnUserBillTypeResponseBodyBillTypeData extends $dara.Model {
  billTypeDataItem?: DescribeDcdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem[];
  static names(): { [key: string]: string } {
    return {
      billTypeDataItem: 'BillTypeDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTypeDataItem: { 'type': 'array', 'itemType': DescribeDcdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem },
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

export class DescribeDcdnUserBillTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the metering method.
   */
  billTypeData?: DescribeDcdnUserBillTypeResponseBodyBillTypeData;
  /**
   * @remarks
   * The request ID.
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
      billTypeData: DescribeDcdnUserBillTypeResponseBodyBillTypeData,
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

