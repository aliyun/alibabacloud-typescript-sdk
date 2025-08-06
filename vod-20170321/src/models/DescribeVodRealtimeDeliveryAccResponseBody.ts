// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccDataAccData extends $dara.Model {
  /**
   * @remarks
   * The number of failed real-time log deliveries.
   * 
   * @example
   * 1
   */
  failedNum?: number;
  /**
   * @remarks
   * The number of successful real-time log deliveries.
   * 
   * @example
   * 1
   */
  successNum?: number;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2016-10-20T04:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      failedNum: 'FailedNum',
      successNum: 'SuccessNum',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedNum: 'number',
      successNum: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccData extends $dara.Model {
  accData?: DescribeVodRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccDataAccData[];
  static names(): { [key: string]: string } {
    return {
      accData: 'AccData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accData: { 'type': 'array', 'itemType': DescribeVodRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccDataAccData },
    };
  }

  validate() {
    if(Array.isArray(this.accData)) {
      $dara.Model.validateArray(this.accData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodRealtimeDeliveryAccResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about real-time log deliveries.
   */
  realTimeDeliveryAccData?: DescribeVodRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8AA0364-0FDB-4AD5-****-D69FAB8924ED
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      realTimeDeliveryAccData: 'RealTimeDeliveryAccData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeDeliveryAccData: DescribeVodRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.realTimeDeliveryAccData && typeof (this.realTimeDeliveryAccData as any).validate === 'function') {
      (this.realTimeDeliveryAccData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

