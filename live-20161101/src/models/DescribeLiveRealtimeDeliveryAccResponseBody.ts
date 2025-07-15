// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccDataAccData extends $dara.Model {
  /**
   * @remarks
   * The number of failed real-time log deliveries.
   * 
   * @example
   * 0
   */
  failedNum?: number;
  /**
   * @remarks
   * The number of successful real-time log deliveries.
   * 
   * @example
   * 321321
   */
  successNum?: number;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2015-12-10T20:00:00Z
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

export class DescribeLiveRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccData extends $dara.Model {
  accData?: DescribeLiveRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccDataAccData[];
  static names(): { [key: string]: string } {
    return {
      accData: 'AccData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accData: { 'type': 'array', 'itemType': DescribeLiveRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccDataAccData },
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

export class DescribeLiveRealtimeDeliveryAccResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about real-time log deliveries.
   */
  realTimeDeliveryAccData?: DescribeLiveRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 684306D2-2511-4977-991D-CE97E91FD7C0
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
      realTimeDeliveryAccData: DescribeLiveRealtimeDeliveryAccResponseBodyRealTimeDeliveryAccData,
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

